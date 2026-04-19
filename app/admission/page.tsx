'use client';
import React, { useState } from 'react';
import { ArrowLeft, Send, CheckCircle2, User, Phone, MapPin, Calendar, BookOpen, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const AdmissionPage = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center p-6">
                <div className="bg-white p-8 rounded-md border border-slate-200 max-w-lg w-full text-center space-y-6 animate-scale-in shadow-xl">
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 size={40} />
                    </div>
                    <h1 className="text-3xl font-heading font-bold text-slate-900">আবেদন সফল হয়েছে!</h1>
                    <p className="text-slate-600">
                        আপনার আবেদনটি আমাদের কাছে পৌঁছেছে। আমরা শীঘ্রই আপনার দেওয়া ফোন নম্বরে যোগাযোগ করব ইনশাআল্লাহ।
                    </p>
                    <Link href="/" className="btn-primary inline-flex items-center gap-2">
                        <ArrowLeft size={18} />
                        <span>মূল পাতায় ফিরে যান</span>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Page Header / Hero */}
            <div className="relative h-[45vh] min-h-[350px] w-full bg-slate-900 overflow-hidden">
                <Image
                    src="https://ahmadsit.com/uploads/1740550940_banner-img.jpg"
                    alt="Admission Banner"
                    fill
                    className="object-cover opacity-70"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end pb-12">
                    <div className="container-custom">
                        <div className="max-w-2xl animate-fade-in-up">
                            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md border border-emerald-500/30">
                                অনলাইন ভর্তি
                            </span>
                            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight mb-4">
                                ভর্তি আবেদন <span className="text-emerald-400">ফরম</span>
                            </h1>
                            <p className="text-slate-300 text-lg leading-relaxed font-medium">
                                আপনার সন্তানের উজ্জ্বল ভবিষ্যতের জন্য প্রয়োজনীয় তথ্য দিয়ে ফর্মটি পূরণ করুন।
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom py-16 md:py-24">
                <div className="max-w-4xl mx-auto">
                    {/* Form Card */}
                    <div className="bg-white rounded-md shadow-2xl border border-emerald-50 overflow-hidden">
                        <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 p-8 text-white relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-md flex items-center justify-center">
                                    <BookOpen size={22} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold font-heading">শিক্ষার্থীর তথ্য</h2>
                                    <p className="text-emerald-100 text-sm opacity-80">সঠিকভাবে তথ্য প্রদান করুন</p>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 md:p-12 space-y-6 md:space-y-8">
                            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                                {/* Student Name */}
                                <div className="space-y-1.5 md:space-y-2">
                                    <label className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">
                                        <User size={14} className="text-emerald-600" />
                                        <span>শিক্ষার্থীর নাম</span>
                                    </label>
                                    <input required type="text" className="input-premium py-2.5 md:py-3 text-sm" placeholder="পুরো নাম লিখুন" />
                                </div>

                                {/* Father's Name */}
                                <div className="space-y-1.5 md:space-y-2">
                                    <label className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">
                                        <Users size={14} className="text-emerald-600" />
                                        <span>পিতার নাম</span>
                                    </label>
                                    <input required type="text" className="input-premium py-2.5 md:py-3 text-sm" placeholder="পিতার পুরো নাম লিখুন" />
                                </div>

                                {/* Date of Birth */}
                                <div className="space-y-1.5 md:space-y-2">
                                    <label className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">
                                        <Calendar size={14} className="text-emerald-600" />
                                        <span>জন্ম তারিখ</span>
                                    </label>
                                    <input required type="date" className="input-premium py-2.5 md:py-3 text-sm" />
                                </div>

                                {/* Phone Number */}
                                <div className="space-y-1.5 md:space-y-2">
                                    <label className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">
                                        <Phone size={14} className="text-emerald-600" />
                                        <span>ফোন নম্বর</span>
                                    </label>
                                    <input required type="tel" className="input-premium py-2.5 md:py-3 text-sm" placeholder="সচল ফোন নম্বর" />
                                </div>

                                {/* Select Department */}
                                <div className="space-y-1.5 md:space-y-2 md:col-span-2">
                                    <label className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">
                                        <BookOpen size={14} className="text-emerald-600" />
                                        <span>কাঙ্ক্ষিত বিভাগ</span>
                                    </label>
                                    <select required className="input-premium py-2.5 md:py-3 text-sm appearance-none bg-white">
                                        <option value="">বিভাগ নির্বাচন করুন</option>
                                        <option value="কিতাব">কিতাব বিভাগ</option>
                                        <option value="হিফজুল কুরআন">হিফজুল কুরআন বিভাগ</option>
                                        <option value="নূরানী ও নাজেরা">নূরানী ও নাজেরা বিভাগ</option>
                                    </select>
                                </div>

                                {/* Present Address */}
                                <div className="space-y-1.5 md:space-y-2 md:col-span-2">
                                    <label className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">
                                        <MapPin size={14} className="text-emerald-600" />
                                        <span>বর্তমান ঠিকানা</span>
                                    </label>
                                    <textarea required rows={3} className="input-premium py-2.5 md:py-3 text-sm resize-none" placeholder="বাসার নম্বর, পাড়া, এলাকা..."></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full btn-primary flex items-center justify-center gap-3 py-4 md:py-5 text-base md:text-lg group"
                            >
                                {loading ? (
                                    <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        <span>আবেদন জমা দিন</span>
                                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdmissionPage;
