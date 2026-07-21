import React from 'react';
import { Product } from '../types';
import { COMPANY_INFO } from '../data/content';
import { X, MessageCircle, Check, Dumbbell, ShieldCheck, Plus } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto font-sans" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-gray-200 relative animate-in fade-in zoom-in-95 duration-200 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-gray-100 hover:bg-[#111111] hover:text-white text-gray-700 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Product Image */}
          <div className="bg-[#F5F5F5] p-6 flex flex-col justify-between relative border-b md:border-b-0 md:border-r border-gray-200">
            <div className="absolute top-4 left-4 bg-[#111111] text-[#F5A623] px-3 py-1 rounded text-xs font-black uppercase">
              {product.badge}
            </div>

            <div className="my-auto py-8">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-64 object-cover object-center rounded-xl shadow-md"
              />
            </div>

            <div className="text-center pt-2">
              <span className="inline-block text-xs font-bold text-gray-600 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                {product.musclesTargeted}
              </span>
            </div>
          </div>

          {/* Right: Technical Specs & Description */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-bold text-[#F5A623] bg-[#111111] px-2.5 py-0.5 rounded uppercase">
                {product.category}
              </span>

              <h2 className="text-2xl font-extrabold text-[#111111] mt-2 leading-tight">
                {product.name}
              </h2>

              <p className="text-gray-600 text-xs mt-2 leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Specs Table */}
              <div className="mt-6 space-y-2">
                <h4 className="font-extrabold text-xs uppercase text-gray-400 tracking-wider flex items-center gap-1.5">
                  <Dumbbell className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span>Especificações Técnicas</span>
                </h4>

                <div className="bg-gray-50 rounded-xl p-3.5 border border-gray-200 text-xs space-y-1.5 text-gray-700">
                  {product.specs.dimensions && (
                    <div className="flex justify-between border-b border-gray-200 pb-1">
                      <span className="font-semibold text-gray-500">Dimensões:</span>
                      <span className="font-bold text-[#111111]">{product.specs.dimensions}</span>
                    </div>
                  )}
                  {product.specs.weight && (
                    <div className="flex justify-between border-b border-gray-200 pb-1">
                      <span className="font-semibold text-gray-500">Peso do Equipamento:</span>
                      <span className="font-bold text-[#111111]">{product.specs.weight}</span>
                    </div>
                  )}
                  {product.specs.maxUserWeight && (
                    <div className="flex justify-between border-b border-gray-200 pb-1">
                      <span className="font-semibold text-gray-500">Carga/Peso Máx:</span>
                      <span className="font-bold text-[#111111]">{product.specs.maxUserWeight}</span>
                    </div>
                  )}
                  {product.specs.structure && (
                    <div className="flex justify-between border-b border-gray-200 pb-1">
                      <span className="font-semibold text-gray-500">Estrutura:</span>
                      <span className="font-bold text-[#111111] text-right max-w-[180px]">{product.specs.structure}</span>
                    </div>
                  )}
                  {product.specs.warranty && (
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-500">Garantia:</span>
                      <span className="font-bold text-emerald-600">{product.specs.warranty}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bullet Features */}
              {product.specs.features && (
                <div className="mt-4">
                  <ul className="space-y-1 text-xs text-gray-600">
                    {product.specs.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
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
                className="w-full bg-[#111111] hover:bg-[#F5A623] hover:text-[#111111] text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </button>

              <button
                onClick={() => onAddToQuote(product)}
                className={`w-full text-xs font-bold py-2.5 px-4 rounded-xl border transition-all flex items-center justify-center gap-1.5 ${
                  isInQuote
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {isInQuote ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Adicionado à Lista de Cotação</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5" />
                    <span>Adicionar à Lista de Cotação</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
