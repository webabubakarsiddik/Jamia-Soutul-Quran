'use client';
import React, { use, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { COURSES } from '@/lib/constants';
import {
    Clock,
    Users,
    Award,
    CheckCircle2,
    ChevronDown,
    Download,
    Phone,
    MapPin,
    BookOpen,
    Wifi,
    Video,
    Library,
    Utensils,
    Activity
} from 'lucide-react';

export default function DepartmentDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const numericId = Number(id);
    const course = COURSES.find((item) => item.id === numericId) ?? COURSES[0];

    // Mock Data Generator based on ID
    const getDetails = (id: number) => {
        const commonDefaults = {
            routine: [
                { time: '০৪:৩০ - ০৫:০০', activity: 'ফজর ও তেলাওয়াত' },
                { time: '০৫:০০ - ০৬:৩০', activity: 'মর্নিং ক্লাস / সবক' },
                { time: '০৬:৩০ - ০৭:৩০', activity: 'নাস্তা ও বিশ্রাম' },
                { time: '০৭:৩০ - ১১:৩০', activity: 'ক্লাস ও প্র্যাকটিস' },
                { time: '১১:৩০ - ১২:৩০', activity: 'গোসল ও জোহরের প্রস্তুতি' },
                { time: '০২:৩০ - ০৪:৩০', activity: 'দুপুরের ক্লাস' },
                { time: '০৫:০০ - মাগরিব', activity: 'বিকালের খেলাধুলা / শরীরচর্চা' },
                { time: 'মাগরিব - এশা', activity: 'রিভিশন ক্লাস' },
            ],
            facilities: [
                { icon: Library, label: 'সমৃদ্ধ লাইব্রেরি' },
                { icon: Wifi, label: 'ডিজিটাল জোন' },
                { icon: Video, label: 'সিসিটিভি নিরাপত্তা' },
                { icon: Utensils, label: 'পুষ্টিকর খাবার' },
                { icon: Activity, label: 'প্রাথমিক চিকিৎসা' },
                { icon: BookOpen, label: 'ব্যক্তিগত রিডিং ডেস্ক' },
            ],
            faqs: [
                { q: 'ভর্তির জন্য কি কি যোগ্যতা প্রয়োজন?', a: 'শিক্ষার্থীর বয়স এবং মেধা যাচাই পরীক্ষার মাধ্যমে ভর্তি নেওয়া হয়।' },
                { q: 'আবাসিক সুবিধা কেমন?', a: 'আমাদের রয়েছে উন্নতমানের আবাসিক ব্যবস্থা, যেখানে ছাত্রদের পড়াশোনা ও থাকার সুব্যবস্থা রয়েছে।' },
                { q: 'অভিভাবকরা কখন দেখা করতে পারবেন?', a: 'সপ্তাহের নির্দিষ্ট দিনে এবং বিশেষ প্রয়োজনে কর্তৃপক্ষের অনুমতি সাপেক্ষে দেখা করা যাবে।' },
            ]
        };

        if (id === 2) { // Hifz
            return {
                ...commonDefaults,
                badge: 'হিফজুল কুরআন',
                subtitle: 'আন্তর্জাতিক মানের হাফেজ গড়ার লক্ষ্যে',
                stats: [
                    { icon: Clock, label: 'কোর্স মেয়াদ', value: '৩-৪ বছর' },
                    { icon: Users, label: 'মোট আসন', value: '৫০ জন' },
                    { icon: Award, label: 'যোগ্যতা', value: 'নাজেরা পাস' },
                ]
            };
        } else if (id === 3) { // Nurani
            return {
                ...commonDefaults,
                badge: 'নূরানী বিভাগ',
                subtitle: 'সহীহ কুরআন শিক্ষার মজবুত ভিত্তি',
                stats: [
                    { icon: Clock, label: 'কোর্স মেয়াদ', value: '২ বছর' },
                    { icon: Users, label: 'মোট আসন', value: '৬০ জন' },
                    { icon: Award, label: 'বয়স', value: '৫+ বছর' },
                ]
            };
        }
        // Kitab (Default)
        return {
            ...commonDefaults,
            badge: 'কিতাব বিভাগ',
            subtitle: 'আলেম ও দ্বীনি লিডার তৈরির কারখানা',
            stats: [
                { icon: Clock, label: 'কোর্স মেয়াদ', value: '১০ বছর' },
                { icon: Users, label: 'মোট আসন', value: '৪০ জন' },
                { icon: Award, label: 'যোগ্যতা', value: 'অষ্টম শ্রেণি/হিফজ' },
            ]
        };
    };

    const details = getDetails(numericId);

    return (
        <div className="min-h-screen bg-[#F9FAFB] pt-24 pb-20">
            {/* Header / Hero Section */}
            <div className="container-custom mb-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 animate-fade-in order-2 lg:order-1 text-center lg:text-left">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-bold tracking-wider uppercase">
                            {details.badge}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 leading-tight">
                            {course.title}
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            {details.subtitle}। আমরা নিশ্চিত করি আধুনিক ও দ্বীনি শিক্ষার এক অপূর্ব সমন্বয় যা আপনার সন্তানকে গড়ে তুলবে একজন আদর্শ মানুষ হিসেবে।
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <Link href="/admission" className="btn-primary">
                                ভর্তি হোন
                            </Link>
                            <Link href="/#contact" className="btn-secondary">
                                যোগাযোগ করুন
                            </Link>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative order-1 lg:order-2 animate-scale-in">
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] relative">
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                className="object-cover"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent"></div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gold-400 rounded-full blur-2xl opacity-40"></div>
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500 rounded-full blur-3xl opacity-30"></div>
                    </div>
                </div>
            </div>

            <div className="container-custom">
                {/* Quick Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative z-10 -mt-8 lg:-mt-0">
                    {details.stats.map((stat, idx) => (
                        <div key={idx} className="card-premium flex items-center gap-4 bg-white/80 backdrop-blur-sm border-l-4 border-l-emerald-500">
                            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                                <stat.icon size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{stat.label}</p>
                                <p className="text-lg font-heading font-bold text-slate-900">{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-[1fr_350px] gap-10 items-start">
                    {/* Main Content Area */}
                    <div className="space-y-12">

                        {/* Daily Routine */}
                        <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Clock className="text-emerald-600" />
                                প্রাত্যহিক রুটিন
                            </h2>
                            <div className="relative border-l-2 border-emerald-100 ml-3 space-y-6">
                                {details.routine.map((item, idx) => (
                                    <div key={idx} className="relative pl-8 group">
                                        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-emerald-200 group-hover:border-emerald-500 transition-colors"></div>
                                        <div className="bg-slate-50 rounded-xl p-4 transition-all hover:bg-emerald-50/50">
                                            <p className="text-sm font-bold text-emerald-700 mb-1">{item.time}</p>
                                            <p className="text-slate-700 font-medium">{item.activity}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Special Facilities */}
                        <section>
                            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Award className="text-emerald-600" />
                                বিশেষ সুবিধাসমূহ
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {details.facilities.map((facility, idx) => (
                                    <div key={idx} className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-center group">
                                        <facility.icon size={32} className="text-slate-400 group-hover:text-emerald-600 mb-3 transition-colors" />
                                        <span className="font-semibold text-slate-700">{facility.label}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* FAQ Accordion */}
                        <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">সচরাচর জিজ্ঞাসা</h2>
                            <div className="space-y-3">
                                {details.faqs.map((faq, idx) => (
                                    <FAQItem key={idx} question={faq.q} answer={faq.a} />
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sticky Sidebar */}
                    <div className="hidden lg:block sticky top-28 space-y-6">
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 text-center">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">ভর্তি তথ্য</h3>
                            <p className="text-slate-500 text-sm mb-6">আসন সংখ্যা সীমিত, আজই যোগাযোগ করুন</p>

                            <div className="space-y-4">
                                <a href="tel:+8801962423632" className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-emerald-50 text-emerald-700 font-bold hover:bg-emerald-100 transition-colors">
                                    <Phone size={20} />
                                    <span>01962 423632</span>
                                </a>
                                <button className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                                    <Download size={20} />
                                    <span>ভর্তি ফরম ডাউনলোড</span>
                                </button>
                            </div>

                            <hr className="my-6 border-slate-100" />

                            <div className="text-left space-y-3">
                                <div className="flex items-start gap-3">
                                    <MapPin size={18} className="text-slate-400 mt-1 shrink-0" />
                                    <span className="text-sm text-slate-600">যাত্রাবাড়ী, ঢাকা-১২০৪</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Clock size={18} className="text-slate-400 mt-1 shrink-0" />
                                    <span className="text-sm text-slate-600">অফিস: সকাল ৮টা - বিকাল ৫টা</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper Component for FAQ Accordion
function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-slate-200 rounded-xl overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
            >
                <span className="font-semibold text-slate-900">{question}</span>
                <ChevronDown size={20} className={`text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-4 bg-white text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                    {answer}
                </div>
            </div>
        </div>
    );
}
