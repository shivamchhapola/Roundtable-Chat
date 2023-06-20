import React, { useEffect, useState } from 'react';
import { MdAdd, MdCheck, MdDelete, MdEdit } from 'react-icons/md';
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
  const [error, setError] = useState('');
  const [members, setMembers] = useState([{}]);

  //My member data
  const member = useSelector((state) => state.group.member);
  const [myRole, setMyRole] = useState({});

  //Edit member data
  const [editMode, setEditMode] = useState(false);
  const [eid, setEId] = useState('');
  const [ename, setEName] = useState('');
  const [erole, setERole] = useState({});

  //Delete member data
  const [delMode, setDelMode] = useState(false);
  const [did, setDId] = useState('');
  const [dname, setDName] = useState('');

  const GetMyRole = async () => {
    return await getRole(member.roleId)
      .then((res) => {
        return setMyRole(res.data);
      })
      .catch((err) => console.log(err));
  };

  const OnEditMember = async () => {
    reset();
    try {
      if (!eid || !erole || !member) return;
      let data = {
        id: eid,
        roleid: erole.id,
        memberid: member.memberId,
      };
      return await editMember(data).then(async (res) => {
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
        await getGroupMenuData(groupid).then((res) => {
          return dispatch(changeGroupRRM(res.GroupRRM));
        });
      });
    } catch (error) {
      return setError(error.response.data);
    }
  };

  const getMembers = async (mids) => {
    let mmem = [];
    for (const mid of mids) {
      try {
        let mem = await getMemberData(mid);
        let memrole = await getRole(mem.data.roleId);
        mmem.push({ ...mem.data, role: memrole.data });
      } catch (error) {
        return setError(error.response.data);
      }
    }
    mmem.sort((a, b) => b.role.tier - a.role.tier);
    return setMembers(mmem);
  };

  const onEditMode = (id, name, role) => {
    reset();
    setEId(id);
    setEName(name);
    setERole(role);
    setEditMode(true);
  };

  const onDelMode = (id, name) => {
    reset();
    setDId(id);
    setDName(name);
    setDelMode(true);
  };

  const reset = () => {
    setDId('');
    setEId('');
    setERole({});
    setDName('');
    setEName('');
    setEditMode(false);
    setDelMode(false);
    setError('');
  };

  useEffect(() => {
    if (member.roleId) GetMyRole();
  }, [member]);

  useEffect(() => {
    if (groupRRM.members.length > 0) getMembers(groupRRM.members);
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
          {error && (
            <div className="alert alert-error mt-5 p-2 flex justify-between">
              {error}
              <div
                onClick={(e) => {
                  e.preventDefault();
                  setError('');
                }}
                className="btn btn-xs btn-circle btn-outline">
                <MdCheck size="1.2rem" />
              </div>
            </div>
          )}
          <div className="text-lg font-semibold mt-2">Members List</div>
          <div className="divider divider-vertical my-2"></div>
          <div className="w-full flex flex-col overflow-y-auto scrollbar-hide max-h-[55vh] text-center justify-start items-center gap-2 relative">
            {members &&
              members.map((member, i) => {
                return (
                  <MemberItem
                    member={member}
                    colorMap={colorMap}
                    key={i}
                    i={i}
                    editable={
                      !myRole &&
                      (myRole.tier <= member.role.tier || myRole.tier <= 2)
                        ? false
                        : true
                    }
                    onDelMode={onDelMode}
                    onEditMode={onEditMode}
                  />
                );
              })}
          </div>
          {delMode && (
            <DelMember
              dname={dname}
              setDelMode={setDelMode}
              OnDelMember={OnDelMember}
            />
          )}
          {editMode && (
            <EditRole
              colorMap={colorMap}
              OnEditMember={OnEditMember}
              ename={ename}
              eid={eid}
              erole={erole}
              setERole={setERole}
              setEditMode={setEditMode}
              roleids={groupRRM.roles}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export function MemberItem({
  member,
  colorMap,
  i,
  editable,
  onDelMode,
  onEditMode,
}) {
  return (
    <div
      className={`flex flex-row w-full justify-between mx-4 px-4 ${
        member.role && colorMap[member.role.tier]['bg']
      } min-h-8 items-center rounded gap-4`}>
      <div
        className={`${
          member.role && colorMap[member.role.tier]['text']
        } font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap flex-1 text-left`}>
        {i + 1 + '. ' + member.name}
      </div>
      <div
        className={`${
          member.role && colorMap[member.role.tier]['text']
        } font-semibold text-sm text-right opacity-[69%]`}>
        {member.role && member.role.name}
      </div>
      {editable && (
        <div className="flex flex-row gap-1">
          <div
            onClick={(e) => {
              e.preventDefault();
              onEditMode(member.memberId, member.name, member.role);
            }}
            className={`btn btn-circle btn-xs btn-ghost text-white`}>
            <MdEdit size="1.35rem" />
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              onDelMode(member.memberId, member.name);
            }}
            className={`btn btn-circle btn-xs btn-ghost text-white`}>
            <MdDelete size="1.35rem" />
          </div>
        </div>
      )}
    </div>
  );
}

export function DelMember({ dname, setDelMode, OnDelMember }) {
  return (
    <div className="absolute top-[40%] w-full right-0 p-2 flex justify-center items-center">
      <div className="bg-error w-full px-4 py-2 rounded">
        <div className="alert alert-error">
          <div className="text-error-content font-semibold">
            Are you sure, you wanna remove "{dname}"?
          </div>
          <button
            onClick={(e) => {
              setDelMode(false);
            }}
            className="btn btn-circle text-[1.2rem] btn-outline">
            ✕
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              OnDelMember();
            }}
            className="btn btn-circle btn-outline">
            <MdCheck size="1.5rem" />
          </button>
        </div>
      </div>
    </div>
  );
}

function EditRole({
  colorMap,
  OnEditMember,
  ename,
  erole,
  setERole,
  setEditMode,
  roleids,
}) {
  return (
    <div className="absolute top-[40%] w-full right-0 p-2 flex justify-center items-center">
      <div className="bg-base-300 w-full px-4 py-2 rounded">
        <label
          onClick={(e) => {
            setEditMode(false);
          }}
          className="btn btn-xs btn-circle absolute right-0 top-0 btn-error z-50">
          ✕
        </label>
        <div className="flex flex-row my-2">
          <input
            value={ename}
            placeholder="Edit Role"
            disabled
            type="text"
            className={`input input-bordered ${
              erole && colorMap[erole.tier]['input']
            } w-full max-w-xs`}
          />
          <div className="dropdown">
            <div
              tabIndex={0}
              className={`mx-2 w-[6rem] mb-1 ${
                colorMap[erole.tier ?? 1]['btn']
              } btn`}>
              <span className="overflow-hidden overflow-ellipsis whitespace-nowrap w-[6rem]">
                {erole.name}
              </span>
            </div>
            <ul
              tabIndex={0}
              className={`dropdown-content flex flex-col p-2 shadow rounded-box w-[8rem] bg-neutral gap-2 overflow-y-auto scrollbar-hide h-[12rem]`}>
              {roleids.map((r) => {
                return (
                  <RolesDropDown
                    key={r}
                    colorMap={colorMap}
                    id={r}
                    setERole={setERole}
                  />
                );
              })}
            </ul>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              OnEditMember();
            }}
            className={`btn ${erole && colorMap[erole.tier]['btn']} ${
              erole && colorMap[erole.tier]['text']
            }`}>
            <MdCheck size="1.2rem" />
          </button>
        </div>
      </div>
    </div>
  );
}

function RolesDropDown({ colorMap, id, setERole }) {
  const [role, setRole] = useState({ name: '', tier: 1 });

  const GetRole = async () => {
    return await getRole(id)
      .then((res) => {
        return setRole(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    GetRole();
  }, [id]);

  return (
    <li
      onClick={(e) => {
        e.preventDefault();
        setERole(role);
      }}
      className="hover:cursor-pointer">
      <div
        className={`h-8 rounded p-1 flex items-center ${
          colorMap[role.tier]['bg']
        } ${colorMap[role.tier]['text']}`}>
        <span className="overflow-hidden overflow-ellipsis whitespace-nowrap w-[6rem]">
          {role.name}
        </span>
      </div>
    </li>
  );
}
