'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 hero-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      <div className="absolute inset-0 bg-pattern z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Prêt à Commencer Votre Voyage Immobilier ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl mb-8 text-gray-100"
          >
            Rejoignez des milliers d'investisseurs immobiliers qui ont trouvé leur investissement parfait grâce à notre plateforme.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/simulate"
              className="btn-modern inline-flex items-center justify-center bg-white text-indigo-600"
            >
              <span>Simuler Votre Bien</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/contact"
              className="btn-outline text-white border-white hover:bg-white/10"
            >
              Nous Contacter
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 