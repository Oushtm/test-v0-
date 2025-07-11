'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calculator, ArrowRight, BarChart2, Users } from 'lucide-react';

const SimulationSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#0fc28b]/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#0fc28b]/10 text-[#0fc28b] rounded-full text-sm font-medium mb-4">
            Simulation
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simulez la rentabilité de votre bien
          </h2>
          <p className="text-gray-600 text-lg">
            Découvrez en quelques clics le potentiel de rentabilité de votre bien immobilier.
            Notre outil de simulation vous permet d'obtenir une estimation précise et personnalisée.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/simulation-1.jpg"
                alt="Simulation rapide"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0fc28b]/50 to-transparent" />
            </div>
            <div className="w-16 h-16 bg-[#0fc28b]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0fc28b]/20 transition-colors">
              <Calculator className="w-8 h-8 text-[#0fc28b]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Simulation rapide</h3>
            <p className="text-gray-600 leading-relaxed">
              Obtenez une estimation en quelques minutes en renseignant les caractéristiques de votre bien.
            </p>
          </div>

          <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/simulation-2.jpg"
                alt="Analyse détaillée"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0fc28b]/50 to-transparent" />
            </div>
            <div className="w-16 h-16 bg-[#0fc28b]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0fc28b]/20 transition-colors">
              <BarChart2 className="w-8 h-8 text-[#0fc28b]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Analyse détaillée</h3>
            <p className="text-gray-600 leading-relaxed">
              Recevez une analyse complète incluant les tendances du marché et les opportunités d'optimisation.
            </p>
          </div>

          <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/simulation-3.jpg"
                alt="Accompagnement"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0fc28b]/50 to-transparent" />
            </div>
            <div className="w-16 h-16 bg-[#0fc28b]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0fc28b]/20 transition-colors">
              <Users className="w-8 h-8 text-[#0fc28b]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Accompagnement</h3>
            <p className="text-gray-600 leading-relaxed">
              Bénéficiez d'un accompagnement personnalisé pour maximiser la rentabilité de votre investissement.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/simulate"
            className="group inline-flex items-center bg-[#0fc28b] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#0fc28b]/90 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Lancer la simulation
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SimulationSection; 