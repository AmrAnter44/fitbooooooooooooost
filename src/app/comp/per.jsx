"use client";
import { useState } from 'react';
import { Users, TrendingDown, MessageSquare, Zap, BarChart3, Target, DollarSign, Settings, Globe, Share2, Menu, Calendar, Gift } from 'lucide-react';

export default function FitnessAgencyLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-yellow-400 transform rotate-45"></div>
        <div className="absolute top-40 right-20 w-20 h-20 border border-yellow-400 transform rotate-12"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border border-yellow-400 transform -rotate-12"></div>
        <div className="absolute bottom-20 right-40 w-16 h-16 border border-yellow-400 transform rotate-45"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="flex justify-between items-center mb-8">
          <div className="text-2xl font-bold">
            <span className="text-white">WHO </span>
            <span className="text-yellow-400">WE ARE</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>

          </div>
        </div>

        {/* Hero Section */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex-1">
            <p className="text-gray-300 mb-2">We're not just <span className="text-yellow-400">consultants</span>.</p>
            <p className="text-gray-300 mb-4">We're your partners in transforming</p>
            <p className="text-gray-300 mb-8">the fitness industry</p>
            
            <div className="mb-6">
              <p className="text-gray-400 uppercase tracking-wide text-sm">Expert solutions for <span className="text-yellow-400">gyms</span></p>
              <p className="text-gray-400 uppercase tracking-wide text-sm">from concept to <span className="text-yellow-400">cashing in</span></p>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center items-center">
            <div className="relative">
              {/* Gym Building */}
              <div className="bg-gray-700 rounded-lg p-4 mb-4">
                <div className="text-center text-lg font-bold mb-2">GYM</div>
                <div className="grid grid-cols-4 gap-1 mb-2">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-4 h-6 bg-blue-400 rounded-sm"></div>
                  ))}
                </div>
                <div className="flex justify-between">
                  <div className="w-8 h-4 bg-green-400 rounded"></div>
                  <div className="w-8 h-4 bg-green-400 rounded"></div>
                </div>
              </div>
              
              {/* Person with idea */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Users size={20} />
                </div>
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black text-lg">💡</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-4 h-1 bg-blue-400"></div>
                  <div className="w-2 h-1 bg-blue-400"></div>
                  <div className="w-1 h-1 bg-blue-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Challenge Section */}
      <section className="relative z-10 px-6 mb-12">
        <h2 className="text-yellow-400 text-3xl font-bold mb-4">THE CHALLENGE</h2>
        <p className="text-gray-300 mb-8 uppercase tracking-wide">Why are so many fitness businesses struggling</p>
        
        <div className="grid grid-cols-2 gap-8 mb-12">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <TrendingDown size={48} className="text-white" />
            </div>
            <p className="text-yellow-400 font-semibold">LOW CLIENT</p>
            <p className="text-yellow-400 font-semibold">RETENTION</p>
          </div>
          
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <BarChart3 size={48} className="text-white" />
            </div>
            <p className="text-yellow-400 font-semibold">STAGNANT GROWTH</p>
          </div>
          
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <MessageSquare size={48} className="text-white" />
            </div>
            <p className="text-yellow-400 font-semibold">INEFFECTIVE MARKETING</p>
          </div>
          
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Zap size={48} className="text-white" />
            </div>
            <p className="text-yellow-400 font-semibold">OVERWHELMED BY DAILY</p>
            <p className="text-yellow-400 font-semibold">OPERATIONS</p>
          </div>
        </div>
      </section>

      {/* Agency Section */}
      <section className="relative z-10 px-6 mb-12">
        <h2 className="text-yellow-400 text-3xl font-bold mb-2">FIT BOOST AGENCY</h2>
        <p className="text-gray-300 mb-8 uppercase tracking-wide">Your all-in-one growth partner</p>
        
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <Target size={32} className="text-white" />
            <span className="text-white font-semibold">STRATEGIC GYM </span>
            <span className="text-yellow-400 font-semibold">MANAGEMENT</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Globe size={32} className="text-white" />
            <span className="text-white font-semibold">HIGH-IMPACT DIGITAL </span>
            <span className="text-yellow-400 font-semibold">MARKETING</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <BarChart3 size={32} className="text-white" />
            <span className="text-white font-semibold">DATA-DRIVEN </span>
            <span className="text-yellow-400 font-semibold">DECISIONS</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 px-6">
        <h2 className="text-yellow-400 text-3xl font-bold mb-8">OUR CORE SERVICES</h2>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Settings size={20} className="text-white" />
              <span className="text-white">EQUIPMENT & MAINTENANCE</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Globe size={20} className="text-white" />
              <span className="text-white">WEB DEVELOPMENT</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Share2 size={20} className="text-white" />
              <span className="text-white">SOCIAL MEDIA</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Menu size={20} className="text-white" />
              <span className="text-white">BAR MENU</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Target size={20} className="text-white" />
              <span className="text-white">BRANDING</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Users size={20} className="text-white" />
              <span className="text-white">WORKSHOP</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Gift size={20} className="text-white" />
              <span className="text-white">GIVE AWAY</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <DollarSign size={20} className="text-white" />
              <span className="text-white">PRINTINGS</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Calendar size={20} className="text-white" />
              <span className="text-white">EVENTS</span>
            </div>
          </div>
        </div>
        
        {/* Progress bar at bottom */}
        <div className="mt-12 w-full h-1 bg-gray-700 rounded-full">
          <div className="w-3/4 h-full bg-white rounded-full"></div>
        </div>
      </section>
    </div>
  );
}