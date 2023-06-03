import React from 'react';
import Groups from './groups';
import Groupmenu from './groupmenu';
import Chatroom from './chatroom';
import AppLayout from '../../components/appLayout.desktop';
import { CreateGroup, InviteMenu, JoinGroup } from './Menus/create_join_invite';
import { RolesList } from './Menus/roles';
import { MembersList } from './Menus/members';

export default function Desktop() {
  return (
    <AppLayout activePage="gc">
      <div className="bg-base-100 w-[25%] h-full shadow-sm shadow-base-content relative z-10">
        <Groups />
      </div>
      <div className="bg-base-200 w-[25%] h-full z-0">
        <Groupmenu />
      </div>
      <div className="bg-base-100 w-[50%] h-full shadow-sm shadow-base-content relative z-10">
        <Chatroom />
      </div>
      {/*Modals*/}
      <CreateGroup />
      <JoinGroup />
      <InviteMenu />
      <RolesList />
      <MembersList />
    </AppLayout>
  );
}
