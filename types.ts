export enum Mood {
  TRADITIONAL = 'traditional',
  POETIC = 'poetic',
  MODERN = 'modern',
  MAGICAL = 'magical',
  PHILOSOPHICAL = 'philosophical',
  WARM = 'warm'
}

export interface MoodOption {
  id: Mood;
  label: string;
  icon: string;
  description: string;
}

export interface GeneratedGreeting {
  text: string;
  title: string;
}