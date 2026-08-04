'use client';
import { motion } from 'motion/react';
import { GlassWater, Utensils, Grape, Flag } from 'lucide-react';

const events = [
  {
    time: '4:00 PM',
    title: 'S. Misa',
    description: 'Ceremonia en Templo del Inmaculado Corazón de María.',
    icon: Flag,
  },
  {
    time: '7:00 PM',
    title: 'Celebración',
    description: 'Recepción y cena en La Casa del Relojero.',
    icon: GlassWater,
  },
];

export default function Itinerary() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <section id="itinerary" className="py-24 md:py-32 bg-beige relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-yellow/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent-pink/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="font-sans uppercase tracking-[0.3em] text-xs text-terracotta block mb-4">Agenda del día</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-4">Perfil de Nuestra Gran Etapa</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line through timeline */}
          <div className="absolute left-[27px] md:left-[50%] top-0 bottom-0 w-px bg-terracotta/20" />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12 md:space-y-20"
          >
            {events.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse text-left' : 'text-left md:text-right'
                }`}
              >
                {/* Time section */}
                <div className={`w-full md:w-1/2 flex pl-16 md:pl-0 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <p className="font-serif text-2xl md:text-3xl text-terracotta">{event.time}</p>
                </div>

                {/* Icon marker */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-beige border-4 border-white shadow-sm text-terracotta z-10">
                  <event.icon size={20} strokeWidth={1.5} />
                </div>

                {/* Content section */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0`}>
                  <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-3">{event.title}</h3>
                  <p className="font-sans text-charcoal/60 leading-relaxed max-w-sm ml-0 mr-auto ${index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'}">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
