import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, ShieldCheck, Building2, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoplay]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-gray-50 border-t border-b border-gray-200 overflow-hidden relative">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F5A623]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#111111]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] text-[#F5A623] text-xs font-bold uppercase tracking-wider mb-4 border border-[#F5A623]/30 shadow-sm">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Satisfação Garantida</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Depoimentos de Quem Confia na <span className="text-[#F5A623]">4Life Sports</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Veja o feedback de proprietários de academias, condomínios de luxo e estúdios que transformaram seus espaços com nossos equipamentos.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
        >
          {/* Main Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border border-gray-200 relative transition-all duration-300">
            <Quote className="absolute top-6 right-6 w-16 h-16 text-gray-100 -z-0 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
              {/* Avatar & Company info */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left shrink-0">
                <div className="relative mb-3">
                  <img
                    src={current.avatar}
                    alt={current.author}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-[#F5A623] shadow-md"
                  />
                  <div className="absolute -bottom-2 -right-1 bg-[#111111] text-[#F5A623] p-1.5 rounded-full shadow" title="Cliente Verificado">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-bold text-lg text-[#111111] leading-snug">{current.author}</h3>
                <p className="text-xs font-semibold text-[#F5A623]">{current.role}</p>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                  <Building2 className="w-3.5 h-3.5 text-gray-400" />
                  <span>{current.company}</span>
                </div>
                <span className="text-[11px] text-gray-400 mt-0.5">{current.location}</span>
              </div>

              {/* Review Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#F5A623] text-[#F5A623]" />
                    ))}
                    <span className="ml-2 text-xs font-bold text-gray-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      5.0 / 5.0
                    </span>
                  </div>

                  {/* Comment */}
                  <p className="text-gray-700 text-base sm:text-lg italic leading-relaxed mb-6">
                    "{current.comment}"
                  </p>
                </div>

                {/* Purchased Equipment Badge */}
                <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
                  <div className="text-xs text-gray-500">
                    <span className="font-semibold text-gray-800">Equipamentos Adquiridos: </span>
                    <span className="text-[#111111] font-medium bg-gray-100 px-2.5 py-1 rounded-md inline-block mt-1 sm:mt-0">
                      {current.equipmentBought}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Compra Verificada 4Life
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-[#F5A623]'
                      : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-3 rounded-xl bg-white border border-gray-200 text-[#111111] hover:bg-[#111111] hover:text-[#F5A623] transition-colors shadow-sm"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-xl bg-white border border-gray-200 text-[#111111] hover:bg-[#111111] hover:text-[#F5A623] transition-colors shadow-sm"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
