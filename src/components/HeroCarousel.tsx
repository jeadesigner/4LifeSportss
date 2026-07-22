import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, ArrowRight } from 'lucide-react';
import { HERO_SLIDES, COMPANY_INFO } from '../data/content';
import { ProductCategory } from '../types';

interface HeroCarouselProps {
  onSelectCategory: (cat: ProductCategory) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onSelectCategory, onNavigateSection }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleCtaClick = (slide: typeof HERO_SLIDES[0]) => {
    if (slide.categoryTarget === 'contact') {
      const msg = encodeURIComponent('Olá! Vim pelo site da 4Life Sports e gostaria de falar com um especialista sobre equipamentos.');
      window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${msg}`, '_blank');
    } else {
      onSelectCategory(slide.categoryTarget as ProductCategory);
      onNavigateSection('catalogo');
    }
  };

  return (
    <section 
      className="relative w-full h-[380px] sm:h-[500px] lg:h-[700px] min-h-[320px] bg-black overflow-hidden group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image Container - 100% full view with object-contain */}
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <img
                src={slide.image}
                alt={slide.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  console.error(`[Image Error] Failed to load hero carousel slide "${slide.title}":`, slide.image);
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200';
                }}
                className="w-full h-full object-contain object-center opacity-85 transition-all duration-700"
              />
              {/* Subtle dark gradient overlay for optimal typography legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 w-full lg:w-3/4" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
            </div>

            {/* Slide Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start text-left text-white z-20 py-8">
              <div className="max-w-2xl space-y-3 sm:space-y-6 w-full">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#111111]/90 border border-[#F5A623] px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-md">
                  <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-ping" />
                  <span className="text-[#F5A623] text-[10px] sm:text-xs font-black tracking-widest uppercase">
                    {slide.badge}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                  {slide.title.split('|')[0]}
                  {slide.title.includes('|') && (
                    <span className="block text-[#F5A623] mt-1 font-extrabold text-xl sm:text-3xl lg:text-4xl">
                      | {slide.title.split('|')[1]}
                    </span>
                  )}
                </h1>

                {/* Subtitle */}
                <p className="text-gray-300 text-xs sm:text-base leading-relaxed font-normal max-w-xl line-clamp-3 sm:line-clamp-none">
                  {slide.subtitle}
                </p>

                {/* CTA Buttons - Stacked on Mobile, Row on Desktop */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => handleCtaClick(slide)}
                    className="w-full sm:w-auto bg-[#111111] border-2 border-[#F5A623] text-white hover:bg-[#F5A623] hover:text-[#111111] font-extrabold px-6 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-xl active:scale-98"
                  >
                    <span>{slide.ctaText}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>

                  <button
                    onClick={() => {
                      const msg = encodeURIComponent(`Olá, 4Life Sports! Gostaria de consultar informações sobre: ${slide.title}`);
                      window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${msg}`, '_blank');
                    }}
                    className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
                  >
                    <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                    <span>Falar no WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#111111]/80 border border-gray-700 text-white hover:bg-[#F5A623] hover:text-[#111111] hover:border-[#F5A623] transition-all opacity-80 hover:opacity-100"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#111111]/80 border border-gray-700 text-white hover:bg-[#F5A623] hover:text-[#111111] hover:border-[#F5A623] transition-all opacity-80 hover:opacity-100"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? 'w-10 h-3 bg-[#F5A623]'
                : 'w-3 h-3 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
