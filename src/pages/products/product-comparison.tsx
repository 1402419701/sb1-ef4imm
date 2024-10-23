import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Product } from '@/types/product';

interface ProductComparisonProps {
  products: Product[];
  onClose: () => void;
}

export function ProductComparison({ products, onClose }: ProductComparisonProps) {
  const allSpecifications = products.reduce((acc, product) => {
    Object.keys(product.specifications).forEach((spec) => {
      if (!acc.includes(spec)) {
        acc.push(spec);
      }
    });
    return acc;
  }, [] as string[]);

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>产品对比</DialogTitle>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>特性</TableHead>
              {products.map((product) => (
                <TableHead key={product.id}>{product.name}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>价格（元/吨）</TableCell>
              {products.map((product) => (
                <TableCell key={product.id}>¥{product.price}</TableCell>
              ))}
            </TableRow>
            {allSpecifications.map((spec) => (
              <TableRow key={spec}>
                <TableCell>{spec}</TableCell>
                {products.map((product) => (
                  <TableCell key={product.id}>
                    {product.specifications[spec] || '-'}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
}