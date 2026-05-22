'use client';

import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowRight, Menu, X, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/lib/site-config';
import StatsBar from '@/components/StatsBar';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <section className="relative overflow-hidden flex flex-col justify-between w-full min-h-[100vh]">
      {/* Navigation Bar */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 px-3 transition-all duration-500 ${scrolled ? 'py-1 md:py-2' : 'py-3 md:py-5'}`}
      >
        <motion.div 
          layout
          className={`mx-auto flex items-center justify-between transition-all duration-500 h-[70px] ${
            scrolled 
              ? 'max-w-6xl px-5 md:px-8 glass-dark rounded-full shadow-2xl scale-95' 
              : 'max-w-7xl px-4 md:px-10 bg-slate-950/40 backdrop-blur-md border border-white/5 rounded-full'
          } ${isMobileMenuOpen ? 'glass-dark rounded-[2rem] !h-auto py-4' : ''}`}
        >
          <motion.a 
            layout
            href="#" 
            className="flex items-center transition-all duration-500 relative"
          >
            <div className={`relative transition-all duration-500 ${
                scrolled ? 'h-10 w-32 md:h-12 md:w-40' : 'h-12 w-40 md:h-14 md:w-48'
              }`}>
              <Image 
                src="/logo-oficial.png" 
                alt="OFFICIA ROCHA ASSESSORIA" 
                fill
                priority
                className="object-contain mix-blend-screen filter brightness-0 invert" 
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.a>
          
          <nav className={`hidden lg:flex items-center transition-all duration-500 ${scrolled ? 'gap-6 text-[12px]' : 'gap-8 text-[13px]'} text-white/70 font-medium tracking-tight`}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondary transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 md:gap-4">
            <a 
              href="/portal-cliente" 
              className={`flex items-center gap-2 rounded-full font-bold uppercase transition-all duration-500 shadow-glow ${
                scrolled 
                  ? 'px-3.5 md:px-6 py-2 text-[9px] md:text-[11px] bg-secondary text-white hover:bg-white hover:text-primary' 
                  : 'px-4 md:px-8 py-2 md:py-3 text-[10px] md:text-[13px] bg-white/10 hover:bg-secondary text-white hover:shadow-glow'
              }`}
            >
              <span>Portal</span> <span className="hidden sm:inline">do Cliente</span>
            </a>

            <button 
              className="lg:hidden text-white/95 p-2 rounded-full hover:bg-white/5 active:bg-white/10 transition-colors focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-2xl lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col justify-between min-h-screen px-8 py-24 sm:py-28 relative z-10 gap-8">
                {/* Menu items background pattern */}
                <div className="absolute inset-0 bg-glow opacity-5 pointer-events-none" />
                
                <div className="flex flex-col gap-2 mt-4 relative z-10">
                  <p className="text-[10px] text-secondary font-bold uppercase tracking-[0.25em] mb-4">Navegação — OFFICIA ROCHA</p>
                  <nav className="flex flex-col gap-6">
                    {navLinks.map((link, idx) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <a 
                          href={link.href} 
                          className="flex items-baseline gap-4 group py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="text-[11px] font-bold text-secondary font-mono">0{idx + 1}</span>
                          <span className="text-white text-3xl font-light tracking-tight group-active:text-secondary hover:text-secondary transition-colors duration-300">
                            {link.name}
                          </span>
                        </a>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* Direct links & Contacts inside drawer for exceptional Mobile UX */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 border-t border-white/5 pt-8 flex flex-col gap-8 relative z-10"
                >
                  <div className="flex flex-col gap-3">
                    <a 
                      href="/portal-cliente" 
                      className="w-full py-4 bg-white/10 hover:bg-white text-white hover:text-primary rounded-2xl font-bold uppercase tracking-widest text-[12px] transition-all duration-300 text-center block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Portal do Cliente
                    </a>
                    <a 
                      href={`${siteConfig.whatsapp.link}?text=${encodeURIComponent(siteConfig.whatsapp.defaultMessage || '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-secondary text-white rounded-2xl font-bold uppercase tracking-widest text-[12px] transition-all duration-300 text-center flex items-center justify-center gap-2 block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Falar com um especialista
                    </a>
                  </div>

                  <div className="flex flex-col gap-2 text-white/50 text-[12px] font-light">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-secondary font-bold">Ligue:</span>
                      <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`} className="text-white hover:text-secondary transition-colors font-medium">
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-secondary font-bold">Email:</span>
                      <span className="text-white select-all break-all">{siteConfig.contact.email}</span>
                    </div>
                    <div className="text-[10px] text-white/30 uppercase tracking-widest mt-1">
                      {siteConfig.contact.hours}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Background/overlay/divisor: absolute; z-index 0 */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/escritorio-do-heroi.png"
          alt="Escritório Officia Rocha"
          fill
          priority
          className="object-cover zoom-bg opacity-50 [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-hero-overlay pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow opacity-40 blur-[120px] pointer-events-none" />
      </div>

      {/* Conteúdo da Hero: relative; z-index 10 */}
      <div className="relative z-10 flex flex-col justify-center flex-1 w-full pt-40 md:pt-48 pb-16 md:pb-20">
        <div className="text-center px-6 max-w-5xl mx-auto">
          <motion.div 
            className="space-y-8 md:space-y-10"
            initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          <div className="overflow-hidden">
            <motion.h1 
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: { 
                  y: 0, 
                  opacity: 1,
                  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
                }
              }}
              className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-light text-white tracking-[-0.04em] leading-[1.15] md:leading-[1.1] text-balance text-shadow-premium"
            >
              Gestão inteligente que <br className="hidden sm:block" />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-secondary to-white bg-[length:200%_auto] animate-shimmer drop-shadow-sm">fortalece o seu negócio</span>
            </motion.h1>
          </div>
          
          <div className="overflow-hidden">
            <motion.p 
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: { 
                  y: 0, 
                  opacity: 1,
                  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 } 
                }
              }}
              className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[21px] text-slate-300 font-light max-w-2xl mx-auto leading-relaxed text-balance tracking-tight opacity-90"
            >
              Contabilidade de alta performance para empresas que <br className="hidden md:block" /> 
              não aceitam nada menos que a excelência estratégica.
            </motion.p>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 } 
              }
            }}
            className="space-y-6 md:space-y-8"
          >
            <div className="text-white/90 text-xl md:text-2xl font-light">
              Honorários Mensais a partir de <span className="font-bold text-secondary">R$ 250,00</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-8 text-[11px] md:text-[13px] text-white/70 font-medium tracking-widest uppercase">
              {['Humanizado', 'Ágil', 'Sem Burocracia'].map((item) => (
                <div key={item} className="flex items-center gap-2 bg-white/5 md:bg-transparent px-3 py-1.5 md:p-0 rounded-full border border-white/5 md:border-none">
                  <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-slate-400 text-[13px] md:text-base font-light italic max-w-xl mx-auto opacity-70">
              Ideal para quem quer crescer com segurança e organização desde o início
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 } 
              }
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href={`${siteConfig.whatsapp.link}?text=${encodeURIComponent('Olá, gostaria de falar com a Unidade São Paulo e obter mais informações.')}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary hover:bg-white hover:text-primary text-white px-8 py-4 rounded-full text-[13px] sm:text-[14px] font-bold uppercase tracking-widest transition-all duration-500 shadow-glow group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer-fast" />
                <span className="relative z-10 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Unidade São Paulo
                </span>
              </a>
              <a 
                href={`${siteConfig.whatsapp.link}?text=${encodeURIComponent('Olá, gostaria de falar com a Unidade Capivari e obter mais informações.')}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary/80 hover:bg-white hover:text-primary text-white border border-white/10 px-8 py-4 rounded-full text-[13px] sm:text-[14px] font-bold uppercase tracking-widest transition-all duration-500 shadow-glow group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer-fast" />
                <span className="relative z-10 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Unidade Capivari
                </span>
              </a>
            </div>

            <a 
              href="#servicos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white/80 hover:text-white text-[15px] font-semibold tracking-wide transition-colors group"
            >
              Conheça nossas soluções
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
        </div>
      </div>

      {/* Cards de estatísticas: relative; z-index 20 */}
      <div className="relative z-20 w-full pb-12 pt-6">
        <StatsBar />
      </div>
    </section>
  );
}
