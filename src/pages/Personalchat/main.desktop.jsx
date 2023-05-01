import React from 'react';
import AppLayout from '../../components/appLayout.desktop';
import Chat from './chat';
import Friends from './friends';

export default function Desktop() {
  return (
    <AppLayout activePage="pc">
      <div className="bg-base-200 w-[35%] h-full shadow-sm shadow-base-content relative z-10">
        <Friends />
      </div>
      <div className="bg-base-100 w-[65%] h-full shadow-sm shadow-base-content relative z-10">
        <Chat />
      </div>
    </AppLayout>
  );
}
