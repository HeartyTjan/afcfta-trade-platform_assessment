import React, { useState } from "react";
import {
  ClipboardCheck,
  Target,
  BarChart3,
  CheckCircle,
  Clock,
  Award,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Shield,
  Users,
  Globe,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

import Header from "@pages/LandingPage/component/Header";
const ReadinessSurvey = () => {
  const surveyStats = [
    {
      label: "Questions",
      value: "12",
      icon: <ClipboardCheck className="w-4 h-4" />,
    },
    {
      label: "Time Required",
      value: "5-7 min",
      icon: <Clock className="w-4 h-4" />,
    },
    {
      label: "Passing Score",
      value: "70%",
      icon: <Target className="w-4 h-4" />,
    },
    {
      label: "Businesses Assessed",
      value: "10K+",
      icon: <Users className="w-4 h-4" />,
    },
  ];

  const surveyBenefits = [
    "Personalized trade recommendations",
    "Identify gaps in your preparation",
    "Priority access to AfCFTA resources",
    "Certificate of readiness",
    "Access to expert support",
  ];

  return (
    <>
      <Header />
      {/* Main Component */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Survey Card */}
              <div className="relative">
                {/* Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary-light">
                        <ClipboardCheck className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                          African Digital Trade Portal
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900">
                          AfCFTA Readiness Survey
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                    Before you register, please complete this 12-question
                    readiness assessment. It helps us determine if your business
                    is fully prepared to participate in AfCFTA trade.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {surveyStats.map((stat, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="text-primary">{stat.icon}</div>
                          <div className="text-2xl font-bold text-gray-900">
                            {stat.value}
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Required Score */}
                  <div className="mb-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-accent" />
                        <span className="font-semibold text-gray-900">
                          Required Score
                        </span>
                      </div>
                      <div className="text-3xl font-bold text-primary">
                        100%
                      </div>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary via-accent to-emerald-500 rounded-full w-full"></div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link to="/survey-questions">
                    <button className="group w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-accent text-white py-5 px-8 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <Sparkles className="w-6 h-6" />
                      <span>Begin Assessment</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </Link>

                  {/* Note */}
                  <p className="text-center text-gray-500 text-sm mt-6">
                    Complete to unlock full platform access
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-full -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
              </div>

              {/* Right Side - Benefits */}
              <div>
                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Why Take the Readiness Assessment?
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Get personalized insights and recommendations tailored to
                    your business needs for successful AfCFTA participation.
                  </p>
                </div>

                <div className="space-y-6">
                  {surveyBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/50 border border-gray-100"
                    >
                      <div className="p-2 rounded-lg bg-primary/10">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {benefit}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Success Rate */}
                <div className="mt-12 bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <Award className="w-8 h-8" />
                    <div>
                      <div className="text-3xl font-bold">86%</div>
                      <div className="text-primary-foreground/90">
                        Businesses Pass Rate
                      </div>
                    </div>
                  </div>
                  <p className="text-primary-foreground/80">
                    Most businesses discover valuable insights about their trade
                    readiness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReadinessSurvey;
