'use client';

import { useState } from 'react';
import { Eye, EyeOff, Layers, AlertCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function LoginPage() {
    const router = useRouter();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }
        setIsLoading(true);
        const result = await login(email, password);
        setIsLoading(false);
        if (result.success) {
            router.push('/');
        } else {
            setError(result.error || 'Login failed. Please try again.');
        }
    };

    const demoAccounts = [
        { label: 'Admin', email: 'admin@agenthub.com', password: 'Admin@123', color: 'bg-primary text-white border-primary' },
        { label: 'User', email: 'user@agenthub.com', password: 'User@123', color: 'bg-gray-100 text-gray-700 border-gray-200' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Left Panel - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-primary flex-col justify-between p-12 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
                    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-16">
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                            <Layers className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold leading-none">
                                <span className="text-white">Agent</span>
                                <span className="text-red-200">Hub</span>
                            </h1>
                            <p className="text-white/70 text-xs font-medium">Agents Catalog for Enterprise</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-white leading-tight">
                            Enterprise AI Agent<br />Management Platform
                        </h2>
                        <p className="text-white/80 text-lg leading-relaxed max-w-md">
                            Discover, deploy, and manage AI agents across your enterprise. The single source of truth for all intelligent systems.
                        </p>
                    </div>
                </div>

                <div className="relative z-10 space-y-4">
                    {[
                        { icon: '🔐', text: 'Role-based access control' },
                        { icon: '📊', text: 'Real-time observability' },
                        { icon: '🚀', text: 'One-click deployment' },
                    ].map((item) => (
                        <div key={item.text} className="flex items-center gap-3">
                            <span className="text-xl">{item.icon}</span>
                            <span className="text-white/90 font-medium">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Panel - Login Form */}
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    {/* Mobile logo */}
                    <div className="lg:hidden flex items-center gap-3 mb-8 justify-center">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                            <Layers className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">
                                <span className="text-gray-900">Agent</span>
                                <span className="text-primary">Hub</span>
                            </h1>
                            <p className="text-gray-500 text-xs">Agents Catalog for Enterprise</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-1">Welcome back</h2>
                            <p className="text-gray-500 text-sm">Sign in to your AgentHub account</p>
                        </div>

                        {error && (
                            <div className="mb-6 flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                <p className="text-sm text-red-700">{error}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="login-email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                                    Email Address
                                </label>
                                <input
                                    id="login-email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@company.com"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400"
                                    autoComplete="email"
                                    required
                                />
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-1.5">
                                    <label htmlFor="login-password" className="block text-sm font-semibold text-gray-700">
                                        Password
                                    </label>
                                    <Link href="/forgot-password" className="text-xs text-primary hover:underline font-medium">
                                        Forgot password?
                                    </Link>
                                </div>
                                <div className="relative">
                                    <input
                                        id="login-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400"
                                        autoComplete="current-password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <button
                                id="login-submit"
                                type="submit"
                                disabled={isLoading}
                                className="w-full btn btn-primary py-3 text-base font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Signing in...
                                    </span>
                                ) : 'Sign In'}
                            </button>
                        </form>

                        {/* Demo accounts */}
                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Demo Accounts</p>
                            <div className="grid grid-cols-2 gap-2">
                                {demoAccounts.map((acc) => (
                                    <button
                                        key={acc.email}
                                        onClick={() => { setEmail(acc.email); setPassword(acc.password); setError(''); }}
                                        className={`text-left px-3 py-2 rounded-lg border text-xs font-medium transition-all hover:shadow-sm ${acc.color}`}
                                    >
                                        <span className="block font-bold">{acc.label}</span>
                                        <span className="opacity-70 text-[10px]">{acc.email}</span>
                                    </button>
                                ))}
                            </div>
                            <p className="text-[10px] text-gray-400 mt-2 text-center">Click a role to auto-fill credentials</p>
                        </div>
                    </div>

                    <p className="text-center text-xs text-gray-500 mt-6">
                        © 2025 AgentHub · Enterprise Edition · All rights reserved
                    </p>
                </div>
            </div>
        </div>
    );
}
