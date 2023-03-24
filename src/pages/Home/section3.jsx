import React from 'react';
import TestImg from './../../assets/demo_home1.svg';

export default function Section3() {
  return (
    <div>
      <div className="hero min-h-max py-24 bg-base-100 ">
        <div className="hero-content flex-col-reverse md:flex-row md:max-w-4xl">
          <div className="w-full md:w-96">
            <img src={TestImg} className="w-full" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-right">
            <div className="font-bold text-2xl text-primary-content md:text-3xl">
              Moderation tools
            </div>
            <div className="py-6 text-primary-content text-sm md:text-lg">
              Roundtable could offer a range of moderation tools to help ensure
              that conversations are respectful and productive. This could
              include features such as the ability to mute or block other users,
              report inappropriate behavior, or set group rules that all members
              must follow. By providing a safe and respectful environment,
              Roundtable could foster more meaningful conversations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
