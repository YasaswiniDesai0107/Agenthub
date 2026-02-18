'use client';

import { useState } from 'react';
import { Layers, AlertCircle, CheckCircle, ArrowLeft, Mail } from 'lucide-react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (!email) {
            setError('Please enter your email address.');
            return;
        }
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false);
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="flex items-center gap-3 mb-8 justify-center">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                        <Layers className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">AgentHub</h1>
                        <p className="text-gray-500 text-xs">Agent client work</p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                    {!submitted ? (
                        <>
                            <div className="mb-8">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-1">Forgot password?</h2>
                                <p className="text-gray-500 text-sm">
                                    Enter your email and we'll send you a reset link.
                                </p>
                            </div>

                            {error && (
                                <div className="mb-6 flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <p className="text-sm text-red-700">{error}</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="forgot-email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                                        Email Address
                                    </label>
                                    <input
                                        id="forgot-email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@company.com"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full btn btn-primary py-3 text-base font-semibold disabled:opacity-60"
                                >
                                    {isLoading ? 'Sending...' : 'Send Reset Link'}
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="text-center py-4">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-green-600" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Check your email</h2>
                            <p className="text-gray-500 text-sm mb-6">
                                We've sent a password reset link to <strong>{email}</strong>. Check your inbox and follow the instructions.
                            </p>
                            <p className="text-xs text-gray-400">
                                Didn't receive it? Check your spam folder or{' '}
                                <button onClick={() => setSubmitted(false)} className="text-primary hover:underline font-medium">
                                    try again
                                </button>
                            </p>
                        </div>
                    )}

                    <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                        <Link href="/login" className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors font-medium">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
