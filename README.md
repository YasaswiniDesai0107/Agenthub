# 🤖 Agent HUB - Internal AI Agent Marketplace

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-ff69b4?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design Philosophy](#design-philosophy)
- [Pages](#pages)
- [Components](#components)
- [Future Enhancements](#future-enhancements)

## 🌟 Overview

**Agent HUB** is a centralized internal AI Agent Marketplace for enterprises that serves as the single source of truth for all AI agents built across different teams and departments.

### Why Agent HUB?

In large enterprises:
- ❌ Different teams build AI agents independently
- ❌ No central visibility
- ❌ Duplicate agents get built
- ❌ No standardized documentation
- ❌ No clarity on ownership
- ❌ Hard to measure impact

**Agent HUB solves this** by providing:
- ✅ **Discovery**: Browse all AI agents across business domains
- ✅ **Understanding**: Detailed documentation for each agent
- ✅ **Evaluation**: Maturity, status, and KPI tracking
- ✅ **Reusability**: Avoid duplication, extend existing agents
- ✅ **Governance**: Ownership, security, and compliance tracking

## ✨ Features

### 🏠 Marketplace View (Home Page)
- **Beautiful Agent Cards**: Premium glassmorphism design with domain-specific gradients
- **Advanced Search**: Real-time search across agent names, descriptions, domains, and capabilities
- **Smart Filters**: Filter by business domain and agent status
- **Live Statistics**: Total agents, active agents, business domains, and total views
- **Responsive Grid**: Adaptive layout for all screen sizes
- **Smooth Animations**: Framer Motion powered interactions

### 📄 Agent Detail View
Comprehensive profile for each agent including:
- **Problem Statement**: What problem the agent solves
- **Goals & Objectives**: Clear business goals
- **Scope Definition**: What's in/out of scope
- **Operational Details**: How the agent works
- **Dynamic Workflow**: LLM-simulated workflow visualization
- **Artifacts Modal**: Side-by-side Manifest (YAML) & Agent Card (Markdown)
- **Inputs & Outputs**: Data flow documentation
- **Target Personas**: Who uses this agent
- **Tools & Technologies**: Tech stack used
- **Security Controls**: Security measures implemented
- **KPIs**: Performance metrics with targets and current values

### 🎨 Premium Design Features
- **Modern UI**: Clean, professional enterprise design
- **Responsive Layout**: Optimized for all screen sizes
- **Dynamic Gradients**: Domain-specific color schemes
- **Micro-animations**: Smooth transitions and hover effects
- **Interactive Elements**: Copy, download, and view capabilities

## 🛠 Tech Stack

- **Frontend Framework**: Next.js 16.1 (App Router)
- **Language**: TypeScript 5.0
- **Styling**: TailwindCSS 3.4
- **Animations**: Framer Motion 12.34
- **Icons**: Lucide React
- **Runtime**: React 19.2

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YasaswiniDesai0107/Agenthub.git
   cd Agenthub
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
agent-hub/
├── app/
│   ├── agent/
│   │   └── [id]/
│   │       └── page.tsx          # Agent detail page
│   ├── main.css                   # Global styles & design system
│   ├── layout.tsx                 # Root layout with metadata
│   └── page.tsx                   # Homepage (Marketplace)
│
├── components/
│   ├── AgentCard.tsx              # Agent card component
│   ├── ArtifactsModal.tsx         # Manifest & Card viewer
│   ├── WorkflowGraphic.tsx        # Dynamic workflow visualization
│   ├── Filters.tsx                # Domain & status filters
│   └── Stats.tsx                  # Statistics dashboard
│
├── data/
│   └── mockAgents.ts              # Mock agent data
│
├── types/
│   └── agent.ts                   # TypeScript interfaces
│
├── utils/
│   └── agentGenerators.ts         # Manifest & Card generators
│
└── public/                        # Static assets
```

## 🎨 Design Philosophy

### Color Palette
Our design uses a modern, professional color system:
- **Primary**: Purple (#9333ea)
- **Secondary**: Blue
- **Accent**: Green for success states
- **Background**: Clean white and gray tones

### Typography
- **Headings**: Bold, clear hierarchy
- **Body**: Inter font family
- **Code/Technical**: Monospace for technical content

## 📄 Pages

### 1. Marketplace (`/`)
The main landing page featuring:
- Search bar with real-time filtering
- Statistics dashboard (4 metric cards)
- Filter sidebar (domains & status)
- Responsive agent grid
- Empty state for no results

**Key Interactions**:
- Real-time search
- Toggle filters
- Clear all filters
- Click agent cards to view details

### 2. Agent Detail (`/agent/[id]`)
Comprehensive agent profile featuring:
- Header with agent metadata
- Problem statement section
- Goals with animated list
- **Dynamic Workflow Visualization** (NEW)
- In-scope / Out-of-scope comparison
- Operational details
- **Artifacts Modal** with Manifest & Card (NEW)
- Sidebar with:
  - Target personas
  - Tools & technologies
  - Security controls
  - KPIs with progress tracking

**Key Interactions**:
- View artifacts (Manifest + Agent Card)
- Copy to clipboard
- Download YAML/Markdown
- Interactive workflow visualization

## 🧩 Components

### `<AgentCard />`
Displays agent summary in a card format
- Props: `agent`, `index`
- Features: Hover animations, domain icons, stats preview

### `<ArtifactsModal />` (NEW)
Side-by-side viewer for Manifest and Agent Card
- Props: `isOpen`, `onClose`, `manifest`, `agentCard`, `agentName`
- Features: Copy, download, dual-pane view

### `<WorkflowGraphic />` (NEW)
Dynamic LLM-simulated workflow visualization
- Props: `agent`
- Features: 4-step workflow, runtime metrics, animations

### `<Filters />`
Domain and status filter controls
- Props: `selectedDomains`, `selectedStatuses`, toggle callbacks
- Features: Multi-select, clear all, animated badges

### `<Stats />`
Statistics dashboard with metric cards
- Props: `agents`
- Features: Real-time calculations, hover effects

## 🔮 Future Enhancements

### Phase 1 - Backend Integration
- [ ] Python FastAPI backend
- [ ] PostgreSQL database
- [ ] REST API for agents CRUD
- [ ] User authentication (JWT)
- [ ] Real-time view count tracking

### Phase 2 - Advanced Features
- [ ] Agent comparison tool
- [ ] Favorites/bookmarks
- [ ] Activity timeline
- [ ] Usage analytics dashboard
- [ ] Export agent documentation (PDF)

### Phase 3 - Collaboration
- [ ] Comment system
- [ ] Agent ratings & reviews
- [ ] Request agent modifications
- [ ] Slack/Teams integration
- [ ] Email notifications

### Phase 4 - AI-Powered
- [ ] AI-powered agent recommendations
- [ ] Natural language search
- [ ] Auto-generate agent documentation
- [ ] Duplicate detection
- [ ] Smart tagging

## 📊 Mock Data

The application currently includes diverse AI agents across different domains with complete metadata, goals, scope, operational details, tools, security controls, and KPIs.

## 🎯 Business Domains

The platform supports 7 business domains:
1. Customer Experience
2. Network Operations
3. Governance
4. Assurance
5. Fulfillment
6. Commercial
7. Architecture

## 👥 Target Personas

Agents can be tagged for specific user groups:
- Technical Team
- Business Analyst
- Operations Manager
- Executive
- Developer
- Data Scientist

## 📝 Agent Statuses

4 lifecycle stages:
- **Active**: Currently operational
- **Production**: Fully deployed and stable
- **Planned**: In development
- **Deprecated**: Being phased out

## 🤝 Contributing

This is an internal enterprise tool. For contributions:
1. Follow the existing code style
2. Add TypeScript types for all new features
3. Maintain the design system consistency
4. Test on multiple screen sizes
5. Document new components

## 📄 License

Internal use only - Prodapt Solutions

## 🙋 Support

For questions or issues, please contact the development team.

---

**Built with ❤️ for Enterprise AI Agent Management**

*Empowering enterprises to discover, understand, and reuse AI agents at scale.*
