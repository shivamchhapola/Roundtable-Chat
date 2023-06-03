import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeGroupRRM,
  changeMemberData,
  changeSelectedChatroom,
} from '../../slices/groupSlice';
import {
  MdEdit,
  MdGamepad,
  MdMenu,
  MdPeopleAlt,
  MdPersonAdd,
} from 'react-icons/md';
import {
  getChatroom,
  getGroupMenuData,
  getMyMemberData,
} from '../../utils/group';

export default function Groupmenu() {
  const dispatch = useDispatch();
  const selectedGroupID = useSelector((state) => state.group.selectedGroup);
  const [groupData, setGroupData] = useState({});

  const setGroupMenuData = async () => {
    return await getGroupMenuData(selectedGroupID)
      .then((res) => {
        setGroupData(res);
        dispatch(changeSelectedChatroom(res.GroupRRM.rooms[0]));
        dispatch(changeGroupRRM(res.GroupRRM));
        return;
      })
      .catch((err) => console.log(err));
  };
  const setMyMemberData = async () => {
    return await getMyMemberData(selectedGroupID)
      .then((res) => {
        if (res) dispatch(changeMemberData(res));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (selectedGroupID) {
      setGroupMenuData();
      setMyMemberData();
    }
    dispatch(
      changeSelectedChatroom(
        groupData.GroupRRM ? groupData.GroupRRM.rooms[0] : ''
      )
    );
  }, [selectedGroupID]);

  return (
    <div className="w-full">
      <div className="h-12 w-full flex flex-col relative">
        <div className="w-full py-2 text-center font-semibold min-w-[3rem] overflow-hidden overflow-ellipsis whitespace-nowrap px-4">
          {groupData.GroupData ? groupData.GroupData.name : 'No Group Selected'}
        </div>
        <div className="absolute h-full flex justify-center items-center right-1 bottom-[0.15rem]">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-circle btn-sm btn-ghost">
              <MdMenu size="1.5rem" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <label
                  htmlFor="inviteMenu"
                  className="btn btn-sm btn-ghost btn-block pb-6 flex flex-row">
                  <MdPersonAdd />
                  <span className="flex-1 text-left">Invite</span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="membersList"
                  className="btn btn-sm btn-ghost btn-block pb-6 flex flex-row">
                  <MdPeopleAlt />
                  <span className="flex-1 text-left">Members</span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="rolesList"
                  className="btn btn-sm btn-ghost btn-block pb-6 flex flex-row">
                  <MdGamepad />
                  <span className="flex-1 text-left">Roles</span>
                </label>
              </li>
              <li>
                <div className="btn btn-sm btn-ghost btn-block pb-6 flex flex-row">
                  <MdEdit />
                  <span className="flex-1 text-left">Edit Group</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="divider divider-vertical my-0"></div>
      </div>
      <div className="w-full text-left font-semibold text-sm uppercase px-4 py-3">
        Chatrooms
      </div>
      <div className="px-2 w-full h-[calc(100vh-8.5rem)] overflow-y-auto overflow-x-hidden flex flex-col justify-start gap-1 scrollbar-hide">
        <div className="w-full pb-6">
          {groupData.GroupRRM &&
            groupData.GroupRRM.rooms.map((rid) => {
              return <ChatroomItem id={rid} key={rid} />;
            })}
        </div>
      </div>
    </div>
  );
}

function ChatroomItem({ id }) {
  const dispatch = useDispatch();
  const selectedChatroom = useSelector((state) => state.group.selectedChatroom);
  const [chatroom, setChatroom] = useState({});

  const GetChatroom = async () => {
    return await getChatroom(id)
      .then((res) => {
        return setChatroom(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    GetChatroom();
  }, []);
  return (
    <div
      className={`btn btn-sm btn-ghost btn-block ${
        selectedChatroom == id && 'btn-active'
      }`}
      onClick={() => dispatch(changeSelectedChatroom(id))}>
      <span className="w-full text-left normal-case font-medium text-sm text-base-content min-w-[3rem] whitespace-nowrap overflow-hidden overflow-ellipsis px-3 text-opacity-70">
        /{chatroom ? chatroom.name : ''}
      </span>
    </div>
  );
}
