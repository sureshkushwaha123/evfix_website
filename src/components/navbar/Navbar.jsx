import React, { useEffect, useState } from "react";
import { BiSolidSun, BiPhoneCall, BiSolidMoon } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import logo from '../../assets/logo.png';
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [showMenu,setShowMenu]=useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-[99] z-[99] bg-navbar border-b-[2px] border-green-400">
      <nav className="container flex items-center justify-between h-[100px] py-10">
        {/*Logo section*/}
        <div className="h-[100px] w-[145px] overflow-hidden flex items-center justify-center">
          <a href="/">
          <img src={logo} alt="Logo" className="object-contain brightness-5" />
          </a>
        </div>

        {/*Desktop menu section*/}
        <div className="hidden md:block">
          <ul className="flex items-center gap-10">
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] h-[72px]">
                Home{" "}
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              {/* dropdown section (HOME) */}
              <div
                className="absolute left-0 top-full z-[99999] hidden w-[150px] bg-gray-100
               p-2 text-black group-hover:block shadow-md rounded-md"
              >
                <ul className="space-y-3">
                  <li className="p-2 hover:bg-green-500">About us </li>
                  <li className="p-2 hover:bg-green-500">Services </li>
                  <li className="p-2 hover:bg-green-500">Privacy policy </li>
                </ul>
              </div>
            </li>
            <li className="group cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] h-[72px]">
                Services{" "}
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              {/* dropdown full width section (Services) */}
              <div
                className="absolute left-0 z-[99999] hidden w-full rounded-b-3xl bg-white
               text-black p-2 shadow-md group-hover:block"
              >
                <div className="grid grid-cols-3 gap-5">
                  <div className="overflow-hodden">
                    <img
                      src="https://picsum.photos/200"
                      alt="not found"
                      className="max-h-[300px]
                    w-full rounded-b-3xl object-fill"
                    />
                  </div>
                  <div className="col-span-2">
                    <h1 className="text-xl font-semibold pb-3">Best selling</h1>
                    <p className="text-sm text-slate-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit, quis, corporis perferendis saepe cumque dignissimos
                      illo explicabo odio expedita dolores quas provident. Vitae
                      assumenda aperiam cumque perferendis. Atque, cumque
                      nesciunt.
                      <div className="grid grid-cols-3 mt-4">
                        <div>
                          <h1 className="text-xl font-semibold pb-1">
                            Developemnt
                          </h1>
                          <ul className="space-y-2">
                            <li className="cursor-pointer text-black/80 hover:text-green-600">
                              evfix
                            </li>
                            <li className="cursor-pointer text-black/80 hover:text-green-600">
                              evfix
                            </li>
                            <li className="cursor-pointer text-black/80 hover:text-green-600">
                              evfix
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h1 className="text-xl font-semibold pb-1">
                            Developemnt
                          </h1>
                          <ul className="space-y-2">
                            <li className="cursor-pointer text-black/80 hover:text-green-600">
                              evfix
                            </li>
                            <li className="cursor-pointer text-black/80 hover:text-green-600">
                              evfix
                            </li>
                            <li className="cursor-pointer text-black/80 hover:text-green-600">
                              evfix
                            </li>
                          </ul>
                        </div>
                        <div>
                          <img
                            src="https://picsum.photos/200"
                            alt="not found"
                          />
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>About us</li>
            <li>Contact</li>
            <li>
              <div className="flex items-center gap-2">
                <div>
                  <BiPhoneCall className="text-xl h-[40px] w-[40px] rounded-md p-2 text-white bg-primary hover:bg-green-500" />
                </div>
                <div>
                  <p className="text-sm">Call us on</p>
                  <p className="text-lg">
                    {" "}
                    <a href="tel:+91123456789">+91 123456789</a>
                  </p>
                </div>
              </div>
            </li>
            {/*light and dark mode switches */}
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}
          </ul>
        </div>
        {/*Mobile header section*/}
        <div className="flex items-center gap-4 md:hidden">
           {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}
            {
              showMenu? <HiMenuAlt1 
              onClick={toggleMenu}
              className="cursor-pointer transition-all"
              size={30}
              /> : <HiMenuAlt3
              onClick={toggleMenu}
              className="cursor-pointer transition-all"
              size={30}
              />
            }
        </div>
      </nav>
    </header>
    {/*Mobile menu section*/}
    <ResponsiveMenu showMenu={showMenu} />
    </>

  );
};

export default Navbar;
