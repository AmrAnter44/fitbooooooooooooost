"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Trophy, BarChart3, Target, Zap, Award, 
  Users, TrendingUp, Clock, Globe, Star, CheckCircle
} from 'lucide-react';

const WhyChooseUsSection = () => {
  // Simplified animation
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Main reasons
  const mainReasons = [
    {
      icon: Shield,
      title: "PROFESSIONAL TEAM",
      description: "Certified fitness industry experts with 3+ years of combined experience",
      stats: "12+ Projects"
    },
    {
      icon: Trophy,
      title: "PROVEN RESULTS", 
      description: "Average 150% growth in member acquisition within 4 months",
      stats: "95% Success Rate"
    },
    {
      icon: BarChart3,
      title: "DATA-DRIVEN DECISIONS",
      description: "Every strategy backed by comprehensive analytics and performance tracking",
      stats: "Real-time Analytics"
    }
  ];

  // Additional advantages
  const advantages = [
    "Fitness Industry Specialists - 100% focus on gyms and trainers",
    "Rapid Implementation - See results within 30 days",
    "Award-Winning Service - Top fitness marketing agency",
    "Dedicated Support Team - 24/7 Arabic & English support",
    "No Long-term Contracts - Flexible month-to-month options",
    "Local Market Expertise - Deep Egyptian market knowledge"
  ];

  // Stats
  const stats = [
    { number: "10+", label: "Gyms Transformed", icon: TrendingUp },
    { number: "95%", label: "Client Retention", icon: Star },
    { number: "150%", label: "Average Growth", icon: BarChart3 }
  ];

  // Competitive edges
  const edges = [
    "100% Fitness Industry Focus",
    "In-House Production Team", 
    "24/7 Arabic & English Support",
    "No Lock-in Contracts"
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Simple background elements */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-32 left-4 w-20 h-20 border border-amber-300 rotate-45"></div>
        <div className="absolute bottom-32 right-4 w-16 h-16 border border-amber-300 -rotate-12"></div>
      </div>

      <div className="relative px-4 py-12 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            WHY CHOOSE <span className="text-amber-300">FITBOOST</span>
          </h2>
          <div className="w-16 h-1 bg-amber-300 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            WHAT SETS US APART FROM THE COMPETITION
          </p>
        </motion.div>

        {/* Main Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {mainReasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-black border border-gray-800 rounded-2xl p-6 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: index * 0.2 }}
            >
              {/* Yellow top line */}
              <div className="w-full h-1 justify-center bg-gradient-to-r from-amber-300 to-yellow-500 rounded mb-6"></div>
              
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-300 rounded-full flex items-center justify-center">
                <reason.icon className="w-8 h-8 text-black" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-amber-300 mb-3">{reason.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">{reason.description}</p>
              
              {/* Stats */}
              <div className="bg-amber-300 text-black px-4 py-2 rounded-full justify-center font-bold text-sm">
                {reason.stats}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Advantages */}
        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-amber-300">
            ADDITIONAL ADVANTAGES
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-4"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-amber-300/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-amber-300" />
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base">{advantage}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="bg-gradient-to-r from-amber-300 to-yellow-500 rounded-2xl p-6 sm:p-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-2">BY THE NUMBERS</h3>
            <p className="text-black/80">Our track record speaks for itself</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-black/20 rounded-full flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-black" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-black">{stat.number}</div>
                <div className="text-black/80 font-semibold text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Competitive Edge */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-amber-300">
            OUR COMPETITIVE EDGE
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {edges.map((edge, index) => (
              <div
                key={index}
                className="bg-amber-300 text-black p-4 rounded-xl font-bold text-center"
              >
                <CheckCircle className="w-6 h-6 mx-auto mb-2" />
                <span className="text-sm sm:text-base">{edge}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}

      </div>
    </div>
  );
};

export default WhyChooseUsSection;