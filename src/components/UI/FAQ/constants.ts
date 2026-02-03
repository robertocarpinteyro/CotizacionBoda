type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
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
    question: '¿Qué tipo de contenido incluye el servicio?',
    answer:
      'Creamos 6 reels mensuales: 3 reels de auto (ficha técnica) y 3 reels UGC con actores/talentos o influencers en tu sucursal, siguiendo las tendencias actuales de redes sociales.',
  },
  {
    question: '¿Dónde se graban los reels UGC?',
    answer:
      'Los reels UGC se graban directamente en tu sucursal con actores, talentos o influencers, creando contenido auténtico y orgánico que genera mayor conexión con tu audiencia.',
  },
  {
    question: '¿Cómo destacan las unidades en los reels?',
    answer:
      'Creamos videos cinematográficos de alta calidad que presentan la ficha técnica de cada auto de forma atractiva y profesional, optimizados para generar interés y conversiones.',
  },
  {
    question: '¿La inversión incluye el presupuesto de pauta publicitaria?',
    answer:
      'No, el presupuesto de pauta publicitaria para Meta Ads no está incluido en la inversión mensual. Nosotros diseñamos y gestionamos las campañas publicitarias, y te sugerimos una cantidad óptima de inversión en pauta que consideramos adecuada para alcanzar tus objetivos y maximizar resultados.',
  },
];
