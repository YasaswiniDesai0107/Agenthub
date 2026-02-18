'use client';

import { useState, useRef, useEffect } from 'react';
import {
    Search, ChevronDown, LogOut, Settings, User,
    LayoutDashboard, Bell, Shield
} from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

interface HeaderProps {
    searchQuery?: string;
    onSearchChange?: (query: string) => void;
    showSearch?: boolean;
}

// ─── Nav items — dropdown-ready structure ──────────────────────────────────────
const NAV_ITEMS = [
    { label: 'Catalog', href: '/', key: 'catalog', dropdownItems: [] },
    { label: 'Solutions', href: '/solutions', key: 'solutions', dropdownItems: [] },
    { label: 'Deploy', href: '/deploy', key: 'deploy', dropdownItems: [] },
    { label: 'Publish', href: '/publish', key: 'publish', dropdownItems: [] },
    { label: 'Observability', href: '/observability', key: 'observability', dropdownItems: [] },
] as const;

type NavKey = typeof NAV_ITEMS[number]['key'];

function NavDropdownItem({ item, isActive }: { item: typeof NAV_ITEMS[number]; isActive: boolean }) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const hasDropdown = item.dropdownItems.length > 0;

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    return (
        <div ref={ref} className="relative h-full flex items-stretch">
            <Link
                href={item.href}
                onMouseEnter={() => hasDropdown && setOpen(true)}
                onMouseLeave={() => hasDropdown && setOpen(false)}
                className={`
                    flex items-center gap-1.5 px-5 h-full text-sm font-semibold
                    whitespace-nowrap transition-all duration-150 relative group
                    ${isActive
                        ? 'text-white bg-white/15'
                        : 'text-white/85 hover:text-white hover:bg-white/10'
                    }
                `}
            >
                {item.label}
                {/* Dropdown chevron — always rendered for future-readiness */}
                <ChevronDown className={`w-3 h-3 opacity-60 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                {/* Active underline */}
                {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-white rounded-full" />
                )}
            </Link>

            {/* Dropdown panel — hidden until items exist */}
            {hasDropdown && open && (
                <div
                    className="absolute top-full left-0 mt-0 min-w-[180px] bg-white rounded-b-lg shadow-xl border border-gray-100 py-1 z-50"
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                >
                    {item.dropdownItems.map((di: string) => (
                        <a key={di} href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                            {di}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Header({ searchQuery, onSearchChange, showSearch = true }: HeaderProps) {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    // Internal state for global search when not controlled
    const [localSearch, setLocalSearch] = useState(searchParams?.get('q') || '');

    // Determine if we are in controlled mode (props provided) or global mode
    const isControlled = onSearchChange !== undefined;

    // Update local state when URL changes (for deep linking)
    useEffect(() => {
        if (!isControlled && searchParams?.get('q') !== null) {
            setLocalSearch(searchParams.get('q') || '');
        }
    }, [searchParams, isControlled]);

    const handleSearch = (val: string) => {
        if (isControlled) {
            onSearchChange?.(val);
        } else {
            setLocalSearch(val);
            // Debounce or Enter key could be better, but for now direct update
            // Ideally we only push on Enter or debounce, but let's keep it simple for now
            // Actually, for global search, usually we redirect to home
            if (pathname !== '/') {
                // If not on home, typing redirects to home? Or maybe just keeps state? 
                // Let's redirect on Enter to avoid jumping user while typing
            } else {
                // If on home, update URL
                const params = new URLSearchParams(window.location.search);
                if (val) params.set('q', val);
                else params.delete('q');
                router.replace(`/?${params.toString()}`);
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !isControlled) {
            const params = new URLSearchParams();
            if (localSearch) params.set('q', localSearch);
            router.push(`/?${params.toString()}`);
        }
    };

    const [profileOpen, setProfileOpen] = useState(false);
    const profileRef = useRef<HTMLDivElement>(null);
    const { user, logout, isAdmin } = useAuth();

    const getActiveKey = (): NavKey => {
        if (pathname === '/' || pathname?.startsWith('/agent')) return 'catalog';
        if (pathname?.startsWith('/solutions')) return 'solutions';
        if (pathname?.startsWith('/deploy')) return 'deploy';
        if (pathname?.startsWith('/publish')) return 'publish';
        if (pathname?.startsWith('/observability')) return 'observability';
        return 'catalog';
    };
    const activeKey = getActiveKey();

    // Close profile dropdown on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
                setProfileOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    return (
        <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-200">

            {/* ── ROW 1: Logo | Search | Profile ─────────────────────────────── */}
            <div className="w-full border-b border-gray-100">
                <div className="container-custom flex items-center h-14 gap-4">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-sm group-hover:shadow transition-shadow">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="leading-none">
                            <span className="block text-[17px] font-bold tracking-tight">
                                <span className="text-gray-900">Agent</span>
                                <span className="text-primary">Hub</span>
                            </span>
                            <span className="block text-[10px] text-gray-400 font-medium tracking-wide">Agents Catalog for Enterprise</span>
                        </div>
                    </Link>

                    {/* Search — centered, takes remaining space */}
                    {showSearch && (
                        <div className="flex-1 flex justify-center px-4">
                            <div className="relative w-full max-w-lg group">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                                <input
                                    id="header-search"
                                    type="text"
                                    placeholder="Search agents, capabilities, domains..."
                                    value={isControlled ? searchQuery : localSearch}
                                    onChange={(e) => handleSearch(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="w-full bg-gray-50 border border-gray-200 text-sm rounded-lg py-2 pl-9 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400"
                                />
                            </div>
                        </div>
                    )}

                    {/* Right: Bell + Profile */}
                    <div className="flex items-center gap-2 shrink-0">
                        <button
                            className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            aria-label="Notifications"
                        >
                            <Bell className="w-4 h-4 text-gray-500" />
                            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-primary rounded-full" />
                        </button>

                        {user ? (
                            <div className="relative" ref={profileRef}>
                                <button
                                    id="user-profile-btn"
                                    onClick={() => setProfileOpen(v => !v)}
                                    className="flex items-center gap-2 hover:bg-gray-50 rounded-lg px-2 py-1.5 transition-colors"
                                >
                                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">
                                        {user.initials}
                                    </div>
                                    <div className="hidden sm:block text-left leading-none">
                                        <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                                        <p className="text-[10px] text-gray-500 capitalize mt-0.5">{user.role}</p>
                                    </div>
                                    <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {profileOpen && (
                                    <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50">
                                        {/* User info */}
                                        <div className="px-4 py-3 border-b border-gray-100">
                                            <p className="text-sm font-bold text-gray-900">{user.name}</p>
                                            <p className="text-xs text-gray-500 mt-0.5">{user.email}</p>
                                            <span className={`inline-flex mt-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${isAdmin
                                                ? 'bg-primary/10 text-primary'
                                                : 'bg-gray-100 text-gray-600'
                                                }`}>
                                                {user.role}
                                            </span>
                                        </div>

                                        <div className="py-1">
                                            <Link
                                                href="/profile"
                                                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                                onClick={() => setProfileOpen(false)}
                                            >
                                                <User className="w-4 h-4 text-gray-400" />
                                                My Profile
                                            </Link>

                                            {/* Admin-only: Manage dropdown */}
                                            {isAdmin && (
                                                <Link
                                                    href="/admin"
                                                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                                    onClick={() => setProfileOpen(false)}
                                                >
                                                    <Shield className="w-4 h-4 text-primary" />
                                                    <span>Manage</span>
                                                    <span className="ml-auto text-[10px] bg-primary/10 text-primary font-bold px-1.5 py-0.5 rounded">Admin</span>
                                                </Link>
                                            )}

                                            <Link
                                                href="/settings"
                                                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                                onClick={() => setProfileOpen(false)}
                                            >
                                                <Settings className="w-4 h-4 text-gray-400" />
                                                Settings
                                            </Link>
                                        </div>

                                        <div className="border-t border-gray-100 py-1">
                                            <button
                                                onClick={() => { setProfileOpen(false); logout(); }}
                                                className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                                            >
                                                <LogOut className="w-4 h-4" />
                                                Sign Out
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors px-3 py-2">
                                    Sign In
                                </Link>
                                <Link href="/login" className="btn btn-primary text-sm py-2">
                                    Get Started
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* ── ROW 2: Full-width Red Navigation Bar ────────────────────────── */}
            <nav className="bg-primary w-full" aria-label="Main navigation">
                <div className="container-custom flex items-stretch h-10">
                    {NAV_ITEMS.map((item) => (
                        <NavDropdownItem
                            key={item.key}
                            item={item}
                            isActive={activeKey === item.key}
                        />
                    ))}
                </div>
            </nav>
        </header>
    );
}
