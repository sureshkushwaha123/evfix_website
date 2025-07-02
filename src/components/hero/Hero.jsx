import React from "react";
import evfix_logo from "../../assets/evfix_logo.png";

const Hero = () => {
  return (
    <main className="bg-gradient-to-r from-butter via-green-400 to-green-300 text-black">
      <section className="container mx-auto flex min-h-screen flex-col justify-center px-4 py-16 md:flex-row md:items-center">
        <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2">

          {/* Text Content */}
          <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Welcome to <span className="text-white">EV</span> <span>FiX</span>
            </h1>
            <p className="text-2xl font-bold text-gray-800">
              Fix your EV with EVFIX
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-800 max-w-xl">
              India's fastest-growing services provider. Join forces with EVFix and supercharge your EV business. Accelerate growth, drive innovation, and power the future of electric mobility.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
  <a href="#contact">
    <button className="rounded-full bg-gray-600 px-6 py-2 text-white font-semibold shadow-md hover:bg-green-600 transition duration-300">
      Get Started
    </button>
  </a>
</div>

          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={evfix_logo}
              alt="EV Fix Logo"
              className="w-[300px] md:w-[500px] pt-10 pb-6 hover:scale-105 transition-transform duration-500 drop-shadow-xl"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
