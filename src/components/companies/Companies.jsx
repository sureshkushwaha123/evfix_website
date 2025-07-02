import React from "react";

const logos = [
  "ampere.png",
  "batteries.png",
  "benlg.png",
  "bolt.png",
  "edrive.png",
  "hero.png",
  "joy e-bike.png",
  "okinava.png",
  "sahara.png",
  "skyrider.png"
];

const Companies = () => {
  return (
    <div className="bg-white py-6 overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee w-max gap-10 hover:[animation-play-state:paused]">
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={`src/assets/company_logo/${logo}`}
            alt={`Logo ${index}`}
            className="h-16"
          />
        ))}
      </div>
    </div>
  );
};

export default Companies;
