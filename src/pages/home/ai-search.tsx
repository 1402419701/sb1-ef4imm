import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

const hotQuestions = [
  '如何选择适合的减水剂？',
  '纳米二氧化硅的最佳掺量是多少？',
  '不同强度等级对原材料有什么要求？',
];

export function AISearch() {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement AI search API integration
    console.log('Searching:', query);
  };

  return (
    <section className="container px-4 md:px-6">
      <Card>
        <CardContent className="p-6">
          <h2 className="mb-4 text-2xl font-bold">智能问答</h2>
          <form onSubmit={handleSearch} className="mb-6">
            <div className="flex gap-2">
              <Input
                placeholder="输入您的问题..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1"
              />
              <Button type="submit">
                <Search className="mr-2 h-4 w-4" />
                搜索
              </Button>
            </div>
          </form>
          <div>
            <h3 className="mb-2 font-semibold">热门问题</h3>
            <ul className="space-y-2">
              {hotQuestions.map((question) => (
                <li key={question}>
                  <Button
                    variant="link"
                    onClick={() => setQuery(question)}
                    className="h-auto p-0 text-left"
                  >
                    {question}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}