import { useState, useEffect, useRef } from 'react';
import { Html5QrcodeScanner, Html5QrcodeScanType } from 'html5-qrcode';
import { Camera, Keyboard, X, CheckCircle, Scan } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function BarcodeScanner() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scanMode, setScanMode] = useState<'camera' | 'manual'>('camera');
  const [scannedCode, setScannedCode] = useState<string>('');
  const [manualCode, setManualCode] = useState<string>('');
  const [isScanning, setIsScanning] = useState(false);
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);
  const scannerContainerRef = useRef<HTMLDivElement>(null);

  // Injecter du CSS personnalisé pour styliser les éléments du scanner
  useEffect(() => {
    const styleId = 'barcode-scanner-custom-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        #qr-reader button {
          background-color: #305CDE !important;
          color: white !important;
          border: none !important;
          padding: 8px 16px !important;
          border-radius: 8px !important;
          font-size: 14px !important;
          font-weight: 500 !important;
          cursor: pointer !important;
          transition: all 0.2s !important;
          box-shadow: 0 2px 4px rgba(48, 92, 222, 0.2) !important;
        }
        #qr-reader button:hover {
          background-color: #2548b8 !important;
          box-shadow: 0 4px 8px rgba(48, 92, 222, 0.3) !important;
        }
        #qr-reader__dashboard_section_csr button {
          background-color: #305CDE !important;
          margin: 4px !important;
        }
        #html5-qrcode-button-camera-permission {
          background-color: #305CDE !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    if (isOpen && scanMode === 'camera' && !scannerRef.current) {
      setIsScanning(true);
      
      const scanner = new Html5QrcodeScanner(
        'qr-reader',
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
          supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
          rememberLastUsedCamera: true,
        },
        false
      );

      scanner.render(
        (decodedText) => {
          setScannedCode(decodedText);
          setIsScanning(false);
          scanner.clear();
          scannerRef.current = null;
        },
        (error) => {
          // Silently handle scan errors
        }
      );

      scannerRef.current = scanner;
    }

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(() => {});
        scannerRef.current = null;
      }
    };
  }, [isOpen, scanMode]);

  const handleClose = () => {
    if (scannerRef.current) {
      scannerRef.current.clear().catch(() => {});
      scannerRef.current = null;
    }
    setIsOpen(false);
    setScannedCode('');
    setManualCode('');
    setIsScanning(false);
  };

  const handleManualSubmit = () => {
    if (manualCode.trim()) {
      setScannedCode(manualCode.trim());
    }
  };

  const handleSearch = () => {
    if (scannedCode) {
      // Simuler une recherche avec le code scanné
      console.log('Recherche pour le code:', scannedCode);
      // TODO: Implémenter la logique de recherche
      handleClose();
    }
  };

  return (
    <>
      {/* Bouton d'ouverture du scanner */}
      <div className="mt-12 mb-12">
        <Button
          onClick={() => setIsOpen(true)}
          className="mx-auto flex items-center gap-3 px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          style={{ backgroundColor: '#305CDE' }}
        >
          <Scan className="w-6 h-6" />
          {t.barcodeScanner.buttonText}
        </Button>
      </div>

      {/* Modal du scanner */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">
                  Scanner un code
                </h3>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Mode Selector */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      if (scannerRef.current) {
                        scannerRef.current.clear().catch(() => {});
                        scannerRef.current = null;
                      }
                      setScanMode('camera');
                      setScannedCode('');
                    }}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all ${
                      scanMode === 'camera'
                        ? 'bg-[#305CDE] text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Camera className="w-5 h-5" />
                    Scanner avec caméra
                  </button>
                  <button
                    onClick={() => {
                      if (scannerRef.current) {
                        scannerRef.current.clear().catch(() => {});
                        scannerRef.current = null;
                      }
                      setScanMode('manual');
                      setScannedCode('');
                      setIsScanning(false);
                    }}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all ${
                      scanMode === 'manual'
                        ? 'bg-[#305CDE] text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Keyboard className="w-5 h-5" />
                    Saisie manuelle
                  </button>
                </div>
              </div>

              {/* Scanner Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                {scanMode === 'camera' ? (
                  <div className="space-y-4">
                    {!scannedCode ? (
                      <div>
                        <div
                          id="qr-reader"
                          ref={scannerContainerRef}
                          className="w-full rounded-lg overflow-hidden"
                        />
                        <p className="text-center text-sm text-gray-600 mt-4">
                          {t.barcodeScanner.scanningText}
                        </p>
                      </div>
                    ) : (
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center"
                      >
                        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          Code détecté !
                        </h4>
                        <p className="text-2xl font-mono font-bold text-[#305CDE] mb-4">
                          {scannedCode}
                        </p>
                        <Button
                          onClick={handleSearch}
                          className="w-full font-medium"
                          style={{ backgroundColor: '#10b981' }}
                        >
                          Rechercher cette référence
                        </Button>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Entrez le code manuellement
                      </label>
                      <input
                        type="text"
                        value={manualCode}
                        onChange={(e) => setManualCode(e.target.value)}
                        placeholder="Ex: 1234567890123"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#305CDE] focus:border-transparent text-lg font-mono"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleManualSubmit();
                          }
                        }}
                      />
                    </div>
                    
                    {!scannedCode ? (
                      <Button
                        onClick={handleManualSubmit}
                        disabled={!manualCode.trim()}
                        className="w-full font-medium"
                        style={{ backgroundColor: '#305CDE' }}
                      >
                        Valider le code
                      </Button>
                    ) : (
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center"
                      >
                        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          Code validé !
                        </h4>
                        <p className="text-2xl font-mono font-bold text-[#305CDE] mb-4">
                          {scannedCode}
                        </p>
                        <Button
                          onClick={handleSearch}
                          className="w-full font-medium"
                          style={{ backgroundColor: '#10b981' }}
                        >
                          Rechercher cette référence
                        </Button>
                      </motion.div>
                    )}

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                      <p className="text-sm text-gray-700">
                        <strong>Où trouver le code ?</strong>
                      </p>
                      <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc list-inside">
                        <li>Sur la plaque signalétique de votre appareil</li>
                        <li>À l'intérieur de la porte (lave-linge, lave-vaisselle)</li>
                        <li>Sur l'emballage de la pièce détachée</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}