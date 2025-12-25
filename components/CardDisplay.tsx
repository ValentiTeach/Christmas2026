import React, { useState, useEffect } from 'react';
import { GeneratedGreeting } from '../types';
import { Copy, Share2, Sparkles } from 'lucide-react';

interface CardDisplayProps {
  greeting: GeneratedGreeting | null;
  isLoading: boolean;
  onReset: () => void;
}

const CardDisplay: React.FC<CardDisplayProps> = ({ greeting, isLoading, onReset }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (greeting) {
      setTimeout(() => setIsVisible(true), 100);
    } else {
      setIsVisible(false);
    }
  }, [greeting]);

  const handleCopy = () => {
    if (greeting) {
      navigator.clipboard.writeText(`${greeting.title}\n\n${greeting.text}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-96 w-full max-w-md animate-pulse">
        <div className="relative">
          <Sparkles className="w-16 h-16 text-amber-300 animate-spin-slow" />
          <div className="absolute inset-0 blur-lg bg-amber-400/30 rounded-full"></div>
        </div>
        <p className="mt-6 text-amber-100/80 font-serif text-xl tracking-wider">
          Створюємо різдвяну магію...
        </p>
      </div>
    );
  }

  if (!greeting) return null;

  return (
    <div 
      className={`
        relative w-full max-w-xl transition-all duration-1000 transform
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}
      `}
    >
      {/* Decorative Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-red-600 rounded-2xl blur opacity-30"></div>
      
      {/* Card Content */}
      <div className="relative bg-[#1e293b]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl text-center overflow-hidden">
        
        {/* Corner Ornaments */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-amber-500/30 rounded-tl-3xl m-4"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-amber-500/30 rounded-br-3xl m-4"></div>

        <div className="mb-6">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs tracking-[0.2em] uppercase border border-amber-500/20">
            2026
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-serif text-amber-100 mb-6 leading-tight">
          {greeting.title}
        </h2>

        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-8"></div>

        <p className="text-lg md:text-xl text-slate-300 leading-relaxed italic font-serif">
          "{greeting.text}"
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button 
            onClick={handleCopy}
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors text-sm"
          >
            {copied ? <Sparkles size={16} className="text-amber-400"/> : <Copy size={16} />}
            {copied ? 'Скопійовано' : 'Копіювати'}
          </button>
          
          <button 
            onClick={onReset}
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-amber-600 hover:bg-amber-500 text-white shadow-lg shadow-amber-900/50 transition-all transform hover:scale-105 text-sm font-medium"
          >
            <Sparkles size={16} />
            Створити ще
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDisplay;