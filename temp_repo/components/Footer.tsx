'use client';

import { ArrowRight, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/lib/site-config';

export default function Footer() {
  return (
    <footer className="bg-dark-gradient text-white py-16 md:py-48">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-24 mb-16 md:mb-24">
          <div className="lg:col-span-1">
            <div className="mb-6 relative h-12 w-36 md:h-20 md:w-56">
              <Image 
                src="/logo-oficial.png" 
                alt="OFFICIA ROCHA ASSESSORIA" 
                fill
                className="object-contain object-left mix-blend-screen filter brightness-0 invert" 
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 md:mb-10 font-light text-[14px] md:text-base">
              Inteligência financeira e contabilidade estratégica para empresas que buscam alta performance e crescimento sustentável.
            </p>
            <div className="flex gap-4">
              <a 
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-600 transition-all duration-500 shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4.5 h-4.5 md:w-5 md:h-5" />
              </a>
              <a 
                href={siteConfig.contact.facebook} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all duration-500 shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-4.5 h-4.5 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] md:text-[11px] mb-6 md:mb-10">Serviços</h4>
            <ul className="space-y-4 md:space-y-5">
              {siteConfig.services.slice(0, 4).map((service) => (
                <li key={service.title}>
                  <a href="#servicos" className="text-slate-400 hover:text-secondary transition-all duration-300 text-[14px] md:text-base font-light hover:ml-2">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] md:text-[11px] mb-6 md:mb-10">Contato</h4>
            <ul className="space-y-4 md:space-y-6 text-slate-400">
              <li className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <span className="text-secondary mt-0.5 shrink-0">📍</span>
                  <div className="flex flex-col gap-3">
                    {siteConfig.contact.units?.map((unit, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-[11px] font-bold text-white tracking-wider uppercase mb-0.5">{unit.name}</span>
                        <a 
                          href={unit.mapsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[13px] md:text-[14px] font-light leading-normal text-slate-400 hover:text-secondary transition-colors"
                        >
                          {unit.address}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary">📧</span>
                <span className="text-[13px] md:text-[15px] font-light overflow-x-auto select-all">{siteConfig.contact.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary">📱</span>
                <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`} className="text-[13px] md:text-[15px] font-light hover:text-secondary transition-colors">{siteConfig.contact.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary">⏰</span>
                <span className="text-[13px] md:text-[15px] font-light">{siteConfig.contact.hours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] md:text-[11px] mb-6 md:mb-10">Newsletter</h4>
            <p className="text-slate-400 text-[13px] md:text-[14px] font-light mb-6 leading-relaxed">Receba insights estratégicos diretamente no seu e-mail.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Seu e-mail"
                className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3 focus:outline-none focus:ring-4 focus:ring-secondary/10 w-full text-sm font-light transition-all"
              />
              <button className="bg-secondary hover:bg-white hover:text-primary text-white p-3 md:p-4 rounded-2xl transition-all duration-500 shadow-glow flex items-center justify-center shrink-0">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex flex-col gap-1.5 items-center md:items-start text-slate-600 font-light">
            <p className="text-[11px] md:text-[13px]">
              © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
            </p>
            <p className="text-[10px] md:text-[11px] opacity-70">
              CNPJ: 46.295.546/0001-18
            </p>
          </div>
          <div className="flex gap-8 text-[11px] md:text-[13px] text-slate-600 font-light justify-center">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
