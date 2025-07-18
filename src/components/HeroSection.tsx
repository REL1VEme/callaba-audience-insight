import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, Target } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,69,0,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-lg">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary/20 p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <span className="text-primary font-semibold">Callaba Agency</span>
            </div>
            
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Увеличиваем выручку на{" "}
              <span className="text-transparent bg-gradient-primary bg-clip-text">
                маркетплейсах
              </span>{" "}
              на 75%
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Комплексный подход к росту продаж на Wildberries и Ozon. 
              От аналитики до логистики — команда экспертов за цену одного менеджера.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="xl" className="group">
                Получить бесплатный аудит
                <Target className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button variant="ghost-white" size="xl">
                Смотреть кейсы
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">75%</div>
                <div className="text-sm text-muted-foreground">Рост выручки</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3 мес</div>
                <div className="text-sm text-muted-foreground">Первые результаты</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">6 экспертов</div>
                <div className="text-sm text-muted-foreground">В команде</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Cards with animated stats */}
              <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-card">
                <BarChart3 className="h-8 w-8 text-primary mb-4" />
                <div className="text-2xl font-bold text-white mb-2">+345%</div>
                <div className="text-sm text-muted-foreground">ROI клиентов</div>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-card mt-8">
                <TrendingUp className="h-8 w-8 text-accent mb-4" />
                <div className="text-2xl font-bold text-white mb-2">2-5 млн</div>
                <div className="text-sm text-muted-foreground">Оборот клиентов</div>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-card col-span-2">
                <Target className="h-8 w-8 text-primary mb-4" />
                <div className="text-lg font-semibold text-white mb-2">
                  Бренды одежды и производители
                </div>
                <div className="text-sm text-muted-foreground">
                  Специализируемся на вашей нише
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;