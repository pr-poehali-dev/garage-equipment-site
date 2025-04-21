
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCategoryProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

export const ProductCategory = ({ title, description, imageSrc, href }: ProductCategoryProps) => {
  return (
    <Link to={href}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="aspect-video relative">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            <ArrowRight className="h-5 w-5 text-primary" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
