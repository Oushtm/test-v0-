'use client';

import { motion } from 'framer-motion';
import { 
  Building2, 
  Home, 
  Building, 
  Warehouse,
  Calculator,
  FileText,
  Shield,
  TrendingUp
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "Gestion Locative",
      description: "Nous prenons en charge l'ensemble des aspects de la gestion locative pour vous offrir une sérénité totale.",
      features: [
        "Sélection des locataires",
        "Gestion des contrats",
        "Suivi des paiements",
        "Maintenance et réparations"
      ]
    },
    {
      icon: Home,
      title: "Investissement Résidentiel",
      description: "Découvrez nos opportunités d'investissement dans l'immobilier résidentiel avec des rendements attractifs.",
      features: [
        "Appartements",
        "Maisons individuelles",
        "Résidences étudiantes",
        "Colocations"
      ]
    },
    {
      icon: Building,
      title: "Immobilier Commercial",
      description: "Investissez dans l'immobilier commercial avec nos solutions adaptées à vos objectifs.",
      features: [
        "Bureaux",
        "Locaux commerciaux",
        "Boutiques",
        "Espaces de coworking"
      ]
    },
    {
      icon: Warehouse,
      title: "Immobilier Industriel",
      description: "Des opportunités d'investissement dans l'immobilier industriel avec des baux longs et stables.",
      features: [
        "Entrepôts",
        "Zones logistiques",
        "Ateliers",
        "Terrains industriels"
      ]
    },
    {
      icon: Calculator,
      title: "Simulation d'Investissement",
      description: "Calculez la rentabilité de votre investissement immobilier avec nos outils de simulation.",
      features: [
        "Calcul de rentabilité",
        "Analyse de marché",
        "Étude de faisabilité",
        "Projections financières"
      ]
    },
    {
      icon: FileText,
      title: "Conseil en Investissement",
      description: "Bénéficiez de conseils personnalisés pour optimiser votre stratégie d'investissement immobilier.",
      features: [
        "Analyse personnalisée",
        "Stratégie d'investissement",
        "Optimisation fiscale",
        "Accompagnement juridique"
      ]
    },
    {
      icon: Shield,
      title: "Assurance et Protection",
      description: "Protégez votre investissement avec nos solutions d'assurance adaptées.",
      features: [
        "Assurance propriétaire",
        "Assurance loyers impayés",
        "Protection juridique",
        "Garantie dommages"
      ]
    },
    {
      icon: TrendingUp,
      title: "Gestion de Patrimoine",
      description: "Optimisez et développez votre patrimoine immobilier avec notre expertise.",
      features: [
        "Diversification",
        "Gestion de portefeuille",
        "Stratégie patrimoniale",
        "Transmission de patrimoine"
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Services
            </h1>
            <p className="text-xl text-white/90">
              Des solutions complètes pour tous vos projets d'investissement immobilier
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Prêt à Investir ?
            </h2>
            <p className="text-gray-600 mb-8">
              Contactez-nous pour discuter de votre projet d'investissement et découvrir comment nous pouvons vous accompagner.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Nous Contacter
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 