import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { PricingSection } from '@/components/PricingSection';
import { TelegramCTA } from '@/components/TelegramCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <TelegramCTA />
      <Footer />
    </main>
  );
}
