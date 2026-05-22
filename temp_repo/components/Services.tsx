'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export default function Services() {
  return (
    <section className="relative py-16 md:py-48 bg-dark-gradient text-white" id="servicos">
      <div className="absolute inset-0 bg-glow opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="text-center mb-12 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] mb-6 md:mb-8"
          >
            Nossas Soluções
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[28px] sm:text-[42px] md:text-[56px] mb-6 md:mb-8 text-balance text-white font-light tracking-tight leading-tight"
          >
            Contabilidade Estratégica para <br className="hidden md:block" /> Empresas de <span className="font-semibold text-secondary">Alto Crescimento</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-[15px] md:text-[19px] text-balance text-white/50 font-light leading-relaxed"
          >
            Soluções completas e personalizadas para cada etapa do seu negócio, da abertura à gestão financeira avançada.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 items-stretch">
          {siteConfig.services.map((service, index) => {
            const encodedMessage = encodeURIComponent(service.whatsappMessage || '');
            const serviceWhatsappLink = `${siteConfig.whatsapp.link}?text=${encodedMessage}`;
            
            return (
              <motion.a
                key={index}
                href={serviceWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/5 p-6 xs:p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] hover:bg-white active:scale-[0.98] active:bg-white/15 transition-all duration-700 group border border-white/5 hover:border-white/10 cursor-pointer relative overflow-hidden flex flex-col justify-between h-full"
              >
                {/* Subtle background glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="flex-grow flex flex-col">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-sm group-hover:bg-secondary group-hover:scale-110 transition-all duration-700 ease-[0.16, 1, 0.3, 1] group-hover:shadow-glow">
                    <service.icon className="w-7 h-7 md:w-8 md:h-8 text-secondary group-hover:text-white transition-colors duration-700" />
                  </div>
                  
                  <h3 className="mb-3 md:mb-4 text-[20px] md:text-[24px] text-white font-medium group-hover:text-primary transition-colors duration-500 tracking-tight">{service.title}</h3>
                  
                  <p className="mb-8 leading-relaxed text-[14px] md:text-[16px] text-white/50 group-hover:text-primary/70 transition-colors duration-500 font-light flex-grow">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-secondary font-bold text-[13px] md:text-[14px] uppercase tracking-widest group-hover:text-primary transition-colors duration-500 mt-auto pt-4 border-t border-white/5">
                  Fale com a gente
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-500" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
