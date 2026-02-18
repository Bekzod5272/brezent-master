
export interface Material {
  id: string;
  name: string;
  category: string;
  description: string;
  pricePerSqm: number;
  weight: string; // e.g., "450 g/m²"
  thickness: string;
  features: string[];
  image: string;
  colors: string[];
}

export interface CalculationResult {
  materialId: string;
  width: number;
  height: number;
  totalArea: number;
  totalPrice: number;
}
