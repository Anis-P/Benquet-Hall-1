import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../SectionTitle';
import { services } from '../../data';
import * as LucideIcons from 'lucide-react';

const Services = () => {
  return (
    <section className="py-24 bg-neutral-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Our Services"
          title="Excellence in Every Detail"
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = (LucideIcons as any)[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-amber-600/10 hover:border-amber-500/50 transition-all group"
                >
                  <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                    <Icon className="text-amber-500 group-hover:text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <img
                src="https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg"
                alt="Luxury Decoration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <p className="text-amber-400 font-bold mb-2 uppercase tracking-widest text-xs">Premium Quality</p>
                <h4 className="text-2xl font-serif font-bold text-white">Bespoke Wedding Decorations</h4>
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
