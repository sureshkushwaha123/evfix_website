import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SimpleBanner = () => {
  const videoUrls = [
    "https://www.youtube.com/embed/JgDNFQ2RaLQ",
    "https://www.youtube.com/embed/ScMzIvxBSi4",
    "https://www.youtube.com/embed/E7wJTI-1dvQ"
  ];

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
          {videoUrls.map((url, index) => (
            <SwiperSlide key={index}>
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8 p-5">
                <div className="w-full max-w-full overflow-hidden">
                  <iframe
                    className="aspect-video w-full"
                    src={url}
                    title={`Video ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 text-center text-black dark:text-gray-700 md:col-span-2 md:items-start md:text-left">
                  <h1 className="text-3xl font-bold">
                    Sapphire new song of Ed Sheeran
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum deleniti hic voluptatem earum possimus, nam et aliquid
                    itaque, non sint exercitationem odio perspiciatis optio, omnis
                    debitis sunt consequatur inventore dolorem.
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
