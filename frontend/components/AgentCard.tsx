'use client';

import { motion } from 'framer-motion';
import { Agent } from '@/types/agent';
import {
    Eye, Calendar, ArrowRight, Activity, Shield, Box,
    Server, BarChart, Settings, Cloud, Users,
    FileCode, FileText, Pencil, Trash2, Briefcase, Wrench, TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

interface AgentCardProps {
    agent: Agent;
    index: number;
}

const STATUS_BADGE: Record<string, string> = {
    upcoming: 'bg-gray-100 text-gray-700 border-gray-200',
    wip: 'bg-amber-100 text-amber-800 border-amber-200',
    deployed: 'bg-green-100 text-green-800 border-green-200',
};

const STATUS_LABEL: Record<string, string> = {
    upcoming: 'Upcoming',
    wip: 'Work In Progress',
    deployed: 'Deployed',
};

const DOMAIN_ICONS: Record<string, any> = {
    'Customer Experience': Users,
    'Customer Experience Ops': Users,
    'CX Analyst': Users,
    'Network Operations': Activity,
    'Network engineer': Activity,
    'NOC engineer': Activity,
    'Field Operations': Activity,
    'Governance': Shield,
    'Governance & Platform': Shield,
    'Assurance': Server,
    'Assurance & Reliability': Server,
    'Fulfillment': Box,
    'Fulfillment & Provisioning': Box,
    'Order managers': Box,
    'Commercial': BarChart,
    'Pre-Sales analyst': BarChart,
    'Architecture': Cloud,
    'Service Design & Architecture': Cloud,
    'Service Manager': Briefcase,
    'Technical support engr': Wrench,
    'Project Managers & SDM': Users,
    'Quality Analyst': TrendingUp,
};

export default function AgentCard({ agent, index }: AgentCardProps) {
    const { isAdmin } = useAuth();
    const DomainIcon = DOMAIN_ICONS[agent.businessDomain] || Settings;

    const openArtifacts = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        window.dispatchEvent(new CustomEvent('open-artifacts', { detail: { agent } }));
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="h-full"
        >
            <div className="card h-full flex flex-col p-0 overflow-hidden hover:shadow-md hover:border-primary/20 transition-all duration-300 bg-white relative group">

                {/* Admin edit icon — top-right corner, only for admin */}
                {isAdmin && (
                    <div className="absolute top-3 right-3 z-10 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link
                            href={`/agent/${agent.id}?edit=true`}
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-primary hover:text-white hover:border-primary transition-all"
                            title="Edit Agent"
                        >
                            <Pencil className="w-3.5 h-3.5" />
                        </Link>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                // Future: trigger delete confirmation
                            }}
                            className="p-1.5 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-red-500 hover:text-white hover:border-red-500 transition-all"
                            title="Delete Agent"
                        >
                            <Trash2 className="w-3.5 h-3.5" />
                        </button>
                    </div>
                )}

                {/* Top accent bar */}
                <div className="h-1 bg-gray-100 group-hover:bg-primary transition-colors duration-300" />

                <Link href={`/agent/${agent.id}`} className="flex flex-col flex-1 p-6">
                    {/* Header: domain + status */}
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-red-50 border border-red-100 group-hover:bg-red-100 transition-colors">
                                <DomainIcon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-0.5">
                                    {agent.businessDomain}
                                </span>
                                <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-medium border uppercase tracking-wide ${STATUS_BADGE[agent.status] || STATUS_BADGE.wip}`}>
                                    {STATUS_LABEL[agent.status] || agent.status}
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

                    <div className="w-full h-px bg-gray-100 my-3" />

                    {/* Metrics */}
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

                    {/* Footer */}
                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
                        <span className="text-gray-400 font-medium text-xs">ID: {(agent as any).displayId || agent.id.substring(0, 8)}</span>
                        <div className="flex items-center gap-2">
                            {/* Manifest */}
                            <button
                                onClick={openArtifacts}
                                className="p-1.5 hover:bg-gray-100 rounded text-gray-400 hover:text-primary transition-colors"
                                title="View Manifest"
                            >
                                <FileCode className="w-4 h-4" />
                            </button>
                            {/* Agent Card */}
                            <button
                                onClick={openArtifacts}
                                className="p-1.5 hover:bg-gray-100 rounded text-gray-400 hover:text-primary transition-colors"
                                title="View Agent Card"
                            >
                                <FileText className="w-4 h-4" />
                            </button>
                            <div className="flex items-center gap-1 text-primary font-bold text-sm group-hover:translate-x-1 transition-transform ml-1">
                                Details
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </motion.div>
    );
}
