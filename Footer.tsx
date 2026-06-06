import { Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-foreground text-background py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-script text-2xl mb-2">The Cookie Lady</h3>
            <p className="text-background/80 text-sm">
              Cookies make life sweeter.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#about" className="hover:text-background transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-background transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-background transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <a
              href="https://www.facebook.com/p/Signal-Mountain-Cookie-Lady-100063786662503/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-background/80 hover:text-background transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span className="text-sm">Facebook</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <p>
              1217 Taft Hwy, Signal Mountain, TN 37377
            </p>
            <p>
              &copy; {currentYear} The Cookie Lady. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
