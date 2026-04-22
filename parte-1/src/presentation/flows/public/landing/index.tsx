import { Header } from '@components/ui/header';
import { CompanySection } from './components/company-section';
import { HeroSection } from './components/hero-section';
import { ServicesSection } from './components/services-section';
import { CTASection } from './components/cta-section';

export function LandingPage() {
  return (
    <main className="min-h-screen app-container">
      <Header />
      <HeroSection />
      <CompanySection />
      <ServicesSection />
      <CTASection />
    </main>
  );
}
