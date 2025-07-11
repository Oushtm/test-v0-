'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Home, Building, Building2, Hotel, PenTool, Bed, MapPin, ArrowRight, ChevronRight, Check, Calculator, TrendingUp, Euro } from 'lucide-react';
import { useRouter } from 'next/navigation';
import useZoom from '@/hooks/useZoom';

// Animation variants
const containerVariants = {
  hidden: { 
    opacity: 0,
  },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.05 
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 10
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
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
    { icon: Home, label: 'Studio', value: 'Studio' },
    { icon: Building2, label: 'Appartement', value: 'Appartement' },
    { icon: Building, label: 'Villa', value: 'Villa' },
  ];

  // Room options based on property type
  let roomOptions: string[] = [];
  if (formData.propertyType === 'Appartement') {
    roomOptions = ['2', '3'];
  } else if (formData.propertyType === 'Villa') {
    roomOptions = ['2 suite', '3 suite', '4 suite', '5 suite'];
  }

  // Districts based on property type
  let districts: string[] = [];
  if (formData.propertyType === 'Villa') {
    districts = ['Ain diab', 'Sidi rahal', 'Tamaris', 'Beauséjour', 'Dar Bouazza', 'Maarif', 'Oasis', 'Palmier', 'Racing', 'Autres'];
  } else {
    districts = ['Beauséjour', 'CFC', 'Dar Bouazza', 'Gauthier', 'Maarif', 'Marina', 'Oasis', 'Palmier', 'Racing', 'Autres'];
  }

  const handleChange = (name: string, value: string) => {
    if (name === 'propertyType') {
      setFormData(prev => ({ ...prev, propertyType: value }));
      if (value === 'Studio') {
        // Always set rooms to '1' for Studio
        setFormData(prev => ({ ...prev, propertyType: value, rooms: '1' }));
        setTimeout(() => setCurrentStep(3), 300); // Match simulator page timing
        return;
      } else {
        setFormData(prev => ({ ...prev, propertyType: value, rooms: '' }));
        setTimeout(() => setCurrentStep(2), 300); // Match simulator page timing
        return;
      }
    }
    if (name === 'rooms') {
      setFormData(prev => ({ ...prev, rooms: value }));
      setTimeout(() => setCurrentStep(3), 300); // Match simulator page timing
      return;
    }
    if (name === 'district') {
      setFormData(prev => ({ ...prev, district: value }));
      if (value === 'Autres') {
        setTimeout(() => handleEstimationClick(), 100);
      }
      return;
    }
  };

  const handleEstimationClick = () => {
    // Always ensure rooms is '1' for Studio before estimation
    let data = { ...formData };
    if (data.propertyType === 'Studio') {
      data.rooms = '1';
    }

    if (
      !data.propertyType ||
      !data.district ||
      (data.propertyType !== 'Studio' && !data.rooms)
    ) {
      // Don't proceed if the form is incomplete
      return;
    }

    // Add the data to the query parameters
    const queryParams = new URLSearchParams({
      ...data
    }).toString();

    router.push(`/simulate?${queryParams}`);
  };

  const startSimulation = () => {
    // Instead of showing the form in hero section, navigate directly to simulator page
    router.push('/simulate');
  };

  // Update the district step content
  const renderDistrictStep = () => (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentStep}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
        className="bg-[#1e2330] rounded-2xl overflow-hidden"
      >
        {/* Progress bar */}
        <motion.div 
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="h-0.5 bg-gradient-to-r from-[#0fc28b] via-[#0fc28b]/80 to-[#0fc28b]"
        />

        <motion.div
          variants={containerVariants}
          className="p-8 space-y-8"
        >
          {/* Header */}
          <motion.div 
            variants={itemVariants}
            className="space-y-2"
          >
            <h3 className="text-2xl font-medium text-white">
              Dans quel quartier se trouve votre bien ?
            </h3>
            <p className="text-base text-gray-400">
              Sélectionnez le quartier qui correspond à votre propriété
            </p>
          </motion.div>

          {/* Districts grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 gap-4"
          >
        {districts.map((district) => (
          <motion.button
            key={district}
            variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
            onClick={() => handleChange('district', district)}
                className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-200 ${
              formData.district === district
                    ? 'bg-[#2a3142] border border-[#0fc28b]/50'
                    : 'bg-[#171b26] hover:bg-[#1e2330] border border-white/10'
                }`}
          >
                <MapPin className={`w-5 h-5 ${formData.district === district ? 'text-[#0fc28b]' : 'text-gray-400'}`} />
                <span className={`text-base ${formData.district === district ? 'text-white' : 'text-gray-300'}`}>{district}</span>
          </motion.button>
        ))}
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#0fc28b]"></div>
              <span className="text-sm text-gray-500">Étape 3/3</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <span className="text-sm">Suivant</span>
              <ChevronRight className="w-5 h-5" />
      </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {formData.district && (
        <motion.button
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
            onClick={handleEstimationClick}
          className="w-full bg-gradient-to-r from-[#0fc28b] via-[#0fc28b] to-[#0fc28b]/80 hover:from-[#0fc28b] hover:via-[#0fc28b] hover:to-[#0fc28b] text-white py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden mt-4"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center justify-center space-x-3">
            <span className="text-base font-medium">Découvrir votre estimation détaillée</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </motion.button>
      )}
    </AnimatePresence>
  );

  // Update the step content
  const getStepContent = () => {
    const messages = {
      1: {
        title: "Commençons par le type de votre bien",
        subtitle: "Sélectionnez le type qui correspond le mieux à votre propriété"
      },
      2: {
        title: formData.propertyType === 'Villa' ? 'Combien de suites ?' : 'Combien de chambres ?',
        subtitle: formData.propertyType === 'Villa' ? 'Sélectionnez le nombre de suites' : 'Sélectionnez le nombre de chambres'
      },
      3: {
        title: "Dans quel quartier ?",
        subtitle: "Sélectionnez le quartier de votre bien"
      }
    };

    return messages[currentStep as keyof typeof messages];
  };

  // Update the step content rendering
  if (currentStep === 3) {
    return renderDistrictStep();
  }

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
                scale: [1, 1.1, 1],
                rotate: [0, 180],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Calculator className="w-20 h-20 text-[#0fc28b]" />
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                scale: [1.1, 1, 1.1],
                rotate: [0, -180],
              }}
              transition={{
                duration: 4,
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
                scale: [1, 1.05, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 4,
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
              <div className="bg-[#0fc28b]/10 p-4 rounded-xl">
                <div className="text-3xl font-bold text-[#0fc28b] mb-2">98%</div>
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
              className="w-full bg-gradient-to-r from-[#0fc28b] via-[#0fc28b] to-[#0fc28b]/80 hover:from-[#0fc28b] hover:via-[#0fc28b] hover:to-[#0fc28b] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
      className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 relative overflow-hidden"
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-800">
        <motion.div
          className="h-full bg-[#0fc28b]"
          initial={{ width: "0%" }}
          animate={{ width: `${(currentStep / 3) * 100}%` }}
          transition={{ duration: 0.3 }}
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
                      ? 'border-[#0fc28b] bg-[#0fc28b]/20'
                      : 'border-gray-700 hover:border-gray-600'
                  } flex flex-col items-center space-y-2 transition-colors`}
                >
                  <Icon className={`w-8 h-8 ${formData.propertyType === value ? 'text-[#0fc28b]' : 'text-gray-400'}`} />
                  <span className={`font-medium ${formData.propertyType === value ? 'text-white' : 'text-gray-300'}`}>{label}</span>
                </motion.button>
              ))}
            </div>
          )}

          {currentStep === 2 && formData.propertyType !== 'Studio' && (
            <div className="grid grid-cols-2 gap-4">
              {roomOptions.map((room) => (
                <motion.button
                  key={room}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleChange('rooms', room)}
                  className={`p-4 rounded-xl border ${
                    formData.rooms === room
                      ? 'border-[#0fc28b] bg-[#0fc28b]/20'
                      : 'border-gray-700 hover:border-gray-600'
                  } flex flex-col items-center space-y-2 transition-colors`}
                >
                  <Bed className={`w-6 h-6 ${formData.rooms === room ? 'text-[#0fc28b]' : 'text-gray-400'}`} />
                  <span className={`font-medium ${formData.rooms === room ? 'text-white' : 'text-gray-300'}`}>{room}</span>
                </motion.button>
              ))}
            </div>
          )}

          {currentStep === 3 && renderDistrictStep()}

          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-between text-sm text-gray-400"
          >
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#0fc28b]"></span>
              <span>Étape {currentStep}/3</span>
            </div>
            {currentStep > 1 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentStep(prev => prev - 1)}
                className="flex items-center space-x-1 text-[#0fc28b] hover:text-[#0fc28b] transition-colors"
              >
                <ChevronRight className="w-4 h-4 transform rotate-180" />
                <span>Retour</span>
              </motion.button>
            )}
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
  // Use default zoom
  useZoom();

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
          quality={75}
          loading="eager"
          sizes="100vw"
        />
        {/* Enhanced overlay gradients for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
      </div>

      {/* Content wrapper */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="relative space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
            >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0fc28b] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0fc28b]"></span>
                </span>
                <span className="text-white/90 text-sm font-medium">Estimation en direct</span>
              </motion.div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                  <span className="block bg-gradient-to-r from-[#0fc28b] via-[#0fc28b] to-[#0fc28b]/80 bg-clip-text text-transparent">
                    Conciergerie Exceptionnelle à Casablanca
                  </span>
                  <span className="block mt-2 sm:mt-3 text-white">
                    pour Votre Tranquillité d'Esprit
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed">
                Gestion Professionnelle pour Maximiser vos Revenus Locatifs et Assurer une Expérience Cinq Étoiles
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 py-6 sm:py-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/70 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-black/30 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/10">
                    <div className="text-2xl sm:text-3xl font-bold text-white">98%</div>
                    <div className="text-xs sm:text-sm text-gray-400">Précision</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/70 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-black/30 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/10">
                    <div className="text-2xl sm:text-3xl font-bold text-white">24h</div>
                    <div className="text-xs sm:text-sm text-gray-400">Délai max</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/70 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-black/30 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/10">
                    <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
                    <div className="text-xs sm:text-sm text-gray-400">Gratuit</div>
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
            className="relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto"
          >
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/70 rounded-[2.5rem] blur-2xl opacity-20"></div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0fc28b]/10 to-[#0fc28b]/10 rounded-[2rem]"></div>
              <div className="relative bg-black/40 backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden">
                <HeroSimulatorStepper />
              </div>
              </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-px h-96 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-1/2 right-0 w-px h-96 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        {/* Additional decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#0fc28b]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#0fc28b]/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero; 