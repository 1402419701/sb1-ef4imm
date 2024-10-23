export type Region =
  | 'north'
  | 'east'
  | 'south'
  | 'central'
  | 'southwest'
  | 'northwest'
  | 'northeast';

export interface Manufacturer {
  id: string;
  name: string;
  region: Region;
  description: string;
  address: string;
  phone: string;
  products: string[];
  certifications: string[];
  rating: number;
}