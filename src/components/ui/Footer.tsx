'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-navy text-cream pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">RNB Invest</h3>
              <p className="text-cream/80">
                Votre partenaire de confiance pour tous vos projets d'investissement immobilier.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-cream/80 hover:text-cream transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-cream/80 hover:text-cream transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-cream/80 hover:text-cream transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-cream/80 hover:text-cream transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-cream/80 hover:text-cream transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-cream/80 hover:text-cream transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-cream/80 hover:text-cream transition-colors">
                  Biens
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream/80 hover:text-cream transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream/80 hover:text-cream transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/analysis" className="text-cream/80 hover:text-cream transition-colors">
                  Analyse de Marché
                </Link>
              </li>
              <li>
                <Link href="/services/portfolio" className="text-cream/80 hover:text-cream transition-colors">
                  Gestion de Portefeuille
                </Link>
              </li>
              <li>
                <Link href="/services/consultation" className="text-cream/80 hover:text-cream transition-colors">
                  Consultation
                </Link>
              </li>
              <li>
                <Link href="/services/investment" className="text-cream/80 hover:text-cream transition-colors">
                  Stratégies d'Investissement
                </Link>
              </li>
              <li>
                <Link href="/services/legal" className="text-cream/80 hover:text-cream transition-colors">
                  Conseils Juridiques
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-cream/80" />
                <span className="text-cream/80">
                  123 Avenue des Champs-Élysées<br />
                  75008 Paris, France
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-cream/80" />
                <a href="tel:+33123456789" className="text-cream/80 hover:text-cream transition-colors">
                  01 23 45 67 89
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-cream/80" />
                <a href="mailto:contact@rnbinvest.fr" className="text-cream/80 hover:text-cream transition-colors">
                  contact@rnbinvest.fr
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cream/60 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} RNB Invest. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-cream/60 hover:text-cream text-sm transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/terms" className="text-cream/60 hover:text-cream text-sm transition-colors">
                Conditions d'utilisation
              </Link>
              <Link href="/cookies" className="text-cream/60 hover:text-cream text-sm transition-colors">
                Politique de cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 