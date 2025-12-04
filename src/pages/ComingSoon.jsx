// components/ComingSoon.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, CheckCircle2, Shield, ArrowLeft } from "lucide-react";

const ComingSoon = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center px-6 relative">
      {/* Back to Home Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Home
      </button>

      <div className="max-w-2xl w-full text-center mx-auto">
        {/* Official Badge */}
        <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-sm border border-gray-200 mb-10">
          <Shield className="w-5 h-5 text-gray-700" />
          <span className="text-sm font-medium text-gray-700">
            Official AfCFTA Digital Trade Portal
          </span>
        </div>

        {/* Main Message */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Coming Soon
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-lg mx-auto leading-relaxed">
          The National AfCFTA Digital Trade Portal is under final development
          and will launch shortly.
        </p>

        {/* Email Signup */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-gray-500 focus:ring-4 focus:ring-gray-100 transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-white font-medium rounded-xl hover:bg-primary-dark transition-colors whitespace-nowrap"
              >
                Notify Me
              </button>
            </div>
          </form>
        ) : (
          <div className="max-w-md mx-auto bg-green-50 border border-green-200 rounded-xl p-6">
            <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <p className="text-lg font-medium text-gray-800">
              Thank you! We'll notify you when we launch.
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 text-gray-500 text-sm">
          <p>
            An initiative of the{" "}
            <strong>Federal Ministry of Industry, Trade and Investment</strong>
            <br />
            in partnership with the <strong>African Union</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
