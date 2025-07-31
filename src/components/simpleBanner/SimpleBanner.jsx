import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const videoSlides = [
  {
    url: "https://www.youtube.com/watch?v=h3FMm8_92E0",
    title: "Ingogration of new shop",
    description:
      "ଭବାନୀପାଟଣାରେ EV ଗାଡି ମରାମତି ଓ ସ୍ପେୟାର ସେଣ୍ଟର ଉଦଘାଟିତ ହେଲା",
  },
  {
    url: "https://www.youtube.com/watch?v=VOwgExk49vc",
    title: "EV Fix sponsored battery powered vehicle repairs and spares",
    description:
      "Grand inauguration of EV Fix sponsored battery powered vehicle repair and spare parts center #kalahandi #newstoday #odianews #masihanews #viralvideo"
  }
];

const SimpleBanner = () => {
  return (
    <div className="bg-gradient-to-r from-butter via-green-400 to-green-300 overflow-hidden">
      <div className="w-full px-4 py-10 md:py-12 relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="w-full cursor-grab"
        >
          {videoSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8 p-5">
                <div className="w-full max-w-full overflow-hidden">
                  <iframe
                    className="aspect-video w-full rounded-lg shadow-lg"
                    loading="lazy"
                    src={slide.url}
                    title={`Video ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 text-center text-black md:col-span-2 md:items-start md:text-left">
                  <h1 className="text-3xl font-semibold text-green-700">
                    {slide.title}
                  </h1>
                  <p className="text-base text-gray-800 leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SimpleBanner;
