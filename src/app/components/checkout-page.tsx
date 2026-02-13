import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ShoppingBag, 
  CreditCard, 
  Truck, 
  Lock, 
  Check,
  MapPin,
  User,
  Mail,
  Phone,
  AlertCircle,
  Store,
  Home,
  Clock,
  Zap
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';

interface CartItem {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  quantity: number;
}

interface CheckoutPageProps {
  items: CartItem[];
  onBack: () => void;
  onComplete: () => void;
}

type CheckoutStep = 'shipping' | 'payment' | 'review';
type PaymentMethod = 'card' | 'paypal' | 'googlepay' | 'klarna';
type DeliveryOption = 'express' | 'standard' | 'relay' | 'eco';

export function CheckoutPage({ items, onBack, onComplete }: CheckoutPageProps) {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('shipping');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [selectedDelivery, setSelectedDelivery] = useState<DeliveryOption>('standard');
  
  // Form states
  const [shippingForm, setShippingForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'France'
  });

  const [cardForm, setCardForm] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.2; // TVA 20%
  const total = subtotal + shipping + tax;

  const steps = [
    { id: 'shipping', label: t.checkout.steps.shipping, icon: Truck },
    { id: 'payment', label: t.checkout.steps.payment, icon: CreditCard },
    { id: 'review', label: t.checkout.steps.review, icon: Check }
  ];

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('review');
  };

  const handleFinalSubmit = () => {
    // Simulate payment processing
    onComplete();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec logo */}
      <header className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Retour au panier</span>
            </button>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#305CDE' }}>
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-lg" style={{ color: '#305CDE' }}>Jolimont Electro</h1>
                <p className="text-xs text-gray-600">Paiement sécurisé</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Lock className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">Sécurisé</span>
            </div>
          </div>
        </div>
      </header>

      {/* Stepper */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center gap-4 sm:gap-8">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = step.id === currentStep;
              const isCompleted = 
                (step.id === 'shipping' && (currentStep === 'payment' || currentStep === 'review')) ||
                (step.id === 'payment' && currentStep === 'review');
              
              return (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isCompleted
                          ? 'bg-green-500 text-white'
                          : isActive
                          ? 'bg-primary text-white shadow-lg scale-110'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      {isCompleted ? (
                        <Check className="w-6 h-6" />
                      ) : (
                        <StepIcon className="w-6 h-6" />
                      )}
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        isActive || isCompleted ? 'text-gray-900' : 'text-gray-400'
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`hidden sm:block w-20 h-0.5 mx-4 transition-all duration-300 ${
                        isCompleted ? 'bg-green-500' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Forms Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Form */}
            {currentStep === 'shipping' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Truck className="w-6 h-6 text-primary" />
                  Adresse de livraison
                </h2>

                <form onSubmit={handleShippingSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Prénom *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          required
                          value={shippingForm.firstName}
                          onChange={(e) => setShippingForm({ ...shippingForm, firstName: e.target.value })}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Jean"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Nom *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          required
                          value={shippingForm.lastName}
                          onChange={(e) => setShippingForm({ ...shippingForm, lastName: e.target.value })}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Dupont"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        required
                        value={shippingForm.email}
                        onChange={(e) => setShippingForm({ ...shippingForm, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="jean.dupont@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Téléphone *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        required
                        value={shippingForm.phone}
                        onChange={(e) => setShippingForm({ ...shippingForm, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Adresse *</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={shippingForm.address}
                        onChange={(e) => setShippingForm({ ...shippingForm, address: e.target.value })}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="12 rue de la Paix"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Code postal *</label>
                      <input
                        type="text"
                        required
                        value={shippingForm.postalCode}
                        onChange={(e) => setShippingForm({ ...shippingForm, postalCode: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="75001"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Ville *</label>
                      <input
                        type="text"
                        required
                        value={shippingForm.city}
                        onChange={(e) => setShippingForm({ ...shippingForm, city: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Paris"
                      />
                    </div>
                  </div>

                  {/* Delivery Options Section - Appears when address is filled */}
                  {shippingForm.postalCode && shippingForm.city && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="pt-6 border-t"
                    >
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Truck className="w-5 h-5 text-primary" />
                        Options de livraison disponibles
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Basé sur votre adresse : {shippingForm.postalCode} {shippingForm.city}
                      </p>

                      <div className="space-y-3">
                        {/* Express 24h */}
                        <button
                          type="button"
                          onClick={() => setSelectedDelivery('express')}
                          className={`w-full p-4 border-2 rounded-lg transition-all text-left ${
                            selectedDelivery === 'express'
                              ? 'border-primary bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-3 flex-1">
                              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                                <Zap className="w-5 h-5 text-amber-600" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-bold">Livraison Express 24h</h4>
                                  <Badge className="bg-amber-100 text-amber-700 text-xs">Le plus rapide</Badge>
                                </div>
                                <p className="text-sm text-gray-600 mb-1">
                                  Livraison à domicile demain avant 13h
                                </p>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                  <Clock className="w-3 h-3" />
                                  <span>Commandez avant 17h aujourd'hui</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right ml-4">
                              <div className="font-bold text-lg">9,90 €</div>
                            </div>
                          </div>
                        </button>

                        {/* Standard Domicile */}
                        <button
                          type="button"
                          onClick={() => setSelectedDelivery('standard')}
                          className={`w-full p-4 border-2 rounded-lg transition-all text-left ${
                            selectedDelivery === 'standard'
                              ? 'border-primary bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-3 flex-1">
                              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                <Home className="w-5 h-5 text-blue-600" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-bold">Livraison Domicile Standard</h4>
                                  <Badge className="bg-green-100 text-green-700 text-xs">Recommandé</Badge>
                                </div>
                                <p className="text-sm text-gray-600 mb-1">
                                  Livraison à votre domicile en 2-3 jours ouvrés
                                </p>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                  <Clock className="w-3 h-3" />
                                  <span>Livraison prévue {new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right ml-4">
                              <div className="font-bold text-lg text-green-600">
                                {subtotal >= 49 ? 'Gratuit' : '5,99 €'}
                              </div>
                              {subtotal < 49 && (
                                <div className="text-xs text-gray-500">Gratuit dès 49€</div>
                              )}
                            </div>
                          </div>
                        </button>

                        {/* Point Relais */}
                        <button
                          type="button"
                          onClick={() => setSelectedDelivery('relay')}
                          className={`w-full p-4 border-2 rounded-lg transition-all text-left ${
                            selectedDelivery === 'relay'
                              ? 'border-primary bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-3 flex-1">
                              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                                <Store className="w-5 h-5 text-purple-600" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-bold">Point Relais</h4>
                                  <Badge className="bg-blue-100 text-blue-700 text-xs">Meilleur prix</Badge>
                                </div>
                                <p className="text-sm text-gray-600 mb-1">
                                  Retrait dans un point relais près de chez vous
                                </p>
                                <div className="flex flex-col gap-1 text-xs text-gray-500">
                                  <div className="flex items-center gap-2">
                                    <Clock className="w-3 h-3" />
                                    <span>Disponible en 2-4 jours ouvrés</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <MapPin className="w-3 h-3" />
                                    <span>Point relais le plus proche : 450m • Carrefour City</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-right ml-4">
                              <div className="font-bold text-lg">3,90 €</div>
                              <div className="text-xs text-gray-500">Toujours gratuit dès 35€</div>
                            </div>
                          </div>
                        </button>

                        {/* Eco */}
                        <button
                          type="button"
                          onClick={() => setSelectedDelivery('eco')}
                          className={`w-full p-4 border-2 rounded-lg transition-all text-left ${
                            selectedDelivery === 'eco'
                              ? 'border-primary bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-3 flex-1">
                              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                <Truck className="w-5 h-5 text-green-600" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-bold">Livraison Éco-responsable</h4>
                                  <Badge className="bg-green-100 text-green-700 text-xs">🌱 Écologique</Badge>
                                </div>
                                <p className="text-sm text-gray-600 mb-1">
                                  Livraison groupée à domicile en 4-5 jours ouvrés
                                </p>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                  <Clock className="w-3 h-3" />
                                  <span>Réduit l'empreinte carbone de 40%</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right ml-4">
                              <div className="font-bold text-lg text-green-600">Gratuit</div>
                              <div className="text-xs text-gray-500">Sans minimum</div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  <Button type="submit" className="w-full" size="lg">
                    Continuer vers le paiement
                  </Button>
                </form>
              </motion.div>
            )}

            {/* Payment Form */}
            {currentStep === 'payment' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Payment Method Selection */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <CreditCard className="w-6 h-6 text-primary" />
                    Moyen de paiement
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-4 border-2 rounded-lg transition-all ${
                        paymentMethod === 'card'
                          ? 'border-primary bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <CreditCard className="w-8 h-8 mx-auto mb-2 text-gray-700" />
                      <div className="text-sm font-medium">Carte bancaire</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('paypal')}
                      className={`p-4 border-2 rounded-lg transition-all ${
                        paymentMethod === 'paypal'
                          ? 'border-primary bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="h-8 flex items-center justify-center mb-2">
                        <svg viewBox="-1.999 -0.626 296.499 75.333" className="h-6">
                          <g transform="matrix(2.07675 0 0 -2.07675 -11.153 92.77)">
                            <defs><path id="paypal-checkout-a" d="M-86.291-26.334h326.05V79.58h-326.05z"/></defs>
                            <clipPath id="paypal-checkout-b"><use xlinkHref="#paypal-checkout-a" overflow="visible"/></clipPath>
                            <g clipPath="url(#paypal-checkout-b)">
                              <path fill="#003087" d="M30.653 42.105c-1.674 1.908-4.7 2.726-8.571 2.726H10.847a1.609 1.609 0 0 1-1.59-1.357L4.58 13.804a.964.964 0 0 1 .953-1.114h6.936l1.742 11.049-.054-.346a1.604 1.604 0 0 0 1.583 1.357h3.296c6.475 0 11.545 2.63 13.026 10.238.044.225.082.444.115.658.44 2.813-.003 4.726-1.524 6.459"/>
                              <path fill="#009CDE" d="M115.565 27.986c-.424-2.783-2.55-2.783-4.606-2.783h-1.17l.821 5.198c.05.314.32.545.638.545h.537c1.4 0 2.722 0 3.404-.797.407-.478.53-1.186.376-2.163m-.895 7.265h-7.756a1.08 1.08 0 0 1-1.066-.91l-3.136-19.888a.647.647 0 0 1 .638-.747h3.981c.371 0 .687.27.745.636l.89 5.64c.082.523.534.91 1.064.91h2.454c5.11 0 8.058 2.471 8.828 7.372.347 2.142.014 3.826-.989 5.005-1.103 1.295-3.058 1.982-5.653 1.982"/>
                              <path fill="#003087" d="M60.245 27.986c-.423-2.783-2.55-2.783-4.606-2.783h-1.17l.82 5.198c.05.314.32.545.638.545h.537c1.4 0 2.722 0 3.404-.797.408-.478.531-1.186.377-2.163m-.894 7.265h-7.757c-.53 0-.982-.386-1.065-.91l-3.136-19.888a.646.646 0 0 1 .638-.747h3.704c.53 0 .981.386 1.064.91l.847 5.365c.082.524.534.91 1.064.91h2.454c5.11 0 8.058 2.472 8.828 7.373.347 2.142.014 3.826-.989 5.005-1.103 1.295-3.058 1.982-5.653 1.982M77.357 20.847c-.36-2.122-2.043-3.547-4.192-3.547-1.077 0-1.94.347-2.494 1.003-.55.65-.756 1.577-.582 2.608.334 2.103 2.046 3.573 4.162 3.573 1.055 0 1.91-.35 2.476-1.012.569-.666.793-1.598.63-2.625m5.176 7.228h-3.714a.647.647 0 0 1-.64-.546l-.162-1.038-.26.376c-.804 1.168-2.597 1.558-4.387 1.558-4.103 0-7.608-3.11-8.29-7.47-.355-2.177.149-4.256 1.383-5.707 1.133-1.333 2.75-1.888 4.677-1.888 3.308 0 5.142 2.124 5.142 2.124l-.166-1.032a.646.646 0 0 1 .639-.747h3.344c.53 0 .982.385 1.065.91l2.008 12.713a.647.647 0 0 1-.64.747"/>
                              <path fill="#009CDE" d="M132.677 20.847c-.36-2.122-2.043-3.547-4.192-3.547-1.077 0-1.94.347-2.494 1.003-.55.65-.756 1.577-.582 2.608.334 2.103 2.046 3.573 4.162 3.573 1.055 0 1.91-.35 2.476-1.012.569-.666.793-1.598.63-2.625m5.176 7.228h-3.714a.647.647 0 0 1-.64-.546l-.162-1.038-.26.376c-.804 1.168-2.596 1.558-4.387 1.558-4.102 0-7.607-3.11-8.29-7.47-.354-2.177.15-4.256 1.384-5.707 1.133-1.333 2.75-1.888 4.677-1.888 3.308 0 5.143 2.124 5.143 2.124l-.166-1.032a.646.646 0 0 1 .639-.747h3.344c.53 0 .982.385 1.066.91l2.005 12.713a.646.646 0 0 1-.64.747"/>
                              <path fill="#003087" d="M102.313 28.076H98.58c-.357 0-.69-.177-.89-.473l-5.15-7.584-2.183 7.288a1.08 1.08 0 0 1-1.033.77h-3.669a.647.647 0 0 1-.612-.856l4.11-12.066L85.287 9.7a.647.647 0 0 1 .528-1.02h3.73c.352 0 .683.173.885.463l12.414 17.917a.647.647 0 0 1-.53 1.016"/>
                              <path fill="#009CDE" d="M142.23 34.705l-3.184-20.252a.646.646 0 0 1 .639-.747h3.202c.53 0 .982.386 1.064.91l3.139 19.887a.647.647 0 0 1-.639.748h-3.582a.646.646 0 0 1-.639-.546"/>
                              <path fill="#003087" d="M30.653 42.105c-1.674 1.908-4.7 2.726-8.571 2.726H10.847a1.609 1.609 0 0 1-1.59-1.357L4.58 13.804a.964.964 0 0 1 .953-1.114h6.936l1.742 11.049-.054-.346a1.604 1.604 0 0 0 1.583 1.357h3.296c6.475 0 11.545 2.63 13.026 10.238.044.225.082.444.115.658.44 2.813-.003 4.726-1.524 6.459"/>
                              <path fill="#003087" d="M16.083 35.608a1.408 1.408 0 0 0 1.389 1.187h8.808c1.043 0 2.016-.068 2.905-.21a12.206 12.206 0 0 0 1.44-.322 7.957 7.957 0 0 0 1.551-.618c.442 2.813-.002 4.726-1.523 6.46-1.675 1.907-4.7 2.725-8.571 2.725H10.846a1.609 1.609 0 0 1-1.588-1.357L4.58 13.805a.964.964 0 0 1 .952-1.115h6.937l1.742 11.05 1.872 11.868z"/>
                              <path fill="#009CDE" d="M32.177 35.647a18.342 18.342 0 0 0-.115-.66C30.58 27.382 25.51 24.75 19.036 24.75h-3.297a1.602 1.602 0 0 1-1.582-1.357L12.469 12.69l-.48-3.036a.844.844 0 0 1 .834-.976h5.847c.692 0 1.28.504 1.389 1.187l.057.298 1.102 6.984.07.386a1.407 1.407 0 0 0 1.39 1.187h.875c5.664 0 10.099 2.3 11.395 8.956.54 2.78.26 5.103-1.17 6.734-.434.495-.973.902-1.601 1.236"/>
                              <path fill="#012169" d="M30.626 36.264c-.226.066-.459.126-.699.179-.24.053-.488.1-.742.14-.89.145-1.862.213-2.906.213h-8.807a1.404 1.404 0 0 1-1.389-1.188l-1.872-11.87-.054-.345a1.602 1.602 0 0 0 1.582 1.357h3.297c6.475 0 11.545 2.63 13.026 10.238.044.225.081.443.115.658-.375.198-.78.37-1.218.514-.109.036-.22.07-.333.104"/>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('googlepay')}
                      className={`p-4 border-2 rounded-lg transition-all ${
                        paymentMethod === 'googlepay'
                          ? 'border-primary bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 752 400" className="h-10">
                          <path fill="#FFFFFF" d="M552,0H200C90,0,0,90,0,200l0,0c0,110,90,200,200,200h352c110,0,200-90,200-200l0,0C752,90,662,0,552,0z"/>
                          <path fill="#3C4043" d="M552,16.2c24.7,0,48.7,4.9,71.3,14.5c21.9,9.3,41.5,22.6,58.5,39.5c16.9,16.9,30.2,36.6,39.5,58.5c9.6,22.6,14.5,46.6,14.5,71.3s-4.9,48.7-14.5,71.3c-9.3,21.9-22.6,41.5-39.5,58.5c-16.9,16.9-36.6,30.2-58.5,39.5c-22.6,9.6-46.6,14.5-71.3,14.5H200c-24.7,0-48.7-4.9-71.3-14.5c-21.9-9.3-41.5-22.6-58.5-39.5c-16.9-16.9-30.2-36.6-39.5-58.5c-9.6-22.6-14.5-46.6-14.5-71.3s4.9-48.7,14.5-71.3c9.3-21.9,22.6-41.5,39.5-58.5c16.9-16.9,36.6-30.2,58.5-39.5c22.6-9.6,46.6-14.5,71.3-14.5L552,16.2 M552,0H200C90,0,0,90,0,200l0,0c0,110,90,200,200,200h352c110,0,200-90,200-200l0,0C752,90,662,0,552,0L552,0z"/>
                          <path fill="#3C4043" d="M358.6,214.2v60.5h-19.2V125.3h50.9c12.9,0,23.9,4.3,32.9,12.9c9.2,8.6,13.8,19.1,13.8,31.5c0,12.7-4.6,23.2-13.8,31.7c-8.9,8.5-19.9,12.7-32.9,12.7h-31.7V214.2z M358.6,143.7v52.1h32.1c7.6,0,14-2.6,19-7.7c5.1-5.1,7.7-11.3,7.7-18.3c0-6.9-2.6-13-7.7-18.1c-5-5.3-11.3-7.9-19-7.9h-32.1V143.7z"/>
                          <path fill="#3C4043" d="M487.2,169.1c14.2,0,25.4,3.8,33.6,11.4c8.2,7.6,12.3,18,12.3,31.2v63h-18.3v-14.2H514c-7.9,11.7-18.5,17.5-31.7,17.5c-11.3,0-20.7-3.3-28.3-10s-11.4-15-11.4-25c0-10.6,4-19,12-25.2c8-6.3,18.7-9.4,32-9.4c11.4,0,20.8,2.1,28.1,6.3v-4.4c0-6.7-2.6-12.3-7.9-17c-5.3-4.7-11.5-7-18.6-7c-10.7,0-19.2,4.5-25.4,13.6l-16.9-10.6C455.2,175.8,469,169.1,487.2,169.1z M462.4,243.3c0,5,2.1,9.2,6.4,12.5c4.2,3.3,9.2,5,14.9,5c8.1,0,15.3-3,21.6-9s9.5-13,9.5-21.1c-6-4.7-14.3-7.1-25-7.1c-7.8,0-14.3,1.9-19.5,5.6C465,233.1,462.4,237.8,462.4,243.3z"/>
                          <path fill="#3C4043" d="M637.5,172.4l-64,147.2h-19.8l23.8-51.5l-42.2-95.7h20.9l30.4,73.4h0.4l29.6-73.4H637.5z"/>
                          <path fill="#4285F4" d="M282.2,202c0-6.3-0.6-12.2-1.6-18h-80.5v33l46.4,0c-1.9,11-7.9,20.3-17.2,26.6V265h27.6C273,250.1,282.2,228,282.2,202z"/>
                          <path fill="#34A853" d="M229.3,243.6c-7.7,5.2-17.6,8.2-29.1,8.2c-22.4,0-41.3-15.1-48.1-35.4h-28.5v22.1c14.1,28,43.1,47.2,76.6,47.2c23.1,0,42.6-7.6,56.7-20.7L229.3,243.6z"/>
                          <path fill="#FABB05" d="M149.4,200c0-5.7,1-11.2,2.7-16.4v-22.1h-28.5c-5.8,11.6-9.1,24.6-9.1,38.5s3.3,26.9,9.1,38.5l28.5-22.1C150.3,211.3,149.4,205.8,149.4,200z"/>
                          <path fill="#E94235" d="M200.2,148.3c12.6,0,23.9,4.4,32.9,12.9l24.5-24.4c-14.9-13.8-34.2-22.3-57.3-22.3c-33.5,0-62.5,19.2-76.6,47.2l28.5,22.1C158.9,163.4,177.8,148.3,200.2,148.3z"/>
                        </svg>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('klarna')}
                      className={`p-4 border-2 rounded-lg transition-all ${
                        paymentMethod === 'klarna'
                          ? 'border-primary bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-center">
                        <svg viewBox="0 0 100 32" className="h-10" fill="#FFB3C7">
                          <text x="50" y="22" fontSize="16" fontWeight="bold" textAnchor="middle">Klarna</text>
                        </svg>
                      </div>
                    </button>

                  </div>

                  {/* Card Form */}
                  {paymentMethod === 'card' && (
                    <form onSubmit={handlePaymentSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Numéro de carte *</label>
                        <input
                          type="text"
                          required
                          value={cardForm.cardNumber}
                          onChange={(e) => setCardForm({ ...cardForm, cardNumber: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Nom sur la carte *</label>
                        <input
                          type="text"
                          required
                          value={cardForm.cardName}
                          onChange={(e) => setCardForm({ ...cardForm, cardName: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="JEAN DUPONT"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Date d'expiration *</label>
                          <input
                            type="text"
                            required
                            value={cardForm.expiryDate}
                            onChange={(e) => setCardForm({ ...cardForm, expiryDate: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="MM/AA"
                            maxLength={5}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">CVV *</label>
                          <input
                            type="text"
                            required
                            value={cardForm.cvv}
                            onChange={(e) => setCardForm({ ...cardForm, cvv: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="123"
                            maxLength={3}
                          />
                        </div>
                      </div>

                      <div className="flex items-start gap-2 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-blue-900">
                          Vos informations de paiement sont cryptées et sécurisées. Nous ne conservons pas vos données bancaires.
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setCurrentStep('shipping')}
                          className="flex-1"
                        >
                          Retour
                        </Button>
                        <Button type="submit" className="flex-1">
                          Vérifier la commande
                        </Button>
                      </div>
                    </form>
                  )}

                  {/* Other Payment Methods */}
                  {paymentMethod !== 'card' && (
                    <div className="space-y-4">
                      <div className="p-6 bg-gray-50 rounded-lg text-center">
                        <p className="text-gray-600 mb-4">
                          Vous serez redirigé vers {paymentMethod === 'paypal' ? 'PayPal' : paymentMethod === 'googlepay' ? 'Google Pay' : 'Klarna'} pour finaliser votre paiement.
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setCurrentStep('shipping')}
                          className="flex-1"
                        >
                          Retour
                        </Button>
                        <Button
                          type="button"
                          onClick={handlePaymentSubmit}
                          className="flex-1"
                        >
                          Vérifier la commande
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Review */}
            {currentStep === 'review' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Shipping Info */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold flex items-center gap-2">
                      <Truck className="w-5 h-5 text-primary" />
                      Adresse de livraison
                    </h3>
                    <button
                      onClick={() => setCurrentStep('shipping')}
                      className="text-primary text-sm hover:underline"
                    >
                      Modifier
                    </button>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p className="font-medium text-gray-900">
                      {shippingForm.firstName} {shippingForm.lastName}
                    </p>
                    <p>{shippingForm.address}</p>
                    <p>{shippingForm.postalCode} {shippingForm.city}</p>
                    <p>{shippingForm.country}</p>
                    <p className="mt-2">{shippingForm.email}</p>
                    <p>{shippingForm.phone}</p>
                  </div>
                </div>

                {/* Payment Info */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-primary" />
                      Moyen de paiement
                    </h3>
                    <button
                      onClick={() => setCurrentStep('payment')}
                      className="text-primary text-sm hover:underline"
                    >
                      Modifier
                    </button>
                  </div>
                  <div className="text-sm text-gray-600">
                    {paymentMethod === 'card' && cardForm.cardNumber && (
                      <p>Carte bancaire •••• {cardForm.cardNumber.slice(-4)}</p>
                    )}
                    {paymentMethod === 'paypal' && <p>PayPal</p>}
                    {paymentMethod === 'googlepay' && <p>Google Pay</p>}
                    {paymentMethod === 'klarna' && <p>Klarna</p>}
                  </div>
                </div>

                {/* Final CTA */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-start gap-3 mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-green-900">
                      <p className="font-medium mb-1">Votre commande est prête</p>
                      <p>En cliquant sur "Confirmer", vous acceptez nos conditions générales de vente.</p>
                    </div>
                  </div>

                  <Button
                    onClick={handleFinalSubmit}
                    className="w-full"
                    size="lg"
                  >
                    Confirmer et payer {total.toFixed(2)} €
                  </Button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-primary" />
                Récapitulatif
              </h3>

              {/* Items */}
              <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.brand}</p>
                      <p className="text-sm font-medium mt-1">
                        {item.quantity} x {item.price.toFixed(2)} €
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="space-y-2 text-sm border-t pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sous-total</span>
                  <span className="font-medium">{subtotal.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Livraison</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-green-600">Gratuite</span>
                    ) : (
                      `${shipping.toFixed(2)} €`
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">TVA (20%)</span>
                  <span className="font-medium">{tax.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between pt-2 border-t font-bold text-base">
                  <span>Total</span>
                  <span className="text-primary">{total.toFixed(2)} €</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Lock className="w-4 h-4 text-green-600" />
                  </div>
                  <span>Paiement 100% sécurisé</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Truck className="w-4 h-4 text-blue-600" />
                  </div>
                  <span>Livraison rapide 24-48h</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-purple-600" />
                  </div>
                  <span>Garantie satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}