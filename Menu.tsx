import { Card } from '@/components/ui/card';
import { Sparkles, Heart, Image as ImageIcon, Pizza, Cake, Leaf } from 'lucide-react';

export default function Menu() {
  const products = [
    {
      id: 1,
      name: 'Custom Decorated Sugar Cookies',
      description: 'Hand-decorated with royal icing in endless designs. 900+ cutter shapes available.',
      icon: Sparkles,
    },
    {
      id: 2,
      name: 'Chocolate Chip Cookies',
      description: 'Soft and chewy with premium chocolate chips. A classic favorite.',
      icon: Heart,
    },
    {
      id: 3,
      name: 'Photo Frosting Cookies',
      description: 'Custom cookies with your logo or photo printed directly on the icing.',
      icon: ImageIcon,
    },
    {
      id: 4,
      name: 'Pizza-Sized Cookies',
      description: 'Original, chocolate, or chocolate chip. Perfect for sharing. Pre-order available.',
      icon: Pizza,
    },
    {
      id: 5,
      name: 'Cupcakes',
      description: 'Freshly baked cupcakes with custom frosting. Available by order only.',
      icon: Cake,
    },
    {
      id: 6,
      name: 'Seasonal Specials',
      description: 'Limited-edition designs that rotate with the seasons. Always something new.',
      icon: Leaf,
    },
  ];

  return (
    <section id="menu" className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl text-foreground mb-4">
            What We Make
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From classic sugar cookies to custom creations, we offer something for every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Card
                key={product.id}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-border"
              >
                <div className="flex items-start gap-4">
                  <Icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 p-6 md:p-8 bg-secondary/10 rounded-lg border border-secondary/20">
          <p className="text-center text-foreground">
            <span className="font-semibold">900+ cookie cutter shapes available</span> for custom orders. 
            Walk-ins welcome, or pre-order for any occasion.
          </p>
        </div>
      </div>
    </section>
  );
}
