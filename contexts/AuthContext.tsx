'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// ─── Simplified 2-role model: admin | user ────────────────────────────────────
export type UserRole = 'admin' | 'user';

export interface AuthUser {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    initials: string;
    isActive: boolean;
}

export type Permission =
    | 'manage_users'
    | 'create_agent'
    | 'edit_agent'
    | 'edit_agent_card'
    | 'edit_manifest'
    | 'delete_agent'
    | 'approve_deployment'
    | 'change_status'
    | 'archive_agent'
    | 'view_audit_logs'
    | 'view_agents';

const PERMISSIONS: Record<UserRole, Permission[]> = {
    admin: [
        'manage_users',
        'create_agent',
        'edit_agent',
        'edit_agent_card',
        'edit_manifest',
        'delete_agent',
        'approve_deployment',
        'change_status',
        'archive_agent',
        'view_audit_logs',
        'view_agents',
    ],
    user: ['view_agents'],
};

interface AuthContextType {
    user: AuthUser | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
    logout: () => void;
    isAuthenticated: boolean;
    hasPermission: (action: Permission) => boolean;
    isAdmin: boolean;
}

// Demo users — only admin and user roles
const DEMO_USERS: Record<string, { password: string; user: AuthUser }> = {
    'admin@agenthub.com': {
        password: 'Admin@123',
        user: {
            id: 'usr-001',
            name: 'Admin User',
            email: 'admin@agenthub.com',
            role: 'admin',
            initials: 'AU',
            isActive: true,
        },
    },
    'user@agenthub.com': {
        password: 'User@123',
        user: {
            id: 'usr-002',
            name: 'Regular User',
            email: 'user@agenthub.com',
            role: 'user',
            initials: 'RU',
            isActive: true,
        },
    },
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
            const stored = localStorage.getItem('agenthub_user');
            if (stored) setUser(JSON.parse(stored));
        } catch {
            localStorage.removeItem('agenthub_user');
        }
        setIsLoading(false);
    }, []);

    const login = useCallback(async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
        setIsLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 700));
            const record = DEMO_USERS[email.toLowerCase()];
            if (!record) return { success: false, error: 'No account found with this email address.' };
            if (record.password !== password) return { success: false, error: 'Incorrect password. Please try again.' };
            if (!record.user.isActive) return { success: false, error: 'Your account has been deactivated. Contact your administrator.' };

            setUser(record.user);
            localStorage.setItem('agenthub_user', JSON.stringify(record.user));
            localStorage.setItem('agenthub_token', `demo-jwt-${record.user.id}-${Date.now()}`);
            return { success: true };
        } finally {
            setIsLoading(false);
        }
    }, []);

    const logout = useCallback(() => {
        setUser(null);
        localStorage.removeItem('agenthub_user');
        localStorage.removeItem('agenthub_token');
        window.location.href = '/login';
    }, []);

    const hasPermission = useCallback((action: Permission): boolean => {
        if (!user) return false;
        return PERMISSIONS[user.role]?.includes(action) ?? false;
    }, [user]);

    const isAdmin = user?.role === 'admin';

    return (
        <AuthContext.Provider value={{
            user,
            isLoading,
            login,
            logout,
            isAuthenticated: !!user,
            hasPermission,
            isAdmin,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
}
