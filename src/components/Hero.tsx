'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Home, Building, Building2, Hotel, PenTool, Bed, MapPin, ArrowRight, ChevronRight, Check, Calculator, TrendingUp, Euro } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5,
      staggerChildren: 0.1 
    }
  },
  exit: { 
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
};

// Composant HeroSimulatorStepper
const HeroSimulatorStepper = () => {
  const router = useRouter();
  const [showSimulator, setShowSimulator] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: '',
    rooms: '',
    district: ''
  });

  const propertyTypes = [
    { icon: Building2, label: 'Appartement', value: 'Appartement' },
    { icon: Home, label: 'Studio', value: 'Studio' },
    { icon: Building, label: 'Villa', value: 'Villa' },
    { icon: Hotel, label: 'Duplex', value: 'Duplex' },
    { icon: PenTool, label: 'Penthouse', value: 'Penthouse' }
  ];

  const roomOptions = ['1', '2', '3', '4', '+4'];
  const districts = ['Ain Diab', 'Anfa', 'Maarif', 'Palmier', 'Racine', 'Sidi Maarouf', 'Belvédère', 'California', 'Oasis'];

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (currentStep < 3) {
      setTimeout(() => {
        nextStep();
      }, 500);
    }
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const handleEstimationClick = () => {
    const queryParams = new URLSearchParams(formData).toString();
    router.push(`/simulate?${queryParams}`);
  };

  const startSimulation = () => {
    setShowSimulator(true);
  };

  const getStepContent = () => {
    const messages = {
      1: {
        title: "Commençons par le type de votre bien",
        subtitle: "Sélectionnez le type qui correspond le mieux à votre propriété"
      },
      2: {
        title: "Parlons de l'espace",
        subtitle: "Combien de chambres composent votre bien ?"
      },
      3: {
        title: "Dernière étape : l'emplacement",
        subtitle: "Dans quel quartier prestigieux se trouve votre bien ?"
      }
    };

    return messages[currentStep as keyof typeof messages];
  };

  const stepContent = getStepContent();

  if (!showSimulator) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
        className="bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-800 relative overflow-hidden"
      >
        <motion.div
          className="space-y-8 text-center"
          variants={containerVariants}
        >
          {/* Animated Icons */}
          <div className="relative h-32 mb-6">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Calculator className="w-20 h-20 text-blue-400" />
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [0, -360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5
              }}
            >
              <TrendingUp className="w-16 h-16 text-purple-400 opacity-50" />
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            >
              <Euro className="w-12 h-12 text-pink-400 opacity-30" />
            </motion.div>
          </div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-4"
          >
            Découvrez la vraie valeur de votre bien
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 mb-6"
          >
            Notre technologie d'estimation avancée vous fournit une analyse détaillée en quelques clics
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-500/10 p-4 rounded-xl">
                <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
                <div className="text-sm text-gray-300">Précision des estimations</div>
              </div>
              <div className="bg-purple-500/10 p-4 rounded-xl">
                <div className="text-3xl font-bold text-purple-400 mb-2">24h</div>
                <div className="text-sm text-gray-300">Rapport détaillé</div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={startSimulation}
              className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 hover:from-blue-700 hover:via-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center space-x-3">
                <span className="text-lg">Commencer l'estimation gratuite</span>
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.button>

            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mt-4">
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-1 text-green-500" />
                <span>100% Gratuit</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-1 text-green-500" />
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-1 text-green-500" />
                <span>Résultat immédiat</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-800 relative overflow-hidden"
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-800">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: "0%" }}
          animate={{ width: `${(currentStep / 3) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          className="space-y-6"
        >
          <div className="space-y-2">
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-white"
            >
              {stepContent.title}
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-gray-400"
            >
              {stepContent.subtitle}
            </motion.p>
          </div>

          {currentStep === 1 && (
            <div className="grid grid-cols-2 gap-4">
              {propertyTypes.map(({ icon: Icon, label, value }) => (
                <motion.button
                  key={value}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleChange('propertyType', value)}
                  className={`p-4 rounded-xl border ${
                    formData.propertyType === value
                      ? 'border-blue-500 bg-blue-500/20'
                      : 'border-gray-700 hover:border-gray-600'
                  } flex flex-col items-center space-y-2 transition-colors`}
                >
                  <Icon className="w-8 h-8 text-blue-400" />
                  <span className="text-white font-medium">{label}</span>
                </motion.button>
              ))}
            </div>
          )}

          {currentStep === 2 && (
            <div className="grid grid-cols-3 gap-4">
              {roomOptions.map((room) => (
                <motion.button
                  key={room}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleChange('rooms', room)}
                  className={`p-4 rounded-xl border ${
                    formData.rooms === room
                      ? 'border-blue-500 bg-blue-500/20'
                      : 'border-gray-700 hover:border-gray-600'
                  } flex flex-col items-center space-y-2 transition-colors`}
                >
                  <Bed className="w-6 h-6 text-blue-400" />
                  <span className="text-white font-medium">{room}</span>
                </motion.button>
              ))}
            </div>
          )}

          {currentStep === 3 && (
            <>
              <div className="grid grid-cols-2 gap-4">
                {districts.map((district) => (
                  <motion.button
                    key={district}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleChange('district', district)}
                    className={`p-4 rounded-xl border ${
                      formData.district === district
                        ? 'border-blue-500 bg-blue-500/20'
                        : 'border-gray-700 hover:border-gray-600'
                    } flex items-center space-x-3 transition-colors`}
                  >
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-medium">{district}</span>
                  </motion.button>
                ))}
              </div>

              {formData.district && (
                <motion.div
                  variants={itemVariants}
                  className="mt-8 text-center space-y-6"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEstimationClick}
                    className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 hover:from-blue-700 hover:via-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center justify-center space-x-3">
                      <span className="text-lg">Découvrir votre estimation détaillée</span>
                      <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.button>
                  
                  <motion.div 
                    variants={itemVariants}
                    className="text-center space-y-3"
                  >
                    <p className="text-blue-400 font-medium">
                      Obtenez votre rapport d'estimation complet
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Check className="w-4 h-4 mr-1 text-green-500" />
                        <span>Prix du marché</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="w-4 h-4 mr-1 text-green-500" />
                        <span>Analyse du quartier</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="w-4 h-4 mr-1 text-green-500" />
                        <span>Potentiel locatif</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </>
          )}

          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-between text-sm text-gray-400"
          >
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Étape {currentStep}/3</span>
            </div>
            {currentStep < 3 && (
              <div className="flex items-center space-x-1">
                <span>Suivant</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Main background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/2224.jpg"
          alt="Modern Interior"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content wrapper */}
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                <span className="text-white/90 text-sm font-medium">Estimation en direct</span>
              </motion.div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-bold text-white">
                  <span className="block">Estimation</span>
                  <span className="block mt-2 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Immobilière
                  </span>
                  <span className="block mt-2">Instantanée</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                Découvrez la valeur précise de votre bien immobilier grâce à notre technologie d'intelligence artificielle avancée.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 py-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                    <div className="text-3xl font-bold text-white">98%</div>
                    <div className="text-sm text-gray-400">Précision</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                    <div className="text-3xl font-bold text-white">24h</div>
                    <div className="text-sm text-gray-400">Délai max</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                    <div className="text-3xl font-bold text-white">100%</div>
                    <div className="text-sm text-gray-400">Gratuit</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side - Simulator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[2.5rem] blur-2xl opacity-20"></div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-[2rem]"></div>
              <div className="relative bg-black/40 backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden">
                <HeroSimulatorStepper />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-px h-96 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-1/2 right-0 w-px h-96 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero; 