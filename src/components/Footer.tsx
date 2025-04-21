import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, MapPin, Mail, Phone, Clock, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ГаражПро</h3>
            <p className="mb-4 text-gray-400">
              Профессиональное оборудование для СТО и автосервисов. 
              Комплексные решения для ремонта и обслуживания легковых и грузовых автомобилей.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="#catalog" className="text-gray-400 hover:text-white transition-colors">Каталог оборудования</Link>
              </li>
              <li>
                <Link to="#services" className="text-gray-400 hover:text-white transition-colors">Услуги</Link>
              </li>
              <li>
                <Link to="#about" className="text-gray-400 hover:text-white transition-colors">О компании</Link>
              </li>
              <li>
                <Link to="#contacts" className="text-gray-400 hover:text-white transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>+7 (800) 555-35-35</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>info@garazh-pro.ru</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>г. Москва, ул. Автомобильная, 10</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>Пн-Пт: 9:00 - 18:00<br />Сб: 10:00 - 16:00</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Рассылка</h3>
            <p className="mb-4 text-gray-400">
              Подпишитесь на нашу рассылку, чтобы получать информацию о новинках и специальных предложениях
            </p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Ваш email" 
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="ml-2 bg-primary">
                Подписаться
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-4 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} ГаражПро. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
