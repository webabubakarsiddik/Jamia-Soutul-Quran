'use client';

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NoticeSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const notices = [
    {
      title: "প্রথম সাময়িক পরীক্ষার রুটিন প্রকাশ",
      desc: "২০২৪-২৫ শিক্ষাবর্ষের সকল তালিবে ইলমদের জানানো যাচ্ছে যে...",
      date: "১২",
      month: "জানু",
      href: "/notice/1",
    },
    {
      title: "ভর্তি সংক্রান্ত জরুরী বিজ্ঞপ্তি - ২০২৫",
      desc: "আগামী ১০ই জানুয়ারি থেকে নতুন শিক্ষাবর্ষের ভর্তি কার্যক্রম শুরু হবে...",
      date: "০৮",
      month: "জানু",
      href: "/notice/2",
    },
    {
      title: "নতুন ক্লাস শুরু সংক্রান্ত ঘোষণা",
      desc: "নতুন ব্যাচের ক্লাস আগামী সপ্তাহ থেকে শুরু হবে...",
      date: "০৫",
      month: "জানু",
      href: "/notice/3",
    },
  ];

  const [activeService, setActiveService] = useState<number | null>(null);
  

const services = [
  {
    title: "অনলাইন ভর্তি আবেদন",
    icon: "📝",
    href: "/admission",
    color: "emerald",
  },
  {
    title: "ফলাফল দেখুন",
    icon: "📊",
    href: "/results",
    color: "dark",
  },
  {
    title: "দান/অনুদান পাঠান",
    icon: "💰",
    href: "/donate",
    color: "emerald",
  },
];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
       <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold-200 rounded-full blur-3xl"></div>
      </div>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

          {/* LEFT */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8 border-b-2 border-gray-200 pb-4">
              <h2 className="text-2xl font-black text-[#0F3D4E] flex items-center">
                <span className="w-2 h-8 bg-emerald-600 mr-3 rounded-full"></span>
                নোটিশ বোর্ড
              </h2>
              <Link href="/notice" className="text-emerald-600 text-sm font-bold hover:underline">
                সকল নোটিশ দেখুন
              </Link>
            </div>

            <div className="bg-white rounded-4xl shadow-xl overflow-hidden border">
              <ul className="divide-y">

                {notices.map((item, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <motion.li
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`transition-all duration-300
                        ${isActive ? 'bg-emerald-50' : 'hover:bg-gray-50'}
                      `}
                    >
                      <Link
                        href={item.href}
                        className="flex items-start p-6 gap-4"
                      >
                        <div className={`px-4 py-2 rounded-xl text-xs font-bold text-center shrink-0 shadow-lg
                          ${isActive ? 'bg-emerald-600 text-white' : 'bg-[#0F3D4E] text-white'}
                        `}>
                          <span className="block text-xl font-black">{item.date}</span>
                          <span className="uppercase opacity-80">{item.month}</span>
                        </div>

                        <div>
                          <h3 className={`font-bold text-lg mb-1 transition-colors
                            ${isActive ? 'text-emerald-600' : 'text-[#0F3D4E] group-hover:text-emerald-600'}
                          `}>
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                      </Link>
                    </motion.li>
                  );
                })}

              </ul>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-1">
  <div className="mb-8 border-b-2 border-gray-200 pb-4">
    <h2 className="text-2xl font-black text-[#0F3D4E]">
      জরুরী সেবা
    </h2>
  </div>

  <div className="space-y-4">

    {services.map((item, index) => {
      const isActive = activeService === index;

      return (
        <motion.div
          key={index}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setActiveService(index)}
        >
          <Link
            href={item.href}
            className={`group flex items-center p-5 rounded-2xl shadow-sm border-l-4 transition-all
              ${
                isActive
                  ? 'bg-emerald-50 border-emerald-600 shadow-lg'
                  : 'bg-white hover:shadow-xl border-emerald-600'
              }
            `}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-all
              ${
                isActive
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-[#0F3D4E] group-hover:bg-emerald-600 group-hover:text-white'
              }
            `}>
              {item.icon}
            </div>

            <span className={`font-bold transition-colors
              ${
                isActive
                  ? 'text-emerald-600'
                  : 'text-[#0F3D4E] group-hover:text-emerald-600'
              }
            `}>
              {item.title}
            </span>
          </Link>
        </motion.div>
      );
    })}

  </div>
</div>

        </div>
      </div>
    </section>
  );
}