import { ProductFilter } from './product-filter';
import { ProductGrid } from './product-grid';
import { ProductComparison } from './product-comparison';
import { useState } from 'react';
import { Product, ProductCategory } from '@/types/product';

export function Products() {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(
    null
  );

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold">产品目录</h1>
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <ProductFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <div className="space-y-6">
          <ProductGrid
            category={selectedCategory}
            onCompare={setSelectedProducts}
          />
          {selectedProducts.length > 0 && (
            <ProductComparison
              products={selectedProducts}
              onClose={() => setSelectedProducts([])}
            />
          )}
        </div>
      </div>
    </div>
  );
}