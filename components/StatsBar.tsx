'use client';

import { motion } from 'motion/react';
import { siteConfig } from '@/lib/site-config';

export default function StatsBar() {
  return (
    <div className="relative z-30 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 glass p-4 xs:p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem]"
        >
          {siteConfig.stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center p-2.5 xs:p-4 group ${
                index !== siteConfig.stats.length - 1 ? 'lg:border-r lg:border-black/5' : ''
              }`}
            >
              <div className="w-12 h-12 xs:w-14 xs:h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-4 xs:mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-500">
                <stat.icon className="w-6 h-6 xs:w-7 xs:h-7 text-primary group-hover:text-white transition-colors duration-500" />
              </div>
              <div className="text-2xl xs:text-3xl md:text-[42px] font-bold text-primary mb-1 tracking-tighter group-hover:text-secondary transition-colors duration-500">
                {stat.value}
              </div>
              <div className="text-[9px] xs:text-[11px] md:text-[13px] font-semibold text-text-muted uppercase tracking-[0.1em] md:tracking-[0.2em] leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
