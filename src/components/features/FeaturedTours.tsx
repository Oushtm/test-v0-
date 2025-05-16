import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Clock, Users, ChevronRight } from 'lucide-react';

const tours = [
  {
    id: 1,
    title: 'Grand Canyon Helicopter Tour',
    image: '/images/grand-canyon.jpg',
    duration: '1 Day',
    groupSize: '1-6',
    rating: 4.9,
    reviews: 128,
    price: 299
  },
  {
    id: 2,
    title: 'Santorini Sunset Cruise',
    image: '/images/santorini-cruise.jpg',
    duration: '5 Hours',
    groupSize: '2-12',
    rating: 4.8,
    reviews: 96,
    price: 149
  },
  {
    id: 3,
    title: 'Bali Temple & Rice Terrace Tour',
    image: '/images/bali-temple.jpg',
    duration: '8 Hours',
    groupSize: '2-8',
    rating: 4.7,
    reviews: 156,
    price: 89
  },
  {
    id: 4,
    title: 'Tokyo Food & Culture Walk',
    image: '/images/tokyo-food.jpg',
    duration: '4 Hours',
    groupSize: '2-10',
    rating: 4.9,
    reviews: 203,
    price: 79
  }
];

const FeaturedTours = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Tours</h2>
            <p className="text-gray-600">Handpicked tours for unforgettable experiences</p>
          </div>
          <Link
            href="/tours"
            className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center"
          >
            View all tours
            <ChevronRight className="w-5 h-5 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour) => (
            <Link key={tour.id} href={`/tours/${tour.id}`}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {tour.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {tour.groupSize}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium">{tour.rating}</span>
                      <span className="ml-1 text-sm text-gray-500">
                        ({tour.reviews} reviews)
                      </span>
                    </div>
                    <div className="text-lg font-bold text-orange-500">
                      ${tour.price}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours; 