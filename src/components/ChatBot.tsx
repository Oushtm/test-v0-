'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Maximize2, Minimize2, X, Image as ImageIcon, Paperclip, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import OpenAI from 'openai';

interface Message {
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  isMarkdown?: boolean;
}

// Simulated response function until API key is configured
const generateSimulatedResponse = (input: string): string => {
  const responses = {
    default: "Je suis désolé, je suis actuellement en mode de démonstration. Pour des réponses plus précises, veuillez configurer l'API OpenAI.",
    prix: "Nos tarifs varient selon le type de bien et les services choisis. Je vous invite à utiliser notre simulateur pour obtenir une estimation précise, ou à contacter directement nos conseillers pour plus de détails.",
    contact: "Vous pouvez nous contacter par téléphone au +212 660-408470 ou par email à contact@rentabilio.com. Nos conseillers sont disponibles du lundi au vendredi de 9h à 18h.",
    services: "Nous offrons une gamme complète de services :\n\n" +
             "• Photos professionnelles\n" +
             "• Création d'annonces\n" +
             "• Gestion des réservations\n" +
             "• Accueil des voyageurs\n" +
             "• Assistance technique\n" +
             "• Ménage et blanchisserie\n\n" +
             "Chaque service peut être personnalisé selon vos besoins.",
    reservation: "Nous gérons l'intégralité du processus de réservation :\n\n" +
                "• Communication avec les voyageurs\n" +
                "• Check-in/check-out\n" +
                "• Coordination des services\n\n" +
                "Vous n'avez qu'à profiter des revenus !",
  };

  const inputLower = input.toLowerCase();
  if (inputLower.includes('prix') || inputLower.includes('tarif') || inputLower.includes('coût')) {
    return responses.prix;
  }
  if (inputLower.includes('contact') || inputLower.includes('rendez-vous')) {
    return responses.contact;
  }
  if (inputLower.includes('services') || inputLower.includes('offre')) {
    return responses.services;
  }
  if (inputLower.includes('réservation') || inputLower.includes('booking')) {
    return responses.reservation;
  }
  return responses.default;
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: "👋 Bonjour! Je suis l'assistant intelligent de Rentabilio. Je peux vous aider avec:\n\n" +
               "• La gestion locative\n" +
               "• L'investissement immobilier\n" +
               "• Les services de conciergerie\n" +
               "• Les estimations de rentabilité\n" +
               "• Et bien plus encore!\n\n" +
               "Comment puis-je vous aider aujourd'hui?",
      timestamp: new Date(),
      isMarkdown: true
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const botResponse: Message = {
      type: 'bot',
      content: generateSimulatedResponse(inputMessage),
      timestamp: new Date(),
      isMarkdown: true
    };

    setMessages(prev => [...prev, botResponse]);
    setIsTyping(false);
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleVoiceRecord = () => {
    setIsRecording(!isRecording);
    // Implement voice recording logic here
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      y: 20, 
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  const messageVariants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 500,
        damping: 40
      }
    }
  };

  return (
    <>
      <AnimatePresence>
        {/* Chat Button */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className={`fixed ${isOpen ? 'hidden' : 'flex'} bottom-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 items-center gap-2`}
        >
          <Bot className="w-6 h-6" />
          <span className="hidden md:inline">Chat avec nous</span>
        </motion.button>

        {/* Chat Window */}
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`fixed ${isExpanded ? 'inset-4' : 'bottom-20 right-4 w-96 h-[600px]'} bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl shadow-2xl flex flex-col border border-white/10 z-50 transition-all duration-300`}
          >
            {/* Header */}
            <motion.div 
              className="p-4 border-b border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-2xl backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Bot className="w-8 h-8 text-blue-400" />
                  <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">Assistant Rentabilio</h3>
                  <p className="text-sm text-gray-400">En ligne | Répond instantanément</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-gray-400 hover:text-white transition-colors p-2"
                  >
                    {isExpanded ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors p-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <AnimatePresence initial={false}>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`flex items-start space-x-2 max-w-[80%] ${
                        message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.type === 'user' 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                            : 'bg-gradient-to-r from-gray-700 to-gray-600'
                        }`}
                      >
                        {message.type === 'user' ? (
                          <User className="w-5 h-5 text-white" />
                        ) : (
                          <Bot className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div
                        className={`p-3 rounded-2xl ${
                          message.type === 'user'
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                            : 'bg-gray-800 text-gray-100'
                        }`}
                      >
                        {message.isMarkdown ? (
                          <ReactMarkdown
                            components={{
                              p: ({node, ...props}) => <p className="text-sm" {...props} />,
                              ul: ({node, ...props}) => <ul className="text-sm list-disc pl-4 mt-2" {...props} />,
                              li: ({node, ...props}) => <li className="mt-1" {...props} />,
                              a: ({node, ...props}) => <a className="text-blue-400 hover:underline" {...props} />,
                              strong: ({node, ...props}) => <strong className="font-semibold" {...props} />,
                              em: ({node, ...props}) => <em className="italic" {...props} />,
                              code: ({node, ...props}) => <code className="bg-black/20 rounded px-1" {...props} />
                            }}
                          >
                            {message.content}
                          </ReactMarkdown>
                        ) : (
                          <p className="text-sm">{message.content}</p>
                        )}
                        <p className="text-xs mt-1 opacity-50">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="p-3 rounded-2xl bg-gray-800">
                    <div className="flex space-x-2">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          transition: { repeat: Infinity, duration: 1 }
                        }}
                        className="w-2 h-2 bg-blue-400 rounded-full"
                      />
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          transition: { repeat: Infinity, duration: 1, delay: 0.2 }
                        }}
                        className="w-2 h-2 bg-purple-400 rounded-full"
                      />
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          transition: { repeat: Infinity, duration: 1, delay: 0.4 }
                        }}
                        className="w-2 h-2 bg-pink-400 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-4 border-t border-white/10 bg-gradient-to-r from-blue-500/5 to-purple-500/5"
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex flex-col space-y-4"
              >
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={handleFileUpload}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleVoiceRecord}
                    className={`p-2 transition-colors ${isRecording ? 'text-red-500' : 'text-gray-400 hover:text-white'}`}
                  >
                    <Mic className="w-5 h-5" />
                  </button>
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Posez votre question..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                  <motion.button
                    type="submit"
                    disabled={!inputMessage.trim()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
              </form>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={(e) => {
                  // Handle file upload logic here
                  console.log(e.target.files);
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 