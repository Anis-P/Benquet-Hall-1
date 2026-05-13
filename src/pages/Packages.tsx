import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Packages from '../components/home/Packages';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQData = [
  {
    q: "What is the booking process for a wedding?",
    a: "You can start by filling out our booking enquiry form. Our event manager will then contact you to discuss your requirements, provide a quote, and arrange a venue tour. A token amount is required to secure the date."
  },
  {
    q: "Do you provide in-house catering?",
    a: "Yes, we have a team of world-class chefs specializing in authentic Indian cuisines. We offer customizable menus to suit your preferences and dietary requirements."
  },
  {
    q: "Is parking available for guests?",
    a: "Absolutely. we have ample parking space and provide professional valet services for all events to ensure a seamless experience for your guests."
  },
  {
    q: "Can we bring our own decorators?",
    a: "While we have an expert in-house decoration team, we do allow external decorators with prior approval and adherence to our venue guidelines."
  },
  {
    q: "What are the payment terms?",
    a: "We typically require a 25% advance to confirm the booking, 50% one month before the event, and the remaining 25% one week prior to the event date."
  }
];

const PackagesPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg"
          alt="Packages"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-4"
          >
            Exclusive Packages
          </motion.h1>
          <p className="text-amber-400 font-medium tracking-widest uppercase">Luxury Experiences at Competitive Prices</p>
        </div>
      </section>

      <Packages />

      <section className="py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Questions" title="Frequently Asked Questions" />
          <div className="space-y-6">
            {FAQData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-md border border-neutral-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-amber-500/10 text-amber-600 rounded-full flex items-center justify-center">
                    <HelpCircle size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-bold text-neutral-900 mb-3">{item.q}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.a}</p>
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

export default PackagesPage;
