import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data';
import SectionTitle from '../components/SectionTitle';
import * as LucideIcons from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg"
          alt="Our Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-4"
          >
            Exquisite Services
          </motion.h1>
          <p className="text-amber-400 font-medium tracking-widest uppercase">Premium Event Management & Catering</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {services.map((service, index) => {
              const Icon = (LucideIcons as any)[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative h-80 rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 flex items-center gap-4">
                      <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-white shadow-xl">
                        <Icon size={30} />
                      </div>
                      <h3 className="text-3xl font-serif font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed px-4">
                    {service.description} We offer bespoke solutions tailored to your specific needs, ensuring that every aspect of your event is handled with professional care and artistic flair. Our team of experts works tirelessly to bring your vision to life.
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle subtitle="Why Us" title="The Royal Advantage" light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Personalized Planning', desc: 'Every event is unique. We provide a dedicated manager to oversee your celebration.' },
              { title: 'Quality Assurance', desc: 'From the freshest ingredients to the finest fabrics, we never compromise on quality.' },
              { title: 'Seamless Execution', desc: 'Relax and enjoy your day while our team handles all the logistics and management.' }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white/5 rounded-3xl border border-white/10">
                <h4 className="text-2xl font-serif font-bold text-amber-500 mb-4">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
