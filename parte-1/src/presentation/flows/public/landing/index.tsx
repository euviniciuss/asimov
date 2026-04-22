import { CompaniesSection } from "./components/companies-section";
import { HeroSection } from "./components/hero-section";

export function LandingPage() {
  return (
    <main className="min-h-screen bg-gray app-container">
      <HeroSection />
      <CompaniesSection />
    </main>
  );
}
