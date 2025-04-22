
import React from "react";
import { Satellite, Shield, Database, Globe, Clock } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkTo: string;
  color: "turquoise" | "pink" | "yellow";
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  linkText,
  linkTo,
  color,
}) => {
  const getGlowClass = () => {
    switch (color) {
      case "turquoise": return "neo-glow border-highlight-turquoise/30";
      case "pink": return "pink-glow border-highlight-pink/30";
      case "yellow": return "yellow-glow border-highlight-yellow/30";
      default: return "neo-glow border-highlight-turquoise/30";
    }
  };

  const getTextClass = () => {
    switch (color) {
      case "turquoise": return "text-highlight-turquoise";
      case "pink": return "text-highlight-pink";
      case "yellow": return "text-highlight-yellow";
      default: return "text-highlight-turquoise";
    }
  };

  return (
    <div className={`rounded-xl bg-space-darker p-6 border ${getGlowClass()} transition-all duration-300 hover:transform hover:scale-105`}>
      <div className={`${getTextClass()} mb-4`}>{icon}</div>
      <h3 className="text-2xl font-cairo font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <a href={linkTo} className={`inline-flex items-center ${getTextClass()} hover:underline`}>
        {linkText}
        <svg
          className="mr-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </a>
    </div>
  );
};

const ServiceSection: React.FC = () => {
  const services = [
    {
      icon: <Satellite size={32} />,
      title: "حلول IoT",
      description: "أنظمة استشعار متصلة لمراقبة المنشآت الحيوية وإدارتها بكفاءة",
      linkText: "استكشف الحلول",
      linkTo: "/iot-solutions",
      color: "turquoise" as const,
    },
    {
      icon: <Shield size={32} />,
      title: "أمن المعلومات",
      description: "طبقات حماية متعددة تؤمن البيانات الحساسة من التهديدات المتقدمة",
      linkText: "تعرف على أنظمة الحماية",
      linkTo: "/info-security",
      color: "yellow" as const,
    },
    {
      icon: <Database size={32} />,
      title: "نظام إدارة المؤسسة",
      description: "منصة موحدة تجمع كافة بيانات المنشأة في لوحة تحكم ذكية",
      linkText: "اكتشف النظام",
      linkTo: "/ems",
      color: "pink" as const,
    },
  ];

  return (
    <section className="py-20 bg-space-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-highlight-pink/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-highlight-turquoise/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cairo font-bold mb-6">
            <span className="bg-gradient-to-r from-highlight-turquoise to-highlight-pink text-transparent bg-clip-text">
              نراقب... نُدير... نُحصّن
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            منظومة متكاملة للحلول التقنية المتطورة التي تجمع بين أحدث تقنيات إنترنت الأشياء وأنظمة الأمن السيبراني لحماية البنية التحتية الرقمية في العراق
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-space-darker rounded-lg px-6 py-3 border border-highlight-turquoise/20 neo-glow">
            <Clock className="text-highlight-turquoise ml-2" />
            <p className="text-white">
              <span className="text-highlight-turquoise font-bold">24/7</span> مراقبة وحماية مستمرة
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
