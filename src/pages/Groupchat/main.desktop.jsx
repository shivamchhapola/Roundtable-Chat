import React from 'react';
import { GiCardBurn } from 'react-icons/gi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Groups from './groups';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../slices/themeSlice';

export default function Desktop() {
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

  return (
    <div
      className="bg-base-300 w-screen h-screen flex-col hidden md:flex select-none"
      onContextMenu={(e) => {
        e.preventDefault();
      }}>
      <div
        title="Change Themes"
        className="dropdown dropdown-end absolute right-16">
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
      <div className="h-8 w-full text-right pr-3 pt-1 font-semibold">
        Roundtable
      </div>
      <div className="h-[calc(100vh-2rem)] w-full flex flex-row">
        <div className="w-12 h-full min-w-[3%]"></div>
        <div className="w-[calc(100vw-3rem)] h-full flex flex-row rounded-tl-md overflow-hidden">
          <div className="bg-base-200 w-[30%] h-full shadow-sm shadow-base-content relative z-10">
            <Groups />
          </div>
          <div className="bg-base-100 w-[30%] h-full z-0"></div>
          <div className="bg-base-200 w-[40%] h-full shadow-sm shadow-base-content relative z-10"></div>
        </div>
      </div>
    </div>
  );
}
