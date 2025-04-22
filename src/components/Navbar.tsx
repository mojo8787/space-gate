import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Menu, X, Satellite, Lock, Database, Globe, Layers, Users, BookOpen, Building } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "الرئيسية", path: "/", icon: <Globe className="ml-1" size={18} /> },
    { name: "حلول IoT", path: "/iot-solutions", icon: <Satellite className="ml-1" size={18} /> },
    { name: "أمن المعلومات", path: "/info-security", icon: <Shield className="ml-1" size={18} /> },
    { name: "إدارة المباني", path: "/building-management", icon: <Building className="ml-1" size={18} /> },
    { name: "نظام إدارة المؤسسة", path: "/ems", icon: <Database className="ml-1" size={18} /> },
    { name: "دراسات حالة", path: "/case-studies", icon: <BookOpen className="ml-1" size={18} /> },
    { name: "مختبر الابتكار", path: "/innovation-lab", icon: <Layers className="ml-1" size={18} /> },
    { name: "شركاؤنا", path: "/partners", icon: <Users className="ml-1" size={18} /> },
    { name: "تواصل معنا", path: "/contact", icon: <Lock className="ml-1" size={18} /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-space-darker/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex flex-row-reverse gap-2 items-center">
              <img 
                src="/lovable-uploads/a0e36fe8-0c93-4ad7-9211-b4b1d91e85fb.png" 
                alt="Space Gate Logo" 
                className="h-10 w-10" 
              />
              <span className="text-white font-cairo text-xl font-bold">بوابة الفضاء</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center text-gray-300 hover:text-highlight-turquoise transition-colors duration-300"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-highlight-turquoise transition-colors duration-300"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-space-darker/95 backdrop-blur-lg py-4">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center text-gray-300 hover:text-highlight-turquoise transition-colors duration-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.icon}
                  <span className="mr-2">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
