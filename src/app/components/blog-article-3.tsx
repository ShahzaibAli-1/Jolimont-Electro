import { Button } from "./ui/button";
import { ArrowLeft, Wrench } from "lucide-react";
import commonPartsImage from '../../assets/24240017f49fd20a1ce7efb26aaf47d2759aad1a.png';

interface BlogArticle3Props {
  onBack: () => void;
  onGoToShop: () => void;
}

export function BlogArticle3({ onBack, onGoToShop }: BlogArticle3Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header avec image */}
      <div className="relative h-[400px] bg-gray-900">
        <img 
          src={commonPartsImage}
          alt="Pièces détachées électroménager"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Les pièces détachées les plus courantes en électroménager et leur rôle
            </h1>
            <p className="text-gray-200 text-lg">
              Comprendre le fonctionnement des composants essentiels de vos appareils
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
            Connaître les pièces détachées les plus fréquemment remplacées et comprendre leur fonction vous aide à mieux 
            diagnostiquer les pannes et à anticiper l'entretien de vos appareils. Ce guide détaille les composants essentiels 
            de l'électroménager et leurs signes d'usure.
          </p>
        </div>

        {/* Section 1 - Lave-linge */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Pièces courantes du lave-linge</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-2 text-gray-900">1. La courroie</h3>
              <p className="text-sm text-gray-600 mb-3"><strong>Rôle :</strong> Transmet le mouvement du moteur au tambour</p>
              <p className="text-gray-700 mb-2">
                <strong>Signes d'usure :</strong> Le tambour ne tourne plus, bruit de frottement, odeur de caoutchouc brûlé
              </p>
              <p className="text-gray-700">
                <strong>Durée de vie :</strong> 5-10 ans selon l'utilisation
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-2 text-gray-900">2. La pompe de vidange</h3>
              <p className="text-sm text-gray-600 mb-3"><strong>Rôle :</strong> Évacue l'eau usée après le lavage</p>
              <p className="text-gray-700 mb-2">
                <strong>Signes d'usure :</strong> L'eau ne se vidange pas, bruit anormal lors de la vidange, code erreur
              </p>
              <p className="text-gray-700">
                <strong>Durée de vie :</strong> 3-7 ans (peut être obstruée avant d'être HS)
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-2 text-gray-900">3. Le joint de porte (manchette)</h3>
              <p className="text-sm text-gray-600 mb-3"><strong>Rôle :</strong> Assure l'étanchéité entre le tambour et le hublot</p>
              <p className="text-gray-700 mb-2">
                <strong>Signes d'usure :</strong> Fuites d'eau par l'avant, moisissures, déchirures visibles
              </p>
              <p className="text-gray-700">
                <strong>Durée de vie :</strong> 5-8 ans (entretien régulier prolonge la durée)
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-2 text-gray-900">4. La résistance (thermoplongeur)</h3>
              <p className="text-sm text-gray-600 mb-3"><strong>Rôle :</strong> Chauffe l'eau pendant le cycle de lavage</p>
              <p className="text-gray-700 mb-2">
                <strong>Signes d'usure :</strong> L'eau reste froide, linge mal lavé, cycles très longs
              </p>
              <p className="text-gray-700">
                <strong>Durée de vie :</strong> 5-10 ans (calcaire réduit la durée de vie)
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-2 text-gray-900">5. Les roulements de tambour</h3>
              <p className="text-sm text-gray-600 mb-3"><strong>Rôle :</strong> Permettent la rotation fluide du tambour</p>
              <p className="text-gray-700 mb-2">
                <strong>Signes d'usure :</strong> Bruit métallique fort à l'essorage, tambour qui bouge latéralement
              </p>
              <p className="text-gray-700">
                <strong>Durée de vie :</strong> 7-12 ans (réparation complexe, souvent coûteuse)
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 - Réfrigérateur */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Pièces courantes du réfrigérateur</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-2 text-gray-900">1. Le thermostat</h3>
              <p className="text-sm text-gray-600 mb-3"><strong>Rôle :</strong> Régule la température intérieure</p>
              <p className="text-gray-700 mb-2">
                <strong>Signes d'usure :</strong> Température instable, givre excessif, compresseur qui tourne en continu
              </p>
              <p className="text-gray-700">
                <strong>Durée de vie :</strong> 10-15 ans
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-2 text-gray-900">2. Le joint de porte</h3>
              <p className="text-sm text-gray-600 mb-3"><strong>Rôle :</strong> Maintient l'isolation thermique</p>
              <p className="text-gray-700 mb-2">
                <strong>Signes d'usure :</strong> Air froid qui s'échappe, givre, surconsommation électrique
              </p>
              <p className="text-gray-700">
                <strong>Durée de vie :</strong> 5-10 ans (nettoyage régulier recommandé)
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-2 text-gray-900">3. Le ventilateur</h3>
              <p className="text-sm text-gray-600 mb-3"><strong>Rôle :</strong> Brasse l'air froid dans le compartiment</p>
              <p className="text-gray-700 mb-2">
                <strong>Signes d'usure :</strong> Bruit anormal, zones froides et chaudes, givrage inégal
              </p>
              <p className="text-gray-700">
                <strong>Durée de vie :</strong> 8-12 ans
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-2 text-gray-900">4. La résistance de dégivrage</h3>
              <p className="text-sm text-gray-600 mb-3"><strong>Rôle :</strong> Fait fondre le givre sur l'évaporateur (modèles No Frost)</p>
              <p className="text-gray-700 mb-2">
                <strong>Signes d'usure :</strong> Accumulation de glace dans le congélateur, mauvais refroidissement
              </p>
              <p className="text-gray-700">
                <strong>Durée de vie :</strong> 5-10 ans
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 - Lave-vaisselle */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Pièces courantes du lave-vaisselle</h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold mb-2 text-gray-900">1. Les bras de lavage</h3>
              <p className="text-sm text-gray-600 mb-3"><strong>Rôle :</strong> Diffusent l'eau sous pression pour nettoyer la vaisselle</p>
              <p className="text-gray-700 mb-2">
                <strong>Signes d'usure :</strong> Vaisselle mal lavée, bras qui ne tourne plus, jets obstrués
              </p>
              <p className="text-gray-700">
                <strong>Durée de vie :</strong> 5-8 ans (calcaire accélère l'usure)
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold mb-2 text-gray-900">2. La pompe de cyclage</h3>
              <p className="text-sm text-gray-600 mb-3"><strong>Rôle :</strong> Propulse l'eau vers les bras de lavage</p>
              <p className="text-gray-700 mb-2">
                <strong>Signes d'usure :</strong> Pas de circulation d'eau, bruit anormal, lavage inefficace
              </p>
              <p className="text-gray-700">
                <strong>Durée de vie :</strong> 5-10 ans
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold mb-2 text-gray-900">3. L'électrovanne</h3>
              <p className="text-sm text-gray-600 mb-3"><strong>Rôle :</strong> Contrôle l'arrivée d'eau dans la cuve</p>
              <p className="text-gray-700 mb-2">
                <strong>Signes d'usure :</strong> Pas d'arrivée d'eau, fuite, remplissage continu
              </p>
              <p className="text-gray-700">
                <strong>Durée de vie :</strong> 5-10 ans
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 - Four */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Pièces courantes du four</h2>
          
          <div className="space-y-6">
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-bold mb-2 text-gray-900">1. La résistance de voûte (supérieure)</h3>
              <p className="text-sm text-gray-600 mb-3"><strong>Rôle :</strong> Chauffe par le haut pour gratiner et dorer</p>
              <p className="text-gray-700 mb-2">
                <strong>Signes d'usure :</strong> Pas de chaleur en haut, gratinage impossible, cuisson inégale
              </p>
              <p className="text-gray-700">
                <strong>Durée de vie :</strong> 8-15 ans
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-bold mb-2 text-gray-900">2. La résistance de sole (inférieure)</h3>
              <p className="text-sm text-gray-600 mb-3"><strong>Rôle :</strong> Chauffe par le bas pour la cuisson du fond</p>
              <p className="text-gray-700 mb-2">
                <strong>Signes d'usure :</strong> Pâtes et tartes pas cuites en dessous, four qui ne chauffe plus
              </p>
              <p className="text-gray-700">
                <strong>Durée de vie :</strong> 8-15 ans
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-bold mb-2 text-gray-900">3. Le joint de porte</h3>
              <p className="text-sm text-gray-600 mb-3"><strong>Rôle :</strong> Assure l'isolation thermique</p>
              <p className="text-gray-700 mb-2">
                <strong>Signes d'usure :</strong> Porte chaude au toucher, chaleur qui s'échappe, surconsommation
              </p>
              <p className="text-gray-700">
                <strong>Durée de vie :</strong> 5-10 ans
              </p>
            </div>
          </div>
        </section>

        {/* Conseils */}
        <section className="mb-12">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-gray-900">💡 Conseil pour prolonger la durée de vie</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Nettoyez régulièrement les filtres et joints</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Utilisez des produits anti-calcaire dans les zones à eau dure</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Évitez la surcharge des appareils (lave-linge, lave-vaisselle)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Faites vérifier les joints une fois par an</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Encart CTA */}
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl p-8 text-white text-center shadow-lg">
          <Wrench className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Besoin d'une de ces pièces détachées ?</h3>
          <p className="mb-6 text-blue-100">
            Trouvez rapidement la pièce compatible avec votre appareil
          </p>
          <Button 
            onClick={onGoToShop}
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 font-semibold"
          >
            Voir toutes nos pièces
          </Button>
        </div>
      </article>
    </div>
  );
}