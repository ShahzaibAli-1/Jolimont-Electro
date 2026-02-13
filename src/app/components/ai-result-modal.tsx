import { motion } from 'motion/react';
import { X, CheckCircle2, AlertCircle, Wrench, ChevronRight, FileSearch } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ProductCard } from './product-card';

interface Cause {
  id: string;
  title: string;
  probability: 'high' | 'medium' | 'low';
  description: string;
}

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  brand: string;
  compatible: boolean;
  installDuration: string;
}

interface AIResultModalProps {
  query: string;
  diagnosis: string;
  causes: Cause[];
  recommendedProduct?: Product;
  alternatives?: Product[];
  onClose: () => void;
  onViewProduct: (product: Product) => void;
  onAdjustDiagnosis: () => void;
}

export function AIResultModal({
  query,
  diagnosis,
  causes,
  recommendedProduct,
  alternatives = [],
  onClose,
  onViewProduct,
  onAdjustDiagnosis
}: AIResultModalProps) {
  const getProbabilityColor = (probability: string) => {
    switch (probability) {
      case 'high': return 'text-success';
      case 'medium': return 'text-premium';
      case 'low': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-8"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-border rounded-t-2xl px-6 py-4 flex items-center justify-between z-10">
          <div className="flex-1">
            <h2 className="font-semibold mb-1">Diagnostic IA</h2>
            <p className="text-sm text-muted-foreground">"{query}"</p>
          </div>
          <Button
            size="icon"
            variant="ghost"
            onClick={onClose}
            className="rounded-full"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* AI Diagnosis */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-primary/5 border border-primary/20 rounded-xl p-6"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-primary mb-2">Analyse du problème</h3>
                <p className="text-foreground leading-relaxed">{diagnosis}</p>
              </div>
            </div>
          </motion.div>

          {/* Probable Causes */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary" />
              Causes probables
            </h3>
            <div className="grid gap-3">
              {causes.map((cause, index) => (
                <motion.div
                  key={cause.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="bg-secondary border border-border rounded-xl p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">{cause.title}</h4>
                      <p className="text-sm text-muted-foreground">{cause.description}</p>
                    </div>
                    <Badge
                      variant="outline"
                      className={getProbabilityColor(cause.probability)}
                    >
                      {cause.probability === 'high' ? 'Très probable' :
                       cause.probability === 'medium' ? 'Probable' : 'Possible'}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recommended Product */}
          {recommendedProduct && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-primary" />
                  Pièce recommandée
                </h3>
                <Badge className="bg-primary text-primary-foreground">
                  Meilleure solution
                </Badge>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-primary/5 to-transparent border-2 border-primary/20 rounded-2xl p-4"
              >
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <img
                      src={recommendedProduct.image}
                      alt={recommendedProduct.name}
                      className="w-full aspect-square object-contain bg-white rounded-xl"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {recommendedProduct.brand}
                    </p>
                    <h4 className="text-xl font-semibold mb-4">
                      {recommendedProduct.name}
                    </h4>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-success" />
                        <span>Compatible avec votre appareil</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Wrench className="w-4 h-4 text-primary" />
                        <span>Installation : {recommendedProduct.installDuration}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                      <p className="text-3xl font-bold text-primary">
                        {recommendedProduct.price.toFixed(2)}€
                      </p>
                      <Badge className="bg-success text-success-foreground">
                        En stock
                      </Badge>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={() => onViewProduct(recommendedProduct)}
                        className="flex-1"
                      >
                        Voir la pièce
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        title="Voir le schéma"
                      >
                        <FileSearch className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Alternatives */}
          {alternatives.length > 0 && (
            <div>
              <h3 className="font-semibold mb-4">Alternatives possibles</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {alternatives.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    onClick={() => onViewProduct(product)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Adjust Diagnosis */}
          <div className="pt-4 border-t border-border">
            <Button
              variant="outline"
              onClick={onAdjustDiagnosis}
              className="w-full"
            >
              Ce n'est pas ça ? Ajuster le diagnostic
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
