'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
    ArrowLeft, Eye, Calendar, User, Tag, Shield,
    Target, CheckCircle, XCircle, Settings,
    Activity, Users, Briefcase, Wrench, TrendingUp,
    Server, Box, BarChart, Cloud, FileCode, FileText, Download,
    Workflow, Cpu, Lock, Copy, Check, X, Edit, AlertTriangle
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import AgentEditor from '@/components/AgentEditor';
import WorkflowGraphic from '@/components/WorkflowGraphic';

export default function AgentDetailPage() {
    const params = useParams();
    const router = useRouter();
    const agentId = params?.id as string;
    const { isAdmin } = useAuth();

    // State
    const [agent, setAgent] = useState<any>(null);
    const [loadingAgent, setLoadingAgent] = useState(true);
    const [isEditing, setIsEditing] = useState(false);

    // Modals
    const [manifestModalOpen, setManifestModalOpen] = useState(false);
    const [agentCardModalOpen, setAgentCardModalOpen] = useState(false);
    const [manifestCopied, setManifestCopied] = useState(false);
    const [cardCopied, setCardCopied] = useState(false);

    // Navigation State
    const [activeSection, setActiveSection] = useState('overview');

    // Section Refs
    const overviewRef = useRef<HTMLDivElement>(null);
    const featuresRef = useRef<HTMLDivElement>(null);
    const goalsRef = useRef<HTMLDivElement>(null);
    const personasRef = useRef<HTMLDivElement>(null);
    const techStackRef = useRef<HTMLDivElement>(null);
    const roiRef = useRef<HTMLDivElement>(null);
    const securityRef = useRef<HTMLDivElement>(null);

    // Fetch Agent Data
    useEffect(() => {
        const fetchAgent = async () => {
            if (!agentId) { setLoadingAgent(false); return; }
            try {
                const token = localStorage.getItem('agenthub_token');
                const headers: HeadersInit = token ? { 'Authorization': `Bearer ${token}` } : {};

                const res = await fetch(`/api/agents/${agentId}`, { headers });
                if (!res.ok) {
                    setAgent(null);
                    return;
                }
                const json = await res.json();
                if (json.success) {
                    const data = json.data;

                    // Backend now flattens extra fields, no need to parse manifest locally
                    const formatted = {
                        ...data,
                        // Core fields
                        id: data.id,
                        displayId: data.display_id || `A-${String(data.id).substring(0, 6).toUpperCase()}`,
                        name: data.name,
                        businessDomain: data.domain || '',
                        shortDescription: data.short_description || '',
                        description: data.description || '',
                        version: data.version,
                        status: (data.status === 'WORK_IN_PROGRESS' || data.status === 'wip') ? 'wip' :
                            (data.status === 'DEPLOYED' || data.status === 'deployed') ? 'deployed' : 'upcoming',
                        viewCount: data.view_count || 0,
                        owner: data.owner_name || 'AgentHub Team',
                        lastUpdated: data.updated_at ? new Date(data.updated_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'N/A',

                        // Flattened Extra fields from Backend
                        goals: data.goals || [],
                        features: data.features || [],
                        kpis: data.kpis || [],
                        tools: data.tools || [],
                        inputs: data.inputs || [],
                        outputs: data.outputs || [],
                        inScope: data.inScope || [],
                        outOfScope: data.outOfScope || [],
                        securityControls: data.securityControls || [],
                        guardrails: data.guardrails || [],
                        triggers: data.triggers || [],
                        examples: data.examples || [],
                        personas: data.personas || [],
                        operationalDetails: data.operationalDetails || '',
                        techStack: data.techStack || [],

                        // Manifest/Card content for modals
                        // data.manifest.manifest_json is already a string from our backend fix
                        manifestContent: data.manifest?.manifest_json || '',
                        cardContent: data.card?.markdown_content || ''
                    };

                    setAgent(formatted);
                } else {
                    setAgent(null);
                }
            } catch (e) {
                console.error(e);
                setAgent(null);
            } finally {
                setLoadingAgent(false);
            }
        };
        fetchAgent();
    }, [agentId]);

    // Scroll Spy for Sidebar
    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { id: 'overview', ref: overviewRef },
                { id: 'features', ref: featuresRef },
                { id: 'goals', ref: goalsRef },
                { id: 'personas', ref: personasRef },
                { id: 'techstack', ref: techStackRef },
                { id: 'roi', ref: roiRef },
                { id: 'security', ref: securityRef },
            ];

            // Find the first section that is actively in view (top portion)
            // or default to the last one if we're at the bottom
            const scrollPosition = window.scrollY + 150; // Offset for header

            for (const section of sections) {
                if (section.ref.current) {
                    const top = section.ref.current.offsetTop;
                    const height = section.ref.current.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    // Navigation Helper
    const scrollToSection = (sectionId: string, ref: React.RefObject<HTMLDivElement | null>) => {
        setActiveSection(sectionId);
        if (ref.current) {
            const yOffset = -100; // Header offset
            const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };


    // Download/Copy Helpers
    const handleCopyManifest = () => {
        navigator.clipboard.writeText(agent.manifestContent);
        setManifestCopied(true);
        setTimeout(() => setManifestCopied(false), 2000);
    };
    const handleCopyCard = () => {
        navigator.clipboard.writeText(agent.cardContent);
        setCardCopied(true);
        setTimeout(() => setCardCopied(false), 2000);
    };
    const handleDownloadManifest = () => {
        const blob = new Blob([agent.manifestContent], { type: 'text/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${agent.name.toLowerCase().replace(/ /g, '-')}-manifest.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    const handleDownloadCard = () => {
        const blob = new Blob([agent.cardContent], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${agent.name.toLowerCase().replace(/ /g, '-')}-card.md`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };


    if (loadingAgent) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (!agent) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Agent not found</h1>
                <p className="text-gray-500 mb-6">This agent may have been removed or does not exist.</p>
                <button onClick={() => router.push('/')} className="px-4 py-2 bg-primary text-white rounded-lg flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                </button>
            </div>
        );
    }

    // --- RENDER HELPERS ---
    const getDomainIcon = (domain: string) => {
        const icons: any = {
            'Customer Experience': Users,
            'CX Analyst': Users,
            'Customer Experience Ops': Users,
            'Network Operations': Activity,
            'NOC engineer': Activity,
            'Field Operations': Activity,
            'Governance': Shield,
            'Governance & Platform': Shield,
            'Assurance': Server,
            'Assurance & Reliability': Server,
            'Fulfillment': Box,
            'Fulfillment & Provisioning': Box,
            'Commercial': BarChart,
            'Pre-Sales analyst': BarChart,
            'Architecture': Cloud,
            'Service Manager': Briefcase,
            'Order managers': Box,
            'Technical support engr': Wrench,
            'Project Managers & SDM': Users
        };
        const Icon = icons[domain] || Settings;
        return <Icon className="w-6 h-6 text-primary" />;
    };

    const getStatusStyle = (status: string) => {
        if (status === 'deployed') return 'bg-green-100 text-green-800 border-green-200';
        if (status === 'wip') return 'bg-amber-100 text-amber-800 border-amber-200';
        return 'bg-gray-100 text-gray-700 border-gray-200';
    };

    const SidebarLink = ({ id, label, icon: Icon, targetRef }: any) => (
        <button
            onClick={() => scrollToSection(id, targetRef)}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-all flex items-center gap-2.5
            ${activeSection === id ? 'bg-primary/5 text-primary border-r-2 border-primary' : 'text-gray-600 hover:bg-gray-50'}`}
        >
            <Icon className={`w-4 h-4 ${activeSection === id ? 'text-primary' : 'text-gray-400'}`} />
            {label}
        </button>
    );

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Manifest Modal */}
            {manifestModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
                    onClick={(e) => e.target === e.currentTarget && setManifestModalOpen(false)}>
                    <div className="bg-[#0d1117] rounded-xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col border border-gray-700">
                        <div className="p-4 border-b border-gray-700 flex justify-between items-center bg-[#161b22] rounded-t-xl">
                            <div className="flex items-center gap-3">
                                <FileCode className="w-5 h-5 text-blue-400" />
                                <h3 className="text-white font-bold">Agent Manifest</h3>
                            </div>
                            <button onClick={() => setManifestModalOpen(false)}><X className="text-gray-400 hover:text-white" /></button>
                        </div>
                        <div className="flex-1 overflow-auto p-6 scrollbar-dark">
                            <pre className="text-blue-300 font-mono text-sm whitespace-pre">{agent.manifestContent}</pre>
                        </div>
                        <div className="p-4 border-t border-gray-700 flex justify-end gap-3 bg-[#161b22] rounded-b-xl">
                            <button onClick={handleCopyManifest} className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:text-white flex items-center gap-2">
                                {manifestCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />} Copy
                            </button>
                            <button onClick={handleDownloadManifest} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                                <Download className="w-4 h-4" /> Download
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Card Modal */}
            {agentCardModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
                    onClick={(e) => e.target === e.currentTarget && setAgentCardModalOpen(false)}>
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col border border-gray-200">
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-xl">
                            <div className="flex items-center gap-3">
                                <FileText className="w-5 h-5 text-primary" />
                                <h3 className="text-gray-900 font-bold">Agent Card</h3>
                            </div>
                            <button onClick={() => setAgentCardModalOpen(false)}><X className="text-gray-500 hover:text-gray-900" /></button>
                        </div>
                        <div className="flex-1 overflow-auto p-8 scrollbar-light">
                            <pre className="text-gray-800 font-mono text-sm whitespace-pre-wrap">{agent.cardContent}</pre>
                        </div>
                        <div className="p-4 border-t border-gray-200 flex justify-end gap-3 bg-gray-50 rounded-b-xl">
                            <button onClick={handleCopyCard} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 flex items-center gap-2">
                                {cardCopied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />} Copy
                            </button>
                            <button onClick={handleDownloadCard} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 flex items-center gap-2">
                                <Download className="w-4 h-4" /> Download
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isEditing ? (
                <AgentEditor
                    agent={agent}
                    onSave={async (data) => {
                        alert("Editing not fully rewritten yet - placeholder");
                        setIsEditing(false);
                    }}
                    onCancel={() => setIsEditing(false)}
                />
            ) : (
                <div className="flex-1 flex max-w-[1600px] mx-auto w-full">
                    {/* Left Sidebar Navigation */}
                    <aside className="w-64 bg-white border-r border-gray-200 sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto hidden lg:block shrink-0">
                        <div className="p-4 space-y-1">
                            <SidebarLink id="overview" label="Overview" icon={Eye} targetRef={overviewRef} />
                            <SidebarLink id="features" label="Features & Implementation" icon={Activity} targetRef={featuresRef} />
                            <SidebarLink id="goals" label="Goals & Objectives" icon={Target} targetRef={goalsRef} />
                            <SidebarLink id="personas" label="Target Personas" icon={Users} targetRef={personasRef} />
                            <SidebarLink id="techstack" label="Technology Stack" icon={Cpu} targetRef={techStackRef} />
                            <SidebarLink id="roi" label="Business ROI (KPIs)" icon={BarChart} targetRef={roiRef} />
                            <SidebarLink id="security" label="Security & Trust" icon={Shield} targetRef={securityRef} />
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1 overflow-y-auto w-full">
                        <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-8">

                            {/* 1. Overview Section */}
                            <section ref={overviewRef} id="overview" className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60" />
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center border border-primary/10 shrink-0">
                                        {getDomainIcon(agent.businessDomain)}
                                    </div>
                                    <div className="flex-1 space-y-4">
                                        <div className="flex flex-wrap items-start justify-between gap-4">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-3 text-sm">
                                                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getStatusStyle(agent.status)} uppercase tracking-wide`}>
                                                        {agent.status === 'wip' ? 'Work in Progress' : agent.status}
                                                    </span>
                                                    <span className="font-semibold text-primary uppercase tracking-wide text-xs">{agent.displayId}</span>
                                                    <span className="text-gray-400">|</span>
                                                    <span className="font-medium text-gray-500">{agent.businessDomain}</span>
                                                </div>
                                                <h1 className="text-3xl font-bold text-gray-900 leading-tight">{agent.name}</h1>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <button onClick={() => setManifestModalOpen(true)} className="px-3 py-1.5 text-xs font-semibold text-gray-700 border border-gray-300 rounded hover:bg-gray-50 flex items-center gap-1.5">
                                                    <FileCode className="w-3.5 h-3.5" /> Manifest
                                                </button>
                                                <button onClick={() => setAgentCardModalOpen(true)} className="px-3 py-1.5 text-xs font-semibold text-gray-700 border border-gray-300 rounded hover:bg-gray-50 flex items-center gap-1.5">
                                                    <FileText className="w-3.5 h-3.5" /> Card
                                                </button>
                                            </div>
                                        </div>

                                        <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">{agent.shortDescription}</p>

                                        <div className="pt-6 mt-2 border-t border-gray-100 flex flex-wrap gap-8 text-sm">
                                            <div className="flex items-center gap-2.5">
                                                <Calendar className="w-4 h-4 text-gray-400" />
                                                <div>
                                                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Updated</p>
                                                    <p className="font-semibold text-gray-900">{agent.lastUpdated}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2.5">
                                                <User className="w-4 h-4 text-gray-400" />
                                                <div>
                                                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Owner</p>
                                                    <p className="font-semibold text-gray-900">{agent.owner}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2.5">
                                                <Tag className="w-4 h-4 text-gray-400" />
                                                <div>
                                                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Version</p>
                                                    <p className="font-semibold text-gray-900">{agent.version}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2.5">
                                                <Activity className="w-4 h-4 text-gray-400" />
                                                <div>
                                                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Views</p>
                                                    <p className="font-semibold text-gray-900">{agent.viewCount}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 2. Features Section */}
                            <section ref={featuresRef} id="features" className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Activity className="w-5 h-5 text-primary" /> Features & Implementation
                                </h2>

                                <p className="text-gray-700 mb-6">{agent.description || agent.problemStatement}</p>

                                {agent.features?.length > 0 && (
                                    <div className="mb-8">
                                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Key Capabilities</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {agent.features.map((f: string, i: number) => {
                                                // Clean up tags if needed, e.g. "Tag: From Image" -> "From Image"
                                                const cleanFeature = f.replace(/^(Tag:|Domain:|Process:|Archetype:|Autonomy:)\s*/i, '');
                                                const label = f.split(':')[0];
                                                const isTag = f.includes(':');
                                                return (
                                                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                        <div className="text-sm text-gray-700">
                                                            {isTag && <span className="font-bold text-gray-500 text-xs uppercase mr-2">{label}</span>}
                                                            <span className="font-medium">{cleanFeature}</span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                {/* Workflow Graphic */}
                                <div className="mt-8">
                                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Workflow Visualization</h3>
                                    <WorkflowGraphic agent={agent} />
                                    {agent.operationalDetails && (
                                        <div className="mt-4 p-4 bg-blue-50/50 border border-blue-100 rounded-lg text-sm text-gray-700 italic">
                                            {agent.operationalDetails}
                                        </div>
                                    )}
                                </div>

                                {/* Inputs/Outputs Grid */}
                                <div className="grid md:grid-cols-2 gap-8 mt-8 border-t border-gray-100 pt-8">
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Inputs</h4>
                                        <ul className="space-y-2">
                                            {agent.inputs.length > 0 ? agent.inputs.map((inp: string, i: number) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <span className="text-primary font-bold">→</span> {inp}
                                                </li>
                                            )) : <li className="text-gray-400 text-sm italic">No specific inputs defined.</li>}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Outputs</h4>
                                        <ul className="space-y-2">
                                            {agent.outputs.length > 0 ? agent.outputs.map((out: string, i: number) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <span className="text-green-600 font-bold">⇒</span> {out}
                                                </li>
                                            )) : <li className="text-gray-400 text-sm italic">No specific outputs defined.</li>}
                                        </ul>
                                    </div>
                                </div>

                                {/* Scope */}
                                <div className="grid md:grid-cols-2 gap-6 mt-8">
                                    <div className="bg-green-50/50 border border-green-100 rounded-lg p-5">
                                        <h4 className="flex items-center gap-2 text-green-800 font-bold text-sm uppercase tracking-wide mb-3">
                                            <CheckCircle className="w-4 h-4" /> In Scope
                                        </h4>
                                        <ul className="space-y-2">
                                            {agent.inScope.length > 0 ? agent.inScope.map((s: string, i: number) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-3.5 h-3.5 mt-1 text-green-600 shrink-0" />{s}</li>
                                            )) : <li className="text-gray-400 text-sm">Not specified</li>}
                                        </ul>
                                    </div>
                                    <div className="bg-red-50/50 border border-red-100 rounded-lg p-5">
                                        <h4 className="flex items-center gap-2 text-red-800 font-bold text-sm uppercase tracking-wide mb-3">
                                            <XCircle className="w-4 h-4" /> Out of Scope
                                        </h4>
                                        <ul className="space-y-2">
                                            {agent.outOfScope.length > 0 ? agent.outOfScope.map((s: string, i: number) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><X className="w-3.5 h-3.5 mt-1 text-red-500 shrink-0" />{s}</li>
                                            )) : <li className="text-gray-400 text-sm">Not specified</li>}
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* 3. Goals Section */}
                            <section ref={goalsRef} id="goals" className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Target className="w-5 h-5 text-primary" /> Goals & Objectives
                                </h2>
                                <ul className="grid md:grid-cols-2 gap-4">
                                    {agent.goals.length > 0 ? agent.goals.map((goal: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                            <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 font-bold text-primary text-xs shadow-sm">{i + 1}</div>
                                            <span className="text-gray-800 text-sm font-medium pt-0.5">{goal}</span>
                                        </li>
                                    )) : <li className="text-gray-500 italic">No specific goals listed.</li>}
                                </ul>
                            </section>

                            {/* 4. Personas Section */}
                            <section ref={personasRef} id="personas" className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Users className="w-5 h-5 text-primary" /> Target Personas
                                </h2>

                                {agent.personas && agent.personas.length > 0 ? (
                                    <div className="flex flex-wrap gap-3">
                                        {agent.personas.map((p: string, i: number) => (
                                            <span key={i} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100 flex items-center gap-2">
                                                <User className="w-4 h-4" /> {p}
                                            </span>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                                        <p className="text-gray-500 mb-2">No specific personas defined in manifest.</p>
                                        <div className="flex justify-center gap-3 mt-4">
                                            {/* Fallback to inferred personas based on Domain */}
                                            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium border border-gray-200 flex items-center gap-2">
                                                <Briefcase className="w-3 h-3" /> {agent.businessDomain} Professionals
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {/* Show triggers here as they relate to who/what invokes the agent */}
                                {agent.triggers && agent.triggers.length > 0 && (
                                    <div className="mt-6 pt-6 border-t border-gray-100">
                                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Engagement Triggers</h4>
                                        <ul className="space-y-2">
                                            {agent.triggers.map((t: string, i: number) => (
                                                <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                                    <span className="text-orange-500">⚡</span> {t}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </section>

                            {/* 5. Tech Stack Section */}
                            <section ref={techStackRef} id="techstack" className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Cpu className="w-5 h-5 text-primary" /> Technology Stack
                                </h2>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Integrated Tools & Platforms</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                            {agent.tools.length > 0 ? agent.tools.map((tool: any, i: number) => (
                                                <div key={i} className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-primary/30 transition-all shadow-sm">
                                                    <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0">
                                                        <Settings className="w-4 h-4 text-gray-500" />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-gray-900 text-sm">{tool.name.replace(/^ΓÇó\s*/, '')}</p>
                                                        {tool.description && <p className="text-xs text-gray-500">{tool.description}</p>}
                                                    </div>
                                                </div>
                                            )) : <p className="text-gray-500 text-sm">No specific tools listed.</p>}
                                        </div>
                                    </div>

                                    {/* Examples / Prompts if available */}
                                    {agent.examples && agent.examples.length > 0 && (
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Example Interactions</h4>
                                            <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm space-y-3">
                                                {agent.examples.map((ex: string, i: number) => (
                                                    <div key={i} className="text-gray-300 border-l-2 border-gray-700 pl-3">
                                                        {ex}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </section>

                            {/* 6. ROI Section */}
                            <section ref={roiRef} id="roi" className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <BarChart className="w-5 h-5 text-primary" /> Business ROI (KPIs)
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {agent.kpis.length > 0 ? agent.kpis.map((kpi: any, i: number) => (
                                        <div key={i} className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm">
                                            <div className="flex items-start justify-between mb-2">
                                                <span className="font-bold text-gray-700">{kpi.name.replace(/^ΓÇó\s*/, '')}</span>
                                                <TrendingUp className="w-4 h-4 text-green-500" />
                                            </div>
                                            <div className="mt-3">
                                                <div className="flex justify-between text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wide">
                                                    <span>Target</span>
                                                    <span>{kpi.target}</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div className="bg-primary h-2 rounded-full w-2/3 opacity-80"></div>
                                                </div>
                                            </div>
                                        </div>
                                    )) : <p className="text-gray-500 italic">No specific KPIs defined.</p>}
                                </div>
                            </section>

                            {/* 7. Security Section */}
                            <section ref={securityRef} id="security" className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-primary" /> Security & Trust
                                </h2>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                                            <Lock className="w-4 h-4 text-gray-500" /> Security Controls
                                        </h4>
                                        <ul className="space-y-2">
                                            {agent.securityControls?.map((s: string, i: number) => (
                                                <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                                    <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                    {s}
                                                </li>
                                            ))}
                                            {(!agent.securityControls || agent.securityControls.length === 0) && (
                                                <li className="text-gray-500 italic text-sm">Standard enterprise security protocols apply.</li>
                                            )}
                                        </ul>
                                    </div>

                                    {agent.guardrails && agent.guardrails.length > 0 && (
                                        <div className="bg-orange-50 border border-orange-100 rounded-lg p-5">
                                            <h4 className="text-sm font-bold text-orange-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                                                <AlertTriangle className="w-4 h-4" /> Operational Guardrails
                                            </h4>
                                            <ul className="space-y-2">
                                                {agent.guardrails.map((g: string, i: number) => (
                                                    <li key={i} className="text-sm text-gray-800 flex items-start gap-2">
                                                        <span className="text-orange-500 font-bold">•</span>
                                                        {g}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </section>

                        </div>
                    </main>
                </div>
            )}

            <style jsx>{`
                .scrollbar-dark::-webkit-scrollbar { width: 8px; }
                .scrollbar-dark::-webkit-scrollbar-track { background: #0d1117; }
                .scrollbar-dark::-webkit-scrollbar-thumb { background: #30363d; border-radius: 4px; }
                .scrollbar-dark::-webkit-scrollbar-thumb:hover { background: #484f58; }
                
                .scrollbar-light::-webkit-scrollbar { width: 8px; }
                .scrollbar-light::-webkit-scrollbar-track { background: transparent; }
                .scrollbar-light::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 4px; }
                .scrollbar-light::-webkit-scrollbar-thumb:hover { background: #9ca3af; }
            `}</style>
        </div>
    );
}
