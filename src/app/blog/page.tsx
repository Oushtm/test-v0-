'use client';

import { motion } from 'framer-motion';
import { Play, Search, Clock, ArrowRight, Tag, Filter, TrendingUp, BookOpen } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

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

const posts = [
  {
    id: 1,
    title: "Comment estimer la rentabilité d'un investissement locatif",
    thumbnail: "/images/blog/post1.jpg",
    videoUrl: "https://www.youtube.com/watch?v=example1",
    description: "Découvrez les méthodes pour calculer la rentabilité de votre investissement locatif et les indicateurs clés à surveiller.",
    date: "15 Mars 2024",
    category: "Investissement",
    readTime: "5 min",
    type: "video"
  },
  {
    id: 2,
    title: "Les avantages fiscaux de l'investissement locatif",
    thumbnail: "/images/blog/post2.jpg",
    description: "Un guide complet sur les différentes réductions d'impôts et avantages fiscaux disponibles pour les investisseurs immobiliers.",
    date: "10 Mars 2024",
    category: "Financement",
    readTime: "6 min",
    type: "article"
  },
  {
    id: 3,
    title: "Choisir le bon emplacement pour son investissement",
    thumbnail: "/images/blog/post3.jpg",
    videoUrl: "https://www.youtube.com/watch?v=example3",
    description: "Les critères essentiels pour sélectionner le meilleur emplacement pour votre investissement immobilier.",
    date: "5 Mars 2024",
    category: "Conseils",
    readTime: "4 min",
    type: "video"
  },
  {
    id: 4,
    title: "Les erreurs à éviter en investissement locatif",
    thumbnail: "/images/blog/post4.jpg",
    description: "Les pièges courants et comment les éviter pour maximiser la rentabilité de votre investissement.",
    date: "1 Mars 2024",
    category: "Conseils",
    readTime: "7 min",
    type: "article"
  }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter(post => {
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
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
              className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400 text-center"
            >
              Blog Immobilier
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-200 mb-12 text-center max-w-3xl mx-auto font-light"
            >
              Explorez nos articles et vidéos pour tout savoir sur l'investissement immobilier et les dernières tendances du marché.
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto mb-16"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-400 transition-all duration-300"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
                  className={`p-4 rounded-xl border ${
                    selectedCategory === category.name
                      ? 'bg-blue-500/20 border-blue-500/50'
                      : 'bg-white/5 border-white/10 hover:border-blue-500/30'
                  } backdrop-blur-sm transition-all duration-300`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <category.icon className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-medium">{category.name}</span>
                    </div>
                    <span className="text-sm text-gray-400">{category.count}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden group"
            >
              <div className="aspect-[21/9] relative">
                <Image
                  src={featuredPost.thumbnail}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm text-blue-400 text-sm font-medium mb-4">
                  {featuredPost.category}
                </span>
                <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-300 mb-6 max-w-3xl">
                  {featuredPost.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-white font-medium">{featuredPost.author.name}</div>
                      <div className="text-gray-400 text-sm">{featuredPost.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    {post.type === 'video' && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <a
                          href={post.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                      >
                        <Play className="w-8 h-8 text-white" />
                      </a>
                    </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{post.date}</span>
                      <button className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-2 group">
                        <span>Lire plus</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 