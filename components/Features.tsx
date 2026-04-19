import React from 'react';
import { FEATURES } from '@/lib/constants';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

const Features: React.FC = () => {
  // Define themes with diagonal gradients starting from top-left (icon area)
  // Each card has a specific gradient color that fades to white
  const getTheme = (index: number) => {
    const themes = [
      { // 1. Emerald
        gradient: 'from-emerald-50/50 to-white',
        border: 'border-emerald-100/50 border-4',
        iconBg: 'bg-white',
        iconColor: 'text-emerald-600',
        btnHover: 'group-hover:text-emerald-700'
      },
      { // 2. Gold
        gradient: 'from-gold-50/50 to-white',
        border: 'border-gold-100/50 border-4',
        iconBg: 'bg-white',
        iconColor: 'text-gold-600',
        btnHover: 'group-hover:text-gold-700'
      },
      { // 3. Emerald Dark
        gradient: 'from-emerald-50 to-white',
        border: 'border-emerald-200/30 border-4', 
        iconBg: 'bg-white',
        iconColor: 'text-emerald-700',
        btnHover: 'group-hover:text-emerald-800'
      },
      { // 4. Gold Dark
        gradient: 'from-gold-50 to-white',
        border: 'border-gold-200/30 border-4', 
        iconBg: 'bg-white',
        iconColor: 'text-gold-700',
        btnHover: 'group-hover:text-gold-800'
      }
    ];
    return themes[index % themes.length];
  };

  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">
       <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold-200 rounded-full blur-3xl"></div>
      </div>
      <div className="container-custom">

        {/* Header with Image Layout */}
        <div className="flex  lg:flex-row items-center gap-12 lg:gap-20 mb-20">

          {/* Left Content */}
          <div className="lg:w-full text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-sm font-bold uppercase tracking-wider mb-6">
              আমাদের সুবিধাসমূহ
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              শিক্ষার্থীদের জন্য <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-600 to-accent-600">আধুনিক সুযোগ-সুবিধা</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              আমরা নিশ্চিত করি আপনার সন্তানের জন্য একটি নিরাপদ, আধুনিক এবং দ্বীনি পরিবেশ। যেখানে পড়ালেখার পাশাপাশি শারীরিক ও মানসিক বিকাশের জন্য রয়েছে পর্যাপ্ত ব্যবস্থা।
            </p>
          </div>


        </div>

        {/* Grid with Gradient Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => {
            const theme = getTheme(idx);

            return (
              <div
                key={feature.id}
                className={`
                  relative
                  rounded-[2.5rem] p-8 
                  bg-linear-to-br ${theme.gradient}
                  border ${theme.border}
                  transition-all duration-300 
                  hover:-translate-y-1 hover:shadow-xl
                  flex flex-col items-start h-full group
                `}
              >
                {/* Icon Box - White background to pop against gradient */}
                <div className={`w-16 h-16 rounded-2xl ${theme.iconBg} ${theme.iconColor} shadow-sm border border-white/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={28} strokeWidth={2} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 ">{feature.title}</h3>

                <p className="text-slate-600 leading-relaxed mb-8 grow font-medium">
                  {feature.description}
                </p>


              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;