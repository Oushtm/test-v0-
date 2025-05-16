'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calculator, Loader2, Home, TrendingUp, Shield, Clock, ArrowRight, Star, Building2, KeyRound } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function Hero() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: '',
    chambres: '',
    ville: '',
    quartier: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.type) newErrors.type = 'Veuillez sélectionner un type de bien';
    if (!formData.chambres) newErrors.chambres = 'Veuillez sélectionner le nombre de chambres';
    if (!formData.ville) newErrors.ville = 'Veuillez sélectionner une ville';
    if (!formData.quartier) newErrors.quartier = 'Veuillez entrer un quartier';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Create query parameters
      const params = new URLSearchParams();
      params.append('propertyType', formData.type);
      params.append('rooms', formData.chambres);
      params.append('city', formData.ville);
      params.append('district', formData.quartier);

      // Redirect to the simulation page with query parameters
      router.push(`/simulate?${params.toString()}`);
    } catch (error) {
      toast.error('Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when field is modified
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <Image
            src="/images/2224.jpg"
            alt="Modern luxury apartment interior"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/75 via-gray-800/65 to-blue-900/55 backdrop-blur-[1px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-medium">Service Premium</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                Conciergerie Exceptionnelle à Casablanca pour Votre Tranquillité d'Esprit
              </h1>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                Gestion Professionnelle pour Maximiser vos Revenus Locatifs et Assurer une Expérience Cinq Étoiles
              </p>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Building2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold">Gestion Immobilière</h3>
                </div>
                <p className="text-gray-300 text-sm">Optimisation complète de votre patrimoine immobilier</p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <KeyRound className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-white font-semibold">Service Clé en Main</h3>
                </div>
                <p className="text-gray-300 text-sm">Une expérience locative premium sans soucis</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
            id="simulation-form"
          >
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/20 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">Évaluez votre bien immobilier</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-white text-sm font-medium">Type de bien</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-800/90 border ${
                        errors.type ? 'border-red-500' : 'border-white/20'
                      } text-white focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none`}
                      required
                    >
                      <option value="" className="text-gray-400">Sélectionnez un type</option>
                      <option value="appartement" className="text-white bg-gray-800">Appartement</option>
                      <option value="studio" className="text-white bg-gray-800">Studio</option>
                      <option value="villa" className="text-white bg-gray-800">Villa</option>
                      <option value="duplex" className="text-white bg-gray-800">Duplex</option>
                      <option value="penthouse" className="text-white bg-gray-800">Penthouse</option>
                    </select>
                    {errors.type && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm"
                      >
                        {errors.type}
                      </motion.p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-white text-sm font-medium">Nombre de chambres</label>
                    <select
                      name="chambres"
                      value={formData.chambres}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-800/90 border ${
                        errors.chambres ? 'border-red-500' : 'border-white/20'
                      } text-white focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none`}
                      required
                    >
                      <option value="" className="text-gray-400">Sélectionnez</option>
                      <option value="1" className="text-white bg-gray-800">1</option>
                      <option value="2" className="text-white bg-gray-800">2</option>
                      <option value="3" className="text-white bg-gray-800">3</option>
                      <option value="4" className="text-white bg-gray-800">4</option>
                      <option value="+4" className="text-white bg-gray-800">+4</option>
                    </select>
                    {errors.chambres && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm"
                      >
                        {errors.chambres}
                      </motion.p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-white text-sm font-medium">Ville du bien</label>
                    <select
                      name="ville"
                      value={formData.ville}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-800/90 border ${
                        errors.ville ? 'border-red-500' : 'border-white/20'
                      } text-white focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none`}
                      required
                    >
                      <option value="" className="text-gray-400">Sélectionnez une ville</option>
                      <option value="casablanca" className="text-white bg-gray-800">Casablanca</option>
                      <option value="rabat" className="text-white bg-gray-800">Rabat</option>
                      <option value="marrakech" className="text-white bg-gray-800">Marrakech</option>
                      <option value="tanger" className="text-white bg-gray-800">Tanger</option>
                      <option value="agadir" className="text-white bg-gray-800">Agadir</option>
                      <option value="fes" className="text-white bg-gray-800">Fès</option>
                      <option value="meknes" className="text-white bg-gray-800">Meknès</option>
                      <option value="tetouan" className="text-white bg-gray-800">Tétouan</option>
                      <option value="oujda" className="text-white bg-gray-800">Oujda</option>
                      <option value="eljadida" className="text-white bg-gray-800">El Jadida</option>
                    </select>
                    {errors.ville && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm"
                      >
                        {errors.ville}
                      </motion.p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-white text-sm font-medium">Quartier</label>
                    <input
                      type="text"
                      name="quartier"
                      value={formData.quartier}
                      onChange={handleChange}
                      placeholder="Entrez le quartier"
                      className={`w-full px-4 py-3 rounded-lg bg-gray-800/90 border ${
                        errors.quartier ? 'border-red-500' : 'border-white/20'
                      } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      required
                    />
                    {errors.quartier && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm"
                      >
                        {errors.quartier}
          </motion.p>
                    )}
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group bg-blue-500 hover:bg-blue-600 text-white font-medium py-3"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    ) : (
                      <Calculator className="w-5 h-5 mr-2" />
                    )}
                    {isLoading ? 'Simulation en cours...' : 'Simuler'}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}