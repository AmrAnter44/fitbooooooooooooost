"use client";
import { useState, useEffect } from 'react';
import {
  Users,
  TrendingDown,
  MessageSquare,
  Zap,
  BarChart3,
  Target,
  DollarSign,
  Settings,
  Globe,
  Share2,
  Menu,
  Calendar,
  Gift,
  Play,
  Camera,
  Lightbulb,
  Phone,
  Mail,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';
import Image from "next/image";
export default function FitnessAgencyLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);
<Image alt='img' src = "/white.png" width={30} height={30}></Image>
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 transition-transform duration-1000 ease-out"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 border border-yellow-400 transform rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-20 h-20 border border-yellow-400 transform rotate-12 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border border-yellow-400 transform -rotate-12 animate-pulse"></div>
        <div className="absolute bottom-20 right-40 w-16 h-16 border border-yellow-400 transform rotate-45 animate-spin"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <div 
          className="flex justify-between items-center mb-8 transform transition-all duration-1000 ease-out"
          data-animate
          id="header"
          style={{
            transform: isVisible.header ? 'translateY(0) scale(1)' : 'translateY(-50px) scale(0.9)',
            opacity: isVisible.header ? 1 : 0
          }}
        >
          <div className="text-2xl font-bold flex items-center group cursor-pointer">
            <span className="text-yellow-400 text-3xl mr-2 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">⚡</span>
            <span className="text-white group-hover:text-yellow-400 transition-colors duration-300">FIT BOOST AGENCY</span>
          </div>
          <div className="w-10 h-10 bg-black text-black rounded-lg flex items-center justify-center font-bold hover:bg-white hover:scale-110 transform transition-all duration-300 cursor-pointer hover:rotate-12">
            <Image alt='img' src = "/white.png" width={30} height={30}></Image>
          </div>
        </div>

        {/* Hero Section - Online Coaching */}
        <div 
          className="flex items-center justify-between mb-12"
          data-animate
          id="hero"
          style={{
            transform: isVisible.hero ? 'translateX(0)' : 'translateX(-100px)',
            opacity: isVisible.hero ? 1 : 0,
            transition: 'all 1.2s ease-out'
          }}
        >
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4 overflow-hidden">
              <span 
                className="text-white block transform transition-all duration-1000 delay-300"
                style={{
                  transform: isVisible.hero ? 'translateY(0)' : 'translateY(50px)',
                  opacity: isVisible.hero ? 1 : 0
                }}
              >ELEVATING YOUR</span>
              <span 
                className="text-yellow-400 block transform transition-all duration-1000 delay-500 hover:scale-105 hover:text-white cursor-default"
                style={{
                  transform: isVisible.hero ? 'translateY(0)' : 'translateY(50px)',
                  opacity: isVisible.hero ? 1 : 0
                }}
              >ONLINE COACHING</span>
            </h1>
            
            <p 
              className="text-gray-300 text-lg transform transition-all duration-1000 delay-700"
              style={{
                transform: isVisible.hero ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible.hero ? 1 : 0
              }}
            >YOUR PARTNER IN DIGITAL FITNESS</p>
          </div>
          
          <div className="flex-1 flex justify-center items-center">
            <div 
              className="relative transform transition-all duration-1000 delay-300 hover:scale-110"
              style={{
                transform: isVisible.hero ? 'rotate(0deg) scale(1)' : 'rotate(-180deg) scale(0.5)',
                opacity: isVisible.hero ? 1 : 0
              }}
            >
              {/* Coaching Illustration */}
              <div className="bg-gray-800 rounded-full p-8 relative hover:bg-gray-700 transition-colors duration-300 cursor-pointer group">
                <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
                  <Users size={32} className="text-white group-hover:scale-110 transform transition-all duration-300" />
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce hover:animate-pulse">
                  <MessageSquare size={16} className="text-black" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center animate-pulse hover:animate-bounce">
                  <DollarSign size={16} className="text-black" />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-green-300 transition-colors duration-300">
                  <span className="text-xs text-black font-bold">$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Challenge Section */}
      <section 
        className="relative z-10 bg-yellow-400 text-black p-6 mb-8 transform transition-all duration-1000"
        data-animate
        id="challenge"
        style={{
          transform: isVisible.challenge ? 'translateY(0)' : 'translateY(100px)',
          opacity: isVisible.challenge ? 1 : 0
        }}
      >
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-4xl font-bold hover:scale-105 transform transition-all duration-300 cursor-default">THE CHALLENGE</h2>

            <Image alt='img' src = "/black.png" width={30} height={30}></Image>
          
        </div>
        
        <div className="flex items-start justify-between">
          <div className="flex-1 space-y-4">
            {[
              "• BUILDING A STRONG ONLINE BRAND IS HARD",
              "• JUGGLING CONTENT CREATION, MARKETING AND CLIENT MANAGEMENT IS",
              "• OVERWHELMING", 
              "• STANDING OUT IN A CROWDED MARKET IS A CONSTANT STRUGGLE."
            ].map((text, index) => (
              <div 
                key={index}
                className="font-bold transform transition-all duration-500 hover:translate-x-2 hover:text-gray-800 cursor-default"
                style={{
                  transform: isVisible.challenge ? 'translateX(0)' : 'translateX(-50px)',
                  opacity: isVisible.challenge ? 1 : 0,
                  transitionDelay: `${index * 200}ms`
                }}
              >
                {text.includes('ONLINE BRAND') || text.includes('JUGGLING CONTENT') || text.includes('STANDING OUT') ? (
                  <>
                    <span>{text.split(' ').slice(0, text.includes('ONLINE BRAND') ? 4 : text.includes('JUGGLING') ? 2 : 2).join(' ')} </span>
                    <span className="underline">{text.split(' ').slice(text.includes('ONLINE BRAND') ? 4 : text.includes('JUGGLING') ? 2 : 2, text.includes('ONLINE BRAND') ? 6 : text.includes('JUGGLING') ? 4 : 4).join(' ')}</span>
                    <span> {text.split(' ').slice(text.includes('ONLINE BRAND') ? 6 : text.includes('JUGGLING') ? 4 : 4).join(' ')}</span>
                  </>
                ) : text}
              </div>
            ))}
          </div>
          
          <div className="flex-1 flex justify-center">
            <div 
              className="relative transform transition-all duration-1000 hover:rotate-12 hover:scale-110"
              style={{
                transform: isVisible.challenge ? 'rotate(0deg) scale(1)' : 'rotate(180deg) scale(0)',
                opacity: isVisible.challenge ? 1 : 0
              }}
            >
              <Lightbulb size={80} className="text-black animate-pulse hover:animate-bounce cursor-pointer" />
              <div className="absolute -top-2 -right-2 animate-ping">
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
              <div className="absolute -bottom-2 -left-2 animate-bounce">
                <div className="w-6 h-6 bg-black rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section 
        className="relative z-10 px-6 mb-8 transform transition-all duration-1000"
        data-animate
        id="solution"
        style={{
          transform: isVisible.solution ? 'translateY(0)' : 'translateY(100px)',
          opacity: isVisible.solution ? 1 : 0
        }}
      >
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-yellow-400 text-4xl font-bold hover:text-white transform transition-all duration-300 cursor-default">OUR SOLUTION</h2>
          <div className="w-10 h-10 bg-black text-black rounded-lg flex items-center justify-center font-bold hover:bg-white hover:scale-110 transform transition-all duration-300 cursor-pointer hover:rotate-12">
            <Image alt='img' src = "/white.png" width={30} height={30}></Image>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-6">
            {[
              { prefix: "• WE OFFER A ", highlight: "COMPLETE SUITE OF SERVICES", suffix: " TO HANDLE THE BUSINESS SIDE, SO YOU CAN FOCUS ON COACHING." },
              { prefix: "• WE BUILD ", highlight: "YOUR BRAND", suffix: ", GROW YOUR AUDIENCE, AND TURN YOUR PASSION INTO A PROFITABLE BUSINESS." }
            ].map((item, index) => (
              <div 
                key={index}
                className="transform transition-all duration-500 hover:translate-x-4"
                style={{
                  transform: isVisible.solution ? 'translateX(0)' : 'translateX(-100px)',
                  opacity: isVisible.solution ? 1 : 0,
                  transitionDelay: `${index * 300}ms`
                }}
              >
                <span className="text-white">{item.prefix}</span>
                <span className="text-yellow-400 font-bold hover:text-white transition-colors duration-300 cursor-default">{item.highlight}</span>
                <span className="text-white">{item.suffix}</span>
              </div>
            ))}
          </div>
          
          <div className="flex-1 flex justify-center">
            <div 
              className="relative transform transition-all duration-1000 hover:scale-125"
              style={{
                transform: isVisible.solution ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(180deg)',
                opacity: isVisible.solution ? 1 : 0
              }}
            >
              <div className="w-20 h-20 border-4 border-yellow-400 rounded-full flex items-center justify-center hover:border-white transition-colors duration-300 cursor-pointer group">
                <Lightbulb size={40} className="text-yellow-400 group-hover:text-white transition-colors duration-300 animate-pulse" />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-ping hover:animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full animate-bounce hover:animate-ping"></div>
              <div className="absolute top-2 -left-8 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* All-in-One Service Section */}
      <section 
        className="relative z-10 bg-yellow-400 text-black p-6 mb-8 transform transition-all duration-1000"
        data-animate
        id="services"
        style={{
          transform: isVisible.services ? 'translateY(0)' : 'translateY(100px)',
          opacity: isVisible.services ? 1 : 0
        }}
      >
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-4xl font-bold hover:scale-105 transform transition-all duration-300 cursor-default">OUR ALL-IN-ONE SERVICE</h2>

            <Image alt='img' src = "/black.png" width={30} height={30}></Image>
          
        </div>
        
        <div className="flex items-start justify-between">
          <div className="flex-1 space-y-4">
            {[
              { key: "PROFESSIONAL WEBSITE", desc: ": A HIGH-PERFORMANCE WEBSITE THAT ACTS AS YOUR DIGITAL HOME" },
              { key: "WORKOUT VIDEOS", desc: ": HIGH-QUALITY VIDEO PRODUCTION TO KEEP CLIENTS ENGAGED AND MOTIVATED" },
              { key: "PHOTOSHOOTS", desc: ": PROFESSIONAL PHOTOGRAPHY THAT CAPTURES YOUR UNIQUE BRAND IDENTITY" }
            ].map((service, index) => (
              <div 
                key={index}
                className="font-bold transform transition-all duration-500 hover:translate-x-4 hover:scale-105 cursor-default"
                style={{
                  transform: isVisible.services ? 'translateX(0)' : 'translateX(-50px)',
                  opacity: isVisible.services ? 1 : 0,
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <span>• </span>
                <span className="underline hover:no-underline transition-all duration-300">{service.key}</span>
                <span className="hover:text-gray-800 transition-colors duration-300">{service.desc}</span>
              </div>
            ))}
          </div>
          
          <div className="flex-1 flex justify-center">
            <div 
              className="relative transform transition-all duration-1000 hover:rotate-12 hover:scale-110 cursor-pointer"
              style={{
                transform: isVisible.services ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0.5)',
                opacity: isVisible.services ? 1 : 0
              }}
            >
              <div className="w-16 h-20 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 group">
                <Play size={32} className="text-yellow-400 group-hover:scale-110 transform transition-all duration-300" />
              </div>
              <div className="absolute -top-2 -right-4 w-12 h-8 bg-black rounded transform rotate-12 hover:rotate-45 transition-transform duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Amplifying Reach Section */}
      <section 
        className="relative z-10 px-6 mb-8 transform transition-all duration-1000"
        data-animate
        id="reach"
        style={{
          transform: isVisible.reach ? 'translateY(0)' : 'translateY(100px)',
          opacity: isVisible.reach ? 1 : 0
        }}
      >
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-yellow-400 text-4xl font-bold hover:text-white transform transition-all duration-300 cursor-default">AMPLIFYING YOUR REACH</h2>
          <div className="w-10 h-10 bg-black-400 text-black rounded-lg flex items-center justify-center font-bold hover:bg-white hover:scale-110 transform transition-all duration-300 cursor-pointer hover:rotate-12">
            <Image alt='img' src = "/white.png" width={30} height={30}></Image>
          </div>
        </div>
        
        <div className="space-y-6">
          {[
            { title: "SOCIAL MEDIA MANAGEMENT:", desc: "GROW YOUR FOLLOWING AND BUILD A LOYAL COMMUNITY WITH A POWERFUL SOCIAL MEDIA PRESENCE." },
            { title: "SHORT-FORM VIDEO CONTENT:", desc: "CREATE TRENDING REELS AND TIKTOKS TO ATTRACT NEW CLIENTS AND BOOST YOUR VISIBILITY." },
            { title: "TRACKING & ANALYSIS:", desc: "MAKE DATA-DRIVEN DECISIONS TO OPTIMIZE YOUR GROWTH AND SEE WHAT'S WORKING" }
          ].map((item, index) => (
            <div 
              key={index}
              className="transform transition-all duration-500 hover:translate-x-4"
              style={{
                transform: isVisible.reach ? 'translateX(0)' : 'translateX(-100px)',
                opacity: isVisible.reach ? 1 : 0,
                transitionDelay: `${index * 300}ms`
              }}
            >
              <span className="text-yellow-400 font-bold hover:text-white transition-colors duration-300 cursor-default">{item.title} </span>
              <span className="text-white">{item.desc}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <div 
            className="relative transform transition-all duration-1000 hover:scale-125 cursor-pointer"
            style={{
              transform: isVisible.reach ? 'scale(1)' : 'scale(0)',
              opacity: isVisible.reach ? 1 : 0
            }}
          >
            <div className="w-24 h-16 border-2 border-yellow-400 rounded-lg hover:border-white transition-colors duration-300"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section 
        className="relative z-10 bg-yellow-400 text-black p-6 mb-8 transform transition-all duration-1000"
        data-animate
        id="success"
        style={{
          transform: isVisible.success ? 'translateY(0)' : 'translateY(100px)',
          opacity: isVisible.success ? 1 : 0
        }}
      >
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-4xl font-bold hover:scale-105 transform transition-all duration-300 cursor-default">OUR SUCCESS STORY</h2>

            <Image alt='img' src = "/black.png" width={30} height={30}></Image>
          
        </div>
        
        <div className="flex items-start justify-between">
          <div className="flex-1 space-y-4">
            {[
              "BEFORE: STRUGGLED WITH INCONSISTENT BRANDING AND LOW CLIENT SIGN-UPS.",
              "WITH US: WE DESIGNED A NEW WEBSITE, MANAGED THEIR SOCIAL MEDIA, AND PRODUCED HIGH-QUALITY VIDEO CONTENT.",
              "THE RESULT: ACHIEVED A 300% INCREASE IN NEW CLIENTS IN 3 MONTHS AND BUILT A STRONG, RECOGNIZABLE BRAND."
            ].map((text, index) => (
              <div 
                key={index}
                className="font-bold transform transition-all duration-500 hover:translate-x-4 hover:text-gray-800 cursor-default"
                style={{
                  transform: isVisible.success ? 'translateX(0)' : 'translateX(-50px)',
                  opacity: isVisible.success ? 1 : 0,
                  transitionDelay: `${index * 200}ms`
                }}
              >
                {text}
              </div>
            ))}
          </div>
          
          <div className="flex-1 flex justify-center">
            <div 
              className="w-32 h-24 bg-black rounded-lg flex items-center justify-center transform transition-all duration-1000 hover:scale-110 hover:bg-gray-800 cursor-pointer"
              style={{
                transform: isVisible.success ? 'rotate(0deg) scale(1)' : 'rotate(180deg) scale(0.5)',
                opacity: isVisible.success ? 1 : 0
              }}
            >
              <div className="text-center">
                <div className="text-yellow-400 text-2xl font-bold hover:text-white transition-colors duration-300">C.SAIF</div>
                <div className="text-yellow-400 text-xs hover:text-white transition-colors duration-300">SUCCESS STORY</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section 
        className="relative z-10 px-6 mb-8 transform transition-all duration-1000"
        data-animate
        id="partner"
        style={{
          transform: isVisible.partner ? 'translateY(0)' : 'translateY(100px)',
          opacity: isVisible.partner ? 1 : 0
        }}
      >
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-white text-3xl font-bold">
            WHY PARTNER WITH <span className="text-yellow-400 hover:text-white transition-colors duration-300 cursor-default">FIT BOOST</span>
          </h2>
          <div className="w-10 h-10 bg-black text-black rounded-lg flex items-center justify-center font-bold hover:bg-white hover:scale-110 transform transition-all duration-300 cursor-pointer hover:rotate-12">
            <Image alt='img' src = "/white.png" width={30} height={30}></Image>
          </div>
        </div>
        
        <div className="space-y-4">
          {[
            { title: "EXPERTISE:", desc: "WE SPECIALIZE IN THE FITNESS INDUSTRY, SO WE UNDERSTAND YOUR UNIQUE NEEDS." },
            { title: "ALL-IN-ONE:", desc: "WE PROVIDE A COMPLETE SOLUTION, SAVING YOU TIME AND MONEY." },
            { title: "RESULTS-DRIVEN:", desc: "WE FOCUS ON REAL, MEASURABLE RESULTS THAT HELP YOUR BUSINESS GROW." },
            { title: "PARTNERSHIP:", desc: "WE'RE NOT JUST A SERVICE PROVIDER; WE'RE YOUR DEDICATED GROWTH PARTNER." }
          ].map((item, index) => (
            <div 
              key={index}
              className="transform transition-all duration-500 hover:translate-x-4"
              style={{
                transform: isVisible.partner ? 'translateX(0)' : 'translateX(-100px)',
                opacity: isVisible.partner ? 1 : 0,
                transitionDelay: `${index * 200}ms`
              }}
            >
              <span className="text-yellow-400 font-bold hover:text-white transition-colors duration-300 cursor-default">{item.title} </span>
              <span className="text-white">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section 
        className="relative z-10 bg-yellow-400 text-black p-6 mb-8 transform transition-all duration-1000"
        data-animate
        id="howit"
        style={{
          transform: isVisible.howit ? 'translateY(0)' : 'translateY(100px)',
          opacity: isVisible.howit ? 1 : 0
        }}
      >
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-4xl font-bold hover:scale-105 transform transition-all duration-300 cursor-default">HOW IT WORKS: YOUR PATH TO SUCCESS</h2>

            <Image alt='img' src = "/black.png" width={30} height={30}></Image>
          
        </div>
        
        <div className="space-y-4">
          {[
            { key: "EXPERTISE", desc: ": WE SPECIALIZE IN THE FITNESS INDUSTRY, SO WE UNDERSTAND YOUR UNIQUE NEEDS." },
            { key: "ALL-IN-ONE", desc: ": WE PROVIDE A COMPLETE SOLUTION, SAVING YOU TIME AND MONEY." },
            { key: "RESULTS-DRIVEN", desc: ": WE FOCUS ON REAL, MEASURABLE RESULTS THAT HELP YOUR BUSINESS GROW." },
            { key: "PARTNERSHIP", desc: ": WE'RE NOT JUST A SERVICE PROVIDER; WE'RE YOUR DEDICATED GROWTH PARTNER." }
          ].map((item, index) => (
            <div 
              key={index}
              className="font-bold transform transition-all duration-500 hover:translate-x-4 hover:scale-105 cursor-default"
              style={{
                transform: isVisible.howit ? 'translateX(0)' : 'translateX(-50px)',
                opacity: isVisible.howit ? 1 : 0,
                transitionDelay: `${index * 150}ms`
              }}
            >
              <span className="underline hover:no-underline transition-all duration-300">{item.key}</span>
              <span className="hover:text-gray-800 transition-colors duration-300">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative z-10 px-6 mb-8 transform transition-all duration-1000"
        data-animate
        id="cta"
        style={{
          transform: isVisible.cta ? 'translateY(0)' : 'translateY(100px)',
          opacity: isVisible.cta ? 1 : 0
        }}
      >
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-yellow-400 text-4xl font-bold hover:text-white transform transition-all duration-300 cursor-default">LET'S BUILD YOUR DIGITAL EMPIRE</h2>
          <div className="w-10 h-10 bg-black text-black rounded-lg flex items-center justify-center font-bold hover:bg-white hover:scale-110 transform transition-all duration-300 cursor-pointer hover:rotate-12 animate-pulse">
            <Image alt='img' src = "/black.png" width={30} height={30}></Image>
          </div>
        </div>
        
        <div className="space-y-4">
          <div 
            className="transform transition-all duration-500 hover:translate-x-4"
            style={{
              transform: isVisible.cta ? 'translateX(0)' : 'translateX(-50px)',
              opacity: isVisible.cta ? 1 : 0,
              transitionDelay: '200ms'
            }}
          >
            <span className="text-white">• READY TO TRANSFORM YOUR </span>
            <span className="text-yellow-400 font-bold hover:text-white transition-colors duration-300 cursor-default">ONLINE COACHING</span>
            <span className="text-white"> BUSINESS?</span>
          </div>
          <div 
            className="text-white transform transition-all duration-500 hover:translate-x-4"
            style={{
              transform: isVisible.cta ? 'translateX(0)' : 'translateX(-50px)',
              opacity: isVisible.cta ? 1 : 0,
              transitionDelay: '400ms'
            }}
          >
            <span>• CONTACT US FOR A </span>
            <span className="font-bold text-yellow-400 hover:text-white transition-colors duration-300 cursor-default">FREE CONSULTATION.</span>
          </div>
          
          <div className="mt-8 space-y-2">
            {[
              { label: "WEBSITE:", value: "www.fitboostagency.com" },
              { label: "EMAIL:", value: "contact@fitboostagency.com" },
              { label: "PHONE:", value: "+1 (555) 123-4567" },
              { label: "SOCIAL MEDIA:", value: "@fitboostagency" }
            ].map((contact, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 transform transition-all duration-500 hover:translate-x-4 hover:scale-105 cursor-pointer"
                style={{
                  transform: isVisible.cta ? 'translateX(0)' : 'translateX(-50px)',
                  opacity: isVisible.cta ? 1 : 0,
                  transitionDelay: `${600 + index * 100}ms`
                }}
              >
                <span className="text-yellow-400 font-bold hover:text-white transition-colors duration-300">{contact.label}</span>
                <span className="text-white hover:text-yellow-400 transition-colors duration-300">{contact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center font-bold text-xl hover:bg-white hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl animate-bounce hover:animate-none cursor-pointer">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}