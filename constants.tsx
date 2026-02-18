
import React from 'react';
import { Shield, Droplets, Truck } from 'lucide-react';
import { Material } from './types';

export const MATERIALS: Material[] = [
  {
    id: 'warehouse-rolls',
    name: 'Sanoat Brezent To\'plamlari',
    category: 'Sanoat',
    description: 'Siz yuborgan birinchi rasmdagi kabi, omborxonada plastik qadoqda saqlanayotgan yuqori zichlikdagi brezent to\'plamlari. Har qanday hajmda ulgurji sotiladi.',
    pricePerSqm: 32000,
    weight: '550-600 g/m²',
    thickness: '0.8 mm',
    features: ['Ulgurji narxlar', 'Zich to\'qilgan', 'Plastik qadoqlangan', 'Suv o\'tkazmaydi'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    colors: ['Yashil', 'Haki']
  },
  {
    id: 'hangar-beige',
    name: 'Hangar Bej Pardasi',
    category: 'Maxsus',
    description: 'Siz yuborgan ikkinchi rasmdagi kabi, quyosh panellari ostidagi angarlar uchun mo\'ljallangan maxsus bej rangli parda. Shamol va quyoshdan 100% himoya.',
    pricePerSqm: 45000,
    weight: '650 g/m²',
    thickness: '0.65 mm',
    features: ['UV himoyasi', 'Yong\'inga chidamlilik', 'Maxsus konstruksiya uchun', 'Yirtilishga chidamli'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
    colors: ['Bej']
  },
  {
    id: 'hangar-green',
    name: 'Hangar Yashil Pardasi',
    category: 'Sanoat',
    description: 'Siz yuborgan uchinchi rasmdagi kabi, metall konstruksiyalarga mahkamlangan yashil brezent parda. Sanoat ob\'ektlari va fermalar uchun ideal yechim.',
    pricePerSqm: 38000,
    weight: '600 g/m²',
    thickness: '0.6 mm',
    features: ['Lyumersli mahkamlash', 'Bardoshli material', 'Sovuqqa chidamli', 'Suv o\'tkazmaydi'],
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop',
    colors: ['Och yashil']
  },
  {
    id: 'pvc-premium',
    name: 'PVX Premium Tent',
    category: 'Maxsus',
    description: 'Yuk mashinalari va basseynlar uchun Koreya texnologiyasi asosida ishlab chiqarilgan premium material.',
    pricePerSqm: 52000,
    weight: '650 g/m²',
    thickness: '0.55 mm',
    features: ['10 yil kafolat', 'Gidroizolyatsiya', 'Elastik', 'Yuvishga oson'],
    image: 'https://images.unsplash.com/photo-1585770335016-834458b02220?q=80&w=800&auto=format&fit=crop',
    colors: ['Moviy', 'Oq']
  }
];

export const FEATURES = [
  {
    icon: <Shield className="w-8 h-8 text-orange-500" />,
    title: 'Sifat Sertifikati',
    desc: 'Barcha mahsulotlarimiz Rossiya va Koreya standartlariga to\'liq javob beradi.'
  },
  {
    icon: <Droplets className="w-8 h-8 text-blue-500" />,
    title: 'Suvga Chidamlilik',
    desc: 'Eng kuchli jala va qor yog\'ingarchiligida ham 100% suv o\'tkazmaydi.'
  },
  {
    icon: <Truck className="w-8 h-8 text-slate-500" />,
    title: 'Tezkor Yetkazib Berish',
    desc: 'O\'zbekiston bo\'ylab buyurtmalarni o\'z vaqtida manzilingizga yetkazamiz.'
  }
];

export const CATEGORIES = ['Barchasi', 'Sanoat', 'An\'anaviy', 'Yengil', 'Maxsus'];
