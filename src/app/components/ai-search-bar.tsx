import { useState, useRef, useEffect } from 'react';
import { Search, Loader2, Sparkles, Camera, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';

type SearchState = 'empty' | 'typing' | 'analyzing' | 'result' | 'needsInfo';

interface AISearchBarProps {
  onSearch?: (query: string) => void;
  variant?: 'hero' | 'compact';
  className?: string;
}

const suggestions = [
  "Mon lave-vaisselle fuit par le bas",
  "Erreur F04 sur machine à laver",
  "Mon frigo fait un bruit bizarre",
  "Le four ne chauffe plus"
];

export function AISearchBar({ onSearch, variant = 'hero', className = '' }: AISearchBarProps) {
  const [state, setState] = useState<SearchState>('empty');
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (!query.trim()) return;
    
    setState('analyzing');
    
    // Simulate AI analysis
    setTimeout(() => {
      setState('result');
      onSearch?.(query);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleInputChange = (value: string) => {
    setQuery(value);
    setState(value ? 'typing' : 'empty');
    setShowSuggestions(value.length > 0 && value.length < 3);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setState('typing');
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const isHero = variant === 'hero';

  return (
    <div className={`relative w-full ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className={`relative ${isHero ? 'max-w-3xl mx-auto' : 'max-w-2xl'}`}
      >
        {/* Main Search Input */}
        <div className={`
          relative flex items-center gap-3 bg-white border-2 transition-all duration-200
          ${state === 'analyzing' ? 'border-primary shadow-lg shadow-primary/10' : 'border-border hover:border-primary/50'}
          ${isHero ? 'rounded-2xl px-6 py-5' : 'rounded-xl px-4 py-3'}
        `}>
          {state === 'analyzing' ? (
            <Loader2 className="w-5 h-5 text-primary animate-spin" />
          ) : (
            <Sparkles className="w-5 h-5 text-primary" />
          )}
          
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => setShowSuggestions(query.length > 0 && query.length < 3)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            placeholder="Décris ton problème (ex : mon lave-vaisselle fuit…)"
            disabled={state === 'analyzing'}
            className={`
              flex-1 bg-transparent border-0 outline-none placeholder:text-muted-foreground
              ${isHero ? 'text-lg' : 'text-base'}
            `}
          />

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
              title="Scanner la plaque"
            >
              <Camera className="w-5 h-5" />
            </Button>

            {query && (
              <Button
                onClick={handleSearch}
                disabled={state === 'analyzing'}
                className="rounded-lg"
              >
                {state === 'analyzing' ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Analyse
                  </>
                ) : (
                  <>
                    Analyser
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Analyzing State */}
        <AnimatePresence>
          {state === 'analyzing' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 p-4 bg-primary/5 border border-primary/20 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <Loader2 className="w-5 h-5 text-primary animate-spin" />
                <div>
                  <p className="font-medium text-primary">Analyse en cours…</p>
                  <p className="text-sm text-muted-foreground">
                    Je recherche les causes possibles et les pièces compatibles
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Suggestions */}
        <AnimatePresence>
          {showSuggestions && state !== 'analyzing' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-xl shadow-lg overflow-hidden z-50"
            >
              <div className="p-2">
                <p className="px-3 py-2 text-xs font-medium text-muted-foreground">
                  Exemples de problèmes
                </p>
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-accent transition-colors duration-150 text-sm"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Helper Text */}
        {state === 'empty' && isHero && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-3 text-center text-sm text-muted-foreground"
          >
            💬 Décris simplement ce qui ne va pas, comme tu le dirais à un ami
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
