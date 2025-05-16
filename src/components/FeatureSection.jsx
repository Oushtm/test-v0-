'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FeatureSection({ 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  reverse = false,
  features = []
}) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
            <p className="text-lg text-white/80">{description}</p>
            
            {features.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        {feature.icon}
                      </div>
                      <h3 className="text-white font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm mt-2">{feature.description}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 