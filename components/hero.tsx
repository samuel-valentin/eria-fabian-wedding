'use client';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0 opacity-15 overflow-hidden">
        {/* Background decorative image or pattern. Using placeholder */}
        <img 
          src="/images/1.jpg" 
          alt="Couple Background" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover blur-[2px] scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-beige/40 via-beige/80 to-beige"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="font-sans text-xs uppercase tracking-[0.4em] mb-4 md:mb-6 block text-terracotta font-semibold">
            We are getting married
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-serif text-7xl md:text-8xl lg:text-[10rem] mb-8 leading-[0.85] tracking-tight relative"
        >
          <span className="block text-charcoal">ERIA</span>
          <span className="block font-style-italic text-terracotta font-light text-5xl md:text-8xl lg:text-9xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 z-10">&amp;</span>
          <span className="block text-charcoal pt-4 md:pt-8">FABIAN</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 md:mt-16 flex flex-col items-center gap-4 md:gap-6"
        >
          <div className="h-[1px] w-24 bg-terracotta" />
          <span className="relative font-serif text-2xl md:text-3xl lg:text-4xl tracking-widest text-charcoal uppercase">
            <div className="absolute bottom-1 left-0 w-full h-3 bg-accent-yellow/40 -z-10 rounded-sm" />
            November 7th
          </span>
        </motion.div>
      </div>
    </section>
  );
}
