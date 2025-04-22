
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Bolt, Lock, Wrench, Users } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BuildingModel from "../components/BuildingModel";

const BuildingManagement: React.FC = () => {
  return (
    <div className="bg-space-dark min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-cairo font-bold text-white mb-8 text-center">
            حلول <span className="text-highlight-turquoise">إدارة المباني</span> والمؤسّسات
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto text-center">
            نظام متكامل لإدارة المباني الذكية يجمع بين كفاءة استهلاك الطاقة والأمن المتقدم وتجربة مستخدم سلسة
          </p>

          {/* 3D Building Model Section */}
          <div className="mb-16 h-[500px] relative glass-panel">
            <BuildingModel />
          </div>

          {/* Tabs Section */}
          <Tabs defaultValue="energy" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-space-darker p-4 rounded-xl">
              <TabsTrigger value="energy" className="data-[state=active]:bg-highlight-turquoise data-[state=active]:text-space-darker">
                <Bolt className="ml-2" />
                الطاقة الذكية
              </TabsTrigger>
              <TabsTrigger value="security" className="data-[state=active]:bg-highlight-yellow data-[state=active]:text-space-darker">
                <Lock className="ml-2" />
                الأمن الفيزيائي
              </TabsTrigger>
              <TabsTrigger value="maintenance" className="data-[state=active]:bg-highlight-pink data-[state=active]:text-space-darker">
                <Wrench className="ml-2" />
                الصيانة التنبؤية
              </TabsTrigger>
              <TabsTrigger value="experience" className="data-[state=active]:bg-white data-[state=active]:text-space-darker">
                <Users className="ml-2" />
                تجربة المستخدم
              </TabsTrigger>
            </TabsList>

            <div className="mt-8 space-y-8">
              <TabsContent value="energy" className="space-card">
                <h3 className="text-2xl font-cairo font-bold text-white mb-4">إدارة الطاقة الذكية</h3>
                <p className="text-gray-300">
                  نظام متطور لمراقبة وتحسين استهلاك الطاقة في المبنى بالكامل، مع تحليلات متقدمة وتقارير تفصيلية
                </p>
              </TabsContent>

              <TabsContent value="security" className="space-card">
                <h3 className="text-2xl font-cairo font-bold text-white mb-4">الأمن الفيزيائي المتكامل</h3>
                <p className="text-gray-300">
                  منظومة أمنية شاملة تجمع بين كاميرات المراقبة الذكية وأنظمة التحكم في الوصول والكشف عن التسلل
                </p>
              </TabsContent>

              <TabsContent value="maintenance" className="space-card">
                <h3 className="text-2xl font-cairo font-bold text-white mb-4">الصيانة التنبؤية</h3>
                <p className="text-gray-300">
                  تحليل مستمر لأداء الأنظمة والمعدات للتنبؤ بالأعطال قبل حدوثها وجدولة الصيانة الوقائية
                </p>
              </TabsContent>

              <TabsContent value="experience" className="space-card">
                <h3 className="text-2xl font-cairo font-bold text-white mb-4">تجربة مستخدم متميزة</h3>
                <p className="text-gray-300">
                  واجهة سهلة الاستخدام تتيح التحكم الكامل في إعدادات المبنى مع إمكانية التخصيص حسب احتياجات كل مستخدم
                </p>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BuildingManagement;
