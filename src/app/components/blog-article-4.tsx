import { Button } from "./ui/button";
import { ArrowLeft, Wrench } from "lucide-react";

interface BlogArticle4Props {
  onBack: () => void;
  onGoToShop: () => void;
}

export function BlogArticle4({ onBack, onGoToShop }: BlogArticle4Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header avec image */}
      <div className="relative h-[400px] bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1764705637770-9fc400e090cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsaWFuY2UlMjBtYWludGVuYW5jZSUyMGhvbWV8ZW58MXx8fHwxNzcwNjYyODYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Entretien électroménager"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Comment prolonger la durée de vie de vos appareils électroménagers
            </h1>
            <p className="text-gray-200 text-lg">
              10 gestes simples pour économiser et éviter les pannes prématurées
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
            Un entretien régulier et quelques bonnes pratiques peuvent doubler la durée de vie de vos appareils électroménagers. 
            Non seulement vous économisez sur les réparations et les remplacements, mais vous contribuez aussi à réduire votre 
            empreinte environnementale. Voici nos 10 conseils d'expert pour des appareils qui durent.
          </p>
        </div>

        {/* Statistique */}
        <div className="bg-primary text-white rounded-xl p-8 text-center mb-12 shadow-lg">
          <p className="text-5xl font-bold mb-2">+50%</p>
          <p className="text-lg">
            C'est la durée de vie supplémentaire que vous pouvez gagner avec un entretien adapté
          </p>
        </div>

        {/* Conseils généraux */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Conseils généraux pour tous vos appareils</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Lisez le manuel d'utilisation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Chaque appareil a ses spécificités. Le manuel contient des informations précieuses sur l'entretien, 
                    les programmes recommandés et les erreurs à éviter. Conservez-le toujours à portée de main.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Nettoyez régulièrement</h3>
                  <p className="text-gray-700 leading-relaxed">
                    La saleté, le calcaire et les résidus sont les ennemis principaux de vos appareils. Un nettoyage 
                    hebdomadaire des parties accessibles et un détartrage mensuel peuvent faire des miracles.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Respectez les capacités</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ne surchargez jamais vos appareils. Un lave-linge ou un lave-vaisselle surchargé s'use plus vite 
                    et lave moins bien. Respectez les recommandations du fabricant.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Aérez et laissez respirer</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Après utilisation, laissez les portes entrouvertes (lave-linge, lave-vaisselle) pour éviter 
                    l'humidité et les moisissures. Assurez-vous que les appareils ont un espace suffisant pour la ventilation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conseils par appareil - Lave-linge */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">🌀 Lave-linge : les bons gestes</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <strong className="text-gray-900">Nettoyez le joint de porte après chaque lavage</strong>
                  <p className="text-sm text-gray-600 mt-1">Essuyez l'eau stagnante et les résidus pour éviter les moisissures</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <strong className="text-gray-900">Nettoyez le filtre de vidange tous les mois</strong>
                  <p className="text-sm text-gray-600 mt-1">Retirez cheveux, pièces et objets qui s'accumulent</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <strong className="text-gray-900">Lancez un cycle à 60°C à vide tous les 2 mois</strong>
                  <p className="text-sm text-gray-600 mt-1">Avec du vinaigre blanc ou un nettoyant machine pour éliminer calcaire et bactéries</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <strong className="text-gray-900">Dosez correctement la lessive</strong>
                  <p className="text-sm text-gray-600 mt-1">Un excès de lessive encrasse la machine et réduit son efficacité</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <div>
                  <strong className="text-gray-900">Vérifiez les poches avant lavage</strong>
                  <p className="text-sm text-gray-600 mt-1">Pièces, clés et objets métalliques peuvent endommager le tambour</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Conseils par appareil - Réfrigérateur */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">❄️ Réfrigérateur : maximiser la longévité</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <div>
                  <strong className="text-gray-900">Nettoyez les joints de porte tous les mois</strong>
                  <p className="text-sm text-gray-600 mt-1">Avec une éponge humide et du savon doux, pour maintenir l'étanchéité</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <div>
                  <strong className="text-gray-900">Dépoussiérez la grille arrière 2 fois par an</strong>
                  <p className="text-sm text-gray-600 mt-1">La poussière sur le condenseur force le compresseur à travailler plus</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <div>
                  <strong className="text-gray-900">Ne collez pas le réfrigérateur au mur</strong>
                  <p className="text-sm text-gray-600 mt-1">Laissez 5-10 cm d'espace pour la ventilation du compresseur</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <div>
                  <strong className="text-gray-900">Dégivrez si nécessaire</strong>
                  <p className="text-sm text-gray-600 mt-1">Pour les modèles non No Frost, dégivrez dès que la couche de givre dépasse 3mm</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <div>
                  <strong className="text-gray-900">Maintenez une température optimale</strong>
                  <p className="text-sm text-gray-600 mt-1">Entre 3°C et 5°C pour le frigo, -18°C pour le congélateur</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Conseils par appareil - Lave-vaisselle */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">🍽️ Lave-vaisselle : entretien essentiel</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <strong className="text-gray-900">Nettoyez les filtres chaque semaine</strong>
                  <p className="text-sm text-gray-600 mt-1">Retirez et rincez les filtres au fond de la cuve</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <strong className="text-gray-900">Vérifiez les bras de lavage mensuellement</strong>
                  <p className="text-sm text-gray-600 mt-1">Débouchez les trous avec un cure-dent si nécessaire</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <strong className="text-gray-900">Lancez un cycle à vide avec du vinaigre</strong>
                  <p className="text-sm text-gray-600 mt-1">Tous les 2 mois pour éliminer calcaire et résidus</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <strong className="text-gray-900">Retirez les gros résidus avant chargement</strong>
                  <p className="text-sm text-gray-600 mt-1">Pas besoin de rincer, mais éliminez les restes alimentaires importants</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <strong className="text-gray-900">Utilisez du sel régénérant</strong>
                  <p className="text-sm text-gray-600 mt-1">Indispensable en zone d'eau dure pour protéger les composants</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Conseils par appareil - Four */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">🔥 Four : maintenir les performances</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">✓</span>
                <div>
                  <strong className="text-gray-900">Nettoyez après chaque utilisation intensive</strong>
                  <p className="text-sm text-gray-600 mt-1">Essuyez les projections quand le four est encore tiède (pas brûlant)</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">✓</span>
                <div>
                  <strong className="text-gray-900">Vérifiez le joint de porte régulièrement</strong>
                  <p className="text-sm text-gray-600 mt-1">Un joint abîmé augmente la consommation et réduit l'efficacité</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">✓</span>
                <div>
                  <strong className="text-gray-900">Utilisez la pyrolyse avec modération</strong>
                  <p className="text-sm text-gray-600 mt-1">Le nettoyage pyrolytique est efficace mais énergivore, 2-3 fois par an suffisent</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">✓</span>
                <div>
                  <strong className="text-gray-900">N'utilisez pas de produits abrasifs</strong>
                  <p className="text-sm text-gray-600 mt-1">Privilégiez le bicarbonate et le vinaigre pour les parois</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Récap */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-primary/10 to-blue-100 border border-primary/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">📋 Récapitulatif : votre calendrier d'entretien</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-primary mb-3">Chaque semaine</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Nettoyer filtres lave-vaisselle</li>
                  <li>• Essuyer joint lave-linge</li>
                  <li>• Vérifier températures réfrigérateur</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-3">Chaque mois</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Nettoyer filtre lave-linge</li>
                  <li>• Vérifier joints réfrigérateur</li>
                  <li>• Contrôler bras lave-vaisselle</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-3">Tous les 2-3 mois</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Cycle à vide machine/lave-vaisselle</li>
                  <li>• Détartrage appareils</li>
                  <li>• Nettoyage profond four</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Encart CTA */}
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl p-8 text-white text-center shadow-lg">
          <Wrench className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Malgré l'entretien, une pièce a lâché ?</h3>
          <p className="mb-6 text-blue-100">
            Commandez la pièce détachée adaptée et prolongez encore la vie de votre appareil
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
