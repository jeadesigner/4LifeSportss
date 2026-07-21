import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, ShieldCheck, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { ProductCategory } from '../types';

interface FooterProps {
  onSelectCategory: (cat: ProductCategory) => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenQuoteSimulator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onNavigateSection,
  onOpenQuoteSimulator
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (cat: ProductCategory) => {
    onSelectCategory(cat);
    onNavigateSection('catalogo');
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent('Olá, 4Life Sports! Vim pelo rodapé do site e gostaria de solicitar um orçamento.');
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <footer className="bg-[#111111] text-gray-300 font-sans pt-16 pb-8 border-t-4 border-[#F5A623]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* Column 1: Logo & Short Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-[#F5A623] text-[#111111] px-2.5 py-1 rounded font-black text-lg">
                4L
              </div>
              <span className="font-black text-2xl tracking-wider text-white">
                4LIFE <span className="text-[#F5A623]">SPORTS</span>
              </span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              {COMPANY_INFO.tagline}. Soluções completas com alta qualidade, ergonomia avançada e suporte técnico garantido.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#F5A623] font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Garantia de Fábrica em Todo o Brasil</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wider border-b border-gray-800 pb-2">
              Links Rápidos
            </h3>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <button onClick={() => onNavigateSection('catalogo')} className="hover:text-[#F5A623] transition-colors">
                  • Catálogo 2026
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('quem-somos')} className="hover:text-[#F5A623] transition-colors">
                  • Quem Somos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('faq')} className="hover:text-[#F5A623] transition-colors">
                  • Perguntas Frequentes (FAQ)
                </button>
              </li>
              <li>
                <button onClick={onOpenQuoteSimulator} className="hover:text-[#F5A623] transition-colors text-[#F5A623]">
                  • Simulador de Orçamento
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div className="space-y-3">
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wider border-b border-gray-800 pb-2">
              Categorias
            </h3>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <button onClick={() => handleCategoryClick('cardio')} className="hover:text-[#F5A623] transition-colors flex items-center gap-1">
                  <span>🚴 Cardio</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('musculacao')} className="hover:text-[#F5A623] transition-colors flex items-center gap-1">
                  <span>🏋️ Musculação</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('acessorios')} className="hover:text-[#F5A623] transition-colors flex items-center gap-1">
                  <span>🎽 Acessórios</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="space-y-3">
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wider border-b border-gray-800 pb-2">
              Atendimento & Contato
            </h3>

            <div className="space-y-2.5 text-xs">
              <a href={`tel:${COMPANY_INFO.whatsappNumber}`} className="flex items-center gap-2 hover:text-[#F5A623] transition-colors">
                <Phone className="w-4 h-4 text-[#F5A623] shrink-0" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>

              <a href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-emerald-400 font-bold hover:underline">
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <span>WhatsApp Vendas e Suporte</span>
              </a>

              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4 text-[#F5A623] shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>

              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <button onClick={openWhatsApp} className="p-2 bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white rounded-lg transition-all" title="WhatsApp">
                <MessageCircle className="w-4 h-4" />
              </button>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 bg-gray-800 hover:bg-[#F5A623] hover:text-[#111111] rounded-lg transition-all" title="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 bg-gray-800 hover:bg-[#F5A623] hover:text-[#111111] rounded-lg transition-all" title="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 4Life Sports. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end">
            <a
              href="https://leondesigner.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#F5A623] transition-colors flex items-center gap-1 font-medium"
            >
              Produzido por <span className="font-bold text-white hover:text-[#F5A623] underline decoration-[#F5A623]/50">Leon Designer</span>
            </a>
            <span className="text-gray-700 hidden sm:inline">•</span>
            <span className="hidden md:inline">Equipamentos Fitness Profissionais</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-gray-800 hover:bg-[#F5A623] hover:text-[#111111] text-white rounded-lg transition-colors flex items-center gap-1 font-bold text-[11px]"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
