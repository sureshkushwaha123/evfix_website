import React from 'react';
import { FaLocationArrow, FaMobileAlt } from 'react-icons/fa';
import FooterLinks from './FooterLinks';

const Footer = () => {
  const importantLinks = [
    { name: "Home", link: "/#home" },
    { name: "Services", link: "/#services" },
    { name: "About Us", link: "/#about" },
    { name: "Contact", link: "/#contact" },
    { name: "Privacy Policy", link: "/#privacy-policy" }
  ];

  return (
    <>
      <footer className="text-white rounded-t-3xl bg-gradient-to-r from-violet-900 to via-violet-900">
        <div className="mx-auto max-w-[1200px] p-4">
          {/* footer content section */}
          <div className="grid py-5 md:grid-cols-3">
            <div className="px-3 py-4">
              <h1 className="mb-3 text-justify text-2xl font-bold sm:text-left sm:text-3xl">
                <a href="/#home">
                  Ev
                  <span className="inline-block font-bold text-green-600 dark:text-green-400">
                    Fix
                  </span>
                </a>
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quasi voluptatum quidem obcaecati repudiandae amet facilis dicta a,
                delectus voluptate excepturi atque deleniti odio adipisci ipsum ullam
                culpa necessitatibus consequatur quam?
              </p>
              <br />
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Bhargavi Vihar, Sardeipur Near Uttara Chhak, BBSR-751002</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+91 1234567890</p>
              </div>
            </div>
            
            {/* Quick Links */}
              <div className="px-2 py-6">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Quick Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <FooterLinks links={importantLinks} />
                </ul>
              </div>

            <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 md:pl-8">
                {/* Contact Form */}
              <div className="px-2 py-6">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Contact Us
                </h1>
                <form
                  action="https://formspree.io/f/xzzgjrkv" // Replace with your actual Formspree form ID
                  method="POST"
                  className="flex flex-col gap-4"
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full sm:w-1/2 px-6 py-3 rounded text-black"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full sm:w-1/2 px-6 py-3 rounded text-black"
                      required
                    />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    className="w-full px-6 py-3 rounded text-black"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* footer copyright section */}
          <div className="bottom-footer">
            <p className="border-t-2 border-gray-300/50 py-6 text-center text-sm">
              Copyright @ 2025. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
