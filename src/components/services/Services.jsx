import React, { useState, useRef, useEffect } from "react";
import {
  FaTools,
  FaAmbulance,
  FaWrench,
  FaShieldAlt,
  FaHeadset,
  FaLeaf,
} from "react-icons/fa";
//  services cards
const services = [
  {
    id: 1,
    title: "Comprehensive Maintenance",
    description: "Regular inspections, battery diagnostics, and software updates to ensure your EV runs efficiently.",
    details: [
      "Regular inspections to ensure optimal performance.",
      "Battery diagnostics to maximize lifespan.",
      "Software updates for improved efficiency.",
    ],
    icon: <FaTools size={30} className="text-white" />,
  },
  {
    id: 2,
    title: "Emergency Repair Services",
    description: "24/7 roadside help with fast repairs by expert technicians.",
    details: [
      "24/7 roadside assistance for breakdowns or issues.",
      "Quick fixes to minimize downtime.",
      "Expert technicians with cutting-edge tools.",
    ],
    icon: <FaAmbulance size={30} className="text-white" />,
  },
  {
    id: 3,
    title: "Flexible Maintenance Plans",
    description: "Tailored plans with predictable costs and flexible schedules.",
    details: [
      "Plans tailored to individual driving needs.",
      "Affordable and predictable costs.",
      "Hassle-free scheduling options.",
    ],
    icon: <FaWrench size={30} className="text-white" />,
  },
  {
    id: 4,
    title: "Advanced Safety Checks",
    description: "Detailed checks of tires, brakes, and lights to prevent issues.",
    details: [
      "Braking, tire, and lighting assessments.",
      "Real-time safety issue monitoring.",
      "Detailed service reports for peace of mind.",
    ],
    icon: <FaShieldAlt size={30} className="text-white" />,
  },
  {
    id: 5,
    title: "Dedicated Support Team",
    description: "Expert help anytime with proactive reminders and tips.",
    details: [
      "24/7 support for queries or concerns.",
      "Expert EV care and maintenance tips.",
      "Reminders for scheduled check-ups.",
    ],
    icon: <FaHeadset size={30} className="text-white" />,
  },
  {
    id: 6,
    title: "Sustainable Solutions",
    description: "Eco-friendly practices and habits for a greener drive.",
    details: [
      "Eco-friendly maintenance practices.",
      "Promoting sustainable driving habits.",
    ],
    icon: <FaLeaf size={30} className="text-white" />,
  },
];

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    if (expandedService !== null && servicesRef.current) {
      // Scroll to top of Services section (not inside the expanded card!)
      servicesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [expandedService]);

  return (
    <section
      className="bg-gray-200 py-20 snap-start scroll-mt-20"
      id="services"
      ref={servicesRef}
    >
      <div className="max-w-6xl mx-auto px-2">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
          Our Solutions
        </h2>

        {/* expanded services card */}
        <div className="transition-all duration-500 ease-in-out">
          {expandedService === null ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-transform transform hover:scale-105 text-center flex flex-col items-center justify-between"
                >
                  <div className="bg-green-600 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <button
                    onClick={() => setExpandedService(service.id)}
                    className="bg-green-600 text-white text-sm px-4 py-2 rounded-md hover:bg-green-700 transition"
                  >
                    More
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 shadow-xl mt-4 text-center">
              {services
                .filter((s) => s.id === expandedService)
                .map((service) => (
                  <div key={service.id}>
                    <div className="flex justify-center mb-6">
                      <div className="bg-green-600 w-12 h-12 flex items-center justify-center rounded-full">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {service.title}
                    </h3>
                    <ul className="list-disc list-inside text-left space-y-3 text-gray-700 mb-6 max-w-xl mx-auto">
                      {service.details.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                    <button
                      onClick={() => setExpandedService(null)}
                      className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
                    >
                      Back
                    </button>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
