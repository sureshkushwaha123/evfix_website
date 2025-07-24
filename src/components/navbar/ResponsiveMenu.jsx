import React from "react";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } h-screen w-[75%] bg-slate-950 fixed top-0 z-50 transition-all duration-500 
      pt-24 pb-6 px-8 flex justify-between text-white flex-col md:hidden`}
    >
      <nav className="mt-10">
        <ul className="space-y-4 text-xl">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About us </a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="footer">
        <h1>© 2025 All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
