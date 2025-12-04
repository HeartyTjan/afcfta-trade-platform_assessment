import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ShieldCheck, Lock } from "lucide-react";

const Registration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 px-4">
      <div className="w-full max-w-lg space-y-8 py-10">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 bg-white shadow-sm border border-gray-100 px-4 py-2 rounded-full">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span className="text-xs md:text-sm font-medium text-gray-700">
              Official AfCFTA Portal — Government Verified
            </span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Create Your Account
          </h1>
          <p className="text-gray-600">
            Trade seamlessly across Africa with AfCFTA
          </p>
        </div>

        {/* Registration Card */}
        <div className="bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl border border-gray-100 p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { name: "name", type: "text", placeholder: "Full Name" },
              { name: "email", type: "email", placeholder: "Email Address" },
              { name: "phone", type: "tel", placeholder: "Phone Number" },
              {
                name: "business",
                type: "text",
                placeholder: "Business / Company Name",
              },
              {
                name: "password",
                type: "password",
                placeholder: "Create Password",
              },
            ].map((field) => (
              <div key={field.name} className="space-y-1">
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 
                             rounded-xl text-gray-900 placeholder-gray-500 
                             focus:bg-white focus:border-emerald-600 
                             focus:ring-4 focus:ring-emerald-100 transition"
                />
              </div>
            ))}

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 
                         py-4 text-white font-semibold text-lg rounded-xl
                         bg-gradient-to-r from-blue-600 to-emerald-600 
                         hover:shadow-lg hover:-translate-y-0.5 transition"
            >
              <Lock className="w-5 h-5" />
              Create Account
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Sign In */}
          <div className="pt-5 text-center">
            <p className="text-gray-600 text-sm">
              Already registered?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-emerald-600 font-semibold hover:text-emerald-700"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-gray-500">
          By signing up, you agree to our{" "}
          <span className="text-emerald-600 underline">Terms</span> and{" "}
          <span className="text-emerald-600 underline">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default Registration;
