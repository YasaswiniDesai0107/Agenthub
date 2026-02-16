'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Bot, Hexagon } from 'lucide-react';
import AgentCard from '@/components/AgentCard';
import Filters from '@/components/Filters';
import Stats from '@/components/Stats';
import { mockAgents } from '@/data/mockAgents';
import DualArtifactsModal from '@/components/DualArtifactsModal';
import { generateManifest, generateAgentCardMarkdown } from '@/utils/agentGenerators';
import { Agent } from '@/types/agent';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [activeArtifactAgent, setActiveArtifactAgent] = useState<Agent | null>(null);

  useEffect(() => {
    const handleOpenArtifacts = (e: any) => {
      setActiveArtifactAgent(e.detail.agent);
    };
    window.addEventListener('open-artifacts', handleOpenArtifacts);
    return () => window.removeEventListener('open-artifacts', handleOpenArtifacts);
  }, []);

  // Filter agents based on search and filters
  const filteredAgents = useMemo(() => {
    return mockAgents.filter(agent => {
      // Search filter
      const matchesSearch =
        agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.businessDomain.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.goals.some(goal => goal.toLowerCase().includes(searchQuery.toLowerCase()));

      // Domain filter
      const matchesDomain = selectedDomains.length === 0 || selectedDomains.includes(agent.businessDomain);

      // Status filter
      const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes(agent.status);

      return matchesSearch && matchesDomain && matchesStatus;
    });
  }, [searchQuery, selectedDomains, selectedStatuses]);

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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {activeArtifactAgent && (
        <DualArtifactsModal
          isOpen={!!activeArtifactAgent}
          onClose={() => setActiveArtifactAgent(null)}
          agentName={activeArtifactAgent.name}
          manifest={generateManifest(activeArtifactAgent)}
          agentCard={generateAgentCardMarkdown(activeArtifactAgent)}
        />
      )}
      {/* Enterprise Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container-custom py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <Hexagon className="w-5 h-5 text-white fill-current" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 leading-none">Agent HUB</h1>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Internal Marketplace</p>
            </div>
          </div>

          <div className="flex-1 max-w-xl mx-auto px-8 hidden md:block">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search for agents, capabilities, or domains..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 text-sm rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-sm text-right hidden sm:block">
              <p className="font-semibold text-gray-900">Prodapt Solutions</p>
              <p className="text-xs text-gray-500">Enterprise Edition</p>
            </div>
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
              <span className="text-xs font-bold text-gray-600">PS</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container-custom py-8">

        {/* Page Title & Stats */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Overview</h2>
          <p className="text-gray-500 mb-6">Real-time metrics for deployed AI agents across the enterprise.</p>
          <Stats agents={filteredAgents.length > 0 ? filteredAgents : mockAgents} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <Filters
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

            {/* Agent cards */}
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
                    setSearchQuery('');
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
    </div>
  );
}
