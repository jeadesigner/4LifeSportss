import React, { useState, useMemo } from 'react';
import { Product, ProductCategory } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { Search, Filter, Sparkles } from 'lucide-react';

interface ProductGridSectionProps {
  title: string;
  subtitle?: string;
  sectionId: string;
  activeCategory: ProductCategory | 'todos';
  onCategoryChange: (category: ProductCategory | 'todos') => void;
  onOpenDetail: (product: Product) => void;
  onAddToQuote: (product: Product) => void;
  quoteProductIds: string[];
  featuredOnly?: boolean;
}

export const ProductGridSection: React.FC<ProductGridSectionProps> = ({
  title,
  subtitle,
  sectionId,
  activeCategory,
  onCategoryChange,
  onOpenDetail,
  onAddToQuote,
  quoteProductIds,
  featuredOnly = false
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (activeCategory !== 'todos' && product.category !== activeCategory) {
        return false;
      }
      // Featured filter
      if (featuredOnly && !product.isPopular) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(query);
        const matchDesc = product.description.toLowerCase().includes(query);
        const matchMuscle = product.musclesTargeted.toLowerCase().includes(query);
        return matchName || matchDesc || matchMuscle;
      }
      return true;
    });
  }, [activeCategory, featuredOnly, searchQuery]);

  return (
    <section id={sectionId} className="py-12 md:py-16 bg-[#F5F5F5] font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#111111] text-[#F5A623] px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LINHA PROFISSIONAL 4LIFE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-600 text-sm mt-1 max-w-xl">
                {subtitle}
              </p>
            )}
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar equipamento..."
              className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-gray-300 text-sm font-medium focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all shadow-sm"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-black"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Filter Tabs - MegaGym Style */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button
            onClick={() => onCategoryChange('todos')}
            className={`px-5 py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
              activeCategory === 'todos'
                ? 'bg-[#111111] text-[#F5A623] shadow-md border border-[#111111]'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Todos os Produtos
          </button>

          <button
            onClick={() => onCategoryChange('cardio')}
            className={`px-5 py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
              activeCategory === 'cardio'
                ? 'bg-[#111111] text-[#F5A623] shadow-md border border-[#111111]'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <span>🚴 Cardio</span>
          </button>

          <button
            onClick={() => onCategoryChange('musculacao')}
            className={`px-5 py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
              activeCategory === 'musculacao'
                ? 'bg-[#111111] text-[#F5A623] shadow-md border border-[#111111]'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <span>🏋️ Musculação</span>
          </button>

          <button
            onClick={() => onCategoryChange('acessorios')}
            className={`px-5 py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
              activeCategory === 'acessorios'
                ? 'bg-[#111111] text-[#F5A623] shadow-md border border-[#111111]'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <span>🎽 Acessórios</span>
          </button>
        </div>

        {/* Product Grid: 1 column mobile (100% width) / 2 cols sm / 3 cols md / 4 cols lg */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetail={onOpenDetail}
                onAddToQuote={onAddToQuote}
                isInQuote={quoteProductIds.includes(product.id)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 max-w-md mx-auto my-8">
            <Filter className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="font-bold text-lg text-[#111111]">Nenhum equipamento encontrado</h3>
            <p className="text-gray-500 text-sm mt-1 mb-4">
              Não encontramos resultados para o termo de busca "{searchQuery}".
            </p>
            <button
              onClick={() => { setSearchQuery(''); onCategoryChange('todos'); }}
              className="bg-[#111111] text-white font-bold text-xs px-5 py-2.5 rounded-lg hover:bg-[#F5A623] hover:text-[#111111] transition-all"
            >
              Ver Todos os Equipamentos
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
