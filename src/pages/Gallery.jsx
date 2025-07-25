import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


const images = [
  "/gallery/img1.jpg",
  "/gallery/img2.jpg",
  "/gallery/img3.jpg",
  "/gallery/img4.jpg",
  "/gallery/img5.png",
  "/gallery/img6.png",
  "/gallery/img7.png",
  "/gallery/img8.png",
  "/gallery/img9.png",
  "/gallery/img10.png",
  "/gallery/img11.png",
  "/gallery/img12.png",
  "/gallery/img13.png",
  "/gallery/img14.png",
  "/gallery/img15.jpg",
  "/gallery/img16.jpg",
  "/gallery/img17.jpg",
  "/gallery/img18.jpg",
  "/gallery/img19.jpg",
  "/gallery/img20.jpg",
  "/gallery/img21.jpg",
  "/gallery/img22.jpg",
  "/gallery/img23.jpg",
];

const GalleryPage = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = images.map((src) => ({ src }));

  return (
    <>
      <Navbar />

      <section className="bg-white py-16 pt-28 px-4 sm:px-8 md:px-16">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-700 mb-4">
            Our Work in Frames
          </h1>
          <p className="text-gray-600 text-lg">
            Discover our garage network and the work we're doing to electrify India.
          </p>
        </div>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md group relative cursor-pointer"
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-lg font-medium">
                Photo #{index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox viewer */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={slides}
      />

      <Footer />
    </>
  );
};

export default GalleryPage;
