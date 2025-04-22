
import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SecurityCounter from "../components/SecurityCounter";
import ServiceSection from "../components/ServiceSection";
import Footer from "../components/Footer";

const Index: React.FC = () => {
  return (
    <div className="bg-space-dark min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-cairo font-bold mb-6">
              <span className="text-white">عقلك المؤسّسي في </span>
              <span className="text-highlight-turquoise">لوحة قيادة واحدة</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              نقدم تقنيات متكاملة تحول بنيتك التحتية إلى منظومة ذكية قابلة للإدارة والمراقبة، مع تأمين كامل لشبكتك ضد التهديدات السيبرانية
            </p>
          </div>

          {/* Counter and description grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-cairo font-bold text-white mb-6">ربط الأشياء... <span className="text-highlight-pink">حماية الأرواح</span></h3>
              <p className="text-gray-300 mb-6">
                تعتمد حلولنا على تكنولوجيا إنترنت الأشياء (IoT) المتقدمة لربط وإدارة البنية التحتية الحيوية مثل محطات الطاقة ومصافي النفط وشبكات النقل، مع توفير حماية متقدمة ضد الهجمات السيبرانية.
              </p>
              
              <div className="space-y-4">
                {/* Feature item 1 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-highlight-turquoise/20 flex items-center justify-center ml-4">
                    <span className="text-highlight-turquoise font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-cairo font-medium text-white mb-1">مراقبة مستمرة 24/7</h4>
                    <p className="text-gray-400">نظام مراقبة مستمر يعمل على مدار الساعة للتعرف الفوري على أي محاولات اختراق</p>
                  </div>
                </div>
                
                {/* Feature item 2 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-highlight-pink/20 flex items-center justify-center ml-4">
                    <span className="text-highlight-pink font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-cairo font-medium text-white mb-1">إدارة متكاملة للمنشآت</h4>
                    <p className="text-gray-400">لوحة تحكم ذكية تجمع بيانات كافة الأنظمة والحساسات في واجهة مركزية سهلة الاستخدام</p>
                  </div>
                </div>
                
                {/* Feature item 3 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-highlight-yellow/20 flex items-center justify-center ml-4">
                    <span className="text-highlight-yellow font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-cairo font-medium text-white mb-1">حماية متعددة الطبقات</h4>
                    <p className="text-gray-400">أنظمة أمن متقدمة تشمل جدران نارية ذكية وتشفير متطور وتحليل سلوكي للشبكة</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <SecurityCounter className="max-w-md mx-auto" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <ServiceSection />
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-space-darker opacity-70"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-highlight-turquoise/10 to-highlight-pink/10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-cairo font-bold mb-6 text-white">
              هل أنت مستعد لتأمين بنيتك التحتية الرقمية؟
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              دعنا نبني معًا مستقبلًا رقميًا آمنًا لمنشأتك ولعراقنا الحبيب
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="button-primary">ابدأ معنا الآن</button>
              <button className="button-secondary">حجز استشارة مجانية</button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
