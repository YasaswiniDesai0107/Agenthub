'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import { Suspense } from 'react';

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAuthPage = pathname === '/login' || pathname === '/forgot-password';

    return (
        <div className="flex flex-col min-h-screen">
            {!isAuthPage && (
                <Suspense fallback={<div className="h-24 bg-white shadow-sm sticky top-0 z-50" />}>
                    <Header />
                </Suspense>
            )}
            <div className="flex-1 flex flex-col">
                {children}
            </div>
        </div>
    );
}
