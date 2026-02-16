'use client';

import { motion } from 'framer-motion';
import { Agent } from '@/types/agent';
import { Eye, Users, Calendar, ArrowRight, Activity, Shield, Box, Server, BarChart, Settings, Cloud, FileCode, FileText } from 'lucide-react';
import Link from 'next/link';

interface AgentCardProps {
    agent: Agent;
    index: number;
}

export default function AgentCard({ agent, index }: AgentCardProps) {
    // Map status to new badge styles
    const getStatusBadge = (status: string) => {
        const styles = {
            active: 'bg-green-100 text-green-800 border-green-200',
            planned: 'bg-blue-100 text-blue-800 border-blue-200',
            deprecated: 'bg-gray-100 text-gray-800 border-gray-200',
            production: 'bg-indigo-100 text-indigo-800 border-indigo-200'
        };
        return styles[status as keyof typeof styles] || styles.active;
    };

    // Domain icons mapping
    const getDomainIcon = (domain: string) => {
        const icons: { [key: string]: any } = {
            'Customer Experience': Users,
            'Network Operations': Activity, // More appropriate for ops
            'Governance': Shield,
            'Assurance': Server,
            'Fulfillment': Box,
            'Commercial': BarChart,
            'Architecture': Cloud
        };
        const Icon = icons[domain] || Settings;
        return <Icon className="w-5 h-5 text-primary" />;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="h-full"
        >
            <Link href={`/agent/${agent.id}`} className="block h-full group">
                <div className="card h-full flex flex-col p-0 overflow-hidden hover:shadow-md hover:border-primary/20 transition-all duration-300 bg-white">
                    {/* Top status bar - subtle highlight */}
                    <div className="h-1 bg-gray-100 group-hover:bg-primary transition-colors duration-300" />

                    <div className="p-6 flex flex-col h-full">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-red-50 border border-red-100 group-hover:bg-red-100 transition-colors">
                                    {getDomainIcon(agent.businessDomain)}
                                </div>
                                <div>
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-0.5">
                                        {agent.businessDomain}
                                    </span>
                                    <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-medium border uppercase tracking-wide ${getStatusBadge(agent.status)}`}>
                                        {agent.status}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 group-hover:text-primary transition-colors">
                            {agent.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed flex-1">
                            {agent.shortDescription}
                        </p>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-100 my-4" />

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-xs text-gray-500 mb-0.5">Views</p>
                                <div className="flex items-center gap-1.5 font-medium text-gray-900 text-sm">
                                    <Eye className="w-3.5 h-3.5 text-gray-400" />
                                    {agent.viewCount.toLocaleString()}
                                </div>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 mb-0.5">Version</p>
                                <div className="flex items-center gap-1.5 font-medium text-gray-900 text-sm">
                                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                                    {agent.version}
                                </div>
                            </div>
                        </div>

                        {/* Footer Action */}
                        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
                            <span className="text-gray-400 font-medium text-xs">ID: {agent.id.replace('agent-', '')}</span>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        window.dispatchEvent(new CustomEvent('open-artifacts', { detail: { agent } }));
                                    }}
                                    className="p-1.5 hover:bg-gray-100 rounded text-gray-400 hover:text-primary transition-colors"
                                    title="View Agent Files"
                                >
                                    <FileCode className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        window.dispatchEvent(new CustomEvent('open-artifacts', { detail: { agent } }));
                                    }}
                                    className="p-1.5 hover:bg-gray-100 rounded text-gray-400 hover:text-primary transition-colors"
                                    title="View Agent Files"
                                >
                                    <FileText className="w-4 h-4" />
                                </button>
                                <div className="flex items-center gap-1 text-primary font-bold text-sm group-hover:translate-x-1 transition-transform ml-2">
                                    Details
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
