'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Comment fonctionne le processus d'investissement avec Rentabilio ?",
    answer: "Notre processus d'investissement est simple et transparent. Nous vous accompagnons à chaque étape, de l'identification des opportunités jusqu'à la gestion locative. Nos experts analysent le marché, sélectionnent les meilleurs biens et vous conseillent sur les stratégies d'investissement les plus adaptées à vos objectifs."
  },
  {
    question: "Quel est le montant minimum pour investir avec Rentabilio ?",
    answer: "Le montant minimum d'investissement varie selon les opportunités disponibles et les types de biens. Nous travaillons avec différents budgets et pouvons vous proposer des solutions adaptées à votre capacité d'investissement."
  },
  {
    question: "Quels types de biens proposez-vous ?",
    answer: "Nous proposons une sélection variée de biens immobiliers : studios, appartements et villas dans les quartiers les plus prisés de Casablanca. Chaque bien est soigneusement sélectionné pour son potentiel de rentabilité et sa qualité."
  },
  {
    question: "Comment estimez-vous la rentabilité d'un bien ?",
    answer: "Notre estimation de rentabilité prend en compte plusieurs facteurs : l'emplacement, les tendances du marché, les revenus locatifs potentiels, les charges et les perspectives de plus-value. Nous utilisons des données réelles du marché pour fournir des estimations précises."
  },
  {
    question: "Proposez-vous des services de gestion locative ?",
    answer: "Oui, nous proposons une gestion locative complète incluant la recherche de locataires, la gestion des réservations, l'entretien du bien, et le suivi des revenus. Notre objectif est de maximiser votre rentabilité tout en minimisant vos contraintes."
  },
  {
    question: "Quels sont les frais associés à vos services ?",
    answer: "Nos frais sont transparents et compétitifs. Ils varient selon les services choisis et sont clairement détaillés avant tout engagement. Nous nous efforçons de maintenir un excellent rapport qualité-prix pour optimiser votre investissement."
  },
  {
    question: "Comment puis-je financer mon investissement immobilier ?",
    answer: "Nous travaillons avec plusieurs partenaires financiers pour vous proposer les meilleures solutions de financement. Nos conseillers vous aident à structurer votre financement de manière optimale, en tenant compte de votre situation personnelle."
  },
  {
    question: "Est-ce que j'aurai besoin d'un apport personnel ?",
    answer: "Un apport personnel est généralement nécessaire pour un investissement immobilier. Le montant varie selon le projet et les conditions de financement. Nos conseillers peuvent vous aider à déterminer l'apport optimal pour votre situation."
  },
  {
    question: "Quels sont les risques liés à l'investissement immobilier ?",
    answer: "Comme tout investissement, l'immobilier comporte des risques : fluctuations du marché, vacance locative, charges imprévues. Nous vous aidons à comprendre et à minimiser ces risques grâce à notre expertise et notre accompagnement personnalisé."
  },
  {
    question: "Comment puis-je prendre rendez-vous avec un conseiller Rentabilio ?",
    answer: "Vous pouvez facilement prendre rendez-vous avec l'un de nos conseillers en nous contactant par téléphone, email ou via notre formulaire en ligne. Nous nous engageons à vous répondre dans les plus brefs délais pour organiser une consultation personnalisée."
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
            Trouvez les réponses à vos questions sur l'investissement immobilier avec Rentabilio.
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