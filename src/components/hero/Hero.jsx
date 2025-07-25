import React from "react";
import evfix_logo from "../../assets/evfix_logo.png";

const Hero = () => {
  return (
    <main className="bg-gradient-to-r from-butter via-green-400 to-green-200 text-black min-h-screen flex items-center">
      <section className="container mx-auto px-5 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Welcome to EV<span className="text-white">FiX</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            FIX YOUR EV WITH EVFIX
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-800 max-w-xl mx-auto md:mx-0 mb-6">
            India's fastest-growing services provider. Join forces with EVFix and supercharge your EV business. Accelerate growth, drive innovation, and power the future of electric mobility.
          </p>
          <a href="#contact">
            <button className="rounded-full bg-gray-600 px-6 py-3 text-white font-semibold shadow-md hover:bg-green-600 transition duration-300">
              Get Started
            </button>
          </a>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-10">
          <img
            src={evfix_logo}
            alt="EV Fix Logo"
            className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] pt-6 pb-6 hover:scale-105 transition-transform duration-500 drop-shadow-xl"
          />
        </div>
        
      </section>
    </main>
  );
};

export default Hero;
