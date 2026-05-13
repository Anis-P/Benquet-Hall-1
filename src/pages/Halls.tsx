import React from 'react';
import { motion } from 'framer-motion';
import { halls } from '../data';
import SectionTitle from '../components/SectionTitle';
import { Users, IndianRupee, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Halls = () => {
  return (
    <div className="pt-24 min-h-screen bg-neutral-50">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/20512844/pexels-photo-20512844.jpeg"
          alt="Our Halls"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-4"
          >
            Our Majestic Halls
          </motion.h1>
          <p className="text-amber-400 font-medium tracking-widest uppercase">Luxury Venues for Every Occasion</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {halls.map((hall, index) => (
              <motion.div
                key={hall.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl group border border-neutral-100"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={hall.image}
                    alt={hall.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-8 right-8">
                    <span className="bg-amber-500 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                      {hall.type}
                    </span>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-3xl font-serif font-bold text-white mb-2">{hall.name}</h3>
                    <div className="flex items-center gap-4 text-white/90">
                      <div className="flex items-center gap-2">
                        <Users size={18} className="text-amber-400" />
                        <span className="text-sm">{hall.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <IndianRupee size={16} className="text-amber-400" />
                        <span className="text-sm">{hall.price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-10">
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">{hall.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {hall.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-neutral-700">
                        <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center">
                          <Check size={12} className="text-amber-600" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/halls/${hall.id}`}
                    className="flex items-center justify-center w-full py-5 bg-neutral-900 text-white rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-amber-600 transition-all group-hover:shadow-xl group-hover:shadow-amber-900/20"
                  >
                    View Gallery & Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Halls;
