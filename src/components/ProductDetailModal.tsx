import React from 'react';
import { Product } from '../types';
import { COMPANY_INFO } from '../data/content';
import { X, MessageCircle, Check, Dumbbell, ArrowLeft, Plus } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToQuote: (product: Product) => void;
  isInQuote?: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToQuote,
  isInQuote = false
}) => {
  if (!product) return null;

  const handleWhatsAppClick = () => {
    const msg = encodeURIComponent(`Olá, 4Life Sports! Gostaria de um orçamento detalhado para o produto: ${product.name}`);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto font-sans" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] sm:max-h-[90vh] flex flex-col shadow-2xl border border-gray-200 relative animate-in fade-in zoom-in-95 duration-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar with 'Voltar ao Catálogo' and 'Close' (Always Visible / Non-clipping) */}
        <div className="bg-[#111111] text-white px-4 sm:px-6 py-3.5 flex items-center justify-between border-b border-gray-800 shrink-0 rounded-t-2xl">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-[#F5A623] hover:bg-gray-800 px-3 py-1.5 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#F5A623]" />
            <span>Voltar ao Catálogo</span>
          </button>

          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Text-Only Scrollable Content Body */}
        <div className="p-5 sm:p-8 space-y-6 overflow-y-auto flex-1">
          <div>
            {/* Category & Badge Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[11px] font-bold text-[#F5A623] bg-[#111111] px-2.5 py-0.5 rounded uppercase tracking-wider">
                {product.category}
              </span>

              {product.badge && (
                <span className="text-[11px] font-extrabold text-[#111111] bg-[#F5A623] px-2.5 py-0.5 rounded uppercase tracking-wider">
                  {product.badge}
                </span>
              )}

              {product.musclesTargeted && (
                <span className="text-[11px] font-semibold text-gray-600 bg-gray-100 px-2.5 py-0.5 rounded border border-gray-200">
                  {product.musclesTargeted}
                </span>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-[#111111] mt-1 leading-tight">
              {product.name}
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Specs Table */}
            <div className="mt-5 space-y-2">
              <h4 className="font-extrabold text-xs uppercase text-gray-500 tracking-wider flex items-center gap-1.5">
                <Dumbbell className="w-4 h-4 text-[#F5A623]" />
                <span>Especificações Técnicas</span>
              </h4>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-xs sm:text-sm space-y-2.5 text-gray-700">
                {product.specs.dimensions && (
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-semibold text-gray-500">Dimensões:</span>
                    <span className="font-bold text-[#111111]">{product.specs.dimensions}</span>
                  </div>
                )}
                {product.specs.weight && (
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-semibold text-gray-500">Peso do Equipamento:</span>
                    <span className="font-bold text-[#111111]">{product.specs.weight}</span>
                  </div>
                )}
                {product.specs.maxUserWeight && (
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-semibold text-gray-500">Carga/Peso Máx:</span>
                    <span className="font-bold text-[#111111]">{product.specs.maxUserWeight}</span>
                  </div>
                )}
                {product.specs.structure && (
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-semibold text-gray-500">Estrutura:</span>
                    <span className="font-bold text-[#111111] text-right max-w-[240px]">{product.specs.structure}</span>
                  </div>
                )}
                {product.specs.warranty && (
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-500">Garantia:</span>
                    <span className="font-bold text-emerald-600">{product.specs.warranty}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Bullet Features */}
            {product.specs.features && product.specs.features.length > 0 && (
              <div className="mt-5 space-y-2">
                <h4 className="font-extrabold text-xs uppercase text-gray-500 tracking-wider">
                  Destaques & Recursos
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600 bg-gray-50/50 p-3.5 rounded-xl border border-gray-100">
                  {product.specs.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="space-y-2 pt-4 border-t border-gray-100">
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#111111] hover:bg-[#F5A623] hover:text-[#111111] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md active:scale-98"
            >
              <MessageCircle className="w-4.5 h-4.5 fill-current shrink-0" />
              <span>Solicitar Orçamento no WhatsApp</span>
            </button>

            <button
              onClick={() => onAddToQuote(product)}
              className={`w-full text-xs sm:text-sm font-bold py-3 px-4 rounded-xl border transition-all flex items-center justify-center gap-1.5 active:scale-98 ${
                isInQuote
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {isInQuote ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Adicionado à Lista de Cotação</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 shrink-0" />
                  <span>Adicionar à Lista de Cotação</span>
                </>
              )}
            </button>

            {/* Explicit Back to Catalog Secondary Button */}
            <button
              onClick={onClose}
              className="w-full text-xs font-bold text-gray-500 hover:text-black py-2 px-4 rounded-xl transition-colors flex items-center justify-center gap-1.5 mt-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Voltar ao Catálogo de Equipamentos</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
