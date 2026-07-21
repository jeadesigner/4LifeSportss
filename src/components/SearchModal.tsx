import React, { useState } from 'react';
import { Search, X, ArrowRight, MessageCircle } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { COMPANY_INFO } from '../data/content';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDetail: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onOpenDetail
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const results = searchTerm.trim()
    ? PRODUCTS.filter((p) => {
        const query = searchTerm.toLowerCase();
        return (
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.musclesTargeted.toLowerCase().includes(query)
        );
      })
    : PRODUCTS.slice(0, 4); // show popular initial suggestions

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-16 px-4 font-sans" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-200 relative animate-in fade-in slide-in-from-top-4 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400 shrink-0" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por esteira, spinning, leg press, dumbbells..."
            autoFocus
            className="w-full bg-transparent text-base font-bold text-[#111111] focus:outline-none placeholder-gray-400"
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="p-1 text-gray-400 hover:text-black">
              <X className="w-4 h-4" />
            </button>
          )}
          <button onClick={onClose} className="p-2 text-gray-500 hover:text-black text-xs font-bold uppercase">
            Fechar
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-3">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-2">
            {searchTerm ? `Resultados (${results.length})` : 'Sugestões em Destaque'}
          </h4>

          {results.length > 0 ? (
            <div className="space-y-2">
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onOpenDetail(product);
                    onClose();
                  }}
                  className="p-3 rounded-xl hover:bg-gray-100 cursor-pointer flex items-center justify-between transition-colors border border-transparent hover:border-gray-200 group"
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-lg object-cover bg-gray-200 shrink-0"
                    />
                    <div className="overflow-hidden">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-[#F5A623] bg-[#111111] px-1.5 py-0.2 rounded">
                          {product.badge}
                        </span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase">
                          {product.category}
                        </span>
                      </div>
                      <h5 className="font-extrabold text-sm text-[#111111] truncate group-hover:text-[#F5A623] transition-colors">
                        {product.name}
                      </h5>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-bold text-gray-500 group-hover:text-[#111111] hidden sm:inline">
                      Ver detalhes
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#F5A623]" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center text-gray-500 text-sm">
              Nenhum produto encontrado para "{searchTerm}".
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-[#111111] text-gray-400 text-xs flex justify-between items-center">
          <span>Precisa de ajuda com a escolha?</span>
          <button
            onClick={() => {
              window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}`, '_blank');
            }}
            className="text-[#F5A623] font-bold hover:underline flex items-center gap-1"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Falar no WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
