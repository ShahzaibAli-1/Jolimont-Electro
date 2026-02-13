import { RotateCcw, Package, CheckCircle, Truck, CreditCard, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function ReturnsPage() {
  const { language } = useLanguage();
  
  const t = {
    fr: {
      title: 'Retours & Remboursements',
      subtitle: 'Retours gratuits sous 14 jours',
      intro: 'Chez Jolimont Electro, nous voulons que vous soyez 100% satisfait. Si une pièce ne convient pas, vous pouvez la retourner gratuitement et facilement.',
      
      policy: {
        title: 'Notre Politique de Retour',
        cards: [
          {
            icon: Clock,
            title: '14 jours pour changer d\'avis',
            description: 'Vous disposez de 14 jours à compter de la réception pour retourner tout article, sans avoir à vous justifier.',
          },
          {
            icon: Truck,
            title: 'Retours gratuits',
            description: 'Nous prenons en charge les frais de retour. Imprimez votre étiquette prépayée et déposez votre colis en point relais.',
          },
          {
            icon: CreditCard,
            title: 'Remboursement rapide',
            description: 'Dès réception de votre retour, nous procédons au remboursement sous 5-7 jours ouvrés sur votre moyen de paiement initial.',
          },
        ],
      },
      
      conditions: {
        title: 'Conditions de Retour',
        subtitle: 'Pour être accepté, votre retour doit respecter ces conditions :',
        items: [
          {
            icon: Package,
            title: 'Emballage d\'origine',
            description: 'La pièce doit être dans son emballage d\'origine, non ouvert si possible, avec tous les accessoires et la notice.',
          },
          {
            icon: CheckCircle,
            title: 'État neuf',
            description: 'L\'article ne doit pas avoir été installé, utilisé ou endommagé. Les pièces montées ne peuvent être reprises.',
          },
          {
            icon: RotateCcw,
            title: 'Délai respecté',
            description: 'La demande de retour doit être effectuée dans les 14 jours suivant la réception de la commande.',
          },
        ],
      },
      
      howTo: {
        title: 'Comment Effectuer un Retour ?',
        steps: [
          {
            number: '1',
            title: 'Demandez un retour',
            description: 'Connectez-vous à votre compte et accédez à "Mes commandes". Sélectionnez l\'article à retourner et indiquez le motif.',
          },
          {
            number: '2',
            title: 'Imprimez l\'étiquette',
            description: 'Vous recevrez par email une étiquette de retour prépayée. Imprimez-la et collez-la sur votre colis bien emballé.',
          },
          {
            number: '3',
            title: 'Déposez le colis',
            description: 'Déposez votre colis dans un point relais ou bureau de poste. Conservez le reçu de dépôt comme preuve.',
          },
          {
            number: '4',
            title: 'Recevez votre remboursement',
            description: 'Une fois le colis reçu et vérifié, vous recevrez votre remboursement sous 5-7 jours ouvrés.',
          },
        ],
      },
      
      exceptions: {
        title: 'Cas Particuliers',
        items: [
          {
            title: 'Article défectueux ou endommagé',
            description: 'Si vous recevez un article défectueux ou endommagé, contactez-nous immédiatement avec des photos. Nous organiserons un retour prioritaire et un remplacement ou remboursement express.',
          },
          {
            title: 'Erreur de commande',
            description: 'Si nous avons expédié le mauvais article, nous prenons en charge le retour et l\'envoi de la bonne pièce sans frais supplémentaires.',
          },
          {
            title: 'Problème de compatibilité',
            description: 'Si notre IA a recommandé une pièce qui s\'avère incompatible malgré les informations fournies, le retour est prioritaire et gratuit.',
          },
        ],
      },
      
      refund: {
        title: 'Remboursement',
        details: [
          'Le remboursement est effectué sur le moyen de paiement utilisé lors de l\'achat',
          'Délai : 5-7 jours ouvrés après réception du retour',
          'Le montant remboursé inclut le prix de l\'article et les frais de port initiaux',
          'En cas d\'échange, aucun frais de port supplémentaire',
        ],
      },
      
      noReturn: {
        title: 'Articles Non Retournables',
        description: 'Pour des raisons d\'hygiène et de sécurité, certains articles ne peuvent être retournés :',
        items: [
          'Pièces fabriquées sur mesure ou personnalisées',
          'Articles installés ou ayant servi',
          'Joints et filtres descellés',
          'Câbles électriques coupés à la longueur demandée',
        ],
      },
      
      contact: {
        title: 'Besoin d\'aide pour un retour ?',
        description: 'Notre équipe est là pour vous accompagner',
        button: 'Contacter le service retours',
        alternative: 'Ou appelez-nous au +33 1 23 45 67 89',
      },
    },
    en: {
      title: 'Returns & Refunds',
      subtitle: 'Free returns within 14 days',
      intro: 'At Jolimont Electro, we want you to be 100% satisfied. If a part doesn\'t suit you, you can return it for free and easily.',
      
      policy: {
        title: 'Our Return Policy',
        cards: [
          {
            icon: Clock,
            title: '14 days to change your mind',
            description: 'You have 14 days from receipt to return any item, without having to justify yourself.',
          },
          {
            icon: Truck,
            title: 'Free returns',
            description: 'We cover return costs. Print your prepaid label and drop off your package at a collection point.',
          },
          {
            icon: CreditCard,
            title: 'Fast refund',
            description: 'Upon receipt of your return, we process the refund within 5-7 business days to your original payment method.',
          },
        ],
      },
      
      conditions: {
        title: 'Return Conditions',
        subtitle: 'To be accepted, your return must meet these conditions:',
        items: [
          {
            icon: Package,
            title: 'Original packaging',
            description: 'The part must be in its original packaging, unopened if possible, with all accessories and instructions.',
          },
          {
            icon: CheckCircle,
            title: 'New condition',
            description: 'The item must not have been installed, used or damaged. Mounted parts cannot be taken back.',
          },
          {
            icon: RotateCcw,
            title: 'Deadline respected',
            description: 'The return request must be made within 14 days of receiving the order.',
          },
        ],
      },
      
      howTo: {
        title: 'How to Make a Return?',
        steps: [
          {
            number: '1',
            title: 'Request a return',
            description: 'Log in to your account and go to "My Orders". Select the item to return and indicate the reason.',
          },
          {
            number: '2',
            title: 'Print the label',
            description: 'You will receive a prepaid return label by email. Print it and stick it on your well-packaged parcel.',
          },
          {
            number: '3',
            title: 'Drop off the package',
            description: 'Drop off your package at a collection point or post office. Keep the deposit receipt as proof.',
          },
          {
            number: '4',
            title: 'Receive your refund',
            description: 'Once the package is received and verified, you will receive your refund within 5-7 business days.',
          },
        ],
      },
      
      exceptions: {
        title: 'Special Cases',
        items: [
          {
            title: 'Defective or damaged item',
            description: 'If you receive a defective or damaged item, contact us immediately with photos. We will arrange a priority return and an express replacement or refund.',
          },
          {
            title: 'Order error',
            description: 'If we shipped the wrong item, we cover the return and shipping of the correct part at no additional cost.',
          },
          {
            title: 'Compatibility issue',
            description: 'If our AI recommended a part that turns out to be incompatible despite the information provided, the return is priority and free.',
          },
        ],
      },
      
      refund: {
        title: 'Refund',
        details: [
          'The refund is made to the payment method used at purchase',
          'Timeframe: 5-7 business days after receipt of return',
          'The refunded amount includes the item price and initial shipping costs',
          'In case of exchange, no additional shipping costs',
        ],
      },
      
      noReturn: {
        title: 'Non-Returnable Items',
        description: 'For hygiene and safety reasons, some items cannot be returned:',
        items: [
          'Custom-made or personalized parts',
          'Installed or used items',
          'Unsealed seals and filters',
          'Electrical cables cut to requested length',
        ],
      },
      
      contact: {
        title: 'Need help with a return?',
        description: 'Our team is here to help you',
        button: 'Contact returns service',
        alternative: 'Or call us at +33 1 23 45 67 89',
      },
    },
    it: {
      title: 'Resi e Rimborsi',
      subtitle: 'Resi gratuiti entro 14 giorni',
      intro: 'Da Jolimont Electro, vogliamo che tu sia soddisfatto al 100%. Se un pezzo non ti soddisfa, puoi restituirlo gratuitamente e facilmente.',
      
      policy: {
        title: 'La Nostra Politica di Reso',
        cards: [
          {
            icon: Clock,
            title: '14 giorni per cambiare idea',
            description: 'Hai 14 giorni dal ricevimento per restituire qualsiasi articolo, senza dover giustificarti.',
          },
          {
            icon: Truck,
            title: 'Resi gratuiti',
            description: 'Copriamo i costi di reso. Stampa la tua etichetta prepagata e consegna il pacco in un punto di raccolta.',
          },
          {
            icon: CreditCard,
            title: 'Rimborso rapido',
            description: 'Al ricevimento del reso, elaboriamo il rimborso entro 5-7 giorni lavorativi sul metodo di pagamento originale.',
          },
        ],
      },
      
      conditions: {
        title: 'Condizioni di Reso',
        subtitle: 'Per essere accettato, il tuo reso deve rispettare queste condizioni:',
        items: [
          {
            icon: Package,
            title: 'Imballaggio originale',
            description: 'Il pezzo deve essere nel suo imballaggio originale, non aperto se possibile, con tutti gli accessori e le istruzioni.',
          },
          {
            icon: CheckCircle,
            title: 'Condizione nuova',
            description: 'L\'articolo non deve essere stato installato, utilizzato o danneggiato. I pezzi montati non possono essere ripresi.',
          },
          {
            icon: RotateCcw,
            title: 'Termine rispettato',
            description: 'La richiesta di reso deve essere effettuata entro 14 giorni dal ricevimento dell\'ordine.',
          },
        ],
      },
      
      howTo: {
        title: 'Come Effettuare un Reso?',
        steps: [
          {
            number: '1',
            title: 'Richiedi un reso',
            description: 'Accedi al tuo account e vai su "I miei ordini". Seleziona l\'articolo da restituire e indica il motivo.',
          },
          {
            number: '2',
            title: 'Stampa l\'etichetta',
            description: 'Riceverai un\'etichetta di reso prepagata via email. Stampala e attaccala sul tuo pacco ben imballato.',
          },
          {
            number: '3',
            title: 'Consegna il pacco',
            description: 'Consegna il tuo pacco in un punto di raccolta o ufficio postale. Conserva la ricevuta di deposito come prova.',
          },
          {
            number: '4',
            title: 'Ricevi il rimborso',
            description: 'Una volta ricevuto e verificato il pacco, riceverai il rimborso entro 5-7 giorni lavorativi.',
          },
        ],
      },
      
      exceptions: {
        title: 'Casi Speciali',
        items: [
          {
            title: 'Articolo difettoso o danneggiato',
            description: 'Se ricevi un articolo difettoso o danneggiato, contattaci immediatamente con foto. Organizzeremo un reso prioritario e una sostituzione o rimborso express.',
          },
          {
            title: 'Errore nell\'ordine',
            description: 'Se abbiamo spedito l\'articolo sbagliato, copriamo il reso e la spedizione del pezzo corretto senza costi aggiuntivi.',
          },
          {
            title: 'Problema di compatibilità',
            description: 'Se la nostra IA ha raccomandato un pezzo che risulta incompatibile nonostante le informazioni fornite, il reso è prioritario e gratuito.',
          },
        ],
      },
      
      refund: {
        title: 'Rimborso',
        details: [
          'Il rimborso viene effettuato sul metodo di pagamento utilizzato all\'acquisto',
          'Tempi: 5-7 giorni lavorativi dopo la ricezione del reso',
          'L\'importo rimborsato include il prezzo dell\'articolo e le spese di spedizione iniziali',
          'In caso di scambio, nessuna spesa di spedizione aggiuntiva',
        ],
      },
      
      noReturn: {
        title: 'Articoli Non Restituibili',
        description: 'Per motivi di igiene e sicurezza, alcuni articoli non possono essere restituiti:',
        items: [
          'Pezzi realizzati su misura o personalizzati',
          'Articoli installati o utilizzati',
          'Guarnizioni e filtri sigillati',
          'Cavi elettrici tagliati alla lunghezza richiesta',
        ],
      },
      
      contact: {
        title: 'Hai bisogno di aiuto per un reso?',
        description: 'Il nostro team è qui per aiutarti',
        button: 'Contatta il servizio resi',
        alternative: 'Oppure chiamaci al +33 1 23 45 67 89',
      },
    },
    nl: {
      title: 'Retouren & Terugbetalingen',
      subtitle: 'Gratis retouren binnen 14 dagen',
      intro: 'Bij Jolimont Electro willen we dat u 100% tevreden bent. Als een onderdeel niet geschikt is, kunt u het gratis en eenvoudig retourneren.',
      
      policy: {
        title: 'Ons Retourbeleid',
        cards: [
          {
            icon: Clock,
            title: '14 dagen bedenktijd',
            description: 'U heeft 14 dagen vanaf ontvangst om elk artikel te retourneren, zonder u te hoeven verantwoorden.',
          },
          {
            icon: Truck,
            title: 'Gratis retouren',
            description: 'Wij dekken de retourkosten. Print uw voorafbetaalde label en lever uw pakket in bij een afhaalpunt.',
          },
          {
            icon: CreditCard,
            title: 'Snelle terugbetaling',
            description: 'Bij ontvangst van uw retour verwerken we de terugbetaling binnen 5-7 werkdagen naar uw oorspronkelijke betaalmethode.',
          },
        ],
      },
      
      conditions: {
        title: 'Retourvoorwaarden',
        subtitle: 'Om geaccepteerd te worden, moet uw retour aan deze voorwaarden voldoen:',
        items: [
          {
            icon: Package,
            title: 'Originele verpakking',
            description: 'Het onderdeel moet in de originele verpakking zitten, indien mogelijk ongeopend, met alle accessoires en instructies.',
          },
          {
            icon: CheckCircle,
            title: 'Nieuwe staat',
            description: 'Het artikel mag niet geïnstalleerd, gebruikt of beschadigd zijn. Gemonteerde onderdelen kunnen niet worden teruggenomen.',
          },
          {
            icon: RotateCcw,
            title: 'Termijn gerespecteerd',
            description: 'Het retourverzoek moet binnen 14 dagen na ontvangst van de bestelling worden gedaan.',
          },
        ],
      },
      
      howTo: {
        title: 'Hoe een Retour Doen?',
        steps: [
          {
            number: '1',
            title: 'Vraag een retour aan',
            description: 'Log in op uw account en ga naar "Mijn bestellingen". Selecteer het artikel om te retourneren en geef de reden aan.',
          },
          {
            number: '2',
            title: 'Print het label',
            description: 'U ontvangt per e-mail een voorafbetaald retouretiket. Print het en plak het op uw goed verpakte pakket.',
          },
          {
            number: '3',
            title: 'Lever het pakket in',
            description: 'Lever uw pakket in bij een afhaalpunt of postkantoor. Bewaar het ontvangstbewijs als bewijs.',
          },
          {
            number: '4',
            title: 'Ontvang uw terugbetaling',
            description: 'Zodra het pakket is ontvangen en geverifieerd, ontvangt u uw terugbetaling binnen 5-7 werkdagen.',
          },
        ],
      },
      
      exceptions: {
        title: 'Bijzondere Gevallen',
        items: [
          {
            title: 'Defect of beschadigd artikel',
            description: 'Als u een defect of beschadigd artikel ontvangt, neem dan onmiddellijk contact met ons op met foto\'s. We regelen een prioritaire retour en een snelle vervanging of terugbetaling.',
          },
          {
            title: 'Bestelfout',
            description: 'Als we het verkeerde artikel hebben verzonden, dekken we de retour en verzending van het juiste onderdeel zonder extra kosten.',
          },
          {
            title: 'Compatibiliteitsprobleem',
            description: 'Als onze AI een onderdeel heeft aanbevolen dat ondanks de verstrekte informatie incompatibel blijkt te zijn, is de retour prioritair en gratis.',
          },
        ],
      },
      
      refund: {
        title: 'Terugbetaling',
        details: [
          'De terugbetaling wordt gedaan naar de betaalmethode die bij de aankoop is gebruikt',
          'Termijn: 5-7 werkdagen na ontvangst van de retour',
          'Het terugbetaalde bedrag omvat de artikelprijs en initiële verzendkosten',
          'Bij ruiling geen extra verzendkosten',
        ],
      },
      
      noReturn: {
        title: 'Niet-retourneerbare Artikelen',
        description: 'Om hygiënische en veiligheidsredenen kunnen sommige artikelen niet worden geretourneerd:',
        items: [
          'Op maat gemaakte of gepersonaliseerde onderdelen',
          'Geïnstalleerde of gebruikte artikelen',
          'Geopende pakkingen en filters',
          'Elektrische kabels op aangevraagde lengte gesneden',
        ],
      },
      
      contact: {
        title: 'Hulp nodig bij een retour?',
        description: 'Ons team staat klaar om u te helpen',
        button: 'Neem contact op met retourservice',
        alternative: 'Of bel ons op +33 1 23 45 67 89',
      },
    },
    de: {
      title: 'Rücksendungen & Rückerstattungen',
      subtitle: 'Kostenlose Rücksendungen innerhalb von 14 Tagen',
      intro: 'Bei Jolimont Electro möchten wir, dass Sie zu 100% zufrieden sind. Wenn ein Teil nicht passt, können Sie es kostenlos und einfach zurücksenden.',
      
      policy: {
        title: 'Unsere Rückgaberegelung',
        cards: [
          {
            icon: Clock,
            title: '14 Tage Bedenkzeit',
            description: 'Sie haben 14 Tage ab Erhalt, um jeden Artikel zurückzugeben, ohne sich rechtfertigen zu müssen.',
          },
          {
            icon: Truck,
            title: 'Kostenlose Rücksendungen',
            description: 'Wir übernehmen die Rücksendekosten. Drucken Sie Ihr vorausbezahltes Etikett und geben Sie Ihr Paket an einer Abholstelle ab.',
          },
          {
            icon: CreditCard,
            title: 'Schnelle Rückerstattung',
            description: 'Nach Erhalt Ihrer Rücksendung bearbeiten wir die Rückerstattung innerhalb von 5-7 Werktagen auf Ihre ursprüngliche Zahlungsmethode.',
          },
        ],
      },
      
      conditions: {
        title: 'Rückgabebedingungen',
        subtitle: 'Um akzeptiert zu werden, muss Ihre Rücksendung diese Bedingungen erfüllen:',
        items: [
          {
            icon: Package,
            title: 'Originalverpackung',
            description: 'Das Teil muss in der Originalverpackung sein, wenn möglich ungeöffnet, mit allem Zubehör und Anleitung.',
          },
          {
            icon: CheckCircle,
            title: 'Neuzustand',
            description: 'Der Artikel darf nicht installiert, verwendet oder beschädigt worden sein. Montierte Teile können nicht zurückgenommen werden.',
          },
          {
            icon: RotateCcw,
            title: 'Frist eingehalten',
            description: 'Der Rücksendungsantrag muss innerhalb von 14 Tagen nach Erhalt der Bestellung gestellt werden.',
          },
        ],
      },
      
      howTo: {
        title: 'Wie erfolgt eine Rücksendung?',
        steps: [
          {
            number: '1',
            title: 'Rücksendung beantragen',
            description: 'Melden Sie sich in Ihrem Konto an und gehen Sie zu "Meine Bestellungen". Wählen Sie den zurückzugebenden Artikel aus und geben Sie den Grund an.',
          },
          {
            number: '2',
            title: 'Etikett drucken',
            description: 'Sie erhalten per E-Mail ein vorausbezahltes Rücksendeetikett. Drucken Sie es aus und kleben Sie es auf Ihr gut verpacktes Paket.',
          },
          {
            number: '3',
            title: 'Paket abgeben',
            description: 'Geben Sie Ihr Paket an einer Abholstelle oder Postfiliale ab. Bewahren Sie den Abgabebeleg als Nachweis auf.',
          },
          {
            number: '4',
            title: 'Rückerstattung erhalten',
            description: 'Sobald das Paket empfangen und überprüft wurde, erhalten Sie Ihre Rückerstattung innerhalb von 5-7 Werktagen.',
          },
        ],
      },
      
      exceptions: {
        title: 'Sonderfälle',
        items: [
          {
            title: 'Defekter oder beschädigter Artikel',
            description: 'Wenn Sie einen defekten oder beschädigten Artikel erhalten, kontaktieren Sie uns sofort mit Fotos. Wir arrangieren eine prioritäre Rücksendung und einen schnellen Ersatz oder Rückerstattung.',
          },
          {
            title: 'Bestellfehler',
            description: 'Wenn wir den falschen Artikel versandt haben, übernehmen wir die Rücksendung und den Versand des richtigen Teils ohne zusätzliche Kosten.',
          },
          {
            title: 'Kompatibilitätsproblem',
            description: 'Wenn unsere KI ein Teil empfohlen hat, das sich trotz der bereitgestellten Informationen als inkompatibel herausstellt, ist die Rücksendung prioritär und kostenlos.',
          },
        ],
      },
      
      refund: {
        title: 'Rückerstattung',
        details: [
          'Die Rückerstattung erfolgt auf die beim Kauf verwendete Zahlungsmethode',
          'Zeitrahmen: 5-7 Werktage nach Erhalt der Rücksendung',
          'Der erstattete Betrag umfasst den Artikelpreis und die anfänglichen Versandkosten',
          'Bei Umtausch keine zusätzlichen Versandkosten',
        ],
      },
      
      noReturn: {
        title: 'Nicht Rücksendbare Artikel',
        description: 'Aus hygienischen und Sicherheitsgründen können einige Artikel nicht zurückgegeben werden:',
        items: [
          'Maßgefertigte oder personalisierte Teile',
          'Installierte oder benutzte Artikel',
          'Entsiegelte Dichtungen und Filter',
          'Elektrische Kabel auf angeforderte Länge geschnitten',
        ],
      },
      
      contact: {
        title: 'Benötigen Sie Hilfe bei einer Rücksendung?',
        description: 'Unser Team steht Ihnen zur Verfügung',
        button: 'Rücksendungsservice kontaktieren',
        alternative: 'Oder rufen Sie uns an unter +33 1 23 45 67 89',
      },
    },
  }[language];

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <RotateCcw className="w-20 h-20 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl opacity-90 mb-2">{t.subtitle}</p>
          <p className="text-base opacity-80 max-w-3xl mx-auto">{t.intro}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Policy Cards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t.policy.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.policy.cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-border hover:shadow-lg transition-shadow text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Conditions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-3 text-center">{t.conditions.title}</h2>
          <p className="text-center text-muted-foreground mb-8">{t.conditions.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {t.conditions.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border-2 border-border"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* How To */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t.howTo.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.howTo.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 h-full">
                  <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-xl mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {index < t.howTo.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/4 -right-3 w-6 h-0.5 bg-green-300"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Exceptions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t.exceptions.title}</h2>
          <div className="space-y-4">
            {t.exceptions.items.map((item, index) => (
              <div
                key={index}
                className="bg-blue-50 rounded-xl p-6 border border-blue-200"
              >
                <h3 className="font-bold text-lg mb-2 text-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Refund Details */}
        <section className="mb-16">
          <div className="bg-white rounded-xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold">{t.refund.title}</h2>
            </div>
            <ul className="space-y-3">
              {t.refund.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Non-Returnable */}
        <section className="mb-16">
          <div className="bg-red-50 rounded-xl p-8 border border-red-200">
            <h2 className="text-2xl font-bold mb-3">{t.noReturn.title}</h2>
            <p className="text-muted-foreground mb-4">{t.noReturn.description}</p>
            <ul className="space-y-2">
              {t.noReturn.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <div className="w-full h-full rounded-full border-2 border-red-600 flex items-center justify-center">
                      <div className="w-2.5 h-0.5 bg-red-600"></div>
                    </div>
                  </div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact CTA */}
        <section>
          <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-xl p-8 text-center">
            <Package className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl font-bold mb-2">{t.contact.title}</h2>
            <p className="opacity-90 mb-6">{t.contact.description}</p>
            <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors mb-4">
              {t.contact.button}
            </button>
            <p className="text-sm opacity-80">{t.contact.alternative}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
