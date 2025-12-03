import React, { useState } from "react";
import {
  CheckCircle,
  X,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Award,
  Sparkles,
  AlertCircle,
  ChevronRight,
  Target,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const SurveyQuestions = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      text: "Do you have a valid TIN number?",
      options: [
        { text: "Yes, I have a TIN", score: 20 },
        { text: "No, I don't have one", score: 0 },
      ],
      category: "Legal",
    },
    {
      id: 2,
      text: "Is your business registered with CAC?",
      options: [
        { text: "Yes, fully registered", score: 20 },
        { text: "Registration in progress", score: 10 },
        { text: "Not registered", score: 0 },
      ],
      category: "Legal",
    },
    {
      id: 3,
      text: "Do you have NIN verification?",
      options: [
        { text: "Yes, fully verified", score: 15 },
        { text: "No, not yet", score: 0 },
      ],
      category: "Identity",
    },
    {
      id: 4,
      text: "Have you exported goods/services internationally before?",
      options: [
        { text: "Yes, to multiple countries", score: 15 },
        { text: "Yes, within Africa", score: 10 },
        { text: "No, never exported", score: 0 },
      ],
      category: "Experience",
    },
    {
      id: 5,
      text: "Are your business documents (licenses, permits) up to date?",
      options: [
        { text: "All documents current", score: 10 },
        { text: "Some need renewal", score: 5 },
        { text: "Not sure", score: 0 },
      ],
      category: "Compliance",
    },
    {
      id: 6,
      text: "Do you have experience with international trade documentation?",
      options: [
        { text: "Extensive experience", score: 10 },
        { text: "Some experience", score: 5 },
        { text: "No experience", score: 0 },
      ],
      category: "Experience",
    },
    {
      id: 7,
      text: "Is your business financially prepared for export activities?",
      options: [
        { text: "Fully prepared", score: 10 },
        { text: "Partially prepared", score: 5 },
        { text: "Not prepared", score: 0 },
      ],
      category: "Finance",
    },
    {
      id: 8,
      text: "Do you have a dedicated team for international trade?",
      options: [
        { text: "Yes, experienced team", score: 10 },
        { text: "Small team", score: 5 },
        { text: "No dedicated team", score: 0 },
      ],
      category: "Capacity",
    },
    {
      id: 9,
      text: "Are you familiar with AfCFTA rules and regulations?",
      options: [
        { text: "Very familiar", score: 10 },
        { text: "Somewhat familiar", score: 5 },
        { text: "Not familiar", score: 0 },
      ],
      category: "Knowledge",
    },
    {
      id: 10,
      text: "Do you have quality certifications (ISO, NAFDAC, etc.)?",
      options: [
        { text: "Multiple certifications", score: 10 },
        { text: "One certification", score: 5 },
        { text: "No certifications", score: 0 },
      ],
      category: "Standards",
    },
    {
      id: 11,
      text: "Is your product/service competitively priced for African markets?",
      options: [
        { text: "Highly competitive", score: 10 },
        { text: "Moderately competitive", score: 5 },
        { text: "Not competitive", score: 0 },
      ],
      category: "Market",
    },
    {
      id: 12,
      text: "Do you have a market entry strategy for African countries?",
      options: [
        { text: "Comprehensive strategy", score: 10 },
        { text: "Basic strategy", score: 5 },
        { text: "No strategy", score: 0 },
      ],
      category: "Strategy",
    },
  ];

  const handleBackToHome = () => {
    console.log("Navigating to home/get-started");
    navigate("/get-started");
  };
  const handleAnswer = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: option,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // All questions answered, show results
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const calculateResults = () => {
    let totalScore = 0;
    const categoryScores = {};

    questions.forEach((question, index) => {
      const answer = answers[index];
      if (answer) {
        totalScore += answer.score;

        // Track category scores
        if (!categoryScores[question.category]) {
          categoryScores[question.category] = { total: 0, max: 0 };
        }
        categoryScores[question.category].total += answer.score;
        categoryScores[question.category].max += Math.max(
          ...question.options.map((o) => o.score)
        );
      }
    });

    const percentage = Math.round((totalScore / 120) * 100);

    // Determine readiness level
    let readinessLevel = "Beginner";
    let levelColor = "text-red-600";
    let levelBg = "bg-red-100";

    if (percentage >= 80) {
      readinessLevel = "Advanced";
      levelColor = "text-emerald-600";
      levelBg = "bg-emerald-100";
    } else if (percentage >= 60) {
      readinessLevel = "Intermediate";
      levelColor = "text-amber-600";
      levelBg = "bg-amber-100";
    } else if (percentage >= 40) {
      readinessLevel = "Basic";
      levelColor = "text-blue-600";
      levelBg = "bg-blue-100";
    }

    return {
      totalScore,
      percentage,
      readinessLevel,
      levelColor,
      levelBg,
      categoryScores,
      maxScore: 120,
    };
  };

  const resetSurvey = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const results = showResults ? calculateResults() : null;

  return (
    <>
      {/* Survey Modal - Starts with Question 1 Immediately */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {!showResults ? (
              /* Question Screen - No extra header, just question */
              <>
                {/* Minimal Header with Progress Only */}
                <div className="sticky top-0 bg-white border-b border-gray-200 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                        {currentQuestion + 1}
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">
                          Question {currentQuestion + 1} of {questions.length}
                        </div>
                        <div className="h-1 w-24 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all duration-300"
                            style={{
                              width: `${
                                ((currentQuestion + 1) / questions.length) * 100
                              }%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handleBackToHome}
                      className="p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                </div>

                {/* Question */}
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">
                    {questions[currentQuestion].text}
                  </h2>

                  {/* Options */}
                  <div className="space-y-3 mb-8">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(option)}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                          answers[currentQuestion]?.text === option.text
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                              answers[currentQuestion]?.text === option.text
                                ? "border-primary bg-primary"
                                : "border-gray-300"
                            }`}
                          >
                            {answers[currentQuestion]?.text === option.text && (
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                            )}
                          </div>
                          <div className="flex-grow">
                            <span className="text-gray-800">{option.text}</span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <button
                      onClick={handlePrevious}
                      disabled={currentQuestion === 0}
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium ${
                        currentQuestion === 0
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>

                    <button
                      onClick={handleNext}
                      disabled={!answers[currentQuestion]}
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium ${
                        !answers[currentQuestion]
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-primary text-white hover:bg-primary-light"
                      }`}
                    >
                      {currentQuestion < questions.length - 1
                        ? "Next"
                        : "See Results"}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              /* Results Screen */
              <div>
                {/* Results Header */}
                <div className="bg-gradient-to-r from-primary to-accent text-white p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold">
                        Assessment Complete!
                      </h3>
                      <p className="text-primary-foreground/90">
                        Your AfCFTA Readiness Score
                      </p>
                    </div>
                    <button
                      onClick={handleBackToHome}
                      className="p-2 hover:bg-white/20 rounded-lg"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Score Circle */}
                  <div className="flex items-center justify-center mb-8">
                    <div className="relative">
                      <div className="w-48 h-48 rounded-full border-8 border-white/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-5xl font-bold">
                            {results.percentage}%
                          </div>
                          <div className="text-lg">Overall Score</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  {/* Readiness Level */}
                  <div className={`${results.levelBg} rounded-2xl p-6 mb-8`}>
                    <div className="flex items-center gap-4">
                      <Award className={`w-8 h-8 ${results.levelColor}`} />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">
                          {results.readinessLevel} Readiness
                        </h4>
                        <p className="text-gray-600">
                          You scored {results.totalScore} out of{" "}
                          {results.maxScore} points
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Category Breakdown */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <BarChart3 className="w-6 h-6" />
                      Category Breakdown
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(results.categoryScores).map(
                        ([category, data]) => {
                          const percentage = Math.round(
                            (data.total / data.max) * 100
                          );
                          return (
                            <div
                              key={category}
                              className="bg-gray-50 rounded-xl p-4"
                            >
                              <div className="flex justify-between mb-2">
                                <span className="font-medium text-gray-900">
                                  {category}
                                </span>
                                <span className="font-bold text-primary">
                                  {percentage}%
                                </span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                                  style={{ width: `${percentage}%` }}
                                ></div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <AlertCircle className="w-6 h-6 text-amber-500" />
                      Recommendations
                    </h4>
                    <div className="space-y-3">
                      {results.percentage < 100 ? (
                        <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl">
                          <div className="w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
                          <div>
                            <p className="font-medium text-gray-900">
                              Complete Requirements Needed
                            </p>
                            <p className="text-gray-600">
                              Score {100 - results.percentage}% more to qualify
                              for immediate registration. Focus on:{" "}
                              {results.percentage < 70
                                ? "Legal documentation and compliance"
                                : "Market strategy and certifications"}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                          <div>
                            <p className="font-medium text-gray-900">
                              Excellent! You're Ready
                            </p>
                            <p className="text-gray-600">
                              You meet all requirements for AfCFTA registration.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={resetSurvey}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      Retake Assessment
                    </button>

                    {results.percentage === 100 || results.percentage > 100 ? (
                      <button
                        onClick={navigate("/auth/register")}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-600 transition-colors"
                      >
                        <span>Continue to Registration</span>
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    ) : (
                      <button
                        onClick={() => setIsOpen(false)}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gray-500 text-white rounded-xl font-semibold hover:bg-gray-600 transition-colors cursor-not-allowed opacity-80"
                        disabled
                      >
                        <span>
                          Score {results.percentage}% - Need 100% to Register
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SurveyQuestions;
