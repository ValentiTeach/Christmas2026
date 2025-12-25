import React, { useState, useCallback } from 'react';
import Snowfall from './components/Snowfall';
import MoodSelector from './components/MoodSelector';
import CardDisplay from './components/CardDisplay';
import { Mood, GeneratedGreeting } from './types';
import { generateChristmasGreeting } from './services/geminiService';
import { Star } from 'lucide-react';

function App() {
  const [mood, setMood] = useState<Mood>(Mood.MAGICAL);
  const [greeting, setGreeting] = useState<GeneratedGreeting | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    setLoading(true);
    setError(null);
    setGreeting(null);

    try {
      const result = await generateChristmasGreeting(mood);
      setGreeting(result);
    } catch (e) {
      setError("Щось пішло не так. Різдвяні ельфи вже лагодять це.");
    } finally {
      setLoading(false);
    }
  }, [mood]);

  const handleReset = () => {
    setGreeting(null);
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      <Snowfall />

      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Content Area */}
      <div className="z-10 w-full max-w-4xl flex flex-col items-center">
        
        {/* Header - Only show if not viewing a card */}
        <div className={`text-center mb-8 transition-all duration-700 ${greeting ? 'opacity-0 h-0 overflow-hidden mb-0' : 'opacity-100'}`}>
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Star className="text-amber-400 w-12 h-12 animate-pulse" fill="currentColor" />
              <div className="absolute inset-0 bg-amber-400 blur-xl opacity-50"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-2 tracking-tight">
            Різдво <span className="text-amber-400">2026</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-md mx-auto">
            Оберіть настрій та дозвольте штучному інтелекту створити для вас унікальне святкове вітання.
          </p>
        </div>

        {/* Interaction Area */}
        {!greeting && !loading && (
          <div className="w-full flex flex-col items-center animate-fade-in-up">
            <MoodSelector selectedMood={mood} onSelect={setMood} disabled={loading} />
            
            <button
              onClick={handleGenerate}
              className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-red-600 rounded-full text-white font-semibold text-lg shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all transform hover:-translate-y-1 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Star className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                Створити Диво
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        )}

        {/* Display Area */}
        <CardDisplay greeting={greeting} isLoading={loading} onReset={handleReset} />

        {error && (
          <div className="mt-8 p-4 bg-red-900/50 border border-red-500/30 rounded-lg text-red-200 text-sm">
            {error}
          </div>
        )}

      </div>
      
      <footer className="fixed bottom-4 text-slate-600 text-xs font-medium uppercase tracking-widest pointer-events-none">
        Gemini AI Powered • Christmas 2026
      </footer>
    </div>
  );
}

export default App;