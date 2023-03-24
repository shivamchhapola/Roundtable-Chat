import React from 'react';
import TestImg from './../../assets/demo_home1.svg';

export default function Section4() {
  return (
    <div>
      <div className="hero min-h-max py-24 bg-base-100">
        <div className="hero-content flex-col md:flex-row md:max-w-4xl">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="font-bold text-2xl text-primary-content md:text-3xl">
              Multimedia sharing
            </div>
            <div className="py-6 text-primary-content text-sm md:text-lg">
              Roundtable could allow users to share a variety of multimedia
              content, such as photos, videos, and links. This would enable
              users to engage with each other in a more dynamic way and share
              information more easily. Additionally, Roundtable in future will
              offer features such as video and voice chat, making it easier for
              users to connect in real-time and have more personal
              conversations.
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
