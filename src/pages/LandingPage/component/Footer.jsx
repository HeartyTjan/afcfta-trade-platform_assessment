import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-gray-300">
      <div className="container mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white">
                AfCFTA Digital Trade
              </h2>
              <p className="text-primary-light mt-1 font-medium">
                National Portal – Nigeria
              </p>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-md">
              Empowering Nigerian businesses to trade seamlessly across Africa
              under the African Continental Free Trade Area. A trusted gateway
              for cross-border digital commerce.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Explore</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                "Home",
                "Apply to Trade",
                "Find Businesses",
                "How It Works",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Legal</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                "Privacy Policy",
                "Terms of Service",
                "AfCFTA Compliance",
                "Data Protection",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-6">
            Contact Information
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-white/5">
                <MapPin className="w-5 h-5 text-primary-light" />
              </div>
              <div>
                <p className="text-white font-medium">
                  Federal Ministry of Trade & Investment
                </p>
                <p className="text-gray-400 text-sm">Abuja, Nigeria</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-white/5">
                <Phone className="w-5 h-5 text-primary-light" />
              </div>
              <span className="text-gray-300">+234 800 AFCFTA</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-white/5">
                <Mail className="w-5 h-5 text-primary-light" />
              </div>
              <span className="text-gray-300">info@afcfta.gov.ng</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/30 py-6 mt-10 border-t border-white/10">
        <div className="container mx-auto px-6 text-center text-gray-400 text-sm">
          <p>
            © 2025 National AfCFTA Digital Trade Platform — Federal Republic of
            Nigeria.
          </p>
          <p className="mt-1">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
