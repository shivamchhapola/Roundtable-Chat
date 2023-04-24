import React from 'react';
import Login from './login';
import Signup from './signup';

export default function Mobile({
  isLogin,
  loginData,
  signupData,
  setIsLogin,
  setLoginData,
  setSignupData,
}) {
  return (
    <div className="h-1/2 w-3/4 shadow-2xl flex md:hidden flex-col rounded-[var(--rounded-btn)] overflow-hidden bg-white">
      <div className="h-12 bg-white flex flex-row items-center justify-center">
        <div
          onClick={() => {
            setIsLogin(true);
          }}
          className={`w-1/2 h-full flex justify-center items-center transition-all duration-300 ${
            isLogin ? 'bg-transparent text-base' : 'bg-secondary rounded-br-lg'
          }`}>
          <span className="text-lg font-semibold">Login</span>
        </div>
        <div
          onClick={() => {
            setIsLogin(false);
          }}
          className={`w-1/2 h-full flex justify-center items-center transition-all duration-300 ${
            !isLogin ? 'bg-transparent text-base' : 'bg-secondary rounded-bl-lg'
          }`}>
          <span className="text-lg font-semibold">Signup</span>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center p-4">
        <Login isLogin={isLogin} data={signupData} setData={setSignupData} />
        <Signup isLogin={isLogin} data={signupData} setData={setSignupData} />
      </div>
    </div>
  );
}
