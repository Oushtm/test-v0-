import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ChevronRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "10 Must-Visit Hidden Gems in Southeast Asia",
    image: '/images/blog-1.jpg',
    date: 'June 15, 2024',
    category: 'Travel Tips',
    excerpt: "Discover the lesser-known destinations that will take your breath away and create unforgettable memories."
  },
  {
    id: 2,
    title: "A Food Lover's Guide to Mediterranean Cuisine",
    image: '/images/blog-2.jpg',
    date: 'June 12, 2024',
    category: 'Food & Culture',
    excerpt: "Explore the rich flavors and traditions of Mediterranean cooking through local markets and authentic restaurants."
  },
  {
    id: 3,
    title: "Ultimate Guide to Adventure Travel in 2024",
    image: '/images/blog-3.jpg',
    date: 'June 10, 2024',
    category: 'Adventure',
    excerpt: "Plan your next thrilling adventure with our comprehensive guide to the world's most exciting destinations."
  }
];

const TravelArticles = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Travel Articles</h2>
            <p className="text-gray-600">Get inspired with our latest travel stories</p>
          </div>
          <Link
            href="/blog"
            className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center group"
          >
            View all articles
            <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.id} href={`/blog/${article.id}`}>
              <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                    className="transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-orange-500 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-4">
                    <span className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center group">
                      Read more
                      <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Get Travel Tips Straight to Your Inbox
            </h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter and receive expert travel advice, destination guides, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelArticles; 