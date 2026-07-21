export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  rating: number;
  comment: string;
  equipmentBought: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Ricardo Mendes',
    role: 'Proprietário & Diretor Técnico',
    company: 'Academia Fit Force',
    location: 'Divinópolis / MG',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    comment: 'A qualidade dos equipamentos da 4Life Sports superou todas as expectativas na nossa academia. A Esteira Curva e a linha de musculação articulada são extremamente robustas e nossos alunos elogiam diariamente a biomecânica.',
    equipmentBought: 'Linha Musculação Articulada + Esteira Curva Motorless'
  },
  {
    id: 't2',
    author: 'Fernanda Vasconcelos',
    role: 'Síndica Profissional',
    company: 'Condomínio Spazio Park',
    location: 'São Paulo / SP',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    comment: 'Montamos a academia do condomínio inteira com a 4Life Sports. Atendimento nota 10 do orçamento via WhatsApp até a entrega técnica e montagem no local. Garantia e pós-venda exemplares!',
    equipmentBought: 'Bikes Spinning + Estação Multifuncional 4 Estações'
  },
  {
    id: 't3',
    author: 'Lucas Nogueira',
    role: 'Gerente Operacional',
    company: 'Grand Hotel & Resort',
    location: 'Belo Horizonte / MG',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    comment: 'Precisávamos de equipamentos de alta durabilidade para o fitness center do hotel. A 4Life nos atendeu com faturamento corporativo facilíssimo e equipamentos silenciosos e elegantes.',
    equipmentBought: 'Esteiras Painel Touch + Halteres Sextavados'
  },
  {
    id: 't4',
    author: 'Juliana Castro',
    role: 'Head Coach e Sócia',
    company: 'Studio Cross & Functional',
    location: 'Campinas / SP',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    comment: 'Air Bikes, Remos a Ar e Anilhas Vulcanizadas Bumper da 4Life aguentam o tranco do treino diário de alta intensidade sem nenhum sinal de folga ou desgaste. Recomendamos de olhos fechados!',
    equipmentBought: 'Air Bikes + Remos a Ar + Bumper Plates'
  }
];
