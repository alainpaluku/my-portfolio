import { type ProjectData, validateProjects } from './schemas';
import { createDataLoader } from './loaders';
import { projectCategories, type ProjectCategory } from './categories';

// Données brutes des projets
const rawProjects = [
  {
    id: 'ai-power-prediction',
    slug: 'ai-power-prediction',
    title: { en: 'AI Power Prediction System', fr: 'Système de Prédiction IA' },
    category: { en: 'Artificial Intelligence', fr: 'Intelligence Artificielle' },
    categoryKey: 'ai' as ProjectCategory,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    tags: ['Python', 'TensorFlow', 'Machine Learning', 'Power Systems'],
    github: 'https://github.com/alainpaluku/ai-power-prediction',
    featured: true,
  },
  {
    id: 'gohome',
    slug: 'gohome',
    title: { en: 'GoHome IoT Platform', fr: 'Plateforme IoT GoHome' },
    category: { en: 'Internet of Things', fr: 'Internet des Objets' },
    categoryKey: 'iot' as ProjectCategory,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop',
    tags: ['Go', 'React', 'gRPC', 'Raspberry Pi'],
    github: 'https://github.com/alainpaluku/gohome',
    featured: true,
  },
  {
    id: 'industrial-robot-arm',
    slug: 'industrial-robot-arm',
    title: { en: 'Industrial Robot Arm Controller', fr: 'Contrôleur de Bras Robotique' },
    category: { en: 'Robotics', fr: 'Robotique' },
    categoryKey: 'robotics' as ProjectCategory,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    tags: ['C++', 'ROS', 'Arduino', 'Servo Control'],
    github: 'https://github.com/alainpaluku/robot-arm-controller',
    featured: true,
  },
  {
    id: 'smart-grid-simulator',
    slug: 'smart-grid-simulator',
    title: { en: 'Smart Grid Simulator', fr: 'Simulateur de Smart Grid' },
    category: { en: 'Electrical Networks', fr: 'Réseaux Électriques' },
    categoryKey: 'power' as ProjectCategory,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop',
    tags: ['MATLAB', 'Simulink', 'Power Systems', 'Grid Analysis'],
    github: 'https://github.com/alainpaluku/smart-grid-simulator',
    featured: true,
  },
  {
    id: 'solar-mppt-controller',
    slug: 'solar-mppt-controller',
    title: { en: 'Solar MPPT Controller', fr: 'Contrôleur MPPT Solaire' },
    category: { en: 'Renewable Energy', fr: 'Énergies Renouvelables' },
    categoryKey: 'renewable' as ProjectCategory,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop',
    tags: ['C', 'STM32', 'Power Electronics', 'Solar Energy'],
    github: 'https://github.com/alainpaluku/solar-mppt-controller',
    featured: true,
  },
  {
    id: 'secure-communication-protocol',
    slug: 'secure-communication-protocol',
    title: { en: 'Secure IoT Communication Protocol', fr: 'Protocole de Communication IoT Sécurisé' },
    category: { en: 'Cryptography', fr: 'Cryptographie' },
    categoryKey: 'crypto' as ProjectCategory,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop',
    tags: ['Rust', 'Cryptography', 'IoT Security', 'Embedded'],
    github: 'https://github.com/alainpaluku/secure-iot-protocol',
    featured: true,
  },
  {
    id: 'iot-energy-monitor',
    slug: 'iot-energy-monitor',
    title: { en: 'IoT Energy Monitor', fr: 'Moniteur Énergétique IoT' },
    category: { en: 'Internet of Things', fr: 'Internet des Objets' },
    categoryKey: 'iot' as ProjectCategory,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    tags: ['ESP32', 'MQTT', 'InfluxDB', 'Grafana'],
    github: 'https://github.com/alainpaluku/iot-energy-monitor',
    featured: false,
  },
  {
    id: 'wind-turbine-optimizer',
    slug: 'wind-turbine-optimizer',
    title: { en: 'Wind Turbine Optimizer', fr: 'Optimiseur d\'Éolienne' },
    category: { en: 'Renewable Energy', fr: 'Énergies Renouvelables' },
    categoryKey: 'renewable' as ProjectCategory,
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop',
    tags: ['Python', 'Control Systems', 'Wind Energy', 'Optimization'],
    github: 'https://github.com/alainpaluku/wind-turbine-optimizer',
    featured: false,
  },
];

// Validation et export des projets
export const projects: ProjectData[] = createDataLoader(rawProjects, validateProjects);

// Ré-exporter les catégories et types
export { projectCategories, type ProjectCategory };