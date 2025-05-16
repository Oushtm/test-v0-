'use client';

import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Building2, 
  Calculator, 
  LineChart, 
  MapPin, 
  Shield 
} from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Analyse de Marché",
    description: "Accédez à des analyses détaillées du marché immobilier avec des données en temps réel et des prévisions fiables.",
    icon: BarChart3,
    color: "indigo"
  },
  {
    id: 2,
    title: "Gestion de Portefeuille",
    description: "Gérez efficacement votre portefeuille immobilier avec des outils de suivi et d'optimisation intégrés.",
    icon: Building2,
    color: "purple"
  },
  {
    id: 3,
    title: "Calcul de Rentabilité",
    description: "Calculez rapidement la rentabilité potentielle de vos investissements avec notre outil d'analyse financière.",
    icon: Calculator,
    color: "pink"
  },
  {
    id: 4,
    title: "Suivi des Performances",
    description: "Suivez la performance de vos investissements avec des graphiques et rapports détaillés.",
    icon: LineChart,
    color: "blue"
  },
  {
    id: 5,
    title: "Localisation Intelligente",
    description: "Trouvez les meilleures opportunités d'investissement grâce à notre système de géolocalisation avancé.",
    icon: MapPin,
    color: "green"
  },
  {
    id: 6,
    title: "Sécurité des Données",
    description: "Vos données sont protégées par les dernières technologies de sécurité et de cryptage.",
    icon: Shield,
    color: "red"
  }
];

const colorClasses = {
  indigo: "bg-indigo-50 text-indigo-600",
  purple: "bg-purple-50 text-purple-600",
  pink: "bg-pink-50 text-pink-600",
  blue: "bg-blue-50 text-blue-600",
  green: "bg-green-50 text-green-600",
  red: "bg-red-50 text-red-600"
};

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Nos <span className="text-gradient">Fonctionnalités</span>
          </h2>
          <p className="section-subtitle">
            Découvrez les outils puissants qui vous aideront à prendre les meilleures décisions d'investissement immobilier.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="feature-card group"
            >
              <div className={`feature-icon ${colorClasses[feature.color as keyof typeof colorClasses]} group-hover:scale-110`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="btn-modern">
            Explorer Toutes les Fonctionnalités
          </button>
        </motion.div>
      </div>
    </section>
  );
} 