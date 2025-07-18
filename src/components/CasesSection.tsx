import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, ShoppingBag, Factory, DollarSign } from "lucide-react";

const CasesSection = () => {
  const cases = [
    {
      icon: ShoppingBag,
      category: "Бренд одежды",
      title: "FASHION BRAND",
      period: "3 месяца работы",
      metrics: [
        { label: "Рост выручки", value: "+185%", color: "text-green-400" },
        { label: "Снижение CPC", value: "-35%", color: "text-blue-400" },
        { label: "Увеличение конверсии", value: "+67%", color: "text-purple-400" }
      ],
      description: "Молодой бренд женской одежды с оборотом 2.5 млн руб/мес. Основные проблемы: низкая видимость, высокая стоимость клика, слабые продажи.",
      solution: "Полная переработка карточек товаров, настройка таргетированной рекламы, работа с отзывами и рейтингом.",
      results: "За 3 месяца увеличили выручку с 2.5 до 7.1 млн руб/мес при снижении рекламных расходов на 35%."
    },
    {
      icon: Factory,
      category: "Производитель",
      title: "TEXTILE MANUFACTURER",
      period: "4 месяца работы",
      metrics: [
        { label: "Рост продаж", value: "+156%", color: "text-green-400" },
        { label: "Новые каналы", value: "+3", color: "text-orange-400" },
        { label: "ROI рекламы", value: "+245%", color: "text-purple-400" }
      ],
      description: "Производитель текстиля с 15-летней историей, оборот 4.2 млн руб/мес. Проблемы: зависимость от одного канала, устаревший подход к продвижению.",
      solution: "Диверсификация каналов продаж, внедрение CRM, автоматизация процессов, комплексная рекламная стратегия.",
      results: "Увеличили продажи на 156%, запустили продажи на 3 новых маркетплейсах, снизили зависимость от основного канала."
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,69,0,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Реальные{" "}
            <span className="text-transparent bg-gradient-primary bg-clip-text">
              кейсы
            </span>{" "}
            роста
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Конкретные цифры и результаты работы с брендами одежды и производителями. 
            Каждый кейс — это история трансформации бизнеса.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {cases.map((caseItem, index) => {
            const IconComponent = caseItem.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border/50"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/20">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="secondary">{caseItem.category}</Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">{caseItem.period}</span>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {caseItem.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {caseItem.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className={`text-2xl font-bold ${metric.color} mb-1`}>
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Problem */}
                  <div>
                    <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Проблема</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {caseItem.description}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Решение</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {caseItem.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Результат</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {caseItem.results}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-card border border-primary/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="font-display text-2xl font-bold mb-4">
              Хотите похожие результаты?
            </h3>
            <p className="text-muted-foreground mb-6">
              Получите бесплатный анализ вашего бизнеса и план роста. 
              Покажем конкретные точки роста уже на первой консультации.
            </p>
            <div className="flex items-center justify-center gap-4 text-primary">
              <DollarSign className="h-5 w-5" />
              <span className="font-semibold">Анализ стоимостью 50 000 ₽ — бесплатно</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;