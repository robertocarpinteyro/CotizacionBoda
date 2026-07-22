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
    question: '¿Cuánto es el anticipo para apartar la fecha?',
    answer:
      'Se requiere un anticipo del 50% para apartar la fecha. El 50% restante se liquida antes del evento. Al apartar este mes, recibes de regalo 30 fotografías profesionales e invitaciones digitales para tus invitados.',
  },
  {
    question: '¿Qué incluye la cobertura de 2 días?',
    answer:
      'La cobertura incluye los 2 días completos (4 y 5 de Agosto). Cubrimos desde el getting ready hasta la recepción, con hasta 10 horas de filmación por día. El equipo completo asiste ambos días: 2 videógrafos, 1 operador de drone y 1 staff.',
  },
  {
    question: '¿Cuál es el tiempo de entrega del material?',
    answer:
      'Los reels para redes sociales se entregan en las primeras semanas después del evento. El video highlight 4K y el cineminuto se entregan en un plazo de 4 a 8 semanas, dependiendo de la complejidad de la edición cinematográfica.',
  },
  {
    question: '¿Qué calidad de video manejan?',
    answer:
      'Filmamos en resolución 4K con cámaras y lentes cinematográficos profesionales. La post-producción incluye color grading cinematográfico, diseño sonoro profesional y edición narrativa que le da a tu video ese look y sentimiento de película de cine.',
  },
  {
    question: '¿Cómo funciona la entrega digital?',
    answer:
      'Recibes una landing page personalizada donde puedes ver y descargar todo tu contenido en cualquier momento. Además, recibes una USB física con todos los archivos en la más alta calidad para que conserves tu recuerdo para siempre.',
  },
  {
    question: '¿Qué son las invitaciones digitales incluidas en la promoción?',
    answer:
      'Es una landing page elegante y personalizada con los detalles de tu boda y un formulario de asistencia. Tus invitados reciben la invitación por correo electrónico, confirman su asistencia directamente en la página y tú puedes dar seguimiento a las confirmaciones de forma sencilla.',
  },
  {
    question: '¿La inversión incluye IVA?',
    answer:
      'Si el pago es por transferencia bancaria o tarjeta de crédito, la inversión es de $85,000 MXN + IVA. Si el pago es en efectivo, el precio es de $85,000 MXN sin IVA.',
  },
];
