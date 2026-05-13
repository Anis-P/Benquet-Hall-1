import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../data';
import SectionTitle from '../SectionTitle';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-24 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Testimonials"
          title="What Families Say"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2rem] shadow-xl relative"
            >
              <Quote className="absolute top-10 right-10 text-amber-500/10" size={80} />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-amber-500 fill-amber-500" size={18} />
                ))}
              </div>
              <p className="text-gray-700 text-lg italic leading-relaxed mb-8 relative z-10">
                "{testimonial.comment}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-amber-500/20"
                />
                <div>
                  <h4 className="font-serif font-bold text-neutral-900">{testimonial.name}</h4>
                  <p className="text-amber-600 text-sm font-semibold">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
