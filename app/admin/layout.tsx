'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Users,
    GraduationCap,
    BookOpen,
    Image as ImageIcon,
    Settings,
    Menu,
    X,
    LogOut
} from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

const sidebarItems = [
    { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { label: 'Students', href: '/admin/students', icon: Users },
    { label: 'Teachers', href: '/admin/teachers', icon: GraduationCap },
    { label: 'Courses', href: '/admin/courses', icon: BookOpen },
    { label: 'Gallery', href: '/admin/gallery', icon: ImageIcon },
    { label: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        // TEMPORARY: Bypass Supabase logout
        // const supabase = createClient();
        // await supabase.auth.signOut();
        router.push('/login');
        router.refresh();
    };

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-slate-200 shadow-sm transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
            >
                <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100">
                    <Link href="/" className="text-xl font-bold text-emerald-700">
                        Madrasatu Ahmad
                    </Link>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="lg:hidden text-slate-500 hover:text-red-500"
                    >
                        <X size={24} />
                    </button>
                </div>

                <nav className="p-4 space-y-1">
                    {sidebarItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsSidebarOpen(false)}
                                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                  ${isActive
                                        ? 'bg-emerald-50 text-emerald-700'
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                `}
                            >
                                <Icon size={20} className={isActive ? 'text-emerald-600' : 'text-slate-400'} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-0 w-full p-4 border-t border-slate-100">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                    >
                        <LogOut size={20} />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen">
                {/* Mobile Header */}
                <header className="h-16 lg:hidden bg-white border-b border-slate-200 flex items-center px-4 justify-between sticky top-0 z-30">
                    <span className="font-bold text-emerald-700">Admin Panel</span>
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="p-2 -mr-2 text-slate-600 hover:bg-slate-100 rounded-md"
                    >
                        <Menu size={24} />
                    </button>
                </header>

                <main className="flex-1 p-4 md:p-8 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
