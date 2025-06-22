import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

const AboutUsPage = () => {
  const images = [img1, img2, img3, img4];

  return (
    <section className="bg-slate-100 dark:bg-slate-900 dark:text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Top Grid: Image Carousel + Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-14">
          <div>
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              spaceBetween={20}
              slidesPerView={1}
              className="w-full h-[300px] sm:h-[400px] md:h-[450px] rounded-2xl shadow-xl border-4 border-green-300"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`Garage ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="space-y-6 md:px-6 text-gray-700 dark:text-gray-300 -translate-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white">
              About EV Garaz
            </h2>
            <p className="text-base sm:text-lg leading-relaxed">
              EV GARAZ is a forward-thinking MSME startup based in Bhubaneswar, Odisha,
              tackling key challenges in India's electric vehicle (EV) repair and maintenance sector.
              Our mission is to build India's largest network of EV-friendly garages, equipping local
              workshops with the right tools, spare parts, and expert training.
            </p>
            <p className="text-base sm:text-lg">
              With over <span className="font-semibold text-green-600 dark:text-green-400">21+ garages</span> and
              <span className="font-semibold text-green-600 dark:text-green-400"> 150+ mechanics</span>, we’re leading
              India's EV servicing transformation — with faster diagnostics, expert repairs, and
              doorstep services.
            </p>
            <a
              href="#contact"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-green-700 transition"
            >
              Join Us / Contact Us
            </a>
          </div>
        </div>

        {/* Timeline and Core Values Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-2 -translate-y-4">
          {/* Timeline or Milestones with Animation */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800 dark:text-white">
              Milestones
            </h3>
            <div className="relative pl-6 border-l-2 border-green-400 space-y-10">
              {[
                {
                  date: "Jan 2024",
                  description: "EV Garaz founded with the vision to electrify India's garages."
                },
                {
                  date: "Apr 2024",
                  description: "Onboarded first 5 garages and trained 20 mechanics."
                },
                {
                  date: "Sep 2024",
                  description: "Crossed 150+ trained mechanics across 3 cities."
                }
              ].map((milestone, index) => (
                <div
                  key={index}
                  className="relative animate-fadeInUp opacity-0"
                  style={{ animation: `fadeInUp 0.8s ease forwards ${index * 500}ms` }}
                >
                  <div className="absolute -left-3 top-1 w-3 h-3 bg-green-500 rounded-full"></div>
                  <p className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300">
                    <span className="font-bold text-green-600 dark:text-green-400">{milestone.date}</span> – {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800 dark:text-white">
              Our Core Values
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { title: "Innovation", icon: "💡" },
                { title: "Sustainability", icon: "🌱" },
                { title: "Community", icon: "🤝" },
                { title: "Efficiency", icon: "⚡" },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-xl shadow-md text-center whitespace-nowrap overflow-hidden text-ellipsis"
                >
                  <div className="text-3xl sm:text-4xl mb-2">{value.icon}</div>
                  <h4 className="text-base sm:text-lg font-medium text-gray-800 dark:text-white">
                    {value.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUsPage;