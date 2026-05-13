import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = true, light = false }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}
    >
      {subtitle && (
        <span className="text-amber-600 font-semibold tracking-[0.3em] uppercase text-sm mb-4 block">
          {subtitle}
        </span>
      )}
      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold ${light ? 'text-white' : 'text-neutral-900'}`}>
        {title}
      </h2>
      <div className={`mt-6 h-1 w-24 bg-amber-500 ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};

export default SectionTitle;
