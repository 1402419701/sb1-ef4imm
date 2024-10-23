import { Button } from '@/components/ui/button';
import { Region } from '@/types/manufacturer';
import { cn } from '@/lib/utils';

const regions: { id: Region; name: string }[] = [
  { id: 'north', name: '华北地区' },
  { id: 'east', name: '华东地区' },
  { id: 'south', name: '华南地区' },
  { id: 'central', name: '华中地区' },
  { id: 'southwest', name: '西南地区' },
  { id: 'northwest', name: '西北地区' },
  { id: 'northeast', name: '东北地区' },
];

interface ManufacturerFilterProps {
  selectedRegion: Region | null;
  onRegionChange: (region: Region | null) => void;
}

export function ManufacturerFilter({
  selectedRegion,
  onRegionChange,
}: ManufacturerFilterProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold">地区筛选</h2>
        <p className="text-sm text-muted-foreground">
          选择地区以查看相关厂家
        </p>
      </div>
      <div className="space-y-2">
        {regions.map((region) => (
          <Button
            key={region.id}
            variant="ghost"
            className={cn(
              'w-full justify-start',
              selectedRegion === region.id && 'bg-accent text-accent-foreground'
            )}
            onClick={() =>
              onRegionChange(selectedRegion === region.id ? null : region.id)
            }
          >
            {region.name}
          </Button>
        ))}
      </div>
    </div>
  );
}