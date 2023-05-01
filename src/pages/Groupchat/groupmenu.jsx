import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSelectedChatroom } from '../../slices/groupSlice';

import DummyGroups from '../../dummy/DummyGroups';

export default function Groupmenu() {
  const dispatch = useDispatch();
  const selectedGroup = useSelector((state) => state.group.selectedGroup);
  const selectedChatroom = useSelector((state) => state.group.selectedChatroom);
  const group = DummyGroups.filter((g) => g._id == selectedGroup)[0];

  return (
    <div className="w-full">
      <div className="h-12 w-full flex flex-col">
        <div className="w-full py-2 text-center font-semibold min-w-[3rem] overflow-hidden overflow-ellipsis whitespace-nowrap px-4">
          {group.name}
        </div>
        <div className="divider divider-vertical my-0"></div>
      </div>
      <div className="w-full text-left font-semibold text-sm uppercase px-4 py-3">
        Chatrooms
      </div>
      <div className="px-2 w-full h-[calc(100vh-8.5rem)] overflow-y-auto overflow-x-hidden flex flex-col justify-start gap-1 scrollbar-hide">
        {group.rooms.map((room, i) => {
          return (
            <div
              className={`btn btn-sm btn-ghost btn-block ${
                selectedChatroom == i && 'btn-active'
              }`}
              key={i}
              onClick={() => dispatch(changeSelectedChatroom(i))}>
              <span className="w-full text-left normal-case font-medium text-sm text-base-content min-w-[3rem] whitespace-nowrap overflow-hidden overflow-ellipsis px-3 text-opacity-70">
                /{room}
              </span>
            </div>
          );
        })}
        <div className="w-full py-6"></div>
      </div>
    </div>
  );
}
