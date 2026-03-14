import { type ArticleData, validateArticles } from './schemas';
import { createDataLoader } from './loaders';
import { articleCategories, type ArticleCategory } from './categories';

// Données brutes des articles
const rawArticles = [
  {
    id: 'smart-grids-intro',
    slug: 'smart-grids-intro',
    title: { en: 'Introduction to Smart Grids', fr: 'Introduction aux Smart Grids' },
    excerpt: {
      en: 'Discover the fundamentals of smart electrical grids and their impact on the future of energy.',
      fr: "Découvrez les fondamentaux des réseaux électriques intelligents et leur impact sur l'avenir de l'énergie."
    },
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop',
    date: '2025-12-15',
    category: { en: 'Electrical Networks', fr: 'Réseaux Électriques' },
    categoryKey: 'power' as ArticleCategory,
    readTime: '5 min',
  },
  {
    id: 'esp32-monitoring',
    slug: 'esp32-monitoring',
    title: { en: 'ESP32 for Energy Monitoring', fr: 'ESP32 pour le Monitoring Énergétique' },
    excerpt: {
      en: 'Practical guide to creating an energy monitoring system with ESP32 and MQTT.',
      fr: 'Guide pratique pour créer un système de monitoring énergétique avec ESP32 et MQTT.'
    },
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    date: '2025-11-28',
    category: { en: 'Internet of Things', fr: 'Internet des Objets' },
    categoryKey: 'iot' as ArticleCategory,
    readTime: '8 min',
  },
  {
    id: 'ai-power-prediction',
    slug: 'ai-power-prediction',
    title: { en: 'AI for Power Consumption Prediction', fr: 'IA pour la Prédiction de Consommation Électrique' },
    excerpt: {
      en: 'Using machine learning algorithms to predict electrical power consumption in smart grids.',
      fr: "Utilisation d'algorithmes d'apprentissage automatique pour prédire la consommation électrique dans les smart grids."
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    date: '2025-12-01',
    category: { en: 'Artificial Intelligence', fr: 'Intelligence Artificielle' },
    categoryKey: 'ai' as ArticleCategory,
    readTime: '12 min',
  },
  {
    id: 'solar-panel-optimization',
    slug: 'solar-panel-optimization',
    title: { en: 'Solar Panel Efficiency Optimization', fr: 'Optimisation du Rendement des Panneaux Solaires' },
    excerpt: {
      en: 'Techniques and algorithms for maximizing solar panel efficiency and energy harvesting.',
      fr: "Techniques et algorithmes pour maximiser l'efficacité des panneaux solaires et la récolte d'énergie."
    },
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop',
    date: '2025-11-15',
    category: { en: 'Renewable Energy', fr: 'Énergies Renouvelables' },
    categoryKey: 'renewable' as ArticleCategory,
    readTime: '10 min',
  },
  {
    id: 'industrial-robot-control',
    slug: 'industrial-robot-control',
    title: { en: 'Industrial Robot Control Systems', fr: 'Systèmes de Contrôle de Robots Industriels' },
    excerpt: {
      en: 'Design and implementation of control systems for industrial robotics applications.',
      fr: "Conception et implémentation de systèmes de contrôle pour applications robotiques industrielles."
    },
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    date: '2025-10-20',
    category: { en: 'Robotics', fr: 'Robotique' },
    categoryKey: 'robotics' as ArticleCategory,
    readTime: '15 min',
  },
  {
    id: 'matlab-power-flow',
    slug: 'matlab-power-flow',
    title: { en: 'Power Flow Analysis with MATLAB', fr: 'Analyse de Flux de Puissance avec MATLAB' },
    excerpt: {
      en: 'Complete tutorial on power flow analysis using MATLAB and Simulink.',
      fr: "Tutoriel complet sur l'analyse de flux de puissance utilisant MATLAB et Simulink."
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    date: '2025-10-10',
    category: { en: 'Electrical Networks', fr: 'Réseaux Électriques' },
    categoryKey: 'power' as ArticleCategory,
    readTime: '12 min',
  },
  {
    id: 'wind-energy-systems',
    slug: 'wind-energy-systems',
    title: { en: 'Wind Energy Conversion Systems', fr: 'Systèmes de Conversion Éolienne' },
    excerpt: {
      en: 'Analysis and design of wind energy conversion systems for grid integration.',
      fr: "Analyse et conception de systèmes de conversion éolienne pour l'intégration au réseau."
    },
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop',
    date: '2025-09-25',
    category: { en: 'Renewable Energy', fr: 'Énergies Renouvelables' },
    categoryKey: 'renewable' as ArticleCategory,
    readTime: '14 min',
  },
  {
    id: 'scada-systems-guide',
    slug: 'scada-systems-guide',
    title: { en: 'Modern SCADA Systems', fr: 'Systèmes SCADA Modernes' },
    excerpt: {
      en: 'Understanding modern SCADA systems for industrial automation and power grid management.',
      fr: 'Comprendre les systèmes SCADA modernes pour l\'automatisation industrielle et la gestion des réseaux électriques.'
    },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    date: '2025-08-20',
    category: { en: 'Electrical Networks', fr: 'Réseaux Électriques' },
    categoryKey: 'power' as ArticleCategory,
    readTime: '15 min',
  },
];

// Validation et export des articles
export const articles: ArticleData[] = createDataLoader(rawArticles, validateArticles);

// Ré-exporter les catégories et types
export { articleCategories, type ArticleCategory };