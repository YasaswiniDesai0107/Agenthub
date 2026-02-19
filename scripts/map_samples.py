
import pandas as pd
import json

def clean_data(val):
    if pd.isna(val):
        return ""
    return str(val).strip()

def parse_list(val):
    if not val:
        return []
    # Try splitting by bullet points or newlines
    items = []
    for line in str(val).split('\n'):
        line = line.strip()
        if not line:
            continue
        # Remove common bullet markers
        for marker in ['•', '-', '*']:
            if line.startswith(marker):
                line = line[1:].strip()
                break
        if line:
            items.append(line)
    return items

try:
    df = pd.read_excel('AgentHub_Agent_Catalogue.xlsx', engine='openpyxl')
    
    # Let's map the first 3 agents to see how it looks
    sample_agents = []
    for _, row in df.head(3).iterrows():
        agent = {
            "id": clean_data(row.get('Agent ID', '')),
            "name": clean_data(row.get('Agent Name', '')),
            "businessDomain": clean_data(row.get('Category', 'Governance')), # Default to Governance if missing
            "shortDescription": clean_data(row.get('Description', '')),
            "problemStatement": clean_data(row.get('Features', '')), # Using Features as problem statement for now
            "goals": parse_list(row.get('Goals', '')),
            "inScope": parse_list(row.get('In scope', '')),
            "outOfScope": parse_list(row.get('Out of scope', '')),
            "operationalDetails": clean_data(row.get('Workflow', '')),
            "inputs": parse_list(row.get('Inputs', '')),
            "outputs": parse_list(row.get('Outputs', '')),
            "securityControls": parse_list(row.get('Security', '')),
            # KPIs and Tools are complex, might need more logic
            "kpis": [{"name": k, "target": "TBD"} for k in parse_list(row.get('KPIs', ''))],
            "tools": [{"name": t, "description": "Enterprise Tool"} for t in parse_list(row.get('Tools', ''))],
            "status": "production",
            "viewCount": 0,
            "personas": ["Operations Manager"],
            "owner": "Prodapt Enterprise",
            "createdDate": "2024-01-01",
            "lastUpdated": "2024-02-13",
            "version": "1.0.0"
        }
        sample_agents.append(agent)
    
    print(json.dumps(sample_agents, indent=2))
except Exception as e:
    print("Error:", e)
