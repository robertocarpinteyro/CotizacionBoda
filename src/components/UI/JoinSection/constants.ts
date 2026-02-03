import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "Oasis Creativa transformó nuestra presencia en redes sociales. Los reels UGC que crean con actores son increíblemente auténticos y han triplicado nuestro engagement. Las ventas provenientes de Instagram aumentaron un 40% en los últimos 3 meses.",
    person: 'Roberto Martínez',
    avatar: robert_fox,
  },
  {
    testimony:
      "El contenido cinematográfico de las unidades que produce Oasis Creativa es impresionante. Los videos de fichas técnicas destacan perfectamente cada auto y hemos notado un aumento significativo en consultas por WhatsApp. El equipo entiende perfectamente el sector automotriz.",
    person: 'Carlos Hernández',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Trabajar con Oasis Creativa ha sido clave para modernizar nuestra estrategia digital. Los reels que crean siguiendo las tendencias actuales nos han posicionado como una agencia innovadora. El ROI ha superado nuestras expectativas completamente.",
    person: 'Ana González',
    avatar: esther_howard,
  },
  {
    testimony:
      "La calidad del contenido UGC es excepcional. Los videos se sienten genuinos y conectan perfectamente con nuestro público objetivo. Desde que trabajamos con Oasis Creativa, nuestra tasa de conversión en redes sociales ha mejorado notablemente.",
    person: 'Carlos Hernández',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Estamos muy satisfechos con el servicio de Oasis Creativa. Los 6 reels mensuales mantienen nuestra presencia activa y relevante. El equipo es profesional, creativo y siempre entrega a tiempo. Altamente recomendados para cualquier agencia automotriz.",
    person: 'Roberto Martínez',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Agencias que confían', 'en nosotros'];
