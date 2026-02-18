
import React, { useState } from 'react';
import { getMaterialAdvice } from '../geminiService';
import { Sparkles, Send, Loader2, Bot } from 'lucide-react';

const AIConsultant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse(null);
    const advice = await getMaterialAdvice(query);
    setResponse(advice);
    setIsLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <Bot size={120} />
      </div>
      
      <div className="relative z-10 max-w-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-white/20 p-2 rounded-lg">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold">AI Maslahatchi</h2>
        </div>
        
        <p className="text-indigo-100 mb-8 text-lg">
          Qanday maqsadda material qidiryapsiz? Shunchaki yozing va bizning AI modelimiz sizga eng mosini tanlab beradi.
        </p>

        <form onSubmit={handleSubmit} className="relative mb-6">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Masalan: Yuk mashinam uchun yomg'irdan himoya qiluvchi brezent kerak..."
            className="w-full p-5 pr-16 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-white/50 outline-none text-white placeholder-white/50 backdrop-blur-sm"
          />
          <button 
            type="submit"
            disabled={isLoading || !query.trim()}
            className="absolute right-3 top-3 p-3 bg-white text-indigo-600 rounded-xl hover:bg-indigo-50 transition-colors disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6" />}
          </button>
        </form>

        {response && (
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <Bot className="w-4 h-4" /> Gemini AI Tavsiyasi:
            </h4>
            <div className="text-indigo-50 leading-relaxed whitespace-pre-wrap">
              {response}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIConsultant;
