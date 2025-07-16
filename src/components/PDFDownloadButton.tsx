'use client';

import { useState } from 'react';
import { Download } from 'lucide-react';

interface PDFDownloadButtonProps {
  propertyType: string;
  rooms: string;
  district: string;
  fullName: string;
  phone: string;
  email: string;
  hauteSaison: string;
  saisonModeree: string;
  basseSaison: string;
  onDownload?: () => void;
}

const PDFDownloadButton = ({
  propertyType,
  rooms,
  district,
  fullName,
  phone,
  email,
  hauteSaison,
  saisonModeree,
  basseSaison,
  onDownload,
}: PDFDownloadButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendReport = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Basic validation
      if (!email || !email.includes('@')) {
        setError('Veuillez fournir une adresse email valide');
        return;
      }

      if (!fullName || fullName.trim().length < 2) {
        setError('Veuillez fournir un nom valide');
        return;
      }

      const requestData = {
        propertyType,
        rooms,
        district,
        fullName: fullName.trim(),
        phone,
        email: email.trim().toLowerCase(),
        hauteSaison,
        saisonModeree,
        basseSaison,
      };

      console.log('Sending request with data:', requestData);

      const response = await fetch('/api/send-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      console.log('Response status:', response.status);
      
      let data;
      const responseText = await response.text();
      console.log('Raw response:', responseText);

      try {
        data = JSON.parse(responseText);
      } catch (e) {
        console.error('Error parsing response:', e);
        throw new Error('Le serveur a retourné une réponse invalide. Veuillez réessayer.');
      }

      if (!response.ok) {
        console.error('Server error:', data);
        throw new Error(data.error || 'Une erreur est survenue lors de l\'envoi du rapport');
      }

      // Call onDownload callback if provided
      onDownload?.();

      // Show success message
      alert('Le rapport a été envoyé à votre adresse email!');
    } catch (err: any) {
      console.error('Error sending report:', err);
      setError(err.message || 'Une erreur est survenue lors de l\'envoi du rapport. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleSendReport}
        disabled={isLoading}
        className={`w-full bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/80 text-white py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 group ${
          isLoading ? 'opacity-75 cursor-not-allowed' : ''
        }`}
      >
        <Download className="w-5 h-5" />
        <span>
          {isLoading ? 'Envoi en cours...' : 'Recevoir Mon Rapport par Email'}
        </span>
      </button>
      
      {error && (
        <div className="mt-4 text-red-500 text-sm text-center">
          {error}
        </div>
      )}
    </div>
  );
};

export default PDFDownloadButton; 