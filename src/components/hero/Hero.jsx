import React from "react";
import evfix_logo from "../../assets/evfix_logo.jpg";

const Hero = () => {
  return (
    <main className="bg-gradient-to-r from-green-800 to via-green-800 dark:bg-green-850 text-white">
      <section className="container mx-auto flex min-h-screen flex-col justify-center px-4 py-16 md:flex-row md:items-center">
        <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2">

          {/* Text Content */}
          <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Welcome to <span className="text-green-500">EV</span> <span>FiX</span>
            </h1>
            <p className="text-xl font-medium text-white/90">
              Fix your EV with EVFIX
            </p>
            <p className="text-base md:text-lg leading-relaxed text-white/75 max-w-xl">
              India's fastest-growing services provider. Join forces with EVFix and supercharge your EV business. Accelerate growth, drive innovation, and power the future of electric mobility.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="rounded-full bg-green-500 px-6 py-2 text-white font-semibold shadow-md hover:bg-green-600 transition duration-300">
                Get Started
              </button>
              <button className="rounded-full border-2 border-white px-6 py-2 text-white font-semibold hover:bg-white hover:text-violet-900 transition duration-300">
                Learn More
              </button>
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