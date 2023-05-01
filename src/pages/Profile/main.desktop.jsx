import React from 'react';
import AppLayout from '../../components/appLayout.desktop';

export default function Desktop() {
  return (
    <AppLayout activePage="pr">
      <div className="bg-base-100 w-full h-full shadow-sm shadow-base-content relative z-10"></div>
    </AppLayout>
  );
}
