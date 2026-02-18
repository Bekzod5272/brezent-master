
import React, { useState, useMemo } from 'react';
import { MATERIALS, FEATURES, CATEGORIES } from './constants';
import { Material } from './types';
import MaterialCard from './components/MaterialCard';
import Calculator from './components/Calculator';
import AIConsultant from './components/AIConsultant';
import { Menu, X, Phone, Mail, Instagram, Facebook, Globe, MessageSquare } from 'lucide-react';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Barchasi');
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);
  const [showCalculator, setShowCalculator] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredMaterials = useMemo(() => {
    if (activeCategory === 'Barchasi') return MATERIALS;
    return MATERIALS.filter(m => m.category === activeCategory);
  }, [activeCategory]);

  const handleMaterialSelect = (material: Material) => {
    setSelectedMaterial(material);
    setShowCalculator(true);
    setTimeout(() => {
      const el = document.getElementById('calculator-section');
      if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200">
              <span className="text-white font-black text-xl italic">B</span>
            </div>
            <span className="text-xl font-black text-slate-800 tracking-tight">BREZENT<span className="text-orange-600">MASTER</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors">Asosiy</a>
            <a href="#materials" className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors">Materiallar</a>
            <a href="#ai-consultant" className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors">AI Yordam</a>
            <button 
              onClick={() => setShowCalculator(true)}
              className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-orange-600 transition-all shadow-md"
            >
              Hisoblagich
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-600">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden pt-24 px-6">
          <div className="flex flex-col gap-6">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">Asosiy</a>
            <a href="#materials" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">Materiallar</a>
            <a href="#ai-consultant" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">AI Yordam</a>
            <button 
              onClick={() => { setShowCalculator(true); setIsMenuOpen(false); }}
              className="w-full py-4 bg-orange-600 text-white font-bold rounded-2xl"
            >
              Hisoblagich
            </button>
          </div>
        </div>
      )}

      {/* Hero Section with Large Industrial Background Image (Reflecting your second photo) */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop" 
            alt="Industrial Hangar Canvas" 
            className="w-full h-full object-cover animate-slow-zoom"
          />
          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
          <div className="max-w-4xl mx-auto space-y-8 py-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600/20 backdrop-blur-md border border-orange-500/30 text-orange-400 rounded-full text-xs font-bold uppercase tracking-widest animate-in fade-in slide-in-from-top-4 duration-1000">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              PROFESSIONAL BREZENT MAHSULOTLARI
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
              Sizning <span className="text-orange-500">Omboringiz</span> Uchun Temir Himoya
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-400">
              Eng sifatli sanoat pardalari, angar qoplamalari va maxsus brezentlar. O'zbekiston bo'ylab eng hamyonbop narxlarda.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-600">
              <a 
                href="#materials" 
                className="w-full sm:w-auto px-12 py-5 bg-orange-600 text-white font-bold rounded-2xl hover:bg-orange-700 transition-all shadow-2xl shadow-orange-900/50 text-lg"
              >
                Katalogni Ko'rish
              </a>
              <button 
                onClick={() => setShowCalculator(true)}
                className="w-full sm:w-auto px-12 py-5 bg-white/10 backdrop-blur-md text-white border border-white/30 font-bold rounded-2xl hover:bg-white/20 transition-all text-lg"
              >
                Onlayn Hisoblagich
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-1 h-12 bg-gradient-to-b from-orange-500 to-transparent rounded-full"></div>
        </div>
      </section>

      {/* Stats/Features Section */}
      <section className="py-24 bg-white relative z-10 -mt-12 rounded-t-[3rem] md:rounded-t-[6rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {FEATURES.map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 rounded-3xl hover:bg-slate-50 transition-colors">
                <div className="mb-6 p-4 bg-orange-50 rounded-2xl">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-lg leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section id="materials" className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-black text-slate-900">Mahsulotlarimiz</h2>
              <p className="text-slate-500 text-xl">Siz yuborgan rasmlardagi barcha turdagi materiallar mavjud</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat 
                      ? 'bg-orange-600 text-white shadow-xl shadow-orange-200' 
                      : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredMaterials.map(material => (
              <MaterialCard 
                key={material.id} 
                material={material} 
                onSelect={handleMaterialSelect}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AI Consultant Section */}
      <section id="ai-consultant" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <AIConsultant />
        </div>
      </section>

      {/* Calculator Section */}
      {showCalculator && (
        <section id="calculator-section" className="py-24 px-6 bg-slate-950 relative overflow-hidden rounded-[4rem] mx-4 my-10 shadow-3xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-600 rounded-full blur-[150px]"></div>
             <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px]"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-white space-y-8">
              <h2 className="text-5xl md:text-7xl font-black leading-tight">Onlayn <br /><span className="text-orange-500">Narxni</span> Hisoblang</h2>
              <p className="text-slate-400 text-xl leading-relaxed">
                Sizning o'lchamlaringiz bo'yicha tayyor mahsulot narxi qancha bo'lishini bilib oling. Bizda har qanday murakkablikdagi o'lchamlarga buyurtma qabul qilinadi.
              </p>
              <div className="space-y-6">
                {['Aniqlik kafolati 100%', 'Hajmga qarab chegirmalar', 'Bepul mutaxassis konsultatsiyasi'].map((t, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-300 text-lg">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-slate-950 font-bold">✓</div>
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full max-w-2xl">
              <Calculator 
                materials={MATERIALS} 
                selectedMaterialId={selectedMaterial?.id} 
                onClose={() => setShowCalculator(false)}
              />
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-sm border border-slate-100">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="space-y-10">
                <h2 className="text-5xl font-black text-slate-900 leading-tight">Biz Bilan <br />Bog'laning</h2>
                <p className="text-slate-500 text-xl leading-relaxed">Savollaringiz bormi? Mutaxassislarimiz sizga material tanlashda bepul yordam berishadi.</p>
                
                <div className="grid gap-8">
                  <div className="flex items-center gap-6 group">
                    <div className="p-5 bg-slate-50 rounded-3xl shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                      <Phone className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Telefon</p>
                      <p className="text-2xl font-bold text-slate-800">+998 (90) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="p-5 bg-slate-50 rounded-3xl shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                      <MessageSquare className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Telegram</p>
                      <p className="text-2xl font-bold text-slate-800">@brezent_master_admin</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-10 md:p-14 rounded-[3rem] border border-slate-200">
                <h3 className="text-2xl font-bold mb-8">Mutaxassisdan javob oling</h3>
                <form className="space-y-6">
                  <input type="text" placeholder="Ismingiz" className="w-full p-5 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all text-lg" />
                  <input type="tel" placeholder="Telefon raqamingiz" className="w-full p-5 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all text-lg" />
                  <textarea placeholder="Qanday material qidiryapsiz? (Masalan: Angar uchun bej parda)" rows={4} className="w-full p-5 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all text-lg"></textarea>
                  <button className="w-full py-5 bg-orange-600 text-white font-black text-xl rounded-2xl shadow-xl shadow-orange-100 hover:bg-orange-700 transition-all transform hover:-translate-y-1">Yuborish</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 border-b border-white/5 pb-16">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-600/30">
              <span className="text-white font-black text-2xl italic">B</span>
            </div>
            <span className="text-2xl font-black tracking-tight">BREZENT<span className="text-orange-600">MASTER</span></span>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="p-4 bg-white/5 rounded-2xl hover:bg-orange-600 transition-all hover:-translate-y-1"><Instagram size={24} /></a>
            <a href="#" className="p-4 bg-white/5 rounded-2xl hover:bg-orange-600 transition-all hover:-translate-y-1"><Facebook size={24} /></a>
            <a href="#" className="p-4 bg-white/5 rounded-2xl hover:bg-orange-600 transition-all hover:-translate-y-1"><Globe size={24} /></a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-16 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© 2024 Brezent Master. Sifat va ishonch timsoli.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Maxfiylik siyosati</a>
            <a href="#" className="hover:text-white transition-colors">Xizmat ko'rsatish shartlari</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
