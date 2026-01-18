import { type ArticleData, type ArticleCategory, validateArticles } from './schemas';

// Données brutes des articles
const rawArticles = [
  {
    id: 'smart-grids-intro',
    title: { en: 'Introduction to Smart Grids', fr: 'Introduction aux Smart Grids' },
    excerpt: { 
      en: 'Discover the fundamentals of smart electrical grids and their impact on the future of energy.',
      fr: "Découvrez les fondamentaux des réseaux électriques intelligents et leur impact sur l'avenir de l'énergie."
    },
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop',
    date: '2025-12-15',
    category: { en: 'Power Systems', fr: 'Électroénergétique' },
    categoryKey: 'power' as ArticleCategory,
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
    categoryKey: 'iot' as ArticleCategory,
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
    categoryKey: 'research' as ArticleCategory,
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
    categoryKey: 'iot' as ArticleCategory, // Regroupé avec IoT
    readTime: '10 min',
  },
  {
    id: 'scada-systems-guide',
    title: { en: 'Modern SCADA Systems', fr: 'Systèmes SCADA Modernes' },
    excerpt: {
      en: 'Understanding modern SCADA systems for industrial automation and power grid management.',
      fr: 'Comprendre les systèmes SCADA modernes pour l\'automatisation industrielle et la gestion des réseaux électriques.'
    },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    date: '2025-08-20',
    category: { en: 'Power Systems', fr: 'Électroénergétique' },
    categoryKey: 'power' as ArticleCategory,
    readTime: '15 min',
  },
];

// Validation et export des articles
export const articles: ArticleData[] = validateArticles(rawArticles);

export const articleCategories = {
  all: { en: 'All', fr: 'Tous' },
  power: { en: 'Power Systems', fr: 'Électroénergétique' },
  iot: { en: 'IoT & Embedded', fr: 'IoT & Embarqué' },
  research: { en: 'Research', fr: 'Recherche' },
};

export type { ArticleCategory };