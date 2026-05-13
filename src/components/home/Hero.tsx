import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar, Users, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video/Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/20512844/pexels-photo-20512844.jpeg"
          alt="Royal Indian Wedding"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>

      {/* Floating Particles/Lights Effect (CSS only) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-pulse blur-sm opacity-50" />
        <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-amber-200 rounded-full animate-bounce blur-md opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-amber-500 rounded-full animate-pulse blur-sm opacity-50" />
      </div>

      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-amber-400 font-semibold tracking-[0.4em] uppercase text-sm md:text-base mb-6 block">
            Welcome to the Pinnacle of Luxury
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight">
            Turn Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200">Dream Celebration</span> <br className="hidden md:block" /> Into Reality
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Experience the most exquisite Indian banquet halls in Jaipur. From grand weddings to intimate ceremonies, we craft memories that last a lifetime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/booking"
              className="group relative px-8 py-4 bg-amber-600 text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-2xl shadow-amber-900/40"
            >
              <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest text-sm">
                Book Your Event <ChevronRight size={18} />
              </span>
              <div className="absolute inset-0 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </Link>
            <Link
              to="/halls"
              className="px-8 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm uppercase tracking-widest text-sm"
            >
              Explore Halls
            </Link>
          </div>
        </motion.div>

        {/* Floating Stats Cards */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 hidden lg:grid grid-cols-3 gap-8">
          {[
            { icon: Users, label: 'Guest Capacity', value: '3000+' },
            { icon: Award, label: 'Luxury Awards', value: '25+' },
            { icon: Star, label: 'Happy Families', value: '10,000+' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.2 }}
              className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center gap-6"
            >
              <div className="bg-amber-500/20 p-3 rounded-xl">
                <stat.icon className="text-amber-400" size={32} />
              </div>
              <div className="text-left">
                <p className="text-amber-400 text-2xl font-bold">{stat.value}</p>
                <p className="text-gray-300 text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
