import React from "react";
import startupIndia from "../../assets/Startup-India.png";
import startupOdisha from "../../assets/Startup-Odisha.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-butter via-green-400 to-green-300 text-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4 grid-cols-1">
          {/* Branding */}
          <div>
            <h1 className="mb-2 text-5xl font-bold">
              <a href="/#home">
                EV<span className="text-primary">Fix</span>
              </a>
            </h1>
            <p className="text-sm mb-3">Helping garages go electric ⚡</p>

            {/* Affiliation Logos */}
            <div className="flex items-center space-x-4 mt-2">
              <img
                src={startupOdisha}
                alt="Startup Odisha"
                className="h-16 object-contain"
              />
              <img
                src={startupIndia}
                alt="Startup India"
                className="h-10 object-contain"
              />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <ul className="text-sm space-y-2">
              <li className="flex">
                Email:{" "}
                <a 
                  href="mailto:evfixindia@gmail.com"
                  className="hover:underline "
                >
                  evfixindia@gmail.com <br />
                  hello@evfix.in
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+91 8123747844" className="hover:underline">
                  +91 8123747844 <br />
                  +91 9853606237
                </a>
              </li>
              <li><strong>
                 Location: O-Hub 3rd-Floor, Sez Rd, Chandaka Industrial Estate,
                Bhubneshwar, Odisha-751024
              </strong>
               
              </li>
            </ul>
          </div>

          {/* Conversion CTA: Become a Partner */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Own a Garage?</h3>
            <p className="text-sm mb-3">
              Join the EV Garaz network and start servicing electric vehicles in
              your city. Be part of the future of mobility.
            </p>
            <a
              href="#contact" // here keep the link of crm to join the garage
              className="inline-block bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm transition"
            >
              Become a Partner
            </a>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6 text-2xl text-gray-800">
              <a href="#" className="hover:text-green-600">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-green-600">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-green-600">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-green-600">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-2"></div>

        {/* Legal Section */}
        <div className="text-center text-sm py-4">
          <p>© 2025 EV GARAZ PVT. LTD. All rights reserved.</p>
          <div className="space-x-4 mt-1">
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Icon - above footer bar */}
      <a
        href="https://wa.me/8123747844"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-3 right-3 bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>
    </>
  );
};

export default Footer;
