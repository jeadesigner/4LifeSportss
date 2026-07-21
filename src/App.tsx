import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroCarousel } from './components/HeroCarousel';
import { CategoryShortcuts } from './components/CategoryShortcuts';
import { ProductGridSection } from './components/ProductGridSection';
import { PromoBanner } from './components/PromoBanner';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuoteSimulatorModal } from './components/QuoteSimulatorModal';
import { SearchModal } from './components/SearchModal';
import { Product, ProductCategory, QuoteItem } from './types';
import { Check, Sparkles } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'todos'>('todos');
  const [selectedDetailProduct, setSelectedDetailProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuoteSimulatorOpen, setIsQuoteSimulatorOpen] = useState(false);
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (cat: ProductCategory) => {
    setActiveCategory(cat);
  };

  const handleAddToQuote = (product: Product) => {
    setQuoteItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        showToast(`Aumentou a quantidade de "${product.name}" na cotação!`);
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        showToast(`"${product.name}" adicionado à lista de cotação!`);
        return [...prev, { product, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuoteQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveQuoteItem(productId);
      return;
    }
    setQuoteItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveQuoteItem = (productId: string) => {
    setQuoteItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearQuote = () => {
    setQuoteItems([]);
  };

  const quoteProductIds = quoteItems.map((item) => item.product.id);

  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans selection:bg-[#F5A623] selection:text-[#111111]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-[#111111] text-white px-4 py-3 rounded-xl shadow-2xl border border-[#F5A623] flex items-center gap-3 animate-in slide-in-from-top-2 duration-300">
          <div className="p-1 bg-[#F5A623] text-[#111111] rounded-full">
            <Check className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <Header
        onSelectCategory={handleSelectCategory}
        onNavigateSection={scrollToSection}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenQuoteSimulator={() => setIsQuoteSimulatorOpen(true)}
        quoteCount={quoteItems.reduce((acc, i) => acc + i.quantity, 0)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Rotative Carousel */}
        <HeroCarousel
          onSelectCategory={handleSelectCategory}
          onNavigateSection={scrollToSection}
        />

        {/* Category Shortcuts */}
        <CategoryShortcuts
          onSelectCategory={handleSelectCategory}
          onNavigateSection={scrollToSection}
          activeCategory={activeCategory}
        />

        {/* Featured Products Section: "Catálogo 2026 — Mais Procurados" */}
        <ProductGridSection
          title="Catálogo 2026 — Mais Procurados"
          subtitle="Os equipamentos fitness profissionais mais vendidos para academias e condomínios de alto padrão."
          sectionId="destaques"
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onOpenDetail={setSelectedDetailProduct}
          onAddToQuote={handleAddToQuote}
          quoteProductIds={quoteProductIds}
          featuredOnly={true}
        />

        {/* Promotional Banner between sections */}
        <PromoBanner />

        {/* About Section ("Quem Somos") */}
        <AboutSection />

        {/* Full Catalog Section */}
        <ProductGridSection
          title="Catálogo Completo 4Life Sports"
          subtitle="Explore nossa linha integral de Cardio, Musculação e Acessórios com especificações técnicas completas."
          sectionId="catalogo"
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onOpenDetail={setSelectedDetailProduct}
          onAddToQuote={handleAddToQuote}
          quoteProductIds={quoteProductIds}
          featuredOnly={false}
        />

        {/* FAQ Section ("Perguntas Frequentes") */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onNavigateSection={scrollToSection}
        onOpenQuoteSimulator={() => setIsQuoteSimulatorOpen(true)}
      />

      {/* Floating WhatsApp Button */}
      <WhatsAppFloatingButton />

      {/* Modals */}
      <ProductDetailModal
        product={selectedDetailProduct}
        onClose={() => setSelectedDetailProduct(null)}
        onAddToQuote={handleAddToQuote}
        isInQuote={selectedDetailProduct ? quoteProductIds.includes(selectedDetailProduct.id) : false}
      />

      <QuoteSimulatorModal
        isOpen={isQuoteSimulatorOpen}
        onClose={() => setIsQuoteSimulatorOpen(false)}
        quoteItems={quoteItems}
        onUpdateQuantity={handleUpdateQuoteQuantity}
        onRemoveItem={handleRemoveQuoteItem}
        onClearAll={handleClearQuote}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onOpenDetail={setSelectedDetailProduct}
      />
    </div>
  );
}
