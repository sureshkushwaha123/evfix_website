import React, { useRef, useEffect } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const formRef = useRef();
  const nameInputRef = useRef(null);
  const sectionRef = useRef(null);

  // Focus name input when contact section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          nameInputRef.current?.focus();
        }
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const toastId = toast.loading("Sending your message...");

    emailjs
      .sendForm(
        "your_service_id",     // 🔁 Replace with your actual Service ID
        "your_template_id",    // 🔁 Replace with your actual Template ID
        formRef.current,
        "your_public_key"      // 🔁 Replace with your actual Public Key
      )
      .then(
        () => {
          toast.dismiss(toastId);
          toast.success("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          toast.dismiss(toastId);
          toast.error("Something went wrong. Try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div
      id="contact"
      ref={sectionRef}
      className="min-h-screen bg-white px-4 py-16 md:px-20"
    >
      {/* Hero */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Let's Connect</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We're here to help your garage go electric. Reach out for onboarding, support, or collaborations.
        </p>
      </div>

      {/* Grid: Map + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
        {/* Map */}
        <div className="w-full h-[520px] rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="EV Garaz Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.6873001895206!2d85.79826557429489!3d20.354532781131418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909945d29cb3b%3A0x1b6a81b09a37ff02!2sO-HUB%20(Startup%20Odisha)!5e0!3m2!1sen!2sin!4v1751005858386!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 rounded-2xl shadow-md"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="user_name"
                required
                ref={nameInputRef}
                className="w-full p-3 border rounded focus:outline-green-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Phone</label>
              <input
                type="text"
                name="user_phone"
                className="w-full p-3 border rounded focus:outline-green-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full p-3 border rounded focus:outline-green-600"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Subject</label>
              <select
                name="subject"
                required
                className="w-full p-3 border rounded focus:outline-green-600"
              >
                <option value="">Select a topic</option>
                <option>Garage Onboarding</option>
                <option>Partnership</option>
                <option>Customer Support</option>
                <option>Others</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-3 border rounded focus:outline-green-600"
            />
          </div>

          <div className="mt-6 text-right">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* CTA Cards */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-center">
        <div className="border rounded-xl p-6 hover:shadow-md">
          <h3 className="text-lg font-semibold mb-2">📦 Onboard My Garage</h3>
          <p className="text-gray-600 text-sm">Get listed as an EV-ready service point.</p>
        </div>
        <div className="border rounded-xl p-6 hover:shadow-md">
          <h3 className="text-lg font-semibold mb-2">🤝 Partner with Us</h3>
          <p className="text-gray-600 text-sm">Collaborate on EV servicing, training or tech.</p>
        </div>
        <div className="border rounded-xl p-6 hover:shadow-md">
          <h3 className="text-lg font-semibold mb-2">🛠 Support</h3>
          <p className="text-gray-600 text-sm">Need help? We're here to assist you.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
