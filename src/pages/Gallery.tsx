import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const galleryImages = [
  'https://images.pexels.com/photos/20512844/pexels-photo-20512844.jpeg',
  'https://images.pexels.com/photos/29835706/pexels-photo-29835706.jpeg',
  'https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg',
  'https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg',
  'https://images.pexels.com/photos/20485987/pexels-photo-20485987.jpeg',
  'https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg',
  'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
  'https://images.pexels.com/photos/20485988/pexels-photo-20485988.jpeg',
  'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg',
  'https://images.pexels.com/photos/1543762/pexels-photo-1543762.jpeg',
  'https://images.pexels.com/photos/20512844/pexels-photo-20512844.jpeg',
  'https://images.pexels.com/photos/29835706/pexels-photo-29835706.jpeg',
];

const Gallery = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Visual Journey"
            title="Our Luxury Gallery"
          />
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative group overflow-hidden rounded-3xl cursor-zoom-in"
              >
                <img
                  src={img}
                  alt={`Gallery ${i}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white font-serif text-xl border-b-2 border-amber-500 pb-2">View Experience</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
