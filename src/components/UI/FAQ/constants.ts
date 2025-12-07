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
      'El paquete incluye 8 videos distribuidos estratégicamente: 2 reels de festividades/actividades en sucursal, 3 reels por auto agencia, 3 reels cinematográficos en spots instagrameables, 2 motion graphics promocionales, sesión de fotos para posts y stories, y la posibilidad de colaboraciones con influencers.',
  },
  {
    question: '¿Cómo funcionan las colaboraciones con influencers?',
    answer:
      'Los videos tienen la posibilidad de ejecutarse con influencers, destacando la colaboración entre la marca (agencia), marca de auto e influencer. Esto potencia la visualización del contenido juntando 3 grandes comunidades. Incluye sesión de fotos para posts y stories con posibilidad de colaborar con creadores como Stylist.',
  },
  {
    question: '¿Dónde se graban los reels cinematográficos?',
    answer:
      'Los reels cinematográficos se graban en spots instagrameables de la ciudad, capturando momentos durante el recorrido así como en las locaciones seleccionadas. La idea es mostrar los vehículos en los mejores escenarios urbanos para contenido premium.',
  },
  {
    question: '¿Cuál es el tiempo de entrega del contenido?',
    answer:
      'El contenido se distribuye a lo largo del mes de manera estratégica. Los 8 videos se entregan según el calendario acordado para mantener una presencia constante en redes sociales y maximizar el engagement con tu audiencia.',
  },
  {
    question: '¿El contenido está optimizado para Instagram?',
    answer:
      'Sí, todo el contenido está diseñado específicamente para Instagram y redes sociales. Los reels están en formato vertical, los motion graphics son dinámicos y atractivos, y las fotos están optimizadas para posts y stories con la mejor calidad visual.',
  },
];
