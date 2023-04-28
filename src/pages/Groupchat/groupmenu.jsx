import React from 'react';
import { useSelector } from 'react-redux';

import DummyGroups from '../../dummy/DummyGroups';

export default function groupmenu() {
  const selectedGroup = useSelector((state) => state.group.selectedGroup);
  const group = DummyGroups.filter((g) => g._id == selectedGroup)[0];

  return (
    <div className="w-full">
      <div className="h-12 w-full flex flex-col">
        <div className="py-2 text-center font-semibold w-full min-w-[3rem] overflow-hidden overflow-ellipsis px-3">
          {group.name}
        </div>
        <div className="divider divider-vertical mt-0 mb-0"></div>
      </div>
      <div className="w-full text-left font-semibold text-sm uppercase px-4 py-3">
        Chatrooms
      </div>
      <div className="px-2 w-full h-[calc(100vh-8rem)] overflow-y-auto overflow-x-hidden flex flex-col justify-start gap-1 scrollbar-hide">
        {group.rooms.map((room, i) => {
          return (
            <div className={`btn btn-sm btn-ghost btn-block`} key={i}>
              <span className="w-full text-left normal-case font-medium text-sm text-base-content min-w-[3rem] overflow-hidden overflow-ellipsis px-3">
                /{room}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
