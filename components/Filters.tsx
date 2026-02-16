'use client';

import { motion } from 'framer-motion';
import { Filter, X, Check } from 'lucide-react';
import { AgentStatus } from '@/types/agent';

interface FiltersProps {
    selectedDomains: string[];
    selectedStatuses: string[];
    onDomainToggle: (domain: string) => void;
    onStatusToggle: (status: string) => void;
    onClearAll: () => void;
}

const domains = [
    'Customer Experience',
    'Network Operations',
    'Governance',
    'Assurance',
    'Fulfillment',
    'Commercial',
    'Architecture'
];

const statuses: AgentStatus[] = ['active', 'planned', 'deprecated', 'production'];

export default function Filters({
    selectedDomains,
    selectedStatuses,
    onDomainToggle,
    onStatusToggle,
    onClearAll
}: FiltersProps) {
    const hasActiveFilters = selectedDomains.length > 0 || selectedStatuses.length > 0;

    return (
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 sticky top-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold text-gray-900">Filters</h3>
                </div>
                {hasActiveFilters && (
                    <button
                        onClick={onClearAll}
                        className="text-sm text-gray-500 hover:text-primary transition-colors flex items-center gap-1 font-medium"
                    >
                        <X className="w-4 h-4" />
                        Clear All
                    </button>
                )}
            </div>

            {/* Business Domains */}
            <div className="mb-8">
                <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">Business Domain</p>
                <div className="space-y-2">
                    {domains.map((domain) => {
                        const isSelected = selectedDomains.includes(domain);
                        return (
                            <button
                                key={domain}
                                onClick={() => onDomainToggle(domain)}
                                className={`
                                    w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-all duration-200
                                    ${isSelected
                                        ? 'bg-red-50 text-primary font-semibold border border-red-100'
                                        : 'text-gray-700 hover:bg-gray-50 border border-transparent'
                                    }
                                `}
                            >
                                {domain}
                                {isSelected && <Check className="w-4 h-4 text-primary" />}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Status */}
            <div>
                <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">Status</p>
                <div className="flex flex-wrap gap-2">
                    {statuses.map((status) => {
                        const isSelected = selectedStatuses.includes(status);
                        return (
                            <button
                                key={status}
                                onClick={() => onStatusToggle(status)}
                                className={`
                                    px-3 py-1.5 rounded-md text-xs font-medium border capitalize transition-all duration-200
                                    ${isSelected
                                        ? 'bg-gray-900 text-white border-gray-900 shadow-sm'
                                        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                    }
                                `}
                            >
                                {status}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
