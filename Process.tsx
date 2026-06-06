import { useEffect, useRef } from 'react';
import { ShoppingCart, Flame, Palette, Truck } from 'lucide-react';

export default function Process() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && lineRef.current) {
          lineRef.current.style.animation = 'drawLine 1.2s ease-out forwards';
        }
      },
      { threshold: 0.5 }
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      id: 1,
      title: 'Order',
      description: 'Place your order online, by phone, or visit us in person. Custom designs welcome.',
      icon: ShoppingCart,
    },
    {
      id: 2,
      title: 'Bake',
      description: 'We bake fresh cookies daily using our secret recipe. Each batch is made with care.',
      icon: Flame,
    },
    {
      id: 3,
      title: 'Decorate',
      description: 'Hand-decorate each cookie with royal icing and attention to detail. 450+ per day.',
      icon: Palette,
    },
    {
      id: 4,
      title: 'Pickup/Deliver',
      description: 'Pick up your cookies fresh, or we can arrange delivery for your event.',
      icon: Truck,
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl text-foreground mb-4">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground">
            From order to delivery, we ensure every step is perfect
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div
            ref={lineRef}
            className="absolute left-1/2 transform -translate-x-1/2 top-12 bottom-0 w-1 bg-gradient-to-b from-primary to-accent"
            style={{
              height: '80%',
              opacity: 0,
            }}
          />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="flex flex-col items-center"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Icon circle */}
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes drawLine {
          from {
            opacity: 0;
            height: 0;
          }
          to {
            opacity: 1;
            height: 80%;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
