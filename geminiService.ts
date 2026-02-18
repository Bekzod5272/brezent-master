
import { GoogleGenAI } from "@google/genai";

// Function to get material advice using Gemini API
export const getMaterialAdvice = async (userNeed: string) => {
  // Always initialize right before use using the required named parameter and process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Foydalanuvchi brezent materiali qidirmoqda. Uning ehtiyoji: "${userNeed}". 
      Mavjud materiallar: PVX (og'ir ishlar uchun), Brezent LOK (nafas oladigan), Oxford (yengil chodirlar uchun), Shaffof Silikon (terrasalar uchun).
      Iltimos, unga qaysi biri mos kelishini tushuntirib bering va qisqacha tavsiya bering. Javobni o'zbek tilida, do'stona va professional tarzda yozing.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
      }
    });

    // Access the text property directly from the response object
    return response.text || "Kechirasiz, tavsiya topilmadi.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Tavsiya olishda xatolik yuz berdi.";
  }
};
