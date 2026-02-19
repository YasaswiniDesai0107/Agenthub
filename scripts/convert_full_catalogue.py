
import pandas as pd
import json
import os

def clean_data(val):
    if pd.isna(val):
        return ""
    return str(val).strip()

def parse_list(val):
    if not val:
        return []
    items = []
    for line in str(val).split('\n'):
        line = line.strip()
        if not line:
            continue
        for marker in ['•', '-', '*']:
            if line.startswith(marker):
                line = line[1:].strip()
                break
        if line:
            items.append(line)
    return items

try:
    # Define paths relative to this script
    script_dir = os.path.dirname(os.path.abspath(__file__))
    root_dir = os.path.dirname(script_dir)
    input_file = os.path.join(root_dir, 'data', 'AgentHub_Agent_Catalogue.xlsx')
    output_dir = os.path.join(root_dir, 'frontend', 'data')
    output_file = os.path.join(output_dir, 'mockAgents.ts')
    
    # Ensure output directory exists
    os.makedirs(output_dir, exist_ok=True)

    df = pd.read_excel(input_file, engine='openpyxl')
    
    all_agents = []
    for _, row in df.iterrows():
        # Mapping Excel categories to the enum
        orig_cat = clean_data(row.get('Category', ''))
        domain = 'Governance'
        if 'CX' in orig_cat or 'Customer' in orig_cat:
            domain = 'Customer Experience'
        elif 'Network' in orig_cat or 'Ops' in orig_cat:
            domain = 'Network Operations'
        elif 'Assurance' in orig_cat:
            domain = 'Assurance'
        elif 'Fulfillment' in orig_cat:
            domain = 'Fulfillment'
        elif 'Commercial' in orig_cat:
            domain = 'Commercial'
        elif 'Architecture' in orig_cat:
            domain = 'Architecture'
        
        agent = {
            "id": clean_data(row.get('Agent ID', '')),
            "name": clean_data(row.get('Agent Name', '')),
            "businessDomain": domain,
            "shortDescription": clean_data(row.get('Description', '')),
            "problemStatement": clean_data(row.get('Features', '')),
            "goals": parse_list(row.get('Goals', '')),
            "inScope": parse_list(row.get('In scope', '')),
            "outOfScope": parse_list(row.get('Out of scope', '')),
            "operationalDetails": clean_data(row.get('Workflow', '')),
            "inputs": parse_list(row.get('Inputs', '')),
            "outputs": parse_list(row.get('Outputs', '')),
            "securityControls": parse_list(row.get('Security', '')),
            "kpis": [{"name": k, "target": "TBD"} for k in parse_list(row.get('KPIs', ''))],
            "tools": [{"name": t, "description": "Enterprise Tool"} for t in parse_list(row.get('Tools', ''))],
            "status": "production" if _ % 3 == 0 else "active", # Mix of statuses
            "viewCount": 1200 + (_ * 42),
            "personas": ["Technical Team", "Executive"],
            "owner": "Prodapt Solutions",
            "createdDate": "2024-01-10",
            "lastUpdated": "2024-02-13",
            "version": "1.0.0"
        }
        all_agents.append(agent)
    
    # Create the TypeScript file
    ts_content = f"import {{ Agent }} from '../types/agent';\n\nexport const mockAgents: Agent[] = {json.dumps(all_agents, indent=2)};\n"
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(ts_content)
        
    print(f"Successfully converted {len(all_agents)} agents.")
except Exception as e:
    print("Error:", e)
