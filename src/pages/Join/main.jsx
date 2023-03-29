import React, { useState } from 'react';
import Login from './login';
import Signup from './signup';

export default function main() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [signupData, setSignupData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <div className="flex bg-base-100 justify-center items-center w-full h-screen bg-[url('/Colored_Shapes.svg')] bg-no-repeat bg-fixed bg-cover bg-center">
      <div className="h-3/5 w-3/4 shadow-2xl hidden md:flex flex-row rounded-[var(--rounded-btn)] overflow-hidden 2xl:h-2/5 2xl:w-2/4">
        <div
          className={`flex flex-col justify-center items-center p-8 transition-all duration-300 ${
            isLogin ? 'bg-white w-2/3' : 'bg-secondary w-1/3'
          }`}>
          <Login isLogin={isLogin} data={loginData} setData={setLoginData} />
          <div
            className={`flex-col justify-between items-center text-secondary-content gap-7 h-1/2 ${
              !isLogin ? 'flex' : 'hidden'
            }`}>
            <div className="text-3xl text-center text-secondary-content font-semibold">
              Already
              <br /> a member?
            </div>
            <div className="w-4/5">
              <button
                className="btn btn-accent btn-block btn-sm lg:btn-md"
                onClick={() => {
                  setIsLogin(true);
                }}>
                Login
              </button>
            </div>
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
            <div className="w-4/5">
              <button
                className="btn btn-accent btn-block btn-sm lg:btn-md"
                onClick={() => {
                  setIsLogin(false);
                }}>
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
