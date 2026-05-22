'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, Phone, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { db, handleFirestoreError, OperationType } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const path = 'leads';
      await addDoc(collection(db, path), {
        ...formData,
        createdAt: new Date().toISOString()
      });

      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'leads');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="py-16 md:py-48 bg-white" id="contato">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] mb-6 md:mb-10">
              Contato
            </div>
            <h2 className="text-[28px] sm:text-[42px] md:text-[56px] font-light tracking-tight leading-tight mb-6 md:mb-10 text-balance">
              {siteConfig.contact.title}
            </h2>
            <p className="text-[15px] md:text-[20px] mb-8 md:mb-16 text-balance text-slate-500 font-light leading-relaxed">
              {siteConfig.contact.description}
            </p>

            <div className="space-y-6 md:space-y-10">
              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 group-hover:shadow-glow transition-all duration-700 ease-[0.16, 1, 0.3, 1]">
                  <Mail className="w-5 h-5 md:w-7 md:h-7 text-primary group-hover:text-white transition-colors duration-700" />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">E-mail</p>
                  <p className="text-base md:text-[20px] font-medium text-primary tracking-tight break-all md:break-normal">{siteConfig.contact.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 group-hover:shadow-glow transition-all duration-700 ease-[0.16, 1, 0.3, 1]">
                  <Phone className="w-5 h-5 md:w-7 md:h-7 text-primary group-hover:text-white transition-colors duration-700" />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">Telefone</p>
                  <p className="text-base md:text-[20px] font-medium text-primary tracking-tight">{siteConfig.contact.phone}</p>
                </div>
              </div>
            </div>

            {/* Secção Nossas Unidades */}
            <div className="mt-12 pt-10 border-t border-slate-100">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary" />
                Nossas Unidades
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {siteConfig.contact.units?.map((unit, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl border border-black/[0.05] bg-slate-50/50 hover:bg-white hover:border-secondary/20 hover:shadow-premium group/card transition-all duration-500 flex flex-col justify-between"
                  >
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        <h4 className="font-bold text-[13px] md:text-[14px] text-primary tracking-tight">
                          {unit.name}
                        </h4>
                      </div>
                      <p className="text-[12px] md:text-[13px] text-slate-500 font-light leading-relaxed select-all">
                        {unit.address}
                      </p>
                    </div>
                    
                    <a 
                      href={unit.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-secondary group-hover/card:text-primary transition-colors duration-300 self-start"
                    >
                      Como chegar
                      <ExternalLink className="w-3 h-3 group-hover/card:translate-x-1 duration-300 transition-transform" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-slate-50 p-6 xs:p-10 md:p-16 rounded-[2rem] md:rounded-[3rem] border border-black/5 shadow-premium mt-8 lg:mt-0"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 md:py-16">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-8 md:mb-10 shadow-sm animate-bounce">
                  <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-4">Mensagem Enviada!</h3>
                <p className="text-slate-500 mb-8 md:mb-10 font-light max-w-sm">Obrigado pelo contato. Nossa equipe de especialistas retornará em breve.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] md:text-[11px] hover:text-secondary transition-all hover:tracking-[0.3em]"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Nome</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      className="w-full bg-white border border-black/[0.08] rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-secondary/10 focus:border-secondary transition-all placeholder:text-slate-300 font-light text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">E-mail</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full bg-white border border-black/[0.08] rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-secondary/10 focus:border-secondary transition-all placeholder:text-slate-300 font-light text-sm"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Empresa</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nome da sua empresa"
                    className="w-full bg-white border border-black/[0.08] rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-secondary/10 focus:border-secondary transition-all placeholder:text-slate-300 font-light text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Mensagem</label>
                  <textarea 
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Como podemos ajudar seu negócio hoje?"
                    className="w-full bg-white border border-black/[0.08] rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-secondary/10 focus:border-secondary transition-all placeholder:text-slate-300 font-light resize-none text-sm"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-secondary text-white py-5 rounded-2xl text-[13px] md:text-[14px] font-bold uppercase tracking-[0.2em] transition-all duration-700 shadow-lg hover:shadow-secondary/20 group flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : (
                    <>
                      {siteConfig.contact.buttonText}
                      <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
