import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductCategory } from "@/components/ProductCategory";
import { FeatureSection } from "@/components/FeatureSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  // Категории оборудования для автосервисов
  const liftingEquipment = {
    id: "lifting",
    title: "Подъемное оборудование",
    description: "Профессиональные подъемники для легковых и грузовых автомобилей, обеспечивающие удобный доступ к шасси и подвеске транспортных средств",
    products: [
      {
        id: 1,
        title: "Двухстоечный подъемник ПГА-4000",
        description: "Электрогидравлический подъемник грузоподъемностью 4 тонны для обслуживания легковых автомобилей и легких коммерческих фургонов",
        image: "/placeholder.svg"
      },
      {
        id: 2,
        title: "Четырехстоечный подъемник ПГА-5500",
        description: "Подъемник для сход-развала с грузоподъемностью 5.5 тонн и встроенными площадками для поворотных кругов",
        image: "/placeholder.svg"
      },
      {
        id: 3,
        title: "Ножничный подъемник ПН-3000",
        description: "Компактный подъемник грузоподъемностью 3 тонны для установки на пол или в приямок, идеален для шиномонтажа",
        image: "/placeholder.svg"
      },
    ]
  };

  const wheelService = {
    id: "wheel-service",
    title: "Шиномонтажное оборудование",
    description: "Профессиональное оборудование для монтажа, демонтажа и балансировки колес легковых и грузовых автомобилей",
    products: [
      {
        id: 4,
        title: "Шиномонтажный станок ШМС-1",
        description: "Полуавтоматический шиномонтажный станок для колес диаметром до 21 дюйма с пневматическим отжимом борта",
        image: "/placeholder.svg"
      },
      {
        id: 5,
        title: "Балансировочный станок БС-200",
        description: "Компьютерный балансировочный станок с ЖК-дисплеем для колес весом до 65 кг и диаметром до 24 дюймов",
        image: "/placeholder.svg"
      },
      {
        id: 6,
        title: "Вулканизатор ВК-500",
        description: "Настольный вулканизатор для ремонта камер и боковых порезов шин легковых и грузовых автомобилей",
        image: "/placeholder.svg"
      },
    ]
  };

  const alignmentEquipment = {
    id: "alignment",
    title: "Оборудование для сход-развала",
    description: "Современные системы для точной регулировки углов установки колес, что обеспечивает правильную управляемость автомобиля и равномерный износ шин",
    products: [
      {
        id: 7,
        title: "3D Стенд сход-развала СР-500",
        description: "Компьютерный 3D-стенд с камерами высокого разрешения для точного измерения углов установки колес легковых автомобилей",
        image: "/placeholder.svg"
      },
      {
        id: 8,
        title: "Лазерный стенд сход-развала СР-300",
        description: "Лазерная система для регулировки углов установки колес с программным обеспечением и большой базой данных автомобилей",
        image: "/placeholder.svg"
      },
      {
        id: 9,
        title: "Стенд сход-развала для грузовых СР-1000",
        description: "Специализированный стенд для измерения и регулировки углов установки колес грузовых автомобилей и автобусов",
        image: "/placeholder.svg"
      },
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <ProductCategory {...liftingEquipment} />
        <ProductCategory {...wheelService} />
        <ProductCategory {...alignmentEquipment} />
        
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
