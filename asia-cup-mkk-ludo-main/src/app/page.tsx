import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyJoin from "@/components/sections/WhyJoin";
import Prizes from "@/components/sections/Prizes";
import AdditionalRewards from "@/components/sections/AdditionalRewards";
import WinnersHighlight from "@/components/sections/WinnersHighlight";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Trust from "@/components/sections/Trust";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyJoin />
      <Prizes />
      <AdditionalRewards />
      <WinnersHighlight />
      <HowItWorks />
      <Features />
      <Trust />
      <FAQ />
      <CTASection />
    </>
  );
}