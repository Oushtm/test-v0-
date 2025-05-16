'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Calculator, Home, Users, Phone, HelpCircle, Target, TrendingUp } from 'lucide-react';
import Hero from '@/components/Hero';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      
      {/* Modern Decorative Banner with enhanced 3D effect */}
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>
      </div>
      
      {/* Qui Sommes Nous Preview */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <Users className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">Qui Sommes Nous</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-lg text-gray-300">
                  RENTABILIO est votre partenaire de confiance dans l'investissement immobilier. 
                  Notre équipe d'experts vous accompagne dans chaque étape de votre projet pour 
                  maximiser votre rentabilité.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Target className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">Plus de 500 investissements réussis</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">Rentabilité moyenne de 8% par an</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Building2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">Plus de 1000 biens gérés</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">Une équipe de 20 experts dédiés</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src="/images/team-1.jpg"
                    alt="Notre équipe"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src="/images/team-2.jpg"
                    alt="Notre expertise"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src="/images/team-3.jpg"
                    alt="Nos réalisations"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src="/images/team-4.jpg"
                    alt="Notre engagement"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center mt-12"
            >
              <Link href="/about">
                <Button size="lg" className="group bg-blue-500 hover:bg-blue-600">
                  Découvrir notre histoire
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modern Decorative Banner */}
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>
      </div>

      {/* Services Preview */}
      <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Nos Services</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full" />
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Des solutions complètes pour votre investissement immobilier
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-colors"
              >
                <Building2 className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">Biens sélectionnés</h3>
                <p className="text-gray-300 mb-6">Des biens immobiliers soigneusement analysés pour leur potentiel de rentabilité et leur emplacement stratégique.</p>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-blue-400 font-medium">Rendement moyen : 8%</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-colors"
              >
                <Calculator className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">Simulation précise</h3>
                <p className="text-gray-300 mb-6">Analysez la rentabilité potentielle de votre investissement avec nos outils de simulation avancés.</p>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-blue-400 font-medium">100% Personnalisable</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-colors"
              >
                <Home className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">Accompagnement</h3>
                <p className="text-gray-300 mb-6">Un suivi personnalisé de A à Z par nos experts pour maximiser la réussite de votre projet.</p>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-blue-400 font-medium">Support 7j/7</p>
                </div>
              </motion.div>
            </div>

            <div className="text-center mt-16">
              <Link href="/services">
                <Button size="lg" variant="outline" className="group border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900">
                  Explorer nos services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Decorative Banner */}
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>
      </div>

      {/* FAQ Preview */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <HelpCircle className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Questions Fréquentes</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full" />
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur l'investissement immobilier et notre accompagnement
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-lg font-medium text-white mb-2">Comment débuter ?</h3>
                <p className="text-gray-300">Découvrez les étapes clés pour commencer votre projet d'investissement.</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-lg font-medium text-white mb-2">Quelle rentabilité ?</h3>
                <p className="text-gray-300">Comprendre les différents facteurs qui influencent le retour sur investissement.</p>
              </div>
            </div>
            <Link href="/faq">
              <Button size="lg" className="group bg-blue-500 hover:bg-blue-600">
                Toutes les réponses à vos questions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modern Decorative Banner */}
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>
      </div>

      {/* Contact Preview */}
      <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Phone className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Contactez-nous</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full" />
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Notre équipe d'experts est à votre écoute pour vous accompagner 
              dans votre projet d'investissement immobilier
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-lg font-medium text-white mb-2">Par téléphone</h3>
                <p className="text-gray-300">Disponible du lundi au vendredi de 9h à 18h</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-lg font-medium text-white mb-2">Par email</h3>
                <p className="text-gray-300">Réponse garantie sous 24h ouvrées</p>
              </div>
            </div>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="group border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900">
                Prendre rendez-vous
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 