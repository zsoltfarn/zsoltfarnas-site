import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-800 text-white pt-20"
    >
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center" />

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Crafting Digital Experiences That{' '}
            <span className="text-teal-400">Transform</span> Businesses
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            We build stunning websites and WordPress solutions that drive
            growth, engage users, and elevate your brand in the digital
            landscape.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-md flex items-center justify-center transition-all duration-300 transform hover:translate-y-[-2px]">
              View Our Work
              <ArrowRight size={18} className="ml-2" />
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-3 rounded-md transition-all duration-300 transform hover:translate-y-[-2px]">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
