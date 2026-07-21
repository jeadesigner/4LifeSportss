import React, { useState } from 'react';
import { Product, QuoteItem } from '../types';
import { COMPANY_INFO } from '../data/content';
import { X, Trash2, Plus, Minus, Send, FileText, Building, CheckCircle2 } from 'lucide-react';

interface QuoteSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  quoteItems: QuoteItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearAll: () => void;
}

export const QuoteSimulatorModal: React.FC<QuoteSimulatorModalProps> = ({
  isOpen,
  onClose,
  quoteItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearAll
}) => {
  const [projectType, setProjectType] = useState('Academia Comercial');
  const [contactName, setContactName] = useState('');
  const [cityName, setCityName] = useState('');

  if (!isOpen) return null;

  const totalItemCount = quoteItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleSendWhatsAppQuote = (e: React.FormEvent) => {
    e.preventDefault();

    if (quoteItems.length === 0) return;

    let itemsText = quoteItems
      .map((item, idx) => `${idx + 1}. *${item.product.name}* (Qtd: ${item.quantity}) - Categoria: ${item.product.category.toUpperCase()}`)
      .join('\n');

    let text = `*SOLICITAÇÃO DE ORÇAMENTO — 4LIFE SPORTS*\n\n`;
    if (contactName) text += `*Nome:* ${contactName}\n`;
    if (cityName) text += `*Cidade/UF:* ${cityName}\n`;
    text += `*Tipo de Projeto:* ${projectType}\n\n`;
    text += `*ITENS SELECIONADOS (${totalItemCount} equipamentos):*\n${itemsText}\n\n`;
    text += `_Aguardando cotação de preços, prazos de entrega e condições de faturamento._`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto font-sans" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-200 relative animate-in fade-in zoom-in-95 duration-200 my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#111111] text-white p-6 flex items-center justify-between border-b border-[#F5A623]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#F5A623] text-[#111111] rounded-xl font-black">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg tracking-tight text-white">
                Lista de Orçamento Personalizado
              </h3>
              <p className="text-xs text-gray-400">
                Monte a cotação de equipamentos para seu espaço fitness
              </p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
          {quoteItems.length > 0 ? (
            <>
              {/* Selected Products List */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-bold text-gray-500 uppercase">
                  <span>Equipamentos Selecionados ({quoteItems.length})</span>
                  <button onClick={onClearAll} className="text-red-600 hover:underline">
                    Limpar Lista
                  </button>
                </div>

                <div className="divide-y divide-gray-100 border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                  {quoteItems.map((item) => (
                    <div key={item.product.id} className="p-3.5 bg-white flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          referrerPolicy="no-referrer"
                          className="w-12 h-12 rounded-lg object-cover bg-gray-100 shrink-0" 
                        />
                        <div className="overflow-hidden">
                          <h4 className="font-bold text-xs text-[#111111] truncate">{item.product.name}</h4>
                          <span className="text-[10px] font-bold text-[#F5A623] bg-[#111111] px-1.5 py-0.5 rounded">
                            {item.product.badge}
                          </span>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 shrink-0">
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                          <button 
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1.5 hover:bg-gray-100 text-gray-600"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2.5 text-xs font-bold text-[#111111]">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1.5 hover:bg-gray-100 text-gray-600"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button 
                          onClick={() => onRemoveItem(item.product.id)}
                          className="p-1.5 text-gray-400 hover:text-red-600 transition-colors"
                          title="Remover"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form details for WhatsApp Quote */}
              <form onSubmit={handleSendWhatsAppQuote} className="space-y-4 pt-2 border-t border-gray-200">
                <h4 className="font-extrabold text-xs uppercase text-[#111111] flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-[#F5A623]" />
                  <span>Dados do Projeto</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Seu Nome / Empresa</label>
                    <input
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Ex: Carlos Silva / Academia Top"
                      className="w-full p-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Cidade / Estado</label>
                    <input
                      type="text"
                      value={cityName}
                      onChange={(e) => setCityName(e.target.value)}
                      placeholder="Ex: São Paulo - SP"
                      className="w-full p-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block font-bold text-gray-700 mb-1">Tipo de Empreendimento</label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-black font-semibold bg-white"
                    >
                      <option value="Academia Comercial">Academia Comercial / Studio</option>
                      <option value="Condomínio Residencial">Condomínio Residencial</option>
                      <option value="Hotel ou Pousada">Hotel / Resort / Pousada</option>
                      <option value="Clube Social ou Esportivo">Clube Social ou Esportivo</option>
                      <option value="Residência Premium">Residência / Uso Particular</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-sm uppercase tracking-wider py-4 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5 fill-current" />
                  <span>Enviar Cotação para WhatsApp</span>
                </button>
              </form>
            </>
          ) : (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto">
                <FileText className="w-8 h-8" />
              </div>
              <div className="max-w-xs mx-auto">
                <h4 className="font-extrabold text-base text-[#111111]">Sua lista de orçamento está vazia</h4>
                <p className="text-xs text-gray-500 mt-1">
                  Navegue pelos produtos no catálogo e clique em "Adicionar à Lista de Cotação" para montar o orçamento da sua academia.
                </p>
              </div>
              <button
                onClick={onClose}
                className="bg-[#111111] text-white font-bold text-xs px-6 py-3 rounded-lg hover:bg-[#F5A623] hover:text-[#111111] transition-all"
              >
                Ver Equipamentos
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
