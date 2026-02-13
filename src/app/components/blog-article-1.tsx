import { Button } from "./ui/button";
import { ArrowLeft, Wrench } from "lucide-react";
import washingMachineRepairImage from '../../assets/4f7a57b1de2e9b104cb7d7bfcb06097de7ea287b.png';

interface BlogArticle1Props {
  onBack: () => void;
  onGoToShop: () => void;
}

export function BlogArticle1({ onBack, onGoToShop }: BlogArticle1Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header avec image */}
      <div className="relative h-[400px] bg-gray-900">
        <img 
          src={washingMachineRepairImage}
          alt="Diagnostic lave-linge"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Comment identifier une panne sur un lave-linge et trouver la bonne pièce détachée
            </h1>
            <p className="text-gray-200 text-lg">
              Guide complet pour diagnostiquer votre lave-linge et commander la pièce adaptée
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
            Votre lave-linge ne fonctionne plus correctement ? Avant de faire appel à un réparateur ou d'envisager un remplacement coûteux, 
            il est souvent possible d'identifier vous-même la panne et de commander la pièce détachée adaptée. Ce guide vous accompagne 
            pas à pas dans le diagnostic de votre appareil.
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Les pannes les plus courantes sur un lave-linge</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            La majorité des pannes de lave-linge sont causées par un nombre limité de pièces défectueuses. 
            Voici les problèmes les plus fréquents :
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-gray-700"><strong>Le lave-linge ne démarre pas :</strong> Problème de carte électronique, de verrouillage de porte ou de bouton marche/arrêt</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-gray-700"><strong>Une fuite d'eau :</strong> Joint de porte usé, durite percée, pompe de vidange défectueuse</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-gray-700"><strong>Le tambour ne tourne plus :</strong> Courroie cassée, moteur HS, roulements grippés</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-gray-700"><strong>L'eau ne chauffe pas :</strong> Résistance défaillante, sonde de température cassée</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-gray-700"><strong>Le lave-linge fait du bruit :</strong> Roulements usés, pompe obstruée, amortisseurs fatigués</span>
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Méthode en 5 étapes pour identifier la panne</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Étape 1 : Observer les symptômes</h3>
              <p className="text-gray-700 leading-relaxed">
                Notez précisément ce qui ne fonctionne pas. Le lave-linge s'allume-t-il ? Fait-il un bruit inhabituel ? 
                Y a-t-il un code erreur affiché ? Ces informations sont essentielles pour le diagnostic.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Étape 2 : Consulter le manuel</h3>
              <p className="text-gray-700 leading-relaxed">
                Les codes erreur affichés par votre lave-linge sont une mine d'informations. Consultez le manuel d'utilisation 
                ou recherchez le code en ligne avec la référence de votre modèle.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Étape 3 : Effectuer des tests simples</h3>
              <p className="text-gray-700 leading-relaxed">
                Vérifiez l'alimentation électrique, le robinet d'arrivée d'eau, le filtre de vidange. 
                Ces éléments peuvent causer des dysfonctionnements sans nécessiter de pièce de rechange.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Étape 4 : Identifier la pièce défectueuse</h3>
              <p className="text-gray-700 leading-relaxed">
                Une fois les causes simples écartées, ouvrez le lave-linge (débranché !) et inspectez visuellement 
                les pièces suspectes : courroie, durites, pompe, câbles électriques.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Étape 5 : Noter les références</h3>
              <p className="text-gray-700 leading-relaxed">
                Relevez la marque, le modèle et le numéro de série de votre lave-linge (généralement sur une étiquette 
                à l'intérieur de la porte). Ces informations garantissent la compatibilité de la pièce commandée.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Comment trouver la bonne pièce détachée ?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Une fois la pièce défectueuse identifiée, il est crucial de commander la bonne référence. Voici nos conseils :
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold mb-3 text-gray-900">💡 Astuce professionnelle</h3>
            <p className="text-gray-700 leading-relaxed">
              Prenez en photo la pièce défectueuse et notez toutes les références inscrites dessus. 
              Cela vous aidera à trouver la pièce compatible ou à demander conseil à un expert.
            </p>
          </div>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">Utilisez le numéro de série de votre appareil pour une recherche précise</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">Vérifiez les références constructeur sur la pièce actuelle</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">Privilégiez les pièces d'origine ou certifiées compatibles</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">Consultez un spécialiste en cas de doute sur la compatibilité</span>
            </li>
          </ul>
        </section>

        {/* Encart CTA */}
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl p-8 text-white text-center shadow-lg">
          <Wrench className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Besoin de la pièce détachée pour votre lave-linge ?</h3>
          <p className="mb-6 text-blue-100">
            Trouvez la pièce compatible avec votre modèle en quelques clics grâce à notre diagnostic IA
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