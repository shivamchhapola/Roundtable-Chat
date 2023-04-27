import React from 'react';

import DummyGroups from '../../dummy/DummyGroups';

export default function Groups() {
  return (
    <div className="w-full">
      <div className="h-12 w-full flex flex-col">
        <div className="pt-2 pb-1 text-center font-semibold w-full">
          Your Groups
        </div>
        <div className="divider divider-vertical mt-0 mb-0"></div>
      </div>
      <div className="px-2 w-full h-[calc(100vh-5.25rem)] overflow-y-auto overflow-x-hidden flex flex-col justify-start gap-1 scrollbar-hide">
        <GroupItem
          name={DummyGroups[0].name}
          pic={DummyGroups[0].pic}
          bio={DummyGroups[0].bio}
        />
        <GroupItem
          name={DummyGroups[0].name}
          pic={DummyGroups[0].pic}
          bio={DummyGroups[0].bio}
        />
        <GroupItem
          name={DummyGroups[0].name}
          pic={DummyGroups[0].pic}
          bio={DummyGroups[0].bio}
        />
        <GroupItem
          name={DummyGroups[0].name}
          pic={DummyGroups[0].pic}
          bio={DummyGroups[0].bio}
        />
        <GroupItem
          name={DummyGroups[0].name}
          pic={DummyGroups[0].pic}
          bio={DummyGroups[0].bio}
        />
        <GroupItem
          name={DummyGroups[0].name}
          pic={DummyGroups[0].pic}
          bio={DummyGroups[0].bio}
        />
        <GroupItem
          name={DummyGroups[0].name}
          pic={DummyGroups[0].pic}
          bio={DummyGroups[0].bio}
        />
        <GroupItem
          name={DummyGroups[0].name}
          pic={DummyGroups[0].pic}
          bio={DummyGroups[0].bio}
        />
        <GroupItem
          name={DummyGroups[0].name}
          pic={DummyGroups[0].pic}
          bio={DummyGroups[0].bio}
        />
        <GroupItem
          name={DummyGroups[0].name}
          pic={DummyGroups[0].pic}
          bio={DummyGroups[0].bio}
        />
        <GroupItem
          name={DummyGroups[0].name}
          pic={DummyGroups[0].pic}
          bio={DummyGroups[0].bio}
        />
        <GroupItem
          name={DummyGroups[0].name}
          pic={DummyGroups[0].pic}
          bio={DummyGroups[0].bio}
        />
        <GroupItem
          name={DummyGroups[0].name}
          pic={DummyGroups[0].pic}
          bio={DummyGroups[0].bio}
        />
        <GroupItem
          name={DummyGroups[0].name}
          pic={DummyGroups[0].pic}
          bio={DummyGroups[0].bio}
        />
      </div>
    </div>
  );
}

function GroupItem({ name, pic, bio }) {
  return (
    <div className="btn btn-ghost flex-row normal-case w-full">
      <div className="avatar">
        <div className="h-11 rounded-full">
          <img src={pic} />
        </div>
      </div>
      <div className="flex-1 flex flex-col px-2.5 justify-between whitespace-nowrap min-w-[5rem] overflow-hidden">
        <div className="text-left min-w-[3rem] max-w-[7rem] overflow-hidden overflow-ellipsis">
          {name}
        </div>
        <div className="text-left text-xs font-normal min-w-[3rem] max-w-[9rem] overflow-hidden overflow-ellipsis">
          ~{bio}
        </div>
      </div>
    </div>
  );
}
