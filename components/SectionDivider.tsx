'use client';

import { motion } from 'motion/react';

interface SectionDividerProps {
  variant: 'light' | 'dark' | 'premium';
  className?: string;
}

export default function SectionDivider({ variant, className = "" }: SectionDividerProps) {
  const isLight = variant === 'light';
  const isPremium = variant === 'premium';
  
  // Specs from user:
  // Light divider: #F5F7FA (bg-[#F5F7FA])
  // Dark divider: #0B1F3A (bg-[#0B1F3A])
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={`w-full relative overflow-hidden ${
        isLight ? 'h-8 md:h-12 bg-[#F5F7FA]' : 
        isPremium ? 'h-8 bg-dark-gradient' :
        'h-8 md:h-12 bg-[#0B1F3A]'
      } ${className}`}
    >
      {/* Subtle depth enhancements */}
      {!isPremium && (
        <div className={`absolute inset-0 pointer-events-none ${
          isLight 
            ? 'bg-gradient-to-b from-black/[0.02] to-transparent' 
            : 'bg-gradient-to-b from-white/[0.01] to-transparent'
        }`} />
      )}
      
      {/* Premium Specific Elements - Clean, subtle and almost imperceptible */}
      {isPremium && (
        <>
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Ultra-subtle small glow point at the center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-secondary/10 blur-sm rounded-full" />
              <div className="w-1 h-1 rounded-full bg-secondary/30 animate-pulse" />
            </div>
          </div>
        </>
      )}

      {/* Standard center accent for light/dark */}
      {!isPremium && (
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center items-center opacity-15">
          <div className={`w-16 md:w-32 h-px ${isLight ? 'bg-primary/15' : 'bg-secondary/30'}`} />
          <div className={`w-1 h-1 rounded-full rotate-45 border ${isLight ? 'border-primary/20' : 'border-secondary/40'} mx-3 md:mx-5`} />
          <div className={`w-16 md:w-32 h-px ${isLight ? 'bg-primary/15' : 'bg-secondary/30'}`} />
        </div>
      )}

      {/* Subtle ambient light for dark variant */}
      {!isLight && !isPremium && (
        <>
          <div className="absolute top-0 left-1/4 w-24 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="absolute bottom-0 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </>
      )}
    </motion.div>
  );
}
