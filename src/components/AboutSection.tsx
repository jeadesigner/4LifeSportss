import React from 'react';
import { MessageCircle, Award, Users, PackageCheck, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import aboutShowroomImg from '../assets/images/about_showroom_1784675633116.jpg';

export const AboutSection: React.FC = () => {
  const handleContactClick = () => {
    const msg = encodeURIComponent('Olá, 4Life Sports! Gostaria de conhecer mais sobre a empresa e conversar sobre orçamentos.');
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="quem-somos" className="py-16 bg-white font-sans scroll-mt-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image / Showroom Card */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-[#111111]">
              <img
                src={aboutShowroomImg}
                alt="Showroom 4Life Sports"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  console.error('[Image Error] Failed to load Showroom image:', aboutShowroomImg);
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1000';
                }}
                className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Floating Badge Card */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-6 bg-[#111111]/90 backdrop-blur-md rounded-xl border border-[#F5A623]/30 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-1.5 sm:p-2 bg-[#F5A623] text-[#111111] rounded-lg font-black text-xs sm:text-sm shrink-0">
                    4LIFE
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs sm:text-sm text-white">Showroom & Centro Técnico</h4>
                    <p className="text-[10px] sm:text-xs text-gray-300">São Paulo — Atendimento Nacional</p>
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed line-clamp-2 sm:line-clamp-none">
                  Equipamentos testados e aprovados pelos maiores especialistas em biomecânica do país.
                </p>
              </div>
            </div>

            {/* Decorative Gold Border Outline */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#F5A623] rounded-2xl -z-10 hidden sm:block" />
          </div>

          {/* Right Column: Story & Mission Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#111111] text-[#F5A623] px-3.5 py-1 rounded-md text-xs font-black uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>NOSSA HISTÓRIA E COMPROMISSO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight leading-tight">
              A 4Life Sports nasceu para transformar espaços fitness em experiências de alta performance
            </h2>

            <p className="text-gray-600 text-base leading-relaxed">
              Com inspiração no mercado de fitness profissional de alto padrão, a <strong>4Life Sports</strong> oferece soluções completas em equipamentos de musculação, cardio e acessórios. Atendemos academias comerciais, condomínios residenciais, hotéis, clubes e stúdios de treinamento funcional em todo o Brasil.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              Nossa missão é fornecer estruturas com ergonomia perfeita, biomecânica fluida, tubulações de aço de extrema resistência e acabamento impecável, garantindo a segurança do aluno e o retorno sobre o investimento para o proprietário.
            </p>

            {/* 3 Impact Numbers - Highlight Boxes */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-b border-gray-100 py-4 sm:py-6">
              <div className="bg-[#F5F5F5] p-2.5 sm:p-4 rounded-xl border border-gray-200 text-center">
                <div className="flex justify-center mb-1 text-[#111111]">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5A623]" />
                </div>
                <span className="block font-black text-lg sm:text-3xl text-[#111111]">+500</span>
                <span className="text-[9px] sm:text-[11px] font-bold text-gray-500 uppercase tracking-tight">Clientes</span>
              </div>

              <div className="bg-[#F5F5F5] p-2.5 sm:p-4 rounded-xl border border-gray-200 text-center">
                <div className="flex justify-center mb-1 text-[#111111]">
                  <PackageCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5A623]" />
                </div>
                <span className="block font-black text-lg sm:text-3xl text-[#111111]">+20</span>
                <span className="text-[9px] sm:text-[11px] font-bold text-gray-500 uppercase tracking-tight">Produtos</span>
              </div>

              <div className="bg-[#F5F5F5] p-2.5 sm:p-4 rounded-xl border border-gray-200 text-center">
                <div className="flex justify-center mb-1 text-[#111111]">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5A623]" />
                </div>
                <span className="block font-black text-lg sm:text-3xl text-[#111111]">+5 Anos</span>
                <span className="text-[9px] sm:text-[11px] font-bold text-gray-500 uppercase tracking-tight">Mercado</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={handleContactClick}
                className="bg-[#111111] text-white hover:bg-[#F5A623] hover:text-[#111111] font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Fale com a Gente</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
