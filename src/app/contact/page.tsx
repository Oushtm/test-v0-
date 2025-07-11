'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setFormStatus('success');
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus('error');
    }
  };

  return (
    <main className="min-h-screen">
      <section className="py-8 sm:py-16 md:py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-[#0fc28b] text-center">
              Contactez-nous
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              {/* Contact Info (Improved) */}
              <div className="space-y-6 sm:space-y-8 bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl border border-white/10 p-5 sm:p-8 md:p-12">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2">Contactez-nous</h2>
                  <p className="text-base sm:text-lg text-[#0fc28b]/90 mb-4">Nous sommes là pour vous aider !</p>
                  <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/70 rounded-full mb-4 sm:mb-6" />
                </div>

                <div className="flex flex-col gap-4 sm:gap-7">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 group transition-all duration-300 hover:scale-[1.02] hover:bg-[#0fc28b]/10 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4">
                    <div className="flex items-center gap-3 sm:gap-5">
                      <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-[#0fc28b] flex-shrink-0" />
                      <span className="text-lg sm:text-xl font-semibold text-white">(+212) 660-408470</span>
                    </div>
                    <a 
                      href="tel:+212660408470" 
                      className="mt-2 sm:mt-0 bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/80 text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold shadow hover:scale-105 transition-all whitespace-nowrap text-center"
                    >
                      Appeler
                    </a>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-5 group transition-all duration-300 hover:scale-[1.02] hover:bg-[#0fc28b]/10 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-[#0fc28b] flex-shrink-0" />
                    <span className="text-base sm:text-lg text-white">Maroc, Casablanca</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 group transition-all duration-300 hover:scale-[1.02] hover:bg-[#0fc28b]/10 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4">
                    <div className="flex items-center gap-3 sm:gap-5 flex-1">
                      <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-[#0fc28b] flex-shrink-0" />
                      <span className="text-base sm:text-lg text-white break-all sm:break-normal">Contact@rentabilio.com</span>
                    </div>
                    <a 
                      href="mailto:Contact@rentabilio.com" 
                      className="mt-2 sm:mt-0 bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/80 text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold shadow hover:scale-105 transition-all whitespace-nowrap text-center"
                    >
                      Envoyer un email
                    </a>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-6 font-semibold">Réponse rapide garantie • Support humain et local</div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                  Envoyez-nous un message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-sm sm:text-base">Prénom</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="mt-1 sm:mt-2 bg-white/10 border-white/20 text-white placeholder-gray-400 text-sm sm:text-base h-9 sm:h-10"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm sm:text-base">Nom</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="mt-1 sm:mt-2 bg-white/10 border-white/20 text-white placeholder-gray-400 text-sm sm:text-base h-9 sm:h-10"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 sm:mt-2 bg-white/10 border-white/20 text-white placeholder-gray-400 text-sm sm:text-base h-9 sm:h-10"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-sm sm:text-base">Téléphone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 sm:mt-2 bg-white/10 border-white/20 text-white placeholder-gray-400 text-sm sm:text-base h-9 sm:h-10"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sm sm:text-base">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="mt-1 sm:mt-2 w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:ring-[#0fc28b]/50 text-sm sm:text-base"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-[#0fc28b] hover:bg-[#0fc28b]/90 text-white h-9 sm:h-10 text-sm sm:text-base"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="text-sm sm:text-base">Envoi en cours...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        <span className="text-sm sm:text-base">Envoyer le message</span>
                      </span>
                    )}
                  </Button>
                </form>

                {formStatus === 'success' && (
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-green-500/10 border border-green-500/20 rounded-md text-green-400 text-center text-sm sm:text-base">
                    Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-red-500/10 border border-red-500/20 rounded-md text-red-400 text-center text-sm sm:text-base">
                    Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 