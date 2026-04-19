import { Users, GraduationCap, BookOpen, UserPlus, ArrowUpRight } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
                <p className="text-slate-500">Welcome back, get an overview of your madrasa updates.</p>
            </div>

            {/* Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatsCard
                    title="Total Students"
                    value="1,250"
                    change="+12% from last month"
                    icon={Users}
                    color="bg-blue-500"
                />
                <StatsCard
                    title="Total Teachers"
                    value="48"
                    change="+2 new this week"
                    icon={GraduationCap}
                    color="bg-emerald-500"
                />
                <StatsCard
                    title="Active Courses"
                    value="16"
                    change="All running smoothly"
                    icon={BookOpen}
                    color="bg-violet-500"
                />
            </div>

            {/* Recent Activity Table */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                    <h2 className="font-semibold text-slate-900">Recent Admissions</h2>
                    <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">View All</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-50 text-slate-500">
                            <tr>
                                <th className="px-6 py-3 font-medium">Student Name</th>
                                <th className="px-6 py-3 font-medium">Department</th>
                                <th className="px-6 py-3 font-medium">Date</th>
                                <th className="px-6 py-3 font-medium">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {[
                                { name: 'Abdullah Al Mamun', dept: 'Hifz', date: 'Jan 23, 2026', status: 'Active' },
                                { name: 'Sadiqur Rahman', dept: 'Kitab', date: 'Jan 22, 2026', status: 'Pending' },
                                { name: 'Rahim Uddin', dept: 'Arabic', date: 'Jan 21, 2026', status: 'Active' },
                                { name: 'Karim Ahmed', dept: 'Hifz', date: 'Jan 20, 2026', status: 'Active' },
                                { name: 'Jabbar Ali', dept: 'Kitab', date: 'Jan 20, 2026', status: 'Rejected' },
                            ].map((student, i) => (
                                <tr key={i} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-3 font-medium text-slate-900">{student.name}</td>
                                    <td className="px-6 py-3 text-slate-600">{student.dept}</td>
                                    <td className="px-6 py-3 text-slate-500">{student.date}</td>
                                    <td className="px-6 py-3">
                                        <span className={`
                      inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${student.status === 'Active' ? 'bg-green-100 text-green-800' :
                                                student.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-red-100 text-red-800'}
                    `}>
                                            {student.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function StatsCard({ title, value, change, icon: Icon, color }: any) {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between">
            <div>
                <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{value}</h3>
                <p className="text-xs text-emerald-600 flex items-center gap-1">
                    <ArrowUpRight size={14} /> {change}
                </p>
            </div>
            <div className={`p-3 rounded-lg ${color} bg-opacity-10 text-opacity-100`}>
                {/* We need to use the color prop properly for the icon background */}
                <div className={`${color.replace('bg-', 'text-')} opacity-100`}>
                    <Icon size={24} />
                </div>
            </div>
        </div>
    );
}
