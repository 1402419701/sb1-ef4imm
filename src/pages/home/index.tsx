import { Hero } from './hero';
import { ProductOverview } from './product-overview';
import { LatestNews } from './latest-news';
import { AISearch } from './ai-search';

export function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      <Hero />
      <ProductOverview />
      <LatestNews />
      <AISearch />
    </div>
  );
}