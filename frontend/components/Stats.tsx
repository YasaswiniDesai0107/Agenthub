'use client';

import { motion } from 'framer-motion';
import { Bot, Building2, TrendingUp, Users } from 'lucide-react';
import { Agent } from '@/types/agent';

interface StatsProps {
    agents: Agent[];
}

export default function Stats({ agents }: StatsProps) {
    const totalAgents = agents.length;
    const deployedAgents = agents.filter(a => a.status === 'deployed').length;
    const totalDomains = new Set(agents.map(a => a.businessDomain)).size;
    const totalViews = agents.reduce((sum, a) => sum + a.viewCount, 0);

    const stats = [
        {
            label: 'Total Agents',
            value: totalAgents,
            icon: Bot,
        },
        {
            label: 'Deployed Agents',
            value: deployedAgents,
            icon: TrendingUp,
        },
        {
            label: 'Business Domains',
            value: totalDomains,
            icon: Building2,
        },
        {
            label: 'Total Views',
            value: totalViews.toLocaleString(),
            icon: Users,
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="card p-6 border-l-4 border-l-primary flex items-start justify-between bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                    <div>
                        <p className="text-sm font-medium text-gray-500 mb-1 uppercase tracking-wide">{stat.label}</p>
                        <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg">
                        <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
