'use client';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Details', href: '#details' },
    { name: 'Itinerary', href: '#itinerary' },
    { name: 'Bike Ride', href: '#bike-ride' },
    { name: 'RSVP & Registry', href: '#rsvp' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-beige/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-serif text-2xl font-bold tracking-widest text-terracotta hover:opacity-80 transition-opacity">
          E & F
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-charcoal hover:text-terracotta transition-colors font-semibold"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 -mr-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="text-charcoal" /> : <Menu className="text-charcoal" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-beige border-b border-terracotta/20 py-8 flex flex-col items-center gap-6 shadow-xl md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-sans text-sm uppercase tracking-[0.2em] text-charcoal hover:text-terracotta transition-colors"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
