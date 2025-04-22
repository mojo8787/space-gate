
import React from "react";

const partners = [
  {
    id: "royalcity",
    name: "مجمع رويال سيتي - المنصور",
    description: "دعمنا مجمع رويال سيتي في بغداد بأنظمة إدارة المباني الذكية (BMS)، مما عزز التحول الرقمي وساهم في كفاءة التشغيل والأمان.",
    logo: "/lovable-uploads/5853c679-05a3-4ce9-977f-86b87cdfaf70.png",
    location: "بغداد",
    type: "إدارة المباني الذكية",
  }
];

const Partners: React.FC = () => {
  return (
    <div className="min-h-screen bg-space-dark flex flex-col items-center py-24">
      <h1 className="text-4xl font-cairo font-bold mb-10 text-white text-center">
        شركاؤنا
      </h1>
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center shadow-lg glass">
        <img
          src={partners[0].logo}
          alt={partners[0].name}
          className="w-44 h-44 object-contain rounded-lg shadow-xl mb-6 bg-white p-4"
          style={{ background: "rgba(255,255,255,0.87)" }}
        />
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-cairo font-bold text-highlight-turquoise mb-2">{partners[0].name}</h2>
          <p className="text-white/80 mb-1">{partners[0].description}</p>
          <div className="flex justify-center gap-4 mt-2">
            <span className="px-3 py-1 rounded-lg bg-highlight-turquoise/10 text-highlight-turquoise text-sm font-bold">
              {partners[0].type}
            </span>
            <span className="px-3 py-1 rounded-lg bg-highlight-pink/10 text-highlight-pink text-sm font-bold">
              {partners[0].location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
