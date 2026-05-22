'use client';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function FirstDance() {
  return (
    <section id="bike-ride" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid xl:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="order-2 xl:order-1"
        >
          <span className="font-sans uppercase tracking-[0.3em] text-xs text-terracotta block mb-4">The Next Day</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 leading-tight inline-block relative">
            Nuestro Primer Baile
            <div className="absolute -bottom-2 right-0 w-1/3 h-4 bg-accent-pink/40 -z-10 rounded-sm -rotate-2" />
          </h2>
          <p className="font-sans text-lg md:text-xl text-charcoal/80 mb-10 flex items-center font-style-italic leading-relaxed">
            El domingo después de la boda, acompáñanos en nuestro primer baile como esposos <Heart className="inline text-terracotta ml-3 shrink-0 stroke-[1.5]" size={24}/>
          </p>

          <div className="bg-beige/50 p-8 md:p-10 rounded-3xl border border-terracotta/10 relative">
            <p className="font-sans font-medium text-terracotta-dark mb-8 uppercase tracking-[0.15em] text-sm text-center">
              Spoiler: no es realmente un baile... <br className="hidden md:block" />
              Tomaremos la carretera en lugar de la pista.
            </p>

            <div className="grid sm:grid-cols-2 gap-10 text-charcoal">
              <div>
                <h4 className="font-serif text-2xl mb-4 border-b border-terracotta/20 pb-2">Detalles</h4>
                <ul className="space-y-4 font-sans text-sm">
                  <li className="flex flex-col">
                    <span className="uppercase text-xs tracking-wider text-charcoal/50 font-bold mb-1">Hora</span> 
                    <span className="text-base text-charcoal/80">11:00 AM</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="uppercase text-xs tracking-wider text-charcoal/50 font-bold mb-1">Punto de partida</span>
                    <span className="text-base text-charcoal/80">Puente Viejo</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-serif text-2xl mb-4 border-b border-terracotta/20 pb-2">Grupos</h4>
                <ul className="space-y-4 font-sans text-sm">
                  <li className="flex items-start gap-3">
                    <span className="font-serif text-xl text-terracotta">A</span>
                    <span className="text-charcoal/80 pt-1">Si crees que puedes seguirle el ritmo al novio, este es tu grupo.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-serif text-xl text-terracotta">B</span>
                    <span className="text-charcoal/80 pt-1">Ritmo de personas normales. Este es tu pelotón.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 p-5 bg-white rounded-2xl border border-terracotta/5 shadow-sm text-sm font-sans text-charcoal/70 text-center leading-relaxed">
              Este será un no-drop ride (nadie se queda atrás). Ambos grupos saldrán juntos. Los GPX de las rutas se compartirán con antelación. Nos adaptaremos al clima.
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="order-1 xl:order-2 w-full aspect-[3/4] md:aspect-[4/3] xl:aspect-square bg-[#FDFBF7] rounded-[3rem] overflow-hidden flex items-center justify-center p-6 md:p-12 border border-terracotta/10 relative"
        >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 mix-blend-multiply" />
            <img 
              src="/images/2.jpg" 
              alt="Bicycle ride sketch placeholder" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-2xl grayscale opacity-90 transition-opacity duration-700 hover:opacity-100 hover:grayscale-0 relative z-10 shadow-lg" 
            />
        </motion.div>
        
      </div>
    </section>
  );
}
