import React, { useState } from 'react';
import { GiCardBurn } from 'react-icons/gi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { changeTheme } from '../../slices/themeSlice';
import { useDispatch } from 'react-redux';
import Login from './login';
import Signup from './signup';

export default function main() {
  const themes = [
    'light',
    'dark',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'forest',
    'luxury',
    'dracula',
    'night',
  ];
  const dispatch = useDispatch();

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
      <div
        title="Change Themes"
        className="dropdown dropdown-end absolute top-4 right-4">
        <label
          tabIndex={0}
          className="btn btn-ghost btn-sm normal-case text-base">
          <GiCardBurn className="pr-1 text-2xl" />
          <MdKeyboardArrowDown className="pl-1 text-lg md:text-xl" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box max-h-96 h-[50vh] w-48 overflow-y-scroll shadow-2xl mt-3 justify-start p-3 scrollbar-hide">
          {themes.map((theme, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  dispatch(changeTheme(theme));
                }}
                data-theme={theme}
                className="rounded-box font-bold text-primary-content h-9 pl-3 flex items-center mb-2 last:mb-0 hover:cursor-pointer bg-primary hover:bg-primary-focus">
                <a>{theme}</a>
              </li>
            );
          })}
        </ul>
      </div>
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
