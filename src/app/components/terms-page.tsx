import { FileText, Scale, Lock, Truck, CreditCard, AlertCircle, Shield, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function TermsPage() {
  const { language } = useLanguage();
  
  const t = {
    fr: {
      title: 'Conditions Générales de Vente',
      subtitle: 'Dernière mise à jour : Février 2026',
      intro: 'Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Jolimont Electro et ses clients. En passant commande, vous acceptez sans réserve les présentes CGV.',
      
      sections: [
        {
          icon: Users,
          title: '1. Informations Légales',
          content: [
            {
              subtitle: 'Raison sociale',
              text: 'Jolimont Electro SAS - Capital social : 100 000 €',
            },
            {
              subtitle: 'Siège social',
              text: '15 Avenue de la République, 75011 Paris, France',
            },
            {
              subtitle: 'Immatriculation',
              text: 'RCS Paris 123 456 789 - TVA intracommunautaire : FR12345678901',
            },
            {
              subtitle: 'Contact',
              text: 'Email : contact@jolimont-electro.fr | Tél : +33 1 23 45 67 89',
            },
          ],
        },
        {
          icon: FileText,
          title: '2. Objet',
          content: [
            {
              text: 'Les présentes CGV ont pour objet de définir les droits et obligations des parties dans le cadre de la vente en ligne de pièces détachées pour appareils électroménagers proposées par Jolimont Electro.',
            },
            {
              text: 'Elles s\'appliquent à toutes les ventes conclues sur le site www.jolimont-electro.fr et constituent, avec la confirmation de commande, le contrat de vente entre Jolimont Electro et le client.',
            },
          ],
        },
        {
          icon: ShoppingCart,
          title: '3. Commandes',
          content: [
            {
              subtitle: '3.1 Processus de commande',
              text: 'Pour passer commande, le client sélectionne les articles de son choix, les ajoute à son panier, puis suit les étapes de validation. La commande devient définitive après confirmation du paiement.',
            },
            {
              subtitle: '3.2 Confirmation',
              text: 'Toute commande validée fait l\'objet d\'une confirmation par email récapitulant les produits commandés, les prix, les frais de livraison et l\'adresse de livraison.',
            },
            {
              subtitle: '3.3 Disponibilité',
              text: 'Les offres sont valables sous réserve de disponibilité des stocks. En cas d\'indisponibilité d\'un article, le client en sera informé et pourra demander le remboursement des sommes versées.',
            },
            {
              subtitle: '3.4 Modification et annulation',
              text: 'Le client dispose de 2 heures après validation pour modifier ou annuler sa commande en contactant le service client. Passé ce délai, seul un retour selon les conditions de l\'article 6 est possible.',
            },
          ],
        },
        {
          icon: CreditCard,
          title: '4. Prix et Paiement',
          content: [
            {
              subtitle: '4.1 Prix',
              text: 'Les prix sont indiqués en euros toutes taxes comprises (TTC), hors frais de livraison. Jolimont Electro se réserve le droit de modifier ses prix à tout moment, étant entendu que le prix applicable est celui en vigueur au moment de la commande.',
            },
            {
              subtitle: '4.2 Moyens de paiement',
              text: 'Le paiement peut être effectué par : carte bancaire (Visa, Mastercard, American Express), PayPal, virement bancaire, ou paiement en 3 ou 4 fois sans frais à partir de 100€.',
            },
            {
              subtitle: '4.3 Sécurité',
              text: 'Les paiements sont sécurisés par notre partenaire certifié PCI-DSS. Les données bancaires ne transitent pas par nos serveurs et ne sont jamais stockées.',
            },
            {
              subtitle: '4.4 Facturation',
              text: 'Une facture est disponible dans l\'espace client et envoyée par email dès l\'expédition de la commande.',
            },
          ],
        },
        {
          icon: Truck,
          title: '5. Livraison',
          content: [
            {
              subtitle: '5.1 Zone de livraison',
              text: 'Nous livrons en France métropolitaine et dans toute l\'Union Européenne.',
            },
            {
              subtitle: '5.2 Délais',
              text: 'Les commandes en stock sont expédiées sous 24h ouvrées. Livraison standard : 2-3 jours ouvrés en France. Livraison express 24h disponible en option (9,90€).',
            },
            {
              subtitle: '5.3 Frais de port',
              text: 'Gratuits en France métropolitaine à partir de 49€. Calculés automatiquement selon le poids et la destination pour les autres cas.',
            },
            {
              subtitle: '5.4 Suivi',
              text: 'Un email avec le numéro de suivi est envoyé dès l\'expédition. Le suivi est disponible dans l\'espace client.',
            },
            {
              subtitle: '5.5 Réception',
              text: 'Il appartient au client de vérifier l\'état du colis à la livraison et de signaler toute anomalie dans les 48h.',
            },
          ],
        },
        {
          icon: RotateCcw,
          title: '6. Droit de Rétractation',
          content: [
            {
              subtitle: '6.1 Délai',
              text: 'Conformément à l\'article L221-18 du Code de la consommation, le client dispose de 14 jours à compter de la réception pour exercer son droit de rétractation sans avoir à justifier de motifs.',
            },
            {
              subtitle: '6.2 Exercice',
              text: 'Pour exercer ce droit, le client doit notifier sa décision via son espace client ou par email. Les frais de retour sont à la charge de Jolimont Electro.',
            },
            {
              subtitle: '6.3 Conditions',
              text: 'Les articles doivent être retournés dans leur état d\'origine, non utilisés, dans leur emballage d\'origine avec tous les accessoires.',
            },
            {
              subtitle: '6.4 Remboursement',
              text: 'Le remboursement intervient dans un délai maximum de 14 jours à compter de la réception du retour, sur le moyen de paiement utilisé lors de l\'achat.',
            },
          ],
        },
        {
          icon: Shield,
          title: '7. Garanties',
          content: [
            {
              subtitle: '7.1 Garantie légale de conformité',
              text: 'Tous les produits bénéficient de la garantie légale de conformité (articles L217-4 et suivants du Code de la consommation) de 2 ans.',
            },
            {
              subtitle: '7.2 Garantie des vices cachés',
              text: 'Les produits bénéficient également de la garantie contre les vices cachés (articles 1641 et suivants du Code civil).',
            },
            {
              subtitle: '7.3 Garantie commerciale',
              text: 'Une garantie commerciale d\'1 an est offerte en complément sur toutes les pièces détachées neuves.',
            },
            {
              subtitle: '7.4 Mise en œuvre',
              text: 'Pour faire valoir ses droits, le client doit contacter le service client avec le numéro de commande et une description du problème.',
            },
          ],
        },
        {
          icon: Lock,
          title: '8. Protection des Données',
          content: [
            {
              subtitle: '8.1 Collecte',
              text: 'Les données personnelles collectées sont nécessaires au traitement des commandes et à la gestion de la relation client. Elles sont traitées conformément au RGPD.',
            },
            {
              subtitle: '8.2 Usage',
              text: 'Vos données ne sont jamais vendues ou cédées à des tiers. Elles peuvent être utilisées pour vous informer de nos offres (avec votre consentement).',
            },
            {
              subtitle: '8.3 Droits',
              text: 'Vous disposez d\'un droit d\'accès, de rectification, d\'effacement, de limitation et de portabilité de vos données. Contact : rgpd@jolimont-electro.fr',
            },
            {
              subtitle: '8.4 Conservation',
              text: 'Les données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, conformément aux obligations légales.',
            },
          ],
        },
        {
          icon: AlertCircle,
          title: '9. Responsabilité',
          content: [
            {
              subtitle: '9.1 Limitation',
              text: 'La responsabilité de Jolimont Electro ne saurait être engagée pour tout dommage indirect, tel que perte d\'exploitation, perte de données ou préjudice commercial.',
            },
            {
              subtitle: '9.2 Compatibilité',
              text: 'Bien que notre système IA analyse la compatibilité, le client reste responsable de vérifier l\'adéquation de la pièce avec son appareil. Les retours pour incompatibilité sont acceptés.',
            },
            {
              subtitle: '9.3 Installation',
              text: 'Jolimont Electro ne saurait être tenu responsable des dommages causés lors de l\'installation des pièces. Nous recommandons de faire appel à un professionnel qualifié.',
            },
          ],
        },
        {
          icon: Scale,
          title: '10. Propriété Intellectuelle',
          content: [
            {
              text: 'L\'ensemble du contenu du site (textes, images, vidéos, logos, technologies IA) est la propriété exclusive de Jolimont Electro et est protégé par le droit d\'auteur.',
            },
            {
              text: 'Toute reproduction, représentation, modification ou exploitation non autorisée est strictement interdite et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.',
            },
          ],
        },
        {
          icon: FileText,
          title: '11. Règlement des Litiges',
          content: [
            {
              subtitle: '11.1 Médiation',
              text: 'En cas de litige, le client peut recourir gratuitement au service de médiation de la consommation : Médiateur de la consommation CNPM - 27 avenue de la libération, 42400 Saint-Chamond.',
            },
            {
              subtitle: '11.2 Plateforme européenne',
              text: 'Conformément à l\'article 14 du Règlement (UE) n°524/2013, la Commission Européenne a mis en place une plateforme de résolution des litiges en ligne : https://ec.europa.eu/consumers/odr',
            },
            {
              subtitle: '11.3 Droit applicable',
              text: 'Les présentes CGV sont soumises au droit français. En cas de litige et à défaut d\'accord amiable, le tribunal compétent sera celui du ressort du siège social de Jolimont Electro.',
            },
          ],
        },
        {
          icon: FileText,
          title: '12. Dispositions Diverses',
          content: [
            {
              subtitle: '12.1 Modification',
              text: 'Jolimont Electro se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables sont celles en vigueur au moment de la passation de la commande.',
            },
            {
              subtitle: '12.2 Nullité',
              text: 'Si une ou plusieurs stipulations des présentes CGV sont tenues pour non valides, les autres stipulations demeurent applicables.',
            },
            {
              subtitle: '12.3 Intégralité',
              text: 'Les présentes CGV constituent l\'intégralité de l\'accord entre les parties et remplacent tout autre document ou accord antérieur.',
            },
          ],
        },
      ],
      
      contact: {
        title: 'Questions sur nos CGV ?',
        description: 'Notre équipe juridique est à votre disposition',
        email: 'legal@jolimont-electro.fr',
        phone: '+33 1 23 45 67 89',
      },
    },
    en: {
      title: 'Terms and Conditions of Sale',
      subtitle: 'Last updated: February 2026',
      intro: 'These Terms and Conditions of Sale (TCS) govern the contractual relationship between Jolimont Electro and its customers. By placing an order, you unreservedly accept these TCS.',
      
      sections: [
        {
          icon: Users,
          title: '1. Legal Information',
          content: [
            {
              subtitle: 'Company name',
              text: 'Jolimont Electro SAS - Share capital: €100,000',
            },
            {
              subtitle: 'Registered office',
              text: '15 Avenue de la République, 75011 Paris, France',
            },
            {
              subtitle: 'Registration',
              text: 'RCS Paris 123 456 789 - VAT: FR12345678901',
            },
            {
              subtitle: 'Contact',
              text: 'Email: contact@jolimont-electro.fr | Tel: +33 1 23 45 67 89',
            },
          ],
        },
        {
          icon: FileText,
          title: '2. Purpose',
          content: [
            {
              text: 'These TCS aim to define the rights and obligations of the parties in the context of online sales of spare parts for household appliances offered by Jolimont Electro.',
            },
            {
              text: 'They apply to all sales concluded on the website www.jolimont-electro.fr and constitute, together with the order confirmation, the sales contract between Jolimont Electro and the customer.',
            },
          ],
        },
        {
          icon: ShoppingCart,
          title: '3. Orders',
          content: [
            {
              subtitle: '3.1 Order process',
              text: 'To place an order, the customer selects items, adds them to cart, then follows the validation steps. The order becomes final after payment confirmation.',
            },
            {
              subtitle: '3.2 Confirmation',
              text: 'Every validated order is confirmed by email summarizing products, prices, shipping costs and delivery address.',
            },
            {
              subtitle: '3.3 Availability',
              text: 'Offers are valid subject to stock availability. In case of item unavailability, the customer will be informed and can request a refund.',
            },
            {
              subtitle: '3.4 Modification and cancellation',
              text: 'The customer has 2 hours after validation to modify or cancel the order by contacting customer service. After this period, only a return according to article 6 conditions is possible.',
            },
          ],
        },
        {
          icon: CreditCard,
          title: '4. Prices and Payment',
          content: [
            {
              subtitle: '4.1 Prices',
              text: 'Prices are shown in euros including all taxes (VAT included), excluding shipping costs. Jolimont Electro reserves the right to modify prices at any time, it being understood that the applicable price is that in force at the time of order.',
            },
            {
              subtitle: '4.2 Payment methods',
              text: 'Payment can be made by: credit card (Visa, Mastercard, American Express), PayPal, bank transfer, or payment in 3 or 4 installments without fees from €100.',
            },
            {
              subtitle: '4.3 Security',
              text: 'Payments are secured by our PCI-DSS certified partner. Banking data does not transit through our servers and is never stored.',
            },
            {
              subtitle: '4.4 Invoicing',
              text: 'An invoice is available in the customer area and sent by email upon order shipment.',
            },
          ],
        },
        {
          icon: Truck,
          title: '5. Delivery',
          content: [
            {
              subtitle: '5.1 Delivery area',
              text: 'We deliver to mainland France and throughout the European Union.',
            },
            {
              subtitle: '5.2 Timeframes',
              text: 'In-stock orders are shipped within 24 working hours. Standard delivery: 2-3 working days in France. 24h express delivery available as option (€9.90).',
            },
            {
              subtitle: '5.3 Shipping costs',
              text: 'Free in mainland France from €49. Automatically calculated based on weight and destination for other cases.',
            },
            {
              subtitle: '5.4 Tracking',
              text: 'An email with the tracking number is sent upon shipment. Tracking is available in the customer area.',
            },
            {
              subtitle: '5.5 Receipt',
              text: 'The customer must check the package condition upon delivery and report any anomaly within 48h.',
            },
          ],
        },
        {
          icon: RotateCcw,
          title: '6. Right of Withdrawal',
          content: [
            {
              subtitle: '6.1 Period',
              text: 'In accordance with article L221-18 of the Consumer Code, the customer has 14 days from receipt to exercise their right of withdrawal without having to justify reasons.',
            },
            {
              subtitle: '6.2 Exercise',
              text: 'To exercise this right, the customer must notify their decision via their customer area or by email. Return costs are borne by Jolimont Electro.',
            },
            {
              subtitle: '6.3 Conditions',
              text: 'Items must be returned in their original condition, unused, in their original packaging with all accessories.',
            },
            {
              subtitle: '6.4 Refund',
              text: 'The refund occurs within a maximum of 14 days from receipt of the return, to the payment method used at purchase.',
            },
          ],
        },
        {
          icon: Shield,
          title: '7. Warranties',
          content: [
            {
              subtitle: '7.1 Legal warranty of conformity',
              text: 'All products benefit from the legal warranty of conformity (articles L217-4 and following of the Consumer Code) of 2 years.',
            },
            {
              subtitle: '7.2 Warranty against hidden defects',
              text: 'Products also benefit from the warranty against hidden defects (articles 1641 and following of the Civil Code).',
            },
            {
              subtitle: '7.3 Commercial warranty',
              text: 'A 1-year commercial warranty is offered in addition on all new spare parts.',
            },
            {
              subtitle: '7.4 Implementation',
              text: 'To assert rights, the customer must contact customer service with the order number and a problem description.',
            },
          ],
        },
        {
          icon: Lock,
          title: '8. Data Protection',
          content: [
            {
              subtitle: '8.1 Collection',
              text: 'Personal data collected is necessary for order processing and customer relationship management. It is processed in accordance with GDPR.',
            },
            {
              subtitle: '8.2 Use',
              text: 'Your data is never sold or transferred to third parties. It may be used to inform you of our offers (with your consent).',
            },
            {
              subtitle: '8.3 Rights',
              text: 'You have the right to access, rectify, erase, limit and port your data. Contact: rgpd@jolimont-electro.fr',
            },
            {
              subtitle: '8.4 Retention',
              text: 'Data is retained for the duration necessary for the purposes for which it was collected, in accordance with legal obligations.',
            },
          ],
        },
        {
          icon: AlertCircle,
          title: '9. Liability',
          content: [
            {
              subtitle: '9.1 Limitation',
              text: 'Jolimont Electro\'s liability cannot be engaged for any indirect damage, such as loss of business, data loss or commercial harm.',
            },
            {
              subtitle: '9.2 Compatibility',
              text: 'Although our AI system analyzes compatibility, the customer remains responsible for verifying the part\'s suitability with their appliance. Returns for incompatibility are accepted.',
            },
            {
              subtitle: '9.3 Installation',
              text: 'Jolimont Electro cannot be held responsible for damages caused during parts installation. We recommend using a qualified professional.',
            },
          ],
        },
        {
          icon: Scale,
          title: '10. Intellectual Property',
          content: [
            {
              text: 'All site content (texts, images, videos, logos, AI technologies) is the exclusive property of Jolimont Electro and is protected by copyright.',
            },
            {
              text: 'Any unauthorized reproduction, representation, modification or exploitation is strictly prohibited and constitutes counterfeiting punishable by Intellectual Property Code.',
            },
          ],
        },
        {
          icon: FileText,
          title: '11. Dispute Resolution',
          content: [
            {
              subtitle: '11.1 Mediation',
              text: 'In case of dispute, the customer can use free consumer mediation service: Consumer Mediator CNPM - 27 avenue de la libération, 42400 Saint-Chamond.',
            },
            {
              subtitle: '11.2 European platform',
              text: 'According to article 14 of Regulation (EU) No 524/2013, the European Commission has set up an online dispute resolution platform: https://ec.europa.eu/consumers/odr',
            },
            {
              subtitle: '11.3 Applicable law',
              text: 'These TCS are subject to French law. In case of dispute and failing amicable agreement, the competent court will be that of Jolimont Electro\'s registered office jurisdiction.',
            },
          ],
        },
        {
          icon: FileText,
          title: '12. Miscellaneous Provisions',
          content: [
            {
              subtitle: '12.1 Modification',
              text: 'Jolimont Electro reserves the right to modify these TCS at any time. The applicable TCS are those in force at the time of order placement.',
            },
            {
              subtitle: '12.2 Nullity',
              text: 'If one or more provisions of these TCS are held invalid, the other provisions remain applicable.',
            },
            {
              subtitle: '12.3 Entirety',
              text: 'These TCS constitute the entire agreement between the parties and replace any other previous document or agreement.',
            },
          ],
        },
      ],
      
      contact: {
        title: 'Questions about our TCS?',
        description: 'Our legal team is at your disposal',
        email: 'legal@jolimont-electro.fr',
        phone: '+33 1 23 45 67 89',
      },
    },
    it: {
      title: 'Condizioni Generali di Vendita',
      subtitle: 'Ultimo aggiornamento: Febbraio 2026',
      intro: 'Le presenti Condizioni Generali di Vendita (CGV) regolano i rapporti contrattuali tra Jolimont Electro e i suoi clienti. Effettuando un ordine, accetti senza riserve le presenti CGV.',
      
      sections: [
        {
          icon: Users,
          title: '1. Informazioni Legali',
          content: [
            {
              subtitle: 'Ragione sociale',
              text: 'Jolimont Electro SAS - Capitale sociale: 100.000 €',
            },
            {
              subtitle: 'Sede legale',
              text: '15 Avenue de la République, 75011 Parigi, Francia',
            },
            {
              subtitle: 'Registrazione',
              text: 'RCS Parigi 123 456 789 - IVA: FR12345678901',
            },
            {
              subtitle: 'Contatto',
              text: 'Email: contact@jolimont-electro.fr | Tel: +33 1 23 45 67 89',
            },
          ],
        },
        // ... [similar structure for Italian translations]
      ],
      
      contact: {
        title: 'Domande sulle nostre CGV?',
        description: 'Il nostro team legale è a tua disposizione',
        email: 'legal@jolimont-electro.it',
        phone: '+33 1 23 45 67 89',
      },
    },
    nl: {
      title: 'Algemene Verkoopvoorwaarden',
      subtitle: 'Laatste update: Februari 2026',
      intro: 'Deze Algemene Verkoopvoorwaarden (AVV) regelen de contractuele relatie tussen Jolimont Electro en zijn klanten. Door een bestelling te plaatsen, accepteert u zonder voorbehoud deze AVV.',
      
      sections: [
        {
          icon: Users,
          title: '1. Juridische Informatie',
          content: [
            {
              subtitle: 'Bedrijfsnaam',
              text: 'Jolimont Electro SAS - Aandelenkapitaal: €100.000',
            },
            {
              subtitle: 'Maatschappelijke zetel',
              text: '15 Avenue de la République, 75011 Parijs, Frankrijk',
            },
            {
              subtitle: 'Registratie',
              text: 'RCS Parijs 123 456 789 - BTW: FR12345678901',
            },
            {
              subtitle: 'Contact',
              text: 'Email: contact@jolimont-electro.fr | Tel: +33 1 23 45 67 89',
            },
          ],
        },
        // ... [similar structure for Dutch translations]
      ],
      
      contact: {
        title: 'Vragen over onze AVV?',
        description: 'Ons juridisch team staat tot uw beschikking',
        email: 'legal@jolimont-electro.nl',
        phone: '+33 1 23 45 67 89',
      },
    },
    de: {
      title: 'Allgemeine Geschäftsbedingungen',
      subtitle: 'Letzte Aktualisierung: Februar 2026',
      intro: 'Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die vertraglichen Beziehungen zwischen Jolimont Electro und seinen Kunden. Mit der Bestellung akzeptieren Sie vorbehaltlos diese AGB.',
      
      sections: [
        {
          icon: Users,
          title: '1. Rechtliche Informationen',
          content: [
            {
              subtitle: 'Firmenname',
              text: 'Jolimont Electro SAS - Stammkapital: 100.000 €',
            },
            {
              subtitle: 'Sitz',
              text: '15 Avenue de la République, 75011 Paris, Frankreich',
            },
            {
              subtitle: 'Registrierung',
              text: 'RCS Paris 123 456 789 - MwSt: FR12345678901',
            },
            {
              subtitle: 'Kontakt',
              text: 'Email: contact@jolimont-electro.fr | Tel: +33 1 23 45 67 89',
            },
          ],
        },
        // ... [similar structure for German translations]
      ],
      
      contact: {
        title: 'Fragen zu unseren AGB?',
        description: 'Unser Rechtsteam steht Ihnen zur Verfügung',
        email: 'legal@jolimont-electro.de',
        phone: '+33 1 23 45 67 89',
      },
    },
  }[language];

  // Import RotateCcw and ShoppingCart from lucide-react if not already imported
  const RotateCcw = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>;
  const ShoppingCart = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-700 to-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Scale className="w-20 h-20 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl font-bold mb-3">{t.title}</h1>
          <p className="text-sm opacity-70 mb-4">{t.subtitle}</p>
          <p className="text-base opacity-90 max-w-3xl mx-auto leading-relaxed">{t.intro}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-12">
          {t.sections.map((section, sectionIndex) => {
            const Icon = section.icon;
            return (
              <section key={sectionIndex} className="bg-white rounded-xl p-8 border border-border shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                    <div className="space-y-4">
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          {item.subtitle && (
                            <h3 className="font-bold text-base mb-2 text-primary">{item.subtitle}</h3>
                          )}
                          <p className="text-muted-foreground leading-relaxed text-sm">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Contact CTA */}
        <section className="mt-16">
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 text-white rounded-xl p-8 text-center">
            <FileText className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl font-bold mb-2">{t.contact.title}</h2>
            <p className="opacity-90 mb-6">{t.contact.description}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${t.contact.email}`}
                className="text-base font-semibold hover:opacity-80 transition-opacity"
              >
                ✉️ {t.contact.email}
              </a>
              <span className="hidden sm:inline">•</span>
              <a
                href={`tel:${t.contact.phone}`}
                className="text-base font-semibold hover:opacity-80 transition-opacity"
              >
                📞 {t.contact.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Legal Notice */}
        <div className="mt-8 text-center text-xs text-muted-foreground">
          <p>
            {language === 'fr' && '© 2026 Jolimont Electro. Tous droits réservés. Document contractuel à conserver.'}
            {language === 'en' && '© 2026 Jolimont Electro. All rights reserved. Contractual document to keep.'}
            {language === 'it' && '© 2026 Jolimont Electro. Tutti i diritti riservati. Documento contrattuale da conservare.'}
            {language === 'nl' && '© 2026 Jolimont Electro. Alle rechten voorbehouden. Contractueel document te bewaren.'}
            {language === 'de' && '© 2026 Jolimont Electro. Alle Rechte vorbehalten. Vertragsdokument aufzubewahren.'}
          </p>
        </div>
      </div>
    </div>
  );
}
