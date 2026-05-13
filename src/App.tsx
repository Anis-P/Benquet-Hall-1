import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Halls from './pages/Halls';
import HallDetails from './pages/HallDetails';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Packages from './pages/Packages';

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/halls" element={<Halls />} />
        <Route path="/halls/:id" element={<HallDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/packages" element={<Packages />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
