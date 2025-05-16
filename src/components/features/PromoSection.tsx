import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const PromoSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/images/promo-destination.jpg"
              alt="Beautiful destination"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Cappadocia, Turkey</h3>
              <p className="text-gray-200">Hot air balloon adventure</p>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="bg-orange-50 rounded-2xl p-8">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
                Limited Time Offer
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Get up to 25% off<br />
                on your favorite destination
              </h2>
              <p className="text-gray-600 mb-6">
                Book your dream vacation now and enjoy exclusive discounts on selected destinations. 
                Don't miss out on this amazing opportunity to create unforgettable memories.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-medium">1</span>
                  </div>
                  <p className="text-gray-700">Book before July 31st</p>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-medium">2</span>
                  </div>
                  <p className="text-gray-700">Use code: SUMMER25</p>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-medium">3</span>
                  </div>
                  <p className="text-gray-700">Travel between Aug - Oct</p>
                </div>
              </div>
              <Link
                href="/offers"
                className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg mt-8 hover:bg-orange-600 transition-colors"
              >
                View Offers
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection; 