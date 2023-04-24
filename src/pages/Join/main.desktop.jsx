import React from 'react';
import Login from './login';
import Signup from './signup';

export default function Desktop({
  isLogin,
  loginData,
  signupData,
  setIsLogin,
  setLoginData,
  setSignupData,
}) {
  return (
    <div className="h-3/5 w-3/4 shadow-2xl hidden md:flex flex-row rounded-[var(--rounded-btn)] overflow-hidden 2xl:h-2/5 2xl:w-2/4">
      <div
        className={`flex flex-col justify-center items-center p-8 transition-all duration-300 ${
          isLogin ? 'bg-white w-2/3' : 'bg-secondary w-1/3'
        }`}>
        <Login isLogin={isLogin} data={signupData} setData={setSignupData} />
        <div
          className={`flex-col justify-between items-center text-secondary-content gap-7 h-1/2 ${
            !isLogin ? 'flex' : 'hidden'
          }`}>
          <div className="text-3xl text-center text-secondary-content font-semibold">
            Already
            <br /> a member?
          </div>
          <button
            className="btn btn-accent btn-sm lg:btn-md w-4/5"
            onClick={() => {
              setIsLogin(true);
            }}>
            Login
          </button>
        </div>
      </div>
      <div
        className={`flex flex-col justify-center items-center p-8 transition-all duration-300 ${
          !isLogin ? 'bg-white w-2/3' : 'bg-secondary w-1/3'
        }`}>
        <Signup isLogin={isLogin} data={signupData} setData={setSignupData} />
        <div
          className={`flex-col justify-between items-center text-secondary-content gap-7 h-1/2 ${
            isLogin ? 'flex' : 'hidden'
          }`}>
          <div className="text-3xl text-center text-secondary-content font-semibold">
            New Here?
          </div>
          <button
            className="btn btn-accent w-4/5 btn-sm lg:btn-md"
            onClick={() => {
              setIsLogin(false);
            }}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
