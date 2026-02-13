import { ArrowLeft, SlidersHorizontal } from 'lucide-react';
import { ProductCard } from './product-card';
import { Button } from './ui/button';
import heatingElementImage from '../../assets/a810ff5212790b6b3fa9f185f1c2754b2082d7bc.png';
import doorSealImage from '../../assets/b1cf5194e2bbea342f9621c357e30343d65454bf.png';
import thermostatImage from '../../assets/0174da8e1f21942cc40c4ee01d8d6046c8adb990.png';
import waterFilterImage from '../../assets/0756cd198c9136bad27f0c23ce38fce085c25f47.png';
import beltImage from '../../assets/4bba82a3eff065e6c7d1e5ce7f00580c48bc753b.png';
import solenoidValveImage from '../../assets/b8eab3abc8d8e1ec4c607762732596ab891db37e.png';
import ovenFanMotorImage from '../../assets/e36d80c6e8cf896e61f93a28c55609646663009e.png';
import sprayArmImage from '../../assets/0217e2c2e9b2e7bc4f5ad6fda20a20080b60f55a.png';

interface Product {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  inStock: boolean;
  compatible?: boolean;
  fastDelivery?: boolean;
  aiRecommended?: boolean;
}

interface BrandProductsPageProps {
  brand: string;
  onBack: () => void;
  onProductClick: (product: any) => void;
}

export function BrandProductsPage({ brand, onBack, onProductClick }: BrandProductsPageProps) {
  // Mock products - in a real app, this would be fetched from an API
  const allProducts: Product[] = [
    {
      id: '1',
      name: 'Pompe de vidange universelle pour lave-linge',
      brand: 'Bosch',
      image: 'https://images.unsplash.com/photo-1687793358564-f4a9e83f2ec0?w=400',
      price: 24.90,
      inStock: true,
      compatible: true,
      fastDelivery: true,
      aiRecommended: true
    },
    {
      id: '2',
      name: 'Résistance chauffante lave-linge',
      brand: 'Bosch',
      image: heatingElementImage,
      price: 32.50,
      inStock: true,
      compatible: true,
      fastDelivery: true
    },
    {
      id: '3',
      name: 'Moteur tambour lave-linge',
      brand: 'Bosch',
      image: 'https://images.unsplash.com/photo-1753964724380-2c5ae02512a8?w=400',
      price: 89.00,
      inStock: true,
      fastDelivery: true
    },
    {
      id: '4',
      name: 'Joint de porte lave-linge',
      brand: 'Bosch',
      image: doorSealImage,
      price: 18.90,
      inStock: true,
      fastDelivery: true
    },
    {
      id: '5',
      name: 'Pompe de cyclage lave-vaisselle',
      brand: 'Siemens',
      image: 'https://images.unsplash.com/photo-1687793358564-f4a9e83f2ec0?w=400',
      price: 45.90,
      inStock: true,
      fastDelivery: true
    },
    {
      id: '6',
      name: 'Résistance chauffante lave-vaisselle',
      brand: 'Siemens',
      image: heatingElementImage,
      price: 38.50,
      inStock: true,
      fastDelivery: true
    },
    {
      id: '7',
      name: 'Panier supérieur lave-vaisselle',
      brand: 'Siemens',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400',
      price: 52.00,
      inStock: true,
      fastDelivery: false
    },
    {
      id: '8',
      name: 'Filtre tambour machine à laver',
      brand: 'Samsung',
      image: 'https://images.unsplash.com/photo-1753964724380-2c5ae02512a8?w=400',
      price: 12.90,
      inStock: true,
      fastDelivery: true
    },
    {
      id: '9',
      name: 'Thermostat électronique four',
      brand: 'Samsung',
      image: thermostatImage,
      price: 45.00,
      inStock: true,
      fastDelivery: true
    },
    {
      id: '10',
      name: 'Résistance de sole pour four',
      brand: 'Samsung',
      image: 'https://images.unsplash.com/photo-1687793358564-f4a9e83f2ec0?w=400',
      price: 34.90,
      inStock: true,
      fastDelivery: true
    },
    {
      id: '11',
      name: 'Ventilateur de refroidissement',
      brand: 'LG',
      image: ovenFanMotorImage,
      price: 28.50,
      inStock: true,
      fastDelivery: true
    },
    {
      id: '12',
      name: 'Filtre à eau pour réfrigérateur',
      brand: 'LG',
      image: waterFilterImage,
      price: 22.90,
      inStock: true,
      fastDelivery: true
    },
    {
      id: '13',
      name: 'Thermostat de réfrigérateur',
      brand: 'LG',
      image: thermostatImage,
      price: 41.00,
      inStock: true,
      fastDelivery: false
    },
    {
      id: '14',
      name: 'Courroie de tambour sèche-linge',
      brand: 'Whirlpool',
      image: beltImage,
      price: 16.90,
      inStock: true,
      fastDelivery: true
    },
    {
      id: '15',
      name: 'Poulie de tambour',
      brand: 'Whirlpool',
      image: 'https://images.unsplash.com/photo-1590836948951-493c1d737cba?w=400',
      price: 24.50,
      inStock: true,
      fastDelivery: true
    },
    {
      id: '16',
      name: 'Filtre à peluches sèche-linge',
      brand: 'Whirlpool',
      image: 'https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?w=400',
      price: 11.90,
      inStock: true,
      fastDelivery: true
    },
    {
      id: '17',
      name: 'Joint de porte lave-vaisselle',
      brand: 'Miele',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400',
      price: 35.90,
      inStock: true,
      fastDelivery: true
    },
    {
      id: '18',
      name: 'Bras de lavage supérieur',
      brand: 'Miele',
      image: sprayArmImage,
      price: 29.00,
      inStock: true,
      fastDelivery: false
    },
    {
      id: '19',
      name: 'Pompe de circulation',
      brand: 'Miele',
      image: 'https://images.unsplash.com/photo-1687793358564-f4a9e83f2ec0?w=400',
      price: 67.50,
      inStock: true,
      fastDelivery: true
    },
    {
      id: '20',
      name: 'Électrovanne pour lave-linge',
      brand: 'Beko',
      image: solenoidValveImage,
      price: 19.90,
      inStock: true,
      fastDelivery: true
    },
    {
      id: '21',
      name: 'Résistance de chauffage',
      brand: 'Beko',
      image: 'https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?w=400',
      price: 31.50,
      inStock: true,
      fastDelivery: true
    },
    {
      id: '22',
      name: 'Sonde de température',
      brand: 'Beko',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400',
      price: 14.90,
      inStock: true,
      fastDelivery: false
    },
    {
      id: '23',
      name: 'Filtre anti-parasite',
      brand: 'Thomson',
      image: 'https://images.unsplash.com/photo-1753964724380-2c5ae02512a8?w=400',
      price: 13.90,
      inStock: true,
      fastDelivery: true
    },
    {
      id: '24',
      name: 'Câble d\'alimentation',
      brand: 'Thomson',
      image: 'https://images.unsplash.com/photo-1687793358564-f4a9e83f2ec0?w=400',
      price: 9.90,
      inStock: true,
      fastDelivery: true
    }
  ];

  // Filter products by brand
  const filteredProducts = allProducts.filter(
    product => product.brand.toLowerCase() === brand.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec bouton retour */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={onBack}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour
            </Button>
            <div className="flex-1">
              <h1 className="text-2xl font-bold">Pièces détachées {brand}</h1>
              <p className="text-sm text-gray-600 mt-1">
                {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} disponible{filteredProducts.length > 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filtres et tri (optionnel pour l'instant) */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filtres</span>
          </div>
        </div>

        {/* Grille de produits */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onClick={() => onProductClick(product)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Aucun produit disponible pour cette marque
            </p>
          </div>
        )}
      </div>
    </div>
  );
}