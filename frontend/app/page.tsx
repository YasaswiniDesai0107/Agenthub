'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';
import AgentCard from '@/components/AgentCard';
import Filters from '@/components/Filters';
import Stats from '@/components/Stats';
import { Agent } from '@/types/agent';
import { useAuth } from '@/contexts/AuthContext';
import DualArtifactsModal from '@/components/DualArtifactsModal';


function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [activeArtifactAgent, setActiveArtifactAgent] = useState<any>(null); // Restored state

  // const [agents, setAgents] = useState<any[]>([]);
  // const [loading, setLoading] = useState(true);

  const [agents, setAgents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const token = localStorage.getItem('agenthub_token');
        const headers: HeadersInit = token ? { 'Authorization': `Bearer ${token}` } : {};
        const res = await fetch('/api/agents', { headers });
        const json = await res.json();

        // Handle array response directly (if simplified backend) OR { success: true, data: ... }
        let rawAgents = [];
        if (Array.isArray(json)) {
          rawAgents = json;
        } else if (json.success && json.data && Array.isArray(json.data)) {
          rawAgents = json.data; // Handle both formats robustly
        } else if (json.success && json.data && json.data.agents) {
          rawAgents = json.data.agents;
        }

        const mapped = rawAgents.map((a: any, idx: number) => ({
          id: a.id,
          displayId: a.display_id || `A-${String(idx + 1).padStart(3, '0')}`, // Use Excel A-001 ID, fallback to index
          name: a.name,
          businessDomain: a.domain || '', // Map DB column 'domain' -> 'businessDomain'
          shortDescription: a.short_description || a.description || '',
          description: a.description || '',
          status: (a.status === 'WORK_IN_PROGRESS' || a.status === 'wip') ? 'wip' :
            (a.status === 'DEPLOYED' || a.status === 'deployed') ? 'deployed' : 'upcoming',
          version: a.version,
          viewCount: a.view_count || 0,
          goals: []
        }));
        setAgents(mapped);
      } catch (e) {
        console.error('Error fetching agents:', e);
      } finally {
        setLoading(false);
      }
    };
    fetchAgents();
  }, []);

  useEffect(() => {
    const handleOpenArtifacts = async (e: any) => {
      const partial = e.detail.agent;
      // Fetch full details for manifest/card from API
      try {
        const token = localStorage.getItem('agenthub_token');
        const headers: HeadersInit = token ? { 'Authorization': `Bearer ${token}` } : {};
        const res = await fetch(`/api/agents/${partial.id}`, { headers });
        const json = await res.json();
        if (json.success) {
          const data = json.data;
          let manifestJson = {};
          try { manifestJson = JSON.parse(data.manifest?.manifest_json || '{}'); } catch (e) { }

          // Construct full agent object for modal
          const fullAgent = {
            ...partial,
            cardContent: data.card?.markdown_content || '',
            manifestContent: data.manifest?.manifest_json ? JSON.stringify(manifestJson, null, 2) : ''
          };
          setActiveArtifactAgent(fullAgent);
        }
      } catch (e) {
        console.error(e);
      }
    };
    window.addEventListener('open-artifacts', handleOpenArtifacts);
    return () => window.removeEventListener('open-artifacts', handleOpenArtifacts);
  }, []);

  // Filter agents based on search and filters
  // CRITICAL: 'agents' must be in the dependency array so this recomputes after async fetch
  const filteredAgents = useMemo(() => {
    return agents.filter(agent => {
      const q = searchQuery.toLowerCase();
      const matchesSearch = !q ||
        (agent.name || '').toLowerCase().includes(q) ||
        (agent.shortDescription || '').toLowerCase().includes(q) ||
        (agent.businessDomain || '').toLowerCase().includes(q) ||
        (agent.goals || []).some((goal: string) => goal.toLowerCase().includes(q));

      const matchesDomain = selectedDomains.length === 0 || selectedDomains.includes(agent.businessDomain);
      const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes(agent.status);

      return matchesSearch && matchesDomain && matchesStatus;
    });
  }, [agents, searchQuery, selectedDomains, selectedStatuses]);

  const handleDomainToggle = (domain: string) => {
    setSelectedDomains(prev =>
      prev.includes(domain) ? prev.filter(d => d !== domain) : [...prev, domain]
    );
  };

  const handleStatusToggle = (status: string) => {
    setSelectedStatuses(prev =>
      prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]
    );
  };

  const handleClearFilters = () => {
    setSelectedDomains([]);
    setSelectedStatuses([]);
  };

  // Derive unique domain list from loaded agents (sorted alphabetically)
  const uniqueDomains = useMemo(() => {
    const set = new Set(agents.map(a => a.businessDomain).filter(Boolean));
    return Array.from(set).sort();
  }, [agents]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {activeArtifactAgent && (
        <DualArtifactsModal
          isOpen={!!activeArtifactAgent}
          onClose={() => setActiveArtifactAgent(null)}
          agentName={activeArtifactAgent.name}
          manifest={activeArtifactAgent.manifestContent || ''}
          agentCard={activeArtifactAgent.cardContent || ''}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 container-custom py-8">

        {/* Page Title & Stats */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Overview</h2>
          <p className="text-gray-500 mb-6">Real-time metrics for deployed AI agents across the enterprise.</p>
          <Stats agents={filteredAgents.length > 0 ? filteredAgents : agents} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <Filters
              domains={uniqueDomains}
              selectedDomains={selectedDomains}
              selectedStatuses={selectedStatuses}
              onDomainToggle={handleDomainToggle}
              onStatusToggle={handleStatusToggle}
              onClearAll={handleClearFilters}
            />
          </aside>

          {/* Agent Grid */}
          <section className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                Available Agents
                <span className="bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs font-medium">
                  {filteredAgents.length}
                </span>
              </h3>
              <div className="text-sm text-gray-500">
                Sorted by: <span className="font-medium text-gray-900">Relevance</span>
              </div>
            </div>

            {filteredAgents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredAgents.map((agent, index) => (
                  <AgentCard key={agent.id} agent={agent} index={index} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-gray-200 p-12 text-center shadow-sm">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center">
                  <Bot className="w-8 h-8 text-gray-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No agents found</h3>
                <p className="text-gray-500 mb-6 max-w-sm mx-auto">
                  We couldn't find any agents matching your current filters. Try adjusting your search criteria.
                </p>
                <button
                  onClick={() => {
                    const params = new URLSearchParams(window.location.search);
                    params.delete('q');
                    router.replace(`/?${params.toString()}`);
                    handleClearFilters();
                  }}
                  className="btn btn-primary"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-8">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <span className="text-sm font-bold text-gray-900">Agent</span>
              <span className="text-sm font-bold text-primary">Hub</span>
              <span className="text-xs text-gray-400 ml-2">Agents Catalog for Enterprise</span>
            </div>
          </div>
          <p className="text-xs text-gray-400">© 2025 AgentHub · Enterprise Edition · All rights reserved</p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 text-gray-500 text-sm font-medium animate-pulse">
        Loading Agent Hub Dashboard...
      </div>
    }>
      <HomeContent />
    </Suspense>
  );
}
