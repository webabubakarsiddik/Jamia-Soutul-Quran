'use client';
import React, { useState, useRef } from 'react';
import {
    Camera,
    ChevronLeft,
    ChevronRight,
    X,
    PlayCircle,
    Loader2
} from 'lucide-react';
import { GALLERY_IMAGES, GALLERY_VIDEOS } from '@/lib/constants';
import Image from 'next/image';

export default function MediaGalleryPage() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [sliderIndex, setSliderIndex] = useState(0);
    const [playingVideo, setPlayingVideo] = useState<number | null>(null);
    const galleryScrollRef = useRef<HTMLDivElement>(null);

    const scrollGallery = (direction: 'left' | 'right') => {
        if (galleryScrollRef.current) {
            const scrollAmount = 300;
            galleryScrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const nextSlide = () =>
        setSliderIndex((p) => (p + 1) % GALLERY_IMAGES.length);
    const prevSlide = () =>
        setSliderIndex((p) =>
            (p - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
        );

    return (
        <div className="min-h-screen bg-white">
            {/* Page Header / Hero */}
            <div className="relative h-[45vh] min-h-[350px] w-full bg-slate-900 overflow-hidden">
                <Image
                    src="https://ahmadsit.com/uploads/1740550940_banner-img.jpg"
                    alt="Gallery Banner"
                    fill
                    className="object-cover opacity-70"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end pb-12">
                    <div className="container-custom">
                        <div className="max-w-2xl animate-fade-in-up">
                            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md border border-emerald-500/30">
                                আমাদের মিডিয়া
                            </span>
                            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight mb-4">
                                স্থিরচিত্র ও <span className="text-emerald-400">ভিডিও গ্যালারি</span>
                            </h1>
                            <p className="text-slate-300 text-lg leading-relaxed font-medium">
                                মাদরাসাতু আহমাদের মনোরম ক্যাম্পাস এবং বিভিন্ন কার্যক্রমের কিছু মুহূর্ত।
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom py-16 md:py-24">


                {/* 2. Photo Gallery Slider */}
                <section className="mb-24 relative">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center text-blue-700">
                                <Camera size={20} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">ছবি গ্যালারি</h2>
                        </div>
                        <div className="flex gap-2">
                            <button 
                                onClick={() => scrollGallery('left')}
                                className="p-2 rounded-full bg-slate-100 hover:bg-emerald-100 text-slate-600 hover:text-emerald-600 transition-colors"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button 
                                onClick={() => scrollGallery('right')}
                                className="p-2 rounded-full bg-slate-100 hover:bg-emerald-100 text-slate-600 hover:text-emerald-600 transition-colors"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    <div 
                        ref={galleryScrollRef}
                        className="flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide mb-8"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {GALLERY_IMAGES.map((img, index) => (
                            <div
                                key={img.id}
                                onClick={() => setSelectedImage(index)}
                                className="min-w-[280px] md:min-w-[320px] lg:min-w-[350px] aspect-square relative rounded-md overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 snap-center group shrink-0"
                            >
                                <Image
                                    src={img.url}
                                    alt={img.caption}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/20 transition-all duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white">
                                        <Camera size={24} />
                                    </div>
                                </div>
                                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-sm font-medium">{img.caption}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="flex justify-center">
                        <button className="px-8 py-3 bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold rounded-full transition-all shadow-sm hover:shadow-md">
                            সব ছবি দেখুন
                        </button>
                    </div>
                </section>



                {/* 4. Video Gallery */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-md bg-red-100 flex items-center justify-center text-red-700">
                            <PlayCircle size={20} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">ভিডিও গ্যালারি</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {GALLERY_VIDEOS.map((video) => (
                            <div
                                key={video.id}
                                className="relative aspect-video rounded-md bg-slate-950 overflow-hidden group shadow-lg"
                            >
                                <div className="absolute inset-0 flex items-center justify-center bg-slate-100 z-0">
                                    <Loader2 className="animate-spin text-emerald-600" size={32} />
                                </div>
                                <iframe
                                    src={video.youtubeUrl}
                                    className="w-full h-full relative z-10"
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            আরো দেখুন
                        </button>
                    </div>
                </section>
            </div>

            {/* Lightbox / Modal */}
            {selectedImage !== null && (
                <div className="fixed inset-0 bg-slate-950/95 z-[100] flex items-center justify-center p-4">
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 text-white hover:text-emerald-400 p-2 transition-colors"
                    >
                        <X size={32} />
                    </button>

                    <div className="relative w-full max-w-5xl aspect-video rounded-md overflow-hidden shadow-2xl">
                        <Image
                            src={GALLERY_IMAGES[selectedImage].url}
                            fill
                            className="object-contain"
                            alt="Full Preview"
                        />
                        <div className="absolute bottom-0 inset-x-0 bg-black/50 backdrop-blur-sm p-4 text-center">
                            <p className="text-white font-bold">{GALLERY_IMAGES[selectedImage].caption}</p>
                        </div>
                    </div>

                    <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(p => (p! - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
                            }}
                            className="w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(p => (p! + 1) % GALLERY_IMAGES.length)
                            }}
                            className="w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
