import React, { useRef, useState } from "react";
import {
  FaEnvelope,
  FaLocationArrow,
  FaMobileAlt,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const formRef = useRef();
  const [successMsg, setSuccessMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // Replace with actual EmailJS service ID
        "your_template_id", // Replace with template ID
        formRef.current,
        "your_public_key"   // Replace with public key
      )
      .then(
        () => {
          setSuccessMsg("Message sent successfully!");
          formRef.current.reset();
          setTimeout(() => setSuccessMsg(""), 4000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setSuccessMsg("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="relative bg-gradient-to-r from-violet-950 to-violet-900 text-white">
      {/* Sticky WhatsApp Icon - above footer bar */}
<a
  href="https://wa.me/911234567890"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed z-50 bottom-20 right-3 bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition"
>
  <FaWhatsapp className="text-white text-2xl" />
</a>


      <section className="mx-auto max-w-[1200px] px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT CONTAINER */}
        <div className="flex flex-col gap-8">
          {/* EvFix Info */}
          <div>
            <h1 className="mb-3 text-xl font-bold sm:text-3xl">
              <a href="/#home">
                Ev<span className="text-primary">Fix</span>
              </a>
            </h1>
            <p className="text-sm text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate.
            </p>
            <div className="mt-5 flex items-start gap-3 text-sm">
              <FaLocationArrow className="mt-1" />
              <p>O-Hub, Sez Rd, Chandaka Industrial Estate, Bhubneshwar, Odisha-751024</p>
            </div>
            <div className="mt-3 flex items-center gap-3 text-sm">
              <FaMobileAlt />
              <p>+91 123456789</p>
            </div>
            <div className="mt-3 flex items-center gap-3 text-sm">
              <FaEnvelope />
              <p>evfixindia@gmail.com</p>
            </div>
          </div>

          {/* Quick Links - Now Horizontal */}
          <div>
  <h2 className="text-xl font-bold mb-4">Quick Links</h2>
  <ul className="flex flex-wrap gap-6 text-sm">
    <li>
      <a
        href="#home"
        className="hover:text-green-400 transition-all duration-200"
      >
        Home
      </a>
    </li>
    <li>
      <a
        href="#about"
        className="hover:text-green-400 transition-all duration-200"
      >
        About Us
      </a>
    </li>
    <li>
      <a
        href="#services"
        className="hover:text-green-400 transition-all duration-200"
      >
        Services
      </a>
    </li>
    <li>
      <a
        href="#policy"
        className="hover:text-green-400 transition-all duration-200"
      >
        Policy
      </a>
    </li>
  </ul>
</div>


        </div>

        {/* RIGHT CONTAINER */}
        <div className="flex flex-col gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full sm:w-1/2 px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <input
                  name="contact"
                  type="text"
                  placeholder="Contact Number"
                  required
                  className="w-full sm:w-1/2 px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="w-full h-[150px] px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
              />
              <button
                type="submit"
                className="self-start rounded-full bg-primary px-6 py-2 font-semibold text-white hover:bg-opacity-90 transition"
              >
                Send Message
              </button>
              {successMsg && (
                <p className="text-sm text-green-400 mt-2">{successMsg}</p>
              )}
            </form>
          </div>
        </div>
        {/* Right-Aligned Vertical Social Icons (Inside Footer) */}
<div className="hidden lg:flex flex-col gap-4 absolute top-1/3 -translate-y-1/3 right-3 z-40">
  <a href="#" className="bg-[#E1306C] p-3 rounded-full hover:scale-110 hover:shadow-lg transition duration-300">
    <FaInstagram className="text-white text-xl" />
  </a>
  <a href="#" className="bg-[#1877F2] p-3 rounded-full hover:scale-110 hover:shadow-lg transition duration-300">
    <FaFacebook className="text-white text-xl" />
  </a>
  <a href="#" className="bg-[#0A66C2] p-3 rounded-full hover:scale-110 hover:shadow-lg transition duration-300">
    <FaLinkedin className="text-white text-xl" />
  </a>
</div>


      </section>

      {/* Bottom Bar */}
      <div className="border-t-2 border-gray-300/50 py-6 text-center text-sm">
        Ev Fix. © 2025 All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
