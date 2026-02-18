'use client';

import { useState, useEffect } from 'react';
import {
    Users, Bot, Shield, BarChart3, Activity, Plus, Edit, Trash2,
    CheckCircle, XCircle, Clock, Eye, Search, Filter, MoreVertical,
    TrendingUp, AlertTriangle, RefreshCw, Download, ChevronDown,
    UserPlus, Settings, LogOut, Layers, History, Save, FileText, FileCode
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

// Mock data for admin portal with restricted roles
const MOCK_USERS = [
    { id: 'usr-001', name: 'Admin User', email: 'admin@agenthub.com', role: 'admin', isActive: true, createdAt: '2025-01-01', lastLogin: '2026-02-18' },
    { id: 'usr-002', name: 'Regular User', email: 'user@agenthub.com', role: 'user', isActive: true, createdAt: '2025-03-01', lastLogin: '2026-02-15' },
    { id: 'usr-003', name: 'John Doe', email: 'john@agenthub.com', role: 'user', isActive: true, createdAt: '2025-02-10', lastLogin: '2026-02-17' },
];

const MOCK_AUDIT_LOGS = [
    { id: 'log-001', user: 'Admin User', action: 'AGENT_CREATED', entity: 'CallAudit Agent', entityType: 'agent', timestamp: '2026-02-18T10:30:00Z' },
    { id: 'log-002', user: 'Admin User', action: 'STATUS_CHANGED', entity: 'CoachBot', entityType: 'agent', timestamp: '2026-02-18T09:15:00Z' },
    { id: 'log-003', user: 'Admin User', action: 'AGENT_EDITED', entity: 'CPNI-Guard Agent', entityType: 'agent', timestamp: '2026-02-17T16:45:00Z' },
    { id: 'log-004', user: 'Admin User', action: 'USER_CREATED', entity: 'john@agenthub.com', entityType: 'user', timestamp: '2026-02-17T14:00:00Z' },
];

type AdminTab = 'overview' | 'users' | 'agents' | 'audit';

const ROLE_COLORS: Record<string, string> = {
    admin: 'bg-primary/10 text-primary border-primary/20',
    user: 'bg-gray-100 text-gray-700 border-gray-200',
};

const ACTION_COLORS: Record<string, string> = {
    AGENT_CREATED: 'text-green-600 bg-green-50',
    AGENT_EDITED: 'text-blue-600 bg-blue-50',
    AGENT_DELETED: 'text-red-600 bg-red-50',
    AGENT_APPROVED: 'text-purple-600 bg-purple-50',
    STATUS_CHANGED: 'text-amber-600 bg-amber-50',
    USER_CREATED: 'text-green-600 bg-green-50',
    USER_DEACTIVATED: 'text-red-600 bg-red-50',
};

// Mock Agents for Management
const INITIAL_AGENTS = [
    { id: 'agent-001', name: 'Network Optimizer', domain: 'Network Operations', status: 'upcoming', version: '1.0.0' },
    { id: 'agent-002', name: 'Customer Assist', domain: 'Customer Experience', status: 'deployed', version: '2.1.0' },
    { id: 'agent-003', name: 'Compliance Guard', domain: 'Governance', status: 'wip', version: '0.9.5' },
];

export default function AdminPortal() {
    const router = useRouter();
    const { user, isLoading, isAdmin, logout } = useAuth();
    const [activeTab, setActiveTab] = useState<AdminTab>('overview');

    // User Management State
    const [userSearch, setUserSearch] = useState('');
    const [showCreateUser, setShowCreateUser] = useState(false);
    const [newUser, setNewUser] = useState({ name: '', email: '', role: 'user', password: '' });
    const [users, setUsers] = useState(MOCK_USERS);

    // Agent Management State
    const [agentSearch, setAgentSearch] = useState('');
    const [agents, setAgents] = useState(INITIAL_AGENTS);
    const [editingAgent, setEditingAgent] = useState<any | null>(null);

    const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    // Auth guard
    useEffect(() => {
        if (!isLoading && (!user || !isAdmin)) {
            router.push('/login');
        }
    }, [user, isLoading, isAdmin, router]);

    const showNotification = (type: 'success' | 'error', message: string) => {
        setNotification({ type, message });
        setTimeout(() => setNotification(null), 3000);
    };

    // User Actions
    const handleToggleUser = (userId: string) => {
        setUsers(prev => prev.map(u =>
            u.id === userId ? { ...u, isActive: !u.isActive } : u
        ));
        showNotification('success', 'User status updated successfully.');
    };

    const handleCreateUser = (e: React.FormEvent) => {
        e.preventDefault();
        const created = {
            id: `usr-${Date.now()}`,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role,
            isActive: true,
            createdAt: new Date().toISOString().split('T')[0],
            lastLogin: 'Never',
        };
        setUsers(prev => [...prev, created]);
        setNewUser({ name: '', email: '', role: 'user', password: '' });
        setShowCreateUser(false);
        showNotification('success', `User ${newUser.name} created successfully.`);
    };

    // Agent Actions
    const handleSaveAgent = (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingAgent) return;

        setAgents(prev => prev.map(a => a.id === editingAgent.id ? editingAgent : a));
        setEditingAgent(null);
        showNotification('success', 'Agent updated successfully.');
    };

    const handleDeleteAgent = (agentId: string) => {
        if (window.confirm('Are you sure you want to delete this agent? This action cannot be undone.')) {
            setAgents(prev => prev.filter(a => a.id !== agentId));
            showNotification('success', 'Agent deleted successfully.');
        }
    };

    const filteredUsers = users.filter(u =>
        u.name.toLowerCase().includes(userSearch.toLowerCase()) ||
        u.email.toLowerCase().includes(userSearch.toLowerCase())
    );

    const filteredAgents = agents.filter(a =>
        a.name.toLowerCase().includes(agentSearch.toLowerCase()) ||
        a.domain.toLowerCase().includes(agentSearch.toLowerCase())
    );

    if (isLoading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" /></div>;
    if (!user || !isAdmin) return null;

    const stats = [
        { label: 'Total Users', value: users.length, icon: Users, color: 'text-blue-600 bg-blue-50', change: 'Active accounts' },
        { label: 'Deployed Agents', value: agents.filter(a => a.status === 'deployed').length, icon: Bot, color: 'text-green-600 bg-green-50', change: 'Production ready' },
        { label: 'Pending Approvals', value: 0, icon: Clock, color: 'text-amber-600 bg-amber-50', change: 'All clear' },
        { label: 'Audit Events', value: MOCK_AUDIT_LOGS.length, icon: Activity, color: 'text-purple-600 bg-purple-50', change: 'System actions' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {notification && (
                <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border text-sm font-medium animate-in slide-in-from-top-2 duration-300 ${notification.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
                    {notification.type === 'success' ? <CheckCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                    {notification.message}
                </div>
            )}

            {/* Admin Portal Sub-Header & Tabs */}
            <div className="bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <Shield className="w-6 h-6 text-primary" />
                            Admin Portal
                        </h1>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex gap-1 border-b border-gray-100">
                        {([
                            { key: 'overview', label: 'Overview', icon: BarChart3 },
                            { key: 'users', label: 'User Management', icon: Users },
                            { key: 'agents', label: 'Agent Management', icon: Bot },
                            { key: 'audit', label: 'Audit Logs', icon: History },
                        ] as const).map(tab => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-all -mb-px ${activeTab === tab.key
                                    ? 'border-primary text-primary'
                                    : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'
                                    }`}
                            >
                                <tab.icon className="w-4 h-4" />
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-1">Dashboard Overview</h2>
                            <p className="text-gray-500">Platform health and activity summary</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {stats.map((stat) => (
                                <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.color}`}>
                                            <stat.icon className="w-5 h-5" />
                                        </div>
                                        <TrendingUp className="w-4 h-4 text-gray-300" />
                                    </div>
                                    <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                                    <p className="text-xs text-gray-400 mt-1">{stat.change}</p>
                                </div>
                            ))}
                        </div>

                        {/* Recent Activity */}
                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                                <h3 className="font-bold text-gray-900">Recent Activity</h3>
                                <button onClick={() => setActiveTab('audit')} className="text-sm text-primary hover:underline font-medium">View all →</button>
                            </div>
                            <div className="divide-y divide-gray-50">
                                {MOCK_AUDIT_LOGS.slice(0, 5).map((log) => (
                                    <div key={log.id} className="px-6 py-4 flex items-center gap-4">
                                        <div className={`px-2 py-1 rounded text-xs font-bold ${ACTION_COLORS[log.action] || 'text-gray-600 bg-gray-50'}`}>
                                            {log.action.replace(/_/g, ' ')}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-gray-900 font-medium truncate">
                                                <span className="text-gray-500">{log.user}</span> → {log.entity}
                                            </p>
                                        </div>
                                        <p className="text-xs text-gray-400 shrink-0">{new Date(log.timestamp).toLocaleDateString()}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Users Tab */}
                {activeTab === 'users' && (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-1">User Management</h2>
                                <p className="text-gray-500">Manage admins and users</p>
                            </div>
                            <button onClick={() => setShowCreateUser(true)} className="btn btn-primary flex items-center gap-2">
                                <UserPlus className="w-4 h-4" /> Create User
                            </button>
                        </div>

                        {/* Create User Modal */}
                        {showCreateUser && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                                <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md border border-gray-200 animate-in zoom-in-95 duration-200">
                                    <div className="p-6 border-b border-gray-100">
                                        <h3 className="text-lg font-bold text-gray-900">Create New User</h3>
                                    </div>
                                    <form onSubmit={handleCreateUser} className="p-6 space-y-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                                            <input type="text" value={newUser.name} onChange={e => setNewUser(p => ({ ...p, name: e.target.value }))} className="w-full input" placeholder="John Doe" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                                            <input type="email" value={newUser.email} onChange={e => setNewUser(p => ({ ...p, email: e.target.value }))} className="w-full input" placeholder="john@company.com" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Role</label>
                                            <select value={newUser.role} onChange={e => setNewUser(p => ({ ...p, role: e.target.value }))} className="w-full input bg-white">
                                                <option value="admin">Admin</option>
                                                <option value="user">User</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
                                            <input type="password" value={newUser.password} onChange={e => setNewUser(p => ({ ...p, password: e.target.value }))} className="w-full input" placeholder="Min. 8 characters" required />
                                        </div>
                                        <div className="flex gap-3 pt-2">
                                            <button type="button" onClick={() => setShowCreateUser(false)} className="flex-1 btn btn-secondary">Cancel</button>
                                            <button type="submit" className="flex-1 btn btn-primary">Create User</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}

                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="text-left px-6 py-3 text-xs font-bold text-gray-500 uppercase">User</th>
                                        <th className="text-left px-6 py-3 text-xs font-bold text-gray-500 uppercase">Role</th>
                                        <th className="text-left px-6 py-3 text-xs font-bold text-gray-500 uppercase">Status</th>
                                        <th className="text-left px-6 py-3 text-xs font-bold text-gray-500 uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredUsers.map((u) => (
                                        <tr key={u.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xs font-bold">
                                                        {u.name.slice(0, 2).toUpperCase()}
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-gray-900">{u.name}</p>
                                                        <p className="text-xs text-gray-500">{u.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold border ${ROLE_COLORS[u.role]}`}>
                                                    {u.role.toUpperCase()}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${u.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                                    <span className={`w-1.5 h-1.5 rounded-full ${u.isActive ? 'bg-green-500' : 'bg-gray-400'}`} />
                                                    {u.isActive ? 'Active' : 'Inactive'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <button onClick={() => handleToggleUser(u.id)} className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors ${u.isActive ? 'text-red-600 border-red-200 hover:bg-red-50' : 'text-green-600 border-green-200 hover:bg-green-50'}`}>
                                                    {u.isActive ? 'Deactivate' : 'Activate'}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Agents Tab */}
                {activeTab === 'agents' && (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-1">Agent Management</h2>
                                <p className="text-gray-500">Edit, approve, and manage AI agents</p>
                            </div>
                            <button className="btn btn-primary flex items-center gap-2">
                                <Plus className="w-4 h-4" /> Create Agent
                            </button>
                        </div>

                        {/* Edit Agent Modal */}
                        {editingAgent && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                                <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg border border-gray-200 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
                                    <div className="p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
                                        <h3 className="text-lg font-bold text-gray-900">Edit Agent: {editingAgent.name}</h3>
                                    </div>
                                    <form onSubmit={handleSaveAgent} className="p-6 space-y-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Agent Name</label>
                                            <input type="text" value={editingAgent.name} onChange={e => setEditingAgent({ ...editingAgent, name: e.target.value })} className="w-full input" required />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Status</label>
                                                <select value={editingAgent.status} onChange={e => setEditingAgent({ ...editingAgent, status: e.target.value })} className="w-full input bg-white">
                                                    <option value="upcoming">Upcoming</option>
                                                    <option value="wip">Work in Progress</option>
                                                    <option value="deployed">Deployed</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Version</label>
                                                <input type="text" value={editingAgent.version} onChange={e => setEditingAgent({ ...editingAgent, version: e.target.value })} className="w-full input" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Domain</label>
                                            <select value={editingAgent.domain} onChange={e => setEditingAgent({ ...editingAgent, domain: e.target.value })} className="w-full input bg-white">
                                                <option>Customer Experience</option>
                                                <option>Network Operations</option>
                                                <option>Governance</option>
                                                <option>Assurance</option>
                                                <option>Fulfillment</option>
                                                <option>Commercial</option>
                                            </select>
                                        </div>

                                        <div className="flex gap-3">
                                            <button type="button" className="flex-1 btn bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center justify-center gap-2">
                                                <FileText className="w-4 h-4" /> Edit Card Markdown
                                            </button>
                                            <button type="button" className="flex-1 btn bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center justify-center gap-2">
                                                <FileCode className="w-4 h-4" /> Edit Manifest JSON
                                            </button>
                                        </div>

                                        <div className="flex gap-3 pt-4 border-t border-gray-100 mt-2">
                                            <button type="button" onClick={() => setEditingAgent(null)} className="flex-1 btn btn-secondary">Cancel</button>
                                            <button type="submit" className="flex-1 btn btn-primary flex items-center justify-center gap-2">
                                                <Save className="w-4 h-4" /> Save Changes
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}

                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="text-left px-6 py-3 text-xs font-bold text-gray-500 uppercase">Agent Name</th>
                                        <th className="text-left px-6 py-3 text-xs font-bold text-gray-500 uppercase">Domain</th>
                                        <th className="text-left px-6 py-3 text-xs font-bold text-gray-500 uppercase">Status</th>
                                        <th className="text-left px-6 py-3 text-xs font-bold text-gray-500 uppercase">Version</th>
                                        <th className="text-right px-6 py-3 text-xs font-bold text-gray-500 uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredAgents.map((a) => (
                                        <tr key={a.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 font-semibold text-gray-900">{a.name}</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">{a.domain}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex px-2 px-0.5 rounded text-xs font-bold uppercase ${a.status === 'deployed' ? 'bg-green-100 text-green-700' :
                                                    a.status === 'wip' ? 'bg-amber-100 text-amber-700' :
                                                        'bg-gray-100 text-gray-700'
                                                    }`}>
                                                    {a.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm font-mono text-gray-600">{a.version}</td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button onClick={() => setEditingAgent(a)} className="p-1.5 hover:bg-gray-100 rounded text-gray-500 hover:text-primary transition-colors" title="Edit Agent">
                                                        <Edit className="w-4 h-4" />
                                                    </button>
                                                    <button onClick={() => handleDeleteAgent(a.id)} className="p-1.5 hover:bg-gray-100 rounded text-gray-500 hover:text-red-600 transition-colors" title="Delete Agent">
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Permissions Matrix */}
                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mt-8">
                            <div className="p-6 border-b border-gray-100">
                                <h3 className="font-bold text-gray-900">Permissions Matrix</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-gray-50 border-b border-gray-100">
                                            <th className="text-left px-6 py-3 text-xs font-bold text-gray-500 uppercase">Action</th>
                                            <th className="text-center px-6 py-3 text-xs font-bold text-gray-500 uppercase">Admin</th>
                                            <th className="text-center px-6 py-3 text-xs font-bold text-gray-500 uppercase">User</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {[
                                            { action: 'Manage Users & Roles', admin: true, user: false },
                                            { action: 'Create / Delete Agents', admin: true, user: false },
                                            { action: 'Edit Agent Details', admin: true, user: false },
                                            { action: 'Edit Agent Card (Markdown)', admin: true, user: false },
                                            { action: 'Edit Manifest (JSON)', admin: true, user: false },
                                            { action: 'View Agents', admin: true, user: true },
                                        ].map((row) => (
                                            <tr key={row.action}>
                                                <td className="px-6 py-3 text-sm font-medium text-gray-700">{row.action}</td>
                                                <td className="px-6 py-3 text-center">{row.admin ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : <XCircle className="w-5 h-5 text-gray-300 mx-auto" />}</td>
                                                <td className="px-6 py-3 text-center">{row.user ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : <XCircle className="w-5 h-5 text-gray-300 mx-auto" />}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* Audit Tab */}
                {activeTab === 'audit' && (
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                            <div className="divide-y divide-gray-50">
                                {MOCK_AUDIT_LOGS.map((log) => (
                                    <div key={log.id} className="px-6 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className={`px-2 py-0.5 rounded text-xs font-bold ${ACTION_COLORS[log.action]}`}>{log.action.replace(/_/g, ' ')}</span>
                                                <span className="text-xs text-gray-500">{new Date(log.timestamp).toLocaleString()}</span>
                                            </div>
                                            <p className="text-sm text-gray-900"><span className="font-semibold">{log.user}</span> performed action on <span className="font-semibold">{log.entity}</span></p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
