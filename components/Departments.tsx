'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, GraduationCap, BookMarked, Library } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  cta: string;
}

const COURSES: Course[] = [
  {
    id: 1,
    title: 'কিতাব বিভাগ',
    description: 'আলিমিয়্যাত ও দাওরায়ে হাদীসের প্রস্তুতিকেন্দ্রিক পড়াশোনা। আরবি ব্যাকরণ, ফিকহ, আকিদা ও তাফসীরের গভীর জ্ঞান অর্জন।',
    image: 'https://ahmadsit.com/uploads/1740550940_banner-img.jpg',
    cta: 'বিস্তারিত দেখুন',
  },
  {
    id: 2,
    title: 'হিফজুল কুরআন',
    description: 'নিয়মিত মুরাজআ ও শুদ্ধ তাজবীদসহ হিফজ প্রোগ্রাম। পুরো কুরআন শরীফ সাবলীলভাবে হিফজ করার সুযোগ।',
    image: 'https://ahmadsit.com/uploads/1740550940_banner-img.jpg',
    cta: 'বিস্তারিত দেখুন',
  },
  {
    id: 3,
    title: 'নূরানী ও নাজেরা',
    description: 'শিশুদের জন্য সহীহ কুরআন পড়ার মজবুত ভিত্তি। আরবি হরফ, মাখরাজ ও সঠিক উচ্চারণ শিক্ষা।',
    image: 'https://ahmadsit.com/uploads/1740550940_banner-img.jpg',
    cta: 'বিস্তারিত দেখুন',
  },
];

const ICONS = [GraduationCap, BookMarked, Library];

const CourseCard: React.FC<{ course: Course; index: number }> = ({ course, index }) => {
  const [error, setError] = useState(false);

  return (
    <div className="group mt-2 bg-white rounded-md border border-slate-200 p-5 transition-all duration-300 hover:shadow-xl flex flex-col h-full ring-1 ring-slate-100">

      {/* Image Container */}
      <div className="h-48 rounded-md overflow-hidden relative mb-5 shrink-0">
        {!error ? (
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            onError={() => setError(true)}
          />
        ) : (
          <div className="w-full h-full bg-emerald-50 flex items-center justify-center text-emerald-600">
            <BookOpen size={48} />
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col grow relative z-10">
        <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 leading-tight">{course.title}</h3>
        <p className="text-slate-500 mb-6 line-clamp-2 text-sm leading-relaxed grow">
          {course.description}
        </p>

        {/* CTA Button - Smaller and Left Aligned */}
        <div className="mt-auto">
          <Link
            href={`/departments/${course.id}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md"
          >
            <span>{course.cta}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Departments: React.FC = () => {
  return (
    <section id="departments" className="py-16 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
       <div className="absolute top-1/4 right-0 w-96 h-96 xl:bg-emerald-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 xl:bg-gold-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-sm font-bold uppercase tracking-wider mb-6 shadow-sm">
            <BookOpen size={16} />
            <span>একাডেমিক কার্যক্রম</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            আমাদের বিভাগসমূহ
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            প্রতিটি বিভাগের জন্য রয়েছে আলাদা যত্ন এবং বিশেষায়িত কারিকুলাম যা আপনার সন্তানকে দক্ষ করে তুলবে।
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
