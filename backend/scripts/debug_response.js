const fetch = global.fetch;

async function debugRequest() {
    try {
        console.log('Testing GET http://localhost:5000/api/agents...');
        // We need a token for the actual API, but let's see if we get 401 JSON or 500 HTML
        const res = await fetch('http://localhost:5000/api/agents', {
            headers: { 'Accept': 'application/json' }
        });

        console.log('Status:', res.status, res.statusText);
        console.log('Headers:', JSON.stringify([...res.headers.entries()]));

        const text = await res.text();
        console.log('Body Preview (first 500 chars):');
        console.log(text.substring(0, 500));

        try {
            JSON.parse(text);
            console.log('Body is VALID JSON');
        } catch (e) {
            console.log('Body is INVALID JSON');
        }
    } catch (e) {
        console.error('Network Error:', e.cause || e.message);
    }
}

debugRequest();
