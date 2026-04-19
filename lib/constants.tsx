import { NavItem, Course, GalleryImage, GalleryVideo, ContactInfo, Stat } from './types';
import { Zap, Camera, Dribbble, Home, Droplet, ShieldCheck, Users, GraduationCap, BookOpen, Trophy, Calendar, Award } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
    { label: 'প্রচ্ছদ', href: '/' },
    { label: 'আমাদের সম্পর্কে', href: '/about' },
    { label: 'বিভাগসমূহ', href: '/departments' },
    { label: 'গ্যালারি', href: '/gallery' },
    { label: 'যোগাযোগ', href: '/contact' },
];

export const COURSES: Course[] = [
    {
        id: 1,
        title: 'কিতাব বিভাগ',
        description: 'আলিমিয়্যাত ও দাওরায়ে হাদীসের প্রস্তুতিকেন্দ্রিক পড়াশোনা। আরবি ব্যাকরণ, ফিকহ, আকিদা ও তাফসীরের গভীর জ্ঞান অর্জন।',
        image: '/assets/images/library.png',
        cta: 'বিস্তারিত দেখুন',
    },
    {
        id: 2,
        title: 'হিফজুল কুরআন',
        description: 'নিয়মিত মুরাজআ ও শুদ্ধ তাজবীডসহ হিফজ প্রোগ্রাম। পুরো কুরআন শরীফ সাবলীলভাবে হিফজ করার সুযোগ।',
        image: '/assets/images/hifz.png',
        cta: 'বিস্তারিত দেখুন',
    },
    {
        id: 3,
        title: 'নূরানী ও নাজেরা',
        description: 'শিশুদের জন্য সহীহ কুরআন পড়ার মজবুত ভিত্তি। আরবি হরফ, মাখরাজ ও সঠিক উচ্চারণ শিক্ষা।',
        image: '/assets/images/classroom.png',
        cta: 'বিস্তারিত দেখুন',
    },
];

export const GALLERY_IMAGES: GalleryImage[] = [
    {
        id: 1,
        url: '/assets/images/campus.png',
        caption: 'মাদরাসা ক্যাম্পাস',
    },
    {
        id: 2,
        url: '/assets/images/classroom.png',
        caption: 'শিক্ষার্থীদের ক্লাস',
    },
    {
        id: 3,
        url: '/assets/images/hifz.png',
        caption: 'হিফজ বিভাগ',
    },
    {
        id: 4,
        url: '/assets/images/library.png',
        caption: 'লাইব্রেরি',
    },
    {
        id: 5,
        url: '/assets/images/prayer_hall.png',
        caption: 'প্রার্থনা কক্ষ',
    },
];

export const GALLERY_VIDEOS: GalleryVideo[] = [
    {
        id: 1,
        title: 'ক্যাম্পাস ট্যুর',
        description: 'আমাদের শিক্ষা প্রতিষ্ঠানের এক ঝলক',
        youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
        thumbnail: '/assets/images/campus.png'
    },
    {
        id: 2,
        title: 'বার্ষিক মাহফিল ২০২৪',
        description: 'গত বছরের বার্ষিক মাহফিলের কিছু মুহূর্ত',
        youtubeUrl: 'https://www.youtube.com/embed/lxO8F6aT2M', // Placeholder (invalid ID, need real one or generic)
        thumbnail: '/assets/images/classroom.png'
    }
];

export const CONTACT_INFO: ContactInfo = {
    phone: '+৮৮০ ১৭XX-XXXXXX',
    email: 'info@madrasatuahmad.edu.bd',
    address: 'যাত্রাবাড়ী, ঢাকা, বাংলাদেশ',
};

export const FEATURES = [
    {
        id: 1,
        title: '২৪/৭ বিদ্যুৎ সুবিধা',
        description: 'নিরবচ্ছিন্ন বিদ্যুৎ সরবরাহ নিশ্চিত করতে আমাদের রয়েছে জেনারেটর ও সোলার প্যানেল।',
        icon: Zap,
    },
    {
        id: 2,
        title: 'CCTV নিরাপত্তা',
        description: 'সম্পূর্ণ ক্যাম্পাসে CCTV ক্যামেরা দিয়ে সার্বক্ষণিক নিরাপত্তা নিশ্চিত করা হয়।',
        icon: Camera,
    },
    {
        id: 3,
        title: 'খেলার মাঠ',
        description: 'শিক্ষার্থীদের শারীরিক বিকাশের জন্য রয়েছে প্রশস্ত খেলার মাঠ ও আধুনিক খেলার সরঞ্জাম।',
        icon: Dribbble,
    },
    {
        id: 4,
        title: 'আবাসিক হল',
        description: 'দূরবর্তী শিক্ষার্থীদের জন্য রয়েছে সুসজ্জিত আবাসিক হল এবং পর্যাপ্ত বিছানার ব্যবস্থা।',
        icon: Home,
    },
    {
        id: 5,
        title: 'বিশুদ্ধ পানি',
        description: 'ফিল্টার করা বিশুদ্ধ পানির ব্যবস্থা রয়েছে সকল শিক্ষার্থীদের জন্য।',
        icon: Droplet,
    },
    {
        id: 6,
        title: 'নিরাপদ পরিবেশ',
        description: 'শিক্ষার্থীদের সর্বোচ্চ নিরাপত্তা নিশ্চিত করতে রয়েছে প্রশিক্ষিত নিরাপত্তা কর্মী।',
        icon: ShieldCheck,
    },
];

export const STATS = [
    {
        id: 1,
        value: '500+',
        label: 'শিক্ষার্থী',
        icon: Users,
    },
    {
        id: 2,
        value: '50+',
        label: 'শিক্ষক',
        icon: GraduationCap,
    },
    {
        id: 3,
        value: '15+',
        label: 'বছরের অভিজ্ঞতা',
        icon: BookOpen,
    },
    {
        id: 4,
        value: '100%',
        label: 'পাসের হার',
        icon: Trophy,
    },
];
