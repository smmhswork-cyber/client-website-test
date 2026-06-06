import { Button } from '@/components/ui/button';

export default function Hero() {


  return (
    <section className="relative w-full min-h-screen pt-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 z-10">
            <h1 className="text-5xl md:text-6xl leading-tight text-foreground">
              Hand-crafted.
              <br />
              One at a time.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
              Signal Mountain's favorite custom sugar cookies, baked fresh daily by Sandie and her team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Order Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
              >
                See Our Cookies
              </Button>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663725064097/eqsBYpov4t4xFmAFPjWoRK/hero-cookies-scene-9ZVLZuax7DPtkUc4ZhrZoE.webp"
              alt="Artisan decorated sugar cookies"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
