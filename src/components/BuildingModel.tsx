
import React, { useEffect, useState } from "react";
import { Building } from "lucide-react";

const BuildingModel: React.FC = () => {
  const [selectedSystem, setSelectedSystem] = useState<string>("hvac");
  const systems = [
    { id: "hvac", name: "تكييف الهواء", color: "text-highlight-turquoise" },
    { id: "lighting", name: "الإنارة", color: "text-highlight-yellow" },
    { id: "access", name: "التحكم بالوصول", color: "text-highlight-pink" },
  ];

  return (
    <div className="relative h-full">
      {/* Placeholder for 3D model - to be implemented with Three.js in future update */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-gray-400 text-center">
          <Building size={64} className="mx-auto mb-4 text-highlight-turquoise" />
          <p>نموذج المبنى ثلاثي الأبعاد قيد التطوير</p>
        </div>
      </div>

      {/* System Selection Controls */}
      <div className="absolute bottom-4 right-4 space-y-2">
        {systems.map((system) => (
          <button
            key={system.id}
            onClick={() => setSelectedSystem(system.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              selectedSystem === system.id
                ? `${system.color} bg-white/10`
                : "text-gray-400 hover:bg-white/5"
            }`}
          >
            <span>{system.name}</span>
          </button>
        ))}
      </div>

      {/* Usage Data */}
      <div className="absolute top-4 left-4 bg-space-darker/80 backdrop-blur-sm p-4 rounded-lg">
        <h4 className="font-cairo font-bold text-white mb-2">بيانات الاستهلاك</h4>
        <div className="space-y-2 text-sm">
          <p className="text-highlight-turquoise">الطاقة: 450 كيلوواط/ساعة</p>
          <p className="text-highlight-yellow">درجة الحرارة: 24°C</p>
          <p className="text-highlight-pink">عدد الزوار: 127</p>
        </div>
      </div>
    </div>
  );
};

export default BuildingModel;
