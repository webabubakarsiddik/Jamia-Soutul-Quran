import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';

export const metadata: Metadata = {
  title: 'মাদরাসাতু আহমাদ - আদর্শ দ্বীনি ও আধুনিক শিক্ষা প্রতিষ্ঠান',
  description: 'মাদরাসাতু আহমাদ একটি আধুনিক দ্বীনি শিক্ষা প্রতিষ্ঠান। যেখানে সহীহ কুরআন শিক্ষা, তাজবীদ, কিতাব বিভাগ এবং হিফজ প্রোগ্রামের পাশাপাশি আধুনিক শিক্ষার পরিবেশ নিশ্চিত করা হয়।',
  keywords: 'মাদরাসাতু আহমাদ, মাদরাসা, ঢাকা মাদরাসা, হিফজুল কুরআন, কিতাব বিভাগ, নূরানী ও নাজেরা, ইসলামিক শিক্ষা',
  openGraph: {
    title: 'মাদরাসাতু আহমাদ - আধুনিক দ্বীনি শিক্ষা প্রতিষ্ঠান',
    description: 'আধুনিক শিক্ষা ও নৈতিকতার সমন্বয়ে আমরা গড়ছি আগামীর ভবিষ্যৎ।',
    url: 'https://madrasatuahmad.com',
    siteName: 'মাদরাসাতু আহমাদ',
    images: [
      {
        url: 'https://www.madrasatuahmad.com/assets/images/amder.png',
        width: 1200,
        height: 630,
        alt: 'মাদরাসাতু আহমাদ ক্যাম্পাস',
      },
    ],
    locale: 'bn_BD',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&family=Hind+Siliguri:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body text-slate-900 bg-cream-50">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
