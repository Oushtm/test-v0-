'use client';

import React, { useState, useEffect } from 'react';
import { Calculator, Home, Check, ArrowRight, File, Download, BarChart2, Users, MapPin, Bed, Building2, Building, Sun, CloudSun, Cloud, Sparkles, TrendingUp, Phone, Mail, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import ReviewsCarousel from '@/components/ReviewsCarousel';
import { generateAndDownloadPDF } from '@/lib/utils';
import PDFDownloadButton from '@/components/PDFDownloadButton';

// Step indicators component
const StepIndicator = ({ currentStep }: { currentStep: number }) => {
  // Adjust total steps based on the number of individual questions
  const totalSteps = 7; // PropertyType, Rooms, District, BlurredEstimation, PersonalInfo, Estimation, Report
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center space-x-2 mb-8">
      {steps.map((step) => (
        <div
          key={step}
          className={`flex items-center justify-center w-6 h-6 rounded-full text-xs ${
            step === currentStep + 1
              ? 'border-[#0fc28b] bg-[#0fc28b] text-white'
              : step < currentStep + 1
              ? 'border-[#0fc28b] bg-[#0fc28b] text-white'
              : 'border-gray-500 bg-transparent text-gray-500'
          }`}
        >
          {step < currentStep + 1 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3 h-3"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            step
          )}
        </div>
      ))}
    </div>
  );
};

// Remove or comment out the BotAssistant component
// const BotAssistant = ({ step }: { step: number }) => { /* ... */ };

export default function SimulatePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  // Add a resetKey to force re-mount on reset
  const [resetKey, setResetKey] = useState(0);
  // Add calculation state
  const [isCalculating, setIsCalculating] = useState(true);
  const [showPrices, setShowPrices] = useState(false);

  // Load from localStorage if present
  const getInitialState = () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('rnb_simulation');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          return parsed;
        } catch {}
      }
    }
    return {
      currentStep: 0,
      formData: {
        propertyType: searchParams.get('propertyType') || '',
        rooms: searchParams.get('rooms') || '',
        city: searchParams.get('city') || '',
        district: searchParams.get('district') || '',
        firstName: '',
        lastName: '',
        phone: '',
        email: ''
      }
    };
  };
  const [currentStep, setCurrentStep] = useState(getInitialState().currentStep);
  const [formData, setFormData] = useState(getInitialState().formData);
  const [isWhatsAppUnlocked, setIsWhatsAppUnlocked] = useState(false);

  // Auto-jump to estimation if all info is present in the query
  useEffect(() => {
    if (
      searchParams.get('propertyType') &&
      searchParams.get('rooms') &&
      searchParams.get('district') &&
      currentStep < 3
    ) {
      setCurrentStep(3); // 3 is the estimation step
    }
  }, [searchParams, currentStep]);

  // Save to localStorage on change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('rnb_simulation', JSON.stringify({ currentStep, formData }));
    }
  }, [currentStep, formData]);

  // Reset simulation
  const resetSimulation = () => {
    setCurrentStep(0);
    setFormData({
      propertyType: '',
      rooms: '',
      city: '',
      district: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: ''
    });
    if (typeof window !== 'undefined') {
      localStorage.removeItem('rnb_simulation');
      // Remove query params from URL
      router.replace('/simulate');
    }
    setResetKey(prev => prev + 1); // force re-mount
  };

  // Reset calculation state when step changes
  useEffect(() => {
    if (currentStep === 5) { // Estimation step
      setIsCalculating(true);
      setShowPrices(false);
      
      // After 2 seconds, show completion animation
      const timer1 = setTimeout(() => {
        setIsCalculating(false);
      }, 2000);

      // After another 0.5 seconds, show the prices
      const timer2 = setTimeout(() => {
        setShowPrices(true);
      }, 2500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      setIsCalculating(true);
      setShowPrices(false);
    }
  }, [currentStep]);

  // Property type options (updated)
  const propertyTypes = [
    { label: 'Studio', value: 'Studio', icon: Home },
    { label: 'Appartement', value: 'Appartement', icon: Building2 },
    { label: 'Villa', value: 'Villa', icon: Building },
  ];

  // Room/suite options based on property type
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

  // Saison Modérée prices (Janvier, Février, Mars, Avril, Mai, Octobre)
  const modereeSeasonPrices = {
    'Beauséjour': {
      'Studio': 12500,
      'Appartement': {
        '2': 16000,
        '3': 18000
      },
      'Villa': 'consultation'
    },
    'CFC': {
      'Studio': 16800,
      'Appartement': {
        '2': 17000,
        '3': 'consultation'
      },
      'Villa': 'consultation'
    },
    'Dar Bouazza': {
      'Studio': 13000,
      'Appartement': {
        '2': 20000,
        '3': 22000
      },
      'Villa': 'consultation'
    },
    'Gauthier': {
      'Studio': 13000,
      'Appartement': {
        '2': 16000,
        '3': 18000
      },
      'Villa': 'consultation'
    },
    'Maarif': {
      'Studio': 13000,
      'Appartement': {
        '2': 16000,
        '3': 18000
      },
      'Villa': 'consultation'
    },
    'Marina': {
      'Studio': 16800,
      'Appartement': {
        '2': 17000,
        '3': 'consultation'
      },
      'Villa': 'consultation'
    },
    'Oasis': {
      'Studio': 13000,
      'Appartement': {
        '2': 16000,
        '3': 18000
      },
      'Villa': 'consultation'
    },
    'Palmier': {
      'Studio': 13000,
      'Appartement': {
        '2': 16000,
        '3': 18000
      },
      'Villa': 'consultation'
    },
    'Racing': {
      'Studio': 14500,
      'Appartement': {
        '2': 18000,
        '3': 'consultation'
      },
      'Villa': 'consultation'
    },
    'Autres': 'consultation'
  };

  // Basse Saison prices (Novembre, Décembre)
  const basseSeasonPrices = {
    'Beauséjour': {
      'Studio': 11000,
      'Appartement': {
        '2': 15400,
        '3': 17200
      },
      'Villa': 'consultation'
    },
    'CFC': {
      'Studio': 14000,
      'Appartement': {
        '2': 15400,
        '3': 'consultation'
      },
      'Villa': 'consultation'
    },
    'Dar Bouazza': {
      'Studio': 12400,
      'Appartement': {
        '2': 12000,
        '3': 13000
      },
      'Villa': 'consultation'
    },
    'Gauthier': {
      'Studio': 12400,
      'Appartement': {
        '2': 15400,
        '3': 17200
      },
      'Villa': 'consultation'
    },
    'Maarif': {
      'Studio': 12400,
      'Appartement': {
        '2': 15400,
        '3': 17200
      },
      'Villa': 'consultation'
    },
    'Marina': {
      'Studio': 14000,
      'Appartement': {
        '2': 15400,
        '3': 'consultation'
      },
      'Villa': 'consultation'
    },
    'Oasis': {
      'Studio': 12400,
      'Appartement': {
        '2': 15400,
        '3': 17200
      },
      'Villa': 'consultation'
    },
    'Palmier': {
      'Studio': 12400,
      'Appartement': {
        '2': 15400,
        '3': 17200
      },
      'Villa': 'consultation'
    },
    'Racing': {
      'Studio': 12400,
      'Appartement': {
        '2': 15400,
        '3': 'consultation'
      },
      'Villa': 'consultation'
    },
    'Autres': 'consultation'
  };

  // High season prices (June, July, August, September)
  const highSeasonPrices = {
    'Beauséjour': {
      'Studio': 15000,
      'Appartement': {
        '2': 17000,
        '3': 20000
      },
      'Villa': 'consultation'
    },
    'CFC': {
      'Studio': 24000,
      'Appartement': {
        '2': 26000,
        '3': 'consultation'
      },
      'Villa': 'consultation'
    },
    'Dar Bouazza': {
      'Studio': 14000,
      'Appartement': {
        '2': 45000,
        '3': 47000
      },
      'Villa': 'consultation'
    },
    'Gauthier': {
      'Studio': 15000,
      'Appartement': {
        '2': 17000,
        '3': 19000
      },
      'Villa': 'consultation'
    },
    'Maarif': {
      'Studio': 14000,
      'Appartement': {
        '2': 17000,
        '3': 19000
      },
      'Villa': 'consultation'
    },
    'Marina': {
      'Studio': 24000,
      'Appartement': {
        '2': 26000,
        '3': 'consultation'
      },
      'Villa': 'consultation'
    },
    'Oasis': {
      'Studio': 14000,
      'Appartement': {
        '2': 17000,
        '3': 19000
      },
      'Villa': 'consultation'
    },
    'Palmier': {
      'Studio': 14000,
      'Appartement': {
        '2': 17000,
        '3': 19000
      },
      'Villa': 'consultation'
    },
    'Racing': {
      'Studio': 18000,
      'Appartement': {
        '2': 22000,
        '3': 'consultation'
      },
      'Villa': 'consultation'
    },
    'Autres': 'consultation'
  };

  // Modified handleChange function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'propertyType') {
      setFormData(prev => ({ ...prev, propertyType: value }));
      if (value === 'Studio') {
        setFormData(prev => ({ ...prev, propertyType: value, rooms: '1' }));
        setTimeout(() => setCurrentStep(2), 300); // Skip to district step
        return;
      } else {
        setFormData(prev => ({ ...prev, propertyType: value, rooms: '' }));
        setTimeout(() => setCurrentStep(1), 300); // Go to rooms step
        return;
      }
    }
    if (name === 'rooms') {
      setFormData(prev => ({ ...prev, rooms: value }));
      setTimeout(() => setCurrentStep(2), 300); // Go to district step
      return;
    }
    if (name === 'district') {
      setFormData(prev => ({ ...prev, district: value }));
      // Check if consultation is needed
      if (formData.propertyType === 'Villa' || value === 'Autres') {
        // Go directly to estimation step for consultation
        setTimeout(() => setCurrentStep(5), 300);
      } else {
        // Regular case - go to blurred estimation
        setTimeout(() => setCurrentStep(3), 300);
      }
      return;
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Generate estimation price based on property type and location
  const getEstimatedPrice = () => {
    const district = formData.district;
    const propertyType = formData.propertyType;
    const rooms = formData.rooms;

    if (!district || !propertyType || (propertyType !== 'Studio' && !rooms)) {
      return 'consultation';
    }

    if (district === 'Autres' || propertyType === 'Villa') {
      return 'consultation';
    }

    // Get price based on district and property type
    const districtPrices = highSeasonPrices[district];
    if (!districtPrices) {
      return 'consultation';
    }

    if (propertyType === 'Studio') {
      return districtPrices['Studio'];
    } else if (propertyType === 'Appartement') {
      if (districtPrices['Appartement'] && districtPrices['Appartement'][rooms] !== undefined) {
        return districtPrices['Appartement'][rooms];
      } else {
        return 0;
      }
    }

    return 'consultation';
  };

  // Seasonal multipliers for estimation
  const base = getEstimatedPrice();
  // const haute = base === 'consultation' ? 'consultation' : base;

  // Saison Modérée logic
  let moderee;
  if (formData.propertyType === 'Villa' || formData.district === 'Autres') {
    moderee = 'consultation';
  } else if (modereeSeasonPrices[formData.district]) {
    const districtPrices = modereeSeasonPrices[formData.district];
    if (formData.propertyType === 'Studio') {
      moderee = districtPrices['Studio'];
    } else if (formData.propertyType === 'Appartement') {
      if (districtPrices['Appartement'] && districtPrices['Appartement'][formData.rooms] !== undefined) {
        moderee = districtPrices['Appartement'][formData.rooms];
      } else {
        moderee = 'consultation';
      }
    } else {
      moderee = 'consultation';
    }
  } else {
    moderee = 'consultation';
  }

  // Basse Saison logic
  let basse;
  if (formData.propertyType === 'Villa' || formData.district === 'Autres') {
    basse = 'consultation';
  } else if (basseSeasonPrices[formData.district]) {
    const districtPrices = basseSeasonPrices[formData.district];
    if (formData.propertyType === 'Studio') {
      basse = districtPrices['Studio'];
    } else if (formData.propertyType === 'Appartement') {
      if (districtPrices['Appartement'] && districtPrices['Appartement'][formData.rooms] !== undefined) {
        basse = districtPrices['Appartement'][formData.rooms];
      } else {
        basse = 'consultation';
      }
    } else {
      basse = 'consultation';
    }
  } else {
    basse = 'consultation';
  }

  // High season logic
  let haute;
  if (formData.propertyType === 'Villa' || formData.district === 'Autres') {
    haute = 'consultation';
  } else if (highSeasonPrices[formData.district]) {
    const districtPrices = highSeasonPrices[formData.district];
    if (formData.propertyType === 'Studio') {
      haute = districtPrices['Studio'];
    } else if (formData.propertyType === 'Appartement') {
      if (districtPrices['Appartement'] && districtPrices['Appartement'][formData.rooms] !== undefined) {
        haute = districtPrices['Appartement'][formData.rooms];
      } else {
        haute = 'consultation';
      }
    } else {
      haute = 'consultation';
    }
  } else {
    haute = 'consultation';
  }

  // Count-up animation for numbers
  const [displayHaute, setDisplayHaute] = React.useState(0);
  const [displayModeree, setDisplayModeree] = React.useState(0);
  const [displayBasse, setDisplayBasse] = React.useState(0);

  React.useEffect(() => {
    if (haute === 'consultation') {
      setDisplayHaute('consultation');
      setDisplayModeree('consultation');
      setDisplayBasse('consultation');
      return;
    }

    let start = 0;
    const duration = 900;
    const animate = (target, setter) => {
      let startTime;
      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setter(Math.floor(progress * target));
        if (progress < 1) requestAnimationFrame(step);
        else setter(target);
      }
      requestAnimationFrame(step);
    };
    animate(haute, setDisplayHaute);
    animate(moderee, setDisplayModeree);
    animate(basse, setDisplayBasse);
  }, [haute, moderee, basse, formData.propertyType, formData.rooms, formData.district]);

  // Define the sequence of questions/content (update propertyType, rooms, district steps)
  const stepsContent = [
    {
      key: 'propertyType',
      title: 'Quel type de bien souhaitez-vous simuler ?',
      subtitle: "Sélectionnez le type qui correspond le mieux à votre propriété",
      render: () => (
        <PropertyTypeSelection propertyTypes={propertyTypes} formData={formData} handleChange={handleChange} />
      ),
      validation: () => !!formData.propertyType
    },
    {
      key: 'rooms',
      title: formData.propertyType === 'Villa' ? 'Combien de suites ?' : 'Combien de chambres ?',
      subtitle: formData.propertyType === 'Villa' ? 'Sélectionnez le nombre de suites' : 'Sélectionnez le nombre de chambres',
      render: () => (
        <RoomsSelection roomOptions={roomOptions} formData={formData} handleChange={handleChange} />
      ),
      validation: () => formData.propertyType === 'Studio' ? true : !!formData.rooms
    },
    {
      key: 'district',
      title: 'Dans quel quartier ?',
      subtitle: 'Sélectionnez le quartier de votre bien',
      render: () => (
        <DistrictSelection districts={districts} formData={formData} handleChange={handleChange} />
      ),
      validation: () => !!formData.district
    },
    {
      key: 'blurredEstimation',
      title: 'Estimation et Analyse',
      subtitle: "Découvrez l'évaluation détaillée de la valeur de votre propriété",
      render: () => {
        // If consultation is needed, redirect to personal info step
        if (formData.propertyType === 'Villa' || formData.district === 'Autres') {
          setTimeout(() => setCurrentStep(4), 0);
          return null;
        }

        return (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
            className="relative bg-white/5 backdrop-blur-xl rounded-3xl shadow-3xl border border-white/10 p-8 md:p-12 overflow-visible"
          >
            {/* Blur overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-3xl z-10"></div>

            {/* Mobile-only top button */}
            <div className="md:hidden mb-8 relative z-20">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCurrentStep(4)}
                className="w-full bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/80 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 pointer-events-auto"
              >
                <Lock className="w-5 h-5" />
                <span>Débloquer Mon Estimation</span>
              </motion.button>
            </div>

            {/* Trust Badge */}
            <div className="flex justify-center mb-6 relative">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/80 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                <BarChart2 className="w-4 h-4" /> Estimation basée sur les données du marché
              </span>
            </div>

            {/* Podium Layout for Seasonal Estimations */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.18 } }
              }}
              className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 relative"
            >
              {/* Saison Modérée (left) */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(15,194,139,0.10)' }}
                className="relative flex flex-col items-center justify-between bg-[#f1ede0] rounded-2xl shadow-lg p-8 w-full md:w-auto md:min-w-[260px] min-h-[260px] transition-all"
              >
                <Sparkles className="w-10 h-10 text-[#0fc28b] mb-2 drop-shadow" />
                <div className="text-lg text-[#0fc28b] font-bold mb-1">Saison Modérée</div>
                <div className="text-xs text-gray-500 mb-2 text-center leading-tight">
                  Janvier, Février, Mars,<br />Avril, Mai, Octobre
                </div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="flex items-end justify-center text-5xl font-extrabold text-gray-800 gap-2"
                >
                  <span>??? ???</span>
                  <span className="text-2xl font-semibold ml-1 mb-1 align-baseline">DH</span>
                </motion.div>
                <div className="text-xs text-gray-500 mt-2">Revenu Moyen Mensuel</div>
              </motion.div>

              {/* Haute Saison (center, glowing, with badge) */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ scale: 1.06, boxShadow: '0 12px 48px 0 rgba(15,194,139,0.10)' }}
                className="relative flex flex-col items-center justify-between bg-[#f1ede0] rounded-2xl shadow-lg p-8 w-full md:w-auto md:min-w-[260px] min-h-[260px] transition-all"
              >
                {/* Best Value Badge */}
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/80 text-white text-xs font-bold px-3 py-1 rounded-full shadow animate-bounce z-10">Best Value</span>
                <Sun className="w-10 h-10 text-[#0fc28b] mb-2 drop-shadow" />
                <div className="text-lg text-[#0fc28b] font-bold mb-1">Haute Saison</div>
                <div className="text-xs text-gray-500 mb-2 text-center leading-tight">
                  Juin, Juillet,<br />Août, Septembre
                </div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="flex items-end justify-center text-5xl font-extrabold text-gray-800 gap-2"
                >
                  <span>??? ???</span>
                  <span className="text-2xl font-semibold ml-1 mb-1 align-baseline">DH</span>
                </motion.div>
                <div className="text-xs text-gray-500 mt-2">Revenu Moyen Mensuel</div>
              </motion.div>

              {/* Basse Saison (right) */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(15,194,139,0.10)' }}
                className="relative flex flex-col items-center justify-between bg-[#f1ede0] rounded-2xl shadow-lg p-8 w-full md:w-auto md:min-w-[260px] min-h-[260px] transition-all"
              >
                <Cloud className="w-10 h-10 text-[#0fc28b] mb-2 drop-shadow" />
                <div className="text-lg text-[#0fc28b] font-bold mb-1">Basse Saison</div>
                <div className="text-xs text-gray-500 mb-2 text-center leading-tight">
                  Novembre,<br />Décembre
                </div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="flex items-end justify-center text-5xl font-extrabold text-gray-800 gap-2"
                >
                  <span>??? ???</span>
                  <span className="text-2xl font-semibold ml-1 mb-1 align-baseline">DH</span>
                </motion.div>
                <div className="text-xs text-gray-500 mt-2">Revenu Moyen Mensuel</div>
              </motion.div>
            </motion.div>

            {/* Summary sentence */}
            <div className="text-center mb-8 relative">
              <span className="inline-block bg-[#0fc28b]/10 text-[#0fc28b] px-4 py-2 rounded-full text-xs font-medium">
                Ces estimations sont calculées selon la saisonnalité du marché locatif à Casablanca.
              </span>
            </div>

            <p className="text-gray-400 text-sm mt-8 leading-relaxed text-center relative">
              Cette estimation est basée sur l'analyse des données du marché immobilier récent dans votre quartier et les caractéristiques de votre bien. 
              Elle est indicative. Pour obtenir un rapport d'analyse complet et personnalisé, veuillez remplir vos coordonnées à l'étape suivante.
            </p>

            {/* Unlock Button - Desktop only */}
            <div className="absolute inset-0 hidden md:flex items-center justify-center z-20 pointer-events-none">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCurrentStep(4)}
                className="w-full max-w-sm mx-auto bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/80 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 pointer-events-auto"
              >
                <Lock className="w-5 h-5" />
                <span>Débloquer Mon Estimation</span>
              </motion.button>
            </div>

            <div className="mt-4 text-center text-sm text-gray-400">
              <div className="flex items-center justify-center space-x-2">
                <Lock className="w-4 h-4" />
                <span>Remplissez vos informations pour débloquer l'estimation</span>
              </div>
            </div>
          </motion.div>
        );
      },
      validation: () => true
    },
    {
      key: 'personalInfo',
      title: 'Vos informations personnelles',
      subtitle: 'Remplissez vos informations pour débloquer votre estimation',
      render: () => (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Label htmlFor="firstName" className="text-gray-300">Prénom</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[#0fc28b]/50 focus:ring-2 focus:ring-[#0fc28b]/20 text-white mt-2"
                required
              />
            </div>
            <div className="space-y-4">
              <Label htmlFor="lastName" className="text-gray-300">Nom</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[#0fc28b]/50 focus:ring-2 focus:ring-[#0fc28b]/20 text-white mt-2"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Label htmlFor="phone" className="text-gray-300">Téléphone</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[#0fc28b]/50 focus:ring-2 focus:ring-[#0fc28b]/20 text-white mt-2"
                required
              />
            </div>
            <div className="space-y-4">
              <Label htmlFor="email" className="text-gray-300">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[#0fc28b]/50 focus:ring-2 focus:ring-[#0fc28b]/20 text-white mt-2"
                required
              />
            </div>
          </div>
        </div>
      ),
      validation: () => !!formData.firstName && !!formData.lastName && !!formData.phone && !!formData.email
    },
    {
      key: 'estimation',
      title: 'Estimation et Analyse',
      subtitle: "Découvrez l'évaluation détaillée de la valeur de votre propriété",
      render: () => {
        // Check if consultation is needed for any season
        if (haute === 'consultation' || moderee === 'consultation' || basse === 'consultation') {
          return (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
              className="relative bg-white/5 backdrop-blur-xl rounded-3xl shadow-3xl border border-white/10 p-8 md:p-12 overflow-visible text-center"
            >
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="w-20 h-20 bg-[#0fc28b]/20 rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-[#0fc28b]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Consultation Personnalisée Nécessaire</h3>
                <p className="text-gray-300 max-w-md text-center">
                  Pour ce type de bien, nous avons besoin d'analyser plus en détail vos besoins spécifiques.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg mt-4">
                  <div className="flex items-center space-x-3 bg-white/5 p-4 rounded-xl">
                    <Building2 className="w-5 h-5 text-[#0fc28b]" />
                    <div className="text-left">
                      <p className="text-sm text-gray-400">Type de Bien</p>
                      <p className="text-white font-medium">{formData.propertyType}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/5 p-4 rounded-xl">
                    <MapPin className="w-5 h-5 text-[#0fc28b]" />
                    <div className="text-left">
                      <p className="text-sm text-gray-400">Quartier</p>
                      <p className="text-white font-medium">{formData.district}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 mt-4">
                  <Lock className="w-4 h-4" />
                  <span>100% Gratuit et Confidentiel</span>
                </div>
              </div>
            </motion.div>
          );
        }

        return (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
            className="relative bg-white/5 backdrop-blur-xl rounded-3xl shadow-3xl border border-white/10 p-8 md:p-12 overflow-visible"
          >
            {/* Calculating Animation Overlay */}
            <AnimatePresence>
              {isCalculating && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-3xl z-50 flex flex-col items-center justify-center space-y-6"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                      className="w-16 h-16 border-4 border-[#0fc28b]/30 border-t-[#0fc28b] rounded-full"
                    />
                    <Calculator className="w-6 h-6 text-[#0fc28b] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <p className="text-white font-medium">Calcul de votre estimation en cours...</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Success Animation when calculation completes */}
            <AnimatePresence>
              {!isCalculating && !showPrices && (
                <motion.div
                  initial={{ opacity: 1, scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-3xl z-50 flex flex-col items-center justify-center space-y-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 10 }}
                    className="w-20 h-20 bg-[#0fc28b]/20 rounded-full flex items-center justify-center"
                  >
                    <Check className="w-10 h-10 text-[#0fc28b]" />
                  </motion.div>
                  <p className="text-white font-medium">Estimation calculée !</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Trust Badge */}
            <div className="flex justify-center mb-6 relative">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/80 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                <BarChart2 className="w-4 h-4" /> Estimation basée sur les données du marché
              </span>
            </div>

            {/* Podium Layout for Seasonal Estimations */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.18 } }
              }}
              className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 relative"
            >
              {/* Saison Modérée (left) */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(15,194,139,0.10)' }}
                className="relative flex flex-col items-center justify-between bg-[#f1ede0] rounded-2xl shadow-lg p-8 w-full md:w-auto md:min-w-[260px] min-h-[260px] transition-all"
              >
                <Sparkles className="w-10 h-10 text-[#0fc28b] mb-2 drop-shadow" />
                <div className="text-lg text-[#0fc28b] font-bold mb-1">Saison Modérée</div>
                <div className="text-xs text-gray-500 mb-2 text-center leading-tight">
                  Janvier, Février, Mars,<br />Avril, Mai, Octobre
                </div>
                <AnimatePresence mode="wait">
                  {showPrices ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-end justify-center text-5xl font-extrabold text-gray-800 gap-2"
                    >
                      <span>{typeof moderee === 'number' ? moderee.toString() : moderee}</span>
                      <span className="text-2xl font-semibold ml-1 mb-1 align-baseline">DH</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-end justify-center text-5xl font-extrabold text-gray-800 gap-2"
                    >
                      <span className="w-32 h-12 bg-gray-200 rounded-lg animate-pulse"></span>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="text-xs text-gray-500 mt-2">Revenu Moyen Mensuel</div>
              </motion.div>

              {/* Haute Saison (center) */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ scale: 1.06, boxShadow: '0 12px 48px 0 rgba(15,194,139,0.10)' }}
                className="relative flex flex-col items-center justify-between bg-[#f1ede0] rounded-2xl shadow-lg p-8 w-full md:w-auto md:min-w-[260px] min-h-[260px] transition-all"
              >
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/80 text-white text-xs font-bold px-3 py-1 rounded-full shadow animate-bounce z-10">Best Value</span>
                <Sun className="w-10 h-10 text-[#0fc28b] mb-2 drop-shadow" />
                <div className="text-lg text-[#0fc28b] font-bold mb-1">Haute Saison</div>
                <div className="text-xs text-gray-500 mb-2 text-center leading-tight">
                  Juin, Juillet,<br />Août, Septembre
                </div>
                <AnimatePresence mode="wait">
                  {showPrices ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-end justify-center text-5xl font-extrabold text-gray-800 gap-2"
                    >
                      <span>{typeof haute === 'number' ? haute.toString() : haute}</span>
                      <span className="text-2xl font-semibold ml-1 mb-1 align-baseline">DH</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-end justify-center text-5xl font-extrabold text-gray-800 gap-2"
                    >
                      <span className="w-32 h-12 bg-gray-200 rounded-lg animate-pulse"></span>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="text-xs text-gray-500 mt-2">Revenu Moyen Mensuel</div>
              </motion.div>

              {/* Basse Saison (right) */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(15,194,139,0.10)' }}
                className="relative flex flex-col items-center justify-between bg-[#f1ede0] rounded-2xl shadow-lg p-8 w-full md:w-auto md:min-w-[260px] min-h-[260px] transition-all"
              >
                <Cloud className="w-10 h-10 text-[#0fc28b] mb-2 drop-shadow" />
                <div className="text-lg text-[#0fc28b] font-bold mb-1">Basse Saison</div>
                <div className="text-xs text-gray-500 mb-2 text-center leading-tight">
                  Novembre,<br />Décembre
                </div>
                <AnimatePresence mode="wait">
                  {showPrices ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-end justify-center text-5xl font-extrabold text-gray-800 gap-2"
                    >
                      <span>{typeof basse === 'number' ? basse.toString() : basse}</span>
                      <span className="text-2xl font-semibold ml-1 mb-1 align-baseline">DH</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-end justify-center text-5xl font-extrabold text-gray-800 gap-2"
                    >
                      <span className="w-32 h-12 bg-gray-200 rounded-lg animate-pulse"></span>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="text-xs text-gray-500 mt-2">Revenu Moyen Mensuel</div>
              </motion.div>
            </motion.div>

            {/* Rest of the content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showPrices ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Summary sentence */}
              <div className="text-center mb-8 relative">
                <span className="inline-block bg-[#0fc28b]/10 text-[#0fc28b] px-4 py-2 rounded-full text-xs font-medium">
                  Ces estimations sont calculées selon la saisonnalité du marché locatif à Casablanca.
                </span>
              </div>

              <p className="text-gray-400 text-sm mt-8 leading-relaxed text-center relative">
                Cette estimation est basée sur l'analyse des données du marché immobilier récent dans votre quartier et les caractéristiques de votre bien. 
                Elle est indicative. Pour obtenir un rapport d'analyse complet et personnalisé, continuez à l'étape suivante.
              </p>
            </motion.div>
          </motion.div>
        );
      },
      validation: () => true
    },
    {
      key: 'report',
      title: 'Votre Rapport Personnalisé est Prêt',
      subtitle: 'Téléchargez votre rapport complet maintenant',
      render: () => (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Success Animation */}
          <div className="flex justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2 
              }}
              className="w-24 h-24 bg-gradient-to-r from-[#0fc28b]/20 to-[#0fc28b]/20 rounded-full flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="w-16 h-16 bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/80 rounded-full flex items-center justify-center"
              >
                <Check className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          </div>

          {/* Property Summary with Price Estimates */}
          <div className="mt-8 bg-gradient-to-br from-[#0fc28b]/10 to-[#0fc28b]/10 rounded-xl p-6 border border-[#0fc28b]/20">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-3">
              <h3 className="text-xl font-semibold text-white">Votre Estimation Personnalisée</h3>
              <div className="px-4 py-1 bg-[#0fc28b]/20 rounded-full">
                <span className="text-[#0fc28b] text-sm font-medium">Rapport Prêt</span>
              </div>
            </div>

            {/* Property Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-5 h-5 text-[#0fc28b]" />
                    <span className="text-gray-300">Type de Bien</span>
                  </div>
                  <span className="text-white font-medium">{formData.propertyType}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Bed className="w-5 h-5 text-[#0fc28b]" />
                    <span className="text-gray-300">{formData.propertyType === 'Villa' ? 'Suites' : 'Chambres'}</span>
                  </div>
                  <span className="text-white font-medium">{formData.rooms}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-[#0fc28b]" />
                    <span className="text-gray-300">Quartier</span>
                  </div>
                  <span className="text-white font-medium">{formData.district}</span>
                </div>
              </div>

              {/* Price Estimates */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Sun className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">Haute Saison</span>
                  </div>
                  <span className="text-white font-medium">
                    {typeof haute === 'number' ? `${haute.toString()} DH` : 'Sur consultation'}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CloudSun className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Saison Modérée</span>
                  </div>
                  <span className="text-white font-medium">
                    {typeof moderee === 'number' ? `${moderee.toString()} DH` : 'Sur consultation'}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Cloud className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300">Basse Saison</span>
                  </div>
                  <span className="text-white font-medium">
                    {typeof basse === 'number' ? `${basse.toString()} DH` : 'Sur consultation'}
                  </span>
                </div>
              </div>
            </div>

            {/* Download CTA */}
            <div className="mt-8 text-center space-y-6">
              <div className="bg-[#0fc28b]/10 rounded-lg p-4">
                <p className="text-gray-300 mb-2">
                  Téléchargez votre rapport complet pour découvrir :
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#0fc28b]" />
                    <span className="text-white">Analyse détaillée</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#0fc28b]" />
                    <span className="text-white">Comparatif marché</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#0fc28b]" />
                    <span className="text-white">Prévisions revenus</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#0fc28b]" />
                    <span className="text-white">Conseils experts</span>
                  </div>
                </div>
              </div>

              <PDFDownloadButton
                propertyType={formData.propertyType}
                rooms={formData.rooms}
                district={formData.district}
                fullName={`${formData.firstName} ${formData.lastName}`}
                phone={formData.phone}
                email={formData.email}
                hauteSaison={typeof haute === 'number' ? haute.toString() : haute}
                saisonModeree={typeof moderee === 'number' ? moderee.toString() : moderee}
                basseSaison={typeof basse === 'number' ? basse.toString() : basse}
                onDownload={() => setIsWhatsAppUnlocked(true)}
              />

              {/* WhatsApp Button - Only show for consultation cases */}
              {(haute === 'consultation' || moderee === 'consultation' || basse === 'consultation') && (
                <div className="relative mt-4">
                  <motion.a
                    href={isWhatsAppUnlocked ? "https://wa.me/212660408470" : "#"}
                    onClick={(e) => !isWhatsAppUnlocked && e.preventDefault()}
                    whileHover={{ scale: isWhatsAppUnlocked ? 1.02 : 1 }}
                    whileTap={{ scale: isWhatsAppUnlocked ? 0.98 : 1 }}
                    className={`w-full flex items-center justify-center space-x-3 px-6 py-4 rounded-xl text-white transition-all duration-300 ${
                      isWhatsAppUnlocked 
                        ? "bg-[#25D366] hover:bg-[#22c35e] shadow-lg hover:shadow-xl" 
                        : "bg-gray-600/50 cursor-not-allowed"
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-3">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      <span className="text-lg font-medium">
                        {isWhatsAppUnlocked ? "Discuter avec un expert sur WhatsApp" : "Débloquez la discussion WhatsApp"}
                      </span>
                    </div>
                  </motion.a>
                  {!isWhatsAppUnlocked && (
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
                        <Lock className="w-4 h-4" />
                        Téléchargez votre rapport pour débloquer WhatsApp
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 mt-8">
                <Lock className="w-4 h-4" />
                <span>100% Gratuit et Confidentiel</span>
              </div>
            </div>
          </div>

          {/* Contact Section - Other contact methods */}
          <div className="mt-12 text-center space-y-4">
            <p className="text-gray-300">
              Autres moyens de nous contacter
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+212660408470"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/15 rounded-xl text-white transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>Appelez-nous</span>
              </motion.a>
              <motion.a
                href="mailto:contact@rentabilio.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/15 rounded-xl text-white transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>Envoyez un email</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      ),
      validation: () => true
    }
  ];

  // Go to next step
  const nextStep = () => {
    // Validate current step before moving
    if (stepsContent[currentStep].validation && !stepsContent[currentStep].validation()) {
      alert('Veuillez remplir ce champ pour continuer.');
      return;
    }
    setCurrentStep(prev => Math.min(prev + 1, stepsContent.length - 1));
  };

  // Go to previous step
  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  // Progress bar calculation
  const totalSteps = 3 + 5; // 3 main steps, 5 info steps
  const mainStep = currentStep <= 2 ? currentStep : 2;
  const progressPercent = ((currentStep + 1) / stepsContent.length) * 100;

  // Render the content for the current step
  const currentStepContent = stepsContent[currentStep];
  
  // Ensure currentStep is within bounds
  const safeCurrentStep = Math.min(Math.max(0, currentStep), stepsContent.length - 1);
  
  // Add handleDownload function
  const handleDownload = () => {
    // Handle download logic here
    setIsWhatsAppUnlocked(true);
    // You can add your actual download logic here
  };

  return (
    <div key={resetKey} className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-12 min-h-screen flex flex-col">
        <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col">
          <div className="flex justify-end mb-4">
            <Button variant="outline" className="bg-white/10 text-white border-white/20" onClick={resetSimulation}>
              Nouvelle simulation
            </Button>
          </div>
          <StepIndicator currentStep={safeCurrentStep} />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex-1 flex flex-col justify-center"
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#0fc28b]/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#0fc28b]/20 rounded-full blur-3xl" />
            </div>

            {/* Main content area */}
            <div className="relative">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  {stepsContent[safeCurrentStep].title}
                </h2>
                <p className="text-gray-400 text-lg">
                  {stepsContent[safeCurrentStep].subtitle}
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                {stepsContent[safeCurrentStep].render()}
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between mt-8">
                {safeCurrentStep > 0 && (
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    className="bg-white/5 hover:bg-white/10 text-white border-white/20"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                    Précédent
                  </Button>
                )}
                <div className="flex-1" />
                {safeCurrentStep < stepsContent.length - 1 && (
                  <Button
                    onClick={nextStep}
                    disabled={!stepsContent[safeCurrentStep].validation()}
                    className="bg-[#0fc28b] hover:bg-[#0fc28b]/90 text-white"
                  >
                    Suivant
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Update the property type selection UI
const PropertyTypeSelection = ({ propertyTypes, formData, handleChange }) => (
  <div className="space-y-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {propertyTypes.map(({ icon: Icon, label, value }) => (
        <motion.button
          key={value}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleChange({ target: { name: 'propertyType', value } } as any)}
          className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300
            ${formData.propertyType === value 
              ? 'bg-gradient-to-br from-[#0fc28b] to-[#0fc28b]/80 shadow-lg shadow-[#0fc28b]/20' 
              : 'bg-white/5 hover:bg-white/10'}`}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className={`p-4 rounded-full ${formData.propertyType === value ? 'bg-white/20' : 'bg-white/10'}`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <span className="text-lg font-medium text-white">{label}</span>
          </div>
        </motion.button>
      ))}
    </div>
    <ReviewsCarousel />
  </div>
);

// Update the rooms selection UI
const RoomsSelection = ({ roomOptions, formData, handleChange }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {roomOptions.map((room) => (
      <motion.button
        key={room}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => handleChange({ target: { name: 'rooms', value: room } } as any)}
        className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300
          ${formData.rooms === room 
            ? 'bg-gradient-to-br from-[#0fc28b] to-[#0fc28b]/80 shadow-lg shadow-[#0fc28b]/20' 
            : 'bg-white/5 hover:bg-white/10'}`}
      >
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-full ${formData.rooms === room ? 'bg-white/20' : 'bg-white/10'}`}>
            <Bed className="w-6 h-6 text-white" />
          </div>
          <span className="text-lg font-medium text-white">{room}</span>
        </div>
      </motion.button>
    ))}
  </div>
);

// Update the district selection UI
const DistrictSelection = ({ districts, formData, handleChange }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {districts.map((district) => (
      <motion.button
        key={district}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => handleChange({ target: { name: 'district', value: district } } as any)}
        className={`relative overflow-hidden rounded-xl p-4 transition-all duration-300
          ${formData.district === district 
            ? 'bg-gradient-to-br from-[#0fc28b] to-[#0fc28b]/80 shadow-lg shadow-[#0fc28b]/20' 
            : 'bg-white/5 hover:bg-white/10'}`}
      >
        <div className="flex items-center space-x-3">
          <MapPin className="w-5 h-5 text-white" />
          <span className="text-white font-medium">{district}</span>
        </div>
      </motion.button>
    ))}
  </div>
); 