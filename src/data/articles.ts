// Données centralisées des articles
export const articles = [
  {
    id: 'smart-grids-intro',
    title: { en: 'Introduction to Smart Grids', fr: 'Introduction aux Smart Grids' },
    excerpt: { 
      en: 'Discover the fundamentals of smart electrical grids and their impact on the future of energy.',
      fr: "Découvrez les fondamentaux des réseaux électriques intelligents et leur impact sur l'avenir de l'énergie."
    },
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop',
    date: '2025-12-15',
    category: { en: 'Power Systems', fr: 'Systèmes de Puissance' },
    categoryKey: 'power',
    readTime: '5 min',
  },
  {
    id: 'esp32-monitoring',
    title: { en: 'ESP32 for Energy Monitoring', fr: 'ESP32 pour le Monitoring Énergétique' },
    excerpt: {
      en: 'Practical guide to creating an energy monitoring system with ESP32 and MQTT.',
      fr: 'Guide pratique pour créer un système de monitoring énergétique avec ESP32 et MQTT.'
    },
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    date: '2025-11-28',
    category: { en: 'IoT', fr: 'IoT' },
    categoryKey: 'iot',
    readTime: '8 min',
  },
  {
    id: 'matlab-power-flow',
    title: { en: 'Power Flow Analysis with MATLAB', fr: 'Analyse de Flux de Puissance avec MATLAB' },
    excerpt: {
      en: 'Complete tutorial on power flow analysis using MATLAB and Simulink.',
      fr: "Tutoriel complet sur l'analyse de flux de puissance utilisant MATLAB et Simulink."
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    date: '2025-10-10',
    category: { en: 'Research', fr: 'Recherche' },
    categoryKey: 'research',
    readTime: '12 min',
  },
  {
    id: 'rust-embedded',
    title: { en: 'Rust for Embedded Systems', fr: 'Rust pour les Systèmes Embarqués' },
    excerpt: {
      en: 'Why Rust is becoming the go-to language for safe and efficient embedded development.',
      fr: 'Pourquoi Rust devient le langage de référence pour un développement embarqué sûr et efficace.'
    },
    image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=800&auto=format&fit=crop',
    date: '2025-09-05',
    category: { en: 'Embedded', fr: 'Embarqué' },
    categoryKey: 'embedded',
    readTime: '10 min',
  },
];

export const articleCategories = {
  all: { en: 'All', fr: 'Tous' },
  power: { en: 'Power Systems', fr: 'Systèmes de Puissance' },
  iot: { en: 'IoT', fr: 'IoT' },
  embedded: { en: 'Embedded', fr: 'Embarqué' },
  research: { en: 'Research', fr: 'Recherche' },
};

export type ArticleCategory = keyof typeof articleCategories;
