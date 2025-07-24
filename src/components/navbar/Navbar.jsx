import React, { useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[99] bg-navbar border-b-[4px] border-white">
        <nav className="w-full px-4 flex justify-between items-center h-[100px] py-10">
          {/* Logo section */}
          <div className="h-[100px] w-[145px] overflow-hidden flex items-center justify-center">
            <a onClick={() => scrollToSection("/")} className="cursor-pointer">
              <img
                src={logo}
                alt="Logo"
                className="object-contain brightness-5"
              />
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10 text-black">
              {/* Home dropdown */}
              <li className="group relative cursor-pointer">
                <button
                  onClick={() => scrollToSection("/")}
                  className="flex items-center gap-[2px] h-[72px] hover:text-green-500 transition-all"
                >
                  Home
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </button>
                {/* Dropdown */}
                <div className="absolute left-0 top-full z-[99999] hidden w-[150px] bg-gray-100 p-2 text-black group-hover:block shadow-md rounded-md">
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => scrollToSection("about")}
                        className="block w-full text-left p-2 hover:bg-green-500 rounded"
                      >
                        About us
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection("services")}
                        className="block w-full text-left p-2 hover:bg-green-500 rounded"
                      >
                        Services
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection("policy")}
                        className="block w-full text-left p-2 hover:bg-green-500 rounded"
                      >
                        Privacy policy
                      </button>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-green-500 transition-all"
                >
                  About us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-green-500 transition-all"
                >
                  Services
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-green-500 transition-all"
                >
                  Contact
                </button>
              </li>

              <li>
                <div className="flex items-center gap-2">
                  <BiPhoneCall className="text-xl h-[40px] w-[40px] rounded-md p-2 text-white bg-primary hover:bg-green-500" />
                  <div>
                    <p className="text-sm">Call us on</p>
                    <p className="text-lg">
                      <a href="tel:+91 8123747844">+91 8123747844</a>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center gap-4 md:hidden text-white">
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;
