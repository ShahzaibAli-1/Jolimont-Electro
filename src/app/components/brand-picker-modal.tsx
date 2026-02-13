import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { toast } from 'sonner';

// Import des logos
import thomsonLogo from '../../assets/32d0a2f0a34045d0726d13d0c9a6cc0d38de1b39.png';
import bekoLogo from '../../assets/429a63c30e79034f4e2014828962054efcd102d2.png';
import lgLogo from '../../assets/02ab6d2362f2b27023125804934c0efb85c9e49f.png';
import mieleLogo from '../../assets/fdec5156a57eb6b9116e943e3b8ba9ffd8f9fd84.png';
import samsungLogo from '../../assets/79f8ae3dd17c139504f9ac05813a1d2fdf2d44a1.png';
import whirlpoolLogo from '../../assets/3c3c9a028e00a0b64228193f8e389fd33e4ca255.png';
import siemensLogo from '../../assets/480e6a07858ac4d35221ea2789e5c06239ee2e0e.png';
import boschLogo from '../../assets/520a487a6d1b0355afdaebaa6147405947f5ce50.png';

interface BrandPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (brand: string) => void;
}

export function BrandPickerModal({ isOpen, onClose, onSelect }: BrandPickerModalProps) {
  const handleBrandSelect = (brand: string) => {
    onSelect(brand);
    toast.success(`${brand} sélectionné`);
    onClose();
  };

  // Marques populaires avec leurs logos
  const popularBrands = [
    { name: 'BOSCH', logo: boschLogo },
    { name: 'Siemens', logo: siemensLogo },
    { name: 'Samsung', logo: samsungLogo },
    { name: 'LG', logo: lgLogo },
    { name: 'Whirlpool', logo: whirlpoolLogo },
    { name: 'BEKO', logo: bekoLogo },
    { name: 'Miele', logo: mieleLogo },
    { name: 'Thomson', logo: thomsonLogo },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-30 flex items-start justify-center p-4 pt-[140px] overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[calc(100vh-160px)] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border" style={{ backgroundColor: '#F4F6F8' }}>
              <h2 className="text-2xl font-bold text-gray-900">Sélectionner une marque</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content avec scroll */}
            <div className="flex-1 overflow-y-auto p-6" style={{ maxHeight: 'calc(100vh - 260px)' }}>
              {/* Marques populaires */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Marques populaires</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {popularBrands.map((brand) => (
                    <button
                      key={brand.name}
                      onClick={() => handleBrandSelect(brand.name)}
                      className="group relative overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-all bg-white shadow-sm hover:shadow-md p-6 flex items-center justify-center min-h-[100px]"
                    >
                      <img 
                        src={brand.logo} 
                        alt={brand.name} 
                        className="max-w-full max-h-12 w-auto h-auto object-contain group-hover:scale-105 transition-transform" 
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Toutes les marques */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Toutes les marques</h3>
                <div className="space-y-6">
                  {/* A */}
                  <div className="flex gap-4">
                    <div className="w-8 flex-shrink-0">
                      <span className="font-bold text-lg text-primary">A</span>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                      {['AEG', 'Acer', 'Aiwa', 'Akai', 'Altus', 'Amway', 'Apple', 'Arçelik', 'Ariston', 'Asus', 'Atlantic'].map((item) => (
                        <button
                          key={item}
                          onClick={() => handleBrandSelect(item)}
                          className="text-left text-sm hover:text-primary hover:underline transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* B */}
                  <div className="flex gap-4">
                    <div className="w-8 flex-shrink-0">
                      <span className="font-bold text-lg text-primary">B</span>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                      {['Bauknecht', 'BEKO', 'Belling', 'Blaupunkt', 'Blomberg', 'Bomann', 'BOSCH', 'Braun', 'Brandt', 'Brother'].map((item) => (
                        <button
                          key={item}
                          onClick={() => handleBrandSelect(item)}
                          className="text-left text-sm hover:text-primary hover:underline transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* C */}
                  <div className="flex gap-4">
                    <div className="w-8 flex-shrink-0">
                      <span className="font-bold text-lg text-primary">C</span>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                      {['Candy', 'Canon', 'Casio', 'Clatronic', 'Constructa', 'Continental Edison', 'Costway', 'Cylinda'].map((item) => (
                        <button
                          key={item}
                          onClick={() => handleBrandSelect(item)}
                          className="text-left text-sm hover:text-primary hover:underline transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* D */}
                  <div className="flex gap-4">
                    <div className="w-8 flex-shrink-0">
                      <span className="font-bold text-lg text-primary">D</span>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                      {['Daewoo', 'De Dietrich', 'DeLonghi', 'Dell', 'Dyson'].map((item) => (
                        <button
                          key={item}
                          onClick={() => handleBrandSelect(item)}
                          className="text-left text-sm hover:text-primary hover:underline transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* E */}
                  <div className="flex gap-4">
                    <div className="w-8 flex-shrink-0">
                      <span className="font-bold text-lg text-primary">E</span>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                      {['Electrolux', 'Essentiel B', 'Euromaid'].map((item) => (
                        <button
                          key={item}
                          onClick={() => handleBrandSelect(item)}
                          className="text-left text-sm hover:text-primary hover:underline transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* F */}
                  <div className="flex gap-4">
                    <div className="w-8 flex-shrink-0">
                      <span className="font-bold text-lg text-primary">F</span>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                      {['Fagor', 'Fisher & Paykel', 'Franke', 'Frigidaire', 'Fujitsu'].map((item) => (
                        <button
                          key={item}
                          onClick={() => handleBrandSelect(item)}
                          className="text-left text-sm hover:text-primary hover:underline transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* G */}
                  <div className="flex gap-4">
                    <div className="w-8 flex-shrink-0">
                      <span className="font-bold text-lg text-primary">G</span>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                      {['Gaggenau', 'Gorenje', 'Grundig'].map((item) => (
                        <button
                          key={item}
                          onClick={() => handleBrandSelect(item)}
                          className="text-left text-sm hover:text-primary hover:underline transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* H */}
                  <div className="flex gap-4">
                    <div className="w-8 flex-shrink-0">
                      <span className="font-bold text-lg text-primary">H</span>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                      {['Haier', 'Hanseatic', 'Hisense', 'Hitachi', 'Hoover', 'Hotpoint', 'Hotpoint Ariston', 'HP', 'Huawei'].map((item) => (
                        <button
                          key={item}
                          onClick={() => handleBrandSelect(item)}
                          className="text-left text-sm hover:text-primary hover:underline transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* I */}
                  <div className="flex gap-4">
                    <div className="w-8 flex-shrink-0">
                      <span className="font-bold text-lg text-primary">I</span>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                      {['Ignis', 'Indesit', 'InnJoo'].map((item) => (
                        <button
                          key={item}
                          onClick={() => handleBrandSelect(item)}
                          className="text-left text-sm hover:text-primary hover:underline transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* J */}
                  <div className="flex gap-4">
                    <div className="w-8 flex-shrink-0">
                      <span className="font-bold text-lg text-primary">J</span>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                      {['JVC'].map((item) => (
                        <button
                          key={item}
                          onClick={() => handleBrandSelect(item)}
                          className="text-left text-sm hover:text-primary hover:underline transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* K */}
                  <div className="flex gap-4">
                    <div className="w-8 flex-shrink-0">
                      <span className="font-bold text-lg text-primary">K</span>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                      {['Kenwood', 'KitchenAid', 'Küppersbusch'].map((item) => (
                        <button
                          key={item}
                          onClick={() => handleBrandSelect(item)}
                          className="text-left text-sm hover:text-primary hover:underline transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* L */}
                  <div className="flex gap-4">
                    <div className="w-8 flex-shrink-0">
                      <span className="font-bold text-lg text-primary">L</span>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                      {['Lenovo', 'LG', 'Liebherr', 'Listo'].map((item) => (
                        <button
                          key={item}
                          onClick={() => handleBrandSelect(item)}
                          className="text-left text-sm hover:text-primary hover:underline transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* M */}
                  <div className="flex gap-4">
                    <div className="w-8 flex-shrink-0">
                      <span className="font-bold text-lg text-primary">M</span>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                      {['Magimix', 'Maytag', 'Miele', 'Midea', 'Moulinex', 'MSI'].map((item) => (
                        <button
                          key={item}
                          onClick={() => handleBrandSelect(item)}
                          className="text-left text-sm hover:text-primary hover:underline transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* N */}
                  <div className="flex gap-4">
                    <div className="w-8 flex-shrink-0">
                      <span className="font-bold text-lg text-primary">N</span>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                      {['Neff', 'Nokia', 'Nordmende'].map((item) => (
                        <button
                          key={item}
                          onClick={() => handleBrandSelect(item)}
                          className="text-left text-sm hover:text-primary hover:underline transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* O */}
                  <div className="flex gap-4">
                    <div className="w-8 flex-shrink-0">
                      <span className="font-bold text-lg text-primary">O</span>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                      {['OnePlus', 'Oppo'].map((item) => (
                        <button
                          key={item}
                          onClick={() => handleBrandSelect(item)}
                          className="text-left text-sm hover:text-primary hover:underline transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* P */}
                  <div className="flex gap-4">
                    <div className="w-8 flex-shrink-0">
                      <span className="font-bold text-lg text-primary">P</span>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                      {['Panasonic', 'Philips', 'Pioneer', 'Privileg'].map((item) => (
                        <button
                          key={item}
                          onClick={() => handleBrandSelect(item)}
                          className="text-left text-sm hover:text-primary hover:underline transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* R */}
                  <div className="flex gap-4">
                    <div className="w-8 flex-shrink-0">
                      <span className="font-bold text-lg text-primary">R</span>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                      {['Realme', 'Rosières', 'Rowenta'].map((item) => (
                        <button
                          key={item}
                          onClick={() => handleBrandSelect(item)}
                          className="text-left text-sm hover:text-primary hover:underline transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* S */}
                  <div className="flex gap-4">
                    <div className="w-8 flex-shrink-0">
                      <span className="font-bold text-lg text-primary">S</span>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                      {['Samsung', 'Sauter', 'Scholtes', 'Sharp', 'Siemens', 'Singer', 'Smeg', 'Sony', 'SEB'].map((item) => (
                        <button
                          key={item}
                          onClick={() => handleBrandSelect(item)}
                          className="text-left text-sm hover:text-primary hover:underline transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* T */}
                  <div className="flex gap-4">
                    <div className="w-8 flex-shrink-0">
                      <span className="font-bold text-lg text-primary">T</span>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                      {['TCL', 'Techwood', 'Tefal', 'Thomson', 'Toshiba'].map((item) => (
                        <button
                          key={item}
                          onClick={() => handleBrandSelect(item)}
                          className="text-left text-sm hover:text-primary hover:underline transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* V */}
                  <div className="flex gap-4">
                    <div className="w-8 flex-shrink-0">
                      <span className="font-bold text-lg text-primary">V</span>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                      {['Vestel', 'Vorwerk', 'V-Zug'].map((item) => (
                        <button
                          key={item}
                          onClick={() => handleBrandSelect(item)}
                          className="text-left text-sm hover:text-primary hover:underline transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* W */}
                  <div className="flex gap-4">
                    <div className="w-8 flex-shrink-0">
                      <span className="font-bold text-lg text-primary">W</span>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                      {['Westinghouse', 'Whirlpool', 'White Westinghouse'].map((item) => (
                        <button
                          key={item}
                          onClick={() => handleBrandSelect(item)}
                          className="text-left text-sm hover:text-primary hover:underline transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* X */}
                  <div className="flex gap-4">
                    <div className="w-8 flex-shrink-0">
                      <span className="font-bold text-lg text-primary">X</span>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                      {['Xiaomi'].map((item) => (
                        <button
                          key={item}
                          onClick={() => handleBrandSelect(item)}
                          className="text-left text-sm hover:text-primary hover:underline transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Z */}
                  <div className="flex gap-4">
                    <div className="w-8 flex-shrink-0">
                      <span className="font-bold text-lg text-primary">Z</span>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                      {['Zanussi', 'Zelmer', 'ZTE'].map((item) => (
                        <button
                          key={item}
                          onClick={() => handleBrandSelect(item)}
                          className="text-left text-sm hover:text-primary hover:underline transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}