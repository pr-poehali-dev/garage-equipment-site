import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ProductCategoryProps {
  id: string;
  title: string;
  description: string;
  products: Product[];
}

export const ProductCategory = ({ id, title, description, products = [] }: ProductCategoryProps) => {
  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products && products.length > 0 ? (
            products.map((product) => (
              <Card key={product.id} className="transition-all hover:shadow-md">
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img 
                    src={product.image || "/placeholder.svg"} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Подробнее
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-3 text-center py-10">
              <p className="text-muted-foreground">Товары в данной категории не найдены</p>
            </div>
          )}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary">
            Смотреть весь каталог
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
