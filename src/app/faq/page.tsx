'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// FAQ Item component
const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="border-b border-white/10 last:border-0"
    >
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="flex w-full justify-between items-center py-4 sm:py-6 text-left group transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-base sm:text-lg font-medium text-white pr-8 group-hover:text-[#0fc28b] transition-colors">{question}</h3>
        <span className="ml-4 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-[#0fc28b]" />
          ) : (
            <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-[#0fc28b] transition-colors" />
          )}
        </span>
      </motion.button>
      
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pb-4 sm:pb-6">
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function FaqPage() {
  // FAQ data
  const faqs = [
    {
      question: "Quels services offrez-vous pour la gestion locative ?",
      answer: "Nous offrons une gamme complète de services, y compris la prise de photos professionnelles, la création d'annonces sur plusieurs plateformes, la gestion des réservations, l'accueil des voyageurs, l'assistance en cas de panne, le ménage et la blanchisserie, ainsi que la couverture des éventuels dommages subis."
    },
    {
      question: "Comment puis-je suivre les performances de ma propriété ?",
      answer: "Nous fournissons des rapports clairs et détaillés permettant aux propriétaires de suivre facilement les performances de leur location saisonnière, avec des indicateurs clés pour une gestion optimale et des décisions éclairées."
    },
    {
      question: "Comment fonctionne la gestion des réservations ?",
      answer: "Nous nous occupons de toutes les réservations via les principales plateformes de location courte durée. Cela inclut la gestion des demandes, la communication avec les locataires et la coordination des check-ins et check-outs."
    },
    {
      question: "Que se passe-t-il en cas de problème technique dans la propriété ?",
      answer: "Notre équipe offre une assistance rapide pour résoudre tout problème technique. Les locataires peuvent nous contacter à tout moment, et nous intervenons pour assurer leur confort et leur satisfaction."
    },
    {
      question: "Comment puis-je bloquer des dates pour ma propre utilisation de la propriété ?",
      answer: "Vous pouvez facilement bloquer des dates via un accès privé à notre système de gestion de calendrier. Cela vous permet de garder le contrôle sur votre logement et de planifier son utilisation personnelle sans complications."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <section className="py-12 sm:py-24 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#0fc28b]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#0fc28b]/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-8 sm:mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-[#0fc28b] rounded-full text-xs sm:text-sm font-medium mb-4"
              >
                <HelpCircle className="w-4 h-4" />
                <span>FAQ</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-[#0fc28b]"
              >
              Questions fréquentes
              </motion.h1>
            
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto"
              >
                Trouvez rapidement les réponses à vos questions sur nos services de gestion locative.
              </motion.p>
            </div>
            
            {/* FAQ Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm p-4 sm:p-8 rounded-2xl border border-white/10 shadow-xl"
            >
              {faqs.map((faq, index) => (
                <FaqItem 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </motion.div>
            
            {/* Contact Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 sm:mt-12 text-center"
            >
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Vous ne trouvez pas la réponse à votre question ?
              </p>
              <motion.a 
                href="/contact" 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-[#0fc28b] hover:bg-[#0fc28b]/90 text-white font-medium transition-colors text-sm sm:text-base"
              >
                Contactez-nous
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 