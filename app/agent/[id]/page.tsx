
'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import {
    ArrowLeft, Eye, Calendar, User, Tag, Shield,
    Target, CheckCircle, XCircle, Settings,
    Activity, TrendingUp, Users, Briefcase, Wrench, Hexagon,
    Server, Box, BarChart, Cloud, FileCode, FileText, Download,
    Workflow, Cpu, Lock, Sparkles, Files
} from 'lucide-react';
import { mockAgents } from '@/data/mockAgents';
import DualArtifactsModal from '@/components/DualArtifactsModal';
import WorkflowGraphic from '@/components/WorkflowGraphic';
import { generateManifest, generateAgentCardMarkdown } from '@/utils/agentGenerators';

export default function AgentDetailPage() {
    const params = useParams();
    const router = useRouter();
    const agentId = params?.id as string;
    const [isArtifactsOpen, setIsArtifactsOpen] = useState(false);

    const agent = mockAgents.find(a => a.id === agentId);

    if (!agent) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Agent not found</h1>
                    <button onClick={() => router.push('/')} className="btn btn-primary">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Marketplace
                    </button>
                </div>
            </div>
        );
    }

    // Map domain to icon
    const getDomainIcon = (domain: string) => {
        const icons: { [key: string]: any } = {
            'Customer Experience': Users,
            'Network Operations': Activity,
            'Governance': Shield,
            'Assurance': Server,
            'Fulfillment': Box,
            'Commercial': BarChart,
            'Architecture': Cloud
        };
        const Icon = icons[domain] || Settings;
        return <Icon className="w-6 h-6 text-primary" />;
    };

    const getStatusBadge = (status: string) => {
        const styles = {
            active: 'bg-green-100 text-green-800 border-green-200',
            planned: 'bg-blue-100 text-blue-800 border-blue-200',
            deprecated: 'bg-gray-100 text-gray-800 border-gray-200',
            production: 'bg-indigo-100 text-indigo-800 border-indigo-200'
        };
        return styles[status as keyof typeof styles] || styles.active;
    };


    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <DualArtifactsModal
                isOpen={isArtifactsOpen}
                onClose={() => setIsArtifactsOpen(false)}
                manifest={generateManifest(agent)}
                agentCard={generateAgentCardMarkdown(agent)}
                agentName={agent.name}
            />

            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="container-custom py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded flex items-center justify-center cursor-pointer" onClick={() => router.push('/')}>
                            <Hexagon className="w-5 h-5 text-white fill-current" />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold text-gray-900 leading-none cursor-pointer hover:text-primary transition-colors" onClick={() => router.push('/')}>Agent HUB</h1>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsArtifactsOpen(true)}
                            className="text-sm font-bold text-white bg-primary hover:bg-primary-dark flex items-center gap-2 transition-all px-4 py-2 rounded-lg shadow-lg shadow-primary/20"
                        >
                            <Files className="w-4 h-4" />
                            View Agent Files
                        </button>
                        <button
                            onClick={() => router.push('/')}
                            className="text-sm font-medium text-gray-600 hover:text-primary flex items-center gap-2 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </button>
                    </div>
                </div>
            </header>

            <main className="container-custom py-8">
                {/* Agent Header Card */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 mb-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary" />

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-20 h-20 bg-red-50 rounded-xl flex items-center justify-center border border-red-100 shrink-0">
                            {getDomainIcon(agent.businessDomain)}
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                                <div className="flex items-center gap-3">
                                    <span className={`inline-flex px-2.5 py-0.5 rounded text-xs font-medium border uppercase tracking-wide ${getStatusBadge(agent.status)}`}>
                                        {agent.status}
                                    </span>
                                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                                        {agent.businessDomain}
                                    </span>
                                </div>


                            </div>

                            <h1 className="text-3xl font-bold text-gray-900 mb-4">{agent.name}</h1>
                            <p className="text-lg text-gray-600 mb-6 max-w-4xl">{agent.shortDescription}</p>

                            <div className="flex flex-wrap gap-8 pt-6 border-t border-gray-100">
                                <div className="flex items-center gap-2.5">
                                    <Eye className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Views</p>
                                        <p className="font-semibold text-gray-900">{agent.viewCount.toLocaleString()}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <User className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Owner</p>
                                        <p className="font-semibold text-gray-900">{agent.owner}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Tag className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Version</p>
                                        <p className="font-semibold text-gray-900">{agent.version}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Calendar className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Last Updated</p>
                                        <p className="font-semibold text-gray-900">Feb 16, 2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Details Column */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Problem Statement */}
                        <section className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-100">
                                <Activity className="w-5 h-5 text-primary" />
                                Features & Implementation
                            </h2>
                            <p className="text-gray-700 leading-relaxed">{agent.problemStatement}</p>
                        </section>

                        {/* Goals */}
                        <section className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-100">
                                <Target className="w-5 h-5 text-primary" />
                                Goals & Objectives
                            </h2>
                            <ul className="space-y-3">
                                {agent.goals.map((goal, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                        <span>{goal}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Agent Workflow */}
                        <section className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-100">
                                <Workflow className="w-5 h-5 text-primary" />
                                Agent Workflow
                            </h2>

                            <WorkflowGraphic agent={agent} />

                            <div className="mt-6 p-4 bg-gray-50 rounded border border-gray-100">
                                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Process Narrative</h4>
                                <p className="text-sm text-gray-700 leading-relaxed italic">
                                    {agent.operationalDetails}
                                </p>
                            </div>
                        </section>

                        {/* Scope */}
                        <section className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-100">
                                <Briefcase className="w-5 h-5 text-primary" />
                                Scope Definition
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-sm font-bold text-green-700 mb-3 uppercase tracking-wider flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4" />
                                        In Scope
                                    </h4>
                                    <ul className="space-y-2">
                                        {agent.inScope.map((item, idx) => (
                                            <li key={idx} className="text-gray-700 text-sm flex items-start gap-2 bg-green-50/50 p-2 rounded">
                                                <span className="text-green-600 font-bold">✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-red-700 mb-3 uppercase tracking-wider flex items-center gap-2">
                                        <XCircle className="w-4 h-4" />
                                        Out of Scope
                                    </h4>
                                    <ul className="space-y-2">
                                        {agent.outOfScope.map((item, idx) => (
                                            <li key={idx} className="text-gray-700 text-sm flex items-start gap-2 bg-red-50/50 p-2 rounded">
                                                <span className="text-red-500 font-bold">✕</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Column */}
                    <div className="space-y-6">
                        {/* Personas */}
                        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Target Personas</h3>
                            <div className="flex flex-wrap gap-2">
                                {agent.personas.map((persona, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium border border-gray-200">
                                        {persona}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Tools */}
                        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2 flex items-center gap-2">
                                <Cpu className="w-4 h-4 text-primary" />
                                Technology Stack
                            </h3>
                            <div className="space-y-3">
                                {agent.tools.map((tool, idx) => (
                                    <div key={idx} className="bg-gray-50 border border-gray-100 rounded-lg p-3 hover:border-primary/20 transition-colors">
                                        <p className="text-gray-900 font-bold text-sm mb-1">{tool.name}</p>
                                        <p className="text-xs text-gray-500 leading-snug">{tool.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* KPIs */}
                        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2 flex items-center gap-2">
                                <BarChart className="w-4 h-4 text-primary" />
                                Business ROI (KPIs)
                            </h3>
                            <div className="space-y-4">
                                {agent.kpis.map((kpi, idx) => (
                                    <div key={idx} className="relative">
                                        <div className="flex justify-between items-end mb-1">
                                            <span className="text-sm font-medium text-gray-700">{kpi.name}</span>
                                        </div>
                                        <div className="w-full bg-gray-100 rounded-full h-1.5 mt-1.5">
                                            <div
                                                className="bg-primary h-1.5 rounded-full animate-grow"
                                                style={{ width: `${60 + ((idx * 7) % 30)}%` }}
                                                suppressHydrationWarning
                                            ></div>
                                        </div>
                                        <p className="text-[10px] font-bold text-gray-400 mt-2 text-right uppercase tracking-widest">Target: {kpi.target}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Security */}
                        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2 flex items-center gap-2">
                                <Lock className="w-4 h-4 text-primary" />
                                Security & Trust
                            </h3>
                            <ul className="space-y-3">
                                {agent.securityControls.map((control, idx) => (
                                    <li key={idx} className="text-xs text-gray-600 flex items-start gap-2 leading-relaxed">
                                        <Shield className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                                        <span>{control}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
