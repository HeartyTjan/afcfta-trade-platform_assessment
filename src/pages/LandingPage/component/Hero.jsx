import React from "react";
import {
  ArrowRight,
  Shield,
  Globe,
  TrendingUp,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const Hero = () => {
  const stats = [
    { value: "54", label: "African Countries", icon: Globe },
    { value: "1.3B+", label: "People & Market Access", icon: TrendingUp },
    { value: "$3.4T", label: "Combined GDP", icon: Sparkles },
  ];

  return (
    <section className="relative bg-white pb-16 lg:pb-15 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="relative container mx-auto px-6 pt-20 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Official Badge - UPDATED COLORS */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-3 rounded-full border border-primary/20 shadow-sm">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Official AfCFTA Digital Trade Portal
              </span>
              <span className="text-xs text-primary/70">
                • African Union Initiative
              </span>
            </div>
          </div>

          {/* Hero Headline - UPDATED GRADIENT */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900">
            One Africa.
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary-light bg-clip-text text-transparent">
              One Digital Market.
            </span>
          </h1>

          <p className="mt-8 mb-5 text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The official Nigerian gateway to the African Continental Free Trade
            Area. Trade seamlessly, securely, and digitally across 54 nations.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
          {/* Verified Badge */}
          {/* Verified Badge – Compact & Beautiful */}
          <div className="mt-16 flex justify-center">
            <div className="inline-flex items-center gap-3 bg-green-50/80 px-6 py-3 rounded-full border border-green-200 shadow-md hover:shadow-lg transition-shadow">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
              <div className="text-left leading-tight">
                <p className="text-sm font-semibold text-gray-900">
                  Officially Verified & Secure
                </p>
                <p className="text-xs text-gray-600">
                  Backed by Nigerian Government & African Union
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button className="group relative inline-flex items-center px-8 py-5 bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <span>Get Started Now</span>
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </button>

            <button className="inline-flex items-center px-8 py-5 border-2 border-gray-300 text-gray-800 font-semibold text-lg rounded-2xl hover:border-gray-400 hover:bg-gray-50 transition-all">
              Watch Overview (2 min)
            </button>
          </div>
        </div>
      </div>

      {/* <div className="absolute inset-x-0 bottom-0 -z-10">
        <svg
          viewBox="0 0 1440 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-15 md:h-8"
        >
          <path
            d="M0,100 C320,180 720,0 1440,80 L1440,180 L0,180 Z"
            fill="white"
          />
        </svg>
      </div> */}
    </section>
  );
};

export default Hero;
