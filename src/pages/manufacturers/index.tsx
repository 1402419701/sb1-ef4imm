import { useState } from 'react';
import { ManufacturerFilter } from './manufacturer-filter';
import { ManufacturerGrid } from './manufacturer-grid';
import { ManufacturerDetails } from './manufacturer-details';
import { Manufacturer, Region } from '@/types/manufacturer';

export function Manufacturers() {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [selectedManufacturer, setSelectedManufacturer] =
    useState<Manufacturer | null>(null);

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold">厂家信息</h1>
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <ManufacturerFilter
          selectedRegion={selectedRegion}
          onRegionChange={setSelectedRegion}
        />
        <ManufacturerGrid
          region={selectedRegion}
          onSelect={setSelectedManufacturer}
        />
      </div>
      <ManufacturerDetails
        manufacturer={selectedManufacturer}
        onClose={() => setSelectedManufacturer(null)}
      />
    </div>
  );
}