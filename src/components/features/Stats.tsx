'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  Building2, 
  Euro, 
  TrendingUp 
} from 'lucide-react';

const stats = [
  {
    id: 1,
    number: "10K+",
    label: "Investisseurs Actifs",
    icon: Users,
    color: "indigo"
  },
  {
    id: 2,
    number: "5K+",
    label: "Biens Analysés",
    icon: Building2,
    color: "purple"
  },
  {
    id: 3,
    number: "€500M+",
    label: "Investissements Gérés",
    icon: Euro,
    color: "pink"
  },
  {
    id: 4,
    number: "15%",
    label: "Rentabilité Moyenne",
    icon: TrendingUp,
    color: "green"
  }
];

const colorClasses = {
  indigo: "bg-indigo-50 text-indigo-600",
  purple: "bg-purple-50 text-purple-600",
  pink: "bg-pink-50 text-pink-600",
  green: "bg-green-50 text-green-600"
};

export default function Stats() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Nos <span className="text-gradient">Chiffres Clés</span>
          </h2>
          <p className="section-subtitle">
            Découvrez l'impact de Rentabilio sur le marché de l'investissement immobilier.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="stat-card group"
            >
              <div className={`w-16 h-16 rounded-xl ${colorClasses[stat.color as keyof typeof colorClasses]} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
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
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-xl shadow-lg">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <span className="font-medium text-gray-900">
              Croissance continue de notre communauté d'investisseurs
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 