import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ProductCategory } from '@/types/product';
import { cn } from '@/lib/utils';

const categories: { id: ProductCategory; name: string; subcategories: string[] }[] = [
  {
    id: 'cement',
    name: '水泥',
    subcategories: ['硅酸盐水泥', '特种水泥', '复合水泥'],
  },
  {
    id: 'aggregate',
    name: '骨料',
    subcategories: ['石英砂', '碎石', '轻质骨料'],
  },
  {
    id: 'admixture',
    name: '外加剂',
    subcategories: ['减水剂', '增强剂', '引气剂'],
  },
];

interface ProductFilterProps {
  selectedCategory: ProductCategory | null;
  onCategoryChange: (category: ProductCategory | null) => void;
}

export function ProductFilter({
  selectedCategory,
  onCategoryChange,
}: ProductFilterProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold">分类筛选</h2>
        <p className="text-sm text-muted-foreground">
          选择产品类别以查看详细信息
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {categories.map((category) => (
          <AccordionItem key={category.id} value={category.id}>
            <AccordionTrigger>{category.name}</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pl-2">
                {category.subcategories.map((subcategory) => (
                  <Button
                    key={subcategory}
                    variant="ghost"
                    className={cn(
                      'w-full justify-start',
                      selectedCategory === category.id &&
                        'bg-accent text-accent-foreground'
                    )}
                    onClick={() =>
                      onCategoryChange(
                        selectedCategory === category.id ? null : category.id
                      )
                    }
                  >
                    {subcategory}
                  </Button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}