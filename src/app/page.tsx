import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { PricingSection } from '@/components/PricingSection';
import { FreeQuestionForm } from '@/components/FreeQuestionForm';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <PricingSection />
      <FreeQuestionForm />
      <Footer />
    </main>
  );
}
