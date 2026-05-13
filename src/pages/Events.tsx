import React from 'react';
import { motion } from 'framer-motion';
import { eventTypes } from '../data';
import SectionTitle from '../components/SectionTitle';
import { Calendar, Users, Heart, Music, Camera, Utensils } from 'lucide-react';

const Events = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg"
          alt="Events We Host"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-4"
          >
            Memorable Events
          </motion.h1>
          <p className="text-amber-400 font-medium tracking-widest uppercase">Celebrations Crafted with Love</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-24">
            {eventTypes.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
              >
                <div className="lg:w-1/2 relative">
                  <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`absolute -bottom-10 ${index % 2 === 0 ? '-right-10' : '-left-10'} bg-amber-500 text-white p-8 rounded-3xl shadow-xl hidden md:block`}>
                    <p className="text-3xl font-serif font-bold">0{index + 1}</p>
                    <p className="text-xs uppercase tracking-widest font-bold">Event Category</p>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">{event.name}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {event.description} We provide a comprehensive suite of services to ensure your {event.name.toLowerCase()} is as grand as you imagined. Our venues are equipped with the latest technology and luxury amenities to cater to your every need.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
                        <Users size={20} />
                      </div>
                      <span className="font-semibold text-neutral-800">Large Capacity</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
                        <Utensils size={20} />
                      </div>
                      <span className="font-semibold text-neutral-800">Premium Food</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
                        <Camera size={20} />
                      </div>
                      <span className="font-semibold text-neutral-800">Photo Ready</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
                        <Music size={20} />
                      </div>
                      <span className="font-semibold text-neutral-800">Live Ent.</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
