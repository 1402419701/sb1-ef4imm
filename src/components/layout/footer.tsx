import { Building2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center gap-4 px-8 md:px-0">
          <Building2 className="h-6 w-6" />
          <p className="text-center text-sm leading-loose md:text-left">
            © 2024 中国超高性能混凝土. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
}