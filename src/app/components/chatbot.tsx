import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Clock, Mail, Phone, Headphones } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';

type ChatMode = 'select' | 'ai' | 'live' | 'email';

interface Message {
  id: string;
  type: 'user' | 'bot' | 'agent';
  content: string;
  timestamp: Date;
}

interface ChatbotProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Chatbot({ isOpen: externalIsOpen, onOpenChange }: ChatbotProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  
  const setIsOpen = (open: boolean) => {
    if (onOpenChange) {
      onOpenChange(open);
    } else {
      setInternalIsOpen(open);
    }
  };
  
  const [chatMode, setChatMode] = useState<ChatMode>('select');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [emailForm, setEmailForm] = useState({ name: '', email: '', message: '' });
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Horaires d'ouverture (9h-18h du lundi au vendredi)
  const isOpeningHours = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = dimanche, 6 = samedi
    const hour = now.getHours();
    return day >= 1 && day <= 5 && hour >= 9 && hour < 18;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simuler une réponse
    if (chatMode === 'ai') {
      setIsTyping(true);
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          content: generateAIResponse(inputValue),
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, 1500);
    } else if (chatMode === 'live') {
      setIsTyping(true);
      setTimeout(() => {
        const agentResponse: Message = {
          id: (Date.now() + 1).toString(),
          type: 'agent',
          content: "Un conseiller va vous répondre dans quelques instants...",
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, agentResponse]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('panne') || lowerMessage.includes('problème')) {
      return "Je comprends que vous avez un problème avec votre appareil. Pouvez-vous me donner plus de détails sur la panne ? Par exemple, quel type d'appareil est concerné et quels sont les symptômes ?";
    }
    if (lowerMessage.includes('pièce') || lowerMessage.includes('référence')) {
      return "Pour vous aider à trouver la bonne pièce détachée, je vous recommande d'utiliser notre scanner de code-barres en haut de page, ou de me donner la marque et le modèle de votre appareil.";
    }
    if (lowerMessage.includes('livraison') || lowerMessage.includes('délai')) {
      return "Nous livrons la plupart de nos pièces détachées sous 24-48h. Pour les pièces moins courantes, le délai peut aller jusqu'à 5 jours ouvrés.";
    }
    if (lowerMessage.includes('prix') || lowerMessage.includes('coût')) {
      return "Le prix varie selon la pièce détachée. Utilisez notre outil de recherche pour obtenir un devis précis. Nous proposons également un service de diagnostic à partir de 49€.";
    }
    
    return "Je suis là pour vous aider ! Je peux vous renseigner sur nos pièces détachées, vous guider dans votre diagnostic de panne, ou vous mettre en relation avec un conseiller. Comment puis-je vous aider ?";
  };

  const handleEmailSubmit = () => {
    if (!emailForm.name || !emailForm.email || !emailForm.message) {
      alert('Veuillez remplir tous les champs');
      return;
    }
    
    // Simuler l'envoi de l'email
    console.log('Email envoyé:', emailForm);
    alert('Votre message a été envoyé ! Nous vous répondrons dans les plus brefs délais.');
    setEmailForm({ name: '', email: '', message: '' });
    setIsOpen(false);
    setChatMode('select');
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setChatMode('select');
      setMessages([]);
      setInputValue('');
    }, 300);
  };

  const startChat = (mode: ChatMode) => {
    setChatMode(mode);
    if (mode === 'ai') {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content: "Bonjour ! Je suis l'assistant virtuel Jolimont Electro. Je peux vous aider à diagnostiquer une panne ou trouver la bonne pièce détachée. Comment puis-je vous aider ?",
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    } else if (mode === 'live') {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        type: 'agent',
        content: "Bonjour ! Un conseiller Jolimont Electro va prendre en charge votre demande. En quoi puis-je vous aider ?",
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-[100] w-16 h-16 rounded-full shadow-2xl flex items-center justify-center"
            style={{ backgroundColor: '#305CDE' }}
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Fenêtre de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[100] w-[400px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-3rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 flex items-center justify-between" style={{ backgroundColor: '#305CDE' }}>
              <div className="flex items-center gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1647866427893-0057366e91b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBhZ2VudCUyMGhlYWRzZXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcwNTY2MzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Conseiller Jolimont Electro"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white/30"
                />
                <div>
                  <h3 className="font-bold text-white">Jolimont Electro</h3>
                  <p className="text-xs text-white/80">
                    {chatMode === 'ai' && 'Assistant IA'}
                    {chatMode === 'live' && 'Conseiller en ligne'}
                    {chatMode === 'email' && 'Message hors ligne'}
                    {chatMode === 'select' && 'Comment pouvons-nous vous aider ?'}
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Contenu */}
            <div className="flex-1 overflow-y-auto">
              {chatMode === 'select' && (
                <div className="p-6 space-y-4">
                  <p className="text-gray-700 mb-6">
                    Choisissez comment vous souhaitez être accompagné :
                  </p>

                  {/* Chat AI */}
                  <button
                    onClick={() => startChat('ai')}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-[#305CDE] hover:bg-blue-50 transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#305CDE] flex items-center justify-center flex-shrink-0">
                        <Bot className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-gray-900 group-hover:text-[#305CDE]">
                          Assistant IA
                        </h4>
                        <p className="text-sm text-gray-600">
                          Diagnostic instantané et recommandations personnalisées
                        </p>
                      </div>
                    </div>
                  </button>

                  {/* Chat Live */}
                  <button
                    onClick={() => isOpeningHours() ? startChat('live') : setChatMode('email')}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-[#10b981] hover:bg-green-50 transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#10b981] flex items-center justify-center flex-shrink-0">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-gray-900 group-hover:text-[#10b981]">
                          Conseiller en ligne
                        </h4>
                        <p className="text-sm text-gray-600">
                          {isOpeningHours() 
                            ? 'Assistance humaine disponible maintenant'
                            : 'Actuellement fermé - Laissez un message'}
                        </p>
                      </div>
                    </div>
                  </button>

                  {/* Horaires */}
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-gray-600" />
                      <p className="text-sm font-medium text-gray-700">Horaires d'ouverture</p>
                    </div>
                    <p className="text-xs text-gray-600">
                      Lundi - Vendredi : 9h00 - 18h00<br />
                      Samedi - Dimanche : Fermé
                    </p>
                  </div>

                  {/* Contact rapide */}
                  <div className="border-t pt-4 mt-4">
                    <p className="text-xs text-gray-500 mb-2">Besoin d'aide urgente ?</p>
                    <div className="flex gap-2">
                      <a
                        href="tel:+33123456789"
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        Appeler
                      </a>
                      <a
                        href="mailto:contact@jolimont-electro.fr"
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {(chatMode === 'ai' || chatMode === 'live') && (
                <div className="flex flex-col h-full">
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                            message.type === 'user'
                              ? 'bg-[#305CDE] text-white rounded-br-sm'
                              : message.type === 'bot'
                              ? 'bg-gray-100 text-gray-900 rounded-bl-sm'
                              : 'bg-[#10b981] text-white rounded-bl-sm'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p className={`text-xs mt-1 ${
                            message.type === 'user' || message.type === 'agent' ? 'text-white/70' : 'text-gray-500'
                          }`}>
                            {message.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-gray-100 rounded-2xl px-4 py-3 rounded-bl-sm">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input */}
                  <div className="p-4 border-t">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Tapez votre message..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#305CDE] focus:border-transparent"
                      />
                      <button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim()}
                        className="w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        style={{ backgroundColor: '#305CDE' }}
                      >
                        <Send className="w-5 h-5 text-white" />
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        setChatMode('select');
                        setMessages([]);
                      }}
                      className="text-xs text-gray-500 hover:text-gray-700 mt-2"
                    >
                      ← Retour aux options
                    </button>
                  </div>
                </div>
              )}

              {chatMode === 'email' && (
                <div className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#d97706] flex items-center justify-center mx-auto mb-3">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-center text-gray-900 mb-2">
                      Nous sommes actuellement fermés
                    </h4>
                    <p className="text-sm text-gray-600 text-center">
                      Laissez-nous un message et nous vous répondrons dès notre retour.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nom
                      </label>
                      <input
                        type="text"
                        value={emailForm.name}
                        onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#305CDE] focus:border-transparent"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        value={emailForm.email}
                        onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#305CDE] focus:border-transparent"
                        placeholder="votre@email.fr"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        value={emailForm.message}
                        onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#305CDE] focus:border-transparent resize-none"
                        placeholder="Décrivez votre problème ou votre question..."
                      />
                    </div>

                    <Button
                      onClick={handleEmailSubmit}
                      className="w-full font-medium"
                      style={{ backgroundColor: '#305CDE' }}
                    >
                      Envoyer le message
                    </Button>

                    <button
                      onClick={() => {
                        setChatMode('select');
                        setEmailForm({ name: '', email: '', message: '' });
                      }}
                      className="text-sm text-gray-500 hover:text-gray-700 w-full text-center"
                    >
                      ← Retour aux options
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}