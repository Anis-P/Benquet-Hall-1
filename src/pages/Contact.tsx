import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Get In Touch"
            title="Contact Our Experts"
          />

          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="space-y-8">
                <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100">
                  <div className="w-12 h-12 bg-amber-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-900/20">
                    <Phone size={24} />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-neutral-900 mb-2">Call Us</h4>
                  <p className="text-gray-600">+91 1234567890</p>
                  <p className="text-gray-600">+91 0987654321</p>
                </div>

                <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100">
                  <div className="w-12 h-12 bg-amber-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-900/20">
                    <Mail size={24} />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-neutral-900 mb-2">Email Us</h4>
                  <p className="text-gray-600">noemail@gmail.com</p>
                  <p className="text-gray-600">support@royalbanquet.com</p>
                </div>

                <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100">
                  <div className="w-12 h-12 bg-amber-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-900/20">
                    <MapPin size={24} />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-neutral-900 mb-2">Our Location</h4>
                  <p className="text-gray-600">Opposite City Palace, Jaipur, Rajasthan, India</p>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-neutral-100">
                <h3 className="text-3xl font-serif font-bold text-neutral-900 mb-8">Send Us a Message</h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Full Name</label>
                      <input type="text" className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Email Address</label>
                      <input type="email" className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Phone Number</label>
                      <input type="tel" className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors" placeholder="+91" />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Event Type</label>
                      <select className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors appearance-none">
                        <option>Wedding</option>
                        <option>Reception</option>
                        <option>Engagement</option>
                        <option>Corporate Event</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Message</label>
                      <textarea rows={5} className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors" placeholder="Tell us about your event..."></textarea>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <button className="w-full bg-neutral-900 text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-amber-600 transition-all flex items-center justify-center gap-3 shadow-xl">
                      Send Message <Send size={18} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-neutral-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56910.15073289063!2d75.7628830740924!3d26.93092288344717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db60e3f225881%3A0x6331a986c75f0a0c!2sCity%20Palace%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1710526000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
