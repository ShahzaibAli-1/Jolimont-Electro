export type Language = 'fr' | 'en' | 'it' | 'nl' | 'de';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    catalog: string;
    brands: string;
    support: string;
    cart: string;
  };
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    searchButton: string;
    orText: string;
    startDiagnosis: string;
  };
  // Trust Badges
  trust: {
    bestPrice: string;
    shipping24h: string;
    freeReturns: string;
    freeReturnsCondition: string;
  };
  // Popular Products Section
  popularProducts: {
    title: string;
    subtitle: string;
    viewAll: string;
    inStock: string;
    outOfStock: string;
    addToCart: string;
    compatibility: string;
  };
  // Brands Section
  brands: {
    title: string;
    subtitle: string;
  };
  // Testimonials
  testimonials: {
    title: string;
    subtitle: string;
  };
  // Footer
  footer: {
    aboutTitle: string;
    aboutText: string;
    linksTitle: string;
    contact: string;
    legal: string;
    termsOfSale: string;
    privacy: string;
    contactTitle: string;
    phone: string;
    email: string;
    schedule: string;
    copyright: string;
  };
  // Cart
  cart: {
    title: string;
    empty: string;
    subtotal: string;
    shipping: string;
    total: string;
    checkout: string;
    continueShopping: string;
  };
  // Product Detail
  productDetail: {
    inStock: string;
    outOfStock: string;
    addToCart: string;
    description: string;
    technicalSpecs: string;
    compatibility: string;
    aiRecommendation: string;
    customerReviews: string;
    noReviews: string;
  };
  // Diagnosis
  diagnosis: {
    title: string;
    step1Title: string;
    step1Subtitle: string;
    step2Title: string;
    step2Subtitle: string;
    step3Title: string;
    step3Subtitle: string;
    next: string;
    previous: string;
    analyze: string;
    selectAppliance: string;
    selectBrand: string;
    searchBrand: string;
  };
  // Common
  common: {
    close: string;
    search: string;
    loading: string;
    error: string;
    success: string;
  };
  // Appliance Breakdown Section
  applianceBreakdown: {
    title: string;
    subtitle: string;
  };
  // Barcode Scanner
  barcodeScanner: {
    buttonText: string;
    scanningText: string;
  };
  // Find by Brand Section
  findByBrand: {
    title: string;
    subtitle: string;
  };
  // Product Card
  productCard: {
    aiRecommended: string;
    compatible: string;
    inStock: string;
    fastDelivery: string;
    taxIncluded: string;
  };
  // Cart Drawer
  cartDrawer: {
    title: string;
    emptyTitle: string;
    emptyDescription: string;
    items: string;
    remove: string;
    subtotal: string;
    shipping: string;
    freeShippingFrom: string;
    total: string;
    checkout: string;
    compatibilityCheck: string;
    allCompatible: string;
    incompatibleWarning: string;
  };
  // Checkout
  checkout: {
    steps: {
      shipping: string;
      payment: string;
      review: string;
    };
    free: string;
  };
  // Customer Service
  customerService: {
    findReference: string;
    findReferenceDesc: string;
  };
  // Contact Form
  contactForm: {
    subjects: {
      order: string;
      part: string;
      diagnostic: string;
      technical: string;
      warranty: string;
      other: string;
    };
  };
  // Diagnostic Stepper
  diagnosticStepper: {
    steps: string[];
    selectAppliance: string;
    selectSymptom: string;
  };
  // Order Tracking
  orderTracking: {
    expectedDelivery: string;
  };
  // Header
  header: {
    orderTracking: string;
    login: string;
    myAccount: string;
    logout: string;
  };
  // Footer
  footerLinks: {
    blog: string;
    blogSubtitle: string;
    faq: string;
    warranty: string;
    returns: string;
    contactForm: string;
    location: string;
  };
  // Testimonials Carousel
  testimonialsSection: {
    repairWarranty: string;
    repairWarrantyDesc: string;
  };
  // Blog Section
  blogSection: {
    title: string;
    subtitle: string;
    article1Title: string;
    article1Desc: string;
    article2Title: string;
    article2Desc: string;
    article3Title: string;
    article3Desc: string;
    article4Title: string;
    article4Desc: string;
    article5Title: string;
    article5Desc: string;
    readArticle: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      home: 'Accueil',
      catalog: 'Catalogue',
      brands: 'Marques',
      support: 'Support',
      cart: 'Panier',
    },
    hero: {
      title: 'Réparer n\'a jamais été aussi simple',
      subtitle: 'Trouvez rapidement la pièce détachée compatible, au bon modèle.',
      searchPlaceholder: 'Ex: pompe lave-linge Bosch...',
      searchButton: 'Rechercher',
      orText: 'ou',
      startDiagnosis: 'Démarrer un diagnostic guidé',
    },
    trust: {
      bestPrice: 'Meilleur prix garanti',
      shipping24h: 'Expédition en 24h',
      freeReturns: 'Retours gratuits sous 14js*',
      freeReturnsCondition: 'Condition: produit retourné neuf, non utilisé et dans son emballage d\'origine',
    },
    popularProducts: {
      title: 'Pièces populaires',
      subtitle: 'Les solutions les plus recherchées',
      viewAll: 'Voir tout',
      inStock: 'En stock',
      outOfStock: 'Rupture',
      addToCart: 'Ajouter au panier',
      compatibility: 'Compatible avec',
    },
    brands: {
      title: 'Les marques que nous supportons',
      subtitle: 'Plus de 150 marques d\'électroménager disponibles',
    },
    testimonials: {
      title: 'Ils ont réparé avec Jolimont',
      subtitle: 'Plus de 15 000 appareils réparés en 2025',
    },
    footer: {
      aboutTitle: 'À propos',
      aboutText: 'Jolimont Electro est votre spécialiste en pièces détachées électroménager avec diagnostic IA intégré.',
      linksTitle: 'Liens rapides',
      contact: 'Contact',
      legal: 'Mentions légales',
      termsOfSale: 'CGV',
      privacy: 'Confidentialité',
      contactTitle: 'Contact',
      phone: 'Tél',
      email: 'Email',
      schedule: 'Lun-Ven: 9h-18h',
      copyright: '© 2026 Jolimont Electro. Tous droits réservés.',
    },
    cart: {
      title: 'Mon panier',
      empty: 'Votre panier est vide',
      subtotal: 'Sous-total',
      shipping: 'Livraison',
      total: 'Total',
      checkout: 'Passer commande',
      continueShopping: 'Continuer mes achats',
    },
    productDetail: {
      inStock: 'En stock',
      outOfStock: 'Rupture de stock',
      addToCart: 'Ajouter au panier',
      description: 'Description',
      technicalSpecs: 'Caractéristiques techniques',
      compatibility: 'Compatibilité',
      aiRecommendation: 'Recommandation IA',
      customerReviews: 'Avis clients',
      noReviews: 'Aucun avis pour le moment',
    },
    diagnosis: {
      title: 'Diagnostic guidé',
      step1Title: 'Votre appareil',
      step1Subtitle: 'Sélectionnez le type d\'appareil',
      step2Title: 'Marque',
      step2Subtitle: 'Choisissez la marque de votre appareil',
      step3Title: 'Le problème',
      step3Subtitle: 'Décrivez le symptôme observé',
      next: 'Suivant',
      previous: 'Précédent',
      analyze: 'Analyser',
      selectAppliance: 'Sélectionnez un appareil',
      selectBrand: 'Sélectionnez une marque',
      searchBrand: 'Rechercher une marque...',
    },
    common: {
      close: 'Fermer',
      search: 'Rechercher',
      loading: 'Chargement...',
      error: 'Erreur',
      success: 'Succès',
    },
    applianceBreakdown: {
      title: 'Votre appareil est en panne ?',
      subtitle: 'Trouvez rapidement les pièces détachées dont vous avez besoin pour le réparer. Sélectionnez votre type d\'appareil ci-dessous.',
    },
    barcodeScanner: {
      buttonText: 'Scanner un code QR ou code-barres',
      scanningText: 'Positionnez le code QR ou code-barres devant la caméra',
    },
    findByBrand: {
      title: 'Trouvez votre Appareil grâce à sa marque',
      subtitle: 'Sélectionnez la marque de votre électroménager',
    },
    productCard: {
      aiRecommended: 'Recommandé par IA',
      compatible: 'Compatible',
      inStock: 'En stock',
      fastDelivery: 'Livraison rapide',
      taxIncluded: 'Taxes incluses',
    },
    cartDrawer: {
      title: 'Mon Panier',
      emptyTitle: 'Panier vide',
      emptyDescription: 'Ajoutez des produits à votre panier pour continuer.',
      items: 'Articles',
      remove: 'Supprimer',
      subtotal: 'Sous-total',
      shipping: 'Livraison',
      freeShippingFrom: 'Livraison gratuite à partir de',
      total: 'Total',
      checkout: 'Passer commande',
      compatibilityCheck: 'Vérification de compatibilité',
      allCompatible: 'Tous les articles sont compatibles',
      incompatibleWarning: 'Certains articles ne sont pas compatibles avec votre appareil',
    },
    checkout: {
      steps: {
        shipping: 'Livraison',
        payment: 'Paiement',
        review: 'Confirmation',
      },
      free: 'Gratuit',
    },
    customerService: {
      findReference: 'Trouver une référence',
      findReferenceDesc: 'Entrez votre numéro de commande ou de référence pour obtenir des informations supplémentaires.',
    },
    contactForm: {
      subjects: {
        order: 'Commande',
        part: 'Pièce détachée',
        diagnostic: 'Diagnostic',
        technical: 'Technique',
        warranty: 'Garantie',
        other: 'Autre',
      },
    },
    diagnosticStepper: {
      steps: ['Votre appareil', 'Marque', 'Le problème'],
      selectAppliance: 'Sélectionnez un appareil',
      selectSymptom: 'Sélectionnez un symptôme',
    },
    orderTracking: {
      expectedDelivery: 'Livraison prévue',
    },
    header: {
      orderTracking: 'Suivi de commande',
      login: 'Se connecter',
      myAccount: 'Mon compte',
      logout: 'Déconnexion',
    },
    footerLinks: {
      blog: 'Blog',
      blogSubtitle: 'Dernières nouvelles et conseils',
      faq: 'FAQ',
      warranty: 'Garantie',
      returns: 'Retours',
      contactForm: 'Formulaire de contact',
      location: 'Localisation',
    },
    testimonialsSection: {
      repairWarranty: 'Garantie réparation',
      repairWarrantyDesc: '6 mois sur la main d\'œuvre',
    },
    blogSection: {
      title: 'Blog & Conseils',
      subtitle: 'Nos experts partagent leurs astuces pour entretenir et réparer votre électroménager',
      article1Title: 'Comment identifier une panne sur un lave-linge et trouver la bonne pièce détachée',
      article1Desc: 'Guide complet pour diagnostiquer votre lave-linge et commander la pièce adaptée en toute confiance.',
      article2Title: 'Réparer ou remplacer un appareil électroménager : comment faire le bon choix ?',
      article2Desc: 'Les critères essentiels pour prendre la meilleure décision économique et écologique.',
      article3Title: 'Les pièces détachées les plus courantes en électroménager et leur rôle',
      article3Desc: 'Comprendre le fonctionnement des composants essentiels de vos appareils.',
      article4Title: 'Comment prolonger la durée de vie de vos appareils électroménagers',
      article4Desc: '10 gestes simples pour économiser et éviter les pannes prématurées.',
      article5Title: 'Pièces détachées d\'origine vs compatibles : quelles différences ?',
      article5Desc: 'Guide complet pour faire le bon choix entre qualité, prix et garanties.',
      readArticle: 'En savoir plus',
    },
  },
  en: {
    nav: {
      home: 'Home',
      catalog: 'Catalog',
      brands: 'Brands',
      support: 'Support',
      cart: 'Cart',
    },
    hero: {
      title: 'Repair has never been so simple',
      subtitle: 'Quickly find the compatible spare part for the right model.',
      searchPlaceholder: 'E.g: Bosch washing machine pump...',
      searchButton: 'Search',
      orText: 'or',
      startDiagnosis: 'Start guided diagnosis',
    },
    trust: {
      bestPrice: 'Best price guaranteed',
      shipping24h: 'Shipped within 24h',
      freeReturns: 'Free returns within 14 days*',
      freeReturnsCondition: 'Condition: product returned new, unused and in original packaging',
    },
    popularProducts: {
      title: 'Popular Parts',
      subtitle: 'Most searched solutions',
      viewAll: 'View all',
      inStock: 'In stock',
      outOfStock: 'Out of stock',
      addToCart: 'Add to cart',
      compatibility: 'Compatible with',
    },
    brands: {
      title: 'Brands we support',
      subtitle: 'Over 150 home appliance brands available',
    },
    testimonials: {
      title: 'They repaired with Jolimont',
      subtitle: 'Over 15,000 appliances repaired in 2025',
    },
    footer: {
      aboutTitle: 'About',
      aboutText: 'Jolimont Electro is your specialist in home appliance spare parts with integrated AI diagnostics.',
      linksTitle: 'Quick Links',
      contact: 'Contact',
      legal: 'Legal Notice',
      termsOfSale: 'Terms of Sale',
      privacy: 'Privacy',
      contactTitle: 'Contact',
      phone: 'Phone',
      email: 'Email',
      schedule: 'Mon-Fri: 9am-6pm',
      copyright: '© 2026 Jolimont Electro. All rights reserved.',
    },
    cart: {
      title: 'My Cart',
      empty: 'Your cart is empty',
      subtotal: 'Subtotal',
      shipping: 'Shipping',
      total: 'Total',
      checkout: 'Checkout',
      continueShopping: 'Continue shopping',
    },
    productDetail: {
      inStock: 'In stock',
      outOfStock: 'Out of stock',
      addToCart: 'Add to cart',
      description: 'Description',
      technicalSpecs: 'Technical Specifications',
      compatibility: 'Compatibility',
      aiRecommendation: 'AI Recommendation',
      customerReviews: 'Customer Reviews',
      noReviews: 'No reviews yet',
    },
    diagnosis: {
      title: 'Guided Diagnosis',
      step1Title: 'Your Appliance',
      step1Subtitle: 'Select the appliance type',
      step2Title: 'Brand',
      step2Subtitle: 'Choose your appliance brand',
      step3Title: 'The Problem',
      step3Subtitle: 'Describe the observed symptom',
      next: 'Next',
      previous: 'Previous',
      analyze: 'Analyze',
      selectAppliance: 'Select an appliance',
      selectBrand: 'Select a brand',
      searchBrand: 'Search for a brand...',
    },
    common: {
      close: 'Close',
      search: 'Search',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
    },
    applianceBreakdown: {
      title: 'Is your appliance broken?',
      subtitle: 'Quickly find the spare parts you need to repair it. Select your appliance type below.',
    },
    barcodeScanner: {
      buttonText: 'Scan a QR code or barcode',
      scanningText: 'Position the QR code or barcode in front of the camera',
    },
    findByBrand: {
      title: 'Find Your Appliance by Brand',
      subtitle: 'Select your appliance brand',
    },
    productCard: {
      aiRecommended: 'Recommended by AI',
      compatible: 'Compatible',
      inStock: 'In stock',
      fastDelivery: 'Fast delivery',
      taxIncluded: 'Tax included',
    },
    cartDrawer: {
      title: 'My Cart',
      emptyTitle: 'Cart is empty',
      emptyDescription: 'Add products to your cart to continue.',
      items: 'Items',
      remove: 'Remove',
      subtotal: 'Subtotal',
      shipping: 'Shipping',
      freeShippingFrom: 'Free shipping from',
      total: 'Total',
      checkout: 'Checkout',
      compatibilityCheck: 'Compatibility check',
      allCompatible: 'All items are compatible',
      incompatibleWarning: 'Some items are not compatible with your appliance',
    },
    checkout: {
      steps: {
        shipping: 'Shipping',
        payment: 'Payment',
        review: 'Confirmation',
      },
      free: 'Free',
    },
    customerService: {
      findReference: 'Find a reference',
      findReferenceDesc: 'Enter your order or reference number for additional information.',
    },
    contactForm: {
      subjects: {
        order: 'Order',
        part: 'Spare part',
        diagnostic: 'Diagnostic',
        technical: 'Technical',
        warranty: 'Warranty',
        other: 'Other',
      },
    },
    diagnosticStepper: {
      steps: ['Your Appliance', 'Brand', 'The Problem'],
      selectAppliance: 'Select an appliance',
      selectSymptom: 'Select a symptom',
    },
    orderTracking: {
      expectedDelivery: 'Expected delivery',
    },
    header: {
      orderTracking: 'Order Tracking',
      login: 'Login',
      myAccount: 'My Account',
      logout: 'Logout',
    },
    footerLinks: {
      blog: 'Blog',
      blogSubtitle: 'Latest news and tips',
      faq: 'FAQ',
      warranty: 'Warranty',
      returns: 'Returns',
      contactForm: 'Contact Form',
      location: 'Location',
    },
    testimonialsSection: {
      repairWarranty: 'Repair Warranty',
      repairWarrantyDesc: '6 months on labor',
    },
    blogSection: {
      title: 'Blog & Tips',
      subtitle: 'Our experts share their tips for maintaining and repairing your appliances',
      article1Title: 'How to identify a breakdown in a washing machine and find the right spare part',
      article1Desc: 'Complete guide to diagnose your washing machine and order the right part with confidence.',
      article2Title: 'Repair or replace a home appliance: how to make the right choice?',
      article2Desc: 'Essential criteria for making the best economic and ecological decision.',
      article3Title: 'The most common spare parts in home appliances and their role',
      article3Desc: 'Understanding how essential components of your appliances work.',
      article4Title: 'How to extend the life of your home appliances',
      article4Desc: '10 simple actions to save money and avoid premature breakdowns.',
      article5Title: 'Original vs compatible spare parts: what are the differences?',
      article5Desc: 'Complete guide to make the right choice between quality, price and warranties.',
      readArticle: 'Learn more',
    },
  },
  it: {
    nav: {
      home: 'Home',
      catalog: 'Catalogo',
      brands: 'Marche',
      support: 'Supporto',
      cart: 'Carrello',
    },
    hero: {
      title: 'Riparare non è mai stato così semplice',
      subtitle: 'Trova rapidamente il ricambio compatibile per il modello giusto.',
      searchPlaceholder: 'Es: pompa lavatrice Bosch...',
      searchButton: 'Cerca',
      orText: 'o',
      startDiagnosis: 'Avvia diagnosi guidata',
    },
    trust: {
      bestPrice: 'Miglior prezzo garantito',
      shipping24h: 'Spedizione in 24h',
      freeReturns: 'Resi gratuiti entro 14 giorni*',
      freeReturnsCondition: 'Condizione: prodotto restituito nuovo, non utilizzato e nella confezione originale',
    },
    popularProducts: {
      title: 'Pezzi Popolari',
      subtitle: 'Le soluzioni più ricercate',
      viewAll: 'Vedi tutto',
      inStock: 'Disponibile',
      outOfStock: 'Esaurito',
      addToCart: 'Aggiungi al carrello',
      compatibility: 'Compatibile con',
    },
    brands: {
      title: 'Marche che supportiamo',
      subtitle: 'Oltre 150 marche di elettrodomestici disponibili',
    },
    testimonials: {
      title: 'Hanno riparato con Jolimont',
      subtitle: 'Oltre 15.000 elettrodomestici riparati nel 2025',
    },
    footer: {
      aboutTitle: 'Chi Siamo',
      aboutText: 'Jolimont Electro è il vostro specialista in ricambi per elettrodomestici con diagnostica AI integrata.',
      linksTitle: 'Link Rapidi',
      contact: 'Contatto',
      legal: 'Note Legali',
      termsOfSale: 'Condizioni di Vendita',
      privacy: 'Privacy',
      contactTitle: 'Contatto',
      phone: 'Tel',
      email: 'Email',
      schedule: 'Lun-Ven: 9-18',
      copyright: '© 2026 Jolimont Electro. Tutti i diritti riservati.',
    },
    cart: {
      title: 'Il Mio Carrello',
      empty: 'Il carrello è vuoto',
      subtotal: 'Subtotale',
      shipping: 'Spedizione',
      total: 'Totale',
      checkout: 'Procedi all\'acquisto',
      continueShopping: 'Continua a fare acquisti',
    },
    productDetail: {
      inStock: 'Disponibile',
      outOfStock: 'Esaurito',
      addToCart: 'Aggiungi al carrello',
      description: 'Descrizione',
      technicalSpecs: 'Specifiche Tecniche',
      compatibility: 'Compatibilità',
      aiRecommendation: 'Raccomandazione AI',
      customerReviews: 'Recensioni Clienti',
      noReviews: 'Nessuna recensione ancora',
    },
    diagnosis: {
      title: 'Diagnosi Guidata',
      step1Title: 'Il Tuo Elettrodomestico',
      step1Subtitle: 'Seleziona il tipo di elettrodomestico',
      step2Title: 'Marca',
      step2Subtitle: 'Scegli la marca del tuo elettrodomestico',
      step3Title: 'Il Problema',
      step3Subtitle: 'Descrivi il sintomo osservato',
      next: 'Avanti',
      previous: 'Indietro',
      analyze: 'Analizza',
      selectAppliance: 'Seleziona un elettrodomestico',
      selectBrand: 'Seleziona una marca',
      searchBrand: 'Cerca una marca...',
    },
    common: {
      close: 'Chiudi',
      search: 'Cerca',
      loading: 'Caricamento...',
      error: 'Errore',
      success: 'Successo',
    },
    applianceBreakdown: {
      title: 'Il tuo elettrodomestico è guasto?',
      subtitle: 'Trova rapidamente i pezzi di ricambio di cui hai bisogno per ripararlo. Seleziona il tipo di elettrodomestico qui sotto.',
    },
    barcodeScanner: {
      buttonText: 'Scansiona un codice QR o codice a barre',
      scanningText: 'Posiziona il codice QR o codice a barre davanti alla fotocamera',
    },
    findByBrand: {
      title: 'Trova il tuo Elettrodomestico tramite Marca',
      subtitle: 'Seleziona la marca del tuo elettrodomestico',
    },
    productCard: {
      aiRecommended: 'Raccomandato da IA',
      compatible: 'Compatibile',
      inStock: 'In stock',
      fastDelivery: 'Consegna rapida',
      taxIncluded: 'Tasse incluse',
    },
    cartDrawer: {
      title: 'Il mio carrello',
      emptyTitle: 'Carrello vuoto',
      emptyDescription: 'Aggiungi prodotti al tuo carrello per continuare.',
      items: 'Articoli',
      remove: 'Rimuovi',
      subtotal: 'Subtotale',
      shipping: 'Spedizione',
      freeShippingFrom: 'Spedizione gratuita a partire da',
      total: 'Totale',
      checkout: 'Procedi all\'acquisto',
      compatibilityCheck: 'Controllo di compatibilità',
      allCompatible: 'Tutti gli articoli sono compatibili',
      incompatibleWarning: 'Alcuni articoli non sono compatibili con il tuo elettrodomestico',
    },
    checkout: {
      steps: {
        shipping: 'Spedizione',
        payment: 'Pagamento',
        review: 'Confirmation',
      },
      free: 'Gratuito',
    },
    customerService: {
      findReference: 'Trova un riferimento',
      findReferenceDesc: 'Inserisci il numero di ordine o di riferimento per ottenere ulteriori informazioni.',
    },
    contactForm: {
      subjects: {
        order: 'Ordine',
        part: 'Pezzo di ricambio',
        diagnostic: 'Diagnosi',
        technical: 'Tecnico',
        warranty: 'Garanzia',
        other: 'Altro',
      },
    },
    diagnosticStepper: {
      steps: ['Il tuo elettrodomestico', 'Marca', 'Il problema'],
      selectAppliance: 'Seleziona un elettrodomestico',
      selectSymptom: 'Seleziona un sintomo',
    },
    orderTracking: {
      expectedDelivery: 'Consegna prevista',
    },
    header: {
      orderTracking: 'Tracciamento Ordine',
      login: 'Accedi',
      myAccount: 'Il mio Account',
      logout: 'Esci',
    },
    footerLinks: {
      blog: 'Blog',
      blogSubtitle: 'Ultime notizie e consigli',
      faq: 'FAQ',
      warranty: 'Garanzia',
      returns: 'Resi',
      contactForm: 'Modulo di Contatto',
      location: 'Posizione',
    },
    testimonialsSection: {
      repairWarranty: 'Garanzia di riparazione',
      repairWarrantyDesc: '6 mesi sulla manodopera',
    },
    blogSection: {
      title: 'Blog & Consigli',
      subtitle: 'I nostri esperti condividono i loro consigli per mantenere e riparare i tuoi elettrodomestici',
      article1Title: 'Come identificare un guasto in una lavatrice e trovare il ricambio giusto',
      article1Desc: 'Guida completa per diagnosticare la tua lavatrice e ordinare il pezzo giusto con fiducia.',
      article2Title: 'Riparare o sostituire un elettrodomestico: come fare la scelta giusta?',
      article2Desc: 'Criteri essenziali per prendere la migliore decisione economica ed ecologica.',
      article3Title: 'I ricambi più comuni negli elettrodomestici e il loro ruolo',
      article3Desc: 'Comprendere il funzionamento dei componenti essenziali dei tuoi apparecchi.',
      article4Title: 'Come prolungare la durata dei tuoi elettrodomestici',
      article4Desc: '10 gesti semplici per risparmiare ed evitare guasti prematuri.',
      article5Title: 'Ricambi originali vs compatibili: quali differenze?',
      article5Desc: 'Guida completa per fare la scelta giusta tra qualità, prezzo e garanzie.',
      readArticle: 'Scopri di più',
    },
  },
  nl: {
    nav: {
      home: 'Home',
      catalog: 'Catalogus',
      brands: 'Merken',
      support: 'Ondersteuning',
      cart: 'Winkelwagen',
    },
    hero: {
      title: 'Repareren was nog nooit zo eenvoudig',
      subtitle: 'Vind snel het compatibele onderdeel voor het juiste model.',
      searchPlaceholder: 'Bijv: Bosch wasmachinepomp...',
      searchButton: 'Zoeken',
      orText: 'of',
      startDiagnosis: 'Start begeleide diagnose',
    },
    trust: {
      bestPrice: 'Beste prijs gegarandeerd',
      shipping24h: 'Verzending binnen 24u',
      freeReturns: 'Gratis retour binnen 14 dagen*',
      freeReturnsCondition: 'Voorwaarde: product geretourneerd nieuw, ongebruikt en in originele verpakking',
    },
    popularProducts: {
      title: 'Populaire Onderdelen',
      subtitle: 'Meest gezochte oplossingen',
      viewAll: 'Bekijk alles',
      inStock: 'Op voorraad',
      outOfStock: 'Uitverkocht',
      addToCart: 'In winkelwagen',
      compatibility: 'Compatibel met',
    },
    brands: {
      title: 'Merken die wij ondersteunen',
      subtitle: 'Meer dan 150 huishoudelijke apparatenmerken beschikbaar',
    },
    testimonials: {
      title: 'Zij hebben gerepareerd met Jolimont',
      subtitle: 'Meer dan 15.000 apparaten gerepareerd in 2025',
    },
    footer: {
      aboutTitle: 'Over Ons',
      aboutText: 'Jolimont Electro is uw specialist in onderdelen voor huishoudelijke apparaten met geïntegreerde AI-diagnostiek.',
      linksTitle: 'Snelle Links',
      contact: 'Contact',
      legal: 'Juridische Kennisgeving',
      termsOfSale: 'Verkoopvoorwaarden',
      privacy: 'Privacy',
      contactTitle: 'Contact',
      phone: 'Tel',
      email: 'Email',
      schedule: 'Ma-Vr: 9u-18u',
      copyright: '© 2026 Jolimont Electro. Alle rechten voorbehouden.',
    },
    cart: {
      title: 'Mijn Winkelwagen',
      empty: 'Uw winkelwagen is leeg',
      subtotal: 'Subtotaal',
      shipping: 'Verzending',
      total: 'Totaal',
      checkout: 'Afrekenen',
      continueShopping: 'Verder winkelen',
    },
    productDetail: {
      inStock: 'Op voorraad',
      outOfStock: 'Uitverkocht',
      addToCart: 'In winkelwagen',
      description: 'Beschrijving',
      technicalSpecs: 'Technische Specificaties',
      compatibility: 'Compatibiliteit',
      aiRecommendation: 'AI Aanbeveling',
      customerReviews: 'Klantbeoordelingen',
      noReviews: 'Nog geen beoordelingen',
    },
    diagnosis: {
      title: 'Begeleide Diagnose',
      step1Title: 'Uw Apparaat',
      step1Subtitle: 'Selecteer het type apparaat',
      step2Title: 'Merk',
      step2Subtitle: 'Kies het merk van uw apparaat',
      step3Title: 'Het Probleem',
      step3Subtitle: 'Beschrijf het waargenomen symptoom',
      next: 'Volgende',
      previous: 'Vorige',
      analyze: 'Analyseren',
      selectAppliance: 'Selecteer een apparaat',
      selectBrand: 'Selecteer een merk',
      searchBrand: 'Zoek een merk...',
    },
    common: {
      close: 'Sluiten',
      search: 'Zoeken',
      loading: 'Laden...',
      error: 'Fout',
      success: 'Succes',
    },
    applianceBreakdown: {
      title: 'Is uw apparaat defect?',
      subtitle: 'Vind snel de onderdelen die u nodig hebt om het te repareren. Selecteer hieronder uw apparaattype.',
    },
    barcodeScanner: {
      buttonText: 'Scan een QR-code of barcode',
      scanningText: 'Plaats de QR-code of barcode voor de camera',
    },
    findByBrand: {
      title: 'Vind uw Apparaat op Merk',
      subtitle: 'Selecteer het merk van uw apparaat',
    },
    productCard: {
      aiRecommended: 'Aanbevolen door AI',
      compatible: 'Compatibel',
      inStock: 'Op voorraad',
      fastDelivery: 'Snel levering',
      taxIncluded: 'BTW inbegrepen',
    },
    cartDrawer: {
      title: 'Mijn winkelwagen',
      emptyTitle: 'Winkelwagen is leeg',
      emptyDescription: 'Voeg producten toe aan uw winkelwagen om verder te gaan.',
      items: 'Artikelen',
      remove: 'Verwijderen',
      subtotal: 'Subtotaal',
      shipping: 'Verzending',
      freeShippingFrom: 'Gratis verzending vanaf',
      total: 'Totaal',
      checkout: 'Afrekenen',
      compatibilityCheck: 'Compatibiliteitscontrole',
      allCompatible: 'Alle artikelen zijn compatibel',
      incompatibleWarning: 'Sommige artikelen zijn niet compatibel met uw apparaat',
    },
    checkout: {
      steps: {
        shipping: 'Verzending',
        payment: 'Betaling',
        review: 'Confirmation',
      },
      free: 'Gratis',
    },
    customerService: {
      findReference: 'Zoek een referentie',
      findReferenceDesc: 'Voer uw ordernummer of referentienummer in voor meer informatie.',
    },
    contactForm: {
      subjects: {
        order: 'Bestelling',
        part: 'Onderdeel',
        diagnostic: 'Diagnose',
        technical: 'Technisch',
        warranty: 'Garantie',
        other: 'Overig',
      },
    },
    diagnosticStepper: {
      steps: ['Uw apparaat', 'Merk', 'Het probleem'],
      selectAppliance: 'Selecteer een apparaat',
      selectSymptom: 'Selecteer een symptoom',
    },
    orderTracking: {
      expectedDelivery: 'Verwachte levering',
    },
    header: {
      orderTracking: 'Bestelling volgen',
      login: 'Inloggen',
      myAccount: 'Mijn account',
      logout: 'Uitloggen',
    },
    footerLinks: {
      blog: 'Blog',
      blogSubtitle: 'Laatste nieuws en tips',
      faq: 'FAQ',
      warranty: 'Garantie',
      returns: 'Retouren',
      contactForm: 'Contactformulier',
      location: 'Locatie',
    },
    testimonialsSection: {
      repairWarranty: 'Reparatiegarantie',
      repairWarrantyDesc: '6 maanden op arbeid',
    },
    blogSection: {
      title: 'Blog & Tips',
      subtitle: 'Onze experts delen hun tips voor het onderhouden en repareren van uw apparaten',
      article1Title: 'Hoe een storing in een wasmachine identificeren en het juiste onderdeel vinden',
      article1Desc: 'Volledige gids om uw wasmachine te diagnosticeren en het juiste onderdeel met vertrouwen te bestellen.',
      article2Title: 'Repareren of vervangen van een huishoudelijk apparaat: hoe de juiste keuze te maken?',
      article2Desc: 'Essentiële criteria om de beste economische en ecologische beslissing te nemen.',
      article3Title: 'De meest voorkomende onderdelen in huishoudelijke apparaten en hun rol',
      article3Desc: 'Begrijpen hoe essentiële componenten van uw apparaten werken.',
      article4Title: 'Hoe de levensduur van uw huishoudelijke apparaten te verlengen',
      article4Desc: '10 eenvoudige acties om geld te besparen en vroegtijdige storingen te voorkomen.',
      article5Title: 'Originele vs compatibele onderdelen: wat zijn de verschillen?',
      article5Desc: 'Volledige gids om de juiste keuze te maken tussen kwaliteit, prijs en garanties.',
      readArticle: 'Lees meer',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      catalog: 'Katalog',
      brands: 'Marken',
      support: 'Support',
      cart: 'Warenkorb',
    },
    hero: {
      title: 'Reparieren war noch nie so einfach',
      subtitle: 'Finden Sie schnell das kompatible Ersatzteil für das richtige Modell.',
      searchPlaceholder: 'Z.B: Bosch Waschmaschinen-Pumpe...',
      searchButton: 'Suchen',
      orText: 'oder',
      startDiagnosis: 'Geführte Diagnose starten',
    },
    trust: {
      bestPrice: 'Bestpreis garantiert',
      shipping24h: 'Versand innerhalb 24h',
      freeReturns: 'Kostenlose Rücksendung innerhalb 14 Tagen*',
      freeReturnsCondition: 'Bedingung: Produkt neu, unbenutzt und in Originalverpackung zurückgegeben',
    },
    popularProducts: {
      title: 'Beliebte Teile',
      subtitle: 'Die meistgesuchten Lösungen',
      viewAll: 'Alle anzeigen',
      inStock: 'Auf Lager',
      outOfStock: 'Ausverkauft',
      addToCart: 'In den Warenkorb',
      compatibility: 'Kompatibel mit',
    },
    brands: {
      title: 'Marken, die wir unterstützen',
      subtitle: 'Über 150 Haushaltsgerätemarken verfügbar',
    },
    testimonials: {
      title: 'Sie haben mit Jolimont repariert',
      subtitle: 'Über 15.000 Geräte im Jahr 2025 repariert',
    },
    footer: {
      aboutTitle: 'Über Uns',
      aboutText: 'Jolimont Electro ist Ihr Spezialist für Haushaltsgeräte-Ersatzteile mit integrierter KI-Diagnose.',
      linksTitle: 'Schnelllinks',
      contact: 'Kontakt',
      legal: 'Rechtliche Hinweise',
      termsOfSale: 'AGB',
      privacy: 'Datenschutz',
      contactTitle: 'Kontakt',
      phone: 'Tel',
      email: 'E-Mail',
      schedule: 'Mo-Fr: 9-18 Uhr',
      copyright: '© 2026 Jolimont Electro. Alle Rechte vorbehalten.',
    },
    cart: {
      title: 'Mein Warenkorb',
      empty: 'Ihr Warenkorb ist leer',
      subtotal: 'Zwischensumme',
      shipping: 'Versand',
      total: 'Gesamt',
      checkout: 'Zur Kasse',
      continueShopping: 'Weiter einkaufen',
    },
    productDetail: {
      inStock: 'Auf Lager',
      outOfStock: 'Ausverkauft',
      addToCart: 'In den Warenkorb',
      description: 'Beschreibung',
      technicalSpecs: 'Technische Spezifikationen',
      compatibility: 'Kompatibilität',
      aiRecommendation: 'KI-Empfehlung',
      customerReviews: 'Kundenbewertungen',
      noReviews: 'Noch keine Bewertungen',
    },
    diagnosis: {
      title: 'Geführte Diagnose',
      step1Title: 'Ihr Gerät',
      step1Subtitle: 'Wählen Sie den Gerätetyp',
      step2Title: 'Marke',
      step2Subtitle: 'Wählen Sie die Marke Ihres Geräts',
      step3Title: 'Das Problem',
      step3Subtitle: 'Beschreiben Sie das beobachtete Symptom',
      next: 'Weiter',
      previous: 'Zurück',
      analyze: 'Analysieren',
      selectAppliance: 'Wählen Sie ein Gerät',
      selectBrand: 'Wählen Sie eine Marke',
      searchBrand: 'Marke suchen...',
    },
    common: {
      close: 'Schließen',
      search: 'Suchen',
      loading: 'Wird geladen...',
      error: 'Fehler',
      success: 'Erfolg',
    },
    applianceBreakdown: {
      title: 'Ist Ihr Gerät defekt?',
      subtitle: 'Finden Sie schnell die Ersatzteile, die Sie zur Reparatur benötigen. Wählen Sie unten Ihren Gerätetyp.',
    },
    barcodeScanner: {
      buttonText: 'QR-Code oder Barcode scannen',
      scanningText: 'Positionieren Sie den QR-Code oder Barcode vor der Kamera',
    },
    findByBrand: {
      title: 'Finden Sie Ihr Gerät nach Marke',
      subtitle: 'Wählen Sie die Marke Ihres Geräts',
    },
    productCard: {
      aiRecommended: 'Von KI empfohlen',
      compatible: 'Kompatibel',
      inStock: 'Auf Lager',
      fastDelivery: 'Schnelle Lieferung',
      taxIncluded: 'MwSt. inklusive',
    },
    cartDrawer: {
      title: 'Mein Warenkorb',
      emptyTitle: 'Warenkorb leer',
      emptyDescription: 'Fügen Sie Produkte zu Ihrem Warenkorb hinzu, um fortzufahren.',
      items: 'Artikel',
      remove: 'Entfernen',
      subtotal: 'Zwischensumme',
      shipping: 'Versand',
      freeShippingFrom: 'Kostenloser Versand ab',
      total: 'Gesamt',
      checkout: 'Zur Kasse',
      compatibilityCheck: 'Kompatibilitätsprüfung',
      allCompatible: 'Alle Artikel sind kompatibel',
      incompatibleWarning: 'Einige Artikel sind nicht mit Ihrem Gerät kompatibel',
    },
    checkout: {
      steps: {
        shipping: 'Versand',
        payment: 'Zahlung',
        review: 'Confirmation',
      },
      free: 'Kostenlos',
    },
    customerService: {
      findReference: 'Referenz finden',
      findReferenceDesc: 'Geben Sie Ihre Bestellnummer oder Referenznummer ein, um weitere Informationen zu erhalten.',
    },
    contactForm: {
      subjects: {
        order: 'Bestellung',
        part: 'Ersatzteil',
        diagnostic: 'Diagnose',
        technical: 'Technisch',
        warranty: 'Garantie',
        other: 'Andere',
      },
    },
    diagnosticStepper: {
      steps: ['Ihr Gerät', 'Marke', 'Das Problem'],
      selectAppliance: 'Wählen Sie ein Gerät',
      selectSymptom: 'Wählen Sie ein Symptom',
    },
    orderTracking: {
      expectedDelivery: 'Erwartete Lieferung',
    },
    header: {
      orderTracking: 'Bestellverfolgung',
      login: 'Anmelden',
      myAccount: 'Mein Konto',
      logout: 'Abmelden',
    },
    footerLinks: {
      blog: 'Blog',
      blogSubtitle: 'Neueste Nachrichten und Tipps',
      faq: 'FAQ',
      warranty: 'Garantie',
      returns: 'Rücksendungen',
      contactForm: 'Kontaktformular',
      location: 'Standort',
    },
    testimonialsSection: {
      repairWarranty: 'Reparaturgarantie',
      repairWarrantyDesc: '6 Monate auf Arbeit',
    },
    blogSection: {
      title: 'Blog & Ratschläge',
      subtitle: 'Unsere Experten teilen ihre Tipps zur Wartung und Reparatur Ihrer Geräte',
      article1Title: 'Wie man eine Panne in einer Waschmaschine identifiziert und das richtige Ersatzteil findet',
      article1Desc: 'Vollständiger Leitfaden zur Diagnose Ihrer Waschmaschine und Bestellung des richtigen Teils mit Vertrauen.',
      article2Title: 'Haushaltsgerät reparieren oder ersetzen: Wie treffen Sie die richtige Wahl?',
      article2Desc: 'Wesentliche Kriterien für die beste wirtschaftliche und ökologische Entscheidung.',
      article3Title: 'Die häufigsten Ersatzteile in Haushaltsgeräten und ihre Rolle',
      article3Desc: 'Verstehen, wie wesentliche Komponenten Ihrer Geräte funktionieren.',
      article4Title: 'Wie Sie die Lebensdauer Ihrer Haushaltsgeräte verlängern',
      article4Desc: '10 einfache Maßnahmen zum Geldsparen und Vermeiden von vorzeitigen Ausfällen.',
      article5Title: 'Original vs kompatible Ersatzteile: Was sind die Unterschiede?',
      article5Desc: 'Vollständiger Leitfaden zur richtigen Wahl zwischen Qualität, Preis und Garantien.',
      readArticle: 'Mehr erfahren',
    },
  },
};

export const languageNames: Record<Language, string> = {
  fr: 'Français',
  en: 'English',
  it: 'Italiano',
  nl: 'Nederlands',
  de: 'Deutsch',
};

export const languageFlags: Record<Language, string> = {
  fr: '🇫🇷',
  en: '🇬🇧',
  it: '🇮🇹',
  nl: '🇳🇱',
  de: '🇩🇪',
};