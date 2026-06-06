import { Button } from '@/components/ui/button';
import SprinkleParticles from '@/components/SprinkleParticles';

export default function OrderCTA() {
  return (
    <section id="order" className="w-full py-16 md:py-24 relative overflow-hidden h-screen md:h-auto">
      {/* Particle system background */}
      <SprinkleParticles />

      {/* Static texture overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663725064097/eqsBYpov4t4xFmAFPjWoRK/cta-sprinkles-texture-k39b5JvNQ4kCANFU7cZQNE.webp)',
          backgroundSize: 'cover',
        }}
      />

      <div className="relative z-20 max-w-4xl mx-auto px-4 md:px-6 text-center h-full flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl text-foreground mb-6">
          Ready to order?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Walk-ins are always welcome during our business hours. For custom orders, pre-orders, or special requests, 
          get in touch with us directly. We work with you to bring your cookie dreams to life.
        </p>

        <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-lg mb-8 inline-block">
          <p className="text-foreground mb-4">
            <span className="font-semibold">Custom orders</span> typically need 2-3 days notice. 
            <br />
            <span className="font-semibold">Pizza-sized cookies</span> and bulk orders available by pre-order.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => window.location.href = 'mailto:heather.cookielady@gmail.com'}
          >
            Email Us
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/5"
            onClick={() => window.location.href = 'tel:(423)886-4037'}
          >
            Call (423) 886-4037
          </Button>
        </div>
      </div>
    </section>
  );
}
