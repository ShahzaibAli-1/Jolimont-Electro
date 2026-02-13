import { Phone, Mail, MessageCircle, Clock, MapPin, Headphones } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import technicianImage from '../../assets/d07d4950c6179be2f9f1b5b0184107c4b78c0c9f.png';
import { 
  Package, 
  Search, 
  Wrench, 
  HelpCircle, 
  FileText, 
  CreditCard, 
  Truck, 
  RotateCcw, 
  MessageSquare, 
  Mail as MailIcon, 
  Users,
  ArrowRight
} from 'lucide-react';

interface CustomerServiceProps {
  onOpenChat?: () => void;
}

export function CustomerService({ onOpenChat }: CustomerServiceProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 sm:py-16" style={{ backgroundColor: '#f3f4f6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
            Service clients
          </h1>
          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              {/* Technician Image */}
              <div className="flex-shrink-0">
                <img 
                  src={technicianImage} 
                  alt="Technicien Jolimont Electro" 
                  className="w-32 h-32 sm:w-40 sm:h-40 object-cover object-top rounded-lg"
                />
              </div>
              
              {/* Text Content in Gray Bubble */}
              <div className="flex-1 bg-gray-100 rounded-xl p-6 sm:p-8">
                <p className="text-gray-700 leading-relaxed text-[15px]">
                  Comment pouvons-nous vous aider ? Trouvez facilement la réponse à votre question ou obtenez plus d'informations en choisissant un sujet. Vous pouvez également choisir de{' '}
                  <button 
                    onClick={() => {
                      const contactForm = document.getElementById('contact-form');
                      contactForm?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="font-medium hover:underline"
                    style={{ color: '#305CDE' }}
                  >
                    contacter
                  </button>
                  {' '}directement notre service clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Topics Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Demande de produit */}
            <button className="bg-white border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow text-left group">
              <div className="flex items-start justify-between mb-3">
                <Package className="w-6 h-6 flex-shrink-0" />
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Demande de produit</h3>
              <p className="text-sm text-gray-600">
                Vous cherchez un produit spécifique pour votre appareil ? Laissez-nous vous aider à le trouver.
              </p>
            </button>

            {/* Trouver la référence d'appareil */}
            <button className="bg-white border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow text-left group">
              <div className="flex items-start justify-between mb-3">
                <Search className="w-6 h-6 flex-shrink-0" />
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Trouver la référence d'appareil</h3>
              <p className="text-sm text-gray-600">
                Vous cherchez la plaque signalétique de votre appareil ? Trouvez-le facilement grâce à notre outil de recherche.
              </p>
            </button>

            {/* Conseils de réparation */}
            <button className="bg-white border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow text-left group">
              <div className="flex items-start justify-between mb-3">
                <Wrench className="w-6 h-6 flex-shrink-0" />
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Conseils de réparation</h3>
              <p className="text-sm text-gray-600">
                Vous voulez savoir comment réparer votre appareil ? Obtenez les instructions de réparation dont vous avez besoin.
              </p>
            </button>

            {/* Contrôle des réparations */}
            <button className="bg-white border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow text-left group">
              <div className="flex items-start justify-between mb-3">
                <HelpCircle className="w-6 h-6 flex-shrink-0" />
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Contrôle des réparations</h3>
              <p className="text-sm text-gray-600">
                Réparer ou remplacer ? Utilisez notre outil pour vérifier la réparabilité de votre ancien ou nouvel appareil.
              </p>
            </button>

            {/* Commander */}
            <button className="bg-white border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow text-left group">
              <div className="flex items-start justify-between mb-3">
                <FileText className="w-6 h-6 flex-shrink-0" />
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Commander</h3>
              <p className="text-sm text-gray-600">
                Comment commander chez Jolimont Electro ? Nous vous expliquons.
              </p>
            </button>

            {/* Paiement */}
            <button className="bg-white border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow text-left group">
              <div className="flex items-start justify-between mb-3">
                <CreditCard className="w-6 h-6 flex-shrink-0" />
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Paiement</h3>
              <p className="text-sm text-gray-600">
                Quels sont les modes de paiement possibles ? Vous trouverez les informations ici.
              </p>
            </button>

            {/* Livraison */}
            <button className="bg-white border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow text-left group">
              <div className="flex items-start justify-between mb-3">
                <Truck className="w-6 h-6 flex-shrink-0" />
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Livraison</h3>
              <p className="text-sm text-gray-600">
                Comment fonctionne la livraison ? Vous trouverez plus d'informations ici.
              </p>
            </button>

            {/* Retour */}
            <button className="bg-white border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow text-left group">
              <div className="flex items-start justify-between mb-3">
                <RotateCcw className="w-6 h-6 flex-shrink-0" />
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Retour</h3>
              <p className="text-sm text-gray-600">
                Vous n'avez pas commandé le bon produit ? Renvoyez-le-nous.
              </p>
            </button>

            {/* Suggestions et plaintes */}
            <button className="bg-white border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow text-left group">
              <div className="flex items-start justify-between mb-3">
                <MessageSquare className="w-6 h-6 flex-shrink-0" />
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Suggestions et plaintes</h3>
              <p className="text-sm text-gray-600">
                Vous avez une suggestion ou une plainte à formuler ? Nous sommes ouverts à vos commentaires.
              </p>
            </button>

            {/* Contact */}
            <button 
              onClick={() => {
                const contactForm = document.getElementById('contact-form');
                contactForm?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow text-left group"
            >
              <div className="flex items-start justify-between mb-3">
                <MailIcon className="w-6 h-6 flex-shrink-0" />
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Contact</h3>
              <p className="text-sm text-gray-600">
                Vous avez besoin d'aide ? Contactez directement notre service clients.
              </p>
            </button>

            {/* À propos de nous */}
            <button className="bg-white border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow text-left group">
              <div className="flex items-start justify-between mb-3">
                <Users className="w-6 h-6 flex-shrink-0" />
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">À propos de nous</h3>
              <p className="text-sm text-gray-600">
                Vous voulez savoir qui nous sommes ? Apprenez à mieux nous connatre.
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900">
            Comment nous contacter ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#305CDE20' }}>
                <Phone className="w-7 h-7" style={{ color: '#305CDE' }} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-gray-900">Par téléphone</h3>
              <p className="text-gray-600 text-center mb-4">
                Appelez-nous directement pour une assistance immédiate
              </p>
              <div className="text-center">
                <a 
                  href="tel:+3206426379" 
                  className="text-lg font-bold hover:underline"
                  style={{ color: '#305CDE' }}
                >
                  +32 064 26 37 95
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  Lun-Ven: 9h-18h<br />
                  Sam: 9h-13h
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#10b98120' }}>
                <Mail className="w-7 h-7" style={{ color: '#10b981' }} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-gray-900">Formulaire de contact</h3>
              <p className="text-gray-600 text-center mb-4">
                Envoyez-nous un message, nous répondons sous 24h
              </p>
              <div className="text-center">
                <Button
                  className="font-medium"
                  style={{ backgroundColor: '#10b981' }}
                  onClick={() => {
                    const contactForm = document.getElementById('contact-form');
                    contactForm?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Formulaire
                </Button>
              </div>
            </div>

            {/* Chat */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#d9770620' }}>
                <MessageCircle className="w-7 h-7" style={{ color: '#d97706' }} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-gray-900">Chat en direct</h3>
              <p className="text-gray-600 text-center mb-4">
                Discutez avec un conseiller en temps réel
              </p>
              <div className="text-center">
                <Button
                  className="font-medium"
                  style={{ backgroundColor: '#d97706' }}
                  onClick={onOpenChat}
                >
                  Démarrer le chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900">
            Questions fréquentes
          </h2>
          
          <div className="space-y-4">
            <details className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
              <summary className="font-bold text-lg cursor-pointer text-gray-900">
                Comment puis-je trouver la bonne pièce pour mon appareil ?
              </summary>
              <p className="mt-4 text-gray-600">
                Utilisez notre outil de diagnostic IA en page d'accueil. Il vous guidera étape par étape pour identifier la pièce exacte dont vous avez besoin. Vous pouvez également rechercher par marque, modèle ou référence.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
              <summary className="font-bold text-lg cursor-pointer text-gray-900">
                Quels sont les délais de livraison ?
              </summary>
              <p className="mt-4 text-gray-600">
                Nous expédions toutes les commandes passées avant 17h le jour même. La livraison standard prend 24-48h en Belgique. Nous proposons également une livraison express en 24h.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
              <summary className="font-bold text-lg cursor-pointer text-gray-900">
                Puis-je retourner une pièce si elle ne convient pas ?
              </summary>
              <p className="mt-4 text-gray-600">
                Oui, vous disposez de 14 jours pour retourner gratuitement une pièce non utilisée et dans son emballage d'origine. Contactez-nous pour obtenir un bon de retour.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
              <summary className="font-bold text-lg cursor-pointer text-gray-900">
                Proposez-vous un service d'installation ?
              </summary>
              <p className="mt-4 text-gray-600">
                Oui, nous proposons un service de dépannage à domicile pour l'installation de vos pièces. Nos techniciens certifiés peuvent intervenir dans toute la Belgique. Contactez-nous pour un devis.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
              <summary className="font-bold text-lg cursor-pointer text-gray-900">
                Les pièces sont-elles garanties ?
              </summary>
              <p className="mt-4 text-gray-600">
                Toutes nos pièces sont garanties 12 mois minimum. Certaines pièces bénéficient d'une garantie constructeur étendue jusqu'à 24 mois. Les détails sont indiqués sur chaque fiche produit.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Support Team Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Une équipe d'experts à votre service
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Notre équipe de techniciens spécialisés en électroménager est formée pour vous apporter des solutions rapides et précises. Que vous ayez besoin d'aide pour identifier une pièce, comprendre un diagnostic ou installer un composant, nous sommes là pour vous accompagner à chaque étape.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#305CDE20' }}>
                    <Clock className="w-5 h-5" style={{ color: '#305CDE' }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Réponse rapide</h4>
                    <p className="text-sm text-gray-600">Temps de réponse moyen : moins de 2 heures</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#10b98120' }}>
                    <Headphones className="w-5 h-5" style={{ color: '#10b981' }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Support technique expert</h4>
                    <p className="text-sm text-gray-600">Conseils personnalisés par des techniciens certifiés</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#d9770620' }}>
                    <MapPin className="w-5 h-5" style={{ color: '#d97706' }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Service local</h4>
                    <p className="text-sm text-gray-600">Basés en Belgique, nous connaissons vos besoins</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581374820583-317d45555a82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjByZXByZXNlbnRhdGl2ZSUyMGZyaWVuZGx5JTIwb2ZmaWNlfGVufDF8fHx8MTc3MDU1NzEwOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Équipe service client Jolimont Electro"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 bg-white" id="contact-form">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-gray-900">
            Envoyez-nous un message
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les plus brefs délais
          </p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Sujet *
              </label>
              <select
                id="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                required
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="piece">Question sur une pièce détachée</option>
                <option value="commande">Suivi de commande</option>
                <option value="installation">Service d'installation</option>
                <option value="garantie">Garantie et retours</option>
                <option value="autre">Autre question</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full sm:w-auto font-medium px-8 py-3"
              style={{ backgroundColor: '#305CDE' }}
            >
              Envoyer le message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}