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
      "¡Wow! El video de nuestra boda superó todas nuestras expectativas. La calidad cinematográfica es increíble, cada toma parece sacada de una película. Revivimos nuestro día especial cada vez que lo vemos. El equipo fue profesional, discreto y capturó momentos que ni siquiera sabíamos que sucedieron.",
    person: 'María & Carlos Rodríguez',
    avatar: robert_fox,
  },
  {
    testimony:
      "La atención al detalle es impresionante. Los reels que crearon fueron perfectos para compartir con familiares y amigos. El video highlight de 6 minutos nos hace llorar cada vez que lo vemos. Vale cada peso invertido. ¡Totalmente recomendados!",
    person: 'Andrea & Luis García',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Contraté sus servicios por la calidad cinematográfica que prometían y cumplieron al 100%. El operador de drone capturó tomas espectaculares de nuestra ceremonia en la hacienda. Los 2 videógrafos trabajaron increíblemente bien juntos. Recibimos todo en tiempo y forma.",
    person: 'Sofia & Miguel Hernández',
    avatar: esther_howard,
  },
  {
    testimony:
      "El regalo de las 30 fotografías y las invitaciones digitales fue un plus increíble. Las invitaciones con formulario hicieron súper fácil la organización. El video final tiene una colorimetría hermosa y la música está perfectamente seleccionada. ¡Gracias por capturar nuestra historia!",
    person: 'Valeria & Javier López',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "No puedo dejar de ver nuestro cineminto de 1 minuto. Es perfecto, emotivo y captura la esencia de nuestro día. El equipo fue amable, profesional y se acomodó a todos nuestros tiempos. La landing page donde entregaron todo es hermosa. ¡Mejor decisión que tomamos!",
    person: 'Daniela & Roberto Martínez',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Parejas que confiaron', 'en nosotros'];
