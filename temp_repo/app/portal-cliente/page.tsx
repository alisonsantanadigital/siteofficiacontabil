'use client';

import { motion } from 'motion/react';
import { ArrowLeft, Clock, Phone, Sparkles, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-slate-800 flex flex-col justify-between p-6 md:p-12 relative overflow-hidden font-sans">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 w-full max-w-4xl mx-auto flex items-center justify-between">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-all text-xs md:text-sm font-semibold tracking-wide group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar ao início
        </Link>
        
        <Link href="/" className="relative w-28 h-8 hover:opacity-80 transition-opacity">
          <Image 
            src="/logo-oficial.png" 
            alt="OFFICIA ROCHA" 
            fill
            className="object-contain filter brightness-0" 
            referrerPolicy="no-referrer"
          />
        </Link>
      </header>

      {/* Main Content (Centered and Simplified) */}
      <main className="relative z-10 w-full max-w-xl mx-auto my-auto flex flex-col items-center text-center space-y-8 py-12">
        {/* Coming Soon Pill */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[11px] font-bold uppercase tracking-[0.25em]"
        >
          <Sparkles className="w-3 h-3" />
          Em Breve
        </motion.div>

        {/* Title */}
        <div className="space-y-3">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight"
          >
            Portal do Cliente
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-500 text-sm md:text-base font-light leading-relaxed max-w-md mx-auto"
          >
            Estamos preparando uma plataforma exclusiva para otimizar, centralizar e digitalizar a gestão da sua empresa. Volte em breve!
          </motion.p>
        </div>

        {/* Support Information & Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full bg-white border border-slate-100 p-6 md:p-8 rounded-[28px] space-y-6 shadow-xl shadow-slate-200/40 backdrop-blur-md"
        >
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-[#0B1F3A] font-extrabold">Precisa de assistência imediata?</p>
            <p className="text-slate-500 text-xs font-light">Nossos especialistas estão de prontidão para ajudar sua empresa hoje mesmo.</p>
          </div>

          <div className="space-y-4">
            <a 
              href={siteConfig.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 bg-secondary hover:bg-[#0B1F3A] text-white px-6 py-4 rounded-xl font-bold uppercase text-[11px] md:text-[12px] tracking-widest transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_20px_rgba(212,163,89,0.25)]"
            >
              <MessageCircle className="w-4 h-4" />
              Chamar no WhatsApp
            </a>

            {/* Quick Contact Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-slate-500 text-[11.5px] font-semibold">
              <div className="flex items-center justify-center gap-2.5">
                <Clock className="w-3.5 h-3.5 text-secondary shrink-0" />
                <span>{siteConfig.contact.hours}</span>
              </div>
              <div className="flex items-center justify-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-secondary shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer / Copyright bar */}
      <footer className="relative z-10 w-full max-w-4xl mx-auto pt-6 border-t border-slate-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 font-medium tracking-wide">
        <div>
          &copy; {new Date().getFullYear()} OFFICIA ROCHA ASSESSORIA E CONTABILIDADE.
        </div>
        <div className="uppercase tracking-widest text-[10px] font-bold text-secondary">
          Excelência em Gestão de Elite
        </div>
      </footer>
    </div>
  );
}
