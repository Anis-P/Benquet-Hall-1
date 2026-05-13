import React from 'react';
import { motion } from 'framer-motion';
import { halls } from '../../data';
import SectionTitle from '../SectionTitle';
import { Users, IndianRupee, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedHalls = () => {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Our Venues"
          title="Grand Banquet Halls"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {halls.map((hall, index) => (
            <motion.div
              key={hall.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={hall.image}
                  alt={hall.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-6 right-6">
                  <span className="bg-amber-500 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                    {hall.type}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif font-bold text-neutral-900">{hall.name}</h3>
                  <div className="flex items-center text-amber-600 font-bold">
                    <IndianRupee size={16} />
                    <span>{hall.price.split('₹')[1]}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 line-clamp-2">{hall.description}</p>
                
                <div className="flex items-center gap-6 mb-8 text-sm text-gray-500 border-y border-gray-100 py-4">
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-amber-500" />
                    <span>{hall.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Available</span>
                  </div>
                </div>

                <Link
                  to={`/halls/${hall.id}`}
                  className="flex items-center justify-between w-full text-amber-600 font-bold uppercase tracking-widest text-sm group/btn"
                >
                  View Details
                  <span className="w-10 h-10 rounded-full border border-amber-600 flex items-center justify-center group-hover/btn:bg-amber-600 group-hover/btn:text-white transition-all">
                    <ArrowRight size={18} />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/halls"
            className="inline-block px-10 py-4 bg-neutral-900 text-white font-bold rounded-full hover:bg-amber-600 transition-colors uppercase tracking-widest text-sm"
          >
            Explore All Venues
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHalls;
