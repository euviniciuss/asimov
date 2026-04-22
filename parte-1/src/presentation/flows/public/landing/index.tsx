import { Header } from '@/presentation/components/ui/header';
import { CompaniesSection } from './components/companies-section';
import { HeroSection } from './components/hero-section';
import { ServicesSection } from './components/services-section';

export function LandingPage() {
  return (
    <main className="min-h-screen app-container">
      <Header />
      <HeroSection />
      <CompaniesSection />
      <ServicesSection />
    </main>
  );
}
