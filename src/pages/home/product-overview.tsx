import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Droplet, Shapes, Sparkles } from 'lucide-react';

const products = [
  {
    title: '特种水泥',
    description: '高品质硅酸盐水泥，确保卓越强度和耐久性',
    icon: Droplet,
  },
  {
    title: '优质骨料',
    description: '精选石英砂和碎石，提供最佳的力学性能',
    icon: Shapes,
  },
  {
    title: '高效外加剂',
    description: '先进的减水剂和增强剂，优化混凝土性能',
    icon: Sparkles,
  },
];

export function ProductOverview() {
  return (
    <section className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.title}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <product.icon className="h-6 w-6" />
                <CardTitle>{product.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{product.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}