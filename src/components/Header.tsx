import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Search, Menu, X, ChevronDown, Dumbbell, Activity, ShieldAlert, FileText } from 'lucide-react';
import { ProductCategory } from '../types';
import { COMPANY_INFO } from '../data/content';

interface HeaderProps {
  onSelectCategory: (cat: ProductCategory) => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenSearch: () => void;
  onOpenQuoteSimulator: () => void;
  quoteCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onSelectCategory,
  onNavigateSection,
  onOpenSearch,
  onOpenQuoteSimulator,
  quoteCount
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCatalogDropdownOpen, setIsCatalogDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryClick = (cat: ProductCategory) => {
    onSelectCategory(cat);
    setIsCatalogDropdownOpen(false);
    setIsMobileMenuOpen(false);
    onNavigateSection('catalogo');
  };

  const handleNavClick = (sectionId: string) => {
    onNavigateSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá, 4Life Sports! Gostaria de atendimento para orçamento de equipamentos fitness.');
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <header className="w-full z-50 font-sans">
      {/* Top Bar */}
      <div className="bg-[#111111] text-gray-300 text-xs py-2 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-block w-2 h-2 rounded-full bg-[#F5A623] animate-pulse"></span>
            <span className="font-medium text-white">Equipamentos Fitness Profissionais</span>
            <span className="hidden md:inline text-gray-500">|</span>
            <span className="hidden md:inline text-gray-300">Atendimento via WhatsApp</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href={`tel:${COMPANY_INFO.whatsappNumber}`} className="hover:text-[#F5A623] transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-[#F5A623]" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <span className="text-gray-600">|</span>
            <span className="text-[#F5A623] font-semibold">Envio para todo o Brasil</span>
          </div>
        </div>
      </div>

      {/* Main Navbar - Sticky */}
      <nav className={`w-full bg-white transition-all duration-300 ${
        isScrolled ? 'fixed top-0 left-0 shadow-md border-b border-gray-200 py-3' : 'relative py-4 border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group focus:outline-none" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>
            <div className="bg-[#111111] text-white p-2.5 rounded-lg flex items-center justify-center font-black text-xl tracking-wider group-hover:bg-[#F5A623] group-hover:text-[#111111] transition-colors shadow-sm">
              <span className="text-[#F5A623] group-hover:text-[#111111]">4</span>LIFE
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-[#111111] leading-none">
                4LIFE <span className="text-[#F5A623]">SPORTS</span>
              </span>
              <span className="text-[10px] tracking-widest text-gray-500 uppercase font-bold mt-0.5">
                EQUIPAMENTOS FITNESS
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Mega Dropdown menu for Catálogo */}
            <div 
              className="relative"
              onMouseEnter={() => setIsCatalogDropdownOpen(true)}
              onMouseLeave={() => setIsCatalogDropdownOpen(false)}
            >
              <button 
                onClick={() => handleNavClick('catalogo')}
                className="flex items-center gap-1 font-bold text-[#111111] hover:text-[#F5A623] py-2 transition-colors focus:outline-none text-sm uppercase tracking-wide"
              >
                <span>Catálogo</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCatalogDropdownOpen ? 'rotate-180 text-[#F5A623]' : ''}`} />
              </button>

              {/* Mega Dropdown Panel */}
              {isCatalogDropdownOpen && (
                <div className="absolute top-full left-0 w-[520px] bg-white rounded-xl shadow-2xl border border-gray-100 p-6 grid grid-cols-3 gap-4 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div 
                    onClick={() => handleCategoryClick('cardio')}
                    className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer border border-transparent hover:border-gray-200 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#111111] text-[#F5A623] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                      <Activity className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-[#111111] text-sm group-hover:text-[#F5A623]">🚴 Cardio</h4>
                    <p className="text-xs text-gray-500 mt-1">Esteiras, bikes, escadas e remos de alta performance</p>
                  </div>

                  <div 
                    onClick={() => handleCategoryClick('musculacao')}
                    className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer border border-transparent hover:border-gray-200 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#111111] text-[#F5A623] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                      <Dumbbell className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-[#111111] text-sm group-hover:text-[#F5A623]">🏋️ Musculação</h4>
                    <p className="text-xs text-gray-500 mt-1">Máquinas articuladas, bancos, leg press e cross over</p>
                  </div>

                  <div 
                    onClick={() => handleCategoryClick('acessorios')}
                    className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer border border-transparent hover:border-gray-200 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#111111] text-[#F5A623] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-[#111111] text-sm group-hover:text-[#F5A623]">🎽 Acessórios</h4>
                    <p className="text-xs text-gray-500 mt-1">Halteres, anilhas vulcanizadas, barras e puxadores</p>
                  </div>

                  <div className="col-span-3 pt-3 border-t border-gray-100 flex justify-between items-center text-xs">
                    <span className="text-gray-500">Linha 2026 com Garantia de Fábrica</span>
                    <button 
                      onClick={() => handleNavClick('catalogo')}
                      className="text-[#111111] font-bold hover:text-[#F5A623] flex items-center gap-1"
                    >
                      Ver todos os produtos →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => handleNavClick('quem-somos')}
              className="font-bold text-[#111111] hover:text-[#F5A623] transition-colors text-sm uppercase tracking-wide"
            >
              Quem Somos
            </button>

            <button 
              onClick={() => handleNavClick('faq')}
              className="font-bold text-[#111111] hover:text-[#F5A623] transition-colors text-sm uppercase tracking-wide"
            >
              Perguntas Frequentes
            </button>

            <button 
              onClick={onOpenQuoteSimulator}
              className="relative flex items-center gap-1.5 font-bold text-xs bg-amber-50 text-[#111111] px-3 py-1.5 rounded-full border border-[#F5A623] hover:bg-[#F5A623] transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#111111]" />
              <span>Lista de Orçamento</span>
              {quoteCount > 0 && (
                <span className="ml-1 bg-[#111111] text-[#F5A623] font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {quoteCount}
                </span>
              )}
            </button>
          </div>

          {/* Right Actions: Search Icon & WhatsApp Button */}
          <div className="flex items-center gap-3">
            <button 
              onClick={onOpenSearch}
              className="p-2.5 rounded-full hover:bg-gray-100 text-[#111111] transition-colors focus:outline-none"
              title="Buscar equipamentos"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* WhatsApp Direct Header Button */}
            <button 
              onClick={openWhatsApp}
              className="hidden sm:flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-full font-bold text-xs tracking-wide shadow-sm hover:shadow transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </button>

            {/* Mobile Menu Hamburger Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#111111] hover:bg-gray-100 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide Drawer Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}>
            <div 
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-100 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#111111] text-[#F5A623] p-1.5 rounded font-black text-sm">
                      4L
                    </div>
                    <span className="font-extrabold text-lg text-[#111111]">4Life Sports</span>
                  </div>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-500 hover:text-black">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Categorias de Produtos</h3>
                    <div className="space-y-1">
                      <button 
                        onClick={() => handleCategoryClick('cardio')}
                        className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-gray-100 font-bold text-[#111111] flex items-center justify-between"
                      >
                        <span>🚴 Cardio</span>
                        <span className="text-xs text-gray-400">Esteiras, Bikes...</span>
                      </button>
                      <button 
                        onClick={() => handleCategoryClick('musculacao')}
                        className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-gray-100 font-bold text-[#111111] flex items-center justify-between"
                      >
                        <span>🏋️ Musculação</span>
                        <span className="text-xs text-gray-400">Máquinas, Supinos...</span>
                      </button>
                      <button 
                        onClick={() => handleCategoryClick('acessorios')}
                        className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-gray-100 font-bold text-[#111111] flex items-center justify-between"
                      >
                        <span>🎽 Acessórios</span>
                        <span className="text-xs text-gray-400">Halteres, Anilhas...</span>
                      </button>
                    </div>
                  </div>

                  <hr className="border-gray-100" />

                  <div className="space-y-2">
                    <button 
                      onClick={() => handleNavClick('quem-somos')}
                      className="w-full text-left py-2 px-3 font-bold text-[#111111] hover:text-[#F5A623]"
                    >
                      Quem Somos
                    </button>
                    <button 
                      onClick={() => handleNavClick('faq')}
                      className="w-full text-left py-2 px-3 font-bold text-[#111111] hover:text-[#F5A623]"
                    >
                      Perguntas Frequentes
                    </button>
                    <button 
                      onClick={() => { setIsMobileMenuOpen(false); onOpenQuoteSimulator(); }}
                      className="w-full text-left py-2 px-3 font-bold text-[#111111] hover:text-[#F5A623] flex items-center justify-between"
                    >
                      <span>Simulador de Orçamento</span>
                      {quoteCount > 0 && (
                        <span className="bg-[#111111] text-[#F5A623] text-xs font-bold px-2 py-0.5 rounded-full">
                          {quoteCount}
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 space-y-3">
                <button 
                  onClick={() => { setIsMobileMenuOpen(false); openWhatsApp(); }}
                  className="w-full bg-[#25D366] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Falar no WhatsApp</span>
                </button>
                <p className="text-center text-xs text-gray-400">Atendimento de Segunda a Sábado</p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
