import React from 'react';
import TestImg from './../../assets/demo_home1.svg';

export default function Section2() {
  return (
    <div>
      <div className="hero min-h-max py-24 bg-base-100">
        <div className="hero-content flex-col md:flex-row md:max-w-4xl">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="font-bold text-2xl md:text-3xl">Chatrooms</div>
            <div className="py-6 text-sm md:text-lg">
              Roundtable allows group admins to create chatrooms in a group
              based on specific topics of interest. For example, there could be
              a chatroom dedicated to memes, coding, or entertainment.
            </div>
          </div>
          <div className="w-full md:w-96">
            <img src={TestImg} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
