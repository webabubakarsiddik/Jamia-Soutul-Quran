'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, animate, useInView } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { STATS } from '@/lib/constants';

const Counter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Handle Bangla digits
  const toBangla = (n: number) => {
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return n.toString().split('').map(digit => banglaDigits[parseInt(digit)] || digit).join('');
  };

  const isPercent = value.includes('%');
  const isPlus = value.includes('+');
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            let n = Math.round(latest);
            let result = toBangla(n);
            if (isPercent) result += '%';
            if (isPlus) result += '+';
            ref.current.innerText = result;
          }
        }
      });
      return controls.stop;
    }
  }, [isInView, numericValue, count, duration, isPercent, isPlus]);

  return <span ref={ref}>০</span>;
};

const Stats: React.FC = () => {
  // Map specific colors for each stat card
  const statStyles = [
    { color: 'emerald', bg: 'from-emerald-100/40 via-emerald-50/20 to-transparent', iconBg: 'bg-emerald-50', iconColor: 'text-emerald-700' },
    { color: 'blue', bg: 'from-blue-100/40 via-blue-50/20 to-transparent', iconBg: 'bg-blue-50', iconColor: 'text-blue-700' },
    { color: 'purple', bg: 'from-purple-100/40 via-purple-50/20 to-transparent', iconBg: 'bg-purple-50', iconColor: 'text-purple-700' },
    { color: 'amber', bg: 'from-amber-100/40 via-amber-50/20 to-transparent', iconBg: 'bg-amber-50', iconColor: 'text-amber-700' },
  ];

  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">
       <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold-200 rounded-full blur-3xl"></div>
      </div>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-bold uppercase tracking-wider mb-6">
            <Trophy size={16} />
            <span>আমাদের সাফল্য</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            অর্জনের <span className="text-emerald-600">মাইলফলক</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            আল্লাহর অশেষ রহমতে আমরা প্রতিনিয়ত এগিয়ে যাচ্ছি। আমাদের বর্তমান অবস্থান ও সাফল্যের কিছু চিত্র।
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {STATS.slice(0, 4).map((stat, idx) => {
            const style = statStyles[idx % statStyles.length];
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative rounded-md overflow-hidden bg-linear-to-b ${style.bg} border-t border-t-white shadow-sm hover:shadow-md transition-all p-3 py-6 flex flex-col items-center text-center group`}
              >
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg ${style.iconBg} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon size={24} className={style.iconColor} />
                  </div>
                  <h3 className={`text-4xl md:text-5xl font-bold font-heading mb-2 bg-clip-text text-transparent bg-linear-to-r from-slate-900 to-slate-700`}>
                    <Counter value={stat.value} />
                  </h3>
                  <p className="text-sm font-medium text-slate-600 uppercase tracking-wider">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
