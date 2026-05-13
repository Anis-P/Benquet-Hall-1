import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedHalls from '../components/home/FeaturedHalls';
import EventTypes from '../components/home/EventTypes';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';
import Packages from '../components/home/Packages';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import { Award, Clock, ShieldCheck, Heart } from 'lucide-react';

const Home = () => {
  return (
    <main>
      <Hero />
      
      {/* Trust & Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Clock, value: '25+', label: 'Years Experience' },
              { icon: Award, value: '5000+', label: 'Events Completed' },
              { icon: Heart, value: '10k+', label: 'Happy Families' },
              { icon: ShieldCheck, value: '100%', label: 'Luxury Guaranteed' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-50 text-amber-600 mb-4">
                  <item.icon size={28} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-neutral-900">{item.value}</h3>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedHalls />
      <EventTypes />
      <Services />

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <SectionTitle
                subtitle="Excellence"
                title="Why Royal Banquet?"
                centered={false}
              />
              <div className="space-y-8">
                {[
                  { title: 'Luxury Interiors', desc: 'Our halls are designed with Italian marble, crystal chandeliers, and royal aesthetics.' },
                  { title: 'Premium Catering', desc: 'World-class chefs serving authentic Indian and international cuisines.' },
                  { title: 'Expert Planning', desc: 'Our dedicated event managers handle every detail from start to finish.' },
                  { title: 'Valet Parking', desc: 'Ample parking space with professional valet services for all your guests.' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="w-12 h-12 shrink-0 bg-amber-500 text-white rounded-xl flex items-center justify-center font-bold text-xl">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-bold text-neutral-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.pexels.com/photos/20512844/pexels-photo-20512844.jpeg"
                  alt="Luxury Wedding"
                  className="w-full aspect-[4/5] object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
            </div>
          </div>
        </div>
      </section>

      <Packages />
      <Testimonials />

      {/* Luxury Gallery Preview */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Gallery"
            title="Visual Splendor"
            light
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.pexels.com/photos/29835706/pexels-photo-29835706.jpeg',
              'https://images.pexels.com/photos/20512844/pexels-photo-20512844.jpeg',
              'https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg',
              'https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg',
              'https://images.pexels.com/photos/20485987/pexels-photo-20485987.jpeg',
              'https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg',
              'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
              'https://images.pexels.com/photos/20485988/pexels-photo-20485988.jpeg'
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square overflow-hidden rounded-2xl cursor-pointer group"
              >
                <img
                  src={img}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Ready to Plan Your Grand Celebration?</h2>
          <p className="text-white/80 text-xl mb-12 font-light">Contact our event experts today and get a personalized quote for your special day.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/booking"
              className="bg-white text-amber-600 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-neutral-100 transition-all shadow-xl"
            >
              Book Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

import { Link } from 'react-router-dom';
export default Home;
