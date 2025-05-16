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
  Building
} from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const values = [
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

  const stats = [
    {
      icon: Calculator,
      value: "50,000+",
      label: "Simulations",
      description: "Simulations réalisées avec succès"
    },
    {
      icon: MapPin,
      value: "15+",
      label: "Villes",
      description: "Couverture nationale"
    },
    {
      icon: Clock,
      value: "13",
      label: "Années d'Expérience",
      description: "Dans l'analyse immobilière"
    },
    {
      icon: BarChart2,
      value: "95%",
      label: "Précision",
      description: "Taux de précision des estimations"
    }
  ];

  const features = [
    {
      title: "Simulation Instantanée",
      description: "Obtenez une estimation immédiate de la valeur de votre bien en quelques clics.",
      image: "/images/features/instant-simulation.jpg",
      icon: Calculator
    },
    {
      title: "Analyse de Marché",
      description: "Bénéficiez d'une analyse détaillée du marché immobilier local.",
      image: "/images/features/market-analysis.jpg",
      icon: BarChart2
    },
    {
      title: "Rapport Personnalisé",
      description: "Recevez un rapport complet avec des recommandations personnalisées.",
      image: "/images/features/custom-report.jpg",
      icon: Building
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/3d-rendering-loft-scandinavian-living-room-with-working-table-bookshelf.jpg"
            alt="Modern Scandinavian Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-400"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              À propos de RNB
            </motion.h1>
            <motion.p 
              className="text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              RNB vous offre un outil de simulation innovant pour estimer la valeur de votre bien immobilier en quelques clics.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Modern Decorative Banner with enhanced 3D effect */}
      <div className="relative h-32 overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 animate-gradient-x" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent" />
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-6xl mx-auto px-4 flex items-center justify-between">
            {/* Left decorative line */}
            <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent transform -skew-y-6" />
            
            {/* Center circle */}
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 transform rotate-45 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400/40 to-purple-400/40 backdrop-blur-xl animate-pulse" />
              </div>
              {/* Orbital rings */}
              <div className="absolute inset-0 w-12 h-12 rounded-full border border-blue-500/20 animate-spin-slow" style={{ animationDuration: '10s' }} />
              <div className="absolute inset-0 w-12 h-12 rounded-full border border-purple-500/20 animate-spin-slow" style={{ animationDuration: '15s' }} />
            </div>
            
            {/* Right decorative line */}
            <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent transform skew-y-6" />
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-blue-400/40 animate-float" />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-purple-400/40 animate-float-delayed" />
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-blue-400/40 animate-float" />
        </div>
      </div>

      {/* Add required styles to the top of your file or in your global CSS */}
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
      `}</style>

      {/* Features Section with enhanced 3D and modern design */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Nos Services
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Découvrez nos outils innovants pour l'estimation immobilière
              </motion.p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                  className="group bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all transform perspective-1000 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden"
              >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>

                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <feature.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
                  </div>

                  <div className="px-8 pb-6">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center text-blue-400 font-medium"
                    >
                      En savoir plus
                      <svg
                        className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
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

      {/* Mission Section with enhanced 3D and modern design */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                className="relative h-[600px] rounded-2xl overflow-hidden group perspective-1000"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/about-mission.jpg"
                  alt="Notre mission"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
              <div className="space-y-8">
                <motion.h2 
                  className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Notre Mission
                </motion.h2>
                <motion.p 
                  className="text-xl text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
              Notre mission est de démocratiser l'accès à l'information immobilière en fournissant des outils de simulation 
              précis et accessibles à tous. Que vous soyez propriétaire, investisseur ou simplement curieux, nous mettons 
              à votre disposition notre expertise pour vous aider à prendre des décisions éclairées.
                </motion.p>
                <div className="space-y-6">
                  {[
                    { icon: Target, text: "Analyse approfondie du marché immobilier" },
                    { icon: Shield, text: "Stratégie de gestion optimisée" },
                    { icon: Heart, text: "Accompagnement personnalisé" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="p-3 rounded-lg bg-blue-500/20">
                        <item.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <p className="text-gray-300 text-lg">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
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

      {/* Stats Section with enhanced 3D */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateX: 5,
                    transition: { duration: 0.3 }
                  }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all transform perspective-1000 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                  <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 transform transition-transform duration-300 hover:scale-110">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                  <h3 className="text-4xl font-bold text-white mb-3">{stat.value}</h3>
                  <p className="text-gray-300 font-medium text-lg mb-2">{stat.label}</p>
                  <p className="text-gray-400">{stat.description}</p>
              </motion.div>
            ))}
          </div>
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

      {/* Values Section with enhanced 3D and modern design */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Nos Valeurs
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
              Nos valeurs fondamentales guident le développement de nos outils de simulation
              </motion.p>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: 2,
                  }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/40 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all transform perspective-1000 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:scale-110 hover:rotate-6">
                    <value.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
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

      {/* Team Section with enhanced 3D and modern design */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Notre Équipe
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Une équipe d'experts passionnés à votre service
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { image: "/images/team-1.jpg", title: "Équipe Direction", description: "Leadership et vision stratégique" },
                { image: "/images/team-2.jpg", title: "Équipe Technique", description: "Innovation et expertise" },
                { image: "/images/team-3.jpg", title: "Équipe Conseil", description: "Accompagnement personnalisé" }
              ].map((team, index) => (
                <motion.div
                  key={index}
                  className="relative h-[500px] rounded-2xl overflow-hidden group perspective-1000"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={team.image}
                    alt={team.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform group-hover:translate-y-[-10px] transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2">{team.title}</h3>
                    <p className="text-gray-300 text-lg">{team.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          </motion.div>
        </div>
      </section>

      {/* Modern Decorative Banner */}
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
        </div>
      </div>

      {/* CTA Section with enhanced 3D and modern design */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-50 blur-3xl" />
            <motion.div 
              className="relative bg-gray-800/50 backdrop-blur-xl p-12 rounded-2xl border border-gray-700/50 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
              
              <motion.h2 
                className="text-4xl font-bold mb-6 text-white text-center"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Prêt à Simuler ?
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-200 mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
              Découvrez la valeur de votre bien immobilier en quelques clics
              </motion.p>
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
            <a
              href="/simulate"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-blue-600 hover:bg-gray-100 font-medium transition-all transform hover:scale-105 hover:shadow-xl"
            >
              Lancer la Simulation
            </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 