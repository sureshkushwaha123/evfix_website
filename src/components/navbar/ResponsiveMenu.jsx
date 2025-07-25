import React, { useEffect, useRef } from "react";
import {
  HomeIcon,
  InformationCircleIcon,
  CogIcon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
  const menuRef = useRef(null);

  // 🔄 Handle outside click to close menu
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        showMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        toggleMenu();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showMenu, toggleMenu]);

  const menuItems = [
    { label: "Home", href: "/", icon: HomeIcon },
    { label: "About us", href: "#about", icon: InformationCircleIcon },
    { label: "Services", href: "#services", icon: CogIcon },
    { label: "Contact", href: "#contact", icon: PhoneIcon },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`${
          showMenu ? "fixed inset-0 bg-black bg-opacity-50 z-40" : "hidden"
        }`}
      />

      {/* Side Menu */}
      <div
        ref={menuRef}
        className={`${
          showMenu ? "left-0" : "-left-full"
        } fixed top-10 h-screen w-[70vw] bg-gradient-to-br from-slate-950 to-slate-20 backdrop-blur-md z-50 text-white transition-all duration-500 
        pt-20 pb-16 px-8 flex flex-col justify-between md:hidden`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-white hover:text-yellow-400"
          aria-label="Close menu"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        {/* Navigation */}
        <nav role="navigation" aria-label="Mobile main menu">
          <ul className="space-y-6 text-lg">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 hover:text-yellow-400 transition duration-300"
              >
                <item.icon className="h-5 w-5" />
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="text-sm text-center mt-auto text-slate-200">
          © 2025 EV GARAZ PVT. LTD. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
