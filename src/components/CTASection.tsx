import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Users, ArrowRight, Gift } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "Команда из 6 экспертов за цену одного",
    "Первые результаты через 2 недели",
    "Прозрачные отчёты каждую неделю",
    "Работаем по KPI и гарантируем ROI",
    "Полный цикл: от аналитики до логистики"
  ];

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,165,0,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Block */}
          <Card className="bg-gradient-card border border-primary/20 shadow-glow backdrop-blur-sm">
            <CardContent className="p-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-6">
                <Gift className="h-4 w-4 text-primary" />
                <span className="text-primary font-semibold">Ограниченное предложение</span>
              </div>

              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 text-white">
                Бесплатный аудит
                <br />
                <span className="text-transparent bg-gradient-primary bg-clip-text">
                  стоимостью 50 000 ₽
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Проведём глубокий анализ вашего бизнеса на маркетплейсах и покажем 
                конкретные точки роста уже на первой консультации
              </p>

              {/* Benefits List */}
              <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button variant="cta" size="xl" className="group mb-6">
                Получить бесплатный аудит
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Urgency */}
              <div className="flex items-center justify-center gap-2 text-yellow-400">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">Осталось только 3 места в этом месяце</span>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="bg-card/20 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Персональный подход</h3>
                <p className="text-gray-300 text-sm">
                  Изучаем специфику именно вашего бизнеса
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-card/20 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Без обязательств</h3>
                <p className="text-gray-300 text-sm">
                  Аудит бесплатно, решение принимаете сами
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-card/20 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Clock className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Быстрый результат</h3>
                <p className="text-gray-300 text-sm">
                  Получите план действий за 1 встречу
                </p>
              </div>
            </div>
          </div>

          {/* Trust Element */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              🔒 Гарантируем конфиденциальность ваших данных
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;