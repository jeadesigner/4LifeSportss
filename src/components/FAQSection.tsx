import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, COMPANY_INFO } from '../data/content';

export const FAQSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const handleWhatsAppHelp = () => {
    const msg = encodeURIComponent('Olá! Tenho uma dúvida sobre a compra de equipamentos fitness na 4Life Sports e gostaria de ajuda.');
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="faq" className="py-16 bg-[#F5F5F5] font-sans scroll-mt-20 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-[#111111] text-[#F5A623] px-3.5 py-1 rounded-md text-xs font-black uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>TIRA-DÚVIDAS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Perguntas Frequentes
          </h2>

          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            Tire suas dúvidas sobre aquisição, formas de pagamento, garantia e prazos de entrega dos equipamentos 4Life Sports.
          </p>
        </div>

        {/* Accordion list - MegaGym Style (Clean lines, no heavy cards) */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 divide-y divide-gray-200 overflow-hidden">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openFaqId === item.id;
            return (
              <div key={item.id} className="transition-colors hover:bg-gray-50/80">
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none group"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className="text-xs font-extrabold text-[#F5A623] bg-[#111111] w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <span className="font-extrabold text-base text-[#111111] group-hover:text-[#F5A623] transition-colors leading-snug">
                      {item.question}
                    </span>
                  </div>

                  <div className={`p-1.5 rounded-full bg-gray-100 group-hover:bg-[#111111] group-hover:text-[#F5A623] transition-all shrink-0 ${
                    isOpen ? 'bg-[#111111] text-[#F5A623] rotate-180' : 'text-gray-500'
                  }`}>
                    <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-gray-600 leading-relaxed pl-13 border-t border-dashed border-gray-100 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 bg-white p-6 rounded-xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-extrabold text-base text-[#111111]">Ainda tem dúvidas sobre o seu projeto?</h4>
            <p className="text-xs text-gray-500 mt-0.5">Nossa equipe técnica está pronta para responder suas perguntas no WhatsApp.</p>
          </div>
          <button
            onClick={handleWhatsAppHelp}
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-lg flex items-center gap-2 shadow transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Falar com Atendente</span>
          </button>
        </div>
      </div>
    </section>
  );
};
