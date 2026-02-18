'use client';
import React, { useState, useEffect } from 'react';
import { Save, AlertCircle, CheckCircle } from 'lucide-react';

interface AgentEditorProps {
    agent: any;
    onSave: (data: any) => Promise<void>;
    onCancel: () => void;
}

export default function AgentEditor({ agent, onSave, onCancel }: AgentEditorProps) {
    // Initialize form data from agent prop
    // We try to use existing values, or fallbacks
    const [formData, setFormData] = useState({
        name: agent.name || '',
        shortDescription: agent.shortDescription || agent.description || '',
        businessDomain: agent.businessDomain || agent.domain || 'Customer Experience',
        version: agent.version || '1.0.0',
        status: agent.status || 'upcoming',
        // These might be passed in differently depending on if they were fetched or generated
        cardContent: agent.cardContent || agent.markdown_content || '',
        manifestContent: agent.manifestContent || agent.manifest_json ? (typeof agent.manifest_json === 'string' ? agent.manifest_json : JSON.stringify(agent.manifest_json, null, 2)) : '',
    });

    const [activeTab, setActiveTab] = useState<'details' | 'card' | 'manifest'>('details');
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        setError('');
        setSuccess('');

        try {
            // Validate JSON
            let validJson = null;
            try {
                validJson = JSON.parse(formData.manifestContent);
            } catch (e) {
                throw new Error('Invalid JSON in Manifest. Please fix syntax errors.');
            }

            // Call parent save handler
            await onSave({
                ...formData,
                manifestContent: validJson // Send parsed object or let parent handle
            });

            setSuccess('Changes saved successfully!');
        } catch (err: any) {
            setError(err.message || 'Failed to save changes.');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col h-full bg-gray-50 min-h-screen">
            {/* Sticky Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-30 px-6 py-4 flex items-center justify-between shadow-sm">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">Edit Agent: {formData.name}</h2>
                    <p className="text-xs text-gray-500">Make changes to agent details, card, and manifest.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button type="button" onClick={onCancel} className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors">
                        Cancel
                    </button>
                    <button type="submit" disabled={isSaving} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-red-700 font-medium flex items-center gap-2 transition-colors shadow-sm disabled:opacity-50">
                        {isSaving ? 'Saving...' : <><Save className="w-4 h-4" /> Save Changes</>}
                    </button>
                </div>
            </div>

            {/* Notifications */}
            {error && (
                <div className="bg-red-50 text-red-700 p-4 mx-6 mt-6 rounded-lg border border-red-200 flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
                    <AlertCircle className="w-5 h-5 shrink-0" /> {error}
                </div>
            )}
            {success && (
                <div className="bg-green-50 text-green-700 p-4 mx-6 mt-6 rounded-lg border border-green-200 flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
                    <CheckCircle className="w-5 h-5 shrink-0" /> {success}
                </div>
            )}

            {/* Tabs */}
            <div className="px-6 mt-6 border-b border-gray-200 bg-white mx-6 rounded-t-lg border-t border-l border-r">
                <div className="flex gap-1 pt-2">
                    <button
                        type="button"
                        onClick={() => setActiveTab('details')}
                        className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${activeTab === 'details' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        General Details
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab('card')}
                        className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${activeTab === 'card' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        Agent Card (Markdown)
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab('manifest')}
                        className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${activeTab === 'manifest' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        Manifest (JSON)
                    </button>
                </div>
            </div>

            <div className="p-8 mx-6 bg-white border-b border-l border-r border-gray-200 rounded-b-lg mb-12 shadow-sm min-h-[500px]">
                {activeTab === 'details' && (
                    <div className="max-w-4xl space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Agent Name</label>
                                <input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="e.g. CallAudit Agent" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Business Domain</label>
                                <select value={formData.businessDomain} onChange={e => setFormData({ ...formData, businessDomain: e.target.value })} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none bg-white">
                                    {['Customer Experience', 'Network Operations', 'Governance', 'Assurance', 'Fulfillment', 'Commercial', 'Architecture'].map(d => (
                                        <option key={d} value={d}>{d}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Version</label>
                                <input type="text" value={formData.version} onChange={e => setFormData({ ...formData, version: e.target.value })} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="1.0.0" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                                <select value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value })} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none bg-white">
                                    <option value="upcoming">Upcoming</option>
                                    <option value="wip">Work In Progress</option>
                                    <option value="deployed">Deployed</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Short Description</label>
                            <p className="text-xs text-gray-500 mb-2">Brief overview shown on the agent card.</p>
                            <textarea value={formData.shortDescription} onChange={e => setFormData({ ...formData, shortDescription: e.target.value })} rows={4} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-y" placeholder="Enter a brief description..." />
                        </div>
                    </div>
                )}

                {activeTab === 'card' && (
                    <div className="flex flex-col h-[600px]">
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-semibold text-gray-700">Markdown Content</label>
                            <span className="text-xs text-gray-500">Supports standard Markdown syntax</span>
                        </div>
                        <textarea
                            value={formData.cardContent}
                            onChange={e => setFormData({ ...formData, cardContent: e.target.value })}
                            className="flex-1 w-full border border-gray-300 rounded-lg p-4 font-mono text-sm leading-relaxed focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none bg-gray-50"
                            spellCheck={false}
                        />
                    </div>
                )}

                {activeTab === 'manifest' && (
                    <div className="flex flex-col h-[600px]">
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-semibold text-gray-700">JSON Manifest</label>
                            <span className="text-xs text-gray-500">Must be valid JSON</span>
                        </div>
                        <textarea
                            value={formData.manifestContent}
                            onChange={e => setFormData({ ...formData, manifestContent: e.target.value })}
                            className="flex-1 w-full border border-gray-300 rounded-lg p-4 font-mono text-sm leading-relaxed focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none text-blue-800 bg-gray-50"
                            spellCheck={false}
                        />
                    </div>
                )}
            </div>
        </form>
    );
}
