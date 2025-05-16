import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const activities = [
  {
    id: 1,
    title: 'Beach & Relaxation',
    image: '/images/beach.jpg',
    description: 'Unwind on pristine beaches and enjoy the sun',
    count: '250+ activities'
  },
  {
    id: 2,
    title: 'Mountain Hiking',
    image: '/images/hiking.jpg',
    description: 'Explore scenic trails and breathtaking views',
    count: '180+ activities'
  },
  {
    id: 3,
    title: 'Cultural Tours',
    image: '/images/culture.jpg',
    description: 'Immerse yourself in local traditions',
    count: '320+ activities'
  },
  {
    id: 4,
    title: 'Water Sports',
    image: '/images/water-sports.jpg',
    description: 'Experience thrilling aquatic adventures',
    count: '150+ activities'
  },
  {
    id: 5,
    title: 'Food & Cuisine',
    image: '/images/food.jpg',
    description: 'Taste authentic local flavors',
    count: '200+ activities'
  },
  {
    id: 6,
    title: 'Wildlife Safari',
    image: '/images/safari.jpg',
    description: 'Encounter exotic animals in their habitat',
    count: '90+ activities'
  }
];

const PopularActivities = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Things to Do</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover exciting activities and unique experiences for your next adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <Link
              key={activity.id}
              href={`/activities/${activity.id}`}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-400 transition-colors">
                  {activity.title}
                </h3>
                <p className="text-gray-200 text-sm mb-3">
                  {activity.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-orange-400">
                    {activity.count}
                  </span>
                  <span className="flex items-center text-sm font-medium text-white group-hover:text-orange-400 transition-colors">
                    Explore
                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/activities"
            className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors group"
          >
            View All Activities
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularActivities; 