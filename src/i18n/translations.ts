export type Locale = 'es' | 'en';

export const translations = {
  es: {
    // Header
    header: {
      coverage: 'Cobertura',
      deliverables: 'Entregables',
      demo: 'Demo',
      investment: 'Inversión',
      faq: 'FAQ',
      cta: 'Ver Inversión',
    },

    // Hero
    hero: {
      pill: 'Videografía Cinematográfica de Bodas',
      phrases: ['Tu Boda,', 'Nuestra Película'],
      paragraphPhrases: [
        'Cobertura cinematográfica para el momento',
        'más importante de tu vida. 13 de Marzo 2027, Puebla.',
      ],
      mobilePhrases: ['Tu Boda,', 'Nuestra Película'],
      mobileParagraphPhrases: [
        'Cobertura cinematográfica para el',
        'momento más importante de tu vida.',
      ],
      dateBadge: '13 de Marzo 2027 · Puebla',
      cta: 'Ver Inversión',
    },

    // Coverage (ContentPackageSection)
    coverage: {
      title: 'Cobertura Completa del Evento',
      subtitle: '1 Día de filmación cinematográfica — 13 de Marzo 2027, Puebla',
      items: [
        {
          title: 'Getting Ready',
          description: 'Capturamos cada detalle de la preparación: maquillaje, vestido, emociones y esos momentos íntimos previos a la ceremonia con calidad cinematográfica.',
        },
        {
          title: 'Ceremonia',
          description: 'Filmamos cada instante de la ceremonia con múltiples ángulos y tomas aéreas con drone, como si fuera una escena de película.',
        },
        {
          title: 'Recepción',
          description: 'Desde el primer baile hasta la fiesta, documentamos toda la celebración con iluminación y encuadres profesionales. Hasta 11 hrs de cobertura.',
        },
        {
          title: 'Equipo Profesional',
          description: '2 Videógrafos profesionales, 1 Fotógrafo y 1 Operador de drone certificado. Todo el equipo necesario para una producción cinematográfica.',
        },
      ],
    },

    // Benefits
    benefits: [
      {
        icon: '🎬',
        title: 'Calidad Cinematográfica',
        description: 'Filmamos tu boda como si fuera una película. Cada toma, cada encuadre y cada transición está pensada para crear una obra de arte visual.',
      },
      {
        icon: '🎥',
        title: 'Equipo Profesional de Cine',
        description: 'Cámaras de cine, lentes cinematográficos, estabilizadores y equipo de iluminación profesional para lograr ese look de película.',
      },
      {
        icon: '🚁',
        title: 'Tomas Aéreas con Drone',
        description: 'Operador de drone certificado para capturar tomas aéreas espectaculares de tu venue y ceremonia desde ángulos únicos.',
      },
      {
        icon: '🎞️',
        title: 'Color Grading Profesional',
        description: 'Post-producción con corrección de color cinematográfica que le da a tu video ese look de película de Hollywood.',
      },
      {
        icon: '🎵',
        title: 'Diseño Sonoro',
        description: 'Audio profesional con selección musical que complementa perfectamente cada momento emotivo de tu boda.',
      },
      {
        icon: '✨',
        title: 'Narrativa Emocional',
        description: 'No solo grabamos momentos, contamos tu historia de amor. Cada video tiene una narrativa que te hará revivir las emociones.',
      },
    ],

    // Deliverables (UGCReelsSection)
    deliverables: {
      title: 'Entregables',
      subtitle: 'Todo lo que recibirás con tu paquete cinematográfico',
      items: [
        {
          title: 'Video Recap Cinematográfico',
          description: 'De 8 a 10 minutos con lo mejor de tu boda. Editado con calidad cinematográfica, color grading profesional y música que complementa cada momento.',
          badge: '8-10 min',
        },
        {
          title: 'Cineminuto para Redes',
          description: 'Video de 1 minuto con los momentos más épicos de tu boda. Perfecto para compartir en redes sociales y revivir la emoción en un instante.',
          badge: '1 min',
        },
        {
          title: 'Fotografías Profesionales',
          description: 'Fotografías editadas profesionalmente de los mejores momentos de tu boda, listas para imprimir y compartir. Cantidad según el paquete que elijas.',
          badge: 'Fotos',
        },
        {
          title: 'USB + Álbum Digital + Drive',
          description: 'Entrega en USB física con todo el material, un álbum digital y una carpeta en Google Drive con todos los videos y fotografías para descargar en cualquier momento.',
          badge: 'Digital + Físico',
        },
      ],
    },

    // Demo & Promo (AutoReelsSection)
    demo: {
      title: 'Nuestra Calidad Cinematográfica',
      subtitle: 'Mira un ejemplo de cómo filmamos. Cada boda es una película.',
      promoBadge: 'Formas de Pago',
      promoTitle: 'Planes de pago flexibles para ti',
      promoCards: [
        {
          icon: '💰',
          title: 'Pago de Contado',
          description: '15% de descuento al liquidar tu paquete en un solo pago. La mejor opción para aprovechar al máximo tu inversión.',
        },
        {
          icon: '📅',
          title: 'Planes de Pago',
          description: 'Aparta con el primer pago y liquida 2 meses antes de la boda, o difiere tu paquete a meses sin intereses. Tú eliges la forma que más te convenga.',
        },
      ],
    },

    // Pricing
    pricing: {
      title: 'Inversión en tu',
      titleHighlight: 'Historia de Amor',
      subtitle: 'Elige el paquete que mejor se adapte a tu día especial',
      paymentNote: 'Contamos con planes de pago: 15% de descuento de contado, precio normal en 2 pagos o meses sin intereses.',
      cta: 'Apartar Ahora',
      packages: [
        {
          name: 'Esencial',
          price: '$24,900',
          currency: 'MXN (sin IVA)',
          description: 'Lo esencial para capturar tu día con calidad cinematográfica.',
          featured: false,
          features: [
            '1 día de cobertura (hasta 8 hrs)',
            '1 Video Recap cinematográfico de 5 a 7 min',
            '200 Fotografías profesionales',
            'Entrega en USB, álbum digital y Drive',
          ],
        },
        {
          name: 'Completo',
          price: '$36,000',
          currency: 'MXN',
          description: 'La experiencia completa de cine para tu boda. Nuestro más solicitado.',
          featured: true,
          features: [
            '1 día de cobertura (hasta 11 hrs)',
            '2 Videógrafos + 1 Fotógrafo + Operador de drone',
            'Video Recap cinematográfico de 8 a 10 min',
            'Cineminuto para redes sociales (1 min)',
            '2 Reels para redes sociales',
            '450 Fotografías profesionales',
            'Entrega en USB, álbum digital y Drive',
          ],
        },
      ],
    },

    // FAQ
    faq: {
      headerDesktop: ['Preguntas', 'frecuentes'],
      headerMobile: ['Preguntas', 'frecuentes'],
      items: [
        {
          question: '¿Cómo funcionan los pagos y el anticipo?',
          answer: 'Contamos con varios planes de pago: (1) Pago de contado con 15% de descuento. (2) Precio normal en 2 pagos: el primero al apartar la fecha y el segundo 2 meses antes de la boda. (3) Meses sin intereses. Se requiere el primer pago para apartar la fecha.',
        },
        {
          question: '¿Qué incluye la cobertura?',
          answer: 'Cubrimos tu boda en Puebla el 13 de Marzo de 2027, con hasta 11 horas de filmación. El equipo incluye 2 videógrafos, 1 fotógrafo y 1 operador de drone certificado, de acuerdo con el paquete que elijas.',
        },
        {
          question: '¿Cuál es el tiempo de entrega del material?',
          answer: 'El video recap y el cineminuto se entregan en un plazo de 4 a 8 semanas, dependiendo de la complejidad de la edición cinematográfica. Las fotografías y los reels para redes se entregan en las primeras semanas después del evento.',
        },
        {
          question: '¿Qué calidad de video manejan?',
          answer: 'Filmamos en resolución 4K con cámaras y lentes cinematográficos profesionales. La post-producción incluye color grading cinematográfico, diseño sonoro profesional y edición narrativa que le da a tu video ese look y sentimiento de película de cine.',
        },
        {
          question: '¿Cómo recibo mi material?',
          answer: 'Recibes una USB física con todo el material, un álbum digital y una carpeta en Google Drive con todos los videos y fotografías, para que puedas verlos y descargarlos en cualquier momento y conserves tu recuerdo para siempre.',
        },
        {
          question: '¿Los precios incluyen IVA?',
          answer: 'El paquete Esencial se maneja con precio sin IVA. Si requieres factura, se agrega el IVA correspondiente. Consulta las condiciones al momento de apartar tu fecha.',
        },
      ],
    },

    // Footer
    footer: {
      tagline: 'Tu boda merece ser una película',
      description: 'Contáctanos para conocer más sobre nuestra propuesta de videografía cinematográfica para tu boda.',
      sections: 'Secciones',
      information: 'Información',
      contact: 'Contacto',
      copyright: '2026 Oasis Creativa. Todos los derechos reservados.',
      lang: 'Español (México)',
    },
  },

  en: {
    // Header
    header: {
      coverage: 'Coverage',
      deliverables: 'Deliverables',
      demo: 'Demo',
      investment: 'Investment',
      faq: 'FAQ',
      cta: 'View Investment',
    },

    // Hero
    hero: {
      pill: 'Cinematic Wedding Videography',
      phrases: ['Your Wedding,', 'Our Film'],
      paragraphPhrases: [
        'Cinematic coverage for the most important',
        'moment of your life. March 13th, 2027, Puebla.',
      ],
      mobilePhrases: ['Your Wedding,', 'Our Film'],
      mobileParagraphPhrases: [
        'Cinematic coverage for the most',
        'important moment of your life.',
      ],
      dateBadge: 'March 13th, 2027 · Puebla',
      cta: 'View Investment',
    },

    // Coverage (ContentPackageSection)
    coverage: {
      title: 'Full Event Coverage',
      subtitle: '1 Day of cinematic filming — March 13th, 2027, Puebla',
      items: [
        {
          title: 'Getting Ready',
          description: 'We capture every detail of the preparation: makeup, dress, emotions, and those intimate moments before the ceremony with cinematic quality.',
        },
        {
          title: 'Ceremony',
          description: 'We film every moment of the ceremony with multiple angles and aerial drone shots, as if it were a movie scene.',
        },
        {
          title: 'Reception',
          description: 'From the first dance to the party, we document the entire celebration with professional lighting and framing. Up to 11 hours of coverage.',
        },
        {
          title: 'Professional Team',
          description: '2 Professional videographers, 1 Photographer, and 1 Certified drone operator. The full team needed for a cinematic production.',
        },
      ],
    },

    // Benefits
    benefits: [
      {
        icon: '🎬',
        title: 'Cinematic Quality',
        description: 'We film your wedding as if it were a movie. Every shot, every frame, and every transition is designed to create a visual masterpiece.',
      },
      {
        icon: '🎥',
        title: 'Professional Cinema Gear',
        description: 'Cinema cameras, cinematic lenses, stabilizers, and professional lighting equipment to achieve that film look.',
      },
      {
        icon: '🚁',
        title: 'Aerial Drone Shots',
        description: 'Certified drone operator to capture spectacular aerial shots of your venue and ceremony from unique angles.',
      },
      {
        icon: '🎞️',
        title: 'Professional Color Grading',
        description: 'Post-production with cinematic color correction that gives your video that Hollywood film look.',
      },
      {
        icon: '🎵',
        title: 'Sound Design',
        description: 'Professional audio with music selection that perfectly complements every emotional moment of your wedding.',
      },
      {
        icon: '✨',
        title: 'Emotional Storytelling',
        description: "We don't just record moments, we tell your love story. Every video has a narrative that will make you relive the emotions.",
      },
    ],

    // Deliverables (UGCReelsSection)
    deliverables: {
      title: 'Deliverables',
      subtitle: 'Everything you will receive with your cinematic package',
      items: [
        {
          title: 'Cinematic Recap Video',
          description: '8 to 10 minutes with the best of your wedding. Edited with cinematic quality, professional color grading, and music that complements every moment.',
          badge: '8-10 min',
        },
        {
          title: 'Social Media Cineminute',
          description: '1-minute video with the most epic moments of your wedding. Perfect for sharing on social media and reliving the emotion in an instant.',
          badge: '1 min',
        },
        {
          title: 'Professional Photography',
          description: 'Professionally edited photographs of the best moments of your wedding, ready to print and share. Quantity depends on the package you choose.',
          badge: 'Photos',
        },
        {
          title: 'USB + Digital Album + Drive',
          description: 'Delivery on a physical USB drive with all your material, a digital album, and a Google Drive folder with all videos and photos to download anytime.',
          badge: 'Digital + Physical',
        },
      ],
    },

    // Demo & Promo (AutoReelsSection)
    demo: {
      title: 'Our Cinematic Quality',
      subtitle: 'Watch an example of how we film. Every wedding is a movie.',
      promoBadge: 'Payment Options',
      promoTitle: 'Flexible payment plans for you',
      promoCards: [
        {
          icon: '💰',
          title: 'Pay in Full',
          description: '15% discount when you pay for your package in a single payment. The best way to make the most of your investment.',
        },
        {
          icon: '📅',
          title: 'Payment Plans',
          description: 'Book with your first payment and settle 2 months before the wedding, or split your package into interest-free monthly payments. You choose what works best for you.',
        },
      ],
    },

    // Pricing
    pricing: {
      title: 'Investment in your',
      titleHighlight: 'Love Story',
      subtitle: 'Choose the package that best fits your special day',
      paymentNote: 'We offer payment plans: 15% discount when paying in full, standard price in 2 payments, or interest-free monthly payments.',
      cta: 'Book Now',
      packages: [
        {
          name: 'Essential',
          price: '$24,900',
          currency: 'MXN (tax-free)',
          description: 'The essentials to capture your day with cinematic quality.',
          featured: false,
          features: [
            '1-day coverage (up to 8 hrs)',
            '1 Cinematic Recap video (5 to 7 min)',
            '200 Professional photos',
            'Delivery on USB, digital album & Drive',
          ],
        },
        {
          name: 'Complete',
          price: '$36,000',
          currency: 'MXN',
          description: 'The full cinema experience for your wedding. Our most requested.',
          featured: true,
          features: [
            '1-day coverage (up to 11 hrs)',
            '2 Videographers + 1 Photographer + drone operator',
            'Cinematic Recap video (8 to 10 min)',
            'Social media cineminute (1 min)',
            '2 Reels for social media',
            '450 Professional photos',
            'Delivery on USB, digital album & Drive',
          ],
        },
      ],
    },

    // FAQ
    faq: {
      headerDesktop: ['Frequently', 'Asked Questions'],
      headerMobile: ['Frequently', 'Asked Questions'],
      items: [
        {
          question: 'How do the payments and the deposit work?',
          answer: 'We offer several payment plans: (1) Pay in full with a 15% discount. (2) Standard price in 2 payments: the first when you reserve the date and the second 2 months before the wedding. (3) Interest-free monthly payments. The first payment is required to reserve the date.',
        },
        {
          question: 'What does the coverage include?',
          answer: 'We cover your wedding in Puebla on March 13th, 2027, with up to 11 hours of filming. The team includes 2 videographers, 1 photographer, and 1 certified drone operator, depending on the package you choose.',
        },
        {
          question: 'What is the delivery timeline?',
          answer: 'The recap video and the cineminute are delivered within 4 to 8 weeks, depending on the complexity of the cinematic editing. Photographs and social media reels are delivered within the first weeks after the event.',
        },
        {
          question: 'What video quality do you work with?',
          answer: 'We film in 4K resolution with professional cinematic cameras and lenses. Post-production includes cinematic color grading, professional sound design, and narrative editing that gives your video that cinema film look and feel.',
        },
        {
          question: 'How do I receive my material?',
          answer: 'You receive a physical USB drive with all your material, a digital album, and a Google Drive folder with all videos and photos, so you can view and download them anytime and keep your memories forever.',
        },
        {
          question: 'Do the prices include tax (IVA)?',
          answer: 'The Essential package is priced tax-free. If you need an invoice, the corresponding IVA (tax) is added. Please check the conditions when reserving your date.',
        },
      ],
    },

    // Footer
    footer: {
      tagline: 'Your wedding deserves to be a film',
      description: 'Contact us to learn more about our cinematic videography proposal for your wedding.',
      sections: 'Sections',
      information: 'Information',
      contact: 'Contact',
      copyright: '2026 Oasis Creativa. All rights reserved.',
      lang: 'English',
    },
  },
};

export type Translations = (typeof translations)['es'];
