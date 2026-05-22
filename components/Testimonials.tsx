'use client';

import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-48 bg-dark-gradient text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-glow opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="text-center mb-12 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] mb-6 md:mb-8"
          >
            Feedback do Google Maps
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[28px] sm:text-[42px] md:text-[56px] text-white font-light tracking-tight mb-6 md:mb-8 leading-tight"
          >
            Excelência Comprovada por <br className="hidden md:block" /> <span className="font-semibold text-secondary">Nossos Clientes</span>
          </motion.h2>
          <div className="flex flex-col items-center gap-3 md:gap-4 mb-4">
            <div className="flex items-center gap-1.5 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4.5 h-4.5 md:w-5 md:h-5 fill-current" />
              ))}
            </div>
            <span className="text-white/50 text-[11px] md:text-[14px] font-medium tracking-wide uppercase px-4 py-1 bg-white/5 rounded-full">4.9/5 estrelas no Google Maps</span>
          </div>
        </div>

        <div className="flex md:grid md:grid-cols-5 overflow-x-auto md:overflow-visible gap-4 md:gap-3 lg:gap-4 pb-6 md:pb-0 snap-x snap-mandatory scrollbar-none">
          {siteConfig.testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="shrink-0 w-[270px] xs:w-[300px] md:w-auto snap-center bg-white/5 backdrop-blur-md p-5 md:p-3.5 lg:p-6 rounded-xl md:rounded-[1.5rem] relative group border border-white/5 hover:border-white/10 active:scale-[0.98] active:bg-white/10 transition-all duration-700 h-full flex flex-col justify-between cursor-default"
            >
              <div className="flex-grow flex flex-col">
                <div className="flex gap-1 text-yellow-500 mb-4 md:mb-2.5 lg:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current opacity-80" />
                  ))}
                </div>
                <Quote className="absolute top-5 right-5 md:top-4 md:right-4 lg:top-6 lg:right-6 w-6 h-6 md:w-7 md:h-7 text-white/5 group-hover:text-secondary/20 transition-colors duration-700" />
                <p className="text-xs sm:text-xs md:text-[11px] lg:text-sm font-light italic mb-5 md:mb-3 lg:mb-6 leading-relaxed text-white/90 relative z-10 flex-grow tracking-tight">
                  &quot;{t.text}&quot;
                </p>
              </div>
              
              <div className="mt-auto">
                <div className="flex items-center gap-2 md:gap-2 lg:gap-3.5 mb-4 md:mb-2.5 lg:mb-4 border-t border-white/5 pt-4 md:pt-3 lg:pt-4">
                  <div className="w-8 h-8 md:w-7 md:h-7 lg:w-10 lg:h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-xs lg:text-base border border-secondary/20 shadow-glow shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1 mb-0.5 flex-wrap">
                      <p className="font-bold text-white text-xs lg:text-sm tracking-tight truncate">{t.name}</p>
                      <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center text-[5px] text-white shrink-0">✓</div>
                    </div>
                    <p className="text-[8px] md:text-[8px] lg:text-[10px] text-white/40 font-medium uppercase tracking-[0.12em] truncate">{t.company}</p>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-green-500/50" />
                  <span className="text-[8px] lg:text-[10px] text-white/20 uppercase tracking-[0.15em] font-bold">Google Maps</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
