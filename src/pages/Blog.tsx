import React from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data';
import SectionTitle from '../components/SectionTitle';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="pt-24 min-h-screen bg-neutral-50">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Insights"
            title="Wedding & Event Blog"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-amber-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-6 text-xs text-gray-400 uppercase tracking-widest mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-amber-500" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={14} className="text-amber-500" />
                      Admin
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4 group-hover:text-amber-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-widest text-sm group/link"
                  >
                    Read Article
                    <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-2" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
