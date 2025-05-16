'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  Filter,
  Home,
  Building,
  Warehouse,
  MapPin,
  Euro,
  Bed,
  Bath,
  Square
} from 'lucide-react';

export default function Properties() {
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const properties = [
    {
      id: 1,
      title: "Appartement T3 Centre-Ville",
      type: "residential",
      location: "Paris 8ème",
      price: "450 000 €",
      surface: "75m²",
      rooms: 3,
      bathrooms: 2,
      image: "/images/property1.jpg",
      features: ["Balcon", "Ascenseur", "Cave"]
    },
    {
      id: 2,
      title: "Local Commercial",
      type: "commercial",
      location: "Lyon 2ème",
      price: "850 000 €",
      surface: "120m²",
      rooms: 1,
      bathrooms: 1,
      image: "/images/property2.jpg",
      features: ["Vitrine", "Mezzanine", "Parking"]
    },
    {
      id: 3,
      title: "Entrepôt Logistique",
      type: "industrial",
      location: "Lille",
      price: "1 200 000 €",
      surface: "500m²",
      rooms: 1,
      bathrooms: 1,
      image: "/images/property3.jpg",
      features: ["Quai de chargement", "Zone de stockage", "Bureau"]
    },
    // Add more properties as needed
  ];

  const filteredProperties = properties.filter(property => {
    const matchesType = selectedType === 'all' || property.type === selectedType;
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
              Nos Biens Immobiliers
            </h1>
            <p className="text-xl text-gray-300">
              Découvrez notre sélection de biens d'exception
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un bien..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedType('all')}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  selectedType === 'all' ? 'bg-primary text-white' : 'bg-white text-gray-700'
                }`}
              >
                <Filter className="w-5 h-5" />
                Tous
              </button>
              <button
                onClick={() => setSelectedType('residential')}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  selectedType === 'residential' ? 'bg-primary text-white' : 'bg-white text-gray-700'
                }`}
              >
                <Home className="w-5 h-5" />
                Résidentiel
              </button>
              <button
                onClick={() => setSelectedType('commercial')}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  selectedType === 'commercial' ? 'bg-primary text-white' : 'bg-white text-gray-700'
                }`}
              >
                <Building className="w-5 h-5" />
                Commercial
              </button>
              <button
                onClick={() => setSelectedType('industrial')}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  selectedType === 'industrial' ? 'bg-primary text-white' : 'bg-white text-gray-700'
                }`}
              >
                <Warehouse className="w-5 h-5" />
                Industriel
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="relative h-48 bg-gray-200">
                  {/* Add actual image here */}
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {property.type === 'residential' ? 'Résidentiel' :
                     property.type === 'commercial' ? 'Commercial' : 'Industriel'}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-600">
                      <Euro className="w-4 h-4 mr-1" />
                      {property.price}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Square className="w-4 h-4 mr-1" />
                      {property.surface}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Bed className="w-4 h-4 mr-1" />
                      {property.rooms} pièces
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Bath className="w-4 h-4 mr-1" />
                      {property.bathrooms} sdb
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 