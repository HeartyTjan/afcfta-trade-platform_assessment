// components/BenefitsImpact.jsx
import React from "react";
import { Users, ShieldCheck, Globe, ArrowRight } from "lucide-react";

const BenefitsImpact = () => {
  const benefits = [
    {
      icon: Users,
      title: "Empower Nigerian Businesses",
      description:
        "Give MSMEs and exporters the digital tools, training, and market access they need to compete and win across Africa.",
    },
    {
      icon: ShieldCheck,
      title: "Government-Backed Trust",
      description:
        "Every user and document is verified by the Nigerian Government and AfCFTA standards — zero fraud, full confidence.",
    },
    {
      icon: Globe,
      title: "One Portal. 54 Countries.",
      description:
        "Instant access to 1.3 billion consumers and $3.4T in combined GDP — all through a single, secure Nigerian gateway.",
    },
  ];

  return (
    <section className="py-10 lg:py-5 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-1xl md:text-3xl lg:text-6xl font-bold text-gray-900">
            Built for Real Impact
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            Transforming how Nigeria trades with Africa — today.
          </p>
        </div>

        {/* Benefits Grid – Large Cards with Hover Lift */}
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-gray-100"
              >
                {/* Gradient Circle Background */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-600 text-white mb-8 shadow-xl">
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Subtle Arrow */}
                  <div className="mt-8 flex justify-end">
                    <ArrowRight className="w-7 h-7 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-3 transition-all duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional Bottom CTA */}
        <div className="text-center mt-20">
          <button className="group inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-blue-700 to-emerald-600 text-white font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            Start Trading Today
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsImpact;
