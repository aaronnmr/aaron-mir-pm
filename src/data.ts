// ============================================================
//  📝 ARCHIVO DE CONTENIDO DEL PORTFOLIO
//  Edita solo este archivo para actualizar tu portfolio.
//  No necesitas tocar ningún otro archivo de código.
// ============================================================

export const portfolioData = {

  // --- TU INFORMACIÓN PERSONAL ---
  name: "Aaron Mir",
  title: "Product Manager",
  tagline: "Aligning user needs with business goals to build trustworthy, high-converting digital experiences",
  about: "Strategic Product Manager and former Design Lead with extensive experience driving digital initiatives across international markets. For over 1.5 years, I owned the visual strategy and digital execution for a German enterprise, managing the complete product lifecycle from conceptualization to cross-channel deployment. I specialize in translating business objectives into actionable product strategies that drive measurable growth.",

  // --- PROYECTOS ---
  // Para añadir un proyecto, copia uno de los bloques de abajo y pégalo al final de la lista.
  // Para las imágenes: pon el archivo en src/imports/ y escribe la ruta relativa en "image".
  // Si no tienes imagen todavía, deja image: null
  projects: [
    {
      id: 1,
      title: "Xpirit - one app, every workouts",
      description: "Product strategy and design leadership for a comprehensive fitness tracking platform that centralizes all athlete data in one place. Athletes can connect their wearable devices and gadgets to monitor training sessions, track pace (km/h), analyze recovery metrics, monitor sleep patterns, and view progress across multiple workout types. The unified dashboard transforms fragmented fitness data into actionable insights.",
image: "./assets/projects/xpirit_apphero.png",
      tags: ["Mobile App", "Health & Fitness", "IoT Integration"],
      metrics: ["Multi-device connectivity", "Real-time performance tracking", "Unified user experience"],
      link: "https://alluring-queen-5aa.notion.site/Product-Portfolio-Xpirit-Unified-Athlete-Dashboard-3730763cf3088044966dfb738ed3a4f0",  // Cambia por la URL del case study cuando lo tengas
    },
    {
      id: 2,
      title: "WeRealty - Real Estate CRM & Scheduling App",
      description: "Product strategy and UX design for a comprehensive real estate management platform tailored for property advisors. The app serves as a centralized directory for managing clients and properties, integrated with a smart calendar system for scheduling and tracking property visits. Features include client profiles, property listings, visit reminders, and financial calculators. Fully localized in Spanish.",
      image: "./imports/werealty.png",
      tags: ["Real Estate", "CRM", "Mobile App", "Spanish"],
      metrics: ["Client & property management", "Calendar integration", "Spanish interface"],
      link: "https://app.notion.com/p/Product-Portfolio-We-Realty-Real-Estate-CRM-3730763cf30880ff847bf6f3b6e1cef8?source=copy_link",
    },
    {
      id: 3,
      title: "Dynadion - Athletic Performance E-commerce",
      description: "End-to-end Shopify design and implementation for a German sports performance brand. Created a clean, minimalist e-commerce experience positioning 'athleceuticals' at the intersection of athletics and pharmaceuticals. Designed modular product categorization, integrated trust signals (dermatologically tested, climate-neutral shipping), and built educational content around proprietary technologies.",
      image: null, // 🎯 Añade una captura de pantalla en src/imports/ y pon la ruta aquí
      tags: ["Shopify", "E-commerce", "German Market", "Sports"],
      metrics: ["Complete brand identity", "Multi-category product system", "Conversion optimization"],
      link: "https://dynadion.de/",
    },

    // 🎯 PARA AÑADIR UN NUEVO PROYECTO, copia esto y rellénalo:
    // {
    //   id: 4,
    //   title: "Nombre del proyecto",
    //   description: "Descripción del proyecto...",
    //   image: "./imports/nombre_imagen.png",  // o null si no tienes imagen
    //   tags: ["Tag 1", "Tag 2"],
    //   metrics: ["Métrica 1", "Métrica 2"],
    //   link: "https://...",
    // },
  ],

  // --- SKILLS ---
  // Para añadir una categoría nueva, añade una entrada más al objeto.
  // Para añadir un skill dentro de una categoría, añádelo al array correspondiente.
  skills: {
    "Product Strategy": [
      "Product Roadmapping",
      "Vision & Strategy",
      "Cross-functional Leadership",
      "Stakeholder Alignment",
    ],
    "E-commerce & Platforms": [
      "WordPress",
      "Shopify",
      "Conversion Optimization",
      "Digital Strategy",
    ],
    "Design & Brand": [
      "Design Leadership",
      "Visual Strategy",
      "Brand Perception",
      "Asset Pipeline Management",
    ],
    "International Operations": [
      "European Standards",
      "English & German Fluency",
      "Cross-cultural Teams",
      "Global Markets",
    ],
  },

  // --- CONTACTO ---
  contact: {
    email: "aaronmr27@outlook.com",
    linkedin: "https://www.linkedin.com/in/aaron-mirmartin/",
    github: null, 
    cv: "https://www.dropbox.com/scl/fi/4r8i3wkhshoh7yjak76zp/Aaron-my-cv-2026.pdf?rlkey=xm2kr6g8t9avc94cvj7wdwbtj&st=k7oasba4&dl=0",// Pon tu URL de GitHub aquí si quieres mostrarlo, o deja null
  },
};

