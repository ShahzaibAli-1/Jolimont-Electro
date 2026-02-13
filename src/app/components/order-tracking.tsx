import { useState } from 'react';
import { Package, Search, CheckCircle, Truck, MapPin, Clock, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import glsLogo from '../../assets/46fd6ffcdb791bfbe40d013426da2ed737f19cb1.png';
import laPosteLogo from '../../assets/59476fc68af28fee9046e74b94daf24ce7d8b9b2.png';
import mondialRelayLogo from '../../assets/3eb13bdba18e666b920aa39d3cc7b1b5e8a0ff7f.png';
import chronopostLogo from '../../assets/aeac49fa13eaabbe07fbd9482570683256a11e6e.png';
import colissimoLogo from '../../assets/9dea286778fb097d909a90496db20d70f1c5549c.png';
import dpdLogo from '../../assets/fb0c2290342ba613dc65f75696ed651d3e4d019a.png';

interface OrderTrackingProps {
  onBack: () => void;
}

interface TrackingInfo {
  orderNumber: string;
  status: 'processing' | 'shipped' | 'in-transit' | 'delivered';
  estimatedDelivery: string;
  items: Array<{
    name: string;
    quantity: number;
    image: string;
  }>;
  timeline: Array<{
    status: string;
    date: string;
    location?: string;
    completed: boolean;
  }>;
  carrier: string;
  trackingNumber: string;
}

const mockTrackingData: TrackingInfo = {
  orderNumber: 'JE-2026-00847',
  status: 'in-transit',
  estimatedDelivery: '10 février 2026',
  carrier: 'Colissimo',
  trackingNumber: '6A12345678901',
  items: [
    {
      name: 'Pompe de vidange universelle pour lave-linge',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1687793358564-f4a9e83f2ec0?w=400'
    }
  ],
  timeline: [
    {
      status: 'Commande confirmée',
      date: '8 février 2026, 14:32',
      completed: true
    },
    {
      status: 'En préparation',
      date: '8 février 2026, 15:10',
      completed: true
    },
    {
      status: 'Expédiée',
      date: '8 février 2026, 17:45',
      location: 'Centre de tri - Toulouse',
      completed: true
    },
    {
      status: 'En cours de livraison',
      date: '9 février 2026, 08:15',
      location: 'Centre de distribution - Paris',
      completed: true
    },
    {
      status: 'Livraison prévue',
      date: '10 février 2026',
      completed: false
    }
  ]
};

export function OrderTracking({ onBack }: OrderTrackingProps) {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [trackingData, setTrackingData] = useState<TrackingInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setTrackingData(mockTrackingData);
      setIsLoading(false);
    }, 1500);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return '#10b981';
      case 'in-transit':
      case 'shipped':
        return '#305CDE';
      default:
        return '#d97706';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'processing':
        return 'En préparation';
      case 'shipped':
        return 'Expédiée';
      case 'in-transit':
        return 'En cours de livraison';
      case 'delivered':
        return 'Livrée';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-4 -ml-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
          <h1 className="text-3xl font-bold mb-2">Suivi de commande</h1>
          <p className="text-muted-foreground">
            Suivez votre colis en temps réel
          </p>
        </div>

        {!trackingData ? (
          /* Tracking Form */
          <div className="bg-white rounded-lg shadow-sm border border-border p-8">
            <div className="grid grid-cols-3 sm:flex sm:items-center sm:justify-center gap-3 sm:gap-4 mb-6">
              <div className="w-full aspect-square sm:w-20 sm:h-20 rounded-lg bg-white border-2 border-border flex items-center justify-center hover:border-primary transition-colors p-2">
                <img src={glsLogo} alt="GLS" className="w-full h-full object-contain" />
              </div>
              <div className="w-full aspect-square sm:w-20 sm:h-20 rounded-lg bg-white border-2 border-border flex items-center justify-center hover:border-primary transition-colors p-2">
                <img src={laPosteLogo} alt="La Poste" className="w-full h-full object-contain" />
              </div>
              <div className="w-full aspect-square sm:w-20 sm:h-20 rounded-lg bg-white border-2 border-border flex items-center justify-center hover:border-primary transition-colors p-2">
                <img src={mondialRelayLogo} alt="Mondial Relay" className="w-full h-full object-contain" />
              </div>
              <div className="w-full aspect-square sm:w-20 sm:h-20 rounded-lg bg-white border-2 border-border flex items-center justify-center hover:border-primary transition-colors p-2">
                <img src={chronopostLogo} alt="Chronopost" className="w-full h-full object-contain" />
              </div>
              <div className="w-full aspect-square sm:w-20 sm:h-20 rounded-lg bg-white border-2 border-border flex items-center justify-center hover:border-primary transition-colors p-2">
                <img src={colissimoLogo} alt="Colissimo" className="w-full h-full object-contain" />
              </div>
              <div className="w-full aspect-square sm:w-20 sm:h-20 rounded-lg bg-white border-2 border-border flex items-center justify-center hover:border-primary transition-colors p-2">
                <img src={dpdLogo} alt="DPD" className="w-full h-full object-contain" />
              </div>
            </div>
            
            <form onSubmit={handleTrack} className="space-y-6">
              <div>
                <label htmlFor="orderNumber" className="block text-sm font-medium mb-2">
                  Numéro de commande
                </label>
                <input
                  id="orderNumber"
                  type="text"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="Ex: JE-2026-00847"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  required
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Vous le trouverez dans l'email de confirmation
                </p>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Adresse email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                style={{ backgroundColor: '#305CDE' }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Recherche en cours...
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Suivre ma commande
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Besoin d'aide ? Contactez notre service client au{' '}
                <a href="tel:+3206426379" className="text-primary hover:underline font-medium">
                  +32 064 26 37 95
                </a>
              </p>
            </div>
          </div>
        ) : (
          /* Tracking Results */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Status Card */}
            <div className="bg-white rounded-lg shadow-sm border border-border p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Commande</p>
                  <p className="text-lg font-bold">{trackingData.orderNumber}</p>
                </div>
                <div
                  className="px-4 py-2 rounded-full text-white text-sm font-medium"
                  style={{ backgroundColor: getStatusColor(trackingData.status) }}
                >
                  {getStatusText(trackingData.status)}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Transporteur</p>
                    <p className="font-medium">{trackingData.carrier}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Livraison estimée</p>
                    <p className="font-medium">{trackingData.estimatedDelivery}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-1">Numéro de suivi</p>
                <div className="flex items-center justify-between">
                  <p className="font-mono text-sm">{trackingData.trackingNumber}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(trackingData.trackingNumber);
                    }}
                  >
                    Copier
                  </Button>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-lg shadow-sm border border-border p-6">
              <h2 className="font-semibold mb-6">Historique de suivi</h2>
              <div className="space-y-6">
                {trackingData.timeline.map((event, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          event.completed
                            ? 'bg-primary text-white'
                            : 'bg-gray-200 text-gray-400'
                        }`}
                      >
                        {event.completed ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <Clock className="w-5 h-5" />
                        )}
                      </div>
                      {index < trackingData.timeline.length - 1 && (
                        <div
                          className={`w-0.5 h-12 ${
                            event.completed ? 'bg-primary' : 'bg-gray-200'
                          }`}
                        />
                      )}
                    </div>
                    <div className="flex-1 pb-6">
                      <p className={`font-medium ${event.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {event.status}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">{event.date}</p>
                      {event.location && (
                        <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Items */}
            <div className="bg-white rounded-lg shadow-sm border border-border p-6">
              <h2 className="font-semibold mb-4">Articles commandés</h2>
              <div className="space-y-4">
                {trackingData.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Quantité: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setTrackingData(null)}
              >
                Suivre une autre commande
              </Button>
              <Button
                className="flex-1"
                style={{ backgroundColor: '#305CDE' }}
                onClick={onBack}
              >
                Retour à l'accueil
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}