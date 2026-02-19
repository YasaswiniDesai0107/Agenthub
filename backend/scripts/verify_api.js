const fetch = global.fetch; // Node 18+

async function verify() {
    try {
        console.log('1. Logging in as admin...');
        const loginRes = await fetch('http://localhost:5001/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email: 'admin@agenthub.com', password: 'admin123' }),
            headers: { 'Content-Type': 'application/json' }
        });
        const loginData = await loginRes.json();

        if (!loginData.success) {
            console.error('Login Failed:', loginData);
            return;
        }

        const token = loginData.data.accessToken;
        console.log('   Token received:', token.substring(0, 20) + '...');

        console.log('2. Fetching Agents from API...');
        const agentsRes = await fetch('http://localhost:5001/api/agents', {
            headers: { Authorization: `Bearer ${token}` }
        });
        const agentsData = await agentsRes.json();
        const agents = agentsData.data.agents;

        console.log('   API returned Count:', agents.length);
        if (agents && agents.length > 0) {
            console.log('   Sample Agent:', agents[0].name);
            console.log('\n--- VERIFICATION SUCCESSFUL ---');
            console.log('Backend connected? YES');
            console.log('API returning real data? YES');
        } else {
            console.log('WARNING: API returned 0 agents.');
        }
    } catch (e) {
        if (e.cause && e.cause.code === 'ECONNREFUSED') {
            console.error('\nERROR: Backend is NOT running on localhost:5000. Please start the backend.');
        } else {
            console.error('Fetch Error:', e.message);
        }
    }
}
verify();
