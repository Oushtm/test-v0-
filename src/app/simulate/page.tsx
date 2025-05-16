'use client';

import React, { useState, useEffect } from 'react';
import { Calculator, Home, Check, ArrowRight, File, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// Step indicators component
const StepIndicator = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="flex items-center justify-center space-x-2 mb-8">
      {[1, 2, 3, 4].map((step) => (
        <div
          key={step}
          className={`flex items-center justify-center w-8 h-8 rounded-full border ${
            step === currentStep
              ? 'border-blue-500 bg-blue-500 text-white'
              : step < currentStep
              ? 'border-green-500 bg-green-500 text-white'
              : 'border-gray-500 bg-transparent text-gray-500'
          }`}
        >
          {step < currentStep ? <Check className="w-4 h-4" /> : step}
        </div>
      ))}
    </div>
  );
};

// Add Bot Assistant component
const BotAssistant = ({ step }: { step: number }) => {
  const getBotMessage = () => {
    switch (step) {
      case 1:
        return {
          title: "👋 Bienvenue dans le simulateur !",
          message: "Je vais vous aider à estimer la valeur de votre bien. Commençons par les informations de base sur votre propriété.",
          tips: [
            "Sélectionnez le type de bien qui correspond le mieux à votre propriété",
            "Indiquez le nombre de chambres exact",
            "La ville et le quartier sont importants pour une estimation précise"
          ]
        };
      case 2:
        return {
          title: "💡 Voici votre estimation",
          message: "J'ai analysé les données du marché immobilier local pour calculer cette estimation.",
          tips: [
            "Cette estimation est basée sur les transactions récentes",
            "Les prix du marché sont mis à jour régulièrement",
            "L'estimation peut varier selon les caractéristiques spécifiques"
          ]
        };
      case 3:
        return {
          title: "📝 Personnalisons votre rapport",
          message: "Pour recevoir une analyse détaillée, j'ai besoin de quelques informations supplémentaires.",
          tips: [
            "Vos informations restent confidentielles",
            "Le rapport sera envoyé à l'email indiqué",
            "Vous pouvez nous contacter pour plus de détails"
          ]
        };
      case 4:
        return {
          title: "🎉 Votre rapport est prêt !",
          message: "J'ai préparé un rapport détaillé avec toutes les informations sur votre bien.",
          tips: [
            "Téléchargez votre rapport complet",
            "Consultez les tendances du marché",
            "Prenez rendez-vous avec un expert"
          ]
        };
      default:
        return {
          title: "",
          message: "",
          tips: []
        };
    }
  };

  const botMessage = getBotMessage();

  return (
    <div className="mb-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-white/10">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">{botMessage.title}</h3>
          <p className="text-gray-300 mb-4">{botMessage.message}</p>
          <div className="space-y-2">
            {botMessage.tips.map((tip, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-1 h-1 rounded-full bg-blue-400" />
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function SimulatePage() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: '',
    rooms: '',
    city: '',
    district: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  });

  // Load initial data from URL parameters
  useEffect(() => {
    const propertyType = searchParams.get('propertyType');
    const rooms = searchParams.get('rooms');
    const city = searchParams.get('city');
    const district = searchParams.get('district');

    if (propertyType || rooms || city || district) {
      setFormData(prev => ({
        ...prev,
        propertyType: propertyType || '',
        rooms: rooms || '',
        city: city || '',
        district: district || ''
      }));
    }
  }, [searchParams]);

  // Property type options
  const propertyTypes = [
    'Appartement',
    'Studio',
    'Villa',
    'Duplex',
    'Penthouse'
  ];

  // Room number options
  const roomOptions = ['1', '2', '3', '4', '+4'];

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Go to next step
  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  // Go to previous step
  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  // Generate a random estimation price
  const getEstimatedPrice = () => {
    // This is just a placeholder - in a real application, you would use
    // actual calculation logic based on the property details
    const basePrice = formData.propertyType === 'Villa' ? 450000 : 250000;
    const roomMultiplier = parseInt(formData.rooms) || 1;
    
    return (basePrice * roomMultiplier).toLocaleString('fr-FR') + ' €';
  };

  // Render form content based on current step
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Étape 1: Informations sur le bien
            </h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="propertyType">Type de bien</Label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 text-white mt-2 [&>option]:text-gray-900 [&>option]:bg-white"
                  required
                >
                  <option value="" disabled className="text-gray-500">Sélectionnez un type</option>
                  {propertyTypes.map((type) => (
                    <option key={type} value={type} className="text-gray-900 bg-white">{type}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <Label htmlFor="rooms">Nombre de chambres</Label>
                <select
                  id="rooms"
                  name="rooms"
                  value={formData.rooms}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 text-white mt-2 [&>option]:text-gray-900 [&>option]:bg-white"
                  required
                >
                  <option value="" disabled className="text-gray-500">Sélectionnez</option>
                  {roomOptions.map((option) => (
                    <option key={option} value={option} className="text-gray-900 bg-white">{option}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <Label htmlFor="city">Ville du bien</Label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 text-white mt-2"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="district">Quartier</Label>
                <Input
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 text-white mt-2"
                  required
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button 
                onClick={nextStep}
                disabled={!formData.propertyType || !formData.rooms || !formData.city || !formData.district}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl flex items-center space-x-2"
              >
                <span>Continuer</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Étape 2: Estimation prévisionnelle
            </h2>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="text-center mb-6">
                <h3 className="text-lg text-gray-300 mb-2">Valeur estimée de votre bien</h3>
                <div className="text-4xl font-bold text-blue-400">{getEstimatedPrice()}</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Type de bien</span>
                  <span className="font-medium text-white">{formData.propertyType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Nombre de chambres</span>
                  <span className="font-medium text-white">{formData.rooms}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Ville</span>
                  <span className="font-medium text-white">{formData.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Quartier</span>
                  <span className="font-medium text-white">{formData.district}</span>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-300 mb-4">
                  Pour une estimation plus précise, prenez rendez-vous avec l'un de nos experts
                </p>
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button
                onClick={prevStep}
                className="bg-transparent hover:bg-white/10 text-white border border-white/20 px-6 py-2 rounded-xl"
              >
                Retour
              </Button>
              <Button
                onClick={nextStep}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl flex items-center space-x-2"
              >
                <span>Demander un rendez-vous</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Étape 3: Vos coordonnées
            </h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="firstName">Prénom</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 text-white mt-2"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="lastName">Nom</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 text-white mt-2"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 text-white mt-2"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Adresse email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 text-white mt-2"
                  required
                />
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button
                onClick={prevStep}
                className="bg-transparent hover:bg-white/10 text-white border border-white/20 px-6 py-2 rounded-xl"
              >
                Retour
              </Button>
              <Button
                onClick={nextStep}
                disabled={!formData.firstName || !formData.lastName || !formData.phone || !formData.email}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl flex items-center space-x-2"
              >
                <span>Confirmer</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-8 text-center">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-white">
              Votre demande a été envoyée avec succès !
            </h2>
            
            <p className="text-gray-300">
              Merci {formData.firstName}. Nous vous contacterons rapidement pour organiser un rendez-vous.
              Un email de confirmation a été envoyé à {formData.email}.
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 mt-8">
              <h3 className="text-xl font-medium text-white mb-4">
                Téléchargez notre brochure
              </h3>
              <p className="text-gray-300 mb-4">
                Découvrez nos services et comment nous pouvons vous aider à réaliser votre projet immobilier.
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl flex items-center space-x-2 mx-auto">
                <Download className="w-4 h-4" />
                <span>Télécharger la brochure PDF</span>
              </Button>
            </div>
            
            <div className="mt-8">
              <Link href="/">
                <Button className="bg-transparent hover:bg-white/10 text-white border border-white/20 px-6 py-2 rounded-xl">
                  Retour à l'accueil
                </Button>
              </Link>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Progress Steps */}
          <StepIndicator currentStep={currentStep} />
          
          {/* Bot Assistant */}
          <BotAssistant step={currentStep} />
          
          {/* Simulation Guide */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 mb-4">
              Simulateur de Valeur Immobilière
            </h1>
            <p className="text-gray-300 text-lg">
              Estimez la valeur de votre bien en quelques étapes simples
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl">
            {renderStepContent()}
          </div>

          {/* Help Section */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Besoin d'aide ? {' '}
              <Link href="/contact" className="text-blue-400 hover:text-blue-300">
                Contactez-nous
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 