import React from 'react';
import Footer from '../../components/footer';
import Navbar, { Sidebar } from '../../components/navbar';
import FeaturesList from './featuresList';
import HeadSection from './headsection';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Features from './features';

export default function main() {
  return (
    <div className="drawer w-screen">
      <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
      <div
        id="home"
        className="drawer-content flex flex-col scroll-smooth  bg-gradient-to-br from-primary to-secondary custom-scrollbar">
        <Navbar />
        <HeadSection />
        {FeaturesList.map((feature, i) => {
          return (
            <div className="bg-base-100">
              <Features
                key={i}
                Title={feature.Title}
                Image={feature.Image}
                Description={feature.Description}
                FlexProp={i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
              />
              <hr className="border-t-2 border-neutral" />
            </div>
          );
        })}
        <div className="bg-base-100">
          <Footer />
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
