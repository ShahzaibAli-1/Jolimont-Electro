import { motion, useInView } from 'motion/react';
import { Plane, Truck, MapPin, Package } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export function DeliveryAnimation() {
  const [hours, setHours] = useState(24);
  const sectionRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const [containerWidth, setContainerWidth] = useState(0);

  // Mesurer la largeur du conteneur
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Animation du compteur d'heures - se rejoue à chaque fois que la section est visible
  useEffect(() => {
    if (isInView) {
      setHours(24); // Réinitialiser à 24h
      let currentHour = 24;
      const interval = setInterval(() => {
        currentHour += 1;
        if (currentHour > 48) {
          clearInterval(interval);
        } else {
          setHours(currentHour);
        }
      }, 150); // Ralenti : 150ms par heure pour un défilement plus visible

      return () => clearInterval(interval);
    } else {
      // Réinitialiser quand on quitte la section
      setHours(24);
    }
  }, [isInView]);

  // Calcul des distances pour l'animation en fonction de la largeur
  const planeDistance = containerWidth * 0.35;
  const truckDistance = containerWidth * 0.35;

  return (
    <section ref={sectionRef} className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Livraison rapide dans toute l'Europe
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            De notre stock à votre domicile en 24 à 72h, grâce à une logistique maîtrisée.
          </p>
        </div>

        {/* Animation Container */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto h-[200px] sm:h-[280px]">
          {/* Compteur central */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border-2 sm:border-4 border-primary/20 px-4 py-3 sm:px-8 sm:py-6 backdrop-blur-sm">
              <div className="text-center">
                <motion.div
                  key={hours}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl sm:text-5xl lg:text-6xl font-bold text-primary mb-1 sm:mb-2"
                >
                  {hours}h
                </motion.div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                  Délai moyen
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ligne de trajectoire */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1000 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* === TRAJET 1 : Stock → Avion (courbe bleue) === */}
            {/* Ligne pointillée bleue de fond (toujours visible) */}
            <path
              d="M 50 150 Q 300 50, 500 150"
              stroke="#305CDE"
              strokeWidth="3"
              strokeDasharray="8 8"
              fill="none"
              opacity="0.25"
              className="sm:stroke-[4]"
            />
            
            {/* Ligne pleine bleue qui se trace progressivement */}
            <motion.path
              d="M 50 150 Q 300 50, 500 150"
              stroke="#305CDE"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              className="sm:stroke-[5] lg:stroke-[6]"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: isInView ? 1 : 0
              }}
              transition={{
                duration: 2.5,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
            />

            {/* === TRAJET 2 : Avion → Camion (ligne droite verte) === */}
            {/* Ligne pointillée verte de fond (toujours visible) */}
            <path
              d="M 500 150 L 950 150"
              stroke="#10b981"
              strokeWidth="3"
              strokeDasharray="8 8"
              fill="none"
              opacity="0.25"
              className="sm:stroke-[4]"
            />
            
            {/* Ligne pleine verte qui se trace progressivement */}
            <motion.path
              d="M 500 150 L 950 150"
              stroke="#10b981"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              className="sm:stroke-[5] lg:stroke-[6]"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: isInView ? 1 : 0
              }}
              transition={{
                duration: 3,
                delay: 1.5,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
            />
          </svg>

          {/* Points clés du parcours */}
          <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 lg:px-12">
            {/* Point de départ - Entrepôt */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary to-primary/80 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl flex items-center justify-center mb-2 sm:mb-3">
                <Package className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <div className="text-[10px] sm:text-xs lg:text-sm font-medium text-center">
                Stock<br />européen
              </div>
            </motion.div>

            {/* Avion en mouvement - s'arrête au centre (compteur) */}
            <motion.div
              initial={{ x: 0, y: 0, rotate: 0 }}
              whileInView={{ 
                x: [0, planeDistance * 0.25, planeDistance * 0.5, planeDistance * 0.75, planeDistance],
                y: [0, -25, -50, -45, -40],
                rotate: [0, -8, -10, -5, 0]
              }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 2.5,
                ease: [0.43, 0.13, 0.23, 0.96],
                times: [0, 0.25, 0.5, 0.75, 1]
              }}
              className="absolute left-[8%] sm:left-[15%] top-1/2 -translate-y-1/2"
            >
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg flex items-center justify-center border border-primary/20 sm:border-2"
                whileInView={{
                  boxShadow: [
                    "0 4px 6px rgba(48, 92, 222, 0.1)",
                    "0 8px 15px rgba(48, 92, 222, 0.15)",
                    "0 10px 20px rgba(48, 92, 222, 0.2)",
                    "0 8px 15px rgba(48, 92, 222, 0.15)",
                    "0 4px 6px rgba(48, 92, 222, 0.1)"
                  ]
                }}
                transition={{ 
                  duration: 2.5, 
                  times: [0, 0.25, 0.5, 0.75, 1],
                  ease: "easeInOut"
                }}
              >
                <Plane className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary" />
              </motion.div>
            </motion.div>

            {/* Camion en mouvement - va jusqu'à la destination */}
            <motion.div
              initial={{ x: 0, y: 0 }}
              whileInView={{ 
                x: [0, truckDistance * 0.2, truckDistance * 0.4, truckDistance * 0.6, truckDistance * 0.8, truckDistance],
                y: [0, 3, 0, 3, 0, 0]
              }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 3,
                ease: [0.43, 0.13, 0.23, 0.96],
                delay: 1.5,
                times: [0, 0.2, 0.4, 0.6, 0.8, 1]
              }}
              className="absolute left-[50%] top-1/2 -translate-y-1/2 -translate-x-1/2"
            >
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg flex items-center justify-center border border-success/30 sm:border-2"
                whileInView={{
                  boxShadow: [
                    "0 4px 6px rgba(16, 185, 129, 0.1)",
                    "0 6px 12px rgba(16, 185, 129, 0.15)",
                    "0 8px 15px rgba(16, 185, 129, 0.2)",
                    "0 10px 20px rgba(16, 185, 129, 0.25)",
                    "0 8px 15px rgba(16, 185, 129, 0.2)",
                    "0 4px 6px rgba(16, 185, 129, 0.1)"
                  ]
                }}
                transition={{ 
                  duration: 3, 
                  delay: 1.5, 
                  times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  ease: "easeInOut"
                }}
              >
                <Truck className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-success" />
              </motion.div>
            </motion.div>

            {/* Point d'arrivée - Maison */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 15 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-success to-success/80 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl flex items-center justify-center mb-2 sm:mb-3">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <div className="text-[10px] sm:text-xs lg:text-sm font-medium text-center">
                Chez vous<br />garanti
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features en dessous */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-sm border border-border"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Package className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Stock permanent</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Plus de 50 000 références disponibles immédiatement
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-sm border border-border"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-success/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
            </div>
            <h3 className="font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Suivi en temps réel</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Recevez des notifications à chaque étape de livraison
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-sm border border-border"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-warning/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-warning" />
            </div>
            <h3 className="font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Livraison sécurisée</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Colis protégé et assuré jusqu'à votre porte
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}