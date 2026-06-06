import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Process from '@/components/Process';
import Gallery from '@/components/Gallery';
import OrderCTA from '@/components/OrderCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <About />
        <Menu />
        <Process />
        <Gallery />
        <OrderCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
