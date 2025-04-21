import { 
  Award, 
  Truck, 
  Wrench, 
  ShieldCheck,
  Banknote
} from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border">
    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
      <div className="text-primary">{icon}</div>
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export const FeatureSection = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Официальный дилер",
      description: "Являемся официальным представителем ведущих мировых производителей гаражного оборудования"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Быстрая доставка",
      description: "Доставляем оборудование по всей России в кратчайшие сроки"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Монтаж и настройка",
      description: "Профессиональная установка, настройка и обучение персонала"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Гарантия и сервис",
      description: "Гарантийное и постгарантийное обслуживание всего поставляемого оборудования"
    },
    {
      icon: <Banknote className="w-8 h-8" />,
      title: "Гибкие условия оплаты",
      description: "Возможность приобретения оборудования в лизинг и рассрочку"
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Мы специализируемся на поставках профессионального оборудования для автосервисов более 15 лет
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
