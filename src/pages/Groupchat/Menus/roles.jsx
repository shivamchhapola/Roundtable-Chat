import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdAdd, MdCopyAll, MdUpload } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { addRole, getRole } from '../../../utils/group';
import { changeGroupRRM } from '../../../slices/groupSlice';

export function RolesList() {
  const [colorMap, setColorMap] = useState([
    'success',
    'primary',
    'secondary',
    'accent',
    'error',
  ]);

  const groupid = useSelector((state) => state.group.selectedGroup);
  const roleids = useSelector((state) => state.group.groupRRM.roles);
  const member = useSelector((state) => state.group.member);
  const [myRole, setMyRole] = useState({});

  const GetMyRole = async () => {
    return await getRole(member.roleId)
      .then((res) => {
        return setMyRole(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (member.roleId) GetMyRole();
  }, [member]);

  return (
    <div>
      <input type="checkbox" id="rolesList" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-h-[85vh] overflow-y-auto scrollbar-hide relative w-[26rem] min-h-[60vh]">
          <label
            htmlFor="rolesList"
            className="btn btn-sm btn-circle absolute right-2 top-2 btn-error z-50">
            ✕
          </label>
          <div className="text-lg font-semibold mt-2">Roles List</div>
          <div className="divider divider-vertical my-2"></div>
          {myRole.tier >= 5 && (
            <AddRole
              colorMap={colorMap}
              groupid={groupid}
              memberid={member.memberId}
              myRole={myRole}
            />
          )}
          <div className="w-full flex flex-col overflow-y-auto scrollbar-hide max-h-[55vh] text-center justify-start items-center gap-2 relative">
            {}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AddRole({ colorMap, groupid, memberid }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [tier, setTier] = useState(1);
  const [color, setColor] = useState('success');

  const OnAddRole = async () => {
    try {
      let data = { name, tier, groupid, memberid };
      return await addRole(data).then(async (res) => {
        await getGroupMenuData(groupid).then((res) => {
          return dispatch(changeGroupRRM(res.GroupRRM));
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  console.log(color);

  return (
    <div className="flex flex-row my-2">
      <input
        value={name}
        onChange={onNameChange}
        type="text"
        className={`input input-bordered input-${color} w-full max-w-xs`}
      />
      <TierDropDown
        tier={tier}
        setTier={setTier}
        colorMap={colorMap}
        setColor={setColor}
        color={color}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          OnAddRole();
        }}
        className={`btn btn-${color}`}>
        <MdAdd size="1.2rem" />
      </button>
    </div>
  );
}

export function TierDropDown({ colorMap, setTier, tier, setColor, color }) {
  const onTierChange = (e, v) => {
    e.preventDefault();
    setTier(v);
    setColor(colorMap[v - 1]);
  };

  return (
    <div className="dropdown">
      <div tabIndex={0} className={`mx-2 w-[6rem] mb-1 btn-${color} btn`}>
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
              <div className={`h-full bg-${colorMap[v - 1]}`}>Tier {v}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function RoleItem(id, colorMap, i) {
  const [role, setRole] = useState({});

  const GetRole = async () => {
    return await getRole(id)
      .then((res) => {
        return setRole(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    GetRole();
  }, []);

  return (
    <div
      key={role.id}
      className={`flex flex-row w-full justify-between mx-4 px-4 bg-${
        colorMap[myRole ? myRole.tier : 'neutral']
      } min-h-8 items-center rounded gap-4`}>
      <div
        className={`text-${
          colorMap[myRole ? myRole.tier : 'neutral']
        }-content font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap flex-1 text-left`}>
        {i + 1 + '. ' + role.name}
      </div>
      <div
        className={`text-${
          colorMap[myRole ? myRole.tier : 'neutral']
        }-content font-semibold text-sm flex-1 text-right opacity-[69%]`}>
        Tier {role.tier}
      </div>
    </div>
  );
}

export function RolesLisaaat() {
  const [eroleName, seteRoleName] = useState('');
  const [eroleTier, seteRoleTier] = useState(1);
  const [roleColor, setRoleColor] = useState('success');

  const onAddRole = async () => {
    return await axios
      .post(
        `${import.meta.env.VITE_BACKEND}/api/group/addrole`,
        JSON.stringify({ name: roleName, tier: roleTier, groupid, memberid }),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('userToken')}`,
          },
        }
      )
      .then((res) => {
        let roleeee = [...roles];
        let grrm = { ...groupRRM };
        let grrmr = [...grrm['roles']];
        roleeee.push(res.data);
        grrmr.push(res.data.id);
        grrm['roles'] = grrmr;
        dispatch(changeRoles(roleeee));
        dispatch(changeGroupRRM(grrm));
      })
      .catch((err) => console.log(err));
  };

  const changeRoleTier = (i) => {
    setRoleTier(i);
    setRoleColor(getColor(i));
  };

  useEffect(() => {
    setMyRole(roles.find((role) => myRoleID === role.id));
  }, [roles]);

  return (
    <div>
      <input type="checkbox" id="rolesList" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-h-[85vh] overflow-y-auto scrollbar-hide relative w-[26rem] min-h-[60vh]">
          <label
            htmlFor="rolesList"
            className="btn btn-sm btn-circle absolute right-2 top-2 btn-error z-50">
            ✕
          </label>
          <div className="text-lg font-semibold mt-2">Roles List</div>
          <div className="divider divider-vertical my-2"></div>
          {myRole && myRole.tier >= 5 && (
            <div className="flex flex-row my-2">
              <input
                value={roleName}
                onChange={(e) => {
                  e.preventDefault();
                  setRoleName(e.target.value);
                }}
                type="text"
                className={`input input-bordered input-${roleColor} w-full max-w-xs`}
              />
              <div className="dropdown">
                <div
                  tabIndex={0}
                  className={`mx-2 w-[6rem] mb-1 btn-${roleColor} btn`}>
                  Tier {roleTier}
                </div>
                <ul
                  tabIndex={0}
                  className={`dropdown-content menu p-2 shadow rounded-box w-[7rem] bg-neutral gap-1 [&>li]:h-8`}>
                  <li>
                    <div
                      className={`bg-success h-full`}
                      onClick={(e) => {
                        e.preventDefault();
                        changeRoleTier(1);
                      }}>
                      Tier 1
                    </div>
                  </li>
                  <li>
                    <div
                      className={`bg-error h-full`}
                      onClick={(e) => {
                        e.preventDefault();
                        changeRoleTier(2);
                      }}>
                      Tier 2
                    </div>
                  </li>
                  <li>
                    <div
                      className={`bg-accent h-full`}
                      onClick={(e) => {
                        e.preventDefault();
                        changeRoleTier(3);
                      }}>
                      Tier 3
                    </div>
                  </li>
                  <li>
                    <div
                      className={`bg-secondary h-full`}
                      onClick={(e) => {
                        e.preventDefault();
                        changeRoleTier(4);
                      }}>
                      Tier 4
                    </div>
                  </li>
                </ul>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onAddRole();
                }}
                className={`btn btn-${roleColor}`}>
                <MdAdd size="1.2rem" />
              </button>
            </div>
          )}
          <div className="w-full flex flex-col overflow-y-auto scrollbar-hide max-h-[55vh] text-center justify-start items-center gap-2 relative">
            {roles.map((role, i) => {
              const color = getColor(role.tier);
              return (
                <div
                  key={role.id}
                  className={`flex flex-row w-full justify-between mx-4 px-4 bg-${color} min-h-8 items-center rounded gap-4`}>
                  <div
                    className={`text-${color}-content font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap flex-1 text-left`}>
                    {i + 1 + '. ' + role.name}
                  </div>
                  <div
                    className={`text-${color}-content font-semibold text-sm flex-1 text-right opacity-[69%]`}>
                    Tier {role.tier}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
