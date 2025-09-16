"use client";
import React, { useState, useEffect } from 'react';
import { Dumbbell, TrendingUp, Users, Zap, Star, ChevronRight, Play, Award, Target, BarChart3 ,MessageCircle} from 'lucide-react';

const FitnessLandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const challenges = [
    { icon: <TrendingUp className="w-8 h-8" />, title: "LOW CLIENT", subtitle: "RETENTION", color: "from-gray-400 to-gray-300" },
    { icon: <BarChart3 className="w-8 h-8" />, title: "STAGNANT GROWTH", subtitle: "", color: "from-gray-400 to-gray-300" },
    { icon: <Users className="w-8 h-8" />, title: "INEFFECTIVE MARKETING", subtitle: "", color: "from-gray-400 to-gray-300" },
    { icon: <Zap className="w-8 h-8" />, title: "OVERWHELMED BY DAILY", subtitle: "OPERATIONS", color: "from-gray-400 to-gray-300" }
  ];

  const services = [
    "EQUIPMENT & MAINTENANCE",
    "WEB DEVELOPMENT", 
    "SOCIAL MEDIA",
    "BRANDING",
    "GYM SYSTEM",
    "WORKSHOP",
    "GIVE AWAY",
    "PAINTINGS",
    "EVENTS"
  ];

  return (
    <div className="min-h-screen bg-black/60 text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-10">

      </div>

      {/* Geometric Lines */}
      <div className="fixed inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-20">

          {[...Array(20)].map((_, i) => (
            <line
              key={i}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              className="animate-pulse"

            />
          ))}
        </svg>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <section className="min-h-screen flex flex-col justify-center px-8">
          <div className="max-w-7xl mx-auto">
            {/* Who We Are */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="flex items-center mb-8">
                <div className="  bg-yellow-300 text-black px-4 py-2 font-bold text-xl">
                  WHO WE ARE
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    WE'RE THE BEST <span className="text-yellow-300">CONSULTANTS</span>
                  </h1>
                  <p className="text-xl mb-8">WE'RE YOUR PARTNERS IN TRANSFORMING YOUR FITNESS BUSINESS</p>
                </div>
                
                <div className="relative">
                  <div className=" bg-yellow-300 rounded-lg p-8 transform hover:scale-105 transition-transform duration-100">
                    <Dumbbell className="w-16 h-16 mb-4 mx-auto text-black" />
                    <h3 className="text-2xl font-bold text-center text-black">GYM</h3>
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 bg-yellow-400 rounded-full p-4 animate-bounce">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <span className="text-yellow-400 font-bold">!</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Growth Visualization */}
              <div className="flex items-center justify-center mb-16">
                <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full p-6 transform hover:scale-105 transition-transform duration-100">
                  <div className="flex items-center space-x-4 text-black">
                    <Users className="w-8 h-8" />
                    <ChevronRight className="w-6 h-6" />
                    <Target className="w-8 h-8" />
                    <ChevronRight className="w-6 h-6" />
                    <TrendingUp className="w-8 h-8 " />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg mb-4">EXPERT SOLUTIONS FOR GYMS</p>
                <p className="text-lg">FROM CONCEPT TO DOMINATE IT</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold mb-4">
                THE <span className="text-yellow-400">CHALLENGE</span>
              </h2>
              <p className="text-xl">WHY ARE SO MANY FITNESS BUSINESSES STRUGGLING</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className={`relative group transform transition-all duration-500 hover:scale-110 ${
                    activeSection === index ? 'scale-110' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`bg-gradient-to-br ${challenge.color} rounded-xl p-8 h-48 flex flex-col items-center justify-center text-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                    <div className="relative z-10">
                      {challenge.icon}
                      <h3 className="font-bold text-lg mt-4">{challenge.title}</h3>
                      {challenge.subtitle && (
                        <p className="text-sm font-semibold">{challenge.subtitle}</p>
                      )}
                    </div>
                    
                    {/* Animated corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 transform rotate-45 translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fit Boost Agency Section */}
        <section className="py-20 px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-yellow-400">FIT BOOST</span> AGENCY
            </h2>
            <p className="text-2xl mb-12">YOUR ALL-IN-ONE GROWTH PARTNER</p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 transform hover:rotate-3 transition-transform duration-300">
                <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">STRATEGIC GYM <span className="text-yellow-400">MANAGEMENT</span></h3>
                <div className="w-16 h-16 mx-auto bg-yellow-300  rounded-full flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-gray-800" />
                </div>
              </div>

              <div className="bg-yellow-500 rounded-xl p-8 transform hover:-rotate-3 transition-transform duration-300">
                <Zap className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-black">HIGH-IMPACT DIGITAL <span className="text-white">MARKETING</span></h3>
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-yellow-500 " />
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-900 rounded-xl p-8 transform hover:rotate-3 transition-transform duration-300">
                <Target className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">DATA-DRIVEN <span className="text-yellow-400">DECISIONS</span></h3>
                <div className="w-16 h-16 mx-auto bg-yellow-300  rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-gray-800" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-center mb-16">
              OUR <span className="text-yellow-400">CORE SERVICES</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-lg hover:from-yellow-400 hover:to-orange-500 hover:text-black transition-all duration-300 cursor-pointer transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">{service}</span>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-yellow-400">READY TO BUILD</span>
            </h2>
            <p className="text-2xl mb-4">YOUR FITNESS EMPIRE</p>
            
            <div className="mb-12">
              <p className="text-xl mb-8">
                LET'S DISCUSS HOW WE CAN <br />
                <span className="text-yellow-400">ACCELERATE YOUR BUSINESS</span> <br />
                <span className="text-2xl font-bold">GROWTH</span>
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">

            </div>
          </div>
        </section>
      </div>
            <div className="fixed bottom-8 right-8 z-50">
        <button className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center font-bold text-xl hover:bg-white hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl animate-bounce hover:animate-none cursor-pointer">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
    
  );
};

export default FitnessLandingPage;