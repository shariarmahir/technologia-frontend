import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/landing/hero";
import { Services } from "@/components/landing/services";
import { SchoolProgram } from "@/components/landing/school-program";
import { HowItWorks } from "@/components/landing/how-it-works";
import { VerifiedSection } from "@/components/landing/verified-section";
import { Testimonials } from "@/components/landing/testimonials";
import { CtaSection } from "@/components/landing/cta-section";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Services />
        <SchoolProgram />
        <HowItWorks />
        <VerifiedSection />
        <Testimonials />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
