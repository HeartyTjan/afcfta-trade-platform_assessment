import React from "react";
import {
  BarChart3,
  ShieldCheck,
  FileText,
  Database,
  ArrowRight,
} from "lucide-react";

const Compliance = () => {
  const features = [
    {
      title: "Trade Analytics",
      description: "Real-time insights on trade flows and market trends",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Compliance Monitoring",
      description: "Track adherence to AfCFTA rules and regulations",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Policy Tools",
      description: "Resources for policymakers and regulators",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "Data Intelligence",
      description: "Comprehensive trade data and reporting",
      icon: <Database className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Monitoring & Compliance
          </h2>
          <p className="text-xl text-gray-600">
            A single national gateway to AfCFTA digital trade resources,
            compliance tools, and intelligence dashboards for Nigerian agencies
            and policymakers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 border border-gray-200"
            >
              <div className="p-3 rounded-lg bg-primary text-white inline-block mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-light transition-colors">
            <span>Access Monitoring Dashboard</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
