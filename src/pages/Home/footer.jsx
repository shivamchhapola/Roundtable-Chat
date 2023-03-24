import React from 'react';
import { SiGithub, SiInstagram, SiLinkedin, SiTwitter } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="py-1 px-3 navbar w-full justify-between flex-col md:flex-row bg-base-100">
      <div className="h-full flex flex-row items-center">
        Made by
        <a
          target="_blank"
          href="https://instagram.com/shiv_chhapola"
          className="link text-accent pl-1.5">
          Shivam Chhapola
        </a>
      </div>
      <div className="h-full flex flex-row items-center justify-end">
        <a
          target="_blank"
          className="btn btn-ghost btn-circle normal-case text-base"
          href="https://instagram.com/shiv_chhapola">
          <SiInstagram className="text-xl md:text-2xl" />
        </a>
        <a
          target="_blank"
          className="btn btn-ghost btn-circle normal-case text-base"
          href="https://twitter.com/shiv_chhapola">
          <SiTwitter className="text-xl md:text-2xl" />
        </a>
        <a
          target="_blank"
          className="btn btn-ghost btn-circle normal-case text-base"
          href="https://github.com/shivamchhapola">
          <SiGithub className="text-xl md:text-2xl" />
        </a>
        <a
          target="_blank"
          className="btn btn-ghost btn-circle normal-case text-base"
          href="https://www.linkedin.com/in/shivamchhapola/">
          <SiLinkedin className="text-xl md:text-2xl" />
        </a>
      </div>
    </footer>
  );
}
