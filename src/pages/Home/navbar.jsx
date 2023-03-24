import React, { useEffect, useState } from 'react';
import { SiRoundcube, SiGithub } from 'react-icons/si';
import { GiHamburgerMenu, GiCardBurn } from 'react-icons/gi';
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function Navbar() {
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

  const [navCol, setNavCol] = useState('bg-transparent');

  useEffect(() => {
    const homeElement = document.getElementById('home');
    const scrollEvent = () => {
      homeElement.scrollTop >= 80
        ? setNavCol('bg-base-100')
        : setNavCol('bg-transparent');
    };

    homeElement.addEventListener('scroll', scrollEvent);
  }, []);

  return (
    <header
      className={`navbar justify-between z-30 sticky  text-primary-content top-0 backdrop-blur bg-opacity-90 ${navCol}`}>
      {/*Logo*/}
      <a className="btn btn-ghost normal-case text-base md:text-xl">
        <SiRoundcube className="pr-1 text-xl md:text-2xl" />
        Roundtable
      </a>

      {/*Desktop Menu*/}
      <div>
        <div className="flex-none font-semibold hidden md:flex flex-row">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Join</a>
            </li>
            <li>
              <a>Groups</a>
            </li>
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
          </ul>
        </div>

        {/*Themes Dropdown*/}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost normal-case text-base">
            <GiCardBurn className="pr-1 text-2xl" />
            <span className="hidden md:block">Themes</span>
            <MdKeyboardArrowDown className="pl-1 text-2xl" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[50vh] w-48 overflow-y-scroll shadow-2xl mt-16 justify-start p-3 scrollbar-hide">
            {themes.map((theme, i) => {
              return (
                <li
                  key={i}
                  data-theme={theme}
                  className="rounded-box font-bold text-primary-content h-9 pl-3 flex items-center mb-2 last:mb-0 hover:cursor-pointer bg-primary hover:bg-primary-focus">
                  <a>{theme}</a>
                </li>
              );
            })}
          </ul>
        </div>

        {/*Github Link*/}
        <a className="btn btn-ghost btn-circle normal-case text-base">
          <SiGithub className="text-xl md:text-2xl" />
        </a>

        {/*Hamburger Menu Icon*/}
        <div className="flex-none md:hidden">
          <label
            htmlFor="menu-drawer"
            className="btn btn-square btn-ghost normal-case text-xl">
            <GiHamburgerMenu className="text-xl md:text-2xl" />
          </label>
        </div>
      </div>
    </header>
  );
}

export function Sidebar() {
  return (
    <div className="drawer-side">
      <label htmlFor="menu-drawer" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-base-100 font-semibold ">
        <li>
          <a className="text-lg text-primary-content">
            <SiRoundcube className="pr-1 text-xl md:text-2xl" />
            Roundtable
          </a>
        </li>
        <div className="divider"></div>
        <li>
          <a>Join</a>
        </li>
        <li>
          <a>Groups</a>
        </li>
        <li>
          <a>About us</a>
        </li>
        <li>
          <a>Contact us</a>
        </li>
        <li className="absolute bottom-4 font-normal opacity-20 text-center mr-3 italic">
          "Every conversation is a chance to learn, grow, and connect."
        </li>
      </ul>
    </div>
  );
}
