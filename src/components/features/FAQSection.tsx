'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Comment fonctionne la simulation de rentabilité ?',
    answer: 'Notre simulateur analyse plusieurs facteurs clés comme le prix d\'achat, les frais de notaire, les travaux éventuels, les charges, les impôts et le loyer potentiel pour calculer votre rentabilité brute et nette. Vous pouvez ajuster tous ces paramètres en temps réel pour voir leur impact.'
  },
  {
    question: 'Quels sont les frais à prendre en compte ?',
    answer: 'Les principaux frais à considérer sont : les frais de notaire (environ 7-8%), les travaux de rénovation, les charges de copropriété, les impôts (taxe foncière, impôt sur le revenu), les assurances, et les frais de gestion si vous passez par une agence.'
  },
  {
    question: 'Comment estimer le loyer potentiel ?',
    answer: 'Le loyer potentiel dépend de plusieurs facteurs : la localisation, la surface, l\'état du bien, les équipements, et le marché locatif local. Notre simulateur utilise des données réelles du marché pour vous donner une estimation précise.'
  },
  {
    question: 'Quelle est la différence entre rentabilité brute et nette ?',
    answer: 'La rentabilité brute est calculée en divisant le loyer annuel par le prix d\'achat. La rentabilité nette prend en compte tous les frais (charges, impôts, travaux, etc.) pour vous donner une vision plus réaliste de votre investissement.'
  },
  {
    question: 'Comment optimiser la fiscalité de mon investissement ?',
    answer: 'Plusieurs dispositifs fiscaux existent pour optimiser votre investissement locatif : le régime micro-foncier, le régime réel, la LMNP, ou encore le Pinel. Notre simulateur vous aide à comparer ces différentes options.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-sm text-blue-400 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Questions fréquentes
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Trouvez les réponses à vos questions sur l'investissement locatif et notre simulateur.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
              >
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? 'max-h-96 py-4 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-medium hover:bg-blue-600 transition-all duration-300"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 