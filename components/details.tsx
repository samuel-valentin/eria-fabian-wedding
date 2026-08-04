'use client';
import { motion } from 'motion/react';
import { MapPin, CalendarHeart, Shirt, Sparkles, Feather } from 'lucide-react';

export default function Details() {
  return (
    <section id="details" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-pink/30 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-yellow/30 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-4xl mx-auto px-6 text-center mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="font-sans uppercase tracking-[0.3em] text-xs text-terracotta block mb-6 font-bold">
            La Celebración
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-charcoal mb-8 leading-tight">
            Acompáñanos a celebrar nuestra boda
          </h2>
          <p className="font-sans text-xl md:text-2xl text-charcoal/70 leading-relaxed max-w-2xl mx-auto font-light">
            Queremos invitarte a ser parte de este momento tan especial.<br className="hidden md:block"/>
            <span className="italic text-terracotta mt-2 inline-block">"Nothing fancy, just a lot of love!"</span><br className="hidden md:block"/>
            <span className="mt-4 inline-block">Esperamos con ilusión compartirlo con nuestros seres queridos.</span>
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-beige/50 border border-terracotta/20 p-10 lg:p-14 rounded-2xl relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 blur-2xl rounded-full" />
            <div className="flex flex-col h-full relative z-10">
              <span className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full text-terracotta shadow-sm mb-8 border border-terracotta/10">
                <CalendarHeart size={32} strokeWidth={1.5} />
              </span>
              <h3 className="font-sans uppercase tracking-[0.2em] text-sm text-terracotta mb-4 font-bold">Cuándo</h3>
              <p className="font-serif text-4xl text-charcoal mb-4">7 de noviembre<br/>de 2026</p>
              <p className="font-sans text-base text-charcoal/60 leading-relaxed uppercase tracking-wider mt-auto pt-8 border-t border-terracotta/10">
                Guadalajara, Jalisco, México
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-beige/50 border border-terracotta/20 p-10 lg:p-14 rounded-2xl relative"
          >
            <div className="flex flex-col h-full relative z-10">
              <span className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full text-terracotta shadow-sm mb-8 border border-terracotta/10">
                <MapPin size={32} strokeWidth={1.5} />
              </span>
              <h3 className="font-sans uppercase tracking-[0.2em] text-sm text-terracotta mb-4 font-bold">Dónde</h3>
              
              <div className="mb-8">
                <p className="font-serif text-2xl text-charcoal mb-2">S. Misa • 4:00 PM</p>
                <p className="font-sans text-base text-charcoal/80 mb-3">Templo del Inmaculado Corazón de María</p>
                <a href="https://www.google.com/maps/search/?api=1&query=20.760033,-103.414437" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-terracotta hover:text-terracotta-dark leading-relaxed uppercase tracking-widest underline decoration-terracotta/40 underline-offset-4 transition-colors">
                  Ver en Google Maps
                </a>
              </div>

              <div className="pt-8 border-t border-terracotta/10">
                <p className="font-serif text-2xl text-charcoal mb-2">Celebración • 7:00 PM</p>
                <p className="font-sans text-base text-charcoal/80 mb-2">La Casa del Relojero</p>
                <p className="font-sans text-sm text-charcoal/60 leading-relaxed uppercase tracking-wider mb-3">
                  C. Francia 1333, Moderna, 44190
                </p>
                <a href="https://www.google.com/maps/search/?api=1&query=La+Casa+del+Relojero,+C.+Francia+1333,+Moderna,+44190" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-terracotta hover:text-terracotta-dark leading-relaxed uppercase tracking-widest underline decoration-terracotta/40 underline-offset-4 transition-colors">
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 lg:mt-12 bg-terracotta text-white p-10 lg:p-16 rounded-2xl relative overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full text-white mb-8 border border-white/20">
                <Shirt size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-sans uppercase tracking-[0.2em] text-sm text-white/80 mb-4 font-bold">Código de Vestimenta</h3>
              <p className="font-serif text-5xl md:text-6xl text-white mb-6">French it up!</p>
              <p className="font-sans text-lg text-white/90 leading-relaxed mb-8 font-light">
                Francia ocupa un lugar muy especial en nuestro corazón, así que queremos traer un poco de ella a nuestra boda.
              </p>
              <div className="px-5 py-4 bg-white/10 border-l-4 border-white/40 rounded-r-lg">
                <p className="font-sans text-base text-white/90 leading-relaxed">
                  Con mucho cariño, les pedimos considerar una <span className="font-bold tracking-wide">vestimenta modesta</span> durante la ceremonia religiosa.
                </p>
              </div>
            </div>
            
            <div className="bg-black/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-yellow/20 rounded-full blur-2xl" />
              <h4 className="font-serif text-3xl text-white mb-4 flex items-center gap-3">
                <Sparkles size={28} className="text-accent-yellow" />
                Elegancia Atemporal
              </h4>
              <p className="font-sans text-base text-white/80 leading-relaxed mb-8">
                Inspirada en la elegancia de las bodas europeas clásicas, invitamos a las damas a completar su atuendo con un tocado o sombrero.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Feather size={32} strokeWidth={1.2} className="text-white mb-4" />
                  <span className="font-sans uppercase tracking-widest text-xs text-white">Tocados</span>
                </div>
                <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="relative mb-4">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4c-3 0-5.5 2-6 5H4a1 1 0 000 2h16a1 1 0 000-2h-2c-.5-3-3-5-6-5z" />
                     </svg>
                  </div>
                  <span className="font-sans uppercase tracking-widest text-xs text-white">Sombreros</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
