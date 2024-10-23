import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Manufacturer, Region } from '@/types/manufacturer';
import { Building2, MapPin, Phone } from 'lucide-react';

const manufacturers: Manufacturer[] = [
  {
    id: '1',
    name: '北方建材集团',
    region: 'north',
    description: '专注于高性能水泥和特种混凝土材料的研发与生产',
    address: '河北省石家庄市高新区科技路100号',
    phone: '0311-12345678',
    products: ['水泥', '外加剂'],
    certifications: ['ISO9001', 'ISO14001'],
    rating: 4.8,
  },
  {
    id: '2',
    name: '东方特材有限公司',
    region: 'east',
    description: '提供全系列混凝土外加剂和特种建材产品',
    address: '江苏省南京市江宁区创新路200号',
    phone: '025-87654321',
    products: ['外加剂', '矿物掺合料'],
    certifications: ['ISO9001', 'ISO14001', 'OHSAS18001'],
    rating: 4.6,
  },
  {
    id: '3',
    name: '南方骨料科技',
    region: 'south',
    description: '专业生产高品质骨料和特种砂石材料',
    address: '广东省广州市南沙区港前大道300号',
    phone: '020-98765432',
    products: ['骨料', '石英砂'],
    certifications: ['ISO9001'],
    rating: 4.7,
  },
];

interface ManufacturerGridProps {
  region: Region | null;
  onSelect: (manufacturer: Manufacturer) => void;
}

export function ManufacturerGrid({ region, onSelect }: ManufacturerGridProps) {
  const filteredManufacturers = region
    ? manufacturers.filter((m) => m.region === region)
    : manufacturers;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filteredManufacturers.map((manufacturer) => (
        <Card key={manufacturer.id}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              {manufacturer.name}
            </CardTitle>
            <CardDescription className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {manufacturer.address}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 space-y-2">
              <p className="text-sm text-muted-foreground">
                {manufacturer.description}
              </p>
              <p className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                {manufacturer.phone}
              </p>
            </div>
            <Button
              className="w-full"
              onClick={() => onSelect(manufacturer)}
            >
              查看详情
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}