import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/Footer";


import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const images = [img1, img2, img3];

const GalleryPage = () => {
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
              className="overflow-hidden rounded-xl shadow-md group relative"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-lg font-medium">
                Garage #{index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GalleryPage;
