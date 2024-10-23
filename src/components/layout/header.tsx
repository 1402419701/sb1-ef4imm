import { Building2, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MainNavigation } from './navigation-menu';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center space-x-2">
          <Building2 className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">
            中国超高性能混凝土
          </span>
        </div>
        <div className="hidden flex-1 md:flex">
          <MainNavigation />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <MainNavigation />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}