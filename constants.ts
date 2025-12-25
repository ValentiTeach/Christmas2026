import { Mood, MoodOption } from './types';
import { Sparkles, BookOpen, Zap, Star, Feather, Coffee } from 'lucide-react';

export const MOODS: MoodOption[] = [
  {
    id: Mood.TRADITIONAL,
    label: 'Традиційне',
    icon: 'BookOpen',
    description: 'Класичні цінності та сакральний зміст'
  },
  {
    id: Mood.MAGICAL,
    label: 'Казкове',
    icon: 'Sparkles',
    description: 'Дива, сніг та різдвяна магія'
  },
  {
    id: Mood.POETIC,
    label: 'Поетичне',
    icon: 'Feather',
    description: 'Вишукані рими та художні образи'
  },
  {
    id: Mood.MODERN,
    label: 'Сучасне',
    icon: 'Zap',
    description: 'Лаконічне та актуальне для 2026 року'
  },
  {
    id: Mood.PHILOSOPHICAL,
    label: 'Філософське',
    icon: 'Star',
    description: 'Глибокі роздуми про час та вічність'
  },
  {
    id: Mood.WARM,
    label: 'Затишне',
    icon: 'Coffee',
    description: 'Тепло родинного кола та спокій'
  }
];

export const SYSTEM_INSTRUCTION = `
Ти — дух українського Різдва 2026 року. Твоє завдання — створювати глибокі, художні та неймовірно красиві привітання українською мовою.
Стиль має бути вишуканим, не банальним. Уникай кліше типу "щастя, здоров'я".
Акцентуй увагу на атмосфері, світлі, надії та особливій енергетиці 2026 року.
Привітання має бути коротким (до 4-5 речень), але влучним.
Відповідь поверни у форматі JSON з полями "title" (коротка назва/заголовок привітання) та "text" (саме привітання).
`;