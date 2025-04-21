
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">АвтоСервисПро</h3>
            <p className="text-muted-foreground mb-4">
              Профессиональное оборудование для автосервисов и автомастерских по выгодным ценам
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" aria-label="ВКонтакте">VK</Button>
              <Button variant="outline" size="icon" aria-label="Telegram">TG</Button>
              <Button variant="outline" size="icon" aria-label="WhatsApp">WA</Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li><Link to="#lifts" className="text-muted-foreground hover:text-foreground">Подъемники</Link></li>
              <li><Link to="#tire" className="text-muted-foreground hover:text-foreground">Шиномонтаж</Link></li>
              <li><Link to="#alignment" className="text-muted-foreground hover:text-foreground">Сход-развал</Link></li>
              <li><Link to="#diagnostic" className="text-muted-foreground hover:text-foreground">Диагностика</Link></li>
              <li><Link to="#compressors" className="text-muted-foreground hover:text-foreground">Компрессоры</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="#about" className="text-muted-foreground hover:text-foreground">О компании</Link></li>
              <li><Link to="#delivery" className="text-muted-foreground hover:text-foreground">Доставка и оплата</Link></li>
              <li><Link to="#warranty" className="text-muted-foreground hover:text-foreground">Гарантия</Link></li>
              <li><Link to="#service" className="text-muted-foreground hover:text-foreground">Сервисный центр</Link></li>
              <li><Link to="#contacts" className="text-muted-foreground hover:text-foreground">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">+7 (999) 123-45-67</p>
                  <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">info@autoservicepro.ru</p>
                  <p className="text-sm text-muted-foreground">Ответим в течение дня</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">г. Москва</p>
                  <p className="text-sm text-muted-foreground">ул. Автомобильная, 42</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <span className="text-muted-foreground whitespace-nowrap">Подпишитесь на рассылку:</span>
            <div className="flex gap-2 flex-1">
              <Input placeholder="Ваш email" type="email" />
              <Button>Подписаться</Button>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2023 АвтоСервисПро. Все права защищены.
            </div>
            <div className="text-sm text-muted-foreground">
              <Link to="/policy" className="hover:text-foreground">Политика конфиденциальности</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
