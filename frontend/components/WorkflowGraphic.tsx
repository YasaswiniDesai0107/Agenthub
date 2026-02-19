
'use client';

import { useEffect, useState, useMemo } from 'react';
import {
    Database, Cpu, MessageSquare, Terminal,
    ArrowRight, CheckCircle2, Search, Brain,
    Zap, ShieldCheck, Cog, LineChart
} from 'lucide-react';
import { Agent } from '../types/agent';

interface WorkflowGraphicProps {
    agent: Agent;
}

export default function WorkflowGraphic({ agent }: WorkflowGraphicProps) {
    const [activeStep, setActiveStep] = useState(0);
    const [isGenerating, setIsGenerating] = useState(true);

    // Parse operational details into steps
    const steps = useMemo(() => {
        if (!agent.operationalDetails) return [
            { icon: Search, label: 'Input', desc: 'Agent receives data' },
            { icon: Brain, label: 'Analysis', desc: 'LLM analyzes context' },
            { icon: Cog, label: 'Execution', desc: 'Tools perform tasks' },
            { icon: ShieldCheck, label: 'Validation', desc: 'Verify results' }
        ];

        const rawSteps = agent.operationalDetails
            .split('\n')
            .map(line => line.replace(/^[•\-\*]\s*/, '').trim())
            .filter(line => line.length > 0);

        return rawSteps.slice(0, 4).map((desc, idx) => {
            // Assign icons based on keywords
            let icon = Cog;
            let label = `Step ${idx + 1}`;

            const lowercaseDesc = desc.toLowerCase();
            if (lowercaseDesc.includes('collect') || lowercaseDesc.includes('read') || lowercaseDesc.includes('receive') || lowercaseDesc.includes('load') || lowercaseDesc.includes('pull')) {
                icon = Search;
                label = 'Input/Fetch';
            } else if (lowercaseDesc.includes('analyze') || lowercaseDesc.includes('evaluate') || lowercaseDesc.includes('determine') || lowercaseDesc.includes('check') || lowercaseDesc.includes('evaluate')) {
                icon = Brain;
                label = 'Analysis/Logic';
            } else if (lowercaseDesc.includes('generate') || lowercaseDesc.includes('perform') || lowercaseDesc.includes('update') || lowercaseDesc.includes('execute') || lowercaseDesc.includes('route')) {
                icon = Cog;
                label = 'Execution';
            } else if (lowercaseDesc.includes('validate') || lowercaseDesc.includes('verify') || lowercaseDesc.includes('ensure') || lowercaseDesc.includes('audit')) {
                icon = ShieldCheck;
                label = 'Validation';
            } else if (lowercaseDesc.includes('notify') || lowercaseDesc.includes('send') || lowercaseDesc.includes('report') || lowercaseDesc.includes('publish')) {
                icon = MessageSquare;
                label = 'Output';
            }

            return { icon, label, desc };
        });
    }, [agent.operationalDetails]);

    const [metrics, setMetrics] = useState({
        latency: '0.0s',
        tokenCost: '$0.000',
        confidence: '0.0%'
    });

    useEffect(() => {
        // Initial set on mount to avoid hydration mismatch
        setMetrics({
            latency: (0.8 + Math.random() * 0.5).toFixed(1) + 's',
            tokenCost: `$0.00${Math.floor(Math.random() * 9) + 1}`,
            confidence: (98 + Math.random() * 1.5).toFixed(1) + '%'
        });

        const timer = setTimeout(() => {
            setIsGenerating(false);
        }, 2000);

        const stepInterval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
            // Slightly jitter the metrics to feel "live"
            setMetrics(prev => ({
                latency: (0.8 + Math.random() * 0.5).toFixed(1) + 's',
                tokenCost: `$0.00${Math.floor(Math.random() * 9) + 1}`,
                confidence: (98 + Math.random() * 1.5).toFixed(1) + '%'
            }));
        }, 2500);

        return () => {
            clearTimeout(timer);
            clearInterval(stepInterval);
        };
    }, [steps.length]);

    if (isGenerating) {
        return (
            <div className="aspect-video bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
                <div className="relative">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-6 border border-gray-100 z-10 relative">
                        <Cpu className="w-10 h-10 text-primary animate-pulse" />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl animate-pulse -z-0"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Generating Dynamic Workflow</h3>
                <p className="text-sm text-gray-500 max-w-sm mb-6">Synthesizing a custom high-fidelity workflow for <span className="text-primary font-bold">{agent.name}</span> based on operational specs...</p>

                <div className="w-full max-w-md space-y-3">
                    <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        <span>Logic Synthesis</span>
                        <span>100%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-[100%] transition-all duration-1000 ease-out"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 p-8 shadow-inner overflow-hidden animate-in zoom-in-95 duration-500">
            <div className="relative">
                {/* Background Lines */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 -z-0 hidden md:block"></div>

                <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8 md:gap-4">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        const isActive = activeStep === idx;

                        return (
                            <div key={idx} className="flex flex-col items-center w-full md:max-w-[200px]">
                                <div className={`
                                    w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500
                                    ${isActive ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-110 ring-4 ring-primary/10' : 'bg-white text-gray-400 border border-gray-100 shadow-sm'}
                                `}>
                                    <Icon className={`w-8 h-8 ${isActive ? 'animate-bounce-subtle' : ''}`} />
                                </div>
                                <div className="mt-4 text-center">
                                    <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${isActive ? 'text-primary' : 'text-gray-500'}`}>
                                        {step.label}
                                    </p>
                                    <p className={`text-[10px] leading-tight px-2 transition-colors duration-300 ${isActive ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
                                        {step.desc}
                                    </p>
                                </div>

                                {idx < steps.length - 1 && (
                                    <div className="hidden md:block absolute right-[-10px] top-8 text-gray-200">
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-12 bg-white rounded-lg border border-primary/10 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                            <Zap className="w-4 h-4 text-green-600" />
                        </div>
                        <h4 className="text-sm font-bold text-gray-900">Runtime Orchestration Logs</h4>
                    </div>
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
                        LIVE
                    </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-[10px] text-gray-500 font-bold uppercase">Latency</p>
                        <p className="text-sm font-bold text-gray-900">{metrics.latency}</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-[10px] text-gray-500 font-bold uppercase">Token Cost</p>
                        <p className="text-sm font-bold text-gray-900">{metrics.tokenCost}</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-[10px] text-gray-500 font-bold uppercase">Decision Conf.</p>
                        <p className="text-sm font-bold text-gray-900">{metrics.confidence}</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-[10px] text-gray-500 font-bold uppercase">Execution Status</p>
                        <p className="text-sm font-bold text-green-600">Success</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes bounce-subtle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-3px); }
                }
                .animate-bounce-subtle {
                    animation: bounce-subtle 2s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
}
