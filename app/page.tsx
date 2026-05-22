import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Differentials from '@/components/Differentials';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import FinalCTA from '@/components/FinalCTA';
import GoogleMap from '@/components/GoogleMap';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';


export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="bg-dark-gradient">
        <Hero />
        <About />
      </div>
      
      {/* About (Dark) & Services (Dark) -> Premium Elegant Divider */}
      <SectionDivider variant="premium" />
      <Services />
      
      {/* Services (Dark) & Differentials (Light) -> High Contrast Transition, no divider band needed */}
      <Differentials />
      
      {/* Differentials (Light) & Testimonials (Dark) -> High Contrast Transition */}
      <Testimonials />
      
      {/* Testimonials (Dark) & ContactForm (Light) -> High Contrast Transition */}
      <ContactForm />
      
      {/* ContactForm (Light) & FinalCTA (Dark) -> High Contrast Transition */}
      <FinalCTA />
      
      <GoogleMap />
      
      <Footer />
      
      <FloatingWhatsApp />
    </main>
  );
}
