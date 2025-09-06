import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { 
  HeroSection, 
  KPISection, 
  ExamsSection, 
  TrustSection, 
  CTASection 
} from "@/components/sections";
import { Testimonials } from "@/components/testimonials";

export default function Index() {
  return (
    <div>
      <HeroSection />
      <KPISection />
      <ExamsSection />
      <TrustSection />
      <About />
      <Testimonials />
      <Contact />
      <CTASection />
    </div>
  );
}
