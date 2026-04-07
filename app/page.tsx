import React from "react";
import HeroSection from "./components/sections/hero_section";
import ChallengesSection from "./components/sections/challenge_section";
import SolutionSection from "./components/sections/solution_section";
import HowSection from "./components/sections/how_section";
import FlexibleAccess1Section from "./components/sections/flexible_access1";



// MAIN PAGE
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <HeroSection />
      <ChallengesSection />
      <SolutionSection />
      <HowSection />
      <FlexibleAccess1Section />
    </main>
  );
}
