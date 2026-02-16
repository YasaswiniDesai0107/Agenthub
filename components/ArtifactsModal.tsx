
'use client';

import { X, Copy, Check, Download, FileCode, FileText, Sparkles, Maximize2, LayoutGrid } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ArtifactsModalProps {
    isOpen: boolean;
    onClose: () => void;
    manifest: string;
    agentCard: string;
    agentName: string;
    initialMode?: 'all' | 'manifest' | 'card';
}

export default function ArtifactsModal({ isOpen, onClose, manifest, agentCard, agentName, initialMode = 'all' }: ArtifactsModalProps) {
    const [manifestCopied, setManifestCopied] = useState(false);
    const [cardCopied, setCardCopied] = useState(false);
    const [viewMode, setViewMode] = useState<'all' | 'manifest' | 'card'>(initialMode);

    useEffect(() => {
        if (isOpen) {
            setViewMode(initialMode);
        }
    }, [isOpen, initialMode]);

    if (!isOpen) return null;

    const handleCopyManifest = () => {
        navigator.clipboard.writeText(manifest);
        setManifestCopied(true);
        setTimeout(() => setManifestCopied(false), 2000);
    };

    const handleCopyCard = () => {
        navigator.clipboard.writeText(agentCard);
        setCardCopied(true);
        setTimeout(() => setCardCopied(false), 2000);
    };

    const handleDownloadManifest = () => {
        const blob = new Blob([manifest], { type: 'text/yaml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${agentName.toLowerCase().replace(/ /g, '-')}-manifest.yaml`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleDownloadCard = () => {
        const blob = new Blob([agentCard], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${agentName.toLowerCase().replace(/ /g, '-')}-card.md`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const isAll = viewMode === 'all';

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-300">
            <div className={`bg-white rounded-2xl shadow-2xl w-full flex flex-col overflow-hidden border border-white/20 transition-all duration-300 ${isAll ? 'max-w-7xl h-[90vh]' : 'max-w-4xl h-[85vh]'}`}>
                {/* Unified Header */}
                <div className="p-4 px-6 border-b border-gray-100 flex items-center justify-between bg-white relative">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shadow-inner">
                            <Sparkles className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-gray-900 tracking-tight">
                                {isAll ? 'Agent Assets: Card & Manifest' : viewMode === 'manifest' ? 'OASF Agent Manifest' : 'Modern Agent Blueprint'}
                            </h3>
                            <p className="text-[11px] text-gray-400 font-bold uppercase tracking-[0.2em]">Deployment Specifications for <span className="text-primary">{agentName}</span></p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center bg-gray-50 border border-gray-200 p-1 rounded-xl mr-2">
                            <button
                                onClick={() => setViewMode('all')}
                                className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${isAll ? 'bg-white text-primary shadow-sm border border-gray-100' : 'text-gray-400 hover:text-gray-600'}`}
                            >
                                <LayoutGrid className="w-3 h-3" />
                                Combined
                            </button>
                            <button
                                onClick={() => setViewMode('manifest')}
                                className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${viewMode === 'manifest' ? 'bg-white text-primary shadow-sm border border-gray-100' : 'text-gray-400 hover:text-gray-600'}`}
                            >
                                <FileCode className="w-3 h-3" />
                                YAML
                            </button>
                            <button
                                onClick={() => setViewMode('card')}
                                className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${viewMode === 'card' ? 'bg-white text-primary shadow-sm border border-gray-100' : 'text-gray-400 hover:text-gray-600'}`}
                            >
                                <FileText className="w-3 h-3" />
                                Card
                            </button>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-full transition-all group active:scale-90"
                        >
                            <X className="w-6 h-6 text-gray-300 group-hover:text-gray-600" />
                        </button>
                    </div>
                </div>

                {/* Content Area - Side by Side Grid */}
                <div className="flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-2 h-full">
                    {/* Left: Manifest */}
                    {(viewMode === 'all' || viewMode === 'manifest') && (
                        <div className={`flex flex-col bg-[#0d1117] border-r border-white/5 overflow-hidden transition-all duration-500 ${(viewMode === 'manifest') ? 'col-span-full' : ''}`}>
                            <div className="bg-[#161b22] px-6 py-2.5 flex items-center justify-between border-b border-white/5">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">OASF Standard YAML</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <button
                                        onClick={handleCopyManifest}
                                        className="p-1.5 hover:bg-white/10 rounded-md text-gray-500 hover:text-white transition-all active:scale-95"
                                        title="Copy Source"
                                    >
                                        {manifestCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                    <button
                                        onClick={handleDownloadManifest}
                                        className="p-1.5 hover:bg-white/10 rounded-md text-gray-500 hover:text-white transition-all active:scale-95"
                                        title="Download YAML"
                                    >
                                        <Download className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 overflow-auto p-8 lg:p-10 font-mono text-xs sm:text-sm scrollbar-dark">
                                <pre className="text-blue-300/80 whitespace-pre leading-relaxed selection:bg-blue-500/30">
                                    {manifest}
                                </pre>
                            </div>
                        </div>
                    )}

                    {/* Right: Agent Card */}
                    {(viewMode === 'all' || viewMode === 'card') && (
                        <div className={`flex flex-col bg-[#f8fafb] overflow-hidden transition-all duration-500 ${(viewMode === 'card') ? 'col-span-full' : ''}`}>
                            <div className="bg-white px-6 py-2.5 flex items-center justify-between border-b border-gray-200">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                                    <span className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em]">Agent Blueprint (Markdown)</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <button
                                        onClick={handleCopyCard}
                                        className="p-1.5 hover:bg-gray-100 rounded-md text-gray-400 hover:text-primary transition-all active:scale-95"
                                        title="Copy Markdown"
                                    >
                                        {cardCopied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                    <button
                                        onClick={handleDownloadCard}
                                        className="p-1.5 hover:bg-gray-100 rounded-md text-gray-400 hover:text-primary transition-all active:scale-95"
                                        title="Download Markdown"
                                    >
                                        <Download className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 overflow-auto p-8 lg:p-10 font-mono text-xs sm:text-sm scrollbar-light bg-[#f8fafb]">
                                <pre className="text-gray-800 whitespace-pre-wrap leading-relaxed selection:bg-primary/20 font-mono">
                                    {agentCard}
                                </pre>
                            </div>
                        </div>
                    )}
                </div>

                {/* Universal Footer */}
                <div className="p-4 px-6 border-t border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-2">
                        <Maximize2 className="w-3 h-3" />
                        Enterprise Artifact Core v2.1
                    </p>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button
                            onClick={onClose}
                            className="flex-1 sm:flex-none px-6 py-2 text-xs font-black text-gray-500 hover:text-gray-900 uppercase tracking-widest transition-colors"
                        >
                            Close
                        </button>
                        <button
                            onClick={() => {
                                handleDownloadManifest();
                                handleDownloadCard();
                            }}
                            className="flex-1 sm:flex-none bg-primary hover:bg-primary-dark text-white px-8 py-2.5 rounded-xl text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2 active:scale-95"
                        >
                            <Download className="w-4 h-4" />
                            Download Full Package
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-dark::-webkit-scrollbar { width: 5px; }
                .scrollbar-dark::-webkit-scrollbar-track { background: #0d1117; }
                .scrollbar-dark::-webkit-scrollbar-thumb { background: #30363d; border-radius: 10px; }
                .scrollbar-dark::-webkit-scrollbar-thumb:hover { background: #484f58; }
                
                .scrollbar-light::-webkit-scrollbar { width: 5px; }
                .scrollbar-light::-webkit-scrollbar-track { background: transparent; }
                .scrollbar-light::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
                .scrollbar-light::-webkit-scrollbar-thumb:hover { background: #d1d5db; }
            `}</style>
        </div>
    );
}
