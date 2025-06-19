import React from "react";

const Navbar = () => {
  return (
    <header className="bg-navbar">
      <nav className="container">
        {/*Logo section*/}
        <div className="text-2xl md:text-3xl text-black">
          <a href="#">
            ev<span className="inline-block text-green-500 ">fix</span>
          </a>
        </div>
        {/*DEsktop menu section*/}
        <div className="text-2xl flex space-x-6">
          <ul class="flex space-x-6">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        {/*Mobile menu section*/}
      </nav>
    </header>
  );
};

export default Navbar;
