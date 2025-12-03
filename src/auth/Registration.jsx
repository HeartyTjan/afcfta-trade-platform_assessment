import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  Shield,
  Building,
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
  FileText,
  Upload,
  ChevronRight,
  X,
  AlertCircle,
  Eye,
  EyeOff,
} from "lucide-react";

const Registration = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    cacNumber: "",
    tinNumber: "",
    businessEmail: "",
    businessPhone: "",
    businessAddress: "",
    yearEstablished: "",
    numberOfEmployees: "",
    businessWebsite: "",

    contactName: "",
    contactPosition: "",
    contactEmail: "",
    contactPhone: "",
    contactNIN: "",

    mainProducts: [],
    targetCountries: [],
    exportExperience: "",
    annualRevenue: "",
    tradeCategories: [],

    cacDocument: null,
    tinDocument: null,
    ninDocument: null,
    taxClearance: null,
    otherDocuments: [],

    // Step 5: Verification
    termsAccepted: false,
    dataConsent: false,
    afcftaAgreement: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const businessTypes = [
    "Sole Proprietorship",
    "Partnership",
    "Limited Liability Company (LLC)",
    "Public Limited Company",
    "Cooperative",
    "Non-Governmental Organization (NGO)",
    "Other",
  ];

  const tradeCategories = [
    "Agriculture & Agro-processing",
    "Manufacturing",
    "Technology & Digital Services",
    "Financial Services",
    "Healthcare & Pharmaceuticals",
    "Energy & Renewable Energy",
    "Construction & Real Estate",
    "Transportation & Logistics",
    "Tourism & Hospitality",
    "Education & Training",
    "Creative Arts & Entertainment",
    "Mining & Natural Resources",
  ];

  const africanCountries = [
    "Algeria",
    "Angola",
    "Benin",
    "Botswana",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cameroon",
    "Central African Republic",
    "Chad",
    "Comoros",
    "Congo",
    "Côte d'Ivoire",
    "Djibouti",
    "Egypt",
    "Equatorial Guinea",
    "Eritrea",
    "Eswatini",
    "Ethiopia",
    "Gabon",
    "Gambia",
    "Ghana",
    "Guinea",
    "Guinea-Bissau",
    "Kenya",
    "Lesotho",
    "Liberia",
    "Libya",
    "Madagascar",
    "Malawi",
    "Mali",
    "Mauritania",
    "Mauritius",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Niger",
    "Nigeria",
    "Rwanda",
    "São Tomé and Príncipe",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Sudan",
    "Tanzania",
    "Togo",
    "Tunisia",
    "Uganda",
    "Zambia",
    "Zimbabwe",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      if (
        name === "targetCountries" ||
        name === "tradeCategories" ||
        name === "mainProducts"
      ) {
        setFormData((prev) => ({
          ...prev,
          [name]: checked
            ? [...prev[name], value]
            : prev[name].filter((item) => item !== value),
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: checked,
        }));
      }
    } else if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!formData.businessName.trim())
          newErrors.businessName = "Business name is required";
        if (!formData.businessType)
          newErrors.businessType = "Business type is required";
        if (!formData.cacNumber.trim())
          newErrors.cacNumber = "CAC number is required";
        if (!formData.tinNumber.trim())
          newErrors.tinNumber = "TIN number is required";
        if (!formData.businessEmail.trim()) {
          newErrors.businessEmail = "Business email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.businessEmail)) {
          newErrors.businessEmail = "Email is invalid";
        }
        if (!formData.businessPhone.trim())
          newErrors.businessPhone = "Business phone is required";
        break;

      case 2:
        if (!formData.contactName.trim())
          newErrors.contactName = "Contact name is required";
        if (!formData.contactPosition.trim())
          newErrors.contactPosition = "Position is required";
        if (!formData.contactEmail.trim()) {
          newErrors.contactEmail = "Contact email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.contactEmail)) {
          newErrors.contactEmail = "Email is invalid";
        }
        if (!formData.contactPhone.trim())
          newErrors.contactPhone = "Contact phone is required";
        if (!formData.contactNIN.trim())
          newErrors.contactNIN = "NIN is required";
        break;

      case 3:
        if (formData.mainProducts.length === 0)
          newErrors.mainProducts = "Select at least one product/service";
        if (formData.targetCountries.length === 0)
          newErrors.targetCountries = "Select at least one target country";
        if (!formData.exportExperience)
          newErrors.exportExperience = "Export experience is required";
        break;

      case 5:
        if (!formData.termsAccepted)
          newErrors.termsAccepted = "You must accept the terms and conditions";
        if (!formData.dataConsent)
          newErrors.dataConsent = "You must consent to data processing";
        if (!formData.afcftaAgreement)
          newErrors.afcftaAgreement = "You must agree to AfCFTA terms";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateStep(5)) {
      try {
        // Here you would normally send data to your API
        console.log("Form submitted:", formData);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Navigate to success page or dashboard
        navigate("/dashboard", {
          state: {
            message: "Registration successful! Your account is being verified.",
            businessName: formData.businessName,
          },
        });
      } catch (error) {
        console.error("Registration error:", error);
        setErrors({ submit: "Registration failed. Please try again." });
      }
    }
  };

  const steps = [
    {
      number: 1,
      title: "Business Information",
      icon: <Building className="w-5 h-5" />,
    },
    { number: 2, title: "Contact Person", icon: <User className="w-5 h-5" /> },
    { number: 3, title: "Trade Details", icon: <Globe className="w-5 h-5" /> },
    { number: 4, title: "Documents", icon: <FileText className="w-5 h-5" /> },
    { number: 5, title: "Verification", icon: <Shield className="w-5 h-5" /> },
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                  placeholder="Enter your business name"
                />
                {errors.businessName && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> {errors.businessName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type *
                </label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                >
                  <option value="">Select business type</option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.businessType && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> {errors.businessType}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CAC Registration Number *
                </label>
                <input
                  type="text"
                  name="cacNumber"
                  value={formData.cacNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                  placeholder="e.g., RC-1234567"
                />
                {errors.cacNumber && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> {errors.cacNumber}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tax Identification Number (TIN) *
                </label>
                <input
                  type="text"
                  name="tinNumber"
                  value={formData.tinNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                  placeholder="e.g., 12345678-0001"
                />
                {errors.tinNumber && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> {errors.tinNumber}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="businessEmail"
                    value={formData.businessEmail}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    placeholder="business@example.com"
                  />
                </div>
                {errors.businessEmail && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> {errors.businessEmail}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Phone *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="businessPhone"
                    value={formData.businessPhone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    placeholder="+234 800 000 0000"
                  />
                </div>
                {errors.businessPhone && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> {errors.businessPhone}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Address
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="businessAddress"
                  value={formData.businessAddress}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                  placeholder="Full business address"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Year Established
                </label>
                <input
                  type="number"
                  name="yearEstablished"
                  value={formData.yearEstablished}
                  onChange={handleInputChange}
                  min="1900"
                  max={new Date().getFullYear()}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                  placeholder="e.g., 2015"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Employees
                </label>
                <select
                  name="numberOfEmployees"
                  value={formData.numberOfEmployees}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                >
                  <option value="">Select range</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501+">501+ employees</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Website
                </label>
                <input
                  type="url"
                  name="businessWebsite"
                  value={formData.businessWebsite}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                  placeholder="https://example.com"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                {errors.contactName && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> {errors.contactName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position/Role *
                </label>
                <input
                  type="text"
                  name="contactPosition"
                  value={formData.contactPosition}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                  placeholder="e.g., CEO, Export Manager"
                />
                {errors.contactPosition && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> {errors.contactPosition}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    placeholder="contact@example.com"
                  />
                </div>
                {errors.contactEmail && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> {errors.contactEmail}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    placeholder="+234 800 000 0000"
                  />
                </div>
                {errors.contactPhone && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> {errors.contactPhone}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  National Identification Number (NIN) *
                </label>
                <input
                  type="text"
                  name="contactNIN"
                  value={formData.contactNIN}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                  placeholder="e.g., 12345678901"
                />
                {errors.contactNIN && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> {errors.contactNIN}
                  </p>
                )}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            {/* Trade Categories */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                What are your main products/services? *
              </label>
              <div className="grid md:grid-cols-3 gap-3">
                {tradeCategories.map((category) => (
                  <label
                    key={category}
                    className="flex items-center p-4 border border-gray-300 rounded-xl hover:border-primary hover:bg-primary/5 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      name="mainProducts"
                      value={category}
                      checked={formData.mainProducts.includes(category)}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-primary rounded focus:ring-primary"
                    />
                    <span className="ml-3 text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
              {errors.mainProducts && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" /> {errors.mainProducts}
                </p>
              )}
            </div>

            {/* Target Countries */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Which African countries do you want to trade with? *
              </label>
              <div className="max-h-60 overflow-y-auto p-4 border border-gray-300 rounded-xl">
                <div className="grid md:grid-cols-3 gap-3">
                  {africanCountries.map((country) => (
                    <label
                      key={country}
                      className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        name="targetCountries"
                        value={country}
                        checked={formData.targetCountries.includes(country)}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-primary rounded focus:ring-primary"
                      />
                      <span className="ml-2 text-gray-700">{country}</span>
                    </label>
                  ))}
                </div>
              </div>
              {errors.targetCountries && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" /> {errors.targetCountries}
                </p>
              )}
            </div>

            {/* Export Experience */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Do you have export experience? *
              </label>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    value: "none",
                    label: "No experience",
                    description: "First time exporter",
                  },
                  {
                    value: "regional",
                    label: "Regional experience",
                    description: "Within West Africa",
                  },
                  {
                    value: "continental",
                    label: "Continental experience",
                    description: "Across Africa",
                  },
                  {
                    value: "global",
                    label: "Global experience",
                    description: "International exports",
                  },
                  {
                    value: "extensive",
                    label: "Extensive experience",
                    description: "10+ years exporting",
                  },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      formData.exportExperience === option.value
                        ? "border-primary bg-primary/5"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        name="exportExperience"
                        value={option.value}
                        checked={formData.exportExperience === option.value}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-primary"
                      />
                      <span className="ml-3 font-semibold text-gray-900">
                        {option.label}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 ml-7">
                      {option.description}
                    </p>
                  </label>
                ))}
              </div>
              {errors.exportExperience && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" /> {errors.exportExperience}
                </p>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Document Requirements
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>All documents must be clear and legible</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Maximum file size: 5MB per document</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Accepted formats: PDF, JPG, PNG</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>
                    Documents will be verified within 3-5 business days
                  </span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* CAC Document */}
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 hover:border-primary transition-colors">
                <label className="block cursor-pointer">
                  <div className="text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2">
                      CAC Certificate
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Upload your CAC registration certificate
                    </p>
                    <div className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium">
                      {formData.cacDocument
                        ? formData.cacDocument.name
                        : "Choose File"}
                    </div>
                    <input
                      type="file"
                      name="cacDocument"
                      onChange={handleInputChange}
                      className="hidden"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                  </div>
                </label>
              </div>

              {/* TIN Document */}
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 hover:border-primary transition-colors">
                <label className="block cursor-pointer">
                  <div className="text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2">
                      TIN Certificate
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Upload your Tax Identification Number certificate
                    </p>
                    <div className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium">
                      {formData.tinDocument
                        ? formData.tinDocument.name
                        : "Choose File"}
                    </div>
                    <input
                      type="file"
                      name="tinDocument"
                      onChange={handleInputChange}
                      className="hidden"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                  </div>
                </label>
              </div>

              {/* NIN Document */}
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 hover:border-primary transition-colors">
                <label className="block cursor-pointer">
                  <div className="text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2">
                      NIN Verification
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Upload NIN document or verification
                    </p>
                    <div className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium">
                      {formData.ninDocument
                        ? formData.ninDocument.name
                        : "Choose File"}
                    </div>
                    <input
                      type="file"
                      name="ninDocument"
                      onChange={handleInputChange}
                      className="hidden"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                  </div>
                </label>
              </div>

              {/* Tax Clearance */}
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 hover:border-primary transition-colors">
                <label className="block cursor-pointer">
                  <div className="text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Tax Clearance Certificate
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Upload latest tax clearance certificate
                    </p>
                    <div className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium">
                      {formData.taxClearance
                        ? formData.taxClearance.name
                        : "Choose File"}
                    </div>
                    <input
                      type="file"
                      name="taxClearance"
                      onChange={handleInputChange}
                      className="hidden"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8">
            {/* Terms and Conditions */}
            <div className="border border-gray-200 rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Terms & Conditions
                  </h3>
                  <div className="h-48 overflow-y-auto p-4 bg-gray-50 rounded-xl">
                    <p className="text-gray-700 mb-3">
                      By registering on the AfCFTA Digital Trade Portal, you
                      agree to:
                    </p>
                    <ul className="space-y-2 text-gray-700 list-disc pl-5">
                      <li>Provide accurate and complete information</li>
                      <li>Comply with all AfCFTA rules and regulations</li>
                      <li>
                        Maintain the confidentiality of your account credentials
                      </li>
                      <li>
                        Accept responsibility for all activities under your
                        account
                      </li>
                      <li>
                        Allow verification of submitted documents by relevant
                        authorities
                      </li>
                      <li>Update your information as changes occur</li>
                      <li>
                        Use the platform only for legitimate trade purposes
                      </li>
                      <li>
                        Respect intellectual property rights of other users
                      </li>
                      <li>Comply with data protection regulations</li>
                      <li>
                        Accept that account may be suspended for violations
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-primary rounded mt-1"
                />
                <div>
                  <span className="font-medium text-gray-900">
                    I accept the Terms and Conditions *
                  </span>
                  {errors.termsAccepted && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> {errors.termsAccepted}
                    </p>
                  )}
                </div>
              </label>
            </div>

            {/* Data Consent */}
            <div className="border border-gray-200 rounded-2xl p-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="dataConsent"
                  checked={formData.dataConsent}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-primary rounded mt-1"
                />
                <div>
                  <span className="font-medium text-gray-900">
                    Data Processing Consent *
                  </span>
                  <p className="text-gray-600 mt-1 text-sm">
                    I consent to the processing of my personal data for the
                    purposes of AfCFTA trade facilitation, verification, and
                    regulatory compliance as outlined in the Privacy Policy.
                  </p>
                  {errors.dataConsent && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> {errors.dataConsent}
                    </p>
                  )}
                </div>
              </label>
            </div>

            {/* AfCFTA Agreement */}
            <div className="border border-gray-200 rounded-2xl p-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="afcftaAgreement"
                  checked={formData.afcftaAgreement}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-primary rounded mt-1"
                />
                <div>
                  <span className="font-medium text-gray-900">
                    AfCFTA Agreement *
                  </span>
                  <p className="text-gray-600 mt-1 text-sm">
                    I agree to comply with the African Continental Free Trade
                    Area agreement and all associated protocols, including rules
                    of origin, tariff concessions, and dispute settlement
                    mechanisms.
                  </p>
                  {errors.afcftaAgreement && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />{" "}
                      {errors.afcftaAgreement}
                    </p>
                  )}
                </div>
              </label>
            </div>

            {/* Submit Error */}
            {errors.submit && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  {errors.submit}
                </p>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-primary mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  <span className="text-primary">AfCFTA</span> Registration
                </h1>
                <p className="text-gray-600">National Digital Trade Portal</p>
              </div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Register your business to trade across 54 African countries under
              the African Continental Free Trade Area
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between relative">
              {/* Progress Line */}
              <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 -z-10">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                  style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
                ></div>
              </div>

              {steps.map((step) => (
                <div key={step.number} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentStep >= step.number
                        ? "bg-gradient-to-br from-primary to-accent text-white"
                        : "bg-white border-2 border-gray-300 text-gray-400"
                    }`}
                  >
                    {currentStep > step.number ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <span
                    className={`mt-2 text-sm font-medium transition-colors ${
                      currentStep >= step.number
                        ? "text-gray-900"
                        : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </span>
                  <span className="text-xs text-gray-500 mt-1">
                    Step {step.number}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Form Header */}
            <div className="border-b border-gray-200 p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {steps[currentStep - 1].title}
                  </h2>
                  <p className="text-gray-600">
                    Step {currentStep} of 5 • Complete all steps to register
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">
                    {currentStep}/5
                  </div>
                  <div className="text-sm text-gray-500">Steps Completed</div>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-8">
              <form onSubmit={handleSubmit}>
                {renderStepContent()}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-8 mt-8 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    disabled={currentStep === 1}
                    className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-colors ${
                      currentStep === 1
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-primary hover:bg-primary/10"
                    }`}
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Previous
                  </button>

                  {currentStep < 5 ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-light transition-colors"
                    >
                      Continue to Step {currentStep + 1}
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-accent text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
                    >
                      <Shield className="w-5 h-5" />
                      Complete Registration
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Help Information */}
          <div className="mt-8 text-center text-gray-600">
            <p className="flex items-center justify-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Need help? Contact support at support@afcfta.gov.ng or call +234
              800 AFCFTA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
