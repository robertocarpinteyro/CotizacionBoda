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
        'Cobertura cinematográfica de 2 días para el momento',
        'más importante de tu vida. 4 y 5 de Agosto.',
      ],
      mobilePhrases: ['Tu Boda,', 'Nuestra Película'],
      mobileParagraphPhrases: [
        'Cobertura cinematográfica de 2 días',
        'para el momento más importante de tu vida.',
      ],
      dateBadge: '4 y 5 de Agosto',
      cta: 'Ver Inversión',
    },

    // Coverage (ContentPackageSection)
    coverage: {
      title: 'Cobertura Completa del Evento',
      subtitle: '2 Días de filmación cinematográfica — 4 y 5 de Agosto',
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
          description: 'Desde el primer baile hasta la fiesta, documentamos toda la celebración con iluminación y encuadres profesionales. Hasta 10 hrs de cobertura.',
        },
        {
          title: 'Equipo Profesional',
          description: '2 Videógrafos profesionales, 1 Operador de drone certificado y 1 Staff de apoyo. Todo el equipo necesario para una producción cinematográfica.',
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
          title: '5 Reels para Redes Sociales',
          description: 'Hasta 40 segundos cada uno, optimizados para Instagram y TikTok. Contenido perfecto para compartir los mejores momentos de tu boda.',
          badge: '5 Videos',
        },
        {
          title: 'Video 4K Highlight',
          description: 'De 4 a 6 minutos con lo mejor de tu boda. Editado con calidad cinematográfica, color grading profesional y música que complementa cada momento.',
          badge: '4-6 min',
        },
        {
          title: 'Cineminuto Highlights',
          description: 'Video de 1 minuto con los momentos más épicos de tu boda. Perfecto para compartir en redes sociales y revivir la emoción en un instante.',
          badge: '1 min',
        },
        {
          title: 'Entrega Digital + USB Físico',
          description: 'Landing page personalizada para ver y descargar tu contenido en cualquier momento, más una USB física con todo tu material en la más alta calidad.',
          badge: 'Digital + Físico',
        },
      ],
    },

    // Demo & Promo (AutoReelsSection)
    demo: {
      title: 'Nuestra Calidad Cinematográfica',
      subtitle: 'Mira un ejemplo de cómo filmamos. Cada boda es una película.',
      promoBadge: 'Promoción Especial',
      promoTitle: 'Aparta este mes y obtén de regalo',
      promoCards: [
        {
          icon: '📸',
          title: '30 Fotografías Profesionales',
          description: 'Incluidas en tu paquete sin costo adicional. 30 fotografías editadas profesionalmente de los mejores momentos de tu boda.',
        },
        {
          icon: '💌',
          title: 'Invitaciones Digitales',
          description: 'Landing page personalizada con formulario de asistencia para tus invitados. Envía invitaciones por correo electrónico a tus seres queridos de forma elegante y moderna.',
        },
      ],
    },

    // Pricing
    pricing: {
      title: 'Inversión en tu',
      titleHighlight: 'Historia de Amor',
      price: '$85,000',
      currency: 'MXN',
      paymentNotes: [
        { label: 'Transferencia o Tarjeta de Crédito:', value: '$85,000 + IVA' },
        { label: 'Pago en Efectivo:', value: '$85,000 (sin IVA)' },
      ],
      cta: 'Apartar Ahora',
      features: [
        'Cobertura completa de 2 días (4 y 5 de Agosto)',
        'Getting ready, ceremonia y recepción (hasta 10 hrs por día)',
        '2 Videógrafos profesionales',
        '1 Operador de drone certificado',
        '1 Staff de apoyo en producción',
        '5 Reels de hasta 40 seg para redes sociales',
        'Video 4K Highlight de 4-6 minutos',
        'Cineminuto Highlights de 1 minuto',
        'Entrega digital en landing page personalizada',
        'Entrega en USB físico y digital',
      ],
    },

    // FAQ
    faq: {
      headerDesktop: ['Preguntas', 'frecuentes'],
      headerMobile: ['Preguntas', 'frecuentes'],
      items: [
        {
          question: '¿Cuánto es el anticipo para apartar la fecha?',
          answer: 'Se requiere un anticipo del 50% para apartar la fecha. El 50% restante se liquida antes del evento. Al apartar este mes, recibes de regalo 30 fotografías profesionales e invitaciones digitales para tus invitados.',
        },
        {
          question: '¿Qué incluye la cobertura de 2 días?',
          answer: 'La cobertura incluye los 2 días completos (4 y 5 de Agosto). Cubrimos desde el getting ready hasta la recepción, con hasta 10 horas de filmación por día. El equipo completo asiste ambos días: 2 videógrafos, 1 operador de drone y 1 staff.',
        },
        {
          question: '¿Cuál es el tiempo de entrega del material?',
          answer: 'Los reels para redes sociales se entregan en las primeras semanas después del evento. El video highlight 4K y el cineminuto se entregan en un plazo de 4 a 8 semanas, dependiendo de la complejidad de la edición cinematográfica.',
        },
        {
          question: '¿Qué calidad de video manejan?',
          answer: 'Filmamos en resolución 4K con cámaras y lentes cinematográficos profesionales. La post-producción incluye color grading cinematográfico, diseño sonoro profesional y edición narrativa que le da a tu video ese look y sentimiento de película de cine.',
        },
        {
          question: '¿Cómo funciona la entrega digital?',
          answer: 'Recibes una landing page personalizada donde puedes ver y descargar todo tu contenido en cualquier momento. Además, recibes una USB física con todos los archivos en la más alta calidad para que conserves tu recuerdo para siempre.',
        },
        {
          question: '¿Qué son las invitaciones digitales incluidas en la promoción?',
          answer: 'Es una landing page elegante y personalizada con los detalles de tu boda y un formulario de asistencia. Tus invitados reciben la invitación por correo electrónico, confirman su asistencia directamente en la página y tú puedes dar seguimiento a las confirmaciones de forma sencilla.',
        },
        {
          question: '¿La inversión incluye IVA?',
          answer: 'Si el pago es por transferencia bancaria o tarjeta de crédito, la inversión es de $85,000 MXN + IVA. Si el pago es en efectivo, el precio es de $85,000 MXN sin IVA.',
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
        '2-day cinematic coverage for the most',
        'important moment of your life. August 4th & 5th.',
      ],
      mobilePhrases: ['Your Wedding,', 'Our Film'],
      mobileParagraphPhrases: [
        '2-day cinematic coverage',
        'for the most important moment of your life.',
      ],
      dateBadge: 'August 4th & 5th',
      cta: 'View Investment',
    },

    // Coverage (ContentPackageSection)
    coverage: {
      title: 'Full Event Coverage',
      subtitle: '2 Days of cinematic filming — August 4th & 5th',
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
          description: 'From the first dance to the party, we document the entire celebration with professional lighting and framing. Up to 10 hours of coverage.',
        },
        {
          title: 'Professional Team',
          description: '2 Professional videographers, 1 Certified drone operator, and 1 Production support staff. The full team needed for a cinematic production.',
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
          title: '5 Social Media Reels',
          description: 'Up to 40 seconds each, optimized for Instagram and TikTok. Perfect content to share the best moments of your wedding.',
          badge: '5 Videos',
        },
        {
          title: '4K Highlight Video',
          description: '4 to 6 minutes with the best of your wedding. Edited with cinematic quality, professional color grading, and music that complements every moment.',
          badge: '4-6 min',
        },
        {
          title: 'One-Minute Highlights',
          description: '1-minute video with the most epic moments of your wedding. Perfect for sharing on social media and reliving the emotion in an instant.',
          badge: '1 min',
        },
        {
          title: 'Digital + Physical USB Delivery',
          description: 'Personalized landing page to view and download your content anytime, plus a physical USB drive with all your material in the highest quality.',
          badge: 'Digital + Physical',
        },
      ],
    },

    // Demo & Promo (AutoReelsSection)
    demo: {
      title: 'Our Cinematic Quality',
      subtitle: 'Watch an example of how we film. Every wedding is a movie.',
      promoBadge: 'Special Promotion',
      promoTitle: 'Book this month and get as a gift',
      promoCards: [
        {
          icon: '📸',
          title: '30 Professional Photos',
          description: 'Included in your package at no additional cost. 30 professionally edited photographs of the best moments of your wedding.',
        },
        {
          icon: '💌',
          title: 'Digital Invitations',
          description: 'Personalized landing page with RSVP form for your guests. Send email invitations to your loved ones in an elegant and modern way.',
        },
      ],
    },

    // Pricing
    pricing: {
      title: 'Investment in your',
      titleHighlight: 'Love Story',
      price: '$85,000',
      currency: 'MXN',
      paymentNotes: [
        { label: 'Bank Transfer or Credit Card:', value: '$85,000 + Tax (IVA)' },
        { label: 'Cash Payment:', value: '$85,000 (Tax-free)' },
      ],
      cta: 'Book Now',
      features: [
        'Full 2-day coverage (August 4th & 5th)',
        'Getting ready, ceremony & reception (up to 10 hrs per day)',
        '2 Professional videographers',
        '1 Certified drone operator',
        '1 Production support staff',
        '5 Reels up to 40 sec for social media',
        '4K Highlight Video (4-6 minutes)',
        'One-Minute Highlights video',
        'Digital delivery via personalized landing page',
        'Physical + digital USB delivery',
      ],
    },

    // FAQ
    faq: {
      headerDesktop: ['Frequently', 'Asked Questions'],
      headerMobile: ['Frequently', 'Asked Questions'],
      items: [
        {
          question: 'How much is the deposit to reserve the date?',
          answer: 'A 50% deposit is required to reserve the date. The remaining 50% is due before the event. By booking this month, you receive 30 professional photos and digital invitations for your guests as a gift.',
        },
        {
          question: 'What does the 2-day coverage include?',
          answer: 'Coverage includes the full 2 days (August 4th & 5th). We cover from getting ready to the reception, with up to 10 hours of filming per day. The full team attends both days: 2 videographers, 1 drone operator, and 1 staff member.',
        },
        {
          question: 'What is the delivery timeline?',
          answer: 'Social media reels are delivered within the first weeks after the event. The 4K highlight video and one-minute video are delivered within 4 to 8 weeks, depending on the complexity of the cinematic editing.',
        },
        {
          question: 'What video quality do you work with?',
          answer: 'We film in 4K resolution with professional cinematic cameras and lenses. Post-production includes cinematic color grading, professional sound design, and narrative editing that gives your video that cinema film look and feel.',
        },
        {
          question: 'How does the digital delivery work?',
          answer: 'You receive a personalized landing page where you can view and download all your content at any time. Additionally, you receive a physical USB drive with all files in the highest quality so you can keep your memories forever.',
        },
        {
          question: 'What are the digital invitations included in the promotion?',
          answer: 'It is an elegant and personalized landing page with your wedding details and an RSVP form. Your guests receive the invitation by email, confirm their attendance directly on the page, and you can easily track confirmations.',
        },
        {
          question: 'Does the investment include tax (IVA)?',
          answer: 'If payment is by bank transfer or credit card, the investment is $85,000 MXN + IVA (tax). If payment is in cash, the price is $85,000 MXN without IVA.',
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
