'use client';

import { motion } from 'framer-motion';
import { 
  Calculator,
  Target,
  Award,
  TrendingUp,
  Shield,
  Heart,
  Building2,
  MapPin,
  Clock,
  BarChart2,
  Home,
  Building,
  Users,
  Brush,
  KeyRound,
  Wrench,
  Megaphone,
  Camera,
  Globe,
  CalendarCheck,
  LifeBuoy,
  Mail,
  X
} from 'lucide-react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { useState } from 'react';

// Define types for our data
interface Value {
  icon: any;
  title: string;
  description: string;
}

interface TeamMember {
  image: string;
  title: string;
  description: string;
}

export default function AboutPage() {
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

  const values: Value[] = [
    {
      icon: Target,
      title: "Précision",
      description: "Nous fournissons des estimations immobilières précises basées sur des données du marché en temps réel."
    },
    {
      icon: Shield,
      title: "Fiabilité",
      description: "Nos simulations sont basées sur des algorithmes éprouvés et des données fiables du marché immobilier."
    },
    {
      icon: Heart,
      title: "Simplicité",
      description: "Nous rendons l'estimation immobilière accessible à tous grâce à une interface intuitive et conviviale."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Nous utilisons les dernières technologies pour vous offrir des simulations toujours plus précises."
    }
  ];

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Premium background image with dark overlay */}
        <Image
          src="/images/2224.jpg"
          alt="Intérieur Premium Casablanca"
          fill
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          style={{ zIndex: 0 }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" style={{ zIndex: 1 }} />
        {/* Glassmorphism content card */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 sm:px-5 py-2 rounded-full mb-4 sm:mb-6 shadow-lg border border-white/10"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0fc28b] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0fc28b]"></span>
            </span>
            <span className="text-white/90 text-sm font-semibold tracking-wide">Conciergerie haut de gamme</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight max-w-4xl"
          >
            Votre Partenaire de Confiance en Gestion Locative
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4"
          >
            Découvrez comment nous transformons l'investissement immobilier en une expérience simple et rentable
          </motion.p>
        </div>
      </section>

      {/* Decorative Banner */}
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0fc28b]/20 via-[#0fc28b]/20 to-[#0fc28b]/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/80 rounded-full" />
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white">
                Nos Services
              </h2>
              <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Découvrez nos services de gestion locative haut de gamme, pensés pour votre tranquillité d'esprit.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {/* Service Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-gray-700/50 hover:border-[#0fc28b]/50 transition-all p-6 sm:p-8"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6 flex items-center justify-center rounded-xl bg-[#0fc28b]/20">
                  <Brush className="w-6 h-6 sm:w-7 sm:h-7 text-[#0fc28b]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Ménage</h3>
                <p className="text-sm sm:text-base text-gray-200">Nous nous occupons du ménage pour que votre résidence soit toujours impeccable.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/10 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-[#0fc28b]/50 transition-all p-8"
              >
                <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-xl bg-[#0fc28b]/20">
                  <KeyRound className="w-7 h-7 text-[#0fc28b]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Check-in / Check-out</h3>
                <p className="text-gray-200">Gestion des arrivées et départs pour une expérience fluide.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group bg-white/10 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-[#0fc28b]/50 transition-all p-8"
              >
                <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-xl bg-[#0fc28b]/20">
                  <Wrench className="w-7 h-7 text-[#0fc28b]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Maintenance</h3>
                <p className="text-gray-200">Maintenance régulière pour garantir un séjour sans souci.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="group bg-white/10 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-[#0fc28b]/50 transition-all p-8"
              >
                <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-xl bg-[#0fc28b]/20">
                  <Megaphone className="w-7 h-7 text-[#0fc28b]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Création d'annonce</h3>
                <p className="text-gray-200">Création et optimisation de vos annonces pour maximiser vos revenus.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Banner */}
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

      {/* Decorative Banner */}
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0fc28b]/20 via-[#0fc28b]/20 to-[#0fc28b]/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/80 rounded-full" />
        </div>
      </div>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Des principes qui guident chacune de nos actions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10"
              >
                <div className="w-12 h-12 bg-[#0fc28b]/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[#0fc28b]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Banner */}
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0fc28b]/20 via-[#0fc28b]/20 to-[#0fc28b]/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/80 rounded-full" />
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl p-8 sm:p-12 rounded-xl sm:rounded-2xl border border-gray-700/50 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white">
              Prêt à Commencer ?
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Rejoignez-nous dès aujourd'hui et découvrez comment nous pouvons vous aider à maximiser vos revenus locatifs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-[#0fc28b] hover:bg-[#0fc28b]/90 text-white font-bold py-3 px-8 rounded-xl text-base sm:text-lg transition-colors"
            >
              Contactez-nous
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 