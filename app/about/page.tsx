import React from 'react';
import { PlayCircle, Globe, CheckCircle2, Award, Users, ShieldCheck, BookOpen } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
    title: 'আমাদের সম্পর্কে - মাদরাসাতু আহমাদ',
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Page Header / Hero */}
            <div className="relative h-[45vh] min-h-[350px] w-full bg-slate-900 overflow-hidden">
                <Image
                    src="https://ahmadsit.com/uploads/1740550940_banner-img.jpg"
                    alt="About Banner"
                    fill
                    className="object-cover opacity-70"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end pb-12">
                    <div className="container-custom">
                        <div className="max-w-2xl animate-fade-in-up">
                            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md border border-emerald-500/30">
                                আমাদের পরিচয়
                            </span>
                            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight mb-4">
                                আদর্শ ও সুন্নাহভিত্তিক <span className="text-emerald-400">শিক্ষা নিকেতন</span>
                            </h1>
                            <p className="text-slate-300 text-lg leading-relaxed font-medium">
                                কুরআন-সুন্নাহর সঠিক জ্ঞান এবং আধুনিক প্রযুক্তির সমন্বয়ে আমরা গড়ে তুলছি আগামীর আদর্শ প্রজন্ম।
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom py-6 md:py-8">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Side: Content */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-2 block">প্রতিষ্ঠানের লক্ষ্য</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                                দ্বীনি ইলম ও নৈতিক <br />
                                <span className="text-emerald-700 underline decoration-emerald-700/20 underline-offset-8">আখলাকের কেন্দ্রবিন্দু</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-slate-600 leading-relaxed text-[17px]">
                            <p>
                                মারকাযুত তারবিয়াহ বাংলাদেশ দেশের দ্বীনি শিক্ষাঙ্গনে একটি স্বতন্ত্র পরশ। দারুল উলূম দেওবন্দের মহান সিলসিলাভুক্ত এই প্রতিষ্ঠানটি সুদীর্ঘ সময় ধরে এদেশের মানুষকে সহীহ দ্বীনের পথের সঠিক দিশা দিয়ে আসছে।
                            </p>
                            <p>
                                আমাদের মূল উদ্দেশ্য শিক্ষার্থীদের প্রকৃত মানুষ হিসেবে গড়ে তোলা। তাই কুরআন ও সুন্নাহর গভীর জ্ঞানের পাশাপাশি আধুনিক প্রয়োজনীয় শিক্ষা এবং চারিত্রিক উন্নতির ওপর আমরা সর্বাধিক গুরুত্বারোপ করি।
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { icon: ShieldCheck, title: 'নিরাপদ পরিবেশ', desc: 'নিরাপদ ও সুন্দর ক্যাম্পাস' },
                                { icon: Users, title: 'অভিজ্ঞ শিক্ষক', desc: 'দক্ষ উস্তাদমণ্ডলী' },
                                { icon: BookOpen, title: 'মানসম্মত শিক্ষা', desc: 'পরিকল্পিত সিলেবাস' },
                                { icon: Award, title: 'শ্রেষ্ঠত্বের প্রতিশ্রুতি', desc: 'সাফল্যের ধারাবাহিকতা' },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 rounded-md border border-slate-100 bg-emerald-50/30">
                                    <div className="w-10 h-10 rounded-md bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                                        <p className="text-xs text-slate-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Visuals */}
                    <div className="relative">
                        <div className="relative aspect-[3/4] rounded-md overflow-hidden shadow-2xl">
                            <Image
                                src="https://ahmadsit.com/uploads/1740550940_banner-img.jpg"
                                alt="Students"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent" />
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-md shadow-2xl border border-slate-100 max-w-[240px] animate-slide-up">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-gold-100 rounded-md text-gold-700">
                                    <Award size={20} />
                                </div>
                                <span className="font-bold text-slate-900">১৫+ বছরের</span>
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                শিক্ষাখাতে আমাদের রয়েছে দীর্ঘ পথচলার গর্বিত ইতিহাস।
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision Section */}
                <div className="mt-32 grid md:grid-cols-2 gap-8">
                    <div className="p-8 md:p-12 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                            <Globe size={120} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                            <span className="w-10 h-1 bg-white/30 rounded-full"></span>
                            আমাদের মিশন
                        </h3>
                        <p className="text-emerald-50 leading-relaxed text-lg mb-6">
                            কুরআন-সুন্নাহর ভিত্তিতে সহীহ শিক্ষার মাধ্যমে শিক্ষার্থীদের বিশ্বাস, চিন্তা ও চরিত্র গঠনে কাজ করা; এবং তাদেরকে সমাজের উপযোগী আদর্শ নাগরিক হিসেবে প্রস্তুত করা।
                        </p>
                        <div className="space-y-3">
                            {['শুদ্ধ তাজবীদ ও নূরানী-বুনিয়াদি দৃঢ় করা', 'আদব-আখলাক ও আমলী প্রশিক্ষণ'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm font-medium">
                                    <CheckCircle2 size={16} className="text-emerald-300" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 md:p-12 rounded-xl bg-white border border-slate-100 shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 text-slate-50 group-hover:scale-110 transition-transform duration-500">
                            <PlayCircle size={120} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-10 h-1 bg-emerald-600/30 rounded-full"></span>
                            আমাদের ভিশন
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-lg mb-6">
                            এমন শিক্ষার্থী তৈরি করা যারা আলিমিয়্যাত, হিফজ এবং নূরানী ভিত্তি থেকে শুরু করে পরবর্তীতে সমাজের সকল ক্ষেত্রে দ্বীনি খেদমতে যুক্ত হতে পারে।
                        </p>
                        <div className="space-y-3">
                            {['সুন্নাহভিত্তিক জীবন গড়ার অনুপ্রেরণা', 'নেতৃত্ব ও দায়িত্ববোধ তৈরি'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                    <CheckCircle2 size={16} className="text-emerald-600" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
