import { Shield, CheckCircle, Clock, FileText, Award, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function WarrantyPage() {
  const { language } = useLanguage();
  
  const t = {
    fr: {
      title: 'Garantie Qualité',
      subtitle: 'Votre satisfaction est notre priorité',
      intro: 'Chez Jolimont Electro, nous nous engageons à vous fournir des pièces détachées de qualité avec une garantie complète pour votre tranquillité d\'esprit.',
      
      warrantyTypes: {
        title: 'Nos Garanties',
        items: [
          {
            icon: Shield,
            title: 'Garantie légale de conformité',
            duration: '2 ans',
            description: 'Tous nos produits bénéficient de la garantie légale de conformité de 2 ans, conformément au Code de la consommation français et européen.',
          },
          {
            icon: Award,
            title: 'Garantie commerciale',
            duration: '1 an',
            description: 'En complément, nous offrons une garantie commerciale d\'1 an sur toutes les pièces détachées neuves, couvrant les défauts de fabrication et de fonctionnement.',
          },
          {
            icon: CheckCircle,
            title: 'Garantie pièces d\'origine',
            duration: 'Selon constructeur',
            description: 'Les pièces d\'origine constructeur bénéficient de la garantie spécifique du fabricant, généralement entre 1 et 3 ans.',
          },
        ],
      },
      
      coverage: {
        title: 'Que couvre notre garantie ?',
        covered: {
          title: 'Couvert par la garantie',
          items: [
            'Défauts de fabrication ou de matériaux',
            'Dysfonctionnements lors d\'une utilisation normale',
            'Pièces défectueuses dès réception',
            'Non-conformité avec la description du produit',
            'Problèmes de compatibilité signalés par notre IA',
          ],
        },
        notCovered: {
          title: 'Non couvert par la garantie',
          items: [
            'Usure normale et vieillissement naturel',
            'Dommages causés par une mauvaise installation',
            'Utilisation non conforme ou négligence',
            'Modification ou réparation par un tiers non autorisé',
            'Dommages accidentels ou dus à un événement extérieur',
          ],
        },
      },
      
      process: {
        title: 'Comment faire valoir votre garantie ?',
        steps: [
          {
            number: '1',
            title: 'Contactez-nous',
            description: 'Contactez notre service client par téléphone, email ou chat avec votre numéro de commande.',
          },
          {
            number: '2',
            title: 'Diagnostic',
            description: 'Décrivez le problème rencontré. Notre équipe technique analysera votre situation et vous guidera.',
          },
          {
            number: '3',
            title: 'Retour gratuit',
            description: 'Si nécessaire, nous vous enverrons une étiquette de retour prépayée pour renvoyer la pièce défectueuse.',
          },
          {
            number: '4',
            title: 'Remplacement ou remboursement',
            description: 'Selon votre préférence, nous procéderons au remplacement de la pièce ou au remboursement intégral sous 5-7 jours.',
          },
        ],
      },
      
      important: {
        title: 'Points importants',
        items: [
          'Conservez votre facture et emballage d\'origine',
          'La garantie est transférable en cas de revente',
          'Les frais de retour sont à notre charge',
          'Aucune justification nécessaire pendant les 14 premiers jours',
        ],
      },
      
      contact: {
        title: 'Besoin d\'activer votre garantie ?',
        description: 'Notre équipe est disponible du lundi au vendredi de 9h à 18h',
        phone: '+33 1 23 45 67 89',
        email: 'garantie@jolimont-electro.fr',
        button: 'Contacter le support',
      },
    },
    en: {
      title: 'Quality Warranty',
      subtitle: 'Your satisfaction is our priority',
      intro: 'At Jolimont Electro, we are committed to providing you with quality spare parts with a complete warranty for your peace of mind.',
      
      warrantyTypes: {
        title: 'Our Warranties',
        items: [
          {
            icon: Shield,
            title: 'Legal guarantee of conformity',
            duration: '2 years',
            description: 'All our products benefit from the legal guarantee of conformity of 2 years, in accordance with French and European consumer law.',
          },
          {
            icon: Award,
            title: 'Commercial warranty',
            duration: '1 year',
            description: 'In addition, we offer a 1-year commercial warranty on all new spare parts, covering manufacturing and functional defects.',
          },
          {
            icon: CheckCircle,
            title: 'Original parts warranty',
            duration: 'According to manufacturer',
            description: 'Original manufacturer parts benefit from the manufacturer\'s specific warranty, generally between 1 and 3 years.',
          },
        ],
      },
      
      coverage: {
        title: 'What does our warranty cover?',
        covered: {
          title: 'Covered by warranty',
          items: [
            'Manufacturing or material defects',
            'Malfunctions during normal use',
            'Defective parts upon receipt',
            'Non-conformity with product description',
            'Compatibility issues reported by our AI',
          ],
        },
        notCovered: {
          title: 'Not covered by warranty',
          items: [
            'Normal wear and natural aging',
            'Damage caused by incorrect installation',
            'Non-compliant use or negligence',
            'Modification or repair by unauthorized third party',
            'Accidental damage or due to external event',
          ],
        },
      },
      
      process: {
        title: 'How to claim your warranty?',
        steps: [
          {
            number: '1',
            title: 'Contact us',
            description: 'Contact our customer service by phone, email or chat with your order number.',
          },
          {
            number: '2',
            title: 'Diagnosis',
            description: 'Describe the problem encountered. Our technical team will analyze your situation and guide you.',
          },
          {
            number: '3',
            title: 'Free return',
            description: 'If necessary, we will send you a prepaid return label to send back the defective part.',
          },
          {
            number: '4',
            title: 'Replacement or refund',
            description: 'According to your preference, we will proceed with the replacement of the part or full refund within 5-7 days.',
          },
        ],
      },
      
      important: {
        title: 'Important points',
        items: [
          'Keep your invoice and original packaging',
          'Warranty is transferable in case of resale',
          'Return costs are borne by us',
          'No justification needed during the first 14 days',
        ],
      },
      
      contact: {
        title: 'Need to activate your warranty?',
        description: 'Our team is available Monday to Friday from 9am to 6pm',
        phone: '+33 1 23 45 67 89',
        email: 'warranty@jolimont-electro.fr',
        button: 'Contact support',
      },
    },
    it: {
      title: 'Garanzia di Qualità',
      subtitle: 'La tua soddisfazione è la nostra priorità',
      intro: 'Da Jolimont Electro, ci impegniamo a fornirti pezzi di ricambio di qualità con una garanzia completa per la tua tranquillità.',
      
      warrantyTypes: {
        title: 'Le Nostre Garanzie',
        items: [
          {
            icon: Shield,
            title: 'Garanzia legale di conformità',
            duration: '2 anni',
            description: 'Tutti i nostri prodotti beneficiano della garanzia legale di conformità di 2 anni, in conformità con il codice del consumatore francese ed europeo.',
          },
          {
            icon: Award,
            title: 'Garanzia commerciale',
            duration: '1 anno',
            description: 'Inoltre, offriamo una garanzia commerciale di 1 anno su tutti i pezzi di ricambio nuovi, coprendo difetti di fabbricazione e funzionamento.',
          },
          {
            icon: CheckCircle,
            title: 'Garanzia pezzi originali',
            duration: 'Secondo il produttore',
            description: 'I pezzi originali del produttore beneficiano della garanzia specifica del produttore, generalmente tra 1 e 3 anni.',
          },
        ],
      },
      
      coverage: {
        title: 'Cosa copre la nostra garanzia?',
        covered: {
          title: 'Coperto dalla garanzia',
          items: [
            'Difetti di fabbricazione o di materiali',
            'Malfunzionamenti durante l\'uso normale',
            'Pezzi difettosi alla ricezione',
            'Non conformità con la descrizione del prodotto',
            'Problemi di compatibilità segnalati dalla nostra IA',
          ],
        },
        notCovered: {
          title: 'Non coperto dalla garanzia',
          items: [
            'Usura normale e invecchiamento naturale',
            'Danni causati da installazione errata',
            'Uso non conforme o negligenza',
            'Modifica o riparazione da terzi non autorizzati',
            'Danni accidentali o dovuti a eventi esterni',
          ],
        },
      },
      
      process: {
        title: 'Come far valere la tua garanzia?',
        steps: [
          {
            number: '1',
            title: 'Contattaci',
            description: 'Contatta il nostro servizio clienti per telefono, email o chat con il numero d\'ordine.',
          },
          {
            number: '2',
            title: 'Diagnosi',
            description: 'Descrivi il problema riscontrato. Il nostro team tecnico analizzerà la tua situazione e ti guiderà.',
          },
          {
            number: '3',
            title: 'Reso gratuito',
            description: 'Se necessario, ti invieremo un\'etichetta di reso prepagata per restituire il pezzo difettoso.',
          },
          {
            number: '4',
            title: 'Sostituzione o rimborso',
            description: 'Secondo la tua preferenza, procederemo alla sostituzione del pezzo o al rimborso completo entro 5-7 giorni.',
          },
        ],
      },
      
      important: {
        title: 'Punti importanti',
        items: [
          'Conserva la fattura e l\'imballaggio originale',
          'La garanzia è trasferibile in caso di rivendita',
          'Le spese di reso sono a nostro carico',
          'Nessuna giustificazione necessaria durante i primi 14 giorni',
        ],
      },
      
      contact: {
        title: 'Hai bisogno di attivare la garanzia?',
        description: 'Il nostro team è disponibile dal lunedì al venerdì dalle 9:00 alle 18:00',
        phone: '+33 1 23 45 67 89',
        email: 'garanzia@jolimont-electro.fr',
        button: 'Contatta il supporto',
      },
    },
    nl: {
      title: 'Kwaliteitsgarantie',
      subtitle: 'Uw tevredenheid is onze prioriteit',
      intro: 'Bij Jolimont Electro zetten we ons in om u kwaliteitsonderdelen te leveren met een volledige garantie voor uw gemoedsrust.',
      
      warrantyTypes: {
        title: 'Onze Garanties',
        items: [
          {
            icon: Shield,
            title: 'Wettelijke conformiteitsgarantie',
            duration: '2 jaar',
            description: 'Al onze producten profiteren van de wettelijke conformiteitsgarantie van 2 jaar, in overeenstemming met de Franse en Europese consumentenwet.',
          },
          {
            icon: Award,
            title: 'Commerciële garantie',
            duration: '1 jaar',
            description: 'Daarnaast bieden we een commerciële garantie van 1 jaar op alle nieuwe onderdelen, die fabricage- en functionele defecten dekt.',
          },
          {
            icon: CheckCircle,
            title: 'Garantie originele onderdelen',
            duration: 'Volgens fabrikant',
            description: 'Originele fabrieksonderdelen profiteren van de specifieke garantie van de fabrikant, over het algemeen tussen 1 en 3 jaar.',
          },
        ],
      },
      
      coverage: {
        title: 'Wat dekt onze garantie?',
        covered: {
          title: 'Gedekt door garantie',
          items: [
            'Fabricage- of materiaaldefecten',
            'Storingen tijdens normaal gebruik',
            'Defecte onderdelen bij ontvangst',
            'Niet-conformiteit met productbeschrijving',
            'Compatibiliteitsproblemen gemeld door onze AI',
          ],
        },
        notCovered: {
          title: 'Niet gedekt door garantie',
          items: [
            'Normale slijtage en natuurlijke veroudering',
            'Schade veroorzaakt door onjuiste installatie',
            'Niet-conform gebruik of nalatigheid',
            'Wijziging of reparatie door niet-geautoriseerde derde',
            'Accidentele schade of door externe gebeurtenis',
          ],
        },
      },
      
      process: {
        title: 'Hoe uw garantie claimen?',
        steps: [
          {
            number: '1',
            title: 'Neem contact op',
            description: 'Neem contact op met onze klantenservice per telefoon, e-mail of chat met uw bestelnummer.',
          },
          {
            number: '2',
            title: 'Diagnose',
            description: 'Beschrijf het probleem. Ons technisch team zal uw situatie analyseren en u begeleiden.',
          },
          {
            number: '3',
            title: 'Gratis retour',
            description: 'Indien nodig sturen we u een voorafbetaald retouretiket om het defecte onderdeel terug te sturen.',
          },
          {
            number: '4',
            title: 'Vervanging of terugbetaling',
            description: 'Volgens uw voorkeur zullen we overgaan tot vervanging van het onderdeel of volledige terugbetaling binnen 5-7 dagen.',
          },
        ],
      },
      
      important: {
        title: 'Belangrijke punten',
        items: [
          'Bewaar uw factuur en originele verpakking',
          'Garantie is overdraagbaar bij doorverkoop',
          'Retourkosten zijn voor onze rekening',
          'Geen rechtvaardiging nodig tijdens de eerste 14 dagen',
        ],
      },
      
      contact: {
        title: 'Moet u uw garantie activeren?',
        description: 'Ons team is beschikbaar van maandag tot vrijdag van 9.00 tot 18.00 uur',
        phone: '+33 1 23 45 67 89',
        email: 'garantie@jolimont-electro.nl',
        button: 'Neem contact op met support',
      },
    },
    de: {
      title: 'Qualitätsgarantie',
      subtitle: 'Ihre Zufriedenheit ist unsere Priorität',
      intro: 'Bei Jolimont Electro verpflichten wir uns, Ihnen hochwertige Ersatzteile mit einer vollständigen Garantie für Ihre Sicherheit zu liefern.',
      
      warrantyTypes: {
        title: 'Unsere Garantien',
        items: [
          {
            icon: Shield,
            title: 'Gesetzliche Konformitätsgarantie',
            duration: '2 Jahre',
            description: 'Alle unsere Produkte profitieren von der gesetzlichen Konformitätsgarantie von 2 Jahren, gemäß dem französischen und europäischen Verbraucherrecht.',
          },
          {
            icon: Award,
            title: 'Handelsgarantie',
            duration: '1 Jahr',
            description: 'Zusätzlich bieten wir eine Handelsgarantie von 1 Jahr auf alle neuen Ersatzteile, die Herstellungs- und Funktionsfehler abdeckt.',
          },
          {
            icon: CheckCircle,
            title: 'Garantie für Originalteile',
            duration: 'Laut Hersteller',
            description: 'Originale Herstellerteile profitieren von der spezifischen Garantie des Herstellers, in der Regel zwischen 1 und 3 Jahren.',
          },
        ],
      },
      
      coverage: {
        title: 'Was deckt unsere Garantie ab?',
        covered: {
          title: 'Von der Garantie abgedeckt',
          items: [
            'Herstellungs- oder Materialfehler',
            'Fehlfunktionen bei normalem Gebrauch',
            'Defekte Teile bei Erhalt',
            'Nichtkonformität mit der Produktbeschreibung',
            'Kompatibilitätsprobleme, die von unserer KI gemeldet werden',
          ],
        },
        notCovered: {
          title: 'Nicht von der Garantie abgedeckt',
          items: [
            'Normale Abnutzung und natürliche Alterung',
            'Schäden durch falsche Installation',
            'Nicht konformer Gebrauch oder Vernachlässigung',
            'Änderung oder Reparatur durch unbefugte Dritte',
            'Unfallschäden oder aufgrund eines externen Ereignisses',
          ],
        },
      },
      
      process: {
        title: 'Wie können Sie Ihre Garantie geltend machen?',
        steps: [
          {
            number: '1',
            title: 'Kontaktieren Sie uns',
            description: 'Kontaktieren Sie unseren Kundenservice per Telefon, E-Mail oder Chat mit Ihrer Bestellnummer.',
          },
          {
            number: '2',
            title: 'Diagnose',
            description: 'Beschreiben Sie das aufgetretene Problem. Unser technisches Team wird Ihre Situation analysieren und Sie anleiten.',
          },
          {
            number: '3',
            title: 'Kostenlose Rücksendung',
            description: 'Falls erforderlich, senden wir Ihnen ein vorausbezahltes Rücksendeetikett, um das defekte Teil zurückzusenden.',
          },
          {
            number: '4',
            title: 'Ersatz oder Rückerstattung',
            description: 'Je nach Ihrer Präferenz werden wir den Ersatz des Teils oder die vollständige Rückerstattung innerhalb von 5-7 Tagen vornehmen.',
          },
        ],
      },
      
      important: {
        title: 'Wichtige Punkte',
        items: [
          'Bewahren Sie Ihre Rechnung und Originalverpackung auf',
          'Die Garantie ist bei Wiederverkauf übertragbar',
          'Rücksendungskosten gehen zu unseren Lasten',
          'Keine Rechtfertigung während der ersten 14 Tage erforderlich',
        ],
      },
      
      contact: {
        title: 'Müssen Sie Ihre Garantie aktivieren?',
        description: 'Unser Team ist von Montag bis Freitag von 9:00 bis 18:00 Uhr verfügbar',
        phone: '+33 1 23 45 67 89',
        email: 'garantie@jolimont-electro.de',
        button: 'Support kontaktieren',
      },
    },
  }[language];

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-blue-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Shield className="w-20 h-20 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl opacity-90 mb-2">{t.subtitle}</p>
          <p className="text-base opacity-80 max-w-3xl mx-auto">{t.intro}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Warranty Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t.warrantyTypes.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.warrantyTypes.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-10 h-10 text-primary" />
                    <span className="text-sm font-bold px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {item.duration}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Coverage */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t.coverage.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Covered */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="font-bold text-lg">{t.coverage.covered.title}</h3>
              </div>
              <ul className="space-y-3">
                {t.coverage.covered.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Covered */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-red-600" />
                <h3 className="font-bold text-lg">{t.coverage.notCovered.title}</h3>
              </div>
              <ul className="space-y-3">
                {t.coverage.notCovered.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-4 h-4 flex-shrink-0 mt-0.5">
                      <div className="w-full h-full rounded-full border-2 border-red-600 flex items-center justify-center">
                        <div className="w-2 h-0.5 bg-red-600"></div>
                      </div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t.process.title}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {t.process.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 border border-border h-full">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < t.process.steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/4 -right-3 w-6 h-0.5 bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Important Points */}
        <section className="mb-16">
          <div className="bg-amber-50 rounded-xl p-8 border border-amber-200">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-amber-600" />
              <h2 className="text-2xl font-bold">{t.important.title}</h2>
            </div>
            <ul className="grid md:grid-cols-2 gap-4">
              {t.important.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact CTA */}
        <section>
          <div className="bg-gradient-to-br from-primary to-blue-700 text-white rounded-xl p-8 text-center">
            <Wrench className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl font-bold mb-2">{t.contact.title}</h2>
            <p className="opacity-90 mb-6">{t.contact.description}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a href={`tel:${t.contact.phone}`} className="text-lg font-semibold hover:opacity-80 transition-opacity">
                📞 {t.contact.phone}
              </a>
              <span className="hidden sm:inline">•</span>
              <a href={`mailto:${t.contact.email}`} className="text-lg font-semibold hover:opacity-80 transition-opacity">
                ✉️ {t.contact.email}
              </a>
            </div>
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {t.contact.button}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
