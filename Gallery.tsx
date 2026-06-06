import { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: '/manus-storage/mglHJXatJIz1_773ce4d9.jpg',
      alt: 'Thank you decorated cookies',
      title: 'Thank You Cookies',
    },
    {
      id: 2,
      src: '/manus-storage/ZOx79hqVuSh3_febd8eba.jpg',
      alt: 'Colorful decorated sugar cookies',
      title: 'Colorful Collection',
    },
    {
      id: 3,
      src: '/manus-storage/o6rNcgdXEEXF_5c767e4f.jpg',
      alt: 'Sugar cookies flat lay',
      title: 'Sugar Cookie Assortment',
    },
    {
      id: 4,
      src: '/manus-storage/G0BVBSL45tOX_183c433f.webp',
      alt: 'Turquoise decorated cookies',
      title: 'Turquoise Dreams',
    },
    {
      id: 5,
      src: '/manus-storage/3P4ln3dr4X71_bd0e5242.jpg',
      alt: 'Holiday gingerbread cookies',
      title: 'Holiday Collection',
    },
    {
      id: 6,
      src: '/manus-storage/In9AeM2ZZ3ki_b4c7d953.webp',
      alt: 'Decorated cookies on wood',
      title: 'Rustic Display',
    },
    {
      id: 7,
      src: '/manus-storage/ZBzZengeKIXZ_28b62bbc.jpeg',
      alt: 'Hand-painted sugar cookies',
      title: 'Hand-Painted Details',
    },
    {
      id: 8,
      src: '/manus-storage/Uo1GD5Lr887U_f956b6b4.jpg',
      alt: 'Colorful cookie collection',
      title: 'Rainbow Cookies',
    },
  ];

  return (
    <section id="gallery" className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl text-foreground mb-4">
            Our Creations
          </h2>
          <p className="text-lg text-muted-foreground">
            A glimpse into our world of hand-decorated cookies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative h-64 md:h-72 overflow-hidden rounded-lg cursor-pointer group bg-muted"
              onClick={() => setSelectedImage(image.src)}
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.05}s both`,
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
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
