import { mockAgents } from '@/data/mockAgents';

// Generate static params for all agents at build time
export async function generateStaticParams() {
    return mockAgents.map((agent) => ({
        id: agent.id,
    }));
}

export default function AgentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
