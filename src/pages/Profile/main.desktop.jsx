import React from 'react';
import AppLayout from '../../components/appLayout.desktop';
import Profile from './profile';

export default function Desktop() {
  return (
    <AppLayout activePage="pr">
      <div className="bg-base-100 w-full h-full shadow-sm shadow-base-content relative z-10 flex justify-center">
        <Profile />
      </div>
    </AppLayout>
  );
}
