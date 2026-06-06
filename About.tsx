export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative h-80 md:h-96 bg-muted rounded-lg overflow-hidden">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663725064097/eqsBYpov4t4xFmAFPjWoRK/about-sandie-lifestyle-UnMPRPe96t3gQF8FuzmGqq.webp"
              alt="Sandie Benson in her bakery kitchen"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl text-foreground">
              Baked with passion.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sandie Benson is the Cookie Lady. A former dental assistant who left her career 13+ years ago to follow her passion for baking. She and her small team make an average of 450 cookies per day, each one hand-decorated with care and precision.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Recipes are a closely guarded secret — eggs, butter, vanilla, and sugar are just the beginning. Every cookie is made with the same attention to detail and love that Sandie brings to everything she does.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 py-4 italic text-foreground">
              "I have no regrets — this is just what I love to do."
              <footer className="text-sm font-medium mt-2 not-italic">— Sandie Benson</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
