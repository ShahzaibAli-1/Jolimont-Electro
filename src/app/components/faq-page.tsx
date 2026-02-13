import { useState } from 'react';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FAQItem {
  question: string;
  answer: string;
  category: 'orders' | 'shipping' | 'returns' | 'payment' | 'technical';
}

const faqData: Record<string, FAQItem[]> = {
  fr: [
    {
      question: 'Comment passer une commande ?',
      answer: 'Pour passer commande, ajoutez vos articles au panier, puis cliquez sur "Passer commande". Vous serez guidé à travers les étapes de paiement et de livraison. Vous pouvez également utiliser notre diagnostic IA pour trouver la pièce exacte dont vous avez besoin.',
      category: 'orders',
    },
    {
      question: 'Puis-je modifier ma commande après validation ?',
      answer: 'Oui, vous pouvez modifier votre commande dans les 2 heures suivant sa validation en contactant notre service client au +33 1 23 45 67 89. Après ce délai, la commande entre en préparation et ne peut plus être modifiée.',
      category: 'orders',
    },
    {
      question: 'Comment suivre ma commande ?',
      answer: 'Vous recevrez un email avec votre numéro de suivi dès l\'expédition de votre commande. Vous pouvez également suivre votre commande depuis votre compte client dans la section "Mes commandes".',
      category: 'orders',
    },
    {
      question: 'Quels sont les délais de livraison ?',
      answer: 'Nous expédions toutes les commandes en stock sous 24h ouvrées. La livraison standard prend 2-3 jours ouvrés en France métropolitaine. Une livraison express 24h est disponible en option pour 9,90€.',
      category: 'shipping',
    },
    {
      question: 'Livrez-vous à l\'international ?',
      answer: 'Oui, nous livrons dans toute l\'Europe. Les délais de livraison varient entre 3 et 7 jours ouvrés selon le pays de destination. Les frais de port sont calculés automatiquement lors du paiement.',
      category: 'shipping',
    },
    {
      question: 'Que faire si je reçois un article endommagé ?',
      answer: 'Si vous recevez un article endommagé, contactez-nous immédiatement avec des photos. Nous organiserons un retour gratuit et un remplacement ou remboursement dans les plus brefs délais.',
      category: 'shipping',
    },
    {
      question: 'Quelle est votre politique de retour ?',
      answer: 'Vous disposez de 14 jours à compter de la réception pour retourner tout article non utilisé dans son emballage d\'origine. Les retours sont gratuits. Le remboursement est effectué sous 5-7 jours ouvrés après réception du colis.',
      category: 'returns',
    },
    {
      question: 'Comment faire un retour ?',
      answer: 'Connectez-vous à votre compte, accédez à "Mes commandes", sélectionnez l\'article à retourner et imprimez votre étiquette de retour prépayée. Déposez ensuite votre colis dans un point relais.',
      category: 'returns',
    },
    {
      question: 'Puis-je échanger un article ?',
      answer: 'Oui, si vous souhaitez échanger un article, retournez d\'abord la pièce commandée, puis passez une nouvelle commande. Cela permet un traitement plus rapide de votre demande.',
      category: 'returns',
    },
    {
      question: 'Quels moyens de paiement acceptez-vous ?',
      answer: 'Nous acceptons les cartes bancaires (Visa, Mastercard, American Express), PayPal, virement bancaire et paiement en 3 ou 4 fois sans frais à partir de 100€.',
      category: 'payment',
    },
    {
      question: 'Le paiement est-il sécurisé ?',
      answer: 'Oui, tous les paiements sont sécurisés via notre partenaire certifié PCI-DSS. Vos données bancaires sont cryptées et ne sont jamais stockées sur nos serveurs.',
      category: 'payment',
    },
    {
      question: 'Comment savoir si une pièce est compatible avec mon appareil ?',
      answer: 'Utilisez notre outil de diagnostic IA qui analyse votre appareil et recommande automatiquement les pièces compatibles. Vous pouvez également vérifier la liste de compatibilité sur chaque fiche produit.',
      category: 'technical',
    },
    {
      question: 'Les pièces sont-elles d\'origine ?',
      answer: 'Nous proposons des pièces d\'origine constructeur et des pièces adaptables de qualité équivalente. Chaque fiche produit indique clairement le type de pièce proposée.',
      category: 'technical',
    },
    {
      question: 'Proposez-vous une assistance à l\'installation ?',
      answer: 'Oui, chaque pièce est livrée avec une notice détaillée. Notre service client est également disponible pour vous guider par téléphone ou par chat si vous avez besoin d\'aide lors de l\'installation.',
      category: 'technical',
    },
  ],
  en: [
    {
      question: 'How do I place an order?',
      answer: 'To place an order, add your items to the cart, then click "Checkout". You will be guided through the payment and delivery steps. You can also use our AI diagnosis to find the exact part you need.',
      category: 'orders',
    },
    {
      question: 'Can I modify my order after confirmation?',
      answer: 'Yes, you can modify your order within 2 hours of confirmation by contacting our customer service at +33 1 23 45 67 89. After this time, the order enters preparation and can no longer be modified.',
      category: 'orders',
    },
    {
      question: 'How can I track my order?',
      answer: 'You will receive an email with your tracking number as soon as your order is shipped. You can also track your order from your customer account in the "My Orders" section.',
      category: 'orders',
    },
    {
      question: 'What are the delivery times?',
      answer: 'We ship all in-stock orders within 24 working hours. Standard delivery takes 2-3 working days in mainland France. 24h express delivery is available as an option for €9.90.',
      category: 'shipping',
    },
    {
      question: 'Do you deliver internationally?',
      answer: 'Yes, we deliver throughout Europe. Delivery times vary between 3 and 7 working days depending on the destination country. Shipping costs are automatically calculated at checkout.',
      category: 'shipping',
    },
    {
      question: 'What if I receive a damaged item?',
      answer: 'If you receive a damaged item, contact us immediately with photos. We will arrange a free return and a replacement or refund as soon as possible.',
      category: 'shipping',
    },
    {
      question: 'What is your return policy?',
      answer: 'You have 14 days from receipt to return any unused item in its original packaging. Returns are free. Refunds are made within 5-7 working days after receipt of the package.',
      category: 'returns',
    },
    {
      question: 'How do I make a return?',
      answer: 'Log in to your account, go to "My Orders", select the item to return and print your prepaid return label. Then drop off your package at a collection point.',
      category: 'returns',
    },
    {
      question: 'Can I exchange an item?',
      answer: 'Yes, if you want to exchange an item, first return the ordered part, then place a new order. This allows for faster processing of your request.',
      category: 'returns',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit cards (Visa, Mastercard, American Express), PayPal, bank transfer and payment in 3 or 4 installments without fees from €100.',
      category: 'payment',
    },
    {
      question: 'Is payment secure?',
      answer: 'Yes, all payments are secured via our PCI-DSS certified partner. Your banking data is encrypted and never stored on our servers.',
      category: 'payment',
    },
    {
      question: 'How do I know if a part is compatible with my appliance?',
      answer: 'Use our AI diagnostic tool that analyzes your appliance and automatically recommends compatible parts. You can also check the compatibility list on each product page.',
      category: 'technical',
    },
    {
      question: 'Are the parts original?',
      answer: 'We offer original manufacturer parts and quality equivalent aftermarket parts. Each product page clearly indicates the type of part offered.',
      category: 'technical',
    },
    {
      question: 'Do you offer installation assistance?',
      answer: 'Yes, each part comes with detailed instructions. Our customer service is also available to guide you by phone or chat if you need help during installation.',
      category: 'technical',
    },
  ],
  it: [
    {
      question: 'Come posso effettuare un ordine?',
      answer: 'Per effettuare un ordine, aggiungi i tuoi articoli al carrello, poi clicca su "Procedi all\'acquisto". Sarai guidato attraverso i passaggi di pagamento e consegna. Puoi anche usare la nostra diagnosi AI per trovare il pezzo esatto di cui hai bisogno.',
      category: 'orders',
    },
    {
      question: 'Posso modificare il mio ordine dopo la conferma?',
      answer: 'Sì, puoi modificare il tuo ordine entro 2 ore dalla conferma contattando il nostro servizio clienti al +33 1 23 45 67 89. Dopo questo tempo, l\'ordine entra in preparazione e non può più essere modificato.',
      category: 'orders',
    },
    {
      question: 'Come posso tracciare il mio ordine?',
      answer: 'Riceverai un\'email con il numero di tracking non appena il tuo ordine sarà spedito. Puoi anche tracciare il tuo ordine dal tuo account cliente nella sezione "I miei ordini".',
      category: 'orders',
    },
    {
      question: 'Quali sono i tempi di consegna?',
      answer: 'Spediamo tutti gli ordini disponibili entro 24 ore lavorative. La consegna standard richiede 2-3 giorni lavorativi in Francia continentale. La consegna express 24h è disponibile come opzione per €9,90.',
      category: 'shipping',
    },
    {
      question: 'Consegnate all\'estero?',
      answer: 'Sì, consegniamo in tutta Europa. I tempi di consegna variano tra 3 e 7 giorni lavorativi a seconda del paese di destinazione. I costi di spedizione sono calcolati automaticamente al checkout.',
      category: 'shipping',
    },
    {
      question: 'Cosa fare se ricevo un articolo danneggiato?',
      answer: 'Se ricevi un articolo danneggiato, contattaci immediatamente con foto. Organizzeremo un reso gratuito e una sostituzione o rimborso il prima possibile.',
      category: 'shipping',
    },
    {
      question: 'Qual è la vostra politica di reso?',
      answer: 'Hai 14 giorni dal ricevimento per restituire qualsiasi articolo non utilizzato nella sua confezione originale. I resi sono gratuiti. I rimborsi vengono effettuati entro 5-7 giorni lavorativi dopo il ricevimento del pacco.',
      category: 'returns',
    },
    {
      question: 'Come posso fare un reso?',
      answer: 'Accedi al tuo account, vai su "I miei ordini", seleziona l\'articolo da restituire e stampa la tua etichetta di reso prepagata. Poi consegna il tuo pacco in un punto di raccolta.',
      category: 'returns',
    },
    {
      question: 'Posso scambiare un articolo?',
      answer: 'Sì, se vuoi scambiare un articolo, prima restituisci il pezzo ordinato, poi effettua un nuovo ordine. Questo permette un\'elaborazione più rapida della tua richiesta.',
      category: 'returns',
    },
    {
      question: 'Quali metodi di pagamento accettate?',
      answer: 'Accettiamo carte di credito (Visa, Mastercard, American Express), PayPal, bonifico bancario e pagamento in 3 o 4 rate senza spese a partire da €100.',
      category: 'payment',
    },
    {
      question: 'Il pagamento è sicuro?',
      answer: 'Sì, tutti i pagamenti sono protetti tramite il nostro partner certificato PCI-DSS. I tuoi dati bancari sono crittografati e mai memorizzati sui nostri server.',
      category: 'payment',
    },
    {
      question: 'Come posso sapere se un pezzo è compatibile con il mio elettrodomestico?',
      answer: 'Usa il nostro strumento di diagnosi AI che analizza il tuo elettrodomestico e consiglia automaticamente i pezzi compatibili. Puoi anche controllare l\'elenco di compatibilità su ogni scheda prodotto.',
      category: 'technical',
    },
    {
      question: 'I pezzi sono originali?',
      answer: 'Offriamo pezzi originali del produttore e pezzi aftermarket di qualità equivalente. Ogni scheda prodotto indica chiaramente il tipo di pezzo offerto.',
      category: 'technical',
    },
    {
      question: 'Offrite assistenza per l\'installazione?',
      answer: 'Sì, ogni pezzo viene fornito con istruzioni dettagliate. Il nostro servizio clienti è anche disponibile per guidarti per telefono o chat se hai bisogno di aiuto durante l\'installazione.',
      category: 'technical',
    },
  ],
  nl: [
    {
      question: 'Hoe plaats ik een bestelling?',
      answer: 'Om een bestelling te plaatsen, voeg je artikelen toe aan de winkelwagen en klik je op "Afrekenen". Je wordt door de betaling en levering geleid. Je kunt ook onze AI-diagnose gebruiken om het exacte onderdeel te vinden dat je nodig hebt.',
      category: 'orders',
    },
    {
      question: 'Kan ik mijn bestelling wijzigen na bevestiging?',
      answer: 'Ja, je kunt je bestelling binnen 2 uur na bevestiging wijzigen door contact op te nemen met onze klantenservice op +33 1 23 45 67 89. Na deze tijd gaat de bestelling in voorbereiding en kan deze niet meer worden gewijzigd.',
      category: 'orders',
    },
    {
      question: 'Hoe kan ik mijn bestelling volgen?',
      answer: 'Je ontvangt een e-mail met je trackingnummer zodra je bestelling is verzonden. Je kunt je bestelling ook volgen vanuit je klantenaccount in het gedeelte "Mijn bestellingen".',
      category: 'orders',
    },
    {
      question: 'Wat zijn de levertijden?',
      answer: 'We verzenden alle voorradige bestellingen binnen 24 werkuren. Standaardlevering duurt 2-3 werkdagen in Frankrijk. 24u express levering is beschikbaar als optie voor €9,90.',
      category: 'shipping',
    },
    {
      question: 'Leveren jullie internationaal?',
      answer: 'Ja, we leveren door heel Europa. Levertijden variëren tussen 3 en 7 werkdagen afhankelijk van het bestemmingsland. Verzendkosten worden automatisch berekend bij het afrekenen.',
      category: 'shipping',
    },
    {
      question: 'Wat als ik een beschadigd artikel ontvang?',
      answer: 'Als je een beschadigd artikel ontvangt, neem dan onmiddellijk contact met ons op met foto\'s. We zullen een gratis retour en een vervanging of terugbetaling zo snel mogelijk regelen.',
      category: 'shipping',
    },
    {
      question: 'Wat is uw retourbeleid?',
      answer: 'Je hebt 14 dagen vanaf ontvangst om elk ongebruikt artikel in de originele verpakking te retourneren. Retouren zijn gratis. Terugbetalingen worden binnen 5-7 werkdagen na ontvangst van het pakket uitgevoerd.',
      category: 'returns',
    },
    {
      question: 'Hoe doe ik een retour?',
      answer: 'Log in op je account, ga naar "Mijn bestellingen", selecteer het artikel om te retourneren en print je vooraf betaalde retouretiket. Lever vervolgens je pakket in bij een afhaalpunt.',
      category: 'returns',
    },
    {
      question: 'Kan ik een artikel ruilen?',
      answer: 'Ja, als je een artikel wilt ruilen, retourneer dan eerst het bestelde onderdeel en plaats vervolgens een nieuwe bestelling. Dit zorgt voor een snellere verwerking van je verzoek.',
      category: 'returns',
    },
    {
      question: 'Welke betaalmethoden accepteren jullie?',
      answer: 'We accepteren creditcards (Visa, Mastercard, American Express), PayPal, bankoverschrijving en betaling in 3 of 4 termijnen zonder kosten vanaf €100.',
      category: 'payment',
    },
    {
      question: 'Is betaling veilig?',
      answer: 'Ja, alle betalingen zijn beveiligd via onze PCI-DSS gecertificeerde partner. Je bankgegevens zijn versleuteld en worden nooit op onze servers opgeslagen.',
      category: 'payment',
    },
    {
      question: 'Hoe weet ik of een onderdeel compatibel is met mijn apparaat?',
      answer: 'Gebruik onze AI-diagnosetool die je apparaat analyseert en automatisch compatibele onderdelen aanbeveelt. Je kunt ook de compatibiliteitslijst op elke productpagina controleren.',
      category: 'technical',
    },
    {
      question: 'Zijn de onderdelen origineel?',
      answer: 'We bieden originele fabrikantonderdelen en kwaliteit equivalente aftermarket onderdelen. Elke productpagina geeft duidelijk aan welk type onderdeel wordt aangeboden.',
      category: 'technical',
    },
    {
      question: 'Bieden jullie installatie-assistentie?',
      answer: 'Ja, elk onderdeel wordt geleverd met gedetailleerde instructies. Onze klantenservice is ook beschikbaar om je per telefoon of chat te begeleiden als je hulp nodig hebt tijdens de installatie.',
      category: 'technical',
    },
  ],
  de: [
    {
      question: 'Wie gebe ich eine Bestellung auf?',
      answer: 'Um eine Bestellung aufzugeben, fügen Sie Ihre Artikel dem Warenkorb hinzu und klicken Sie dann auf "Zur Kasse". Sie werden durch die Zahlungs- und Lieferungs schritte geführt. Sie können auch unsere KI-Diagnose verwenden, um das genaue Teil zu finden, das Sie benötigen.',
      category: 'orders',
    },
    {
      question: 'Kann ich meine Bestellung nach Bestätigung ändern?',
      answer: 'Ja, Sie können Ihre Bestellung innerhalb von 2 Stunden nach Bestätigung ändern, indem Sie unseren Kundenservice unter +33 1 23 45 67 89 kontaktieren. Danach geht die Bestellung in Vorbereitung und kann nicht mehr geändert werden.',
      category: 'orders',
    },
    {
      question: 'Wie kann ich meine Bestellung verfolgen?',
      answer: 'Sie erhalten eine E-Mail mit Ihrer Tracking-Nummer, sobald Ihre Bestellung versendet wurde. Sie können Ihre Bestellung auch von Ihrem Kundenkonto aus im Bereich "Meine Bestellungen" verfolgen.',
      category: 'orders',
    },
    {
      question: 'Was sind die Lieferzeiten?',
      answer: 'Wir versenden alle vorrätigen Bestellungen innerhalb von 24 Arbeitsstunden. Die Standardlieferung dauert 2-3 Arbeitstage in Frankreich. 24h Expresslieferung ist als Option für 9,90€ verfügbar.',
      category: 'shipping',
    },
    {
      question: 'Liefern Sie international?',
      answer: 'Ja, wir liefern in ganz Europa. Die Lieferzeiten variieren zwischen 3 und 7 Arbeitstagen je nach Bestimmungsland. Die Versandkosten werden beim Bezahlen automatisch berechnet.',
      category: 'shipping',
    },
    {
      question: 'Was ist, wenn ich einen beschädigten Artikel erhalte?',
      answer: 'Wenn Sie einen beschädigten Artikel erhalten, kontaktieren Sie uns sofort mit Fotos. Wir werden eine kostenlose Rücksendung und einen Ersatz oder eine Rückerstattung so schnell wie möglich arrangieren.',
      category: 'shipping',
    },
    {
      question: 'Was ist Ihre Rückgaberegelung?',
      answer: 'Sie haben 14 Tage ab Erhalt, um einen unbenutzten Artikel in seiner Originalverpackung zurückzugeben. Rücksendungen sind kostenlos. Rückerstattungen erfolgen innerhalb von 5-7 Arbeitstagen nach Erhalt des Pakets.',
      category: 'returns',
    },
    {
      question: 'Wie gebe ich eine Rücksendung auf?',
      answer: 'Melden Sie sich in Ihrem Konto an, gehen Sie zu "Meine Bestellungen", wählen Sie den zurückzugebenden Artikel aus und drucken Sie Ihr vorausbezahltes Rücksendeetikett. Geben Sie dann Ihr Paket an einer Abholstelle ab.',
      category: 'returns',
    },
    {
      question: 'Kann ich einen Artikel umtauschen?',
      answer: 'Ja, wenn Sie einen Artikel umtauschen möchten, senden Sie zuerst das bestellte Teil zurück und geben Sie dann eine neue Bestellung auf. Dies ermöglicht eine schnellere Bearbeitung Ihrer Anfrage.',
      category: 'returns',
    },
    {
      question: 'Welche Zahlungsmethoden akzeptieren Sie?',
      answer: 'Wir akzeptieren Kreditkarten (Visa, Mastercard, American Express), PayPal, Banküberweisung und Zahlung in 3 oder 4 Raten ohne Gebühren ab 100€.',
      category: 'payment',
    },
    {
      question: 'Ist die Zahlung sicher?',
      answer: 'Ja, alle Zahlungen sind über unseren PCI-DSS-zertifizierten Partner gesichert. Ihre Bankdaten sind verschlüsselt und werden niemals auf unseren Servern gespeichert.',
      category: 'payment',
    },
    {
      question: 'Wie weiß ich, ob ein Teil mit meinem Gerät kompatibel ist?',
      answer: 'Verwenden Sie unser KI-Diagnosetool, das Ihr Gerät analysiert und automatisch kompatible Teile empfiehlt. Sie können auch die Kompatibilitätsliste auf jeder Produktseite überprüfen.',
      category: 'technical',
    },
    {
      question: 'Sind die Teile original?',
      answer: 'Wir bieten Original-Herstellerteile und qualitativ gleichwertige Aftermarket-Teile an. Jede Produktseite gibt klar an, welche Art von Teil angeboten wird.',
      category: 'technical',
    },
    {
      question: 'Bieten Sie Installationshilfe an?',
      answer: 'Ja, jedes Teil wird mit einer detaillierten Anleitung geliefert. Unser Kundenservice steht auch zur Verfügung, um Sie telefonisch oder per Chat zu unterstützen, wenn Sie während der Installation Hilfe benötigen.',
      category: 'technical',
    },
  ],
};

export function FAQPage() {
  const { language } = useLanguage();
  const t = {
    fr: {
      title: 'Questions Fréquentes',
      subtitle: 'Trouvez toutes les réponses à vos questions',
      searchPlaceholder: 'Rechercher une question...',
      allCategories: 'Toutes les catégories',
      categories: {
        orders: 'Commandes',
        shipping: 'Livraison',
        returns: 'Retours',
        payment: 'Paiement',
        technical: 'Technique',
      },
      contact: 'Vous n\'avez pas trouvé votre réponse ?',
      contactButton: 'Contactez notre support',
    },
    en: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find all the answers to your questions',
      searchPlaceholder: 'Search for a question...',
      allCategories: 'All categories',
      categories: {
        orders: 'Orders',
        shipping: 'Shipping',
        returns: 'Returns',
        payment: 'Payment',
        technical: 'Technical',
      },
      contact: 'Didn\'t find your answer?',
      contactButton: 'Contact our support',
    },
    it: {
      title: 'Domande Frequenti',
      subtitle: 'Trova tutte le risposte alle tue domande',
      searchPlaceholder: 'Cerca una domanda...',
      allCategories: 'Tutte le categorie',
      categories: {
        orders: 'Ordini',
        shipping: 'Spedizione',
        returns: 'Resi',
        payment: 'Pagamento',
        technical: 'Tecnico',
      },
      contact: 'Non hai trovato la risposta?',
      contactButton: 'Contatta il nostro supporto',
    },
    nl: {
      title: 'Veelgestelde Vragen',
      subtitle: 'Vind alle antwoorden op je vragen',
      searchPlaceholder: 'Zoek naar een vraag...',
      allCategories: 'Alle categorieën',
      categories: {
        orders: 'Bestellingen',
        shipping: 'Verzending',
        returns: 'Retouren',
        payment: 'Betaling',
        technical: 'Technisch',
      },
      contact: 'Je antwoord niet gevonden?',
      contactButton: 'Neem contact op met onze support',
    },
    de: {
      title: 'Häufig gestellte Fragen',
      subtitle: 'Finden Sie alle Antworten auf Ihre Fragen',
      searchPlaceholder: 'Nach einer Frage suchen...',
      allCategories: 'Alle Kategorien',
      categories: {
        orders: 'Bestellungen',
        shipping: 'Versand',
        returns: 'Rücksendungen',
        payment: 'Zahlung',
        technical: 'Technisch',
      },
      contact: 'Ihre Antwort nicht gefunden?',
      contactButton: 'Kontaktieren Sie unseren Support',
    },
  }[language];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = faqData[language] || faqData.fr;

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-lg opacity-90 mb-8">{t.subtitle}</p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:border-white/40 backdrop-blur-sm"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === 'all'
                ? 'bg-primary text-white'
                : 'bg-white text-foreground hover:bg-secondary'
            }`}
          >
            {t.allCategories}
          </button>
          {Object.entries(t.categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === key
                  ? 'bg-primary text-white'
                  : 'bg-white text-foreground hover:bg-secondary'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-border overflow-hidden transition-shadow hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
              >
                <span className="font-medium pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-muted-foreground border-t border-border pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            {language === 'fr' && 'Aucune question trouvée pour votre recherche.'}
            {language === 'en' && 'No questions found for your search.'}
            {language === 'it' && 'Nessuna domanda trovata per la tua ricerca.'}
            {language === 'nl' && 'Geen vragen gevonden voor je zoekopdracht.'}
            {language === 'de' && 'Keine Fragen für Ihre Suche gefunden.'}
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 text-center border border-primary/20">
          <h2 className="text-2xl font-bold mb-3">{t.contact}</h2>
          <p className="text-muted-foreground mb-6">
            {language === 'fr' && 'Notre équipe est là pour vous aider du lundi au vendredi, de 9h à 18h.'}
            {language === 'en' && 'Our team is here to help you Monday to Friday, 9am to 6pm.'}
            {language === 'it' && 'Il nostro team è qui per aiutarti dal lunedì al venerdì, dalle 9 alle 18.'}
            {language === 'nl' && 'Ons team is er om je te helpen van maandag tot vrijdag, van 9u tot 18u.'}
            {language === 'de' && 'Unser Team ist hier, um Ihnen von Montag bis Freitag, 9 bis 18 Uhr zu helfen.'}
          </p>
          <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            {t.contactButton}
          </button>
        </div>
      </div>
    </div>
  );
}
