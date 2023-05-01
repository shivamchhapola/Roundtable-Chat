import React from 'react';
import { changeSelectedGroup } from '../../slices/groupSlice';
import { useDispatch, useSelector } from 'react-redux';

import DummyGroups from '../../dummy/DummyGroups';

export default function Friends() {
  return (
    <div className="w-full">
      <div className="h-12 w-full flex flex-col">
        <div className="pt-2 pb-1 text-center font-semibold w-full">
          Personal Chat
        </div>
        <div className="divider divider-vertical my-0"></div>
      </div>
      <div className="px-2 w-full h-[calc(100vh-5.75rem)] overflow-y-auto overflow-x-hidden flex flex-col justify-start gap-1 scrollbar-hide">
        {DummyGroups.map((group, i) => {
          return (
            <FriendItem
              key={i}
              id={group._id}
              name={group.name}
              pic={group.pic}
              bio={group.bio}
            />
          );
        })}
        <div className="w-full py-6"></div>
      </div>
    </div>
  );
}

function FriendItem({ id, name, pic, bio }) {
  const dispatch = useDispatch();
  const selectedGroup = useSelector((state) => state.group.selectedGroup);

  return (
    <div
      onClick={() => dispatch(changeSelectedGroup(id))}
      className={`btn btn-ghost flex-row normal-case w-full ${
        selectedGroup == id && 'btn-active'
      }`}>
      <div className="avatar">
        <div className="h-11 rounded-full">
          <img src={pic} />
        </div>
      </div>
      <div className="flex-1 flex flex-col px-2.5 justify-between whitespace-nowrap min-w-[5rem] overflow-hidden">
        <div className="text-left min-w-[3rem] overflow-hidden overflow-ellipsis">
          {name}
        </div>
        <div className="text-left text-xs font-normal min-w-[3rem] overflow-hidden overflow-ellipsis">
          ~{bio}
        </div>
      </div>
    </div>
  );
}
