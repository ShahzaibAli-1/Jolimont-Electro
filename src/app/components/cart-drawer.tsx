import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart, Trash2, Plus, Minus, ChevronRight, AlertCircle, Check } from 'lucide-react';
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
  compatible?: boolean; // Made optional with default true behavior
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}: CartDrawerProps) {
  const { t } = useLanguage();
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  const allCompatible = items.every(item => item.compatible !== false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-[480px] bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-primary" />
                <h2 className="font-semibold">{t.cart.title}</h2>
                <Badge variant="secondary">{items.length}</Badge>
              </div>
              <Button size="icon" variant="ghost" onClick={onClose} className="rounded-full">
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <ShoppingCart className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{t.cart.empty}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t.cart.continueShopping}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Compatibility Check */}
                  {!allCompatible && (
                    <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <p className="font-medium text-destructive mb-1">
                            Attention : Vérification de compatibilité nécessaire
                          </p>
                          <p className="text-destructive/80">
                            Certains articles nécessitent une vérification de compatibilité avant achat.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="bg-secondary rounded-xl p-4"
                    >
                      <div className="flex gap-4">
                        {/* Image */}
                        <div className="w-20 h-20 bg-white rounded-lg p-2 flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex-1">
                              <p className="text-xs text-muted-foreground mb-0.5">
                                {item.brand}
                              </p>
                              <h4 className="font-medium text-sm line-clamp-2">
                                {item.name}
                              </h4>
                            </div>
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => onRemoveItem(item.id)}
                              className="flex-shrink-0 h-8 w-8"
                            >
                              <Trash2 className="w-4 h-4 text-destructive" />
                            </Button>
                          </div>

                          {item.compatible && (
                            <Badge className="bg-success text-success-foreground text-xs mb-2">
                              <Check className="w-3 h-3 mr-1" />
                              {t.productCard.compatible}
                            </Badge>
                          )}

                          <div className="flex items-center justify-between">
                            {/* Quantity */}
                            <div className="flex items-center gap-1 border border-border rounded-lg bg-white">
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                                className="px-2 py-1 hover:bg-secondary transition-colors disabled:opacity-50"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-3 text-sm font-medium">{item.quantity}</span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                className="px-2 py-1 hover:bg-secondary transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            {/* Price */}
                            <p className="font-semibold text-primary">
                              {(item.price * item.quantity).toFixed(2)}€
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-6 space-y-4">
                {/* Totals */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{t.cart.subtotal}</span>
                    <span>{subtotal.toFixed(2)}€</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{t.cart.shipping}</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-success font-medium">{t.checkout.free}</span>
                      ) : (
                        `${shipping.toFixed(2)}€`
                      )}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-muted-foreground">
                      {t.cartDrawer.freeShippingFrom} 50€
                    </p>
                  )}
                  <div className="flex items-center justify-between font-semibold text-lg pt-2 border-t border-border">
                    <span>{t.cart.total}</span>
                    <span className="text-primary">{total.toFixed(2)}€</span>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  onClick={onCheckout}
                  className="w-full"
                  size="lg"
                  disabled={!allCompatible}
                >
                  {t.cart.checkout}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Paiement sécurisé • Garantie satisfait ou remboursé
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}