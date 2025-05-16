'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Quote, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophie Martin',
    role: 'Propriétaire',
    image: '/images/testimonial-1.jpg',
    content: 'RENTABILIO a transformé la gestion de mon bien immobilier. Leur expertise et leur accompagnement personnalisé ont permis d\'augmenter significativement ma rentabilité.',
    rating: 5
  },
  {
    name: 'Thomas Dubois',
    role: 'Investisseur',
    image: '/images/testimonial-2.jpg',
    content: 'Une équipe professionnelle et réactive. Leur analyse du marché est précise et leurs recommandations sont toujours pertinentes. Je recommande vivement leurs services.',
    rating: 5
  },
  {
    name: 'Emma Laurent',
    role: 'Propriétaire',
    image: '/images/testimonial-3.jpg',
    content: 'Grâce à RENTABILIO, j\'ai pu optimiser la gestion de mon bien locatif. Leur approche personnalisée et leur expertise ont fait toute la différence.',
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4 shadow-sm">
            <Quote className="w-4 h-4" />
            <span>Témoignages</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Ce que nos clients disent
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Découvrez les expériences de nos clients qui ont choisi RENTABILIO pour optimiser
            la rentabilité de leur bien immobilier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
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
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
            <span>Voir plus de témoignages</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 