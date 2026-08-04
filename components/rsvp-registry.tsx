'use client';
import { motion } from 'motion/react';
import { Mail, Gift } from 'lucide-react';

export default function RsvpRegistry() {
  return (
    <section id="rsvp" className="bg-beige text-charcoal flex flex-col items-center border-t border-charcoal/10">
      <div className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 lg:divide-x divide-charcoal/10 gap-20 lg:gap-0">

        {/* RSVP Column */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center lg:pr-16 xl:pr-24"
        >
          <div className="w-20 h-20 rounded-full border border-terracotta flex items-center justify-center mb-8 bg-terracotta/5">
             <Mail size={32} className="text-terracotta stroke-1" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">RSVP</h2>
          <p className="font-sans text-lg text-charcoal/70 mb-10 max-w-sm leading-relaxed">
            Les pedimos amablemente que confirmen su asistencia antes de la fecha límite.
          </p>
          
          <div className="inline-block p-1 border border-terracotta/40">
            <div className="px-10 py-5 border border-terracotta flex flex-col gap-2 bg-terracotta/5">
                <span className="font-sans uppercase text-xs tracking-[0.2em] text-terracotta">Confirmar antes de</span>
                <span className="font-serif text-xl tracking-wider text-charcoal">Octubre 2026</span>
            </div>
          </div>
        </motion.div>

        {/* Registry Column */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center text-center lg:pl-16 xl:pl-24"
        >
          <div className="w-20 h-20 rounded-full border border-terracotta flex items-center justify-center mb-8 bg-terracotta/5">
             <Gift size={32} className="text-terracotta stroke-1" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Mesa de Regalos</h2>
          <p className="font-sans text-base md:text-lg text-charcoal/70 mb-10 leading-relaxed max-w-md">
            Sabemos que muchos de ustedes han viajado para acompañarnos en este día. ¡Su compañía es nuestro mejor regalo!
            <br /><br />
            Si desean hacernos el honor de agregar un detalle, les agradecemos sus aportaciones a:
            <br /><br />
            <span className="font-serif text-2xl font-semibold">CLABE 646180401624859934</span>
          </p>
        </motion.div>

      </div>
      
      {/* Footer minimal line */}
      <div className="w-full border-t border-charcoal/10 py-8 text-center text-xs font-sans tracking-[0.2em] text-charcoal/40 uppercase">
        Eria &amp; Fabian
      </div>
    </section>
  );
}
