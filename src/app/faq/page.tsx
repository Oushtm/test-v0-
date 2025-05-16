'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// FAQ Item component
const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        className="flex w-full justify-between items-center py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <span className="ml-4 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-blue-400" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-400" />
          )}
        </span>
      </button>
      
      {isOpen && (
        <div className="pb-6">
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FaqPage() {
  // FAQ data
  const faqs = [
    {
      question: "Comment fonctionne le processus d'investissement avec RNB ?",
      answer: "Le processus commence par une consultation où nous évaluons vos objectifs d'investissement et votre situation financière. Ensuite, nous identifions les opportunités qui correspondent à vos critères. Une fois que vous avez sélectionné un bien, nous vous accompagnons dans toutes les étapes de l'acquisition, de la négociation à la finalisation de la transaction."
    },
    {
      question: "Quel est le montant minimum pour investir avec RNB ?",
      answer: "Le montant d'investissement minimum dépend du type de bien et de la localisation. Généralement, vous pouvez commencer avec un apport de 20% à 30% du prix d'achat du bien. Nous proposons également des solutions pour optimiser votre investissement en fonction de votre budget."
    },
    {
      question: "Quels types de biens proposez-vous ?",
      answer: "Nous proposons une variété de biens immobiliers, y compris des appartements, des studios, des villas, des duplex et des penthouses. Notre sélection est soigneusement évaluée pour assurer un bon potentiel de rendement locatif et de plus-value."
    },
    {
      question: "Comment estimez-vous la rentabilité d'un bien ?",
      answer: "Nous analysons plusieurs facteurs pour estimer la rentabilité, notamment l'emplacement, l'état du bien, le potentiel locatif, les charges de copropriété, la fiscalité locale et les tendances du marché. Notre simulateur en ligne vous donne une première estimation, mais nous affinons cette analyse lors d'une consultation personnalisée."
    },
    {
      question: "Proposez-vous des services de gestion locative ?",
      answer: "Oui, nous offrons des services complets de gestion locative qui incluent la recherche de locataires qualifiés, la rédaction des baux, la collecte des loyers, la gestion des réparations et la résolution des problèmes. Notre objectif est de maximiser votre rendement tout en minimisant vos tracas."
    },
    {
      question: "Quels sont les frais associés à vos services ?",
      answer: "Nos honoraires varient en fonction des services que vous choisissez. Pour l'accompagnement à l'acquisition, nos frais sont généralement un pourcentage du prix d'achat. Pour la gestion locative, nous facturons un pourcentage du loyer mensuel. Tous les frais sont clairement détaillés avant tout engagement."
    },
    {
      question: "Comment puis-je financer mon investissement immobilier ?",
      answer: "Nous travaillons avec plusieurs partenaires financiers pour vous aider à obtenir le meilleur financement possible. Nous pouvons vous conseiller sur les prêts immobiliers traditionnels, les prêts professionnels si vous investissez via une société, et d'autres options de financement adaptées à votre situation."
    },
    {
      question: "Est-ce que j'aurai besoin d'un apport personnel ?",
      answer: "Dans la plupart des cas, les banques exigent un apport personnel d'au moins 20% du prix d'achat pour un investissement locatif. Cependant, selon votre profil et la structure de l'opération, nous pouvons parfois trouver des solutions pour réduire cet apport."
    },
    {
      question: "Quels sont les risques liés à l'investissement immobilier ?",
      answer: "Comme tout investissement, l'immobilier comporte des risques. Ceux-ci incluent la vacance locative, les impayés de loyer, les problèmes de maintenance, les fluctuations du marché immobilier et les changements de la fiscalité. Notre équipe vous aide à comprendre et à atténuer ces risques grâce à une stratégie d'investissement solide."
    },
    {
      question: "Comment puis-je prendre rendez-vous avec un conseiller RNB ?",
      answer: "Vous pouvez prendre rendez-vous directement via notre site web en utilisant notre simulateur et en remplissant le formulaire de contact, ou en nous appelant au numéro indiqué sur notre site. Nous organiserons une consultation gratuite pour discuter de vos objectifs d'investissement."
    }
  ];

  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-12 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
              Questions fréquentes
            </h1>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10">
              {faqs.map((faq, index) => (
                <FaqItem 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-300 mb-6">
                Vous ne trouvez pas la réponse à votre question ?
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 