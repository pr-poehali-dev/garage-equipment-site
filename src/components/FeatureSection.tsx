
import { CheckCircle, Truck, HeartHandshake, BadgeCheck } from "lucide-react";

export const FeatureSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Высокое качество</h3>
            <p className="text-muted-foreground">Прямые поставки от ведущих мировых производителей оборудования</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Truck className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
            <p className="text-muted-foreground">Доставляем оборудование в любую точку России и СНГ</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <HeartHandshake className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Сервисная поддержка</h3>
            <p className="text-muted-foreground">Гарантийное и постгарантийное обслуживание всего оборудования</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <BadgeCheck className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Официальная гарантия</h3>
            <p className="text-muted-foreground">Предоставляем официальную гарантию на все оборудование</p>
          </div>
        </div>
      </div>
    </section>
  );
};
