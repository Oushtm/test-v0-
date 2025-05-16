'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "Investisseur Immobilier",
    image: "/images/testimonial-1.jpg",
    content: "RNB a complètement transformé ma façon d'investir dans l'immobilier. Leurs analyses détaillées et leur accompagnement personnalisé m'ont permis de faire des investissements rentables.",
    rating: 5
  },
  {
    id: 2,
    name: "Thomas Dubois",
    role: "Propriétaire de Portefeuille",
    image: "/images/testimonial-2.jpg",
    content: "La plateforme est intuitive et les fonctionnalités d'analyse sont impressionnantes. J'ai pu diversifier mon portefeuille immobilier avec confiance grâce à RNB.",
    rating: 5
  },
  {
    id: 3,
    name: "Marie Laurent",
    role: "Consultante Immobilière",
    image: "/images/testimonial-3.jpg",
    content: "En tant que professionnelle du secteur, je recommande vivement RNB à mes clients. Leur expertise et leurs outils sont vraiment à la pointe de la technologie.",
    rating: 5
  }
];

export default function Testimonials() {
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
            Ce Que Disent Nos <span className="text-gradient">Clients</span>
          </h2>
          <p className="section-subtitle">
            Découvrez les expériences de nos investisseurs satisfaits qui ont trouvé leur bien idéal grâce à notre plateforme.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="relative mb-6">
                <Quote className="absolute -top-4 -left-2 w-8 h-8 text-indigo-100" />
                <p className="text-gray-700 relative z-10">
                  {testimonial.content}
                </p>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 px-6 py-3 rounded-xl">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="font-medium text-indigo-900">
              4.9/5 basé sur plus de 1000 avis
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 