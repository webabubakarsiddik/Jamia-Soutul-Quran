import React from 'react';
import { Facebook, Youtube, Instagram, Twitter, Heart, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const NAV_ITEMS = [
  { label: 'প্রচ্ছদ', href: '/' },
  { label: 'আমাদের সম্পর্কে', href: '/about' },
  { label: 'বিভাগসমূহ', href: '/#departments' },
  { label: 'গ্যালারি', href: '/gallery' },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-linear-to-br from-emerald-950 via-emerald-900 to-emerald-950 text-emerald-50 pt-20 pb-10 border-t border-emerald-800/50 overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
            
                  <div className="w-12 h-12 rounded-1xl flex items-center justify-center shadow-lg shadow-emerald-600/30 group-hover:shadow-xl group-hover:shadow-emerald-600/50 transition-all duration-300">
             
                     <Image
                        src="/assets/images/logo.png"   // 👉 তোমার image path (public folder এ রাখবে)
                        alt="Logo"
                        width={38}
                        height={38}
                        className="object-contain rounded-1xl"
                        />
             
                      </div>
                 
              <div>
                <h2 className="text-2xl font-heading font-bold text-white">জামিয়া সওতুল কুরআন</h2>
                <p className="text-xs text-emerald-300 font-semibold tracking-wider uppercase">আধুনিক দ্বীনি শিক্ষা প্রতিষ্ঠান</p>
              </div>
            </div>
            <p className="text-emerald-200 leading-relaxed max-w-md">
              আধুনিক শিক্ষা ও নৈতিকতার সমন্বয়ে আমরা গড়ছি আগামীর ভবিষ্যৎ। আপনার সন্তানের উজ্জ্বল ভবিষ্যতের জন্য আমাদের সাথে থাকুন।
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Youtube, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Twitter, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-11 h-11 bg-emerald-800/50 rounded-xl flex items-center justify-center hover:bg-gold-600 hover:text-white transition-all transform hover:-translate-y-1 border border-emerald-700/50 hover:border-gold-500"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className='flex justify-between md:text-lg lg:text-xl'>
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-6 border-b border-emerald-700/50 pb-2 inline-block">
              গুরুত্বপূর্ণ লিঙ্ক
            </h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-emerald-200 hover:text-gold-400 hover:translate-x-1 transition-all inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 group-hover:bg-gold-500 transition-colors"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='xl:ml-50'>
            <h3 className="text-white font-heading font-bold text-lg mb-6 border-b border-emerald-700/50 pb-2 inline-block">
              যোগাযোগ
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-emerald-200">
                <MapPin size={18} className="mt-1 text-gold-400 shrink-0" />
                <span className="text-sm">যাত্রাবাড়ী, ঢাকা, বাংলাদেশ</span>
              </li>
              <li className="flex items-start gap-3 text-emerald-200">
                <Phone size={18} className="mt-1 text-gold-400 shrink-0" />
                <span className="text-sm">+৮৮০ ১৭XX-XXXXXX</span>
              </li>
              <li className="flex items-start gap-3 text-emerald-200">
                <Mail size={18} className="mt-1 text-gold-400 shrink-0" />
                <span className="text-sm">mr.siddikdev@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-emerald-300">
          <p>© ২০২৬ জামিয়া সওতুল কুরআন। সর্বস্বত্ব সংরক্ষিত।</p>

          <a
            href="https://mdsalahuddin.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gold-400 transition-colors group"
          >
            <span>Designed with</span>
            <Heart size={14} className="text-red-500 fill-red-500 group-hover:scale-110 transition-transform" />
            <span>by Md Abu Bakar Nasrullha</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;