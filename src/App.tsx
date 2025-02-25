import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Features from './components/Features';
import Services from './components/Services';
import Expertise from './components/Expertise';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'expertise', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#1c1c1c] text-white overflow-hidden">
      <CursorGlow />
      
      {/* Floating Navigation */}
      <div className="floating-nav hidden lg:block">
        {['hero', 'services', 'expertise', 'about', 'contact'].map((section) => (
          <div
            key={section}
            className={`floating-nav-item ${activeSection === section ? 'active' : ''}`}
            onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
          />
        ))}
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        className="fixed top-4 right-4 z-50 p-2 lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Mobile Navigation */}
      <motion.div
        className={`fixed inset-0 z-40 bg-[#1c1c1c] lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ x: '100%' }}
        animate={{ x: isMenuOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 20 }}
      >
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </motion.div>

      {/* Main Content */}
      <main className="h-screen overflow-y-auto">
        <Hero />
        <Services />
        <Expertise />
        <About />
        <Contact />
        <Footer />
      </main>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#2ecc71] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}

export default App;