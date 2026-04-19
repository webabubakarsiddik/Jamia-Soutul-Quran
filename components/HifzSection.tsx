import React from 'react';
import { Play, Sparkles } from 'lucide-react';

const HifzSection: React.FC = () => {
  // Replace with your YouTube Video Link
  const VIDEO_URL = "https://www.youtube.com/watch?v=xcJtL7QggTI";

  const getEmbedUrl = (url: string) => {
    try {
      let videoId = '';
      if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1]?.split('?')[0];
      } else if (url.includes('youtube.com/watch')) {
        const urlParams = new URLSearchParams(new URL(url).search);
        videoId = urlParams.get('v') || '';
      } else if (url.includes('youtube.com/embed/')) {
        videoId = url.split('youtube.com/embed/')[1]?.split('?')[0];
      }
      return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
    } catch (e) {
      return '';
    }
  };

  const embedUrl = getEmbedUrl(VIDEO_URL);

  return (
    <section id="hifz" className="py-16 bg-slate-50 relative overflow-hidden">
       <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold-200 rounded-full blur-3xl"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold tracking-wider">
              <Sparkles size={14} />
              <span>এক নজরে আমাদের অর্জন</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-slate-900">
                এক নজরে মাদরাসাতু আহমাদ
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg max-w-xl">
                এই ভিডিওতে সংক্ষেপে মাদরাসাতু আহমাদের পরিবেশ, বিভাগসমূহ, শিক্ষাব্যবস্থা ও
                আমাদের বিশেষ বৈশিষ্ট্যগুলো তুলে ধরা হয়েছে। আপনার সন্তানের জন্য সিদ্ধান্ত নেওয়ার
                আগে একবার দেখে নিতে পারেন।
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full animate-scale-in delay-200">
            <div className="relative rounded-[2.5rem] bg-slate-900 overflow-hidden shadow-2xl border border-slate-800 group">
              <div className="aspect-video relative">
                {embedUrl ? (
                  <iframe
                    src={embedUrl}
                    title="Madrasa introduction video"
                    className="w-full h-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-800 text-slate-500">
                    <p>Invalid Video URL</p>
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-slate-200 uppercase tracking-wide mb-1">
                    অফিশিয়াল প্রোমো ভিডিও
                  </p>
                  <p className="text-sm md:text-base font-semibold text-white">
                    এক নজরে মাদরাসাতু আহমাদ
                  </p>
                </div>
                <div className="hidden sm:flex">
                  <div className="h-12 w-12 rounded-full bg-white/15 border border-white/40 flex items-center justify-center text-white backdrop-blur-md transition-transform group-hover:scale-110">
                    <Play size={22} fill="currentColor" className="ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HifzSection;
