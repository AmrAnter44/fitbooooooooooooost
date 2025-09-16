// components/ServicesSection.js

import React from 'react';
import { FaChessKnight, FaRocket, FaBullhorn, FaUsers, FaPlayCircle, FaBrain } from 'react-icons/fa';

const services = [
  { icon: FaChessKnight, title: 'Digital Strategy' },
  { icon: FaRocket, title: 'Innovation & Experience Design' },
  { icon: FaBullhorn, title: 'Media Planning & Buying' },
  { icon: FaUsers, title: 'Social Media & Content Creation' },
  { icon: FaPlayCircle, title: 'Video Production' },
  { icon: FaBrain, title: 'Web & Mobile Development' },
];

export default function Service() {
  return (
    <div className="lg:flex-row lg:flex lg:justify-around bg-amber-300 mt-7 p-3">
      <div className="text-start lg:w-1/5">
        <h2 className="text-4xl font-extrabold text-gray-900 p-5">
          Our <br className="hidden lg:block"></br> <span className="lg:ml-10">Services</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 px-5">
          Have a look at what we do. Our expertise spans diverse domains to optimize your brand to its finest form.
        </p>
      </div>

      <div className="lg:3/5 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center 
                       transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="text-5xl text-amber-500 mb-4 transition-transform duration-300 group-hover:rotate-12">
              <service.icon />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

