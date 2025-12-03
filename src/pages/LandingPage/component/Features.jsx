import React from "react";
import {
  Fingerprint,
  ClipboardCheck,
  Shield,
  FileCheck,
  Grid3x3,
  CreditCard,
  Bot,
  BarChart3,
  ChevronRight,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Digital Identity Verification",
      description: "Verify NIN, TIN, BVN, and CAC instantly.",
      icon: Fingerprint,
      color: "text-blue-600 bg-blue-50",
    },
    {
      id: 2,
      title: "Trade Readiness Test",
      description: "Assess and prepare your business for African markets.",
      icon: ClipboardCheck,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      id: 3,
      title: "AfCFTA Compliance Center",
      description: "Access Rules of Origin, tariffs, and regulations.",
      icon: Shield,
      color: "text-violet-600 bg-violet-50",
    },
    {
      id: 4,
      title: "Document & e-Certification",
      description: "Manage certificates and trade licenses securely.",
      icon: FileCheck,
      color: "text-amber-600 bg-amber-50",
    },
    {
      id: 5,
      title: "Product & Service Catalog",
      description: "Showcase offerings to buyers across Africa.",
      icon: Grid3x3,
      color: "text-rose-600 bg-rose-50",
    },
    {
      id: 6,
      title: "Payment Layer Integration",
      description: "PAPSS + escrow payments for secure trade.",
      icon: CreditCard,
      color: "text-cyan-600 bg-cyan-50",
    },
    {
      id: 7,
      title: "AI Trade Assistant",
      description: "24/7 AI chatbot for trade support.",
      icon: Bot,
      color: "text-indigo-600 bg-indigo-50",
    },
    {
      id: 8,
      title: "Government Dashboards",
      description: "Analytics for policymakers and regulators.",
      icon: BarChart3,
      color: "text-slate-700 bg-slate-100",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Platform Features
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Simplified and powerful tools for seamless digital trade in Africa.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-200"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.color}`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* CTA */}
                <button className="mt-6 inline-flex items-center text-primary font-medium text-sm hover:underline">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Bottom */}
        <div className="mt-20 text-center">
          <button className="bg-primary text-white px-10 py-4 rounded-xl font-semibold shadow hover:shadow-lg transition">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
