import React from "react";
import "./component/Header";
import Header from "./component/Header";
import Hero from "./component/Hero";
import QuickActions from "./component/QuickAction";
import OnboardingSteps from "./component/OnboardingSteps";
import Features from "./component/Features";
import BenefitsImpact from "./component/BenefitsImpact";
import Compliance from "./component/Compliance";
import Footer from "./component/Footer";

function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <QuickActions />
      <OnboardingSteps />
      <Features />
      <BenefitsImpact />
      <Compliance />
      <Footer />
    </div>
  );
}

export default LandingPage;
