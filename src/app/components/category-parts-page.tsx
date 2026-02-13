import { useState } from 'react';
import { Search, Sparkles, ArrowLeft, SlidersHorizontal } from 'lucide-react';
import { Button } from './ui/button';
import { ProductCard } from './product-card';
import { motion } from 'motion/react';
import heatingElementImage from '../../assets/a810ff5212790b6b3fa9f185f1c2754b2082d7bc.png';
import doorSealImage from '../../assets/b1cf5194e2bbea342f9621c357e30343d65454bf.png';
import thermostatImage from '../../assets/0174da8e1f21942cc40c4ee01d8d6046c8adb990.png';
import waterFilterImage from '../../assets/0756cd198c9136bad27f0c23ce38fce085c25f47.png';
import beltImage from '../../assets/4bba82a3eff065e6c7d1e5ce7f00580c48bc753b.png';
import solenoidValveImage from '../../assets/b8eab3abc8d8e1ec4c607762732596ab891db37e.png';
import ovenFanMotorImage from '../../assets/e36d80c6e8cf896e61f93a28c55609646663009e.png';
import sprayArmImage from '../../assets/0217e2c2e9b2e7bc4f5ad6fda20a20080b60f55a.png';

interface CategoryPartsPageProps {
  category: string;
  onBack: () => void;
  onNavigateToDiagnostic: () => void;
  onAddToCart: (product: any) => void;
  onProductClick: (product: any) => void;
}

// Mock data pour les pièces par catégorie
const categoryParts: Record<string, any[]> = {
  'refrigerator': [
    {
      id: 'ref-1',
      name: 'Thermostat électronique pour réfrigérateur',
      brand: 'Bosch',
      image: thermostatImage,
      price: 42.90,
      inStock: true,
      compatible: true,
      fastDelivery: true,
      aiRecommended: true
    },
    {
      id: 'ref-2',
      name: 'Joint de porte universel réfrigérateur',
      brand: 'Siemens',
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400',
      price: 28.50,
      inStock: true,
      compatible: true,
      fastDelivery: true
    },
    {
      id: 'ref-3',
      name: 'Bac à légumes transparent',
      brand: 'Samsung',
      image: 'https://images.unsplash.com/photo-1584043204475-8cc101d6c77a?w=400',
      price: 35.00,
      inStock: true,
      fastDelivery: true
    },
    {
      id: 'ref-4',
      name: 'Filtre à eau pour réfrigérateur américain',
      brand: 'LG',
      image: waterFilterImage,
      price: 52.90,
      inStock: true,
      compatible: true,
      fastDelivery: true,
      aiRecommended: true
    },
    {
      id: 'ref-5',
      name: 'Ventilateur de refroidissement',
      brand: 'Whirlpool',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
      price: 45.00,
      inStock: false,
      fastDelivery: false
    },
    {
      id: 'ref-6',
      name: 'Résistance de dégivrage',
      brand: 'Beko',
      image: 'https://images.unsplash.com/photo-1590836948951-493c1d737cba?w=400',
      price: 38.50,
      inStock: true,
      compatible: true,
      fastDelivery: true
    },
    {
      id: 'ref-7',
      name: 'Clayette en verre ajustable',
      brand: 'Miele',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400',
      price: 48.90,
      inStock: true,
      fastDelivery: true
    },
    {
      id: 'ref-8',
      name: 'Balconnet de porte universel',
      brand: 'Bosch',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400',
      price: 24.00,
      inStock: true,
      compatible: true,
      fastDelivery: true
    }
  ],
  'dryer': [
    {
      id: 'dry-1',
      name: 'Courroie de tambour sèche-linge',
      brand: 'Bosch',
      image: beltImage,
      price: 29.90,
      inStock: true,
      compatible: true,
      fastDelivery: true,
      aiRecommended: true
    },
    {
      id: 'dry-2',
      name: 'Résistance chauffante 2000W',
      brand: 'Siemens',
      image: 'https://images.unsplash.com/photo-1590836948951-493c1d737cba?w=400',
      price: 55.50,
      inStock: true,
      compatible: true,
      fastDelivery: true
    },
    {
      id: 'dry-3',
      name: 'Filtre à peluches',
      brand: 'Samsung',
      image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400',
      price: 18.00,
      inStock: true,
      fastDelivery: true
    },
    {
      id: 'dry-4',
      name: 'Sonde de température NTC',
      brand: 'LG',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400',
      price: 32.90,
      inStock: true,
      compatible: true,
      fastDelivery: true
    }
  ],
  'range': [
    {
      id: 'ran-1',
      name: 'Thermostat électronique four',
      brand: 'Bosch',
      image: thermostatImage,
      price: 45.00,
      inStock: true,
      compatible: true,
      fastDelivery: true,
      aiRecommended: true
    },
    {
      id: 'ran-2',
      name: 'Résistance de voûte 2500W',
      brand: 'Siemens',
      image: 'https://images.unsplash.com/photo-1590836948951-493c1d737cba?w=400',
      price: 62.50,
      inStock: true,
      compatible: true,
      fastDelivery: true
    },
    {
      id: 'ran-3',
      name: 'Ventilateur de chaleur tournante',
      brand: 'Samsung',
      image: ovenFanMotorImage,
      price: 58.00,
      inStock: true,
      fastDelivery: true
    },
    {
      id: 'ran-4',
      name: 'Joint de porte four',
      brand: 'Miele',
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400',
      price: 35.90,
      inStock: true,
      compatible: true,
      fastDelivery: true
    }
  ],
  'washer': [
    {
      id: 'was-1',
      name: 'Pompe de vidange universelle',
      brand: 'Bosch',
      image: 'https://images.unsplash.com/photo-1687793358564-f4a9e83f2ec0?w=400',
      price: 24.90,
      inStock: true,
      compatible: true,
      fastDelivery: true,
      aiRecommended: true
    },
    {
      id: 'was-2',
      name: 'Résistance chauffante 1800W',
      brand: 'Siemens',
      image: 'https://images.unsplash.com/photo-1590836948951-493c1d737cba?w=400',
      price: 48.50,
      inStock: true,
      compatible: true,
      fastDelivery: true
    },
    {
      id: 'was-3',
      name: 'Courroie de tambour',
      brand: 'Samsung',
      image: beltImage,
      price: 22.00,
      inStock: true,
      fastDelivery: true
    },
    {
      id: 'was-4',
      name: 'Joint de hublot',
      brand: 'LG',
      image: doorSealImage,
      price: 38.90,
      inStock: true,
      compatible: true,
      fastDelivery: true
    }
  ],
  'dishwasher': [
    {
      id: 'dis-1',
      name: 'Résistance chauffante lave-vaisselle',
      brand: 'Bosch',
      image: heatingElementImage,
      price: 32.50,
      inStock: true,
      compatible: true,
      fastDelivery: true,
      aiRecommended: true
    },
    {
      id: 'dis-2',
      name: 'Pompe de cyclage',
      brand: 'Siemens',
      image: 'https://images.unsplash.com/photo-1687793358564-f4a9e83f2ec0?w=400',
      price: 65.00,
      inStock: true,
      compatible: true,
      fastDelivery: true
    },
    {
      id: 'dis-3',
      name: 'Bras de lavage supérieur',
      brand: 'Samsung',
      image: sprayArmImage,
      price: 28.00,
      inStock: true,
      fastDelivery: true
    },
    {
      id: 'dis-4',
      name: 'Joint de porte lave-vaisselle',
      brand: 'Miele',
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400',
      price: 42.90,
      inStock: true,
      compatible: true,
      fastDelivery: true
    }
  ],
  'washer-dryer-combo': [
    {
      id: 'com-1',
      name: 'Pompe de vidange combo lavante-séchante',
      brand: 'Bosch',
      image: 'https://images.unsplash.com/photo-1687793358564-f4a9e83f2ec0?w=400',
      price: 55.90,
      inStock: true,
      compatible: true,
      fastDelivery: true,
      aiRecommended: true
    },
    {
      id: 'com-2',
      name: 'Résistance bi-fonction 2200W',
      brand: 'LG',
      image: 'https://images.unsplash.com/photo-1590836948951-493c1d737cba?w=400',
      price: 72.50,
      inStock: true,
      compatible: true,
      fastDelivery: true
    },
    {
      id: 'com-3',
      name: 'Courroie renforcée',
      brand: 'Samsung',
      image: beltImage,
      price: 35.00,
      inStock: true,
      fastDelivery: true
    }
  ]
};

const categoryNames: Record<string, string> = {
  'refrigerator': 'Réfrigérateur',
  'dryer': 'Sèche-linge',
  'range': 'Four',
  'washer': 'Lave-linge',
  'dishwasher': 'Lave-vaisselle',
  'washer-dryer-combo': 'Combo Laveuse-Sécheuse'
};

export function CategoryPartsPage({ 
  category, 
  onBack, 
  onNavigateToDiagnostic,
  onAddToCart,
  onProductClick 
}: CategoryPartsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const parts = categoryParts[category] || [];
  const categoryName = categoryNames[category] || category;

  const filteredParts = parts.filter(part =>
    part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    part.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec retour */}
      <div className="bg-white border-b border-border sticky top-14 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onBack}
              className="shrink-0"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Pièces pour {categoryName}</h1>
              <p className="text-sm text-muted-foreground mt-1">
                {filteredParts.length} pièce{filteredParts.length > 1 ? 's' : ''} disponible{filteredParts.length > 1 ? 's' : ''}
              </p>
            </div>
          </div>

          {/* Barre de recherche */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder={`Rechercher une pièce pour ${categoryName}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              />
            </div>
            
            {/* Bouton Diagnostic IA */}
            <Button
              onClick={onNavigateToDiagnostic}
              className="gap-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary whitespace-nowrap"
            >
              <Sparkles className="w-4 h-4" />
              Diagnostic IA
            </Button>
          </div>
        </div>
      </div>

      {/* Liste des pièces */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredParts.length === 0 ? (
          <div className="text-center py-16">
            <Search className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">Aucune pièce trouvée</h3>
            <p className="text-muted-foreground mb-6">
              Essayez de modifier votre recherche ou utilisez notre diagnostic IA
            </p>
            <Button
              onClick={onNavigateToDiagnostic}
              className="gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Lancer le diagnostic IA
            </Button>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {filteredParts.map((part, index) => (
              <motion.div
                key={part.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <ProductCard
                  {...part}
                  onAddToCart={() => onAddToCart(part)}
                  onClick={() => onProductClick(part)}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}