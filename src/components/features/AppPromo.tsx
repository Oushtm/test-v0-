import React from 'react';
import Image from 'next/image';

const AppPromo = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">
              Get 5% off your 1st<br />app booking
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Download our mobile app and enjoy exclusive discounts, easy booking process, 
              and manage your trips on the go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/app-store.png"
                  alt="Download on App Store"
                  width={200}
                  height={60}
                  className="hover:opacity-90 transition-opacity"
                />
              </a>
              <a
                href="#"
                className="inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/google-play.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="hover:opacity-90 transition-opacity"
                />
              </a>
            </div>
            <div className="mt-8 flex items-center gap-8">
              <div>
                <div className="text-4xl font-bold">4.9</div>
                <div className="text-blue-100">App Store</div>
              </div>
              <div>
                <div className="text-4xl font-bold">4.8</div>
                <div className="text-blue-100">Google Play</div>
              </div>
            </div>
          </div>
          <div className="relative h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[300px] h-[600px]">
                <Image
                  src="/images/app-mockup.png"
                  alt="Mobile App"
                  layout="fill"
                  objectFit="contain"
                  className="drop-shadow-2xl"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromo; 