import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Users, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/20512844/pexels-photo-20512844.jpeg"
          alt="About Royal Banquet"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Our Legacy of Luxury
          </motion.h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto" />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <SectionTitle
                subtitle="Who We Are"
                title="Redefining Grandeur Since 1999"
                centered={false}
              />
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Royal Banquet has been the cornerstone of luxury celebrations in Jaipur for over two decades. We believe that every event is a story waiting to be told, and we provide the perfect canvas for your most cherished memories.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  'Award-winning hospitality',
                  'Exquisite culinary experiences',
                  'State-of-the-art facilities',
                  'Personalized event planning',
                  'Unmatched attention to detail',
                  'Strategic central location'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-amber-500" size={20} />
                    <span className="text-neutral-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://images.pexels.com/photos/29835706/pexels-photo-29835706.jpeg" alt="Event" className="rounded-2xl h-64 w-full object-cover" />
              <img src="https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg" alt="Event" className="rounded-2xl h-64 w-full object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle subtitle="Our Values" title="What Drives Us" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Excellence', desc: 'We strive for perfection in every detail, from the decor to the dining experience.', icon: Star },
              { title: 'Hospitality', desc: 'Our guests are at the heart of everything we do. We treat every event as our own.', icon: Users },
              { title: 'Innovation', desc: 'We constantly evolve our services to bring you the latest trends in event management.', icon: MapPin },
            ].map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-xl"
              >
                <div className="w-16 h-16 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
