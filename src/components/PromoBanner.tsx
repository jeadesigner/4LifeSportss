import React from 'react';
import { MessageCircle, Building2, ShieldCheck, Truck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const PromoBanner: React.FC = () => {
  const handleWhatsAppClick = () => {
    const msg = encodeURIComponent('Olá, 4Life Sports! Represento uma empresa/condomínio/academia e gostaria de um orçamento personalizado com condições corporativas.');
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section className="bg-[#111111] border-y border-[#F5A623]/30 py-10 px-4 font-sans relative overflow-hidden">
      {/* Subtle Gold Accent Glow */}
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#F5A623]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#F5A623]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        <div className="space-y-3 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[#F5A623]/10 border border-[#F5A623]/40 px-3 py-1 rounded-full">
            <Building2 className="w-4 h-4 text-[#F5A623]" />
            <span className="text-[#F5A623] text-xs font-black uppercase tracking-widest">PROJETOS B2B & CORPORATIVOS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
            Atendemos Academias, Condomínios, Hotéis e Clubes
          </h2>

          <p className="text-[#F5A623] font-bold text-base sm:text-lg">
            Solicite seu Orçamento Personalizado com Condições Especiais de Faturamento
          </p>

          <div className="pt-2 flex flex-wrap justify-center lg:justify-start items-center gap-6 text-gray-400 text-xs">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#F5A623]" />
              Garantia de Fábrica Oficial
            </span>
            <span className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-[#F5A623]" />
              Entrega Técnica com Frota Própria
            </span>
          </div>
        </div>

        <button
          onClick={handleWhatsAppClick}
          className="bg-[#F5A623] text-[#111111] hover:bg-white hover:text-[#111111] font-black text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg hover:scale-105 shrink-0"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>Falar com Consultor B2B</span>
        </button>
      </div>
    </section>
  );
};
