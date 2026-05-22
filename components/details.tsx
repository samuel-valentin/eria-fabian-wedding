'use client';
import { motion } from 'motion/react';
import { MapPin, CalendarHeart } from 'lucide-react';

export default function Details() {
  return (
    <section id="details" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1 flex justify-center"
          >
            <div className="image-frame w-full max-w-sm xl:max-w-md aspect-[4/5] mx-auto md:mx-0 relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-pink/40 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-yellow/40 rounded-full blur-2xl -z-10" />
              <div className="w-full h-full bg-[#EAE2DC] relative flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/1.jpg" 
                  alt="Eria and Fabian placeholder" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-beige/40 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <span className="font-sans uppercase tracking-[0.3em] text-xs text-terracotta block mb-4">The Celebration</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-8 leading-tight">
              Acompáñanos a celebrar nuestros votos
            </h2>
            <p className="font-sans text-lg text-charcoal/70 mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Queremos invitarte a ser parte de una ceremonia íntima. Esperamos con ilusión compartir este hermoso momento con nuestros seres más queridos.
            </p>

            <div className="space-y-8 max-w-md mx-auto lg:mx-0 text-left">
              <div className="flex gap-6 items-start">
                <span className="shrink-0 p-4 bg-beige rounded-2xl text-terracotta border border-terracotta/10">
                  <CalendarHeart size={28} strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="font-sans uppercase tracking-[0.2em] text-xs text-terracotta mb-2 font-bold">When</h3>
                  <p className="font-serif text-xl md:text-2xl text-charcoal">Sunday, November 7th</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <span className="shrink-0 p-4 bg-beige rounded-2xl text-terracotta border border-terracotta/10">
                  <MapPin size={28} strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="font-sans uppercase tracking-[0.2em] text-xs text-terracotta mb-2 font-bold">Where</h3>
                  <p className="font-serif text-xl md:text-2xl text-charcoal mb-2">&lt;To Be Defined&gt;</p>
                  <p className="font-sans text-sm text-charcoal/60 leading-relaxed uppercase tracking-wider">
                    Location details to follow
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
