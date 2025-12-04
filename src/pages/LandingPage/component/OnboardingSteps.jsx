import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router";
const OnboardingSteps = () => {
  const steps = [
    {
      number: 1,
      title: "Sign Up",
      description: "Create an account and provide basic business details.",
    },
    {
      number: 2,
      title: "Complete Verification",
      description:
        "Securely submit NIN, CAC documents, and identity information.",
    },
    {
      number: 3,
      title: "Select Categories & Countries",
      description:
        "Choose industries and African markets you want to engage with.",
    },
    {
      number: 4,
      title: "Get Recommendations",
      description:
        "Receive guidance and export opportunities based on your profile.",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Get started in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-gray-50 rounded-xl p-8 border border-gray-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/get-started">
            <button className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-light transition-colors">
              <span>Start Your Registration</span>
              <CheckCircle className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OnboardingSteps;
