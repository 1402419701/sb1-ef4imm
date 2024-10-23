import { Button } from '@/components/ui/button';
import { Link } from '@/components/ui/link';

export function Hero() {
  return (
    <section className="container px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            引领超高性能混凝土的未来
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            发现优质原材料，打造卓越性能。我们提供全面的产品信息和专业的技术支持。
          </p>
        </div>
        <div className="space-x-4">
          <Link href="/products">
            <Button size="lg">浏览产品</Button>
          </Link>
          <Link href="/manufacturers">
            <Button variant="outline" size="lg">
              寻找供应商
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}