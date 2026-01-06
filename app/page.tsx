import { Navbar, Footer } from "@/components/layout";
import {
  HeroSection,
  IntegrationsSection,
  SocialProofSection,
  SpeedComparisonSection,
  UserTypesSection,
  SolutionSection,
  PlatformSection,
  AskAISection,
  FinalCTASection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <IntegrationsSection />
        <SocialProofSection />
        <SpeedComparisonSection />
        <UserTypesSection />
        <SolutionSection />
        <PlatformSection />
        <AskAISection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
