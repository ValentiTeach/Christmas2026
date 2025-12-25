import React from 'react';
import { MOODS } from '../constants';
import { Mood } from '../types';
import Icon from './Icon';

interface MoodSelectorProps {
  selectedMood: Mood;
  onSelect: (mood: Mood) => void;
  disabled: boolean;
}

const MoodSelector: React.FC<MoodSelectorProps> = ({ selectedMood, onSelect, disabled }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8 w-full max-w-2xl z-10 relative">
      {MOODS.map((moodOption) => {
        const isSelected = selectedMood === moodOption.id;
        return (
          <button
            key={moodOption.id}
            onClick={() => onSelect(moodOption.id)}
            disabled={disabled}
            className={`
              flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 border
              ${isSelected 
                ? 'bg-amber-100/10 border-amber-400/50 shadow-[0_0_15px_rgba(251,191,36,0.2)] scale-105' 
                : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
              }
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            <div className={`mb-2 ${isSelected ? 'text-amber-300' : 'text-slate-300'}`}>
              <Icon name={moodOption.icon} size={24} />
            </div>
            <span className={`text-sm font-medium ${isSelected ? 'text-amber-100' : 'text-slate-400'}`}>
              {moodOption.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default MoodSelector;