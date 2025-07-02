import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // removed Navigation
import "swiper/css";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

const AboutUsPage = () => {
  const images = [img1, img2, img3, img4];

  return (
    <section id="about" className="bg-gray-200 text-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Image Carousel + Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-14">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px]">
  <Swiper
    modules={[Autoplay]}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    loop={true}
    spaceBetween={20}
    slidesPerView={1}
    className="w-full h-full rounded-2xl shadow-xl border-2 border-green-300 overflow-hidden"
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

  {/* Corner Button - Z-index ensured */}
  <a
    href="/gallery"
    className="absolute bottom-4 right-4 z-20 bg-green-600 text-white px-4 py-2 text-sm rounded-md shadow hover:bg-green-700 transition"
  >
    More
  </a>
</div>



          <div className="space-y-6 md:px-6 text-gray-700 -translate-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              About Us
            </h2>
            <p className="text-base sm:text-lg leading-relaxed">
              EV GARAZ is a forward-thinking MSME startup based in Bhubaneswar, Odisha,
              tackling key challenges in India's electric vehicle (EV) repair and maintenance sector.
              Our mission is to build India's largest network of EV-friendly garages, equipping local
              workshops with the right tools, spare parts, and expert training.
            </p>
            <p className="text-base sm:text-lg">
              With over <span className="font-semibold text-green-600">21+ garages</span> and
              <span className="font-semibold text-green-600"> 150+ mechanics</span>, we’re leading
              India's EV servicing transformation — with faster diagnostics, expert repairs, and
              doorstep services.
            </p>
            <a
              href="#contact"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-green-700 transition"
            >
              Join Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
