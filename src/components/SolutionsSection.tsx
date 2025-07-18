import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, BarChart3, Settings, Truck, Megaphone } from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: BarChart3,
      title: "Аналитика и аудит",
      description: "Глубокий анализ ниши, конкурентов и точек роста",
      features: ["Аудит карточек товаров", "Анализ ключевых слов", "Конкурентная разведка", "Выявление точек роста"],
      color: "text-blue-400"
    },
    {
      icon: Megaphone,
      title: "Реклама и продвижение",
      description: "Настройка и оптимизация рекламных кампаний",
      features: ["Контекстная реклама", "SEO-оптимизация", "Работа с отзывами", "Управление рейтингом"],
      color: "text-green-400"
    },
    {
      icon: Settings,
      title: "Техническая оптимизация",
      description: "Настройка систем учёта и автоматизации",
      features: ["Интеграция с CRM", "Автоматизация процессов", "Настройка аналитики", "API интеграции"],
      color: "text-purple-400"
    },
    {
      icon: Truck,
      title: "Логистика и поставки",
      description: "Оптимизация складских и логистических процессов",
      features: ["Управление остатками", "Прогнозирование спроса", "Работа с поставщиками", "Оптимизация доставки"],
      color: "text-orange-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,165,0,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 text-white">
            Комплексное{" "}
            <span className="text-transparent bg-gradient-primary bg-clip-text">
              решение
            </span>{" "}
            под ключ
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Команда из 6 экспертов решает все задачи: от аналитики до логистики. 
            За цену одного менеджера получаете полный комплекс услуг.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-white/10"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-secondary/20 ${solution.color} group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-white group-hover:text-primary transition-colors">
                        {solution.title}
                      </CardTitle>
                      <p className="text-gray-300 mt-2">{solution.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Results Block */}
        <div className="bg-gradient-card border border-primary/20 rounded-2xl p-8 text-center">
          <h3 className="font-display text-3xl font-bold mb-6 text-white">
            Результат работы
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">+75%</div>
              <div className="text-gray-300">Рост выручки за 3 месяца</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">-40%</div>
              <div className="text-gray-300">Снижение расходов на рекламу</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">x3</div>
              <div className="text-gray-300">Увеличение ROI</div>
            </div>
          </div>

          <Button variant="cta" size="xl" className="group">
            Получить детальный план роста
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;