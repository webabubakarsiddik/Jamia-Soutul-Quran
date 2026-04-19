'use client';
import React from 'react';
import { Quote, ArrowRight, User, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-slate-50 relative overflow-hidden">
       <div className="absolute inset-0 opacity-30 pointer-events-none">
      <div className="absolute top-1/4 right-0 w-96 h-96 xl:bg-emerald-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 xl:bg-gold-200 rounded-full blur-3xl"></div>
      </div>
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/arabesque.png')` }}></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Left Card: Director's Profile */}
          <div className="bg-white p-6 rounded-md shadow-lg border border-slate-100 flex flex-col h-full animate-fade-in-right">
            {/* Director Image - Larger aspect ratio */}
            <div className="relative aspect-3/2 w-full overflow-hidden rounded-md bg-slate-100 mb-6">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Director"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4 grow">
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-heading text-slate-800">মাওলানা সানাওলাহ সাহেব দাঃ বাঃ</h3>
                <p className="text-xs md:text-sm text-green-600 font-bold mt-1">মুহতামিম অথ মাদ্রাসা</p>
              </div>

              {/* Message Header */}
              <div className="flex items-center gap-3 pt-2">
                <div className="h-[1.5px] w-10 bg-green-600"></div>
                <span className="text-green-700 font-bold text-xs tracking-wide uppercase">মুহতামিমের বাণী</span>
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="absolute -top-1 -left-2 text-slate-100 w-8 h-8 -z-10" />
                <p className="text-slate-600 text-sm leading-relaxed">
                  আমাদের লক্ষ্য হলো এমন এক প্রজন্ম গড়ে তোলা যারা ইলমে ও আমলে পরিপূর্ণ হবে। দ্বীনি শিক্ষার পাশাপাশি নৈতিকতা ও মানবতার সেবায় তারা হবে অগ্রগামী। আমরা চাই প্রতিটি ছাত্র যেন কোরআন-সুন্নাহর আলোকে নিজের জীবন গড়তে পারে।
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Link href="/about" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#133e40] text-white rounded-md font-bold hover:bg-[#0d2d2e] transition-all shadow-sm text-sm">
                <span>বিস্তারিত</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Card: Madrasa Introduction */}
          <div className="bg-white p-6 rounded-md shadow-lg border border-slate-100 flex flex-col h-full animate-fade-in-up">
            <div className="mb-4">
              <span className="inline-block px-3 py-0.5 rounded-full bg-green-50 text-green-600 text-[10px] font-bold border border-green-100 uppercase">পরিচিতি</span>
            </div>

            <div className="space-y-4 grow">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 leading-tight">
                দ্বীনি ইলম ও উন্নত <br />
                <span className="text-green-700 underline decoration-green-700/30 decoration-4 underline-offset-6">আখলাকের কেন্দ্র</span>
              </h2>

              <div className="space-y-4 text-sm md:text-[15px] text-slate-600 leading-relaxed font-medium">
                <p>
                  মারকাযুত তারবিয়াহ বাংলাদেশ দেশের দ্বীনি শিক্ষাঙ্গনে একটি সুপরিচিত নাম। দারুল উলূম দেওবন্দের মহান সিলসিলাভুক্ত এই প্রতিষ্ঠানটি সুদীর্ঘ সময় ধরে এদেশের মানুষকে সহীহ দ্বীনের পথের সঠিক দিশা দিয়ে আসছে।
                </p>
                <p>
                  আমরা বিশ্বাস করি, শিক্ষার মূল উদ্দেশ্য হলো প্রকৃত মানুষ তৈরি করা। তাই আমরা কোরআন ও সুন্নাহর গভীর জ্ঞানের সাথে সাথে আধুনিক প্রয়োজনীয় শিক্ষা এবং চারিত্রিক উন্নতির ওপর সর্বাধিক গুরুত্বারোপ করি। এখানে প্রতিটি শিক্ষার্থী এক নিবিড় ও নিরাপদ পরিবেশে নিজের মেধা ও প্রতিভার বিকাশ ঘটানোর সুযোগ পায়।
                </p>
                <p>
                  আমাদের অভিজ্ঞ শিক্ষকমণ্ডলী অত্যন্ত দক্ষতা ও আন্তরিকতার সাথে শিক্ষার্থীদের গড়ে তোলার দায়িত্ব পালন করে যাচ্ছেন। দ্বীনের বহুমুখী খিদমতে আমাদের ছাত্ররা যেন নিজেদের যোগ্য করে গড়ে তুলতে পারে, এটাই আমাদের প্রত্যাশা।
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/about" className="flex items-center justify-center w-full py-2.5 border-2 border-slate-100 rounded-md font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-200 transition-all text-sm">
                বিস্তারিত জানুন
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;