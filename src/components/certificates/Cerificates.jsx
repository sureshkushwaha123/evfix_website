import React, { useState } from "react";
import img1 from "../../assets/Certificates/Startup India.jpg";
import img2 from "../../assets/Certificates/startup Odisha.jpg";

const certificates = [
  { src: img2, alt: "Startup Odisha" },
  { src: img1, alt: "Startup India" },
];

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="text-center py-12 px-4 bg-gray-100">
      <h2 className="text-4xl font-bold mb-10 text-green-700">Recognitions</h2>

      <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-10">
        {certificates.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(img)}
            className="cursor-pointer border border-green-500 rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 max-w-sm w-full"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-contain p-4"
              />
            </div>
            <p className="bg-green-600 text-white py-2 font-medium text-lg">{img.alt}</p>
          </div>
        ))}
      </div>

      {/* Modal for full view */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-3xl w-400xl mx-4 bg-white p-4 rounded-lg relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-3 text-gray-600 hover:text-black text-xl"
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto object-contain max-h-[60vh]"
            />
            <p className="mt-2 text-gray-700 font-semibold text-center">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
