import React, { useState, useEffect } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import logo from "../../assets/logo.png";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const sections = ["home", "about", "services", "policy", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[99] bg-navbar border-b-[4px] border-white shadow-md backdrop-blur-lg antialiased">
        <nav className="w-full px-10 flex justify-between items-center h-[100px] py-10">
          {/* Logo - Reloads Page */}
          <div className="h-[100px] w-[145px] overflow-hidden flex items-center justify-center">
            <a href="/" aria-label="Reload to Home">
              <img src={logo} alt="Logo" className="object-contain brightness-5" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10 text-black">
              {/* Home - Reloads Page */}
              <li className="group relative cursor-pointer">
                <button
                  onClick={() => window.location.reload()}
                  className={`flex items-center gap-1 h-[72px] transition-all ${
                    activeSection === "home" ? "text-green-600 font-bold" : "hover:text-green-500"
                  }`}
                >
                  Home
                  <FaCaretDown className="transition-transform duration-300 group-hover:rotate-180" />
                </button>

                {/* Dropdown */}
                <div className="absolute left-0 top-full z-50 hidden group-hover:block bg-white w-[150px] p-2 rounded shadow transition-all duration-300">
                  <ul className="space-y-2">
                    {["about", "services", "policy"].map((id) => (
                      <li key={id}>
                        <button
                          onClick={() => scrollToSection(id)}
                          className="block w-full text-left p-2 text-black hover:bg-green-500 rounded"
                        >
                          {id === "policy" ? "Privacy Policy" : id.charAt(0).toUpperCase() + id.slice(1)}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              {/* Other nav items */}
              {["about", "services", "contact"].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`transition-all ${
                      activeSection === id ? "text-green-600 font-bold" : "hover:text-green-500"
                    }`}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}

              {/* Call */}
              <li>
                <div className="flex items-center gap-2">
                  <BiPhoneCall className="text-xl h-[40px] w-[40px] rounded-md p-2 text-white bg-primary hover:bg-green-500" />
                  <div>
                    <p className="text-sm">Call us on</p>
                    <p className="text-lg">
                      <a href="tel:+918123747844">+91 8123747844</a>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden text-white">
            <button
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={showMenu}
              aria-controls="mobile-menu"
            >
              {showMenu ? <HiMenuAlt1 size={30} /> : <HiMenuAlt3 size={30} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Component */}
      <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;