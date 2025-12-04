import React from "react";
import {
  ArrowRight,
  Building2,
  Users,
  FileText,
  Globe,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const QuickActions = () => {
  const actions = [
    {
      id: 1,
      title: "Apply to Do Business Across Africa",
      description:
        "Register your business, verify your identity, and select your industry categories and target countries.",
      icon: <Building2 className="w-6 h-6" />,
      color: "bg-gradient-to-br from-primary to-primary-light",
      buttonText: "Apply Now",
      status: "Popular",
      countries: 54,
    },
    {
      id: 2,
      title: "Find Nigerian Businesses",
      description:
        "Discover and connect with verified Nigerian businesses open to trade under AfCFTA.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-gradient-to-br from-accent to-accent-light",
      buttonText: "Explore Directory",
      count: "500+",
      type: "Verified",
    },
    {
      id: 3,
      title: "Check Trade Requirements",
      description:
        "View country-specific trade regulations, tariffs, and documentation needed for your products.",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-gradient-to-br from-purple-600 to-purple-800",
      buttonText: "View Guidelines",
      countries: "54",
    },
    {
      id: 4,
      title: "Market Intelligence Dashboard",
      description:
        "Access real-time data, trends, and opportunities across African markets.",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-gradient-to-br from-amber-600 to-amber-800",
      buttonText: "Access Dashboard",
      premium: true,
    },
  ];

  return (
    <section className="py-5 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-2 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wide">
              Quick Start
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Quick Actions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your AfCFTA journey with these simple steps
          </p>
        </div>

        {/* Actions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {actions.map((action) => (
            <div
              key={action.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/20"
            >
              {/* Top Color Bar */}
              <div className={`h-2 ${action.color}`}></div>

              <div className="p-6 lg:p-8">
                {/* Icon and Status */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-xl ${action.color} text-white`}>
                    {action.icon}
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    {action.status && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent">
                        {action.status}
                      </span>
                    )}
                    {action.premium && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
                        Premium
                      </span>
                    )}
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {action.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {action.description}
                </p>

                {/* Stats */}
                <div className="mb-8">
                  {action.countries && (
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Across {action.countries} countries</span>
                    </div>
                  )}
                  {action.count && (
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>{action.count} businesses listed</span>
                    </div>
                  )}
                  {action.type && (
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span>{action.type} businesses only</span>
                    </div>
                  )}
                </div>

                <Link to="/coming-soon">
                  <button className="group/btn w-full flex items-center justify-between px-6 py-4 bg-gray-50 hover:bg-primary text-gray-800 hover:text-white rounded-xl transition-all duration-300">
                    <span className="font-semibold">{action.buttonText}</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </Link>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Quick Links
        <div className="mt-16 pt-12 border-t border-gray-100">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary/5 p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h4 className="font-bold text-gray-900">
                  Register Your Business
                </h4>
              </div>
              <p className="text-gray-600 text-sm">
                Complete verification in less than 15 minutes
              </p>
            </div>
            <div className="bg-accent/5 p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <span className="text-accent font-bold text-xl">2</span>
                </div>
                <h4 className="font-bold text-gray-900">
                  Select Target Markets
                </h4>
              </div>
              <p className="text-gray-600 text-sm">
                Choose from 54 African countries to trade with
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-purple-100">
                  <span className="text-purple-700 font-bold text-xl">3</span>
                </div>
                <h4 className="font-bold text-gray-900">Start Trading</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Access your digital trade certificate and begin operations
              </p>
            </div>
          </div>
        </div> */}

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-light rounded-3xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Expand Across Africa?
          </h3>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of Nigerian businesses already trading under AfCFTA
          </p>
          <Link to="/get-started">
            <button className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
              Begin Your Application
              <ChevronRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
