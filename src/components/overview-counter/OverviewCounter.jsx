import React from "react";
import CountUp from "react-countup";

const OverviewCounter = () => {
  return (
    <section className="container h-12 md:h-5">
      <div className="
        grid grid-cols-4 divide-x divide-slate-700 mx-auto w-full
        md:max-w-[850px] shadow-lg 
        bg-gradient-to-r from-butter via-yellow-300 to-yellow-200
        border border-yellow-400 rounded-xl
        -translate-y-10 md:-translate-y-20 my-4
        md:p-6 p-4 text-black relative z-10
      ">
        <div className="flex flex-col items-center justify-center p-3">
          {/* dark:text-green-300 to enable dark theme in h1 */}
          <h1 className="text-sm font-bold text-black sm:text-lg md:text-3xl">
            <CountUp end={31} suffix="+" duration={2.75} />
          </h1>
          <h1 className="sm:text-md font-bold text-xs md:text-lg">Number of Garages</h1>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-sm font-bold text-black sm:text-lg md:text-3xl">
            <CountUp end={800} suffix="+" duration={2.75} />
          </h1>
          <h1 className="sm:text-md font-bold text-xs md:text-lg">Vehicle Serviced</h1>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-sm font-bold text-black sm:text-lg md:text-3xl">
            <CountUp end={1056} suffix="+" duration={2.75} />
          </h1>
          <h1 className="sm:text-md font-bold text-xs md:text-lg">Hours Of Support</h1>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-sm font-bold text-black sm:text-lg md:text-3xl">
            <CountUp end={150} suffix="+" duration={2.75} />
          </h1>
          <h1 className="sm:text-md font-bold text-xs md:text-lg">Trained Mechanics</h1>
        </div>
      </div>
    </section>
  );
};

export default OverviewCounter;
