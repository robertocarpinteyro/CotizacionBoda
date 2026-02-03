type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Preguntas', 'frecuentes'];
export const mobileHeaderPhrase = ['Preguntas', 'frecuentes'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: '¿Qué incluye el paquete de contenido mensual?',
    answer:
      'El paquete incluye 6 reels mensuales distribuidos estratégicamente: 3 reels de auto con presentación de ficha técnica y 3 reels UGC grabados en sucursal con actores, talentos o influencers siguiendo las tendencias actuales de redes sociales.',
  },
  {
    question: '¿Cómo funcionan las colaboraciones con actores/talentos?',
    answer:
      'Los reels UGC se graban en tu sucursal con actores, talentos o influencers, creando contenido orgánico y auténtico que sigue las tendencias actuales. Esto potencia la visualización juntando 2 comunidades: tu marca y el talento/influencer colaborador.',
  },
  {
    question: '¿Dónde se graban los reels UGC?',
    answer:
      'Los reels UGC se graban directamente en tu sucursal con actores, talentos o influencers, creando contenido auténtico y orgánico que genera mayor conexión con tu audiencia y sigue las tendencias del momento.',
  },
  {
    question: '¿Cuál es el tiempo de entrega del contenido?',
    answer:
      'El contenido se distribuye a lo largo del mes de manera estratégica. Los 6 reels se entregan según el calendario acordado para mantener una presencia constante en redes sociales y maximizar el engagement con tu audiencia.',
  },
  {
    question: '¿El contenido está optimizado para redes sociales?',
    answer:
      'Sí, todo el contenido está diseñado específicamente para redes sociales. Los reels están en formato vertical optimizado para Instagram y TikTok, con la mejor calidad visual y siguiendo las tendencias actuales para maximizar alcance y engagement.',
  },
  {
    question: '¿La inversión incluye el presupuesto de pauta publicitaria?',
    answer:
      'No, el presupuesto de pauta publicitaria para Meta Ads no está incluido en la inversión mensual. Nosotros diseñamos y gestionamos las campañas publicitarias, y te sugerimos una cantidad óptima de inversión en pauta que consideramos adecuada para alcanzar tus objetivos y maximizar resultados.',
  },
];
