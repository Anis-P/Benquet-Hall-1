import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Calendar, Users, MapPin, Clock, CheckCircle2, Phone, Mail } from 'lucide-react';

const Booking = () => {
  return (
    <div className="pt-24 min-h-screen bg-neutral-50">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Reservation"
            title="Book Your Grand Celebration"
          />

          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-neutral-100">
                <form className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h4 className="text-xl font-serif font-bold text-neutral-900 border-b border-neutral-100 pb-4">Personal Details</h4>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Full Name</label>
                        <input type="text" className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors" placeholder="Enter your full name" />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Phone Number</label>
                        <input type="tel" className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors" placeholder="+91" />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Email Address</label>
                        <input type="email" className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors" placeholder="email@example.com" />
                      </div>
                    </div>
                    <div className="space-y-6">
                      <h4 className="text-xl font-serif font-bold text-neutral-900 border-b border-neutral-100 pb-4">Event Details</h4>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Event Type</label>
                        <select className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors appearance-none">
                          <option>Grand Wedding</option>
                          <option>Reception</option>
                          <option>Engagement Ceremony</option>
                          <option>Mehendi / Sangeet</option>
                          <option>Corporate Gala</option>
                          <option>Birthday Party</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Preferred Venue</label>
                        <select className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors appearance-none">
                          <option>Royal Grand Hall</option>
                          <option>Crystal Palace</option>
                          <option>Emerald Garden Arena</option>
                          <option>Sapphire Banquet</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Event Date</label>
                          <input type="date" className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors" />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Guest Count</label>
                          <input type="number" className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors" placeholder="0" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h4 className="text-xl font-serif font-bold text-neutral-900 border-b border-neutral-100 pb-4">Additional Services</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {['Full Catering', 'Decoration', 'Photography', 'DJ & Music', 'Valet Parking', 'Bridal Suite'].map((s) => (
                        <label key={s} className="flex items-center gap-3 cursor-pointer group">
                          <input type="checkbox" className="w-5 h-5 accent-amber-500 rounded border-neutral-300" />
                          <span className="text-sm text-gray-600 group-hover:text-amber-600 transition-colors">{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-amber-600 text-white py-6 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-amber-700 transition-all shadow-2xl shadow-amber-900/40">
                    Submit Booking Request
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                <div className="bg-neutral-900 p-10 rounded-[3rem] text-white">
                  <h3 className="text-2xl font-serif font-bold mb-8">Booking Process</h3>
                  <div className="space-y-8">
                    {[
                      { title: 'Submit Request', desc: 'Fill out the form with your event details.' },
                      { title: 'Consultation', desc: 'Our manager will call you to discuss requirements.' },
                      { title: 'Venue Tour', desc: 'Visit our halls and finalize the decoration theme.' },
                      { title: 'Confirmation', desc: 'Pay the token amount and secure your date.' }
                    ].map((step, i) => (
                      <div key={i} className="flex gap-6">
                        <div className="w-10 h-10 shrink-0 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">
                          {i + 1}
                        </div>
                        <div>
                          <h5 className="font-bold text-amber-500 mb-1">{step.title}</h5>
                          <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-50 p-10 rounded-[3rem] border border-amber-100">
                  <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-6">Need Help?</h3>
                  <p className="text-gray-600 mb-8">Our event specialists are available 24/7 to help you plan your perfect day.</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-amber-700 font-bold">
                      <Phone size={20} /> +91 1234567890
                    </div>
                    <div className="flex items-center gap-4 text-amber-700 font-bold">
                      <Mail size={20} /> booking@royalbanquet.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
