import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { halls } from '../data';
import { Users, IndianRupee, MapPin, Check, Star, Calendar, Phone, Mail } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const HallDetails = () => {
  const { id } = useParams();
  const hall = halls.find((h) => h.id === id);

  if (!hall) {
    return <div className="pt-32 text-center">Hall not found</div>;
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={hall.image}
          alt={hall.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-12 lg:p-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="bg-amber-500 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                {hall.type} Venue
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">{hall.name}</h1>
              <div className="flex flex-wrap gap-8 text-white/90">
                <div className="flex items-center gap-3">
                  <Users className="text-amber-500" size={24} />
                  <span className="text-xl">{hall.capacity}</span>
                </div>
                <div className="flex items-center gap-3">
                  <IndianRupee className="text-amber-500" size={24} />
                  <span className="text-xl">{hall.price}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-amber-500" size={24} />
                  <span className="text-xl">Jaipur, Rajasthan</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Content */}
            <div className="lg:w-2/3">
              <div className="mb-16">
                <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">About the Venue</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {hall.description} Our {hall.name} is meticulously designed to provide a royal ambiance for your most precious celebrations. From the Italian marble flooring to the grand crystal chandeliers, every element exudes luxury and sophistication.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {hall.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
                      <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                        <Check size={20} className="text-amber-600" />
                      </div>
                      <span className="font-medium text-neutral-800">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Venue Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {hall.features.map((feature, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center shrink-0 mt-1">
                        <Check size={14} />
                      </div>
                      <p className="text-gray-700 font-medium">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery Preview */}
              <div>
                <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-8">Interior Gallery</h2>
                <div className="grid grid-cols-2 gap-4">
                  <img src="https://images.pexels.com/photos/20512844/pexels-photo-20512844.jpeg" className="rounded-3xl h-64 w-full object-cover" alt="Gallery" />
                  <img src="https://images.pexels.com/photos/29835706/pexels-photo-29835706.jpeg" className="rounded-3xl h-64 w-full object-cover" alt="Gallery" />
                  <img src="https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg" className="rounded-3xl h-64 w-full object-cover col-span-2" alt="Gallery" />
                </div>
              </div>
            </div>

            {/* Right Sidebar - Booking Form */}
            <div className="lg:w-1/3">
              <div className="sticky top-32 bg-neutral-900 p-8 rounded-[2.5rem] text-white shadow-2xl">
                <h3 className="text-2xl font-serif font-bold mb-6">Book This Venue</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors" placeholder="+91" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Event Date</label>
                    <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors text-white" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Guest Count</label>
                    <input type="number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors" placeholder="Estimated guests" />
                  </div>
                  <button className="w-full bg-amber-600 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-amber-700 transition-all shadow-xl shadow-amber-900/40">
                    Send Enquiry
                  </button>
                </form>
                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                  <p className="text-sm text-gray-400 mb-4 uppercase tracking-widest">Need immediate help?</p>
                  <a href="tel:+911234567890" className="text-2xl font-serif font-bold text-amber-500 flex items-center justify-center gap-3">
                    <Phone size={24} /> +91 1234567890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HallDetails;
