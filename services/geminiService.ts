import { GoogleGenAI, Type } from "@google/genai";
import { Mood, GeneratedGreeting } from '../types';
import { SYSTEM_INSTRUCTION } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateChristmasGreeting = async (mood: Mood): Promise<GeneratedGreeting> => {
  try {
    const prompt = `Створи унікальне різдвяне привітання у стилі "${mood}". Це для Різдва 2026 року. Зроби його особливим.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            text: { type: Type.STRING }
          },
          required: ["title", "text"]
        }
      }
    });

    const jsonText = response.text;
    if (!jsonText) {
      throw new Error("No content generated");
    }

    const data = JSON.parse(jsonText) as GeneratedGreeting;
    return data;

  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback in case of API error or quota issues
    return {
      title: "Різдвяна Тиша",
      text: "Нехай у цьому 2026 році зірка сяє яскравіше, ніж будь-коли, освітлюючи шлях до миру та внутрішньої гармонії. Христос Рождається!"
    };
  }
};