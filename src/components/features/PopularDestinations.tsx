import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Paris',
    image: '/images/paris.jpg',
    country: 'France',
    rating: 4.8,
    reviews: 1250
  },
  {
    id: 2,
    name: 'Bali',
    image: '/images/bali.jpg',
    country: 'Indonesia',
    rating: 4.9,
    reviews: 2100
  },
  {
    id: 3,
    name: 'Tokyo',
    image: '/images/tokyo.jpg',
    country: 'Japan',
    rating: 4.7,
    reviews: 1800
  },
  {
    id: 4,
    name: 'Santorini',
    image: '/images/santorini.jpg',
    country: 'Greece',
    rating: 4.9,
    reviews: 1650
  },
  {
    id: 5,
    name: 'Dubai',
    image: '/images/dubai.jpg',
    country: 'UAE',
    rating: 4.8,
    reviews: 1950
  }
];

const PopularDestinations = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Trending destinations</h2>
          <div className="flex gap-2">
            <button className="p-2 rounded-full border hover:bg-gray-100 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full border hover:bg-gray-100 transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/destinations/${destination.id}`}
              className="group"
            >
              <div className="relative rounded-xl overflow-hidden aspect-square">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-semibold text-lg">{destination.name}</h3>
                  <p className="text-sm text-gray-200">{destination.country}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/destinations"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
          >
            View all destinations
            <ChevronRight className="w-5 h-5 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations; 