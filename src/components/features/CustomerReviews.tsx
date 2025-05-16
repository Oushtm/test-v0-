import React from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: '/images/avatar-1.jpg',
    location: 'United States',
    rating: 5,
    text: 'Amazing experience! The tour was perfectly organized and our guide was incredibly knowledgeable. Will definitely book again!',
    tourName: 'Grand Canyon Helicopter Tour'
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: '/images/avatar-2.jpg',
    location: 'Singapore',
    rating: 5,
    text: 'The sunset cruise in Santorini was magical. Everything was exactly as described and the service was impeccable.',
    tourName: 'Santorini Sunset Cruise'
  },
  {
    id: 3,
    name: 'Emma Wilson',
    avatar: '/images/avatar-3.jpg',
    location: 'United Kingdom',
    rating: 5,
    text: 'A truly unforgettable experience in Bali. The temples were breathtaking and our guide shared fascinating cultural insights.',
    tourName: 'Bali Temple Tour'
  }
];

const CustomerReviews = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read trusted reviews from our customers about their travel experiences
          </p>
        </div>

        <div className="relative">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 z-10">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-600 mb-4">{review.text}</p>

                <div className="text-sm text-gray-500">
                  Tour: {review.tourName}
                </div>
              </div>
            ))}
          </div>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 z-10">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {[1, 2, 3].map((dot) => (
              <button
                key={dot}
                className={`w-2.5 h-2.5 rounded-full ${
                  dot === 1 ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews; 