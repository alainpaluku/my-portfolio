// Données centralisées des projets
export const projects = [
  {
    id: 'proofchains',
    slug: 'proofchains',
    title: { en: 'ProofChains', fr: 'ProofChains' },
    category: { en: 'Blockchain / Web3', fr: 'Blockchain / Web3' },
    categoryKey: 'blockchain',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop',
    tags: ['Cardano', 'NFT', 'TypeScript', 'Next.js'],
    github: 'https://github.com/alainpaluku/proofchains',
    demo: 'https://proofchains.org/',
    featured: true,
  },
  {
    id: 'smart-grid',
    slug: 'smart-grid',
    title: { en: 'Smart Grid Monitoring System', fr: 'Système de Monitoring Smart Grid' },
    category: { en: 'IoT / Power Systems', fr: 'IoT / Systèmes de Puissance' },
    categoryKey: 'iot',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    tags: ['ESP32', 'MQTT', 'Rust', 'Dashboard'],
  },
  {
    id: 'power-flow',
    slug: 'power-flow',
    title: { en: 'Power Flow Analysis Tool', fr: 'Outil d\'Analyse de Flux de Puissance' },
    category: { en: 'Software / CAD', fr: 'Logiciel / CAO' },
    categoryKey: 'software',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    tags: ['MATLAB', 'Simulink', 'GUI'],
  },
  {
    id: 'energy-meter',
    slug: 'energy-meter',
    title: { en: 'Energy Meter IoT Device', fr: 'Compteur Énergétique IoT' },
    category: { en: 'Embedded Systems', fr: 'Systèmes Embarqués' },
    categoryKey: 'embedded',
    image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=800&auto=format&fit=crop',
    tags: ['STM32', 'KiCad', 'LoRaWAN'],
  },
  {
    id: 'renewable',
    slug: 'renewable',
    title: { en: 'Renewable Integration Study', fr: 'Étude d\'Intégration Renouvelable' },
    category: { en: 'Research / Analysis', fr: 'Recherche / Analyse' },
    categoryKey: 'research',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop',
    tags: ['ETAP', 'PSCAD', 'Solar PV'],
  },
  {
    id: 'scada',
    slug: 'scada',
    title: { en: 'SCADA Dashboard', fr: 'Tableau de Bord SCADA' },
    category: { en: 'Software / CAD', fr: 'Logiciel / CAO' },
    categoryKey: 'software',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    tags: ['TypeScript', 'React', 'Golang'],
  },
];

export const projectCategories = {
  all: { en: 'All', fr: 'Tous' },
  blockchain: { en: 'Blockchain', fr: 'Blockchain' },
  iot: { en: 'IoT', fr: 'IoT' },
  embedded: { en: 'Embedded', fr: 'Embarqué' },
  software: { en: 'Software', fr: 'Logiciel' },
  research: { en: 'Research', fr: 'Recherche' },
};

export type ProjectCategory = keyof typeof projectCategories;
