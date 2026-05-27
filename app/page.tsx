import Navbar        from "@/components/layout/Navbar";
import Footer        from "@/components/layout/Footer";
import FloatingCTA   from "@/components/layout/FloatingCTA";
import HeroSection        from "@/components/sections/HeroSection";
import ServicesSection    from "@/components/sections/ServicesSection";
import PortfolioSection   from "@/components/sections/PortfolioSection";
import SystemsSection     from "@/components/sections/SystemsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AboutSection       from "@/components/sections/AboutSection";
import FaqSection         from "@/components/sections/FaqSection";
import ContactSection     from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <SystemsSection />
        <TestimonialsSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}