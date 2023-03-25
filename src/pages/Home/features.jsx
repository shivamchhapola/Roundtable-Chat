import React from 'react';

export default function Features({ Title, Description, Image, FlexProp }) {
  return (
    <div>
      <div className="hero min-h-max py-24 bg-base-100">
        <div className={`hero-content flex-col md:max-w-4xl ${FlexProp}`}>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="font-bold text-2xl md:text-3xl">{Title}</div>
            <div className="py-6 text-sm md:text-lg">{Description}</div>
          </div>
          <div className="w-full md:w-96">
            <img src={Image} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
