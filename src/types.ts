export interface RingProduct {
  id: string;
  tagLabel: string;
  name: string;
  purity: '22 KT' | '18 KT';
  goldType: 'Yellow Gold' | 'Rose Gold' | 'Diamond Gold';
  ringType: 'Casting Ring' | 'Ladies Ring' | 'Diamond Ring' | 'Wedding Ring' | 'Neli Ring' | 'Kasai Ring' | 'Coorki Ring';
  weightGrams: number;
  priceInr: number;
  image: string;
  description: string;
  featured?: boolean;
}

export interface UnavailableJewelType {
  id: string;
  name: string;
  status: 'Not Available Online';
  message: string;
  note: string;
}

export type PageView = 'home' | 'rings' | 'about' | 'contact';
