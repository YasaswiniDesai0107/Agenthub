'use client';

import { X, Copy, Check, Download, FileText, FileCode } from 'lucide-react';
import { useState, useEffect } from 'react';

interface DualArtifactsModalProps {
    isOpen: boolean;
    onClose: () => void;
    manifest: string;
    agentCard: string;
    agentName: string;
}

export default function DualArtifactsModal({ isOpen, onClose, manifest, agentCard, agentName }: DualArtifactsModalProps) {
    const [manifestCopied, setManifestCopied] = useState(false);
    const [cardCopied, setCardCopied] = useState(false);
    const [cardOpen, setCardOpen] = useState(true);
    const [manifestOpen, setManifestOpen] = useState(true);

    useEffect(() => {
        if (isOpen) {
            setCardOpen(true);
            setManifestOpen(true);
        }
    }, [isOpen]);

    useEffect(() => {
        if (!cardOpen && !manifestOpen) {
            onClose();
        }
    }, [cardOpen, manifestOpen, onClose]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

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

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={handleOverlayClick}
        >
            <div className="flex flex-col lg:flex-row gap-6 w-full max-w-[95vw] h-[90vh] items-stretch">
                {/* LEFT MODAL - Agent Card */}
                {cardOpen && (
                    <div className="flex-1 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 animate-in zoom-in-95 duration-300">
                        {/* Header */}
                        <div className="p-4 px-6 border-b border-gray-200 flex items-center justify-between bg-gradient-to-r from-gray-50 to-white">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Agent Card</h3>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Markdown Preview</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setCardOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-all group"
                            >
                                <X className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-auto p-8 bg-gradient-to-br from-gray-50 to-white scrollbar-light">
                            <pre className="text-gray-800 whitespace-pre-wrap leading-relaxed font-mono text-sm selection:bg-primary/20">
                                {agentCard}
                            </pre>
                        </div>

                        {/* Footer Actions */}
                        <div className="p-4 px-6 border-t border-gray-200 bg-white flex items-center justify-end gap-3">
                            <button
                                onClick={handleCopyCard}
                                className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-primary border border-gray-300 hover:border-primary/50 rounded-lg transition-all flex items-center gap-2 active:scale-95"
                            >
                                {cardCopied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                                {cardCopied ? 'Copied!' : 'Copy'}
                            </button>
                            <button
                                onClick={handleDownloadCard}
                                className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-primary-dark rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-primary/20 active:scale-95"
                            >
                                <Download className="w-4 h-4" />
                                Download
                            </button>
                        </div>
                    </div>
                )}

                {/* RIGHT MODAL - Agent Manifest */}
                {manifestOpen && (
                    <div className="flex-1 bg-[#0d1117] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-700 animate-in zoom-in-95 duration-300">
                        {/* Header */}
                        <div className="p-4 px-6 border-b border-gray-700 flex items-center justify-between bg-[#161b22]">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                    <FileCode className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Agent Manifest</h3>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">OASF 1.0 Standard Record</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setManifestOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-full transition-all group"
                            >
                                <X className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-auto p-8 bg-[#0d1117] scrollbar-dark">
                            <pre className="text-blue-300/90 whitespace-pre leading-relaxed font-mono text-sm selection:bg-blue-500/30">
                                {manifest}
                            </pre>
                        </div>

                        {/* Footer Actions */}
                        <div className="p-4 px-6 border-t border-gray-700 bg-[#161b22] flex items-center justify-end gap-3">
                            <button
                                onClick={handleCopyManifest}
                                className="px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 rounded-lg transition-all flex items-center gap-2 active:scale-95"
                            >
                                {manifestCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                {manifestCopied ? 'Copied!' : 'Copy'}
                            </button>
                            <button
                                onClick={handleDownloadManifest}
                                className="px-4 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20 active:scale-95"
                            >
                                <Download className="w-4 h-4" />
                                Download
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
                .scrollbar-dark::-webkit-scrollbar { width: 6px; }
                .scrollbar-dark::-webkit-scrollbar-track { background: #0d1117; }
                .scrollbar-dark::-webkit-scrollbar-thumb { background: #30363d; border-radius: 10px; }
                .scrollbar-dark::-webkit-scrollbar-thumb:hover { background: #484f58; }
                
                .scrollbar-light::-webkit-scrollbar { width: 6px; }
                .scrollbar-light::-webkit-scrollbar-track { background: transparent; }
                .scrollbar-light::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 10px; }
                .scrollbar-light::-webkit-scrollbar-thumb:hover { background: #9ca3af; }
            `}</style>
        </div>
    );
}
