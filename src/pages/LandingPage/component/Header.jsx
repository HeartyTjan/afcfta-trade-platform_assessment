import React, { useState } from "react";
import {
  Home,
  BarChart3,
  BookOpen,
  Info,
  LogIn,
  UserPlus,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", icon: <Home className="w-4 h-4" />, href: "#" },
    {
      label: "Monitoring Dashboard",
      icon: <BarChart3 className="w-4 h-4" />,
      href: "#",
    },
    {
      label: "Knowledge & Support Hub",
      icon: <BookOpen className="w-4 h-4" />,
      href: "#",
    },
    { label: "About AfCFTA", icon: <Info className="w-4 h-4" />, href: "#" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
            <span className="text-sm font-medium">
              AfCFTA Digital Trade National Portal
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4 text-sm">
            <span className="text-primary-foreground/90">
              Welcome to the official portal
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-white font-bold text-xl">A</span>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-accent border-2 border-white"></div>
                  </div>
                </div>
                <div>
                  <span className="text-2xl font-bold text-primary">
                    AfCFTA
                  </span>
                  <span className="text-2xl font-light text-gray-700">
                    {" "}
                    Digital Trade
                  </span>
                </div>
              </div>
              <span className="text-xs text-gray-500 mt-1">
                National Portal
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors group"
              >
                <span className="text-primary/70 group-hover:text-primary transition-colors">
                  {item.icon}
                </span>
                <span className="font-medium text-sm">{item.label}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </button>
            <div className="w-px h-6 bg-gray-300"></div>
            <Link to="/get-started">
              <button className="flex items-center space-x-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-darker transition-colors">
                <UserPlus className="w-4 h-4" />
                <span>Get Started</span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-primary">{item.icon}</span>
                  <span className="font-medium text-gray-700">
                    {item.label}
                  </span>
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t">
                <button className="flex items-center justify-center space-x-2 p-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </button>
                <button className="flex items-center justify-center space-x-2 p-3 bg-accent text-white rounded-lg hover:bg-accent-darker transition-colors">
                  <UserPlus className="w-4 h-4" />
                  <span>Get Started</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary-light"></div>
    </div>
  );
};

export default Header;
