import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { WasherIcon, DishwasherIcon, DryerIcon, RefrigeratorIcon, RangeIcon, MicrowaveIcon } from './appliance-icons';
import { useLanguage } from '../contexts/LanguageContext';

interface DiagnosticStepperProps {
  onComplete: (data: {
    appliance: string;
    symptoms: string[];
    confirmed: boolean;
  }) => void;
}

export function DiagnosticStepper({ onComplete }: DiagnosticStepperProps) {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAppliance, setSelectedAppliance] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [customSymptom, setCustomSymptom] = useState('');

  const appliances = [
    { 
      id: 'washing-machine', 
      name: t.diagnosticStepper.appliances.washingMachine,
      icon: <WasherIcon className="w-12 h-16 mx-auto text-gray-400 group-hover:text-[#305CDE] transition-colors duration-300" />
    },
    { 
      id: 'dishwasher', 
      name: t.diagnosticStepper.appliances.dishwasher,
      icon: <DishwasherIcon className="w-12 h-16 mx-auto text-gray-400 group-hover:text-[#305CDE] transition-colors duration-300" />
    },
    { 
      id: 'dryer', 
      name: t.diagnosticStepper.appliances.dryer,
      icon: <DryerIcon className="w-12 h-16 mx-auto text-gray-400 group-hover:text-[#305CDE] transition-colors duration-300" />
    },
    { 
      id: 'fridge', 
      name: t.diagnosticStepper.appliances.fridge,
      icon: <RefrigeratorIcon className="w-12 h-16 mx-auto text-gray-400 group-hover:text-[#305CDE] transition-colors duration-300" />
    },
    { 
      id: 'oven', 
      name: t.diagnosticStepper.appliances.oven,
      icon: <RangeIcon className="w-12 h-16 mx-auto text-gray-400 group-hover:text-[#305CDE] transition-colors duration-300" />
    },
    { 
      id: 'microwave', 
      name: t.diagnosticStepper.appliances.microwave,
      icon: <MicrowaveIcon className="w-12 h-16 mx-auto text-gray-400 group-hover:text-[#305CDE] transition-colors duration-300" />
    }
  ];

  const commonSymptoms = [
    t.diagnosticStepper.symptoms.waterLeak,
    t.diagnosticStepper.symptoms.abnormalNoise,
    t.diagnosticStepper.symptoms.doesntStart,
    t.diagnosticStepper.symptoms.errorDisplayed,
    t.diagnosticStepper.symptoms.badSmell,
    t.diagnosticStepper.symptoms.doesntHeat,
    t.diagnosticStepper.symptoms.doorBlocked,
    t.diagnosticStepper.symptoms.excessiveVibrations
  ];

  const steps = t.diagnosticStepper.steps;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete({
        appliance: selectedAppliance,
        symptoms: selectedSymptoms,
        confirmed: true
      });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const addCustomSymptom = () => {
    if (customSymptom.trim() && !selectedSymptoms.includes(customSymptom)) {
      setSelectedSymptoms([...selectedSymptoms, customSymptom]);
      setCustomSymptom('');
    }
  };

  const canProceed = () => {
    if (currentStep === 0) return selectedAppliance !== '';
    if (currentStep === 1) return selectedSymptoms.length > 0;
    return true;
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center flex-1">
              <div className="flex items-center">
                <motion.div
                  initial={false}
                  animate={{
                    backgroundColor: index <= currentStep ? '#2563eb' : '#e2e8f0',
                    scale: index === currentStep ? 1.1 : 1
                  }}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                >
                  {index < currentStep ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <span className="text-sm font-medium">{index + 1}</span>
                  )}
                </motion.div>
                <span className="ml-2 text-sm font-medium hidden sm:inline">
                  {step}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 bg-border mx-2">
                  <motion.div
                    initial={false}
                    animate={{
                      width: index < currentStep ? '100%' : '0%'
                    }}
                    className="h-full bg-primary"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="bg-white border border-border rounded-2xl p-6 min-h-[400px]"
        >
          {/* Step 1: Choose Appliance */}
          {currentStep === 0 && (
            <div>
              <h3 className="font-semibold mb-2">{t.diagnosticStepper.applianceQuestion}</h3>
              <p className="text-sm text-muted-foreground mb-6">
                {t.diagnosticStepper.applianceSubtitle}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {appliances.map((appliance) => (
                  <button
                    key={appliance.id}
                    onClick={() => setSelectedAppliance(appliance.id)}
                    className={`
                      group p-6 rounded-xl border-2 transition-all duration-200
                      hover:border-primary/50 hover:shadow-md
                      ${selectedAppliance === appliance.id
                        ? 'border-primary bg-primary/5 shadow-md'
                        : 'border-border bg-white'
                      }
                    `}
                  >
                    <div className="mb-2">{appliance.icon}</div>
                    <p className="text-sm font-medium">{appliance.name}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Select Symptoms */}
          {currentStep === 1 && (
            <div>
              <h3 className="font-semibold mb-2">{t.diagnosticStepper.symptomsQuestion}</h3>
              <p className="text-sm text-muted-foreground mb-6">
                {t.diagnosticStepper.symptomsSubtitle}
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {commonSymptoms.map((symptom) => (
                    <Badge
                      key={symptom}
                      variant={selectedSymptoms.includes(symptom) ? 'default' : 'outline'}
                      className="cursor-pointer px-4 py-2 text-sm"
                      onClick={() => toggleSymptom(symptom)}
                    >
                      {selectedSymptoms.includes(symptom) && (
                        <Check className="w-3 h-3 mr-1" />
                      )}
                      {symptom}
                    </Badge>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <label className="text-sm font-medium mb-2 block">
                    {t.diagnosticStepper.customSymptomLabel}
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={customSymptom}
                      onChange={(e) => setCustomSymptom(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addCustomSymptom()}
                      placeholder={t.diagnosticStepper.customSymptomPlaceholder}
                      className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button onClick={addCustomSymptom} variant="outline">
                      {t.diagnosticStepper.addButton}
                    </Button>
                  </div>
                </div>

                {selectedSymptoms.length > 0 && (
                  <div className="bg-secondary rounded-xl p-4">
                    <p className="text-sm font-medium mb-2">{t.diagnosticStepper.selectedSymptomsLabel}</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedSymptoms.map((symptom) => (
                        <Badge key={symptom} variant="secondary">
                          {symptom}
                          <button
                            onClick={() => toggleSymptom(symptom)}
                            className="ml-2 hover:text-destructive"
                          >
                            ×
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {currentStep === 2 && (
            <div>
              <h3 className="font-semibold mb-2">{t.diagnosticStepper.confirmationTitle}</h3>
              <p className="text-sm text-muted-foreground mb-6">
                {t.diagnosticStepper.confirmationSubtitle}
              </p>

              <div className="space-y-4">
                <div className="bg-secondary rounded-xl p-4">
                  <p className="text-sm text-muted-foreground mb-1">{t.diagnosticStepper.applianceLabel}</p>
                  <p className="font-medium">
                    {appliances.find(a => a.id === selectedAppliance)?.name}
                  </p>
                </div>

                <div className="bg-secondary rounded-xl p-4">
                  <p className="text-sm text-muted-foreground mb-2">{t.diagnosticStepper.symptomsLabel}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedSymptoms.map((symptom) => (
                      <Badge key={symptom}>{symptom}</Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                  <p className="text-sm text-primary font-medium">
                    {t.diagnosticStepper.aiMessage}
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          {t.diagnosticStepper.back}
        </Button>

        <Button
          onClick={handleNext}
          disabled={!canProceed()}
        >
          {currentStep === steps.length - 1 ? t.diagnosticStepper.launchDiagnostic : t.diagnosticStepper.next}
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}
