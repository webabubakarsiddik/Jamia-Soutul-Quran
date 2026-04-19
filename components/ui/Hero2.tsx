export default function Hero1Section() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
       <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold-200 rounded-full blur-3xl"></div>
      </div>
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE SIDE */}
        <div className="relative">

          {/* Main Image */}
          <div>
            <img
              src="/amder.png" // 👉 তোমার image path দাও
              alt="Student"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Badge 1 */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white shadow-lg px-5 py-3 rounded-2xl flex items-center gap-2">
            🏆 <span className="font-semibold text-sm">সেরা সাফল্য</span>
          </div>

          {/* Floating Badge 2 */}
          <div className="absolute top-[40%] -left-7.5 bg-white shadow-lg px-5 py-3 rounded-2xl flex items-center gap-2">
            👨‍🎓 <span className="text-sm">হাজার+ স্টুডেন্ট</span>
          </div>

          {/* Bottom Small Card */}
          <div className="absolute -bottom-5 right-5 bg-white shadow-lg px-5 py-3 rounded-2xl flex items-center gap-2">
            🎤 <span className="text-sm">১০০০+ আসন</span>
          </div>

        </div>

        {/* RIGHT TEXT SIDE */}
        <div>
          
          {/* Rating */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow mb-6">
            ⭐⭐⭐⭐ <span className="text-sm font-medium">অভিভাবকদের প্রথম পছন্দ</span> ⭐⭐⭐⭐
          </div>

          {/* Title */}
          <h1 className="text-3xl lg:text-5xl font-extrabold text-[#0F3D4E] leading-tight mb-6">
            আমরা সর্বদা আপনাদের সন্তানের জন্য সর্বোচ্চ শিক্ষা নিশ্চিত করি
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed">
           সুন্নাহ ভিত্তিক জীবন যাপন ও আধুনিক শিক্ষার সমন্বয়ে আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ গড়তে আমরা অঙ্গীকারবদ্ধ। সুন্নাহ ভিত্তিক জীবন যাপন ও আধুনিক শিক্ষার সমন্বয়ে আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ গড়তে আমরা অঙ্গীকারবদ্ধ
          </p>

        </div>

      </div>
    </section>
  );
}