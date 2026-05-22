'use client';

import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export default function GoogleMap() {
  return (
    <section className="bg-dark-gradient py-12 md:py-24 overflow-hidden relative">
      {/* Ambient background glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-secondary font-bold text-xs uppercase tracking-[0.2em] mb-3"
          >
            Presença Física
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight"
          >
            Nossas <span className="font-semibold text-secondary">Unidades</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-sm md:text-base max-w-lg mx-auto font-light mt-4"
          >
            Estrutura moderna e atendimento de excelência para receber você e impulsionar os resultados do seu negócio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {siteConfig.contact.units.map((unit, index) => {
            const encodedAddress = encodeURIComponent(unit.address);
            const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#0A1220]/50 border border-white/[0.04] rounded-[2rem] overflow-hidden backdrop-blur-md shadow-2xl flex flex-col h-full group hover:border-secondary/30 transition-all duration-500"
              >
                {/* Visual Label Top Bar */}
                <div className="px-6 py-4 border-b border-white/[0.04] flex items-center justify-between bg-white/[0.01]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Unidade Ativa</span>
                  </div>
                  <span className="text-[10px] text-secondary font-mono">0{index + 1}</span>
                </div>

                {/* The Map */}
                <div className="relative w-full h-[240px] md:h-[260px] overflow-hidden">
                  <iframe
                    title={unit.name}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    src={mapUrl}
                    allowFullScreen
                    loading="lazy"
                    className="opacity-90 contrast-[1.02] brightness-[0.95]"
                  />
                  <div className="absolute inset-0 pointer-events-none border-b border-white/[0.04]" />
                </div>

                {/* Info Area */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-base md:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-secondary shrink-0" />
                      {unit.name}
                    </h3>
                    <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">
                      {unit.address}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/[0.03]">
                    <a
                      href={unit.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-widest hover:text-white group-hover:gap-2.5 transition-all duration-300"
                    >
                      Como chegar no Google Maps
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
