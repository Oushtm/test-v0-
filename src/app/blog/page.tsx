'use client';

import { motion } from 'framer-motion';
import { Play, Search, Clock, ArrowRight, Tag, Filter, TrendingUp, BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Add Instagram window type
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process(): void;
      };
    };
  }
}

const categories = [
  { id: 1, name: "Investissement", icon: TrendingUp, count: 12 },
  { id: 2, name: "Financement", icon: BookOpen, count: 8 },
  { id: 3, name: "Marché Immobilier", icon: Tag, count: 15 },
  { id: 4, name: "Conseils", icon: Filter, count: 10 }
];

const featuredPost = {
  id: 0,
  title: "Les tendances du marché immobilier en 2024",
  thumbnail: "/images/blog/featured.jpg",
  category: "Marché Immobilier",
  description: "Découvrez les dernières tendances qui façonnent le marché immobilier en 2024. De l'évolution des prix à l'impact des nouvelles réglementations.",
  date: "20 Mars 2024",
  readTime: "8 min",
  author: {
    name: "Sophie Martin",
    avatar: "/images/team-1.jpg"
  }
};

// Add the user's three blog articles here
const userArticles = [
  {
    id: 1,
    title: "Les Avantages de la Gestion Professionnelle pour Votre Propriété de Location",
    thumbnail: "/images/blog/gestion-professionnelle-handshake.jpg",
    description: "Découvrez les nombreux avantages de confier la gestion de votre propriété de location à des professionnels pour maximiser vos revenus et réduire le stress.",
    date: "16 Juillet 2024",
    category: "Gestion Locative",
    readTime: "8 min",
    type: "article"
  },
  {
    id: 2,
    title: "Comment Préparer Votre Propriété pour la Location Saisonnière",
    thumbnail: "/images/blog/preparer-propriete.jpg",
    description: "Un guide complet pour préparer votre propriété pour la location saisonnière, du nettoyage à l'aménagement et aux équipements.",
    date: "16 Juillet 2024",
    category: "Conseils",
    readTime: "7 min",
    type: "article"
  },
  {
    id: 3,
    title: "Optimiser la Rentabilité de Votre Location Saisonnière",
    thumbnail: "/images/blog/optimiser-rentabilite.jpg",
    description: "Découvrez des stratégies clés pour maximiser la rentabilité de votre location saisonnière, de l'optimisation de votre annonce au marketing efficace.",
    date: "16 Juillet 2024",
    category: "Investissement",
    readTime: "6 min",
    type: "article"
  }
];

// Combine existing and new posts
const allPosts = [...userArticles];

interface InstagramPost {
  id: string;
  type: string;
  url: string;
  permalink: string;
  caption: string;
  timestamp: string;
  thumbnailUrl: string;
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/3d-rendering-contemporary-modern-dining-room-living-room-with-luxury-decor.jpg"
            alt="Modern Luxury Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-900/95" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#0fc28b]/80 to-[#0fc28b] text-center"
            >
              Blog Immobilier
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 md:mb-12 text-center max-w-3xl mx-auto font-light px-4"
            >
              Explorez nos articles et vidéos pour tout savoir sur l'investissement immobilier et les dernières tendances du marché.
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-16 px-4"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 focus:border-[#0fc28b]/50 focus:ring-2 focus:ring-[#0fc28b]/20 text-white placeholder-gray-400 transition-all duration-300 text-sm sm:text-base"
                />
                <Search className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="flex flex-col items-center justify-center my-6 sm:my-8 md:my-12 px-4">
        <div className="mb-4 text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">À la une sur Instagram</h2>
          <p className="text-gray-400 text-sm sm:text-base">Découvrez nos dernières vidéos et actualités</p>
        </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-6xl">
          {/* Instagram Reel Card */}
          <div className="bg-[#0fc28b]/5 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl border border-[#0fc28b]/10 p-3 sm:p-4 md:p-6 flex flex-col items-center w-full">
            <div className="w-full relative overflow-hidden rounded-lg aspect-[9/16]">
                  <iframe
                src="https://www.instagram.com/reel/DJRTpIKNbHS/embed"
                className="absolute inset-0 w-full h-full rounded-lg"
                    frameBorder="0"
                allowFullScreen
                    scrolling="no"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-300">Découvrez notre dernier reel</p>
                  <a
                href="https://www.instagram.com/reel/DJRTpIKNbHS/"
                    target="_blank"
                    rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 px-6 py-2 bg-[#0fc28b] hover:bg-[#0fc28b]/90 text-white rounded-full text-sm font-medium transition-all duration-300"
                >
                  Voir sur Instagram
                <ArrowRight className="w-4 h-4" />
                </a>
            </div>
          </div>

          {/* Placeholder Cards */}
          <div className="bg-[#0fc28b]/5 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl border border-[#0fc28b]/10 p-3 sm:p-4 md:p-6 flex flex-col items-center w-full">
            <div className="w-full relative overflow-hidden rounded-lg bg-gray-800/50" style={{ paddingBottom: '177.77%' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-400 text-sm">Contenu à venir</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0fc28b]/5 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl border border-[#0fc28b]/10 p-3 sm:p-4 md:p-6 flex flex-col items-center w-full">
            <div className="w-full relative overflow-hidden rounded-lg bg-gray-800/50" style={{ paddingBottom: '177.77%' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-400 text-sm">Contenu à venir</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
             {/* Add a title if filtered by category or search */}
             {(selectedCategory || searchQuery) && filteredPosts.length > 0 && (
                 <motion.h2
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5 }}
                     className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#0fc28b]/80 to-[#0fc28b] px-4"
                 >
                     {selectedCategory ? `Articles dans la catégorie: ${selectedCategory}` : `Résultats pour "${searchQuery}"`}
                 </motion.h2>
             )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:border-[#0fc28b]/50 bg-gradient-to-br from-white/10 to-[#0fc28b]/10 backdrop-blur-lg transition-all duration-300 cursor-pointer"
                >
                  <Link href={`/blog/${post.id}`} className="block h-full w-full">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        priority={index === 0}
                      />
                      <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                        <span className="inline-block px-2 py-1 rounded-full bg-[#0fc28b]/80 text-white text-[10px] sm:text-xs font-medium shadow-lg">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-2.5 sm:p-4 md:p-5 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <div className="flex items-center gap-1 text-gray-400 text-[10px] sm:text-xs">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-400">{post.date}</span>
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2 group-hover:text-[#0fc28b] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-2.5 sm:mb-3 line-clamp-2 sm:line-clamp-3 text-[11px] sm:text-sm font-light">
                        {post.description}
                      </p>
                      <div className="flex items-center gap-6">
                        <span className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-300">
                          {post.date}
                        </span>
                        <span className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-300">
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
             {/* Message if no posts found for filter/search */}
             {(selectedCategory || searchQuery) && filteredPosts.length === 0 && (
                <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5 }}
                    className="text-center text-gray-400 text-base sm:text-lg mt-6 sm:mt-8"
                >
                    Aucun article trouvé pour cette {selectedCategory ? 'catégorie' : 'recherche'}.
                </motion.p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
} 