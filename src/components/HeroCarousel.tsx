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
      className="relative w-full h-[500px] sm:h-[580px] lg:h-[640px] bg-[#111111] overflow-hidden group select-none"
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
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 bg-black">
              <img
                src={slide.image}
                alt={slide.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center opacity-45 scale-105 transition-transform duration-10000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent w-full lg:w-2/3" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
            </div>

            {/* Slide Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start text-left text-white z-20">
              <div className="max-w-2xl space-y-4 sm:space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#111111]/90 border border-[#F5A623] px-3.5 py-1.5 rounded-md">
                  <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-ping" />
                  <span className="text-[#F5A623] text-xs font-black tracking-widest uppercase">
                    {slide.badge}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                  {slide.title.split('|')[0]}
                  {slide.title.includes('|') && (
                    <span className="block text-[#F5A623] mt-1 font-extrabold text-2xl sm:text-4xl lg:text-5xl">
                      | {slide.title.split('|')[1]}
                    </span>
                  )}
                </h1>

                {/* Subtitle */}
                <p className="text-gray-300 text-sm sm:text-lg leading-relaxed font-normal max-w-xl">
                  {slide.subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => handleCtaClick(slide)}
                    className="bg-[#111111] border-2 border-[#F5A623] text-white hover:bg-[#F5A623] hover:text-[#111111] font-extrabold px-7 py-3.5 rounded-lg text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-[#F5A623]/20"
                  >
                    <span>{slide.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      const msg = encodeURIComponent(`Olá, 4Life Sports! Gostaria de consultar informações sobre: ${slide.title}`);
                      window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${msg}`, '_blank');
                    }}
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3.5 rounded-lg text-sm flex items-center gap-2 transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
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
