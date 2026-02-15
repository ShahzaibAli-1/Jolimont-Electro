import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  Wrench, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram,
  Sparkles,
  Truck,
  X,
  ChevronDown,
  Headphones,
  Grid3x3,
  Package
} from 'lucide-react';
import { ProductDetail } from './components/product-detail';
import { DiagnosticStepper } from './components/diagnostic-stepper';
import { CartDrawer } from './components/cart-drawer';
import { Login } from './components/login';
import { ProductCard } from './components/product-card';
import { AIResultModal } from './components/ai-result-modal';
import { OrderTracking } from './components/order-tracking';
import { BrandPickerModal } from './components/brand-picker-modal';
import { SustainabilityHelpSection } from './components/sustainability-help-section';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { CustomerService } from './components/customer-service';
import { Chatbot } from './components/chatbot';
import { DeliveryAnimation } from './components/delivery-animation';
import { ContactForm } from './components/contact-form';
import svgPaths from '../imports/svg-jp03xjl1ag';
import technicianImage from '../assets/4c55c549aa76c9933760180bf37125d5650421fd.png';
import washingMachineRepairImage from '../assets/4f7a57b1de2e9b104cb7d7bfcb06097de7ea287b.png';
import repairOrReplaceImage from '../assets/f65277e71520d7ff738a6891a47ce318917a4053.png';
import commonPartsImage from '../assets/24240017f49fd20a1ce7efb26aaf47d2759aad1a.png';
import originalVsCompatibleImage from '../assets/7e584e141930a7711dc6ea6d1e1b152b6552e113.png';
import { ShopApplianceParts } from './components/shop-appliance-parts';
import { BrandProductsPage } from './components/brand-products-page';
import { CheckoutPage } from './components/checkout-page';
import { CategoryPartsPage } from './components/category-parts-page';
import { BlogArticle1 } from './components/blog-article-1';
import { BlogArticle2 } from './components/blog-article-2';
import { BlogArticle3 } from './components/blog-article-3';
import { BlogArticle4 } from './components/blog-article-4';
import { BlogArticle5 } from './components/blog-article-5';
import { FAQPage } from './components/faq-page';
import { WarrantyPage } from './components/warranty-page';
import { ReturnsPage } from './components/returns-page';
import { TermsPage } from './components/terms-page';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { toast } from 'sonner';
import { Toaster } from './components/ui/sonner';
import Layer1 from '../imports/Layer1';
import Layer153 from '../imports/Layer1-53-30';
import { DpdLogo } from './components/dpd-logo';
import { TrustedShopsLogo } from './components/TrustedShopsLogo';
import { ScrollReveal } from './components/scroll-reveal';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageSelector } from './components/LanguageSelector';
import { productsAPI } from '../services/api';

// Images
import logoImage from '../assets/fb59b76ceb2a0cf3614ca89ca0e669563c96bebc.png';
import heroBgImage from '../assets/13c4ab82dfa5e37ba74d95cf59b5494c20197227.png';
import heroBgImageMobile from '../assets/314012da235ac6400a8de8c3d00cb46ecd304487.png';
import pumpImage from '../assets/392ded11266269b334c66232f3a2ce4446dccd83.png';
import heatingElementImage from '../assets/a810ff5212790b6b3fa9f185f1c2754b2082d7bc.png';
import doorSealImage from '../assets/b1cf5194e2bbea342f9621c357e30343d65454bf.png';

// Brand logos
import thomsonLogo from '../assets/32d0a2f0a34045d0726d13d0c9a6cc0d38de1b39.png';
import bekoLogo from '../assets/429a63c30e79034f4e2014828962054efcd102d2.png';
import boschLogo from '../assets/520a487a6d1b0355afdaebaa6147405947f5ce50.png';
import lgLogo from '../assets/02ab6d2362f2b27023125804934c0efb85c9e49f.png';
import whirlpoolLogo from '../assets/3c3c9a028e00a0b64228193f8e389fd33e4ca255.png';
import samsungLogo from '../assets/79f8ae3dd17c139504f9ac05813a1d2fdf2d44a1.png';
import siemensLogo from '../assets/480e6a07858ac4d35221ea2789e5c06239ee2e0e.png';
import mieleLogo from '../assets/fdec5156a57eb6b9116e943e3b8ba9ffd8f9fd84.png';
import hotpointLogo from '../assets/a9eb3b3e3f0d20fe8b959c75f830d1f8a608f9c5.png';
import electroluxLogo from '../assets/f6a2bfe664c145da64bb06ecf1e2f594e24290ac.png';
import zanussiLogo from '../assets/7e0a67cbd42d085ddb4e7c93bd623089ec421ef7.png';
import aegLogo from '../assets/df0a0b29ead28472826bb8655127ff4a57b1657f.png';

// Product images
import thermostatImage from '../assets/0174da8e1f21942cc40c4ee01d8d6046c8adb990.png';
import waterFilterImage from '../assets/0756cd198c9136bad27f0c23ce38fce085c25f47.png';
import beltImage from '../assets/4bba82a3eff065e6c7d1e5ce7f00580c48bc753b.png';
import solenoidValveImage from '../assets/b8eab3abc8d8e1ec4c607762732596ab891db37e.png';
import ovenFanMotorImage from '../assets/e36d80c6e8cf896e61f93a28c55609646663009e.png';
import sprayArmImage from '../assets/0217e2c2e9b2e7bc4f5ad6fda20a20080b60f55a.png';

type Page = 'home' | 'diagnostic' | 'product-detail' | 'catalog' | 'login' | 'order-tracking' | 'customer-service' | 'contact' | 'brand-products' | 'checkout' | 'category-parts' | 'blog-article-1' | 'blog-article-2' | 'blog-article-3' | 'blog-article-4' | 'blog-article-5' | 'faq' | 'warranty' | 'returns' | 'terms';

const PAGE_TO_PATH: Record<Page, string> = {
  home: '/',
  diagnostic: '/diagnostic',
  'product-detail': '/product-detail',
  catalog: '/catalog',
  login: '/login',
  'order-tracking': '/order-tracking',
  'customer-service': '/customer-service',
  contact: '/contact',
  'brand-products': '/brand-products',
  checkout: '/checkout',
  'category-parts': '/category-parts',
  'blog-article-1': '/blog-article-1',
  'blog-article-2': '/blog-article-2',
  'blog-article-3': '/blog-article-3',
  'blog-article-4': '/blog-article-4',
  'blog-article-5': '/blog-article-5',
  faq: '/faq',
  warranty: '/warranty',
  returns: '/returns',
  terms: '/terms',
};

const PATH_TO_PAGE: Record<string, Page> = Object.entries(PAGE_TO_PATH).reduce((acc, [page, path]) => {
  acc[path] = page as Page;
  return acc;
}, {} as Record<string, Page>);

const getPageFromPath = (pathname: string): Page => {
  const normalizedPath = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  return PATH_TO_PAGE[normalizedPath] ?? 'home';
};

// Mock Data
const mockProducts = [
  {
    id: '1',
    name: 'Pompe de vidange universelle pour lave-linge',
    brand: 'Bosch',
    image: pumpImage,
    price: 24.90,
    inStock: true,
    compatible: true,
    fastDelivery: true,
    aiRecommended: true
  },
  {
    id: '2',
    name: 'Résistance chauffante lave-vaisselle',
    brand: 'Siemens',
    image: heatingElementImage,
    price: 32.50,
    inStock: true,
    compatible: true,
    fastDelivery: true
  },
  {
    id: '3',
    name: 'Thermostat électronique four',
    brand: 'Samsung',
    image: thermostatImage,
    price: 45.00,
    inStock: true,
    compatible: true,
    fastDelivery: true
  },
  {
    id: '4',
    name: 'Joint de porte lave-linge universel',
    brand: 'Whirlpool',
    image: doorSealImage,
    price: 18.90,
    inStock: true,
    compatible: true,
    fastDelivery: true,
    aiRecommended: true
  },
  {
    id: '5',
    name: 'Filtre à eau frigo américain',
    brand: 'LG',
    image: waterFilterImage,
    price: 28.00,
    inStock: true,
    compatible: true,
    fastDelivery: true
  },
  {
    id: '6',
    name: 'Courroie de tambour sèche-linge',
    brand: 'Miele',
    image: beltImage,
    price: 15.50,
    inStock: true,
    compatible: true,
    fastDelivery: true
  },
  {
    id: '7',
    name: 'Électrovanne double entrée',
    brand: 'Beko',
    image: solenoidValveImage,
    price: 22.90,
    inStock: true,
    compatible: true,
    fastDelivery: true,
    aiRecommended: true
  },
  {
    id: '8',
    name: 'Moteur ventilateur four multifonction',
    brand: 'Bosch',
    image: ovenFanMotorImage,
    price: 38.00,
    inStock: true,
    compatible: true,
    fastDelivery: true
  },
  {
    id: '9',
    name: 'Bras de lavage inférieur lave-vaisselle',
    brand: 'Siemens',
    image: sprayArmImage,
    price: 19.90,
    inStock: true,
    compatible: true,
    fastDelivery: true
  }
];

const mockProductDetail = {
  id: '1',
  name: 'Pompe de vidange universelle pour lave-linge',
  brand: 'Bosch',
  image: pumpImage,
  price: 24.90,
  inStock: true,
  aiRecommended: true,
  aiSummary: {
    whyThisPart: "La pompe de vidange est responsable de l'évacuation de l'eau. Si votre machine fuit ou ne vidange pas correctement, c'est probablement la cause principale. Cette pièce universelle est compatible avec la plupart des modèles Bosch série 6 et 7.",
    symptoms: ['Fuite d\'eau', 'Eau stagnante', 'Bruit de gargouillement'],
    installDuration: '20-30 minutes'
  },
  compatibility: {
    brands: ['Bosch', 'Siemens', 'Neff'],
    models: [
      'WAW28750FF Serie 8',
      'WAW32540FF Serie 8',
      'WAT28619FF Serie 6',
      'WAQ28482FF Serie 6',
      'WAN28280FF Serie 4'
    ]
  },
  installation: {
    difficulty: 'medium' as const,
    duration: '20-30 minutes',
    tools: ['Tournevis cruciforme', 'Pince multiprise', 'Seau'],
    steps: [
      'Débrancher l\'appareil et couper l\'arrivée d\'eau',
      'Incliner légèrement la machine vers l\'arrière',
      'Retirer le panneau avant avec un tournevis',
      'Débrancher les durites de la pompe',
      'Dévisser et retirer l\'ancienne pompe',
      'Installer la nouvelle pompe en sens inverse'
    ]
  },
  reviews: {
    rating: 4.5,
    count: 127,
    comments: [
      {
        author: 'Marie D.',
        rating: 5,
        comment: 'Parfaitement compatible avec mon lave-linge Bosch. Installation facile en suivant le tuto vidéo.',
        date: '15 janvier 2026'
      },
      {
        author: 'Thomas L.',
        rating: 4,
        comment: 'Bonne qualité, fonctionne parfaitement. Dommage que les instructions ne soient qu\'en anglais.',
        date: '3 janvier 2026'
      },
      {
        author: 'Sophie M.',
        rating: 5,
        comment: 'Machine réparée en 25 min ! Le diagnostic IA m\'a fait gagner un temps fou.',
        date: '28 décembre 2025'
      }
    ]
  }
};

const mockCauses = [
  {
    id: '1',
    title: 'Pompe de vidange défectueuse',
    probability: 'high' as const,
    description: 'La pompe ne parvient plus à évacuer l\'eau correctement, causant une fuite.'
  },
  {
    id: '2',
    title: 'Durite de vidange percée',
    probability: 'medium' as const,
    description: 'Une durite usée peut laisser passer l\'eau et causer une fuite.'
  },
  {
    id: '3',
    title: 'Joint de porte usé',
    probability: 'low' as const,
    description: 'Le joint peut être abîmé et laisser fuir de l\'eau pendant le cycle.'
  }
];

function AppContent() {
  const { t } = useLanguage();
  const [currentPage, _setCurrentPage] = useState<Page>(() => getPageFromPath(window.location.pathname));
  const [showAIResult, setShowAIResult] = useState(false);
  const [aiDiagnosticResult, setAiDiagnosticResult] = useState<any>(null);
  const [isLoadingDiagnostic, setIsLoadingDiagnostic] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [activeTrustInfo, setActiveTrustInfo] = useState<'price' | 'shipping' | 'returns' | null>(null);
  const [currentTrustSlide, setCurrentTrustSlide] = useState(0);
  const [currentProductSlide, setCurrentProductSlide] = useState(0);
  const [appliancePickerOpen, setAppliancePickerOpen] = useState(false);
  const [selectedAppliance, setSelectedAppliance] = useState<string>('');
  const [brandPickerOpen, setBrandPickerOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [viewingBrand, setViewingBrand] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const setCurrentPage = (page: Page, options?: { replace?: boolean }) => {
    _setCurrentPage(page);

    const targetPath = PAGE_TO_PATH[page];
    if (window.location.pathname === targetPath) {
      return;
    }

    if (options?.replace) {
      window.history.replaceState({ page }, '', targetPath);
      return;
    }

    window.history.pushState({ page }, '', targetPath);
  };

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Enrich product with detailed data for ProductDetail page
  const enrichProductDetails = (product: any) => {
    // If product already has all details, return as is
    if (product.compatibility && product.installation && product.reviews) {
      return product;
    }
    
    // Otherwise, merge with mockProductDetail to provide complete data
    return {
      ...mockProductDetail,
      ...product,
      // Keep the specific product's basic info
      id: product.id,
      name: product.name,
      brand: product.brand,
      image: product.image,
      price: product.price,
      inStock: product.inStock !== undefined ? product.inStock : true,
    };
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setTimeout(() => {
      setShowAIResult(true);
    }, 2000);
  };

  const handleAddToCart = (product: any) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // Ensure compatible is true by default if not explicitly set to false
      setCartItems([...cartItems, { ...product, quantity: 1, compatible: product.compatible !== false }]);
    }
    
    toast.success('Ajouté au panier', {
      description: product.name
    });
    
    setCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast.info('Article retiré du panier');
  };

  const handleDiagnosticComplete = async (data: any) => {
    console.log('Diagnostic:', data);
    setIsLoadingDiagnostic(true);
    setCurrentPage('home');
    
    // Show loading toast
    const loadingToast = toast.loading('Analyzing your appliance issue...', {
      description: 'AI is processing the diagnostic information'
    });
    
    try {
      const response = await productsAPI.aiDiagnostic(data.appliance, data.symptoms);
      setAiDiagnosticResult(response.data);
      setShowAIResult(true);
      toast.dismiss(loadingToast);
      toast.success('Diagnostic complete', {
        description: 'AI has identified the issue and recommended parts'
      });
    } catch (error: any) {
      console.error('Diagnostic error:', error);
      toast.dismiss(loadingToast);
      toast.error('Diagnostic failed', {
        description: error.response?.data?.error || 'Failed to process diagnostic. Please try again.'
      });
    } finally {
      setIsLoadingDiagnostic(false);
    }
  };

  // Auto-scroll trust bar on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTrustSlide((prev) => (prev + 1) % 3);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Hide scrollbar on mobile when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  // Hide scrollbar on mobile when trust info dropdown is open
  useEffect(() => {
    if (activeTrustInfo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeTrustInfo]);

  // Listen for navigation events from child components
  useEffect(() => {
    const initialPage = getPageFromPath(window.location.pathname);
    _setCurrentPage(initialPage);

    const targetPath = PAGE_TO_PATH[initialPage];
    if (window.location.pathname !== targetPath) {
      window.history.replaceState({ page: initialPage }, '', targetPath);
    }

    const handlePopState = () => {
      _setCurrentPage(getPageFromPath(window.location.pathname));
    };

    const handleNavigate = (event: any) => {
      setCurrentPage(event.detail);
    };
    
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('navigate', handleNavigate);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('navigate', handleNavigate);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      
      {/* Header */}
      <header className="sticky top-0 bg-white z-50 shadow-sm">
        {/* Top Bar */}
        <div className="hidden md:block" style={{ backgroundColor: '#284361' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-6 flex items-center justify-end gap-4 text-white text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+3206426379" className="hover:text-primary transition-colors">+32 064 26 37 95</a>
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <button 
                  onClick={() => setCurrentPage('order-tracking')}
                  className="hover:opacity-80 transition-opacity text-[14px]"
                >
                  {t.header.orderTracking}
                </button>
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <button 
                onClick={() => setCurrentPage('login')}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <User className="w-4 h-4" />
                <span className="text-sm">{t.header.login}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="border-b border-border" style={{ backgroundColor: '#2F55C8' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">
              {/* Left - Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="sm:hidden text-white hover:bg-white/10"
              >
                <Menu className="w-5 h-5" />
              </Button>

              {/* Logo - Center on mobile, left on desktop */}
              <button
                onClick={() => setCurrentPage('home')}
                className="flex items-center justify-center hover:opacity-80 transition-opacity absolute left-1/2 -translate-x-1/2 sm:static sm:translate-x-0 h-full translate-y-1.5"
              >
                <img 
                  src={logoImage} 
                  alt="Jolimont Electro" 
                  className="h-20 w-auto object-contain brightness-0 invert scale-[1.55]"
                />
              </button>

              {/* Right Actions */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:block">
                  <LanguageSelector />
                </div>
                <Button
                  variant="ghost"
                  className="hidden sm:flex items-center gap-2 text-white hover:bg-white/10"
                  onClick={() => setCurrentPage('customer-service')}
                >
                  <Headphones className="w-5 h-5" />
                  <span className="text-sm">{t.nav.support}</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCartOpen(true)}
                  className="relative bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="sm:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg z-60"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => {
                    setCurrentPage('catalog');
                    setMobileMenuOpen(false);
                  }}
                >
                  <Grid3x3 className="w-4 h-4 mr-2" />
                  {t.nav.catalog}
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-primary"
                  onClick={() => {
                    setCurrentPage('diagnostic');
                    setMobileMenuOpen(false);
                  }}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Diagnostic IA
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => {
                    setCurrentPage('customer-service');
                    setMobileMenuOpen(false);
                  }}
                >
                  <Headphones className="w-4 h-4 mr-2" />
                  {t.nav.support}
                </Button>
                <div className="pt-2 border-t border-border mt-2">
                  <LanguageSelector variant="mobile" />
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                  >
                    <Package className="w-4 h-4 mr-2" />
                    {t.header.orderTracking}
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                  >
                    <User className="w-4 h-4 mr-2" />
                    {t.header.myAccount}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="pb-16">
        {/* Trust Bar */}
        <div className={`sticky top-14 md:top-20 border-b border-border py-3 z-40 shadow-sm ${mobileMenuOpen ? 'hidden sm:block' : ''}`} style={{ backgroundColor: '#F4F6F8' }}>
          {/* Desktop version */}
          <div className="hidden sm:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-evenly text-sm">
              {/* Price Guarantee */}
              <div className="relative">
                <button
                  className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity"
                  onClick={() => setActiveTrustInfo(activeTrustInfo === 'price' ? null : 'price')}
                >
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold" style={{ fontSize: '20px', color: '#2F55C8', lineHeight: '1' }}>€</span>
                  </div>
                  <span className="font-medium text-[13px]">{t.trust.bestPrice}</span>
                </button>
                <AnimatePresence>
                  {activeTrustInfo === 'price' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-lg shadow-lg p-4 z-45 border border-gray-200"
                    >
                      <button
                        onClick={() => setActiveTrustInfo(null)}
                        className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <p className="text-sm text-gray-700 pr-6">
                        Prix compétitifs sur toutes nos pièces de marque
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Shipping */}
              <div className="relative">
                <button
                  className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity"
                  onClick={() => setActiveTrustInfo(activeTrustInfo === 'shipping' ? null : 'shipping')}
                >
                  <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 37.6014 29.8014">
                    <g>
                      <path d={svgPaths.p1411f780} stroke="#305CDE" strokeLinecap="round" strokeWidth="1.2" />
                      <path clipRule="evenodd" d={svgPaths.p375c6980} fill="#305CDE" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.p224b4900} fill="#305CDE" fillRule="evenodd" />
                      <path d={svgPaths.p1401ef00} fill="#305CDE" />
                      <path d={svgPaths.pcc2600} fill="#305CDE" />
                      <path d={svgPaths.p39709200} fill="#305CDE" />
                      <path d={svgPaths.p23acbe00} fill="#305CDE" />
                      <path d={svgPaths.p2c277c70} fill="#305CDE" />
                      <path d={svgPaths.p89c6b70} fill="#305CDE" />
                      <path d={svgPaths.p8c4e600} fill="#305CDE" />
                      <path d={svgPaths.p12feb300} fill="#305CDE" />
                      <path d={svgPaths.pc4d3e80} stroke="#305CDE" strokeLinecap="round" strokeLinejoin="round" />
                      <path clipRule="evenodd" d={svgPaths.p14c27600} fill="#305CDE" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.pcc3400} fill="#305CDE" fillRule="evenodd" />
                    </g>
                  </svg>
                  <span className="font-medium text-[13px]">{t.trust.shipping24h}</span>
                </button>
                <AnimatePresence>
                  {activeTrustInfo === 'shipping' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-lg shadow-lg p-4 z-45 border border-gray-200"
                    >
                      <button
                        onClick={() => setActiveTrustInfo(null)}
                        className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <p className="text-sm text-gray-700 pr-6">
                        Expédition le jour même pour toute commande passée avant 17h
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Returns */}
              <div className="relative">
                <button
                  className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity"
                  onClick={() => setActiveTrustInfo(activeTrustInfo === 'returns' ? null : 'returns')}
                >
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#305CDE' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium text-[13px]">{t.trust.freeReturns}</span>
                </button>
                <AnimatePresence>
                  {activeTrustInfo === 'returns' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-lg shadow-lg p-4 z-45 border border-gray-200"
                    >
                      <button
                        onClick={() => setActiveTrustInfo(null)}
                        className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <p className="text-sm text-gray-700 pr-6">
                        {t.trust.freeReturnsCondition}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Mobile version - Slide carousel with pauses */}
          <div className="sm:hidden relative flex justify-center items-center min-h-[32px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTrustSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 text-sm"
              >
                {currentTrustSlide === 0 && (
                  <>
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold" style={{ fontSize: '20px', color: '#305CDE', lineHeight: '1' }}>€</span>
                    </div>
                    <span className="font-medium whitespace-nowrap">{t.trust.bestPrice}</span>
                  </>
                )}
                {currentTrustSlide === 1 && (
                  <>
                    <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 37.6014 29.8014">
                      <g>
                        <path d={svgPaths.p1411f780} stroke="#305CDE" strokeLinecap="round" strokeWidth="1.2" />
                        <path clipRule="evenodd" d={svgPaths.p375c6980} fill="#305CDE" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPaths.p224b4900} fill="#305CDE" fillRule="evenodd" />
                        <path d={svgPaths.p1401ef00} fill="#305CDE" />
                        <path d={svgPaths.pcc2600} fill="#305CDE" />
                        <path d={svgPaths.p39709200} fill="#305CDE" />
                        <path d={svgPaths.p23acbe00} fill="#305CDE" />
                        <path d={svgPaths.p2c277c70} fill="#305CDE" />
                        <path d={svgPaths.p89c6b70} fill="#305CDE" />
                        <path d={svgPaths.p8c4e600} fill="#305CDE" />
                        <path d={svgPaths.p12feb300} fill="#305CDE" />
                        <path d={svgPaths.pc4d3e80} stroke="#305CDE" strokeLinecap="round" strokeLinejoin="round" />
                        <path clipRule="evenodd" d={svgPaths.p14c27600} fill="#305CDE" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPaths.pcc3400} fill="#305CDE" fillRule="evenodd" />
                      </g>
                    </svg>
                    <span className="font-medium whitespace-nowrap">{t.trust.shipping24h}</span>
                  </>
                )}
                {currentTrustSlide === 2 && (
                  <>
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#305CDE' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium whitespace-nowrap">{t.trust.freeReturns}</span>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {currentPage === 'home' && (
          <>
            {/* Platform Banner Section */}
            <section className="relative min-h-[600px] sm:min-h-[550px] overflow-hidden flex items-end justify-center py-12 sm:py-16 pb-16 sm:pb-20 z-1" style={{ backgroundColor: '#e5e7eb' }}>
              {/* Background image - Mobile */}
              <div 
                className="block sm:hidden absolute inset-0 bg-cover bg-center z-0"
                style={{ 
                  backgroundImage: `url('${heroBgImageMobile}')`
                }}
              />
              
              {/* Background image - Desktop */}
              <div className="hidden sm:block absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={heroBgImage}
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ 
                    objectPosition: '50% 20%',
                    imageRendering: '-webkit-optimize-contrast',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)'
                  }}
                />
              </div>
              
              {/* Content container */}
              <div className="relative w-full max-w-6xl mx-4 sm:mx-8 lg:mx-auto px-6 sm:px-10 lg:px-12 py-8 sm:py-10 rounded-lg shadow-sm border-2 border-white/20" style={{ backgroundColor: 'rgb(32, 41, 55)' }}>
                <div className="max-w-full">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-white text-left">
                    {t.hero.title}
                  </h2>
                  <p className="text-sm sm:text-base text-white/80 mb-8 text-left">
                    {t.hero.subtitle}
                  </p>
                  
                  {/* Search form */}
                  <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center mb-4">
                    <button
                      onClick={() => setAppliancePickerOpen(true)}
                      className="flex-1 px-4 py-3 rounded-lg bg-gray-50 text-gray-800 text-sm border border-gray-200 hover:border-primary transition-all text-left flex items-center justify-between"
                    >
                      <span>{selectedAppliance || 'Sélectionner votre appareil'}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setBrandPickerOpen(true)}
                      className="flex-1 px-4 py-3 rounded-lg bg-gray-50 text-gray-800 text-sm border border-gray-200 hover:border-primary transition-all text-left flex items-center justify-between"
                    >
                      <span>{selectedBrand || 'Sélectionner votre marque'}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <select className="flex-1 px-4 py-3 rounded-lg bg-gray-50 text-gray-800 text-sm border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all">
                      <option>Sélectionner votre référence</option>
                    </select>
                    <Button className="px-8 py-3 text-sm font-medium whitespace-nowrap" style={{ backgroundColor: '#305CDE' }}>
                      {t.hero.searchButton}
                    </Button>
                  </div>

                  {/* Diagnostic IA and QR Scanner Buttons */}
                  <div className="flex items-center justify-center gap-2 pt-4 border-t border-white/10">
                    <span className="text-white/70 text-sm">Vous ne trouvez pas la référence ?</span>
                    <Button
                      variant="outline"
                      className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/40"
                      onClick={() => setCurrentPage('diagnostic')}
                    >
                      <Sparkles className="w-4 h-4" />
                      Diagnostic IA
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Sustainability and Help Section */}
            <ScrollReveal>
              <SustainabilityHelpSection />
            </ScrollReveal>

            {/* Shop Appliance Parts */}
            <ScrollReveal>
              <ShopApplianceParts 
                onCategoryClick={(categoryId) => {
                  setSelectedCategory(categoryId);
                  setCurrentPage('category-parts');
                }}
              />
            </ScrollReveal>

            {/* OR Divider */}
            <ScrollReveal>
              <div className="py-8 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center justify-center">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="px-6 text-2xl font-bold text-gray-400">OU</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Find by Brand */}
            <ScrollReveal>
              <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-2">{t.findByBrand.title}</h2>
                    <p className="text-muted-foreground">
                      {t.findByBrand.subtitle}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                    {[
                      { name: 'Bosch', logo: boschLogo },
                      { name: 'Siemens', logo: siemensLogo },
                      { name: 'Samsung', logo: samsungLogo },
                      { name: 'LG', logo: lgLogo },
                      { name: 'Whirlpool', logo: whirlpoolLogo },
                      { name: 'Miele', logo: mieleLogo },
                      { name: 'Beko', logo: bekoLogo },
                      { name: 'Thomson', logo: thomsonLogo },
                      { name: 'Hotpoint', logo: hotpointLogo },
                      { name: 'Electrolux', logo: electroluxLogo },
                      { name: 'Zanussi', logo: zanussiLogo },
                      { name: 'AEG', logo: aegLogo }
                    ].map((brand) => (
                      <button
                        key={brand.name}
                        onClick={() => {
                          setViewingBrand(brand.name);
                          setCurrentPage('brand-products');
                        }}
                        className="aspect-square rounded-lg border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 flex items-center justify-center bg-white group p-6"
                      >
                        <img 
                          src={brand.logo} 
                          alt={brand.name}
                          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                        />
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-center mt-8">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => setBrandPickerOpen(true)}
                      className="group"
                    >
                      Voir plus de marques
                      <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                    </Button>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Featured Products */}
            <ScrollReveal>
              <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">{t.popularProducts.title}</h2>
                      <p className="text-muted-foreground">
                        {t.popularProducts.subtitle}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage('catalog')}
                    >
                      {t.popularProducts.viewAll}
                    </Button>
                  </div>
                  <div className="mb-12">
                    <Slider
                      dots={false}
                      infinite={true}
                      speed={500}
                      slidesToShow={3}
                      slidesToScroll={1}
                      autoplay={true}
                      autoplaySpeed={4000}
                      swipeToSlide={true}
                      touchThreshold={10}
                      beforeChange={(oldIndex, newIndex) => setCurrentProductSlide(newIndex)}
                      responsive={[
                        {
                          breakpoint: 1024,
                          settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                          }
                        },
                        {
                          breakpoint: 640,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: false,
                            arrows: false,
                            swipeToSlide: true,
                            touchThreshold: 10,
                            variableWidth: false,
                          }
                        }
                      ]}
                      className="product-slider"
                    >
                      {mockProducts.map((product) => (
                        <div key={product.id} className="px-0 sm:px-3">
                          <ProductCard
                            {...product}
                            onClick={() => {
                              setSelectedProduct(product);
                              setCurrentPage('product-detail');
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            onAddToCart={() => handleAddToCart(product)}
                          />
                        </div>
                      ))}
                    </Slider>
                    {/* Progress Bar */}
                    <div className="flex justify-center gap-1 mt-8">
                      {mockProducts.map((_, index) => (
                        <div
                          key={index}
                          className="h-1 rounded-full transition-all duration-300"
                          style={{
                            width: currentProductSlide === index ? '32px' : '12px',
                            backgroundColor: currentProductSlide === index ? '#305CDE' : '#e5e7eb'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Delivery Animation Section */}
            <ScrollReveal>
              <DeliveryAnimation />
            </ScrollReveal>

            {/* Home Repair Service Section */}
            <ScrollReveal>
              <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Image Section */}
                      <div className="relative h-64 md:h-auto overflow-hidden">
                        <ImageWithFallback 
                          src={technicianImage}
                          alt="Technicien en intervention à domicile"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div className="mb-6">
                          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            <Wrench className="w-4 h-4" />
                            <span>Service professionnel</span>
                          </div>
                          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Besoin d'un dépannage à domicile ?
                          </h2>
                          <p className="text-lg text-gray-600 leading-relaxed">
                            Nos techniciens qualifiés interviennent rapidement dans votre région, sur rendez-vous.
                          </p>
                        </div>

                        {/* Avantages */}
                        <div className="space-y-3 mb-8">
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">Intervention rapide</p>
                              <p className="text-sm text-gray-600">Prise de rendez-vous sous 48h</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">Techniciens certifiés</p>
                              <p className="text-sm text-gray-600">Experts toutes marques d'électroménager</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">{t.testimonialsSection.repairWarranty}</p>
                              <p className="text-sm text-gray-600">{t.testimonialsSection.repairWarrantyDesc}</p>
                            </div>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <Button 
                          size="lg"
                          className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                          <span>Demander un dépannage</span>
                          <svg 
                            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </Button>

                        <p className="text-sm text-gray-500 mt-4">
                          ☎️ Besoin d'un renseignement ? Appelez-nous au <span className="font-semibold text-primary">+32 064 26 37 95</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* How It Works */}
            <ScrollReveal>
              <section className="py-16 bg-secondary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-2">{t.blogSection.title}</h2>
                    <p className="text-muted-foreground">
                      {t.blogSection.subtitle}
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Article 1 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={washingMachineRepairImage}
                          alt="Identifier une panne sur un lave-linge"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-bold text-lg mb-3 text-gray-900">
                          {t.blogSection.article1Title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 flex-grow">
                          {t.blogSection.article1Desc}
                        </p>
                        <Button 
                          variant="outline" 
                          className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                          onClick={() => {
                            setCurrentPage('blog-article-1');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                        >
                          {t.blogSection.readArticle}
                        </Button>
                      </div>
                    </div>

                    {/* Article 2 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={repairOrReplaceImage}
                          alt="Réparer ou remplacer"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-bold text-lg mb-3 text-gray-900">
                          {t.blogSection.article2Title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 flex-grow">
                          {t.blogSection.article2Desc}
                        </p>
                        <Button 
                          variant="outline" 
                          className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                          onClick={() => {
                            setCurrentPage('blog-article-2');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                        >
                          {t.blogSection.readArticle}
                        </Button>
                      </div>
                    </div>

                    {/* Article 3 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={commonPartsImage}
                          alt="Pièces détachées courantes"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-bold text-lg mb-3 text-gray-900">
                          {t.blogSection.article3Title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 flex-grow">
                          {t.blogSection.article3Desc}
                        </p>
                        <Button 
                          variant="outline" 
                          className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                          onClick={() => {
                            setCurrentPage('blog-article-3');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                        >
                          {t.blogSection.readArticle}
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Deuxième ligne - 2 articles centrés */}
                  <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Article 4 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1764705637770-9fc400e090cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsaWFuY2UlMjBtYWludGVuYW5jZSUyMGhvbWV8ZW58MXx8fHwxNzcwNjYyODYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="Entretien électroménager"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-bold text-lg mb-3 text-gray-900">
                          {t.blogSection.article4Title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 flex-grow">
                          {t.blogSection.article4Desc}
                        </p>
                        <Button 
                          variant="outline" 
                          className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                          onClick={() => {
                            setCurrentPage('blog-article-4');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                        >
                          {t.blogSection.readArticle}
                        </Button>
                      </div>
                    </div>

                    {/* Article 5 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={originalVsCompatibleImage}
                          alt="Comparaison pièces d'origine vs compatibles"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-bold text-lg mb-3 text-gray-900">
                          {t.blogSection.article5Title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 flex-grow">
                          {t.blogSection.article5Desc}
                        </p>
                        <Button 
                          variant="outline" 
                          className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                          onClick={() => {
                            setCurrentPage('blog-article-5');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                        >
                          {t.blogSection.readArticle}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
            </ScrollReveal>
          </>
        )}

        {currentPage === 'diagnostic' && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                  {t.diagnosis.title}
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {t.diagnosis.step3Subtitle}
                </p>
              </div>
              <DiagnosticStepper onComplete={handleDiagnosticComplete} />
            </div>
          </section>
        )}

        {currentPage === 'product-detail' && selectedProduct && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ProductDetail
                product={enrichProductDetails(selectedProduct)}
                onAddToCart={() => handleAddToCart(selectedProduct)}
                onViewSchema={() => toast.info('Fonctionnalité à venir : Schéma interactif')}
              />
            </div>
          </section>
        )}

        {currentPage === 'catalog' && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold mb-8">Catalogue</h1>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {mockProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    onClick={() => {
                      setSelectedProduct(product);
                      setCurrentPage('product-detail');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    onAddToCart={() => handleAddToCart(product)}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {currentPage === 'login' && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Login onBack={() => setCurrentPage('home')} />
            </div>
          </section>
        )}

        {currentPage === 'order-tracking' && (
          <OrderTracking onBack={() => setCurrentPage('home')} />
        )}

        {currentPage === 'customer-service' && (
          <CustomerService onOpenChat={() => setChatbotOpen(true)} />
        )}

        {currentPage === 'contact' && (
          <ContactForm onBack={() => setCurrentPage('home')} />
        )}

        {currentPage === 'brand-products' && (
          <BrandProductsPage
            brand={viewingBrand}
            onBack={() => setCurrentPage('home')}
            onProductClick={(product) => {
              setSelectedProduct(product);
              setCurrentPage('product-detail');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentPage === 'checkout' && (
          <CheckoutPage
            items={cartItems}
            onBack={() => setCartOpen(true)}
            onComplete={() => {
              setCartItems([]);
              setCurrentPage('home');
              toast.success('🎉 Commande confirmée ! Vous recevrez un email de confirmation.');
            }}
          />
        )}

        {currentPage === 'category-parts' && (
          <CategoryPartsPage
            category={selectedCategory}
            onBack={() => setCurrentPage('home')}
            onNavigateToDiagnostic={() => setCurrentPage('diagnostic')}
            onAddToCart={handleAddToCart}
            onProductClick={(product) => {
              setSelectedProduct(product);
              setCurrentPage('product-detail');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentPage === 'blog-article-1' && (
          <BlogArticle1
            onBack={() => setCurrentPage('home')}
            onGoToShop={() => setCurrentPage('catalog')}
          />
        )}

        {currentPage === 'blog-article-2' && (
          <BlogArticle2
            onBack={() => setCurrentPage('home')}
            onGoToShop={() => setCurrentPage('catalog')}
          />
        )}

        {currentPage === 'blog-article-3' && (
          <BlogArticle3
            onBack={() => setCurrentPage('home')}
            onGoToShop={() => setCurrentPage('catalog')}
          />
        )}

        {currentPage === 'blog-article-4' && (
          <BlogArticle4
            onBack={() => setCurrentPage('home')}
            onGoToShop={() => setCurrentPage('catalog')}
          />
        )}

        {currentPage === 'blog-article-5' && (
          <BlogArticle5
            onBack={() => setCurrentPage('home')}
            onGoToShop={() => setCurrentPage('catalog')}
          />
        )}

        {currentPage === 'faq' && <FAQPage />}
        {currentPage === 'warranty' && <WarrantyPage />}
        {currentPage === 'returns' && <ReturnsPage />}
        {currentPage === 'terms' && <TermsPage />}
      </main>

      {/* Footer */}
      <footer className="text-white py-12" style={{ backgroundColor: '#284361' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src={logoImage} 
                  alt="Jolimont Electro" 
                  className="h-24 w-auto object-contain brightness-0 invert -ml-3"
                />
              </div>
              <p className="text-sm text-white/70">
                Expert en pièces détachées électroménager depuis 1983
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white">Catalogue</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white">Diagnostic IA</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white">Dépannage</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white">À propos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><button onClick={() => setCurrentPage('faq')} className="hover:text-white">FAQ</button></li>
                <li><button onClick={() => setCurrentPage('warranty')} className="hover:text-white">Garantie</button></li>
                <li><button onClick={() => setCurrentPage('returns')} className="hover:text-white">Retours</button></li>
                <li><button onClick={() => setCurrentPage('terms')} className="hover:text-white">CGV</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+32 064 26 37 95</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <button 
                    onClick={() => {
                      setCurrentPage('contact');
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setTimeout(() => {
                          const contactForm = document.getElementById('contact-form');
                          if (contactForm) {
                            contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }, 300);
                      }, 50);
                    }}
                    className="hover:text-white transition-colors text-[14px]"
                  >
                    {t.footerLinks.contactForm}
                  </button>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Binche, Belgique</span>
                </li>
              </ul>
              <div className="flex gap-3 mt-4">
                <a href="#" onClick={(e) => e.preventDefault()} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8">
            {/* Badges Section */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
              {/* Trust Badges */}
              <TrustedShopsLogo className="h-8 w-auto opacity-90" />
              
              {/* Payment Methods */}
              <div className="flex items-center gap-2 justify-between w-full flex-wrap sm:justify-center sm:gap-2">
                <div className="w-16 h-10 bg-white/10 rounded flex items-center justify-center p-2">
                  <div className="w-full h-full flex items-center justify-center">
                    <Layer1 />
                  </div>
                </div>
                <div className="w-16 h-10 bg-white/10 rounded flex items-center justify-center p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-full h-full text-white" viewBox="0 0 32 32">
                    <path d="M5.849 11.047c-0.376 0.448-0.975 0.803-1.573 0.751-0.079-0.604 0.219-1.251 0.563-1.652 0.375-0.457 1.031-0.785 1.563-0.812 0.063 0.631-0.183 1.251-0.552 1.713zM6.396 11.917c-0.869-0.053-1.615 0.499-2.027 0.499-0.421 0-1.052-0.473-1.739-0.457-0.891 0.011-1.724 0.52-2.177 1.339-0.943 1.629-0.245 4.041 0.661 5.369 0.443 0.656 0.973 1.375 1.672 1.355 0.661-0.027 0.927-0.437 1.724-0.437 0.807 0 1.036 0.437 1.74 0.421 0.723-0.011 1.181-0.656 1.624-1.312 0.505-0.745 0.713-1.475 0.724-1.511-0.011-0.016-1.401-0.552-1.411-2.167-0.011-1.355 1.093-2 1.14-2.037-0.62-0.937-1.599-1.036-1.932-1.061zM11.412 10.083v9.855h1.515v-3.369h2.095c1.911 0 3.255-1.328 3.255-3.245 0-1.921-1.317-3.24-3.203-3.24zM12.927 11.375h1.745c1.312 0 2.063 0.708 2.063 1.953s-0.751 1.959-2.073 1.959h-1.735zM21.036 20.011c0.953 0 1.833-0.484 2.235-1.256h0.032v1.183h1.4v-4.907c0-1.416-1.124-2.337-2.859-2.337-1.604 0-2.792 0.932-2.833 2.208h1.359c0.115-0.609 0.667-1.005 1.433-1.005 0.927 0 1.443 0.437 1.443 1.24v0.541l-1.885 0.115c-1.761 0.109-2.709 0.833-2.709 2.099 0 1.276 0.98 2.12 2.385 2.12zM21.448 18.844c-0.808 0-1.323-0.391-1.323-0.989 0-0.62 0.495-0.985 1.437-1.043l1.683-0.104v0.557c0 0.923-0.776 1.579-1.803 1.579zM26.573 22.62c1.473 0 2.167-0.573 2.771-2.297l2.656-7.531h-1.536l-1.781 5.817h-0.032l-1.781-5.817h-1.583l2.563 7.172-0.136 0.437c-0.235 0.735-0.609 1.020-1.276 1.020-0.12 0-0.349-0.015-0.443-0.025v1.183c0.088 0.025 0.464 0.036 0.573 0.036z"/>
                  </svg>
                </div>
                <div className="w-16 h-10 bg-white/10 rounded flex items-center justify-center p-2">
                  <svg viewBox="0 0 100 32" className="w-full h-full text-white" fill="currentColor">
                    <text x="50" y="20" fontSize="16" fontWeight="bold" textAnchor="middle">Klarna</text>
                  </svg>
                </div>
                <div className="w-16 h-10 bg-white/10 rounded flex items-center justify-center p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1.999 -0.626 296.499 75.333" className="w-full h-full">
                    <g transform="matrix(2.07675 0 0 -2.07675 -11.153 92.77)">
                      <defs><path id="paypal-a" d="M-86.291-26.334h326.05V79.58h-326.05z"/></defs>
                      <clipPath id="paypal-b"><use xlinkHref="#paypal-a" overflow="visible"/></clipPath>
                      <g clipPath="url(#paypal-b)">
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
                <div className="w-16 h-10 bg-white/10 rounded flex items-center justify-center p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 752 400" className="w-full h-full">
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

              </div>
            </div>
            
            <div className="text-center text-sm text-white/70">
              <p>© 2026 Jolimont Electro. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Result Modal */}
      <AnimatePresence>
        {showAIResult && aiDiagnosticResult && (
          <AIResultModal
            query={aiDiagnosticResult.query || "Diagnostic"}
            diagnosis={aiDiagnosticResult.diagnosis || "Analyzing your appliance issue..."}
            causes={aiDiagnosticResult.causes || []}
            recommendedProduct={aiDiagnosticResult.recommendedProduct}
            alternatives={aiDiagnosticResult.alternatives || []}
            onClose={() => {
              setShowAIResult(false);
              setAiDiagnosticResult(null);
            }}
            onViewProduct={(product) => {
              setShowAIResult(false);
              setAiDiagnosticResult(null);
              setSelectedProduct(product);
              setCurrentPage('product-detail');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onAdjustDiagnosis={() => {
              setShowAIResult(false);
              setAiDiagnosticResult(null);
              setCurrentPage('diagnostic');
            }}
          />
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          setCartOpen(false);
          setCurrentPage('checkout');
        }}
      />

      {/* Appliance Picker Modal */}
      <AnimatePresence>
        {appliancePickerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-30 flex items-start justify-center p-4 pt-[140px] overflow-y-auto"
            onClick={() => setAppliancePickerOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[calc(100vh-160px)] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border" style={{ backgroundColor: '#F4F6F8' }}>
                <h2 className="text-2xl font-bold">Sélectionnez votre appareil</h2>
                <button
                  onClick={() => setAppliancePickerOpen(false)}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="p-6 border-b border-border">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Rechercher un appareil..."
                    className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  />
                </div>
              </div>

              {/* Appliance Grid */}
              <div className="p-6 overflow-y-auto max-h-[calc(100vh-360px)]">
                <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">Appareils populaires</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { name: 'Aspirateur', image: 'https://images.unsplash.com/photo-1722710070534-e31f0290d8de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGljayUyMHZhY3V1bSUyMGNsZWFuZXIlMjB3aGl0ZSUyMGJhY2tncm91bmQlMjBwcm9kdWN0fGVufDF8fHx8MTc3MDU1NTUyMHww&ixlib=rb-4.1.0&q=80&w=1080' },
                    { name: 'Cafetière', image: 'https://images.unsplash.com/photo-1608354580875-30bd4168b351?w=400' },
                    { name: 'Climatiseur', image: 'https://images.unsplash.com/photo-1757774636367-d03962a019f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXIlMjBjb25kaXRpb25lciUyMHVuaXQlMjB3aGl0ZSUyMHByb2R1Y3R8ZW58MXx8fHwxNzcwNTU1ODAzfDA&ixlib=rb-4.1.0&q=80&w=1080' },
                    { name: 'Cuisinière', image: 'https://images.unsplash.com/photo-1578845425669-b6562f83b11e?w=400' },
                    { name: 'Four', image: 'https://images.unsplash.com/photo-1754568401041-11ad5769ed7e?w=400' },
                    { name: 'Hotte aspirante', image: 'https://images.unsplash.com/photo-1714358013380-b75b16127007?w=400' },
                    { name: 'Lave-linge', image: 'https://images.unsplash.com/photo-1761079976271-3a78f547ca67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXNoaW5nJTIwbWFjaGluZSUyMGFwcGxpYW5jZSUyMG1vZGVybnxlbnwxfHx8fDE3NzA1NTU4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
                    { name: 'Lave-vaisselle', image: 'https://images.unsplash.com/photo-1758631130778-42d518bf13aa?w=400' },
                    { name: 'Micro-ondes', image: 'https://images.unsplash.com/photo-1728488445204-59c95b19ed17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3dhdmUlMjBvdmVuJTIwa2l0Y2hlbiUyMGFwcGxpYW5jZXxlbnwxfHx8fDE3NzA1NTU4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
                    { name: 'Ordinateur', image: 'https://images.unsplash.com/photo-1762117666457-919e7345bd90?w=400' },
                    { name: 'Rasoir', image: 'https://images.unsplash.com/photo-1765502113641-4c8aa8ae4c0f?w=400' },
                    { name: 'Réfrigérateur', image: 'https://images.unsplash.com/photo-1758488438758-5e2eedf769ce?w=400' },
                    { name: 'Robot ménager', image: 'https://images.unsplash.com/photo-1722407348188-c020fbe0c5f6?w=400' },
                    { name: 'Sèche-linge', image: 'https://images.unsplash.com/photo-1761403460807-a89b7de9b4d3?w=400' },
                    { name: 'Téléphone', image: 'https://images.unsplash.com/photo-1741061963569-9d0ef54d10d2?w=400' },
                    { name: 'Télévision', image: 'https://images.unsplash.com/photo-1556889487-b6f8d3fc728b?w=400' },
                  ].map((appliance) => (
                    <button
                      key={appliance.name}
                      onClick={() => {
                        setSelectedAppliance(appliance.name);
                        toast.success(`${appliance.name} sélectionné`);
                        setAppliancePickerOpen(false);
                      }}
                      className="group relative overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-all bg-white shadow-sm hover:shadow-md"
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={appliance.image}
                          alt={appliance.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4 border-t border-border bg-white">
                        <p className="font-medium text-center">{appliance.name}</p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Tous les appareils - Alphabetical list */}
                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wide">Tous les appareils</h3>
                  
                  <div className="space-y-6">
                    {/* A */}
                    <div className="flex gap-4">
                      <div className="w-8 flex-shrink-0">
                        <span className="font-bold text-lg text-primary">A</span>
                      </div>
                      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                        {['Amplificateur', 'Antenne', 'Appareil de mesure', 'Appareil photo', 'Aspirateur', 'Autoradio', 'Autre'].map((item) => (
                          <button
                            key={item}
                            onClick={() => {
                              setSelectedAppliance(item);
                              toast.success(`${item} sélectionné`);
                              setAppliancePickerOpen(false);
                            }}
                            className="text-left text-sm hover:text-primary hover:underline transition-colors"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* B */}
                    <div className="flex gap-4">
                      <div className="w-8 flex-shrink-0">
                        <span className="font-bold text-lg text-primary">B</span>
                      </div>
                      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                        {['Balance', 'Barre de son', 'Blender', 'Bouilloire', 'Brosse à dents'].map((item) => (
                          <button
                            key={item}
                            onClick={() => {
                              setSelectedAppliance(item);
                              toast.success(`${item} sélectionné`);
                              setAppliancePickerOpen(false);
                            }}
                            className="text-left text-sm hover:text-primary hover:underline transition-colors"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* C */}
                    <div className="flex gap-4">
                      <div className="w-8 flex-shrink-0">
                        <span className="font-bold text-lg text-primary">C</span>
                      </div>
                      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                        {['Cafetière', 'Caméra vidéo', 'Casque audio', 'Chauffage', 'Climatiseur', 'Congélateur', 'Console', 'Cuisinière', 'Cuiseur à œufs', 'Couverture chauffante'].map((item) => (
                          <button
                            key={item}
                            onClick={() => {
                              setSelectedAppliance(item);
                              toast.success(`${item} sélectionné`);
                              setAppliancePickerOpen(false);
                            }}
                            className="text-left text-sm hover:text-primary hover:underline transition-colors"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* D */}
                    <div className="flex gap-4">
                      <div className="w-8 flex-shrink-0">
                        <span className="font-bold text-lg text-primary">D</span>
                      </div>
                      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                        {['Dictaphone'].map((item) => (
                          <button
                            key={item}
                            onClick={() => {
                              setSelectedAppliance(item);
                              toast.success(`${item} sélectionné`);
                              setAppliancePickerOpen(false);
                            }}
                            className="text-left text-sm hover:text-primary hover:underline transition-colors"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* E */}
                    <div className="flex gap-4">
                      <div className="w-8 flex-shrink-0">
                        <span className="font-bold text-lg text-primary">E</span>
                      </div>
                      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                        {['Épilateur', 'Extracteur de jus'].map((item) => (
                          <button
                            key={item}
                            onClick={() => {
                              setSelectedAppliance(item);
                              toast.success(`${item} sélectionné`);
                              setAppliancePickerOpen(false);
                            }}
                            className="text-left text-sm hover:text-primary hover:underline transition-colors"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* F */}
                    <div className="flex gap-4">
                      <div className="w-8 flex-shrink-0">
                        <span className="font-bold text-lg text-primary">F</span>
                      </div>
                      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                        {['Fer à boucler', 'Fer à repasser', 'Fer à souder', 'Four', 'Four à micro-ondes', 'Friteuse'].map((item) => (
                          <button
                            key={item}
                            onClick={() => {
                              setSelectedAppliance(item);
                              toast.success(`${item} sélectionné`);
                              setAppliancePickerOpen(false);
                            }}
                            className="text-left text-sm hover:text-primary hover:underline transition-colors"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* G */}
                    <div className="flex gap-4">
                      <div className="w-8 flex-shrink-0">
                        <span className="font-bold text-lg text-primary">G</span>
                      </div>
                      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                        {['Gaufrier', 'Glacière', 'Grill', 'Grille-pain'].map((item) => (
                          <button
                            key={item}
                            onClick={() => {
                              setSelectedAppliance(item);
                              toast.success(`${item} sélectionné`);
                              setAppliancePickerOpen(false);
                            }}
                            className="text-left text-sm hover:text-primary hover:underline transition-colors"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* H */}
                    <div className="flex gap-4">
                      <div className="w-8 flex-shrink-0">
                        <span className="font-bold text-lg text-primary">H</span>
                      </div>
                      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                        {['Hachoir à viande', 'Haut-parleur', 'Hotte aspirante'].map((item) => (
                          <button
                            key={item}
                            onClick={() => {
                              setSelectedAppliance(item);
                              toast.success(`${item} sélectionné`);
                              setAppliancePickerOpen(false);
                            }}
                            className="text-left text-sm hover:text-primary hover:underline transition-colors"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* I */}
                    <div className="flex gap-4">
                      <div className="w-8 flex-shrink-0">
                        <span className="font-bold text-lg text-primary">I</span>
                      </div>
                      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                        {['Imprimante', 'Imprimante (tout en un)', 'Industrie'].map((item) => (
                          <button
                            key={item}
                            onClick={() => {
                              setSelectedAppliance(item);
                              toast.success(`${item} sélectionné`);
                              setAppliancePickerOpen(false);
                            }}
                            className="text-left text-sm hover:text-primary hover:underline transition-colors"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* L */}
                    <div className="flex gap-4">
                      <div className="w-8 flex-shrink-0">
                        <span className="font-bold text-lg text-primary">L</span>
                      </div>
                      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                        {['Lampe', 'Lave-linge', 'Lave-vaisselle', 'Lecteur / enregistreur de cassette', 'Lecteur / enregistreur de CD', 'Lecteur / enregistreur de CD (portable)', 'Lecteur / enregistreur de DVD', 'Lecteur / enregistreur de minidisc', 'Lecteur / enregistreur radio', 'Lecteur / enregistreur vidéo', 'Lecteur DVD (portable)', 'Lecteur MP3 / MP4 (portable)', 'Liseuse'].map((item) => (
                          <button
                            key={item}
                            onClick={() => {
                              setSelectedAppliance(item);
                              toast.success(`${item} sélectionné`);
                              setAppliancePickerOpen(false);
                            }}
                            className="text-left text-sm hover:text-primary hover:underline transition-colors"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* M */}
                    <div className="flex gap-4">
                      <div className="w-8 flex-shrink-0">
                        <span className="font-bold text-lg text-primary">M</span>
                      </div>
                      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                        {['Machine à coudre', 'Machine à écrire', 'Machine à pain', 'Matériel pour DJ', 'Micro-onde', 'Microphone', 'Microscope', 'Mixeur', 'Moniteur'].map((item) => (
                          <button
                            key={item}
                            onClick={() => {
                              setSelectedAppliance(item);
                              toast.success(`${item} sélectionné`);
                              setAppliancePickerOpen(false);
                            }}
                            className="text-left text-sm hover:text-primary hover:underline transition-colors"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* N */}
                    <div className="flex gap-4">
                      <div className="w-8 flex-shrink-0">
                        <span className="font-bold text-lg text-primary">N</span>
                      </div>
                      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                        {['Nettoyeur à vapeur', 'Nettoyeur haute pression'].map((item) => (
                          <button
                            key={item}
                            onClick={() => {
                              setSelectedAppliance(item);
                              toast.success(`${item} sélectionné`);
                              setAppliancePickerOpen(false);
                            }}
                            className="text-left text-sm hover:text-primary hover:underline transition-colors"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* O */}
                    <div className="flex gap-4">
                      <div className="w-8 flex-shrink-0">
                        <span className="font-bold text-lg text-primary">O</span>
                      </div>
                      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                        {['Ordinateur', 'Ordinateur portable'].map((item) => (
                          <button
                            key={item}
                            onClick={() => {
                              setSelectedAppliance(item);
                              toast.success(`${item} sélectionné`);
                              setAppliancePickerOpen(false);
                            }}
                            className="text-left text-sm hover:text-primary hover:underline transition-colors"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* P */}
                    <div className="flex gap-4">
                      <div className="w-8 flex-shrink-0">
                        <span className="font-bold text-lg text-primary">P</span>
                      </div>
                      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                        {['Perceuse', 'Plaque de cuisson', 'Ponceuse', 'Produit pour bébé'].map((item) => (
                          <button
                            key={item}
                            onClick={() => {
                              setSelectedAppliance(item);
                              toast.success(`${item} sélectionné`);
                              setAppliancePickerOpen(false);
                            }}
                            className="text-left text-sm hover:text-primary hover:underline transition-colors"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* R */}
                    <div className="flex gap-4">
                      <div className="w-8 flex-shrink-0">
                        <span className="font-bold text-lg text-primary">R</span>
                      </div>
                      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                        {['Rasoir', 'Récepteur', 'Récepteur GPS', 'Réfrigérateur', 'Réfrigérateur américain', 'Réfrigérateur-congélateur combiné', 'Réveil', 'Robot ménager'].map((item) => (
                          <button
                            key={item}
                            onClick={() => {
                              setSelectedAppliance(item);
                              toast.success(`${item} sélectionné`);
                              setAppliancePickerOpen(false);
                            }}
                            className="text-left text-sm hover:text-primary hover:underline transition-colors"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* S */}
                    <div className="flex gap-4">
                      <div className="w-8 flex-shrink-0">
                        <span className="font-bold text-lg text-primary">S</span>
                      </div>
                      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                        {['Satellite', 'Scanner', 'Scie', 'Sèche-cheveux', 'Sèche-linge', 'Smartphone', 'Solarium', 'Système de navigation', 'Système de surveillance', 'Système home cinéma', 'Subwoofer'].map((item) => (
                          <button
                            key={item}
                            onClick={() => {
                              setSelectedAppliance(item);
                              toast.success(`${item} sélectionné`);
                              setAppliancePickerOpen(false);
                            }}
                            className="text-left text-sm hover:text-primary hover:underline transition-colors"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* T */}
                    <div className="flex gap-4">
                      <div className="w-8 flex-shrink-0">
                        <span className="font-bold text-lg text-primary">T</span>
                      </div>
                      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                        {['Tablette', 'Téléphone fixe', 'Téléphone portable', 'Télévision', 'Tondeuse à barbe', 'Trotinette électrique', 'Tuner', 'Traitement de l\'air', 'Tourne-disques'].map((item) => (
                          <button
                            key={item}
                            onClick={() => {
                              setSelectedAppliance(item);
                              toast.success(`${item} sélectionné`);
                              setAppliancePickerOpen(false);
                            }}
                            className="text-left text-sm hover:text-primary hover:underline transition-colors"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* V */}
                    <div className="flex gap-4">
                      <div className="w-8 flex-shrink-0">
                        <span className="font-bold text-lg text-primary">V</span>
                      </div>
                      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                        {['Vélo électrique', 'Ventilateur', 'Vidéoprojecteur'].map((item) => (
                          <button
                            key={item}
                            onClick={() => {
                              setSelectedAppliance(item);
                              toast.success(`${item} sélectionné`);
                              setAppliancePickerOpen(false);
                            }}
                            className="text-left text-sm hover:text-primary hover:underline transition-colors"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de sélection de marque */}
      <BrandPickerModal
        isOpen={brandPickerOpen}
        onClose={() => setBrandPickerOpen(false)}
        onSelect={setSelectedBrand}
      />

      {/* Chatbot */}
      <Chatbot isOpen={chatbotOpen} onOpenChange={setChatbotOpen} />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </AuthProvider>
  );
}