'use client';

import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center">
      {/* Pulse Ring */}
      <div className="absolute w-full h-full rounded-full bg-[#25D366] animate-pulse-ring opacity-75" />
      
      <a
        href={`${siteConfig.whatsapp.link}?text=${encodeURIComponent(siteConfig.whatsapp.defaultMessage || '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 bg-[#25D366] text-white p-3.5 md:p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
        
        {/* Tooltip - Desktop Only */}
        <span className="hidden md:inline-block absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
          Fale conosco no WhatsApp!
        </span>
      </a>
    </div>
  );
}
