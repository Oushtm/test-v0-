'use client';

import React from 'react';
import Image from 'next/image';
import { Building2, Shield, LineChart, Users, Check } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Building2 className="w-8 h-8 text-[#0fc28b]" />,
      title: 'Expertise Immobilière',
      description: 'Notre équipe d\'experts vous accompagne dans la gestion de votre bien immobilier.'
    },
    {
      icon: <Shield className="w-8 h-8 text-[#0fc28b]" />,
      title: 'Sécurité Garantie',
      description: 'Nous assurons la protection de votre investissement avec des contrats sécurisés.'
    },
    {
      icon: <LineChart className="w-8 h-8 text-[#0fc28b]" />,
      title: 'Rentabilité Optimisée',
      description: 'Maximisez vos revenus locatifs grâce à notre analyse de marché approfondie.'
    },
    {
      icon: <Users className="w-8 h-8 text-[#0fc28b]" />,
      title: 'Service Personnalisé',
      description: 'Un accompagnement sur mesure adapté à vos besoins spécifiques.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="relative w-64 h-64 mx-auto mb-8">
            <Image
              src="/logo.png"
              alt="Rentabilio"
              width={256}
              height={256}
              className="w-full h-full"
              priority
            />
          </div>
          <span className="inline-block px-6 py-2 bg-[#0fc28b]/10 text-[#0fc28b] rounded-full text-sm font-medium mb-4 shadow-sm">
            À propos de nous
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Qui sommes-nous ?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            RENTABILIO est votre partenaire de confiance pour optimiser la rentabilité de votre bien immobilier.
            Notre expertise et notre approche personnalisée vous garantissent des résultats exceptionnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          <div className="bg-[#1a1f36] rounded-2xl p-6 flex items-center space-x-4">
            <div className="bg-[#0fc28b]/10 p-3 rounded-xl">
              <Building2 className="w-6 h-6 text-[#0fc28b]" />
            </div>
            <div>
              <div className="text-white font-bold text-xl">500+</div>
              <div className="text-gray-400 text-sm">investissements réussis</div>
            </div>
          </div>
          <div className="bg-[#1a1f36] rounded-2xl p-6 flex items-center space-x-4">
            <div className="bg-[#0fc28b]/10 p-3 rounded-xl">
              <LineChart className="w-6 h-6 text-[#0fc28b]" />
            </div>
            <div>
              <div className="text-white font-bold text-xl">8%/an</div>
              <div className="text-gray-400 text-sm">Rentabilité moyenne</div>
            </div>
          </div>
          <div className="bg-[#1a1f36] rounded-2xl p-6 flex items-center space-x-4">
            <div className="bg-[#0fc28b]/10 p-3 rounded-xl">
              <Building2 className="w-6 h-6 text-[#0fc28b]" />
            </div>
            <div>
              <div className="text-white font-bold text-xl">1000+</div>
              <div className="text-gray-400 text-sm">biens gérés</div>
            </div>
          </div>
          <div className="bg-[#1a1f36] rounded-2xl p-6 flex items-center space-x-4">
            <div className="bg-[#0fc28b]/10 p-3 rounded-xl">
              <Users className="w-6 h-6 text-[#0fc28b]" />
            </div>
            <div>
              <div className="text-white font-bold text-xl">20</div>
              <div className="text-gray-400 text-sm">experts dédiés</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0fc28b]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#0fc28b]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0fc28b]/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                Notre Mission
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Chez RENTABILIO, nous nous engageons à maximiser la rentabilité de votre bien immobilier
                tout en vous offrant une expérience client exceptionnelle. Notre équipe d'experts met
                tout en œuvre pour vous accompagner à chaque étape de votre projet.
              </p>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0fc28b]/10 text-[#0fc28b] rounded-full flex items-center justify-center mr-4 group-hover:bg-[#0fc28b] group-hover:text-white transition-colors">
                  <Check className="w-4 h-4" />
                </span>
                <span className="text-gray-600 text-lg">
                  Analyse approfondie du marché immobilier
                </span>
              </li>
              <li className="flex items-start group">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0fc28b]/10 text-[#0fc28b] rounded-full flex items-center justify-center mr-4 group-hover:bg-[#0fc28b] group-hover:text-white transition-colors">
                  <Check className="w-4 h-4" />
                </span>
                <span className="text-gray-600 text-lg">
                  Stratégie de gestion optimisée
                </span>
              </li>
              <li className="flex items-start group">
                <span className="flex-shrink-0 w-8 h-8 bg-[#0fc28b]/10 text-[#0fc28b] rounded-full flex items-center justify-center mr-4 group-hover:bg-[#0fc28b] group-hover:text-white transition-colors">
                  <Check className="w-4 h-4" />
                </span>
                <span className="text-gray-600 text-lg">
                  Accompagnement personnalisé
                </span>
              </li>
            </ul>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500 group">
            <Image
              src="/images/heading.png"
              alt="Notre équipe"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0fc28b]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-0 group-hover:-translate-y-4 transition-transform duration-300">
              <h4 className="text-2xl font-bold mb-2">Notre Équipe</h4>
              <p className="text-white/90">Des experts passionnés à votre service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 