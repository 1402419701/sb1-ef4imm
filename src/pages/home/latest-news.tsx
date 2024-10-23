import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const news = [
  {
    title: '新型纳米材料突破',
    date: '2024-03-20',
    description:
      '研究团队开发出新型纳米二氧化硅，可显著提升混凝土强度和耐久性。',
  },
  {
    title: '行业标准更新',
    date: '2024-03-18',
    description:
      '住建部发布超高性能混凝土应用技术规程，规范行业发展。',
  },
  {
    title: '市场趋势分析',
    date: '2024-03-15',
    description:
      '2024年超高性能混凝土市场预计增长20%，基建项目需求旺盛。',
  },
];

export function LatestNews() {
  return (
    <section className="container px-4 md:px-6">
      <h2 className="mb-6 text-2xl font-bold">最新资讯</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <CardDescription>{item.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}