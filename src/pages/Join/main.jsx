import React, { useState } from 'react';
import { GiCardBurn } from 'react-icons/gi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { changeTheme } from '../../slices/themeSlice';
import { useDispatch } from 'react-redux';
import Login from './login';
import Signup from './signup';
import Navbar, { Sidebar } from '../../components/navbar';
import Desktop from './main.desktop';
import Mobile from './main.mobile';

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
    <div className="drawer w-screen h-screen">
      <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
      <div
        id="home"
        className="drawer-content flex flex-col bg-base-100 justify-center items-center w-full h-screen bg-[url('/Colored_Shapes.svg')] bg-no-repeat bg-fixed bg-cover bg-center">
        <div className="items-start absolute top-0 w-full">
          <Navbar />
        </div>
        <Desktop
          isLogin={isLogin}
          loginData={loginData}
          signupData={signupData}
          setIsLogin={setIsLogin}
          setLoginData={setLoginData}
          setSignupData={setSignupData}
        />
        <Mobile
          isLogin={isLogin}
          loginData={loginData}
          signupData={signupData}
          setIsLogin={setIsLogin}
          setLoginData={setLoginData}
          setSignupData={setSignupData}
        />
      </div>
      <Sidebar />
    </div>
  );
}
