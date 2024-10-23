export type ProductCategory = 'cement' | 'aggregate' | 'admixture';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  specifications: Record<string, string>;
  price: number;
}