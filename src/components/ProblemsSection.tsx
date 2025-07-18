import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, DollarSign, Zap, Users, Clock } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Падение продаж",
      description: "Высокая конкуренция и ценовые войны съедают прибыль",
      color: "text-red-400"
    },
    {
      icon: DollarSign,
      title: "Высокие комиссии",
      description: "Маркетплейсы забирают 15-25% с каждой продажи",
      color: "text-yellow-400"
    },
    {
      icon: Zap,
      title: "Неэффективная реклама",
      description: "Бюджет тратится впустую, ROI стремится к нулю",
      color: "text-orange-400"
    },
    {
      icon: Users,
      title: "Текучка кадров",
      description: "Свои менеджеры увольняются, фрилансеры подводят",
      color: "text-blue-400"
    },
    {
      icon: Clock,
      title: "Нехватка времени",
      description: "Выгорание собственника, нет времени на стратегию",
      color: "text-purple-400"
    },
    {
      icon: AlertTriangle,
      title: "Потеря контроля",
      description: "Непрозрачность процессов, нет понимания что происходит",
      color: "text-red-500"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,69,0,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Узнаёте{" "}
            <span className="text-transparent bg-gradient-primary bg-clip-text">
              свои проблемы
            </span>
            ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Собственники брендов одежды и производственных компаний с оборотом 2-5 млн руб/мес 
            сталкиваются с одними и теми же болями на маркетплейсах
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-secondary/50 ${problem.color} group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {problem.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Block */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-card border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-bold mb-4">
              Хватит терпеть эти проблемы!
            </h3>
            <p className="text-muted-foreground mb-6">
              Мы решаем каждую из этих болей комплексно. Узнайте как на бесплатной консультации.
            </p>
            <div className="inline-flex items-center gap-2 text-primary font-semibold">
              <AlertTriangle className="h-5 w-5" />
              <span>Первые результаты уже через 2 недели</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;