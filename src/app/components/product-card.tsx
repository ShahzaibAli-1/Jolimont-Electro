import { motion } from 'motion/react';
import { Check, Truck, Sparkles, ShoppingCart } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  brand: string;
  inStock?: boolean;
  compatible?: boolean;
  fastDelivery?: boolean;
  aiRecommended?: boolean;
  onClick?: () => void;
  onAddToCart?: () => void;
}

export function ProductCard({
  name,
  image,
  price,
  brand,
  inStock = true,
  compatible = false,
  fastDelivery = false,
  aiRecommended = false,
  onClick,
  onAddToCart
}: ProductCardProps) {
  const { t } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="group bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-200 cursor-pointer"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-secondary p-6">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-contain"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {aiRecommended && (
            <Badge className="bg-primary text-primary-foreground border-0">
              <Sparkles className="w-3 h-3 mr-1" />
              {t.productCard.aiRecommended}
            </Badge>
          )}
          {compatible && (
            <Badge className="bg-success text-success-foreground border-0">
              <Check className="w-3 h-3 mr-1" />
              {t.productCard.compatible}
            </Badge>
          )}
        </div>

        {/* Quick Add Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Button
            size="icon"
            className="rounded-full shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart?.();
            }}
          >
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1">{brand}</p>
        <h3 className="font-medium mb-3 line-clamp-2 min-h-[2.5rem]">
          {name}
        </h3>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {inStock && (
            <Badge variant="outline" className="text-xs">
              {t.productCard.inStock}
            </Badge>
          )}
          {fastDelivery && (
            <Badge variant="outline" className="text-xs">
              <Truck className="w-3 h-3 mr-1" />
              {t.productCard.fastDelivery}
            </Badge>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-semibold text-primary">
              {price.toFixed(2)}€
            </p>
            <p className="text-xs text-muted-foreground">{t.productCard.taxIncluded}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}