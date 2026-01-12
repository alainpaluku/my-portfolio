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
    id: 'gohome',
    slug: 'gohome',
    title: { en: 'GoHome', fr: 'GoHome' },
    category: { en: 'IoT / Home Automation', fr: 'IoT / Domotique' },
    categoryKey: 'iot',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop',
    tags: ['Go', 'React', 'gRPC', 'Raspberry Pi'],
    github: 'https://github.com/alainpaluku/gohome',
    featured: true,
  },
  {
    id: 'pcb-defect-detector',
    slug: 'pcb-defect-detector',
    title: { en: 'PCB Defect Detector', fr: 'PCB Defect Detector' },
    category: { en: 'AI / Computer Vision', fr: 'IA / Vision par Ordinateur' },
    categoryKey: 'software',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning'],
    github: 'https://github.com/alainpaluku/pcb-defect-detector',
    featured: true,
  },
];

export const projectCategories = {
  all: { en: 'All', fr: 'Tous' },
  blockchain: { en: 'Blockchain', fr: 'Blockchain' },
  iot: { en: 'IoT', fr: 'IoT' },
  software: { en: 'Software', fr: 'Logiciel' },
};

export type ProjectCategory = keyof typeof projectCategories;
