import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Manufacturer } from '@/types/manufacturer';
import { Building2, MapPin, Phone, Star } from 'lucide-react';

interface ManufacturerDetailsProps {
  manufacturer: Manufacturer | null;
  onClose: () => void;
}

export function ManufacturerDetails({
  manufacturer,
  onClose,
}: ManufacturerDetailsProps) {
  if (!manufacturer) return null;

  return (
    <Dialog open={!!manufacturer} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Building2 className="h-6 w-6" />
            {manufacturer.name}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>{manufacturer.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{manufacturer.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>{manufacturer.rating} / 5.0</span>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">产品类别</h3>
            <div className="flex flex-wrap gap-2">
              {manufacturer.products.map((product) => (
                <Badge key={product} variant="secondary">
                  {product}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">认证资质</h3>
            <div className="flex flex-wrap gap-2">
              {manufacturer.certifications.map((cert) => (
                <Badge key={cert} variant="outline">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>

          <p className="text-muted-foreground">{manufacturer.description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}