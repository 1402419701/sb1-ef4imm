import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, children, className, ...props }, ref) => {
    const isExternal = href.startsWith('http');
    const attrs = isExternal
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};

    return (
      <a
        ref={ref}
        href={href}
        className={cn(
          'text-foreground underline-offset-4 hover:underline',
          className
        )}
        {...attrs}
        {...props}
      >
        {children}
      </a>
    );
  }
);
Link.displayName = 'Link';

export { Link };