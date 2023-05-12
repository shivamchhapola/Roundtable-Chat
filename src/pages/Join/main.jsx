import React, { useState } from 'react';
import { GiCardBurn } from 'react-icons/gi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { changeTheme } from '../../slices/themeSlice';
import { useDispatch } from 'react-redux';
import Desktop from './main.desktop';
import Mobile from './main.mobile';
import { Link } from 'react-router-dom';
import { SiGithub } from 'react-icons/si';

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

  return (
    <div className="flex flex-col bg-base-100 justify-center items-center w-full h-screen bg-[url('/Colored_Shapes.svg')] bg-no-repeat bg-fixed bg-cover bg-center">
      {/*Navbar*/}
      <div className="navbar justify-between z-30 absolute top-0 bg-opacity-90">
        {/*Logo*/}
        <Link
          className="btn btn-ghost normal-case font-bold text-base md:text-xl"
          to="/groupchat">
          <span className="md:mb-1 mb-0.5">Roundtable</span>
        </Link>
        <div>
          {/*Themes Dropdown*/}
          <div title="Change Themes" className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost normal-case text-base">
              <GiCardBurn className="pr-1 text-2xl" />
              <span className="hidden md:block">Themes</span>
              <MdKeyboardArrowDown className="pl-1 text-lg md:text-xl" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box max-h-96 h-[50vh] w-48 overflow-y-scroll shadow-2xl mt-4 justify-start p-3 scrollbar-hide">
              {themes.map((theme, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => dispatch(changeTheme(theme))}
                    data-theme={theme}
                    className="rounded-box font-bold text-primary-content h-9 pl-3 flex items-center mb-2 last:mb-0 hover:cursor-pointer bg-primary hover:bg-primary-focus">
                    <a>{theme}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/*Github Link*/}
          <a
            className="btn btn-ghost btn-circle normal-case text-base"
            target="_blank"
            href="https://github.com/shivamchhapola/roundtable-chat">
            <SiGithub className="text-xl md:text-2xl" />
          </a>
        </div>
      </div>

      <Desktop isLogin={isLogin} setIsLogin={setIsLogin} />

      <Mobile isLogin={isLogin} setIsLogin={setIsLogin} />
    </div>
  );
}
