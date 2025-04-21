
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Профессиональное оборудование для автосервиса
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Полный спектр гаражного оборудования для ремонта и обслуживания легковых и грузовых автомобилей
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Посмотреть каталог</Button>
              <Button size="lg" variant="outline">Получить консультацию</Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Лет на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Товаров</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка</div>
              </div>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Гаражное оборудование" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
