import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product, ProductCategory } from '@/types/product';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';

const products: Product[] = [
  {
    id: '1',
    name: '高性能硅酸盐水泥',
    category: 'cement',
    description: '优质硅酸盐水泥，具有高早强、高耐久性特点',
    specifications: {
      强度等级: '52.5',
      细度: '380m²/kg',
      凝结时间: '初凝≥45min',
    },
    price: 800,
  },
  {
    id: '2',
    name: '特种石英砂',
    category: 'aggregate',
    description: '高纯度石英砂，粒径均匀，强度高',
    specifications: {
      粒径: '0.16-0.32mm',
      纯度: '≥99.5%',
      含水率: '≤0.1%',
    },
    price: 1200,
  },
  {
    id: '3',
    name: '高效减水剂',
    category: 'admixture',
    description: '新一代聚羧酸减水剂，减水率高',
    specifications: {
      减水率: '≥25%',
      含固量: '40%',
      氯离子含量: '≤0.02%',
    },
    price: 3000,
  },
];

interface ProductGridProps {
  category: ProductCategory | null;
  onCompare: (products: Product[]) => void;
}

export function ProductGrid({ category, onCompare }: ProductGridProps) {
  const [selectedProducts, setSelectedProducts] = useState<Set<string>>(
    new Set()
  );

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  const handleSelect = (productId: string) => {
    const newSelected = new Set(selectedProducts);
    if (newSelected.has(productId)) {
      newSelected.delete(productId);
    } else if (newSelected.size < 3) {
      newSelected.add(productId);
    }
    setSelectedProducts(newSelected);
  };

  const handleCompare = () => {
    const productsToCompare = products.filter((p) =>
      selectedProducts.has(p.id)
    );
    onCompare(productsToCompare);
  };

  return (
    <div className="space-y-4">
      {selectedProducts.size > 1 && (
        <div className="flex justify-end">
          <Button onClick={handleCompare}>比较所选产品</Button>
        </div>
      )}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <Checkbox
                  checked={selectedProducts.has(product.id)}
                  onCheckedChange={() => handleSelect(product.id)}
                  disabled={
                    !selectedProducts.has(product.id) &&
                    selectedProducts.size >= 3
                  }
                />
              </div>
              <CardDescription>¥{product.price}/吨</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                {product.description}
              </p>
              <div className="space-y-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{key}:</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}