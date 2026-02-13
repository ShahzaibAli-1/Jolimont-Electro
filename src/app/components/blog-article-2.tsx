import { Button } from "./ui/button";
import { ArrowLeft, Wrench } from "lucide-react";
import repairOrReplaceImage from '../../assets/f65277e71520d7ff738a6891a47ce318917a4053.png';

interface BlogArticle2Props {
  onBack: () => void;
  onGoToShop: () => void;
}

export function BlogArticle2({ onBack, onGoToShop }: BlogArticle2Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header avec image */}
      <div className="relative h-[400px] bg-gray-900">
        <img 
          src={repairOrReplaceImage}
          alt="Réparer ou remplacer"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Réparer ou remplacer un appareil électroménager : comment faire le bon choix ?
            </h1>
            <p className="text-gray-200 text-lg">
              Les critères essentiels pour prendre la meilleure décision économique et écologique
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
            Face à un appareil électroménager en panne, la question se pose inévitablement : vaut-il mieux le réparer 
            ou investir dans un nouveau modèle ? Cette décision n'est pas toujours évidente et dépend de plusieurs facteurs 
            économiques, techniques et environnementaux. Voici un guide complet pour vous aider à faire le bon choix.
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">La règle des 50% : un premier indicateur</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Une règle simple utilisée par les professionnels consiste à comparer le coût de la réparation au prix d'un appareil neuf :
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold mb-3 text-gray-900">✓ Optez pour la réparation si :</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Le coût de la réparation (pièce + main d'œuvre) représente <strong>moins de 50%</strong> du prix d'un appareil neuf équivalent.
            </p>
            <p className="text-sm text-gray-600 italic">
              Exemple : Si votre lave-linge vaut 600€ neuf et que la réparation coûte 200€, la réparation est rentable.
            </p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-gray-900">✗ Envisagez le remplacement si :</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Le coût de la réparation dépasse <strong>50% du prix neuf</strong>, surtout si l'appareil est ancien.
            </p>
            <p className="text-sm text-gray-600 italic">
              Exemple : Réparation à 400€ pour un appareil qui vaut 600€ neuf = peu rentable à long terme.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">L'âge de l'appareil : un facteur déterminant</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            La durée de vie moyenne varie selon le type d'appareil. Voici les durées de vie indicatives :
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Lave-linge</h3>
              <p className="text-3xl font-bold text-primary mb-1">10-12 ans</p>
              <p className="text-sm text-gray-600">Réparation rentable jusqu'à 7-8 ans</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Réfrigérateur</h3>
              <p className="text-3xl font-bold text-primary mb-1">12-15 ans</p>
              <p className="text-sm text-gray-600">Réparation rentable jusqu'à 10 ans</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Lave-vaisselle</h3>
              <p className="text-3xl font-bold text-primary mb-1">10-12 ans</p>
              <p className="text-sm text-gray-600">Réparation rentable jusqu'à 7 ans</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Four</h3>
              <p className="text-3xl font-bold text-primary mb-1">13-15 ans</p>
              <p className="text-sm text-gray-600">Réparation rentable jusqu'à 10 ans</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-gray-900">💡 Conseil d'expert</h3>
            <p className="text-gray-700 leading-relaxed">
              Si votre appareil a dépassé 75% de sa durée de vie moyenne et nécessite une réparation coûteuse, 
              il est généralement préférable d'investir dans un modèle neuf plus économe en énergie.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Les autres critères à prendre en compte</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">1. La consommation énergétique</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Les appareils récents sont bien plus économes en énergie. Un vieux réfrigérateur de classe C peut consommer 
                2 à 3 fois plus qu'un modèle récent classe A+++.
              </p>
              <p className="text-sm text-gray-600 italic">
                💰 L'économie d'énergie peut compenser le coût d'un nouvel appareil en 3-5 ans.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">2. La disponibilité des pièces</h3>
              <p className="text-gray-700 leading-relaxed">
                Pour les appareils de plus de 10 ans, certaines pièces peuvent être difficiles à trouver ou très coûteuses. 
                Vérifiez la disponibilité avant de vous engager dans une réparation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">3. L'impact environnemental</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Réparer plutôt que jeter est toujours plus écologique. La fabrication d'un appareil neuf génère une empreinte carbone 
                importante qu'il faut plusieurs années d'utilisation pour compenser.
              </p>
              <p className="text-sm text-green-600 font-semibold">
                🌱 En réparant, vous contribuez à réduire les déchets électroniques et l'extraction de matières premières.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">4. Les pannes répétées</h3>
              <p className="text-gray-700 leading-relaxed">
                Si votre appareil tombe régulièrement en panne (plus de 2-3 fois en 2 ans), c'est un signal qu'il arrive en fin de vie. 
                Les réparations successives deviennent rapidement plus coûteuses qu'un remplacement.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Notre tableau décisionnel simplifié</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="p-4 text-left">Situation</th>
                  <th className="p-4 text-left">Décision recommandée</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                  <td className="p-4 text-gray-700">Appareil &lt; 5 ans + réparation &lt; 200€</td>
                  <td className="p-4 font-semibold text-green-600">✓ Réparer</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 text-gray-700">Appareil 5-8 ans + panne simple</td>
                  <td className="p-4 font-semibold text-green-600">✓ Réparer</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 text-gray-700">Appareil 8-10 ans + grosse panne</td>
                  <td className="p-4 font-semibold text-orange-600">⚠ Évaluer au cas par cas</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 text-gray-700">Appareil &gt; 10 ans + réparation &gt; 300€</td>
                  <td className="p-4 font-semibold text-red-600">✗ Remplacer</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 text-gray-700">Pannes répétées (3+ en 2 ans)</td>
                  <td className="p-4 font-semibold text-red-600">✗ Remplacer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Encart CTA */}
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl p-8 text-white text-center shadow-lg">
          <Wrench className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Vous avez décidé de réparer ? Parfait !</h3>
          <p className="mb-6 text-blue-100">
            Trouvez la pièce détachée adaptée à votre appareil et commencez la réparation dès aujourd'hui
          </p>
          <Button 
            onClick={onGoToShop}
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 font-semibold"
          >
            Commander ma pièce détachée
          </Button>
        </div>
      </article>
    </div>
  );
}