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
    question: '¿Cuál es la inversión total del paquete?',
    answer:
      'La inversión es de $85,000 pesos + IVA si el pago es por transferencia o tarjeta de crédito. Si prefieres pagar en efectivo, el precio es de $85,000 pesos sin IVA. Esta inversión incluye 2 días completos de cobertura (4 y 5 de Agosto), equipo profesional completo, y todos los entregables mencionados.',
  },
  {
    question: '¿Cuánto anticipo se requiere para apartar la fecha?',
    answer:
      'Se requiere un anticipo del 50% del monto total para asegurar tu fecha. El 50% restante se puede liquidar antes del evento. ¡Aparta en febrero y recibe GRATIS 30 fotografías profesionales + sistema de invitaciones digitales!',
  },
  {
    question: '¿Qué incluye exactamente la cobertura de 2 días?',
    answer:
      'Incluye cobertura completa desde el getting ready hasta el final de la recepción, hasta 10 horas por día. Contarás con 2 videógrafos profesionales, 1 operador de drone certificado y 1 staff de apoyo capturando cada momento desde todos los ángulos con equipo 4K profesional.',
  },
  {
    question: '¿Cuándo y cómo recibiré mis videos?',
    answer:
      'Recibirás todos tus entregables (5 reels, video highlight 4K de 4-6 min, cineminto de 1 min) en 4-6 semanas. La entrega es digital a través de una landing page exclusiva para ti, y también recibirás un USB físico con todos los archivos en la máxima calidad.',
  },
  {
    question: '¿Qué incluye el regalo por apartar en febrero?',
    answer:
      'Si apartas tu fecha este mes, recibes GRATIS: 30 fotografías profesionales de alta calidad de tu boda + sistema completo de invitaciones digitales con landing page personalizada, formulario de asistencia y envío automático por correo electrónico a todos tus invitados. ¡Un valor de más de $15,000 pesos totalmente gratis!',
  },
];
