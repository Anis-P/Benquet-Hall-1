import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-10 border-t border-amber-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="text-3xl font-serif font-bold bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
                ROYAL BANQUET
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-amber-400/80">Excellence in Celebrations</span>
            </Link>
            <p className="text-gray-400 leading-relaxed font-light">
              Experience the pinnacle of luxury at Royal Banquet. We specialize in creating unforgettable memories for your most precious moments in life.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-amber-900/30 flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-serif font-semibold text-amber-400 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/halls" className="hover:text-amber-400 transition-colors">Banquet Halls</Link></li>
              <li><Link to="/services" className="hover:text-amber-400 transition-colors">Event Services</Link></li>
              <li><Link to="/gallery" className="hover:text-amber-400 transition-colors">Photo Gallery</Link></li>
              <li><Link to="/packages" className="hover:text-amber-400 transition-colors">Wedding Packages</Link></li>
              <li><Link to="/booking" className="hover:text-amber-400 transition-colors">Book a Venue</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif font-semibold text-amber-400 mb-6">Our Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Catering & Dining</li>
              <li>Floral Decoration</li>
              <li>Lighting & Sound</li>
              <li>Event Planning</li>
              <li>Photography</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif font-semibold text-amber-400 mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="text-amber-500 shrink-0" size={20} />
                <span>Jaipur, Rajasthan, India</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="text-amber-500 shrink-0" size={20} />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="text-amber-500 shrink-0" size={20} />
                <span>noemail@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-amber-900/20 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Royal Banquet. All Rights Reserved. Crafted for Luxury.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
