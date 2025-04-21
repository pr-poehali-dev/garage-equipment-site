
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductCategory } from "@/components/ProductCategory";
import { FeatureSection } from "@/components/FeatureSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        
        <section className="container mx-auto py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Категории оборудования</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCategory 
              title="Подъемное оборудование" 
              description="Подъемники для легковых и грузовых автомобилей"
              imageSrc="/placeholder.svg" 
              href="#lifts"
            />
            <ProductCategory 
              title="Шиномонтажное оборудование" 
              description="Станки для монтажа и балансировки колес"
              imageSrc="/placeholder.svg" 
              href="#tire"
            />
            <ProductCategory 
              title="Сход-развал" 
              description="Оборудование для регулировки углов установки колес"
              imageSrc="/placeholder.svg" 
              href="#alignment"
            />
            <ProductCategory 
              title="Диагностическое оборудование" 
              description="Сканеры, мотор-тестеры и другое оборудование"
              imageSrc="/placeholder.svg" 
              href="#diagnostic"
            />
            <ProductCategory 
              title="Компрессоры" 
              description="Воздушные компрессоры различной мощности"
              imageSrc="/placeholder.svg" 
              href="#compressors"
            />
            <ProductCategory 
              title="Инструменты" 
              description="Профессиональный инструмент для автосервиса"
              imageSrc="/placeholder.svg" 
              href="#tools"
            />
          </div>
          <div className="mt-10 text-center">
            <Button size="lg">Смотреть все категории</Button>
          </div>
        </section>

        <section id="lifts" className="py-12 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Подъемное оборудование</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <img src="/placeholder.svg" alt="Двухстоечный подъемник" className="w-full h-48 object-cover mb-4 rounded-md" />
                  <h3 className="text-xl font-semibold mb-2">Двухстоечный подъемник</h3>
                  <p className="text-muted-foreground mb-4">Грузоподъемность до 5 тонн, для легковых автомобилей</p>
                  <Button className="w-full">Подробнее</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <img src="/placeholder.svg" alt="Четырехстоечный подъемник" className="w-full h-48 object-cover mb-4 rounded-md" />
                  <h3 className="text-xl font-semibold mb-2">Четырехстоечный подъемник</h3>
                  <p className="text-muted-foreground mb-4">Для сход-развала и обслуживания грузовых автомобилей</p>
                  <Button className="w-full">Подробнее</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <img src="/placeholder.svg" alt="Ножничный подъемник" className="w-full h-48 object-cover mb-4 rounded-md" />
                  <h3 className="text-xl font-semibold mb-2">Ножничный подъемник</h3>
                  <p className="text-muted-foreground mb-4">Компактное решение для шиномонтажа и кузовных работ</p>
                  <Button className="w-full">Подробнее</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
