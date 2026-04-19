import React from 'react';
import Contact from '@/components/Contact';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata = {
    title: 'যোগাযোগ - মাদরাসাতু আহমাদ',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Page Header / Hero */}
            <div className="relative h-[45vh] min-h-[350px] w-full bg-slate-900 overflow-hidden">
                <Image
                    src="https://ahmadsit.com/uploads/1740550940_banner-img.jpg"
                    alt="Contact Banner"
                    fill
                    className="object-cover opacity-70"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end pb-12">
                    <div className="container-custom">
                        <div className="max-w-2xl animate-fade-in-up">
                            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md border border-emerald-500/30">
                                যোগাযোগ
                            </span>
                            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight mb-4">
                                আমাদের সাথে <span className="text-emerald-400">যুক্ত হোন</span>
                            </h1>
                            <p className="text-slate-300 text-lg leading-relaxed font-medium">
                                আপনার যেকোনো জিজ্ঞাসা বা পরামর্শের জন্য আমরা সবসময় প্রস্তুত।
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom py-12 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start mb-16 md:mb-24">
                    {/* Contact Info Cards */}
                    <div className="space-y-4 md:space-y-6">
                        {[
                            { icon: Phone, title: 'ফোন করুন', detailOne: '+৮৮০ ১৭XX-XXXXXX', detailTwo: 'প্রতিদিন সকাল ৮টা - রাত ১০টা' },
                            { icon: Mail, title: 'ইমেইল করুন', detailOne: 'info@madrasatuahmad.edu.bd', detailTwo: '২৪ ঘণ্টার মধ্যে উত্তর দেওয়া হয়' },
                            { icon: MapPin, title: 'ঠিকানা', detailOne: 'যাত্রাবাড়ী, ঢাকা', detailTwo: 'বাংলাদেশ' },
                            { icon: Clock, title: 'অফিস সময়', detailOne: 'শনিবার - বৃহস্পতিবার', detailTwo: 'সকাল ৮:০০ - বিকাল ৪:৩০' },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-slate-50 p-5 md:p-6 rounded-md border border-slate-100 flex items-start gap-4 md:gap-5 hover:border-emerald-200 hover:bg-emerald-50 transition-all group">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-md bg-white shadow-sm flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all shrink-0">
                                    <item.icon size={20} />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-bold text-slate-900 mb-0.5 md:mb-1 text-sm md:text-base">{item.title}</h4>
                                    <p className="text-slate-700 font-medium text-xs md:text-sm truncate md:whitespace-normal">{item.detailOne}</p>
                                    <p className="text-slate-500 text-[10px] md:text-xs">{item.detailTwo}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Integrated Contact Form Component (Reuse existing) */}
                    <div className="lg:col-span-2">
                        <Contact showInfo={false} />
                    </div>
                </div>

                {/* Map Section */}
                <div className="rounded-md overflow-hidden shadow-xl border-2 md:border-4 border-white bg-slate-100 h-[300px] md:h-[450px] relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.378051754942!2d90.43949987602334!3d23.700898590130644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9abd5f6068b%3A0xe5a2283a00c14b35!2sJatrabari%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
