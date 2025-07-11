'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-12 sm:py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0fc28b]/10 text-[#0fc28b] px-4 py-2 rounded-full font-semibold text-sm sm:text-base mb-4">
            <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
            Contact Premium
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Contactez-nous
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto px-4">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
            sur l'investissement locatif et notre simulateur.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 mb-8 sm:mb-16">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#0fc28b] focus:ring-1 focus:ring-[#0fc28b] transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#0fc28b] focus:ring-1 focus:ring-[#0fc28b] transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#0fc28b] focus:ring-1 focus:ring-[#0fc28b] transition-colors"
                  placeholder="Votre numéro de téléphone"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#0fc28b] focus:ring-1 focus:ring-[#0fc28b] transition-colors resize-none"
                placeholder="Votre message..."
                />
              </div>
              <button
                type="submit"
              className="w-full sm:w-auto bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/80 text-white font-medium py-3 px-8 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
              <Send className="w-4 h-4" />
              <span>Envoyer le message</span>
              </button>
            </form>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <a href="tel:+212123456789" className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/10 flex items-center gap-4 group hover:scale-105 transition-transform">
            <div className="bg-[#0fc28b]/10 p-3 rounded-lg group-hover:bg-[#0fc28b]/20 transition-colors">
              <Phone className="w-6 h-6 text-[#0fc28b]" />
            </div>
            <div>
              <h3 className="text-white font-medium">Téléphone</h3>
              <p className="text-gray-400 text-sm">+212 123-456-789</p>
            </div>
          </a>
          <a href="mailto:contact@rentabilio.com" className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/10 flex items-center gap-4 group hover:scale-105 transition-transform">
            <div className="bg-[#0fc28b]/10 p-3 rounded-lg group-hover:bg-[#0fc28b]/20 transition-colors">
              <Mail className="w-6 h-6 text-[#0fc28b]" />
            </div>
            <div>
              <h3 className="text-white font-medium">Email</h3>
              <p className="text-gray-400 text-sm break-all">contact@rentabilio.com</p>
            </div>
          </a>
          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/10 flex items-center gap-4 group hover:scale-105 transition-transform">
            <div className="bg-[#0fc28b]/10 p-3 rounded-lg group-hover:bg-[#0fc28b]/20 transition-colors">
              <MapPin className="w-6 h-6 text-[#0fc28b]" />
            </div>
            <div>
              <h3 className="text-white font-medium">Adresse</h3>
              <p className="text-gray-400 text-sm">Casablanca, Maroc</p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-[#0fc28b]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#0fc28b]/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default ContactSection; 