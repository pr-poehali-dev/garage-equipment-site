import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/90 to-primary">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-center bg-cover mix-blend-overlay"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Профессиональное оборудование для вашего автосервиса
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Комплексные решения для обслуживания легковых и грузовых автомобилей. 
            Официальный дилер ведущих производителей с гарантией качества.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base bg-secondary hover:bg-secondary/90">
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-white/10 text-white border-white/30 hover:bg-white/20">
              Каталог оборудования
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
