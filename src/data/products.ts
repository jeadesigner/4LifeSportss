import { Product } from '../types';
import curvedTreadmillImg from '../assets/images/curved_treadmill_1784676210428.jpg';

export const PRODUCTS: Product[] = [
  // 🚴 CARDIO (7 items)
  {
    id: 'c1',
    name: 'Bike Spinning Ergométrica 4Life',
    category: 'cardio',
    description: 'Roda de inércia de 18kg com regulagem milimétrica de resistência e estrutura em aço carbono reforçado.',
    fullDescription: 'A Bike Spinning Ergométrica 4Life foi projetada para sessões intensas de treino cardiorrespiratório em condomínios e residências premium. Sistema de transmissão por correia silenciosa, freio de emergência por pressão e guidão ergonômico multiposição.',
    badge: 'CARDIO',
    musclesTargeted: '🟢 Quadríceps · Panturrilhas · Cardiorrespiratório',
    muscleColor: 'green',
    image: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    specs: {
      dimensions: '120 x 55 x 115 cm',
      weight: '45 kg',
      maxUserWeight: '150 kg',
      structure: 'Aço Carbono com pintura eletrostática a pó',
      warranty: '2 Anos na Estrutura',
      features: [
        'Volante de inércia em aço maciço de 18 kg',
        'Painel digital multifunção (Tempo, Velocidade, Distância, Calorias, Pulsos)',
        'Pedal reforçado com firma pé de liga de alumínio',
        'Regulagem vertical e horizontal de selim e guidão'
      ]
    }
  },
  {
    id: 'c2',
    name: 'Bike Spinning Profissional Heavy Duty',
    category: 'cardio',
    description: 'Equipamento de altíssimo tráfego com freio magnético indutivo e volante de inércia de 22kg.',
    fullDescription: 'Desenvolvida para suportar uso contínuo de até 16 horas diárias em academias comerciais. Estrutura tubular ovalizada de alta espessura com acabamento anticorrosivo em cromo duro no tubo de selim e guidão.',
    badge: 'PROFISSIONAL',
    musclesTargeted: '🟢 Pernas completas · Glúteos · Resistência Vascular',
    muscleColor: 'green',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    specs: {
      dimensions: '135 x 60 x 125 cm',
      weight: '58 kg',
      maxUserWeight: '180 kg',
      structure: 'Aço Carbono Robusto de 3mm com Tratamento Fosfatizante',
      warranty: '3 Anos na Estrutura',
      features: [
        'Freio magnético progressivo livre de manutenção',
        'Transmissão por correia Hutchison de poli-V ultra-silenciosa',
        'Eixo central selado com rolamentos blindados SKF',
        'Compatível com monitores de frequência cardíaca BLE/ANT+'
      ]
    }
  },
  {
    id: 'c3',
    name: 'Esteira Curva Motorless 4Life',
    category: 'cardio',
    description: 'Tecnologia sem motor acionada pela passada do usuário com máxima queima calórica.',
    fullDescription: 'A Esteira Curva Profissional proporciona biomecânica natural de corrida, exigindo 30% mais gasto calórico comparada a esteiras convencionais. Aceleração e desaceleração instantâneas e sem consumo elétrico.',
    badge: 'DESTAQUE',
    musclesTargeted: '🟢 Isquiotibiais · Glúteos · Core · Resistência',
    muscleColor: 'green',
    image: curvedTreadmillImg,
    isPopular: true,
    specs: {
      dimensions: '195 x 88 x 150 cm',
      weight: '140 kg',
      maxUserWeight: '200 kg',
      structure: 'Chassi duplo em aço com revestimento de borracha vulcânica',
      warranty: '5 Anos no Chassi',
      features: [
        'Deck curvo com ripamento de alta densidade montado sobre rolamentos blindados',
        'Sem necessidade de tomada ou consumo de energia elétrica',
        'Monitor LCD completo com métricas de potência (Watts) e intervalos de sprint HIIT',
        'Pegadores anatômicos multiposições para treino de tração de trenó'
      ]
    }
  },
  {
    id: 'c4',
    name: 'Esteira com Inclinação Painel Touch 4Life',
    category: 'cardio',
    description: 'Motor AC Profissional de 4.0 HP de pico e painel Android Touchscreen de 15.6 polegadas.',
    fullDescription: 'Top de linha em conforto e conectividade para academias de grande porte e hotéis executivos. Inclinação eletrônica de até 18% e amortecimento multicamadas de resposta dinâmica.',
    badge: 'PROFISSIONAL',
    musclesTargeted: '🟢 Membros Inferiores · Cardiorrespiratório · Core',
    muscleColor: 'green',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    specs: {
      dimensions: '215 x 92 x 160 cm',
      weight: '185 kg',
      maxUserWeight: '190 kg',
      structure: 'Chassi em aço reforçado com carenagem em ABS de alto impacto',
      warranty: '3 Anos no Motor e Chassi',
      features: [
        'Motor AC 4.0 HP de alta eficiência com inversor de frequência Fuji',
        'Velocidade ajustável de 0.8 a 22 km/h com inclinação de 0% a 18%',
        'Tela Touchscreen HD com simulações de percursos reais e Apps de treino',
        'Lona comercial dupla com manta antiderrapante de 3.2mm'
      ]
    }
  },
  {
    id: 'c5',
    name: 'Simulador de Escada Profissional StairClimber',
    category: 'cardio',
    description: 'O equipamento de cardio mais requisitado em academias para alto gasto calórico e tonificação de glúteos.',
    fullDescription: 'O Simulador de Escada 4Life garante movimentos fluidos e biomecanicamente perfeitos. Possui degraus largos com superfície antiderrapante, freio eletromagnético e sensores de pulso nas manoplas.',
    badge: 'CARDIO',
    musclesTargeted: '🟢 Glúteos · Quadríceps · Panturrilhas · Cardiorrespiratório',
    muscleColor: 'green',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    specs: {
      dimensions: '160 x 95 x 210 cm',
      weight: '210 kg',
      maxUserWeight: '180 kg',
      structure: 'Estrutura tubulão monobloco com sistema de sensores ópticos',
      warranty: '2 Anos no Sistema Mecânico',
      features: [
        '20 níveis de resistência eletromagnética ajustável',
        'Degraus amplos com sistema de travamento automático de segurança',
        'Display LED intuitivo com contagem de andares, tempo, velocidade e calorias',
        'Porta-garrafa duplo e suporte para tablet integrados'
      ]
    }
  },
  {
    id: 'c6',
    name: 'Simulador de Remo a Ar 4Life Ergômetro',
    category: 'cardio',
    description: 'Resistência a ar autorregulável que simula com perfeição a remada em águas abertas.',
    fullDescription: 'Ideal para treinos funcionais, boxes e salas de cardio. Recruta até 86% dos grupos musculares do corpo com baixíssimo impacto articular e altíssima precisão de dados de rendimento.',
    badge: 'CARDIO',
    musclesTargeted: '🟢 Dorso · Pernas · Bíceps · Deltoides · Core',
    muscleColor: 'green',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
    isPopular: false,
    specs: {
      dimensions: '240 x 62 x 106 cm',
      weight: '32 kg',
      maxUserWeight: '160 kg',
      structure: 'Trilho de alumínio extrudado com capa de aço inoxidável',
      warranty: '3 Anos na Estrutura',
      features: [
        'Roda de pás de ar com regulagem de aberturas (Dampers 1 a 10)',
        'Monitor PM5 com conexão Bluetooth para aplicativos de Remo em tempo real',
        'Desmontável em 2 partes sem uso de ferramentas para fácil armazenamento',
        'Assento anatômico moldado com rolamentos de polímero de alta precisão'
      ]
    }
  },
  {
    id: 'c7',
    name: 'Air Bike Profissional Dual Action',
    category: 'cardio',
    description: 'Resistência por hélice de ar de 27 polegadas com trabalho simultâneo de membros superiores e inferiores.',
    fullDescription: 'Equipamento essencial para Cross Training e preparação física militar. Quanto mais rápido você pedala e empurra os manetes, maior a resistência gerada pela turbina de ar.',
    badge: 'CARDIO',
    musclesTargeted: '🟢 Corpo Inteiro · Peitoral · Costas · Pernas · Core',
    muscleColor: 'green',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800',
    isPopular: false,
    specs: {
      dimensions: '130 x 60 x 128 cm',
      weight: '52 kg',
      maxUserWeight: '170 kg',
      structure: 'Chassi reforçado em aço cromomolibdênio',
      warranty: '3 Anos na Estrutura',
      features: [
        'Ventoinha de aço de 27" cortada a laser',
        'Braços de acionamento móveis com suporte fixo para isolamento de braço',
        'Programas intervalados pré-configurados de HIIT (20/10, 10/20, Alvos de Calorias)',
        'Corrente de acionamento de alta resistência isolada por cárter blindado'
      ]
    }
  },

  // 🏋️ MUSCULAÇÃO (10 items)
  {
    id: 'm1',
    name: 'Supino Inclinado Articulado 4Life',
    category: 'musculacao',
    description: 'Ângulo anatômico ideal de 30° para isolamento superior do peitoral com pegada convergente.',
    fullDescription: 'Desenvolvido com biomecânica de alavanca independente, permitindo cargas balanceadas para braços esquerdo e direito. Estofamento em corvim náutico de alta densidade e costura dupla reforçada.',
    badge: 'MUSCULAÇÃO',
    musclesTargeted: '🟡 Peitoral Superior · Deltoide Anterior · Tríceps',
    muscleColor: 'yellow',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    specs: {
      dimensions: '155 x 140 x 165 cm',
      weight: '125 kg',
      maxUserWeight: '220 kg (Carga)',
      structure: 'Aço carbono de 3.0mm cortado a laser de precisão',
      warranty: '5 Anos na Estrutura',
      features: [
        'Regulagem rápida de altura do assento assistida por mola a gás',
        'Manoplas em alumínio anorizado com textura recartilhada aderente',
        '4 suportes anilheiros integrados em aço cromo para armazenamento de peso',
        'Bucha de articulação com rolamentos duplos blindados'
      ]
    }
  },
  {
    id: 'm2',
    name: 'Supino Reto Profissional com Trava de Segurança',
    category: 'musculacao',
    description: 'Banco robusto para barras olímpicas com suportes em polímero para proteção da barra e praticante.',
    fullDescription: 'Banco clássico para treinamentos pesados de força com estabilidade incomparável. Possui plataforma traseira reforçada para auxílio de personal trainer e apoios em dois níveis de altura.',
    badge: 'PROFISSIONAL',
    musclesTargeted: '🟡 Peitoral Maior · Deltoides · Tríceps Branquial',
    muscleColor: 'yellow',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    isPopular: false,
    specs: {
      dimensions: '170 x 165 x 130 cm',
      weight: '85 kg',
      maxUserWeight: '350 kg (Usuário + Carga)',
      structure: 'Tubo estrutural 80x80mm em aço carbono',
      warranty: '5 Anos na Estrutura',
      features: [
        'Proteções de poliuretano nos ganchos de barra para evitar ruídos e desgaste',
        'Estrutura soldada robotizada MIG de altíssima penetração',
        'Sapatas emborrachadas antivibração e antiderrapante para proteção do piso',
        'Suporte traseiro amplo antiderrapante para parceiro de treino'
      ]
    }
  },
  {
    id: 'm3',
    name: 'Remada Inclinada Articulada Convergente',
    category: 'musculacao',
    description: 'Trajetória convergente natural que respeita o eixo de articulação dos ombros para dorsal densa.',
    fullDescription: 'Concebida para trabalho profundo de latíssimo do dorso, romboides e trapézio. Possui apoio peitoral ajustável e regulagem multiposição de pegada para diferentes variações de pegada (pronada/neutra).',
    badge: 'MUSCULAÇÃO',
    musclesTargeted: '🟡 Latíssimo do Dorso · Romboides · Bíceps',
    muscleColor: 'yellow',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    specs: {
      dimensions: '160 x 125 x 130 cm',
      weight: '110 kg',
      maxUserWeight: '200 kg (Carga por lado)',
      structure: 'Aço Carbono tubular 3mm com pintura pó eletrostática termoaquecida',
      warranty: '5 Anos na Estrutura',
      features: [
        'Apoio peitoral anatômico em poliuretano injetado sem deformação',
        'Movimento convergente independente por braço',
        'Pinos de apoio de anilhas em cromo duro ultra-resistente',
        'Empunhadura multiposição anatômica'
      ]
    }
  },
  {
    id: 'm4',
    name: 'Leg Press 45° Heavy Duty 4Life',
    category: 'musculacao',
    description: 'Suporta até 600kg de anilhas com rolamentos lineares alemães de movimento ultra macio.',
    fullDescription: 'O Leg Press 45° 4Life é a escolha definitiva para o dia de pernas pesado. Conta com plataforma de apoio ampla em chapa xadrez antiderrapante, trava de segurança de fácil acionamento e encosto com 4 regulagens de inclinação.',
    badge: 'DESTAQUE',
    musclesTargeted: '🔴 Quadríceps · Glúteos · Isquiotibiais · Panturrilhas',
    muscleColor: 'red',
    image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    specs: {
      dimensions: '225 x 150 x 155 cm',
      weight: '240 kg',
      maxUserWeight: '600 kg (Carga de anilhas)',
      structure: 'Chassi monobloco em chapa de aço estrutural 4mm',
      warranty: '5 Anos na Estrutura',
      features: [
        'Carrinho com rolamentos lineares em eixos maciços temperados de 50mm',
        'Plataforma de pés estendida de 70x60cm para múltiplas variações de postura',
        'Limitador de amplitude de descida ajustável com pino seletor magnético',
        'Anilheiros laterais de descanso rápido em cromo blindado'
      ]
    }
  },
  {
    id: 'm5',
    name: 'Máquina Peitoral & Dorsal (Pec Deck / Fly Inverse)',
    category: 'musculacao',
    description: 'Equipamento 2 em 1 com coluna de tijolos de aço de 100kg e braços articulados giratórios.',
    fullDescription: 'Permite a execução perfeita do Voador Peitoral (Pec Deck) e do Voador Inverso para Deltoide Posterior. Possui seletor de ângulo de partida rápido com cam giratório que mantém a tensão contínua em todo o movimento.',
    badge: 'MUSCULAÇÃO',
    musclesTargeted: '🟡 Peitoral Maior · Deltoide Posterior · Romboide',
    muscleColor: 'yellow',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800',
    isPopular: false,
    specs: {
      dimensions: '140 x 120 x 200 cm',
      weight: '210 kg (Carga 100 kg)',
      maxUserWeight: '160 kg',
      structure: 'Estrutura fechada com carenagem de proteção translúcida em policarbonato',
      warranty: '3 Anos em Cabos e Carenagem',
      features: [
        'Cabos de aço de aviação revestidos em náilon ultra flexível (suporta 1.200kg)',
        'Polias usinadas em alumínio com rolamentos selados de alta performance',
        'Carga seletora por pino magnético de segurança com cabo em espiral',
        'Pega giratória auto-ajustável para melhor alinhamento do pulso'
      ]
    }
  },
  {
    id: 'm6',
    name: 'Graviton / Assistidor de Barra e Paralela',
    category: 'musculacao',
    description: 'Coluna de pesos seletora de 100kg com plataforma dobrável assistida para flexões e barras.',
    fullDescription: 'Essencial para usuários de todos os níveis executarem Barra Fixa e Paralelas com assistência de carga progressiva. Plataforma articulada antideslizante que pode ser recolhida para treino livre sem assistência.',
    badge: 'MUSCULAÇÃO',
    musclesTargeted: '🟡 Dorso · Bíceps · Peitoral Inferior · Tríceps',
    muscleColor: 'yellow',
    image: 'https://images.unsplash.com/photo-1598136490941-30d885318abd?auto=format&fit=crop&q=80&w=800',
    isPopular: false,
    specs: {
      dimensions: '150 x 115 x 220 cm',
      weight: '225 kg (Carga 100 kg)',
      maxUserWeight: '170 kg',
      structure: 'Aço de corte laser 3mm com torre selada',
      warranty: '3 Anos de Garantia',
      features: [
        'Manoplas multi-posições para barra neutra, aberta, fechada e supinada',
        'Apoio de joelho acolchoado com reclinação rápida',
        'Degraus laterais elevados para entrada e saída confortável com segurança',
        'Carenagem integral em ABS cinza e detalhes em preto texturizado'
      ]
    }
  },
  {
    id: 'm7',
    name: 'Máquina Cadeira Abdutora & Adutora Dual',
    category: 'musculacao',
    description: 'Sistema duplo com fácil regulagem do cam de alavanca para isolamento de glúteos e adutores.',
    fullDescription: 'Otimização máxima de espaço físico no salão de musculação. Mudança instantânea entre os exercícios de Abdução e Adução através do seletor mecânico do braço rotativo.',
    badge: 'MUSCULAÇÃO',
    musclesTargeted: '🔴 Glúteo Médio/Mínimo · Adutor Longo · Adutor Magno',
    muscleColor: 'red',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800',
    isPopular: false,
    specs: {
      dimensions: '160 x 100 x 150 cm',
      weight: '195 kg (Carga 80 kg)',
      maxUserWeight: '160 kg',
      structure: 'Estrutura oval curva em aço de engenharia',
      warranty: '3 Anos na Torre e Guias',
      features: [
        'Almofadas giratórias para os joelhos que acompanham o movimento das pernas',
        'Encosto reclinável com 3 posições para alinhar o quadril com o eixo de rotação',
        'Duas manoplas laterais de suporte para estabilização do tronco',
        'Guias de tijolos em aço inox polido livre de atrito'
      ]
    }
  },
  {
    id: 'm8',
    name: 'Cross Over Profissional com Múltiplas Regulagens',
    category: 'musculacao',
    description: 'Estação dupla de polias ajustáveis em 18 alturas com barra de tração integrada.',
    fullDescription: 'O Cross Over 4Life é o equipamento polivalente mais cobiçado da academia. Permite centenas de variações de exercícios para o corpo inteiro com duas colunas independentes de pesos de 100kg cada.',
    badge: 'PROFISSIONAL',
    musclesTargeted: '🟣 Peitoral · Dorso · Deltóides · Bíceps · Tríceps · Abdômen',
    muscleColor: 'purple',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    specs: {
      dimensions: '380 x 100 x 230 cm',
      weight: '380 kg (2x Baterias de 100 kg)',
      maxUserWeight: '200 kg na barra fixa',
      structure: 'Aço carbono tubular curvado de grande porte',
      warranty: '5 Anos na Estrutura',
      features: [
        'Carrinho de roldana com acionamento por gatilho monomão em inox',
        'Barra de elevação central multi-pegada com relevo diamantado antideslizante',
        'Acompanha pares de puxadores de estribo em náilon e cromo',
        'Escala graduada gravada a laser para ajuste numérico das polias'
      ]
    }
  },
  {
    id: 'm9',
    name: 'Cross Over Angular Funcional Compacto',
    category: 'musculacao',
    description: 'Design de canto otimizado com braços de polia orientáveis de 180° para estúdios e condomínios.',
    fullDescription: 'A solução perfeita para espaços que exigem máxima eficiência funcional em área reduzida. Ângulos de saída ajustáveis em altura e largura para movimentos esportivos específicos.',
    badge: 'MUSCULAÇÃO',
    musclesTargeted: '🟣 Corpo Inteiro · Core · Mobilidade · Força Funcional',
    muscleColor: 'purple',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=800',
    isPopular: false,
    specs: {
      dimensions: '165 x 140 x 215 cm',
      weight: '280 kg (2x Baterias de 80 kg)',
      maxUserWeight: '160 kg',
      structure: 'Chassi angular 90° para encaixe em paredes e cantos',
      warranty: '3 Anos na Estrutura',
      features: [
        'Relação de cabo de 2:1 para cursos longos e movimentos de velocidade explosiva',
        'Suporte de acessórios traseiro embutido para guardar cordas, tornozeleiras e barras',
        'Quadro ilustrativo com 12 exercícios fundamentais fixado na carenagem',
        'Guias maciças de tijolos polidas com lubrificação permanente'
      ]
    }
  },
  {
    id: 'm10',
    name: 'Estação Multifuncional 4 Estações 4Life',
    category: 'musculacao',
    description: 'Módulo integrador completo com Puxador Alto, Remada Baixa, Tríceps e Polia Ajustável.',
    fullDescription: 'Atende até 4 praticantes simultaneamente com conforto e segurança. Ideal para academias de condomínios, hotéis e clubes de alto padrão que precisam de variedade completa num único monobloco.',
    badge: 'DESTAQUE',
    musclesTargeted: '🟣 Membros Superiores · Dorso · Peito · Braços · Pernas',
    muscleColor: 'purple',
    image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    specs: {
      dimensions: '320 x 220 x 225 cm',
      weight: '520 kg (4x Baterias de 90 kg)',
      maxUserWeight: '180 kg por posto',
      structure: 'Monobloco reforçado em aço de caldeiraria pesada',
      warranty: '5 Anos na Estrutura',
      features: [
        'Posto 1: Puxador Alto Lat Pulldown com travamento de coxa',
        'Posto 2: Remada Baixa Pulley com apoio de pé revestido',
        'Posto 3: Polia Alta para Tríceps e Abdominal suspenso',
        'Posto 4: Polia Regulável de Altura para uso livre com múltiplos acessórios'
      ]
    }
  },

  // 🎽 ACESSÓRIOS (7 items)
  {
    id: 'a1',
    name: 'Halter Sextavado Injetado (Par)',
    category: 'acessorios',
    description: 'Revestido em borracha virgem de alta densidade anti-impacto com pegada anatômica cromo duro.',
    fullDescription: 'Os Halteres Sextavados 4Life não rolam no chão e protegem o piso contra impactos severos. O miolo de ferro fundido é fundido diretamente na haste cromada com textura antiderrapante.',
    badge: 'ACESSÓRIOS',
    musclesTargeted: '🔵 Braços · Deltóides · Peitoral · Costas',
    muscleColor: 'blue',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    specs: {
      dimensions: 'Pares de 1 kg a 50 kg disponíveis',
      weight: 'Variação por par selecionado',
      maxUserWeight: 'N/A',
      structure: 'Núcleo maciço em ferro com revestimento em Borracha Virgem Injetada',
      warranty: '1 Ano de Garantia',
      features: [
        'Formato sextavado (hexagonal) que impede o rolamento no piso e facilita apoios de flexão',
        'Identificação do peso em alto relevo com numeração amarela de fácil visualização',
        'Empunhadura ergonômica com cromo duro antiderrapante',
        'Absorção de choque acústico e térmico superior'
      ]
    }
  },
  {
    id: 'a2',
    name: 'Puxador Corda Tríceps Profissional Heavy Duty',
    category: 'acessorios',
    description: 'Corda multifilamentos de náilon de 32mm de espessura com ponteiras injetadas moldadas.',
    fullDescription: 'Puxador clássico para polias de academias. Permite flexão total do pulso durante a extensão de tríceps e rosca de bíceps com máxima isolamento muscular.',
    badge: 'ACESSÓRIOS',
    musclesTargeted: '🔵 Tríceps Branquial · Bíceps · Antebraços',
    muscleColor: 'blue',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
    isPopular: false,
    specs: {
      dimensions: 'Comprimento total: 70 cm | Diâmetro: 32 mm',
      weight: '0.9 kg',
      maxUserWeight: 'Suporta até 300 kg de tração',
      structure: 'Náilon trançado multifilamento reforçado com mosquetão em aço forjado',
      warranty: '6 Meses de Garantia',
      features: [
        'Ponteiras de borracha rígida moldada antiderrapante para firmeza na pegada',
        'Anel central de encaixe cromado para rotação livre no mosquetão',
        'Acabamento reforçado antifiações',
        'Lavável e altamente resistente a suor e umidade'
      ]
    }
  },
  {
    id: 'a3',
    name: 'Step Antiderrapante Profissional Regulável',
    category: 'acessorios',
    description: 'Plataforma em polietileno injetado de alto impacto com 3 níveis de ajuste de altura.',
    fullDescription: 'Desenvolvido para aulas de ginástica coletiva, funcional e fisioterapia. Superfície de borracha vulcanizada com textura alveolar antiderrapante e pés de borracha para aderência em qualquer piso.',
    badge: 'ACESSÓRIOS',
    musclesTargeted: '🟢 Pernas · Glúteos · Cardiorrespiratório · Agilidade',
    muscleColor: 'green',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800',
    isPopular: false,
    specs: {
      dimensions: '110 x 42 cm | Alturas: 15, 20 e 25 cm',
      weight: '8.5 kg',
      maxUserWeight: '250 kg de impacto dinâmico',
      structure: 'Polímero virgem de ultra alta densidade e absorção de choque',
      warranty: '1 Ano de Garantia',
      features: [
        'Ajuste rápido de altura pelos blocos de encaixe sob a plataforma',
        'Superfície ampla antiderrapante mesmo durante transpiração intensa',
        'Base emborrachada que não risca nem escorrega no piso sintético ou madeira',
        'Design empilhável para otimização de espaço nos estúdios'
      ]
    }
  },
  {
    id: 'a4',
    name: 'Barras Maciças Olímpicas 2.20m com Rolamento',
    category: 'acessorios',
    description: 'Aço mola especial com capacidade para 680kg e 8 rolamentos de agulha para giro livre.',
    fullDescription: 'Barra Olímpica Profissional padrão IPF/IWF. Recartilhado fino médio para pegada firme sem agredir as mãos e acabamento em Cromo Duro e Óxido Preto para proteção contra corrosão.',
    badge: 'PROFISSIONAL',
    musclesTargeted: '🔵 Corpo Inteiro · Levantamento Olímpico · Powerlifting',
    muscleColor: 'blue',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    specs: {
      dimensions: 'Comprimento: 220 cm | Diâmetro da Haste: 28 mm | Mangas: 50 mm',
      weight: '20 kg',
      maxUserWeight: '680 kg (1500 lbs)',
      structure: 'Aço Liga Temperado com limite de escoamento superior a 190.000 PSI',
      warranty: '2 Anos de Garantia',
      features: [
        '8 Rolamentos de agulha de alta precisão (4 em cada manga de carga)',
        'Marcações duplas de empunhadura para Powerlifting e LPO',
        'Acompanha par de presilhas Lock-Jaw de travamento rápido em alumínio',
        'Tratamento térmico especial contra deformação sob alta carga'
      ]
    }
  },
  {
    id: 'a5',
    name: 'Barra Monobloco Montada W / H / Reta',
    category: 'acessorios',
    description: 'Barras prontas com pesos fixos em borracha vulcanizada de 10kg a 45kg.',
    fullDescription: 'Linha de barras montadas monobloco ideais para troca rápida de carga em estúdios e academias. Elimina a necessidade de montagem de presilhas e anilhas durante o treino.',
    badge: 'ACESSÓRIOS',
    musclesTargeted: '🔵 Bíceps · Tríceps · Deltoides · Antebraço',
    muscleColor: 'blue',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800',
    isPopular: false,
    specs: {
      dimensions: 'Modelos Reto, W e H disponíveis | Pesos de 10 a 45 kg',
      weight: 'Variável de acordo com o peso fixo',
      maxUserWeight: 'N/A',
      structure: 'Haste central de aço maciço recartilhado com pesos prensados e soldados',
      warranty: '1 Ano de Garantia',
      features: [
        'Revestimento das pontas em Borracha Vulcanizada injetada',
        'Numeração gravada em amarelo de alta visibilidade na lateral',
        'Sem peças soltas ou riscos de desprendimento durante o uso',
        'Compatível com racks de barras montadas 4Life'
      ]
    }
  },
  {
    id: 'a6',
    name: 'Anilha Vulcanizada Bumper Plate LPO / Musculação',
    category: 'acessorios',
    description: 'Anilhas de borracha virgem com anel central em aço inox de 50.4mm e baixo quique.',
    fullDescription: 'Anilhas padrão olímpico desenvolvidas para aguentar milhares de quedas em treinos de Cross Training e LPO. Borracha de altíssima densidade com odor neutro e espessura fina para maior capacidade na barra.',
    badge: 'DESTAQUE',
    musclesTargeted: '🔵 Agachamentos · Terra · LPO · Musculação em Geral',
    muscleColor: 'blue',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    specs: {
      dimensions: 'Diâmetro externo padrão de 450 mm | Pesos: 5, 10, 15, 20, 25 kg',
      weight: 'Opções individuais ou kits completíssimos',
      maxUserWeight: 'N/A',
      structure: '100% Borracha Virgem de alta densidade com bucha em Aço Inox 304',
      warranty: '2 Anos contra quebras',
      features: [
        'Anel de aço reforçado com sistema de travamento interno que previne folgas',
        'Testado em mais de 20.000 quedas livres de 2 metros de altura',
        'Cores em padrão internacional IWF nos dígitos e bordas',
        'Acabamento fosco aveludado e fácil de higienizar'
      ]
    }
  },
  {
    id: 'a7',
    name: 'Dumbell Injetado com Pegada Cromada (Pro Style)',
    category: 'acessorios',
    description: 'Dumbells Profissionais de peso fixo de 12kg a 60kg com discos emborrachados e capa de proteção.',
    fullDescription: 'O suprassumo dos pesos livres para academias de alto padrão. Construção monobloco com parafuso interno reforçado de travamento permanente e empunhadura anatômica com textura diamantada.',
    badge: 'PROFISSIONAL',
    musclesTargeted: '🔵 Membros Superiores · Peitoral · Dorsais · Deltóides · Braços',
    muscleColor: 'blue',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    specs: {
      dimensions: 'Pares de 12 kg a 60 kg com incrementos de 2 kg',
      weight: 'Definido no par selecionado',
      maxUserWeight: 'N/A',
      structure: 'Discos de aço usinado com revestimento de Borracha Virgem Injetada e empunhadura cromo',
      warranty: '2 Anos de Garantia',
      features: [
        'Capa lateral em silicone com logo 4Life Sports gravado em baixo relevo',
        'Pegada anatômica recartilhada no centro para equilíbrio perfeito da mão',
        'Zero vibração ou folga mecânica no manuseio',
        'Design refinado que eleva o nível estético do salão de pesos'
      ]
    }
  }
];
