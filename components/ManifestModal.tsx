
'use client';

import { X, Copy, Check, Download } from 'lucide-react';
import { useState } from 'react';

interface ManifestModalProps {
    isOpen: boolean;
    onClose: () => void;
    manifest: string;
    agentName: string;
}

export default function ManifestModal({ isOpen, onClose, manifest, agentName }: ManifestModalProps) {
    const [copied, setCopied] = useState(false);

    if (!isOpen) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(manifest);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownload = () => {
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

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">Agent Manifest</h3>
                        <p className="text-xs text-gray-500 font-medium">OASF 1.0.0 Standard Record</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-auto p-6 bg-gray-900">
                    <pre className="text-sm text-gray-300 font-mono leading-relaxed overflow-x-auto">
                        {manifest}
                    </pre>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-100 bg-white flex items-center justify-end gap-3">
                    <button
                        onClick={handleCopy}
                        className="btn btn-secondary text-sm flex items-center gap-2 py-2"
                    >
                        {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                        {copied ? 'Copied!' : 'Copy to Clipboard'}
                    </button>
                    <button
                        onClick={handleDownload}
                        className="btn btn-primary text-sm flex items-center gap-2 py-2"
                    >
                        <Download className="w-4 h-4" />
                        Download YAML
                    </button>
                </div>
            </div>
        </div>
    );
}
