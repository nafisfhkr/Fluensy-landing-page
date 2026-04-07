import React from "react";
import HeroSection from "./components/sections/hero_section";
import ChallengesSection from "./components/sections/challenge_section";
import SolutionSection from "./components/sections/solution_section";
import HowSection from "./components/sections/how_section";
import FlexibleAccess1Section from "./components/sections/flexible_access1";
import FlexibleAccess2Section from "./components/sections/flexible_access2";
import CTASection from "./components/sections/cta_section";
import FooterSection from "./components/sections/footer_section";
import Navbar from "./components/navbar";



// MAIN PAGE
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Navbar />
      <HeroSection />
      <ChallengesSection />
      <SolutionSection />
      <HowSection />
      <FlexibleAccess1Section />
      <FlexibleAccess2Section />
      <CTASection />
      <FooterSection />
    </main>
  );
}
