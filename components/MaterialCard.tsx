
import React, { useState } from 'react';
import { Material } from '../types';
import { CheckCircle, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

interface MaterialCardProps {
  material: Material;
  onSelect: (material: Material) => void;
}

const MaterialCard: React.FC<MaterialCardProps> = ({ material, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={material.image} 
          alt={material.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-semibold text-slate-700 shadow-sm">
            {material.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{material.name}</h3>
        <p className="text-slate-500 text-sm mb-4 flex-grow line-clamp-2">{material.description}</p>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-slate-50 p-2 rounded-lg">
            <p className="text-[10px] text-slate-400 uppercase font-bold">Zichlik</p>
            <p className="text-xs font-semibold text-slate-700">{material.weight}</p>
          </div>
          <div className="bg-slate-50 p-2 rounded-lg">
            <p className="text-[10px] text-slate-400 uppercase font-bold">Qalinlik</p>
            <p className="text-xs font-semibold text-slate-700">{material.thickness}</p>
          </div>
        </div>

        <div className="space-y-1 mb-6">
          {(isExpanded ? material.features : material.features.slice(0, 2)).map((feat, i) => (
            <div key={i} className="flex items-center text-xs text-slate-600 animate-in fade-in duration-300">
              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
              <span className="truncate">{feat}</span>
            </div>
          ))}
          
          {material.features.length > 2 && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-[10px] font-bold text-orange-600 hover:text-orange-700 transition-colors mt-2 uppercase tracking-wider"
            >
              {isExpanded ? (
                <>Qisqartirish <ChevronUp className="w-3 h-3" /></>
              ) : (
                <>Barcha xususiyatlar ({material.features.length}) <ChevronDown className="w-3 h-3" /></>
              )}
            </button>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div>
            <p className="text-[10px] text-slate-400 uppercase font-bold">Narxi (1m²)</p>
            <p className="text-lg font-bold text-orange-600">{material.pricePerSqm.toLocaleString()} so'm</p>
          </div>
          <button 
            onClick={() => onSelect(material)}
            className="p-2 bg-slate-900 text-white rounded-full hover:bg-orange-600 transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaterialCard;
