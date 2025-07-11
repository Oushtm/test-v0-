'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Calculator, Home, Users, Phone, HelpCircle, Target, TrendingUp, MapPin, Mail, X } from 'lucide-react';
import Hero from '@/components/Hero';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { useState } from 'react';

export default function HomePage() {
  const [selectedMember, setSelectedMember] = useState<null | 'zakaria' | 'simohamed'>(null);

  const teamMembers = {
    zakaria: {
      name: "Zakaria Ghoulam",
      role: "Fondateur & Gestionnaire principal",
      image: "/images/team/zakaria.jpg",
      bio: "Expert en gestion immobilière avec plus de 10 ans d'expérience dans le secteur. Passionné par l'innovation et l'amélioration continue des services de conciergerie.",
      expertise: ["Gestion immobilière", "Stratégie d'investissement", "Optimisation locative"],
      education: "Master en Gestion Immobilière",
      languages: ["Français", "Arabe", "Anglais"],
      contact: "zakaria@rentabilio.com"
    },
    simohamed: {
      name: "Simohamed",
      role: "Co-fondateur & Relation Client",
      image: "/images/team/simohamed.jpg",
      bio: "Spécialiste en relation client avec une approche centrée sur la satisfaction des propriétaires et des locataires. Expert en communication et gestion de la qualité de service.",
      expertise: ["Relation client", "Gestion de la qualité", "Communication"],
      education: "Master en Management des Services",
      languages: ["Français", "Arabe", "Anglais"],
      contact: "simohamed@rentabilio.com"
    }
  };

  return (
    <main className="flex-1">
      <Hero />
      
      {/* Modern Decorative Banner with enhanced 3D effect */}
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0fc28b]/20 via-[#0fc28b]/20 to-[#0fc28b]/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/80 rounded-full" />
        </div>
      </div>
      
      {/* Team Section */}
      <section className="py-12 sm:py-24 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white">
                Notre Équipe
              </h2>
              <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Une équipe d'experts passionnés à votre service
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer h-[400px]"
                onClick={() => setSelectedMember('zakaria')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/80 rounded-xl sm:rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src="/images/team/zakaria.jpg"
                      alt="Zakaria Ghoulam"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Zakaria Ghoulam</h3>
                    <p className="text-sm sm:text-base text-gray-300">Fondateur & Gestionnaire principal</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer h-[400px]"
                onClick={() => setSelectedMember('simohamed')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/80 rounded-xl sm:rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src="/images/team/simohamed.jpg"
                      alt="Simohamed"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Simohamed</h3>
                    <p className="text-sm sm:text-base text-gray-300">Co-fondateur & Relation Client</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Member Dialog */}
      <Dialog open={selectedMember !== null} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-3xl bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/10 shadow-2xl p-0 overflow-hidden max-h-[90vh] sm:max-h-[85vh] overflow-y-auto">
          {selectedMember && (
            <>
              {/* Background gradient decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0fc28b]/20 via-transparent to-transparent" />
              
              <div className="relative z-10">
                {/* Header with large image */}
                <div className="relative h-40 sm:h-64 w-full overflow-hidden">
                  <Image
                    src={teamMembers[selectedMember].image}
                    alt={teamMembers[selectedMember].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  
                  {/* Close button repositioned */}
                  <DialogClose className="absolute right-3 top-3 sm:right-4 sm:top-4 rounded-full bg-black/50 p-1.5 sm:p-2 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#0fc28b] focus:ring-offset-2 disabled:pointer-events-none">
                    <X className="h-4 w-4 text-white" />
                    <span className="sr-only">Close</span>
                  </DialogClose>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 md:p-8">
                  <DialogHeader className="mb-4 sm:mb-6">
                    <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                      {teamMembers[selectedMember].name}
                    </DialogTitle>
                    <p className="text-base sm:text-lg text-[#0fc28b] font-medium">
                      {teamMembers[selectedMember].role}
                    </p>
                  </DialogHeader>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    {/* Left column */}
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">À propos</h4>
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                          {teamMembers[selectedMember].bio}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Formation</h4>
                        <div className="flex items-center gap-2 sm:gap-3 bg-white/5 p-2 sm:p-3 rounded-lg border border-white/10">
                          <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#0fc28b]/10 flex items-center justify-center">
                            <Target className="h-4 w-4 sm:h-5 sm:w-5 text-[#0fc28b]" />
                          </div>
                          <p className="text-gray-300 text-sm sm:text-base">{teamMembers[selectedMember].education}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right column */}
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Expertise</h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {teamMembers[selectedMember].expertise.map((skill, index) => (
                            <span
                              key={index}
                              className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#0fc28b]/10 text-[#0fc28b] rounded-full text-xs sm:text-sm border border-[#0fc28b]/20 hover:bg-[#0fc28b]/20 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Langues</h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {teamMembers[selectedMember].languages.map((language, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/5 rounded-full text-xs sm:text-sm border border-white/10"
                            >
                              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#0fc28b]" />
                              <span className="text-gray-300">{language}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Contact</h4>
                        <a
                          href={`mailto:${teamMembers[selectedMember].contact}`}
                          className="flex items-center gap-2 sm:gap-3 bg-[#0fc28b]/10 p-2 sm:p-3 rounded-lg border border-[#0fc28b]/20 hover:bg-[#0fc28b]/20 transition-colors group"
                        >
                          <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#0fc28b]/20 flex items-center justify-center">
                            <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#0fc28b]" />
                          </div>
                          <span className="text-[#0fc28b] text-sm sm:text-base group-hover:underline break-all">
                            {teamMembers[selectedMember].contact}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Modern Decorative Banner */}
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0fc28b]/20 via-[#0fc28b]/20 to-[#0fc28b]/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/80 rounded-full" />
        </div>
      </div>

      {/* Services Preview */}
      <section className="py-12 sm:py-24 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Nos Services</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto mb-4 sm:mb-8 rounded-full" />
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Des solutions complètes pour votre investissement immobilier
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800/50 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-[#0fc28b]/50 transition-colors flex flex-col items-center text-center"
              >
                <Home className="w-10 h-10 sm:w-12 sm:h-12 text-[#0fc28b] mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Ménage</h3>
                <p className="text-sm sm:text-base text-gray-300">Nous nous occupons du ménage pour que votre résidence soit toujours impeccable pour chaque nouveau locataire.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-800/50 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-[#0fc28b]/50 transition-colors flex flex-col items-center text-center"
              >
                <Users className="w-10 h-10 sm:w-12 sm:h-12 text-[#0fc28b] mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Check-in / Check-out</h3>
                <p className="text-sm sm:text-base text-gray-300">Nous gérons les arrivées et les départs de vos locataires pour une expérience fluide et sans stress.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-800/50 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-[#0fc28b]/50 transition-colors flex flex-col items-center text-center"
              >
                <Building2 className="w-10 h-10 sm:w-12 sm:h-12 text-[#0fc28b] mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Maintenance</h3>
                <p className="text-sm sm:text-base text-gray-300">Notre équipe assure la maintenance régulière de votre propriété, garantissant un séjour sans souci pour vos invités.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-800/50 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-[#0fc28b]/50 transition-colors flex flex-col items-center text-center"
              >
                <Calculator className="w-10 h-10 sm:w-12 sm:h-12 text-[#0fc28b] mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Création d'annonce</h3>
                <p className="text-sm sm:text-base text-gray-300">Nous créons et optimisons vos annonces pour attirer plus de locataires et maximiser vos revenus.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Decorative Banner */}
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0fc28b]/20 via-[#0fc28b]/20 to-[#0fc28b]/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/80 rounded-full" />
        </div>
      </div>

      {/* FAQ Preview */}
      <section className="py-12 sm:py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <HelpCircle className="w-12 h-12 sm:w-16 sm:h-16 text-[#0fc28b] mx-auto mb-4 sm:mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Questions Fréquentes</h2>
            <div className="w-24 h-1 bg-[#0fc28b] mx-auto mb-6 sm:mb-8 rounded-full" />
            <p className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Tout ce que vous devez savoir sur l'investissement immobilier et notre accompagnement
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div className="bg-gray-800/50 p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-[#0fc28b]/50 transition-colors">
                <h3 className="text-base sm:text-lg font-bold text-[#0fc28b] mb-2">Comment débuter ?</h3>
                <p className="text-sm sm:text-base text-gray-300">Découvrez les étapes clés pour commencer votre projet d'investissement.</p>
              </div>
              <div className="bg-gray-800/50 p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-[#0fc28b]/50 transition-colors">
                <h3 className="text-base sm:text-lg font-bold text-[#0fc28b] mb-2">Quelle rentabilité ?</h3>
                <p className="text-sm sm:text-base text-gray-300">Comprendre les différents facteurs qui influencent le retour sur investissement.</p>
              </div>
            </div>
            <Link href="/faq">
              <Button size="lg" className="group bg-[#0fc28b] hover:bg-[#0fc28b]/90 w-full sm:w-auto">
                Toutes les réponses à vos questions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modern Decorative Banner */}
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0fc28b]/20 via-[#0fc28b]/20 to-[#0fc28b]/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/80 rounded-full" />
        </div>
      </div>

      {/* Contact Preview */}
      <section className="py-12 sm:py-28 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-12 bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 p-6 sm:p-12 relative z-10">
              {/* Left: Contact Info (Improved) */}
              <div className="flex-1 flex flex-col justify-center gap-6 sm:gap-10">
                <div className="inline-flex items-center gap-2 bg-[#0fc28b]/10 text-[#0fc28b] px-4 py-2 rounded-full font-semibold text-sm sm:text-base mb-2 w-max">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  Contact Premium
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2">Contactez-nous</h2>
                  <p className="text-base sm:text-lg text-[#0fc28b] mb-4">Nous sommes là pour vous aider !</p>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/80 rounded-full" />
                  </div>
                <div className="flex flex-col gap-4 sm:gap-7">
                  <a href="tel:+212660408470" className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 group transition-all duration-300 hover:scale-105 hover:bg-[#0fc28b]/10 rounded-xl sm:rounded-2xl p-4 sm:px-5 sm:py-4">
                    <div className="flex items-center gap-3 w-full">
                      <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-[#0fc28b] flex-shrink-0" />
                      <span className="text-lg sm:text-xl font-semibold text-white">(+212) 660-408470</span>
                    </div>
                    <span className="bg-[#0fc28b]/10 hover:bg-[#0fc28b]/20 text-[#0fc28b] px-4 py-2 rounded-lg transition-colors text-sm sm:text-base font-medium whitespace-nowrap w-full sm:w-auto text-center sm:ml-auto">Appeler</span>
                  </a>
                  <div className="flex items-center gap-4 group transition-all duration-300 hover:scale-105 hover:bg-[#0fc28b]/10 rounded-xl sm:rounded-2xl p-4 sm:px-5 sm:py-4">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-[#0fc28b] flex-shrink-0" />
                    <span className="text-base sm:text-lg text-white">Maroc, Casablanca</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 group transition-all duration-300 hover:scale-105 hover:bg-[#0fc28b]/10 rounded-xl sm:rounded-2xl p-4 sm:px-5 sm:py-4">
                    <div className="flex items-center gap-3 w-full">
                      <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-[#0fc28b] flex-shrink-0" />
                      <span className="text-base sm:text-lg text-white whitespace-nowrap">Contact@rentabilio.com</span>
                    </div>
                    <a 
                      href="mailto:Contact@rentabilio.com" 
                      className="bg-[#0fc28b]/10 hover:bg-[#0fc28b]/20 text-[#0fc28b] px-4 py-2 rounded-lg transition-colors text-sm sm:text-base font-medium whitespace-nowrap w-full sm:w-auto text-center"
                    >
                      Envoyer email
                    </a>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-[#0fc28b] mt-4 font-bold">Réponse rapide garantie • Support humain et local</div>
              </div>

              {/* Right: Illustration or Card */}
              <div className="flex-1 flex flex-col items-center justify-center gap-6 pt-6 sm:pt-0 border-t sm:border-t-0 border-white/10">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  <Phone className="w-20 h-20 sm:w-24 sm:h-24 text-white/80 drop-shadow-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                </div>
                <div className="text-center text-gray-400 text-base sm:text-lg px-4">
                  Nous sommes à votre écoute pour tous vos besoins de gestion locative et conciergerie à Casablanca.
                </div>
              </div>
            </div>
            {/* Decorative blurred background shapes */}
            <div className="absolute -top-32 -left-32 w-72 h-72 bg-[#0fc28b]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#0fc28b]/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>
    </main>
  );
} 