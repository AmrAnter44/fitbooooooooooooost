"use client";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function FitBoostFooter() {
  return (
    <footer 
      className="w-full text-white py-8 px-4"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">
              FIT<span className="text-yellow-400">BOOST</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Transforming fitness businesses across Egypt with proven digital marketing strategies and growth solutions.
            </p>
            <div className="w-16 h-1 bg-yellow-400 mx-auto md:mx-0"></div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-yellow-400 mb-4">GET IN TOUCH</h4>
            <div className="space-y-3">
              <a 
                href="mailto:fitboost64@gmail.com"
                className="flex items-center justify-center md:justify-start space-x-3 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <Mail size={18} />
                <span className="text-sm">fitboost64@gmail.com</span>
              </a>
              <div className="flex items-center justify-center md:justify-start space-x-3 text-gray-300">
                <MapPin size={18} />
                <span className="text-sm">Cairo, Egypt</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-yellow-400 mb-4">OUR SERVICES</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Digital Marketing Strategy</li>
              <li>Social Media Management</li>
              <li>Brand Development</li>
              <li>Member Retention Systems</li>
              <li>Equipment Planning</li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} FitBoost Agency. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/share/1CJLbzMwpq/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors transform hover:scale-110"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://www.instagram.com/fitbo.ost?igsh=cm8yOTc5ZDJ5dXh2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>

              <a
                href="mailto:fitboost64@gmail.com"
                className="text-gray-400 hover:text-yellow-400 transition-colors transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-6">
          <div className="w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded"></div>
        </div>
      </div>
    </footer>
  );
}