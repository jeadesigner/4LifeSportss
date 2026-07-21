import React from 'react';
import { CATEGORY_SHORTCUTS, COMPANY_INFO } from '../data/content';
import { ProductCategory } from '../types';

interface CategoryShortcutsProps {
  onSelectCategory: (cat: ProductCategory) => void;
  onNavigateSection: (sectionId: string) => void;
  activeCategory: ProductCategory | 'todos';
}

export const CategoryShortcuts: React.FC<CategoryShortcutsProps> = ({
  onSelectCategory,
  onNavigateSection,
  activeCategory
}) => {
  const handleShortcutClick = (item: typeof CATEGORY_SHORTCUTS[0]) => {
    if (item.category === 'contact') {
      const msg = encodeURIComponent('Olá! Gostaria de falar com a equipe de atendimento da 4Life Sports.');
      window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${msg}`, '_blank');
    } else {
      onSelectCategory(item.category as ProductCategory);
      onNavigateSection('catalogo');
    }
  };

  return (
    <section className="bg-white border-b border-gray-200 py-6 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORY_SHORTCUTS.map((item) => {
            const isSelected = activeCategory === item.category;
            return (
              <button
                key={item.id}
                onClick={() => handleShortcutClick(item)}
                className={`p-4 rounded-xl border transition-all duration-200 flex items-center gap-4 text-left group ${
                  isSelected
                    ? 'bg-[#111111] border-[#111111] text-white shadow-lg'
                    : 'bg-[#F5F5F5] border-gray-200 text-[#111111] hover:bg-white hover:border-[#111111] hover:shadow-md'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl shrink-0 transition-transform group-hover:scale-110 ${
                  isSelected ? 'bg-[#F5A623] text-[#111111]' : 'bg-white text-[#111111] shadow-sm'
                }`}>
                  {item.icon}
                </div>
                <div className="overflow-hidden">
                  <h3 className={`font-extrabold text-base tracking-tight leading-tight ${
                    isSelected ? 'text-white' : 'text-[#111111] group-hover:text-[#F5A623]'
                  }`}>
                    {item.label}
                  </h3>
                  <p className={`text-xs mt-0.5 truncate ${
                    isSelected ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    {item.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
