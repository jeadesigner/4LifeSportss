import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const msg = encodeURIComponent('Olá! Vim pelo site da 4Life Sports e gostaria de solicitar informações e um orçamento rápido.');
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 font-sans">
      {/* Tooltip Card */}
      {showTooltip && (
        <div className="relative bg-[#111111] text-white text-xs font-bold px-3.5 py-2.5 rounded-xl shadow-2xl border border-[#F5A623] flex items-center gap-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <span>Fale com a gente!</span>
          <button 
            onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }}
            className="text-gray-400 hover:text-white p-0.5"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        className="relative group bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center focus:outline-none"
        aria-label="Fale conosco no WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping group-hover:opacity-0 pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </button>
    </div>
  );
};
