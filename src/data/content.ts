import { HeroSlide, FAQItem } from '../types';
import heroCardioImg from '../assets/images/hero_cardio_zone_1784675612172.jpg';
import heroStrengthImg from '../assets/images/hero_strength_zone_1784675622151.jpg';
import aboutShowroomImg from '../assets/images/about_showroom_1784675633116.jpg';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    title: 'Catálogo 2026 | Equipamentos Profissionais',
    subtitle: 'Esteiras, bikes spinning, escadas e remos desenvolvidos para uso contínuo com alta durabilidade e biomecânica avançada.',
    badge: 'LINHA CARDIO PROFISSIONAL',
    image: heroCardioImg,
    ctaText: 'Ver Catálogo Cardio',
    categoryTarget: 'cardio'
  },
  {
    id: 'slide-2',
    title: 'Monte sua Academia com a 4Life Sports',
    subtitle: 'Soluções completas para academias comerciais, condomínios, hotéis, estúdios e clubes com projetos personalizados.',
    badge: 'PROJETOS DE MUSCULAÇÃO',
    image: heroStrengthImg,
    ctaText: 'Solicitar Orçamento',
    categoryTarget: 'musculacao'
  },
  {
    id: 'slide-3',
    title: 'Fale com um Especialista no WhatsApp',
    subtitle: 'Atendimento técnico humanizado e consultoria personalizada para escolha ideal de equipamentos e layout.',
    badge: 'ATENDIMENTO EXCLUSIVO',
    image: aboutShowroomImg,
    ctaText: 'Conversar no WhatsApp',
    categoryTarget: 'contact'
  }
];

export const CATEGORY_SHORTCUTS = [
  { id: 'cardio', label: 'Cardio', icon: '🚴', category: 'cardio' as const, desc: 'Esteiras, Bikes e Escadas' },
  { id: 'musculacao', label: 'Musculação', icon: '🏋️', category: 'musculacao' as const, desc: 'Aparelhos e Estações' },
  { id: 'acessorios', label: 'Acessórios', icon: '🎽', category: 'acessorios' as const, desc: 'Halteres, Anilhas e Barras' },
  { id: 'fale-conosco', label: 'Fale Conosco', icon: '📞', category: 'contact' as const, desc: 'Atendimento via WhatsApp' }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Vocês vendem para pessoa física ou apenas para empresas?',
    answer: 'Atendemos tanto Pessoas Jurídicas (Academias comerciais, Condomínios, Hotéis, Pousadas, Estúdios e Clubes) quanto Pessoas Físicas que buscam montar uma linha residencial premium de alta performance.'
  },
  {
    id: 'faq-2',
    question: 'Fazem entrega para todo o Brasil?',
    answer: 'Sim! Possuímos frota própria e parcerias logísticas especializadas com transportadoras integradas para entregar com segurança e agilidade em todas as regiões do Brasil.'
  },
  {
    id: 'faq-3',
    question: 'Qual o prazo de entrega dos equipamentos?',
    answer: 'O prazo varia conforme a região e a disponibilidade em estoque. Para itens à pronta entrega, o despacho ocorre em até 48 horas úteis. Para projetos personalizados ou grandes volumes, o prazo médio é informado diretamente pelo seu consultor no orçamento.'
  },
  {
    id: 'faq-4',
    question: 'Os equipamentos possuem garantia?',
    answer: 'Todos os equipamentos da 4Life Sports possuem garantia de fábrica oficial, cobrindo de 1 a 5 anos nas estruturas metálicas e quadros, além de garantia de componentes e peças de desgaste.'
  },
  {
    id: 'faq-5',
    question: 'Como faço para solicitar um orçamento?',
    answer: 'É extremamente simples! Você pode navegar pelos produtos no site e clicar em "Solicitar Orçamento", ou utilizar nossa ferramenta "Monte seu Orçamento", que envia sua lista de itens direto para nossa equipe de atendimento no WhatsApp.'
  },
  {
    id: 'faq-6',
    question: 'Vocês realizam a montagem dos equipamentos?',
    answer: 'Sim! Oferecemos serviço de entrega técnica e montagem por equipe especializada em capitais e principais regiões metropolitanas, além de prestar suporte em vídeo e manuais detalhados para outras localidades.'
  },
  {
    id: 'faq-7',
    question: 'É possível visitar um showroom?',
    answer: 'Sim! Contamos com showroom completo para você testar a biomecânica, qualidade de acabamento e estofados dos nossos equipamentos de perto. Agende sua visita diretamente com nosso consultor no WhatsApp.'
  },
  {
    id: 'faq-8',
    question: 'Os equipamentos são adequados para academias comerciais?',
    answer: 'Com certeza! Toda a nossa linha de Musculação e Cardio é desenvolvida com tubulações de aço carbono de alta espessura e sistemas de rolamentos de uso contínuo, projetados para suportar tráfego pesado de até 24 horas diárias.'
  },
  {
    id: 'faq-9',
    question: 'Vocês trabalham com parcelamento?',
    answer: 'Sim, oferecemos condições facilitadas de pagamento, incluindo parcelamento em cartão de crédito, faturamento via boleto bancário para Pessoas Jurídicas (sujeito à análise de crédito) e descontos especiais para pagamentos via PIX.'
  },
  {
    id: 'faq-10',
    question: 'Como posso acompanhar meu pedido?',
    answer: 'Assim que o pedido é despachado, nosso time envia o código de rastreamento da transportadora ou contato direto do motorista responsável no WhatsApp para você acompanhar a entrega em tempo real.'
  }
];

export const COMPANY_INFO = {
  name: '4Life Sports',
  phoneDisplay: '(37) 3027-6858',
  whatsappNumber: '553730276858',
  email: 'contato@4lifesports.com.br',
  address: 'Av. das Indústrias Fitness, 400 - São Paulo/SP',
  workingHours: 'Segunda a Sexta: 08:00 - 18:00 | Sábado: 08:00 - 12:00',
  tagline: 'Equipamentos Fitness Profissionais para Academias, Condomínios e Hotéis'
};
