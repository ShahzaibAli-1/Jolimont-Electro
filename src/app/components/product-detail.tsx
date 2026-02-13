import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Check,
  Truck,
  Sparkles,
  ShoppingCart,
  Shield,
  Clock,
  FileText,
  ChevronDown,
  Star
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    brand: string;
    image: string;
    price: number;
    inStock: boolean;
    aiRecommended?: boolean;
    aiSummary?: {
      whyThisPart: string;
      symptoms: string[];
      installDuration: string;
    };
    compatibility: {
      brands: string[];
      models: string[];
    };
    installation: {
      difficulty: 'easy' | 'medium' | 'hard';
      duration: string;
      tools: string[];
      steps: string[];
    };
    reviews: {
      rating: number;
      count: number;
      comments: Array<{
        author: string;
        rating: number;
        comment: string;
        date: string;
      }>;
    };
  };
  onAddToCart: () => void;
  onViewSchema: () => void;
}

export function ProductDetail({ product, onAddToCart, onViewSchema }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Above the fold */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-secondary rounded-2xl p-8 lg:sticky lg:top-32 h-fit"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-square object-contain"
          />
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div>
            <p className="text-muted-foreground mb-2">{product.brand}</p>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              {product.aiRecommended && (
                <Badge className="bg-primary text-primary-foreground">
                  <Sparkles className="w-3 h-3 mr-1" />
                  IA recommandé
                </Badge>
              )}
              {product.inStock && (
                <Badge className="bg-success text-success-foreground">
                  <Check className="w-3 h-3 mr-1" />
                  En stock
                </Badge>
              )}
              <Badge variant="outline">
                <Truck className="w-3 h-3 mr-1" />
                Livraison rapide
              </Badge>
            </div>

            {/* Star Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.reviews.rating)
                        ? 'fill-premium text-premium'
                        : 'text-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.reviews.rating} ({product.reviews.count} avis)
              </span>
            </div>
          </div>

          {/* AI Summary */}
          {product.aiSummary && (
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">
                    Pourquoi cette pièce ?
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {product.aiSummary.whyThisPart}
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-primary/10">
                <div>
                  <p className="text-xs text-muted-foreground mb-2">
                    Symptômes associés
                  </p>
                  <div className="space-y-1">
                    {product.aiSummary.symptoms.map((symptom, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Check className="w-3 h-3 text-success" />
                        <span>{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2">
                    Installation
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{product.aiSummary.installDuration}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Price & CTA */}
          <div className="bg-white border border-border rounded-xl p-6">
            <div className="flex items-baseline gap-2 mb-4">
              <p className="text-4xl font-bold text-primary">
                {product.price.toFixed(2)}€
              </p>
              <span className="text-muted-foreground">TTC</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 border border-border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-secondary transition-colors"
                >
                  −
                </button>
                <span className="px-4 font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-secondary transition-colors"
                >
                  +
                </button>
              </div>
              <Button onClick={onAddToCart} className="flex-1" size="lg">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Ajouter au panier
              </Button>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Truck className="w-4 h-4" />
                <span>Livraison en 24-48h</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>Garantie 2 ans</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Check className="w-4 h-4" />
                <span>Retour gratuit sous 30 jours</span>
              </div>
            </div>
          </div>

          <Button
            onClick={onViewSchema}
            variant="outline"
            className="w-full"
            size="lg"
          >
            <FileText className="w-4 h-4 mr-2" />
            Voir le schéma éclaté
          </Button>
        </motion.div>
      </div>

      {/* Accordion Sections */}
      <Accordion type="multiple" className="space-y-4">
        {/* Compatibility */}
        <AccordionItem
          value="compatibility"
          className="bg-white border border-border rounded-xl px-6 overflow-hidden"
        >
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-success" />
              <span className="font-semibold">Compatibilité détaillée</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Marques compatibles</h4>
                <div className="flex flex-wrap gap-2">
                  {product.compatibility.brands.map((brand, i) => (
                    <Badge key={i} variant="outline">{brand}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Modèles compatibles</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {product.compatibility.models.map((model, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-3 h-3 text-success" />
                      <span>{model}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Installation */}
        <AccordionItem
          value="installation"
          className="bg-white border border-border rounded-xl px-6 overflow-hidden"
        >
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-semibold">Installation & sécurité</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Badge
                  className={
                    product.installation.difficulty === 'easy'
                      ? 'bg-success text-success-foreground'
                      : product.installation.difficulty === 'medium'
                      ? 'bg-premium text-premium-foreground'
                      : 'bg-destructive text-destructive-foreground'
                  }
                >
                  {product.installation.difficulty === 'easy' && 'Facile'}
                  {product.installation.difficulty === 'medium' && 'Moyen'}
                  {product.installation.difficulty === 'hard' && 'Difficile'}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Durée : {product.installation.duration}
                </span>
              </div>

              <div>
                <h4 className="font-medium mb-2">Outils nécessaires</h4>
                <div className="flex flex-wrap gap-2">
                  {product.installation.tools.map((tool, i) => (
                    <Badge key={i} variant="outline">{tool}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Étapes d'installation</h4>
                <ol className="space-y-2">
                  {product.installation.steps.map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">
                        {i + 1}
                      </span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Reviews */}
        <AccordionItem
          value="reviews"
          className="bg-white border border-border rounded-xl px-6 overflow-hidden"
        >
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-premium" />
              <span className="font-semibold">
                Avis clients ({product.reviews.count})
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="space-y-4">
              {product.reviews.comments.map((review, i) => (
                <div key={i} className="border-b border-border last:border-0 pb-4 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className={`w-3 h-3 ${
                              j < review.rating
                                ? 'fill-premium text-premium'
                                : 'text-border'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-medium text-sm">{review.author}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{review.comment}</p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 z-30">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-2xl font-bold text-primary">
              {product.price.toFixed(2)}€
            </p>
          </div>
          <Button onClick={onAddToCart} size="lg">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Ajouter
          </Button>
        </div>
      </div>
    </div>
  );
}
