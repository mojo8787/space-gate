import React from "react";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Lock, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email({
    message: "البريد الإلكتروني غير صالح.",
  }),
  password: z.string().min(6, {
    message: "كلمة المرور يجب أن تكون 6 أحرف على الأقل.",
  }),
});

const Contact: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "تم تسجيل الدخول بنجاح",
      description: "جاري تحويلك إلى نظام إدارة المباني...",
    });
    
    setTimeout(() => {
      setIsDialogOpen(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-space-dark py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-12 animate-fade-in">
            <div className="w-40 h-40 mb-6 relative group">
              <div className="absolute inset-0 bg-highlight-turquoise/20 rounded-full animate-pulse group-hover:animate-none transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Building 
                  className="w-24 h-24 text-highlight-turquoise transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" 
                  strokeWidth={1.5} 
                />
              </div>
            </div>
            <h2 className="text-3xl font-cairo font-bold text-highlight-turquoise mb-2 tracking-wider">
              Space Gate
            </h2>
            <div className="h-0.5 w-32 bg-gradient-to-r from-highlight-turquoise/0 via-highlight-turquoise to-highlight-turquoise/0 animate-pulse"></div>
          </div>

          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-cairo font-bold text-white mb-4">
              بوابة الدخول لنظام إدارة المباني
            </h1>
            <p className="text-gray-300">
              سجل دخولك للوصول إلى نظام إدارة المباني الخاص بك
            </p>
          </div>

          <div className="bg-space-darker p-6 sm:p-8 rounded-xl border border-highlight-turquoise/20 neo-glow">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-highlight-turquoise/10 rounded-full flex items-center justify-center">
                <Building className="text-highlight-turquoise" size={32} />
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem dir="rtl">
                      <FormLabel className="text-white">البريد الإلكتروني</FormLabel>
                      <FormControl>
                        <Input placeholder="أدخل بريدك الإلكتروني" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem dir="rtl">
                      <FormLabel className="text-white">كلمة المرور</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="أدخل كلمة المرور" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-highlight-turquoise hover:bg-highlight-turquoise/80 text-white"
                  >
                    <Lock className="ml-2" size={16} />
                    تسجيل الدخول
                  </Button>
                </div>
              </form>
            </Form>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                هل نسيت كلمة المرور؟{" "}
                <a href="#" className="text-highlight-turquoise hover:underline">
                  استعادة كلمة المرور
                </a>
              </p>
            </div>
          </div>

          <div className="mt-10 bg-space-darker p-6 rounded-xl border border-highlight-pink/20 pink-glow">
            <h2 className="text-xl font-cairo font-bold text-white mb-4 text-center">
              هل تحتاج إلى مساعدة؟
            </h2>
            <p className="text-gray-300 text-center mb-4">
              فريق الدعم الفني متواجد على مدار الساعة لمساعدتك
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
              <div className="p-3 bg-highlight-pink/5 rounded-lg">
                <p className="text-highlight-pink font-bold">+964 123 4567</p>
                <p className="text-gray-400 text-sm">الدعم الفني</p>
              </div>
              <div className="p-3 bg-highlight-turquoise/5 rounded-lg">
                <p className="text-highlight-turquoise font-bold">support@spacegate.iq</p>
                <p className="text-gray-400 text-sm">البريد الإلكتروني</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-auto bg-space-dark border-highlight-turquoise">
          <DialogHeader>
            <DialogTitle className="text-2xl font-cairo text-white text-center">نظام إدارة المباني - مجمع رويال سيتي</DialogTitle>
            <DialogDescription className="text-center text-gray-300">
              مرحباً بك في لوحة التحكم الخاصة بك
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-space-darker p-4 rounded-lg border border-highlight-turquoise/20">
              <h3 className="text-lg font-cairo font-bold text-white mb-2">معلومات المبنى</h3>
              <p className="text-gray-300">مجمع رويال سيتي - المنصور</p>
              <p className="text-gray-300">رقم المبنى: RC-2023</p>
              <p className="text-gray-300">المساح��: 12,500 م²</p>
            </div>
            <div className="bg-space-darker p-4 rounded-lg border border-highlight-pink/20">
              <h3 className="text-lg font-cairo font-bold text-white mb-2">إحصائيات الطاقة</h3>
              <p className="text-gray-300">استهلاك اليوم: 420 كيلوواط/ساعة</p>
              <p className="text-gray-300">استهلاك الشهر: 12,750 كيلوواط/ساعة</p>
              <p className="text-highlight-turquoise">توفير: 22% مقارنة بالشهر السابق</p>
            </div>
            <div className="bg-space-darker p-4 rounded-lg border border-highlight-yellow/20">
              <h3 className="text-lg font-cairo font-bold text-white mb-2">أنظمة التكييف</h3>
              <p className="text-gray-300">درجة الحرارة الحالية: 23°C</p>
              <p className="text-gray-300">معدل الرطوبة: 45%</p>
              <p className="text-gray-300">حالة النظام: تشغيل</p>
            </div>
            <div className="bg-space-darker p-4 rounded-lg border border-highlight-turquoise/20">
              <h3 className="text-lg font-cairo font-bold text-white mb-2">الأمان والمراقبة</h3>
              <p className="text-gray-300">كاميرات المراقبة: 24/24</p>
              <p className="text-gray-300">أجهزة الإنذار: فعّالة</p>
              <p className="text-highlight-pink">تنبيه: فحص نظام الإطفاء الشهري مستحق</p>
            </div>
          </div>

          <div className="mt-4">
            <Button 
              className="w-full bg-highlight-turquoise hover:bg-highlight-turquoise/80 text-white"
              onClick={() => setIsDialogOpen(false)}
            >
              الدخول إلى النظام الكامل
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Contact;
