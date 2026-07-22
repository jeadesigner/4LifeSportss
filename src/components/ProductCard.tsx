import React from 'react';
import { motion } from 'motion/react';
import { Product } from '../types';
import { COMPANY_INFO } from '../data/content';
import { MessageCircle, Eye, Plus, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenDetail: (product: Product) => void;
  onAddToQuote: (product: Product) => void;
  isInQuote?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenDetail,
  onAddToQuote,
  isInQuote = false
}) => {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = encodeURIComponent(`Olá, 4Life Sports! Gostaria de solicitar um orçamento para o equipamento: ${product.name}`);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  const handleAddQuoteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToQuote(product);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, ease: [0.215, 0.61, 0.355, 1] }}
      onClick={() => onOpenDetail(product)}
      className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer relative w-full"
    >
      {/* Top Image Container */}
      <div className="relative w-full aspect-[4/3] sm:aspect-square bg-[#F5F5F5] overflow-hidden flex items-center justify-center p-3 sm:p-4">
        {/* Badge Top Left */}
        <div className="absolute top-3 left-3 z-10 bg-[#111111] text-[#F5A623] px-3 py-1 rounded-md text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-md">
          {product.badge}
        </div>

        {/* Quick View Overlay Button */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <span className="bg-[#111111] text-white font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-lg border border-[#F5A623]">
            <Eye className="w-4 h-4 text-[#F5A623]" />
            <span>Ver Ficha Técnica</span>
          </span>
        </div>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          onError={(e) => {
            console.error(`[Image Error] Failed to load image for product "${product.name}":`, product.image);
            (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800';
          }}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 rounded-xl"
        />
      </div>

      {/* Product Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Target Muscle Tag */}
          <div className="mb-2">
            <span className="inline-block text-[11px] sm:text-xs font-bold text-gray-700 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
              {product.musclesTargeted}
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-extrabold text-base sm:text-lg text-[#111111] leading-snug group-hover:text-[#F5A623] transition-colors line-clamp-2">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 space-y-2 border-t border-gray-100">
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-[#111111] text-white hover:bg-[#F5A623] hover:text-[#111111] font-extrabold text-xs sm:text-sm py-3.5 px-4 rounded-xl uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-sm active:scale-98"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span className="truncate">Solicitar Orçamento</span>
          </button>

          <button
            onClick={handleAddQuoteClick}
            className={`w-full text-xs sm:text-sm font-bold py-2.5 px-3 rounded-xl border transition-all flex items-center justify-center gap-1.5 active:scale-98 ${
              isInQuote
                ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                : 'border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-black'
            }`}
          >
            {isInQuote ? (
              <>
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="truncate">Na Lista de Orçamento</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 text-gray-500 shrink-0" />
                <span className="truncate">Adicionar à Lista</span>
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};
