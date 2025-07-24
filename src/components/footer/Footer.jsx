import React from "react";
import {
  FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp,
} from "react-icons/fa";
import startupIndia from "../../assets/Startup-India.png";
import startupOdisha from "../../assets/Startup-Odisha.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-butter via-green-400 to-green-300 text-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4 grid-cols-1">
          <div>
            <h1 className="mb-2 text-5xl font-bold">
              <a href="#home" className="cursor-pointer">
                EV<span className="text-primary">Fix</span>
              </a>
            </h1>
            <p className="text-sm mb-3">Helping garages go electric ⚡</p>
            <div className="flex items-center space-x-4 mt-2">
              <img src={startupOdisha} alt="Startup Odisha" className="h-16 object-contain" />
              <img src={startupIndia} alt="Startup India" className="h-10 object-contain" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <ul className="text-sm space-y-2">
              <li>Email:
                <br />
                <a href="mailto:evfixindia@gmail.com" className="hover:underline block">evfixindia@gmail.com</a>
                <a href="mailto:hello@evfix.in" className="hover:underline block">hello@evfix.in</a>
              </li>
              <li>Phone:
                <br />
                <a href="tel:+918123747844" className="hover:underline block">+91 8123747844</a>
                <a href="tel:+919853606237" className="hover:underline block">+91 9853606237</a>
              </li>
              <li><strong>Location:</strong> O-Hub 3rd-Floor, Sez Rd, Chandaka Industrial Estate, Bhubaneswar, Odisha - 751024</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Own a Garage?</h3>
            <p className="text-sm mb-3">
              Join the EV Garaz network and start servicing electric vehicles in your city. Be part of the future of mobility.
            </p>
            <a href="#contact" className="inline-block bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm transition">
              Become a Partner
            </a>

            <div className="flex space-x-4 mt-6 text-2xl text-gray-800">
              <a href="#" className="hover:text-green-600" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-green-600" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="hover:text-green-600" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="hover:text-green-600" aria-label="Facebook"><FaFacebookF /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-2"></div>

        <div className="text-center text-sm py-4">
          <p>© 2025 EV GARAZ PVT. LTD. All rights reserved.</p>
          <div className="space-x-4 mt-1">
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <a href="/terms" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/8123747844"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-3 right-3 bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>
    </>
  );
};

export default Footer;
