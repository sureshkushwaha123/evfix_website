import React from "react";
import ampere from "../../assets/company_logo/ampere.png";
import batteries from "../../assets/company_logo/batteries.png";
import benlg from "../../assets/company_logo/benlg.png";
import bolt from "../../assets/company_logo/bolt.png";
import edrive from "../../assets/company_logo/edrive.png";
import hero from "../../assets/company_logo/hero.png";
import okinava from "../../assets/company_logo/okinava.png";
import sahara from "../../assets/company_logo/sahara.png";
import skyrider from "../../assets/company_logo/skyrider.png";


const logos = [
  ampere,
  batteries,
  benlg,
  bolt,
  edrive,
  hero,
  okinava,
  sahara,
  skyrider
];

const Companies = () => {
  return (
    <div className="bg-white py-6 overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee w-max gap-10 hover:[animation-play-state:paused]">
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className="h-16"
          />
        ))}
      </div>
    </div>
  );
};

export default Companies;
