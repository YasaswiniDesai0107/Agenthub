export type AgentStatus = 'active' | 'planned' | 'deprecated' | 'production';

export type BusinessDomain = 
  | 'Customer Experience'
  | 'Network Operations'
  | 'Governance'
  | 'Assurance'
  | 'Fulfillment'
  | 'Commercial'
  | 'Architecture';

export type Persona = 
  | 'Technical Team'
  | 'Business Analyst'
  | 'Operations Manager'
  | 'Executive'
  | 'Developer'
  | 'Data Scientist';

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
}
