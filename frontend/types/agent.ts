export type AgentStatus = 'upcoming' | 'wip' | 'deployed';

export type BusinessDomain = string; // Relaxed to allow DB values

export type Persona = string; // Relaxed to allow DB values

export interface Tool {
  name: string;
  description: string;
}

export interface KPI {
  name: string;
  target: string;
  current?: string;
}

export interface Agent {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  businessDomain: BusinessDomain;
  status: AgentStatus;
  viewCount: number;
  personas: Persona[];

  // Detailed information
  problemStatement: string;
  goals: string[];
  inScope: string[];
  outOfScope: string[];
  operationalDetails: string;
  inputs: string[];
  outputs: string[];
  tools: Tool[];
  securityControls: string[];
  kpis: KPI[];

  // Metadata
  owner: string;
  createdDate: string;
  lastUpdated: string;
  version: string;
  features?: string[];
  techStack?: string[];
  agentCard?: string;
  manifest?: any;
}
