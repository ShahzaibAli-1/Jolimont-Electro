import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  User, 
  MessageSquare, 
  Send, 
  CheckCircle,
  ArrowLeft,
  Clock,
  MapPin,
  Headphones
} from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';

interface ContactFormProps {
  onBack: () => void;
}

export function ContactForm({ onBack }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Message envoyé avec succès !');
    
    // Réinitialiser après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-[#305CDE] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-6 text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Contactez-nous
            </h1>
            <p className="text-lg text-white/90">
              Notre équipe d'experts est là pour vous aider. Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 sticky top-8">
              <h2 className="text-xl font-bold mb-6 text-gray-900">
                Nos coordonnées
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#305CDE]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#305CDE]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                    <a 
                      href="tel:+3206426379" 
                      className="text-gray-600 hover:text-[#305CDE] transition-colors"
                    >
                      +32 064 26 37 95
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Lun - Ven : 9h - 18h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#10b981]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#10b981]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 text-sm">
                      Via formulaire de contact
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d97706]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#d97706]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      Binche, Belgique
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Support technique</h3>
                    <p className="text-gray-600 text-sm">
                      Assistance IA disponible 24/7
                    </p>
                  </div>
                </div>
              </div>

              {/* Badge de confiance */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Clock className="w-5 h-5 text-[#305CDE]" />
                  <p>
                    <span className="font-semibold text-gray-900">Temps de réponse moyen :</span><br />
                    Moins de 2 heures
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-[#10b981]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-[#10b981]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Message envoyé !
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Envoyez-nous un message
                    </h2>
                    <p className="text-gray-600">
                      Tous les champs marqués d'un <span className="text-[#ef4444]">*</span> sont obligatoires
                    </p>
                  </div>

                  {/* Nom */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Nom complet <span className="text-[#ef4444]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#305CDE] focus:border-transparent transition-all outline-none text-gray-900"
                        placeholder="Jean Dupont"
                      />
                    </div>
                  </div>

                  {/* Email et Téléphone */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Email <span className="text-[#ef4444]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                          <Mail className="w-5 h-5" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#305CDE] focus:border-transparent transition-all outline-none text-gray-900"
                          placeholder="jean.dupont@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                        Téléphone
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                          <Phone className="w-5 h-5" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#305CDE] focus:border-transparent transition-all outline-none text-gray-900"
                          placeholder="+32 XXX XX XX XX"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Sujet */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                      Sujet <span className="text-[#ef4444]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#305CDE] focus:border-transparent transition-all outline-none text-gray-900 appearance-none bg-white"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="commande">Question sur une commande</option>
                        <option value="piece">Recherche d'une pièce</option>
                        <option value="diagnostic">Aide au diagnostic</option>
                        <option value="technique">Support technique</option>
                        <option value="garantie">Garantie et retours</option>
                        <option value="autre">Autre</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Votre message <span className="text-[#ef4444]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#305CDE] focus:border-transparent transition-all outline-none resize-none text-gray-900"
                      placeholder="Décrivez votre demande en détail..."
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      {formData.message.length} / 500 caractères
                    </p>
                  </div>

                  {/* Bouton d'envoi */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#305CDE] hover:bg-[#2648b8] text-white py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Envoi en cours...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="w-5 h-5" />
                          Envoyer le message
                        </span>
                      )}
                    </Button>
                  </div>

                  {/* Note de confidentialité */}
                  <p className="text-xs text-gray-500 text-center pt-2">
                    Vos données sont protégées et ne seront utilisées que pour répondre à votre demande.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-[#305CDE]/5 to-[#10b981]/5 rounded-2xl p-8 md:p-10 border border-[#305CDE]/10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Questions fréquentes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Quels sont vos délais de livraison ?
                </h3>
                <p className="text-gray-600 text-sm">
                  Nous livrons en 24-48h partout en Europe avec suivi en temps réel.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Comment fonctionne le diagnostic IA ?
                </h3>
                <p className="text-gray-600 text-sm">
                  Notre IA analyse vos symptômes et recommande la pièce adaptée en quelques minutes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Les pièces sont-elles garanties ?
                </h3>
                <p className="text-gray-600 text-sm">
                  Toutes nos pièces bénéficient d'une garantie de 24 mois et satisfait ou remboursé.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Puis-je retourner une pièce ?
                </h3>
                <p className="text-gray-600 text-sm">
                  Oui, vous disposez de 30 jours pour retourner une pièce non installée.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}