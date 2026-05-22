'use client';

import { motion } from 'motion/react';
import { siteConfig } from '@/lib/site-config';

export default function Differentials() {
  return (
    <section className="py-16 md:py-48 bg-slate-50" id="diferenciais">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-12 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/5 text-secondary/70 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] mb-6 md:mb-8"
          >
            Nossos Diferenciais
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[28px] sm:text-[42px] md:text-[56px] mb-6 md:mb-8 font-light tracking-tight leading-tight"
          >
            Por que escolher a <span className="font-semibold text-primary">{siteConfig.name}?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-505 max-w-2xl mx-auto text-[15px] md:text-[18px] font-light leading-relaxed text-slate-500"
          >
            Diferenciais que nos tornam o parceiro ideal para sua empresa alcançar novos patamares de excelência.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 items-stretch">
          {siteConfig.differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-6 xs:p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-premium active:scale-[0.98] active:bg-slate-50 transition-all duration-700 border border-black/5 group cursor-default flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-secondary/5 rounded-2xl flex items-center justify-center mb-6 md:mb-10 group-hover:bg-secondary group-hover:scale-110 group-hover:shadow-glow transition-all duration-700 ease-[0.16, 1, 0.3, 1]">
                <item.icon className="w-7 h-7 text-secondary group-hover:text-white transition-colors duration-700" />
              </div>
              <h3 className="mb-3 md:mb-4 text-[19px] md:text-[22px] font-medium tracking-tight group-hover:text-secondary transition-colors duration-500">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-[14px] md:text-[15px] font-light flex-grow">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
