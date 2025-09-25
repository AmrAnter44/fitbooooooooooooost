"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Check, Quote, ChevronDown, Star } from 'lucide-react';

const ResultsCaseStudies = () => {
  const [expandedTestimonial, setExpandedTestimonial] = useState(null);

  // Simplified animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Case Studies Data
  const caseStudies = [
    {
      name: "X GYM",
      location: "Giza, Egypt", 
      beforeStats: ["200 Members", "160K EGP Monthly", "45% Retention"],
      afterStats: ["380 Members", "320K EGP Monthly", "85% Retention"],
      growth: "150%",
      timeframe: "4 months",
      testimonial: "FitBoost completely transformed our business model. The digital marketing strategy brought us from struggling to dominating our local market.",
      author: "Mostafa Said",
      position: "Gym Owner",
      services: ["Digital Marketing Strategy", "Website Development", "Member Retention System", "Social Media Management"]
    },
    {
      name: "EAGLE GYM",
      location: "Fustat, Egypt",
      beforeStats: ["150 Members", "140K EGP Monthly", "60% Retention"],
      afterStats: ["300 Members", "250K EGP Monthly", "90% Retention"],
      growth: "190%",
      timeframe: "5 months",
      testimonial: "Working with FitBoost wasn't just an add-on; it was a real turning point. Their team helped us double our members and revenue in record time, solidifying our position in the market.",
      author: "Mostafa Tika",
      position: "Gym Owner",
      services: ["Digital Marketing Strategy", "Website Development", "Social Media Management"]
    }

  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Simple background elements */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-4 w-16 h-16 border border-amber-300 rotate-45"></div>
        <div className="absolute bottom-20 right-4 w-12 h-12 border border-amber-300 -rotate-12"></div>
      </div>

      <div className="relative px-4 py-12 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            SUCCESS <span className="text-amber-300">STORIES</span>
          </h2>
          <div className="w-16 h-1 bg-amber-300 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            REAL RESULTS FROM REAL FITNESS BUSINESSES
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-4 sm:p-6 flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
            >
              {/* Top accent */}
              <div className="w-full h-1 bg-gradient-to-r from-amber-300 to-yellow-500 rounded mb-6"></div>

              {/* Header with growth */}
              <div className="flex flex-col space-y-4 mb-6">
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-amber-300 mb-2">
                    {study.name}
                  </h3>
                  <p className="text-gray-400 mb-3 text-sm">{study.location}</p>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-300 fill-current" />
                    ))}
                  </div>
                </div>
                
                {/* Growth box */}
                <div className="bg-gradient-to-r from-amber-300 to-yellow-500 text-black p-3 rounded-xl text-center">
                  <div className="text-xl sm:text-2xl font-bold">{study.growth}</div>
                  <div className="text-xs font-semibold">GROWTH in {study.timeframe}</div>
                </div>
              </div>

              {/* Before/After Comparison */}
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-3">
                  {/* Before Column */}
                  <div className="bg-gray-900/10 border border-gray-800/30 rounded-lg p-3">
                    <div className="flex items-center justify-center mb-3">
                      <div className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        BEFORE
                      </div>
                    </div>
                    <div className="space-y-2">
                      {study.beforeStats.map((stat, idx) => (
                        <div key={idx} className="text-center p-2 bg-gray-800/20 rounded">
                          <span className="text-gray-300 font-semibold text-xs block">{stat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow & VS */}
                  <div className="bg-yellow-900/10 border border-yellow-800/30 rounded-lg p-3">
                    <div className="flex items-center justify-center mb-3">
                      <div className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                        AFTER
                      </div>
                    </div>
                    <div className="space-y-2">
                      {study.afterStats.map((stat, idx) => (
                        <div key={idx} className="text-center p-2 bg-yellow-800/20 rounded">
                          <span className="text-yellow-300 font-semibold text-xs block">{stat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* VS Divider */}
                <div className="relative my-3">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-gray-900 px-3 text-gray-400 text-xs font-bold">VS</span>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div 
                className="bg-amber-300 text-black p-4 rounded-xl mb-4 cursor-pointer flex-grow"
                onClick={() => setExpandedTestimonial(expandedTestimonial === index ? null : index)}
              >
                <Quote className="w-6 h-6 mb-2 opacity-40" />
                <p className="text-xs sm:text-sm leading-relaxed font-medium mb-3">
                  "{study.testimonial}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-xs sm:text-sm">{study.author}</p>
                    <p className="text-xs opacity-80">{study.position}</p>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              {/* Services */}
              <div className="mt-auto">
                <h3 className="text-amber-300 font-bold mb-3 text-sm">SERVICES PROVIDED:</h3>
                <div className="grid grid-cols-1 gap-2">
                  {study.services.map((service, serviceIndex) => (
                    <div 
                      key={serviceIndex} 
                      className="flex items-center space-x-2 bg-gray-800/50 p-2 rounded"
                    >
                      <Check className="w-3 h-3 text-amber-300 flex-shrink-0" />
                      <span className="text-gray-300 text-xs">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}

      </div>
    </div>
  );
};

export default ResultsCaseStudies;