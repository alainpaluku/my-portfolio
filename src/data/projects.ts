import { type ProjectData, validateProjects } from './schemas';
import { createDataLoader } from './loaders';
import { projectCategories, type ProjectCategory } from './categories';

// Données brutes des projets
const rawProjects = [
  {
    id: 'proofchains',
    slug: 'proofchains',
    title: { en: 'ProofChains', fr: 'ProofChains' },
    category: { en: 'Blockchain / Web3', fr: 'Blockchain / Web3' },
    categoryKey: 'blockchain' as ProjectCategory,
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
    categoryKey: 'iot' as ProjectCategory,
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
    categoryKey: 'software' as ProjectCategory,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning'],
    github: 'https://github.com/alainpaluku/pcb-defect-detector',
    featured: true,
  },
  {
    id: 'smart-grid-simulator',
    slug: 'smart-grid-simulator',
    title: { en: 'Smart Grid Simulator', fr: 'Simulateur de Smart Grid' },
    category: { en: 'Power Systems', fr: 'Électroénergétique' },
    categoryKey: 'software' as ProjectCategory,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop',
    tags: ['MATLAB', 'Simulink', 'Power Systems', 'Renewable Energy'],
    github: 'https://github.com/alainpaluku/smart-grid-simulator',
    featured: false,
  },
  {
    id: 'iot-energy-monitor',
    slug: 'iot-energy-monitor',
    title: { en: 'IoT Energy Monitor', fr: 'Moniteur Énergétique IoT' },
    category: { en: 'IoT / Energy', fr: 'IoT / Énergie' },
    categoryKey: 'iot' as ProjectCategory,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    tags: ['ESP32', 'MQTT', 'InfluxDB', 'Grafana'],
    github: 'https://github.com/alainpaluku/iot-energy-monitor',
    featured: false,
  },
];

// Validation et export des projets
export const projects: ProjectData[] = createDataLoader(rawProjects, validateProjects);

// Ré-exporter les catégories et types
export { projectCategories, type ProjectCategory };