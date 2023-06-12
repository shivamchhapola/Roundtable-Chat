import React, { useEffect, useState } from 'react';
import { MdAdd, MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {
  addRole,
  delMember,
  editMember,
  getGroupMenuData,
  getMemberData,
  getRole,
} from '../../../utils/group';
import { changeGroupRRM } from '../../../slices/groupSlice';

export function MembersList() {
  const colorMap = {
    1: {
      btn: 'btn-success',
      input: 'input-success',
      bg: 'bg-success',
      text: 'text-success-content',
    },
    2: {
      btn: 'btn-info',
      input: 'input-info',
      bg: 'bg-info',
      text: 'text-info-content',
    },
    3: {
      btn: 'btn-secondary',
      input: 'input-secondary',
      bg: 'bg-secondary',
      text: 'text-secondary-content',
    },
    4: {
      btn: 'btn-accent',
      input: 'input-accent',
      bg: 'bg-accent',
      text: 'text-accent-content',
    },
    5: {
      btn: 'btn-error',
      input: 'input-error',
      bg: 'bg-error',
      text: 'text-error-content',
    },
  };
  const dispatch = useDispatch();

  const groupid = useSelector((state) => state.group.selectedGroup);
  const groupRRM = useSelector((state) => state.group.groupRRM);
  const member = useSelector((state) => state.group.member);
  const [myRole, setMyRole] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [delMode, setDelMode] = useState(false);
  const [memberids, setMemberids] = useState([]);
  const [error, setError] = useState('');
  const [eid, setEId] = useState('');
  const [erole, setERole] = useState('');
  const [did, setDId] = useState('');

  const GetMyRole = async () => {
    return await getRole(member.roleId)
      .then((res) => {
        return setMyRole(res.data);
      })
      .catch((err) => console.log(err));
  };

  const onEditMember = async () => {
    reset();
    try {
      if (!eid || !erole || !member) return;
      let data = {
        id: eid,
        role: erole,
        memberid: member.memberId,
      };
      return await editMember(data).then(async (res) => {
        setMemberids([]);
        await getGroupMenuData(groupid).then((res) => {
          return dispatch(changeGroupRRM(res.GroupRRM));
        });
      });
    } catch (error) {
      return setError(error.response.data);
    }
  };

  const OnDelMember = async () => {
    reset();
    try {
      if (!did || !groupid || !member) return;
      let data = {
        id: did,
        gid: groupid,
        memberid: member.memberId,
      };
      return await delMember(data).then(async (res) => {
        setMemberids([]);
        await getGroupMenuData(groupid).then((res) => {
          return dispatch(changeGroupRRM(res.GroupRRM));
        });
      });
    } catch (error) {
      return setError(error.response.data);
    }
  };

  const onEditMode = (id, role) => {
    reset();
    setEId(id);
    setERole(role);
    setEditMode(true);
  };

  const onDelMode = (id) => {
    reset();
    setDId(id);
    setDelMode(true);
  };

  const reset = () => {
    setDId('');
    setEId('');
    setERole('');
    setEditMode(false);
    setDelMode(false);
    setError('');
  };

  useEffect(() => {
    if (member.roleId) GetMyRole();
  }, [member]);

  useEffect(() => {
    setMemberids(groupRRM.members);
  }, [groupRRM]);

  return (
    <div>
      <input type="checkbox" id="membersList" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-h-[85vh] overflow-y-auto scrollbar-hide relative w-[26rem] min-h-[60vh]">
          <label
            onClick={(e) => {
              reset();
            }}
            htmlFor="membersList"
            className="btn btn-sm btn-circle absolute right-2 top-2 btn-error z-50">
            ✕
          </label>
          <div className="text-lg font-semibold mt-2">Members List</div>
          <div className="divider divider-vertical my-2"></div>
          <div className="w-full flex flex-col overflow-y-auto scrollbar-hide max-h-[55vh] text-center justify-start items-center gap-2 relative">
            {memberids.map((id, i) => {
              return (
                <MemberItem
                  id={id}
                  colorMap={colorMap}
                  key={i}
                  i={i}
                  editable={myRole.tier >= 5 ? true : false}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function RolesDropDown({ colorMap, setTier, tier }) {
  const onTierChange = (e, v) => {
    e.preventDefault();
    setTier(v);
  };

  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        className={`mx-2 w-[6rem] mb-1 ${colorMap[tier]['btn']} btn`}>
        Tier {tier}
      </div>
      <ul
        tabIndex={0}
        className={`dropdown-content menu p-2 shadow rounded-box w-[7rem] bg-neutral gap-1 [&>li]:h-8`}>
        {[1, 2, 3, 4].map((v) => {
          return (
            <li
              key={v}
              onClick={(e) => {
                onTierChange(e, v);
              }}>
              <div
                className={`h-full ${colorMap[v]['bg']} ${colorMap[v]['text']}`}>
                Tier {v}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function MemberItem({ id, colorMap, i, editable }) {
  const [role, setRole] = useState({});
  const [member, setMember] = useState({});

  const GetMember = async () => {
    try {
      const member = await getMemberData(id);
      const role = await getRole(member.roleId);
      setMember(member);
      setRole(role);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetMember();
  }, [id]);

  return (
    <div
      className={`flex flex-row w-full justify-between mx-4 px-4 ${
        role.tier && colorMap[role.tier]['bg']
      } min-h-8 items-center rounded gap-4`}>
      <div
        className={`${
          role.tier && colorMap[role.tier]['text']
        } font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap flex-1 text-left`}>
        {i + 1 + '. ' + member.name}
      </div>
      <div
        className={`${
          role.tier && colorMap[role.tier]['text']
        } font-semibold text-sm text-right opacity-[69%]`}>
        {role.name}
      </div>
      {editable && (
        <div className="flex flex-row gap-1">
          <div className={`btn btn-circle btn-xs btn-ghost text-white`}>
            <MdEdit size="1.35rem" />
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
            }}
            className={`btn btn-circle btn-xs btn-ghost text-white`}>
            <MdDelete size="1.35rem" />
          </div>
        </div>
      )}
    </div>
  );
}
