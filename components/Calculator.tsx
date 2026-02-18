
import React, { useState, useEffect } from 'react';
import { Material } from '../types';
import { Calculator as CalcIcon, X } from 'lucide-react';

interface CalculatorProps {
  materials: Material[];
  selectedMaterialId?: string;
  onClose?: () => void;
}

const Calculator: React.FC<CalculatorProps> = ({ materials, selectedMaterialId, onClose }) => {
  const [materialId, setMaterialId] = useState(selectedMaterialId || materials[0].id);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const material = materials.find(m => m.id === materialId);
    if (material) {
      setTotal(width * height * material.pricePerSqm);
    }
  }, [width, height, materialId, materials]);

  return (
    <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-xl w-full mx-auto relative">
      {onClose && (
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full">
          <X className="w-5 h-5 text-slate-400" />
        </button>
      )}
      
      <div className="flex items-center mb-6 gap-3">
        <div className="bg-orange-100 p-3 rounded-2xl">
          <CalcIcon className="w-6 h-6 text-orange-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Narxni Hisoblash</h2>
          <p className="text-slate-500 text-sm">O'lchamlarni kiriting</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Material Turini Tanlang</label>
          <select 
            value={materialId}
            onChange={(e) => setMaterialId(e.target.value)}
            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
          >
            {materials.map(m => (
              <option key={m.id} value={m.id}>{m.name} - {m.pricePerSqm.toLocaleString()} so'm/m²</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Eni (metr)</label>
            <input 
              type="number" 
              min="0"
              step="0.1"
              value={width || ''}
              onChange={(e) => setWidth(parseFloat(e.target.value) || 0)}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder="Masalan: 5.5"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Bo'yi (metr)</label>
            <input 
              type="number" 
              min="0"
              step="0.1"
              value={height || ''}
              onChange={(e) => setHeight(parseFloat(e.target.value) || 0)}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder="Masalan: 10"
            />
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <span className="text-slate-400">Umumiy maydon:</span>
            <span className="font-bold text-xl">{(width * height).toFixed(2)} m²</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Taxminiy narx:</span>
            <span className="text-3xl font-bold text-orange-400">{total.toLocaleString()} so'm</span>
          </div>
        </div>

        <button className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl shadow-lg shadow-orange-200 transition-all flex items-center justify-center gap-2">
          Buyurtma Berish
        </button>
      </div>
    </div>
  );
};

export default Calculator;
