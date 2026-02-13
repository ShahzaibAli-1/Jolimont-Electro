import { Button } from "./ui/button";
import { ArrowLeft, Wrench } from "lucide-react";
import originalVsCompatibleImage from '../../assets/7e584e141930a7711dc6ea6d1e1b152b6552e113.png';

interface BlogArticle5Props {
  onBack: () => void;
  onGoToShop: () => void;
}

export function BlogArticle5({ onBack, onGoToShop }: BlogArticle5Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header avec image */}
      <div className="relative h-[400px] bg-gray-900">
        <img 
          src={originalVsCompatibleImage}
          alt="Comparaison pièces détachées"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pièces détachées d'origine vs compatibles : quelles différences ?
            </h1>
            <p className="text-gray-200 text-lg">
              Guide complet pour faire le bon choix entre qualité, prix et garanties
            </p>
          </div>
        </div>
      </div>

      {/* Bouton retour */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Button variant="ghost" onClick={onBack} className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Retour au blog
        </Button>
      </div>

      {/* Contenu de l'article */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Lorsque vous devez remplacer une pièce défectueuse sur votre appareil électroménager, vous êtes confronté à un choix : 
            pièce d'origine ou pièce compatible ? Cette décision impacte le prix, la qualité et la durabilité de la réparation. 
            Voici tout ce qu'il faut savoir pour faire le choix le plus adapté à votre situation.
          </p>
        </div>

        {/* Section 1 - Définitions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Pièces d'origine vs compatibles : les définitions</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-900">🏷️ Pièce d'origine (OEM)</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Fabriquée ou approuvée par le constructeur de l'appareil (Bosch, Samsung, Whirlpool, etc.). 
                Elle porte la référence officielle du fabricant.
              </p>
              <p className="text-sm text-blue-800 font-semibold">
                Également appelée : pièce constructeur, pièce OEM (Original Equipment Manufacturer)
              </p>
            </div>

            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-green-900">✨ Pièce compatible</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Fabriquée par un tiers (non le constructeur d'origine) mais conçue pour fonctionner avec l'appareil. 
                Elle répond aux mêmes spécifications techniques.
              </p>
              <p className="text-sm text-green-800 font-semibold">
                Également appelée : pièce adaptable, pièce aftermarket, pièce alternative
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 - Tableau comparatif */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Tableau comparatif détaillé</h2>
          
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-4 text-left">Critère</th>
                  <th className="p-4 text-left">Pièce d'origine</th>
                  <th className="p-4 text-left">Pièce compatible</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900">Prix</td>
                  <td className="p-4 text-gray-700">
                    <span className="text-red-600 font-bold">€€€</span> Plus élevé<br/>
                    <span className="text-sm text-gray-600">+30% à +100% par rapport au compatible</span>
                  </td>
                  <td className="p-4 text-gray-700">
                    <span className="text-green-600 font-bold">€</span> Plus économique<br/>
                    <span className="text-sm text-gray-600">Budget plus accessible</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900">Qualité</td>
                  <td className="p-4 text-gray-700">
                    <span className="text-green-600 font-bold">★★★★★</span> Garantie maximale<br/>
                    <span className="text-sm text-gray-600">Spécifications exactes du fabricant</span>
                  </td>
                  <td className="p-4 text-gray-700">
                    <span className="text-orange-600 font-bold">★★★★☆</span> Variable selon le fournisseur<br/>
                    <span className="text-sm text-gray-600">De bonne à excellente qualité</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900">Garantie fabricant</td>
                  <td className="p-4 text-gray-700">
                    <span className="text-green-600 font-bold">✓</span> Maintenue<br/>
                    <span className="text-sm text-gray-600">Conserve la garantie constructeur si appareil sous garantie</span>
                  </td>
                  <td className="p-4 text-gray-700">
                    <span className="text-orange-600 font-bold">⚠</span> Peut annuler la garantie<br/>
                    <span className="text-sm text-gray-600">Vérifier les conditions avant achat</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900">Disponibilité</td>
                  <td className="p-4 text-gray-700">
                    <span className="text-orange-600 font-bold">⚠</span> Parfois limitée<br/>
                    <span className="text-sm text-gray-600">Surtout pour modèles anciens</span>
                  </td>
                  <td className="p-4 text-gray-700">
                    <span className="text-green-600 font-bold">✓</span> Large disponibilité<br/>
                    <span className="text-sm text-gray-600">Souvent en stock, même pour anciens modèles</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900">Durée de vie</td>
                  <td className="p-4 text-gray-700">
                    <span className="text-green-600 font-bold">★★★★★</span> Optimale<br/>
                    <span className="text-sm text-gray-600">Durée de vie prévue par le constructeur</span>
                  </td>
                  <td className="p-4 text-gray-700">
                    <span className="text-green-600 font-bold">★★★★☆</span> Bonne à excellente<br/>
                    <span className="text-sm text-gray-600">Dépend de la qualité du fabricant tiers</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900">Compatibilité</td>
                  <td className="p-4 text-gray-700">
                    <span className="text-green-600 font-bold">✓✓✓</span> 100% garantie<br/>
                    <span className="text-sm text-gray-600">Ajustement parfait</span>
                  </td>
                  <td className="p-4 text-gray-700">
                    <span className="text-green-600 font-bold">✓✓</span> Très bonne si bien choisie<br/>
                    <span className="text-sm text-gray-600">Vérifier les références avant achat</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3 - Quand choisir quoi */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Dans quelles situations privilégier chaque option ?</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-900">✅ Optez pour une pièce d'origine si :</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-blue-500">•</span>
                  <span><strong>Votre appareil est encore sous garantie</strong> - Pour ne pas perdre la couverture constructeur</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">•</span>
                  <span><strong>C'est une pièce critique</strong> - Carte électronique, moteur, compresseur (sécurité et performance)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">•</span>
                  <span><strong>Votre appareil est haut de gamme</strong> - Pour préserver les performances optimales</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">•</span>
                  <span><strong>Vous prévoyez de garder l'appareil 5+ ans</strong> - Investissement long terme</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">•</span>
                  <span><strong>Vous voulez la tranquillité d'esprit absolue</strong> - Zéro risque de compatibilité</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-green-900">✅ Optez pour une pièce compatible si :</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-green-500">•</span>
                  <span><strong>Votre appareil a plus de 5 ans</strong> - Plus de garantie constructeur à préserver</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">•</span>
                  <span><strong>C'est une pièce d'usure courante</strong> - Joint, filtre, courroie, durite</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">•</span>
                  <span><strong>Vous cherchez le meilleur rapport qualité/prix</strong> - Budget limité</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">•</span>
                  <span><strong>La pièce d'origine n'est plus disponible</strong> - Modèle ancien ou discontinué</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">•</span>
                  <span><strong>Vous achetez chez un vendeur de confiance</strong> - Pièces certifiées compatibles avec garantie</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4 - Idées reçues */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">❌ Idées reçues sur les pièces compatibles</h2>
          
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="text-gray-900 mb-2">
                <span className="font-bold text-red-600">FAUX :</span> "Les pièces compatibles sont toujours de mauvaise qualité"
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-bold text-green-600">VRAI :</span> De nombreux fabricants de pièces compatibles produisent 
                des composants de très haute qualité, parfois même pour le compte des constructeurs d'origine. La qualité dépend 
                du fabricant et de la certification.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="text-gray-900 mb-2">
                <span className="font-bold text-red-600">FAUX :</span> "Une pièce compatible va casser mon appareil"
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-bold text-green-600">VRAI :</span> Si elle est correctement sélectionnée (bonnes références) 
                et certifiée compatible, une pièce alternative fonctionne parfaitement. Les risques surviennent surtout en cas 
                d'erreur de référence ou de produit contrefait.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="text-gray-900 mb-2">
                <span className="font-bold text-red-600">FAUX :</span> "Les pièces d'origine durent toujours plus longtemps"
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-bold text-green-600">VRAI :</span> La durée de vie dépend davantage de l'entretien 
                et de l'utilisation que de l'origine de la pièce. Une pièce compatible de qualité correctement installée 
                peut durer aussi longtemps qu'une pièce d'origine.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 - Conseils */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">5 conseils pour bien choisir vos pièces détachées</h2>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Vérifiez toujours la compatibilité</h3>
                  <p className="text-sm text-gray-700">
                    Utilisez le numéro de série de votre appareil (E-Nr, PNC, etc.) pour confirmer que la pièce est 100% compatible
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Privilégiez les vendeurs de confiance</h3>
                  <p className="text-sm text-gray-700">
                    Achetez auprès de professionnels qui offrent des garanties et un service client réactif
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Lisez les avis clients</h3>
                  <p className="text-sm text-gray-700">
                    Les retours d'expérience vous donnent une idée précise de la qualité et de la durabilité de la pièce
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Comparez les garanties</h3>
                  <p className="text-sm text-gray-700">
                    Une pièce compatible avec 2 ans de garantie peut être un meilleur choix qu'une pièce d'origine sans garantie
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Méfiez-vous des prix trop bas</h3>
                  <p className="text-sm text-gray-700">
                    Un prix anormalement bas peut indiquer une contrefaçon ou une pièce de qualité inférieure. Comparez plusieurs sources
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-gray-100 border-2 border-gray-300 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">💡 Notre recommandation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Il n'y a pas de réponse universelle.</strong> Le choix entre pièce d'origine et compatible dépend de votre 
              situation spécifique : âge de l'appareil, type de pièce, budget, et niveau d'exigence.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Pour un appareil récent et une pièce critique, privilégiez l'origine. Pour un appareil ancien et une pièce 
              d'usure courante, une pièce compatible de qualité chez un vendeur sérieux est un excellent choix économique.
            </p>
          </div>
        </section>

        {/* Encart CTA */}
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl p-8 text-white text-center shadow-lg">
          <Wrench className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Besoin d'aide pour choisir la bonne pièce ?</h3>
          <p className="mb-6 text-blue-100">
            Notre équipe d'experts vous guide dans le choix de la pièce la plus adaptée à votre appareil et votre budget
          </p>
          <Button 
            onClick={onGoToShop}
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 font-semibold"
          >
            Trouver ma pièce détachée
          </Button>
        </div>
      </article>
    </div>
  );
}
