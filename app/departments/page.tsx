import React from 'react';
import Departments from '@/components/Departments';
import Image from 'next/image';

export const metadata = {
    title: 'বিভাগসমূহ - মাদরাসাতু আহমাদ',
};

export default function DepartmentsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Page Header / Hero */}
            <div className="relative h-[45vh] min-h-[350px] w-full bg-slate-900 overflow-hidden">
                <Image
                    src="https://ahmadsit.com/uploads/1740550940_banner-img.jpg"
                    alt="Departments Banner"
                    fill
                    className="object-cover opacity-70"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end pb-12">
                    <div className="container-custom">
                        <div className="max-w-2xl animate-fade-in-up">
                            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md border border-emerald-500/30">
                                আমাদের কার্যক্রম
                            </span>
                            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight mb-4">
                                বিশেষায়িত <span className="text-emerald-400">বিভাগসমূহ</span>
                            </h1>
                            <p className="text-slate-300 text-lg leading-relaxed font-medium">
                                প্রতিটি বিভাগের লক্ষ্য হলো শিক্ষার্থীদের সঠিক ও মানসম্মত দ্বীনি এবং আধুনিক শিক্ষা নিশ্চিত করা।
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="py-16 md:py-24">
                <Departments />
            </div>

            {/* CTA Section */}
            <div className="container-custom pb-24">
                <div className="bg-emerald-50 rounded-md p-8 md:p-12 border border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">আপনার সন্তানকে নিয়ে চিন্তিত?</h2>
                        <p className="text-slate-600">ভর্তি সংক্রান্ত যেকোনো তথ্যের জন্য আমাদের সাথে সরাসরি যোগাযোগ করুন অথবা মাদরাসা ভিজিট করুন।</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="/admission" className="btn-primary">ভর্তি আবেদন</a>
                        <a href="/contact" className="btn-secondary">যোগাযোগ করুন</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
