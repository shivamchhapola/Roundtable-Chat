import React from 'react';
import Footer from './footer';
import Navbar, { Sidebar } from './navbar';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';

export default function main() {
  return (
    <div className="drawer w-screen">
      <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
      <div
        id="home"
        className="drawer-content flex flex-col scroll-smooth bg-gradient-to-br from-primary to-secondary">
        <Navbar />
        <Section1 />
        <Section2 />
        <div className="bg-base-100">
          <div className="divider"></div>
        </div>
        <Section3 />
        <div className="bg-base-100">
          <div className="divider"></div>
        </div>
        <Section4 />
        <div className="bg-base-100">
          <div className="divider"></div>
        </div>
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
}
