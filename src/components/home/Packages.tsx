import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../SectionTitle';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Royal Wedding',
    price: '₹2,50,000',
    description: 'A comprehensive package for a grand celebration.',
    features: ['Luxury Banquet Hall', 'Premium Catering (500 guests)', 'Floral Stage Decor', 'Sound & DJ System', 'Valet Parking', 'Bridal Suite'],
    popular: true
  },
  {
    name: 'Elegant Reception',
    price: '₹1,50,000',
    description: 'Perfect for a sophisticated evening gathering.',
    features: ['Crystal Palace Venue', 'Standard Catering (300 guests)', 'Ambient Lighting', 'Music System', 'Standard Decoration'],
    popular: false
  },
  {
    name: 'Boutique Event',
    price: '₹75,000',
    description: 'Ideal for intimate family ceremonies.',
    features: ['Sapphire Suite', 'Hi-Tea & Snacks', 'Basic Decoration', 'Sound System', 'Dedicated Staff'],
    popular: false
  }
];

const Packages = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Pricing"
          title="Exclusive Packages"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-[2rem] border-2 ${
                pkg.popular ? 'border-amber-500 bg-amber-50/30' : 'border-gray-100 bg-white'
              } flex flex-col`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-2">{pkg.name}</h3>
              <p className="text-gray-500 text-sm mb-6">{pkg.description}</p>
              <div className="text-4xl font-serif font-bold text-amber-600 mb-8">{pkg.price}</div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <Check className="text-green-500 shrink-0" size={20} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all ${
                pkg.popular ? 'bg-amber-600 text-white hover:bg-amber-700 shadow-xl shadow-amber-900/20' : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
              }`}>
                Select Package
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
