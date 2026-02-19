
import pandas as pd

try:
    df = pd.read_excel('AgentHub_Agent_Catalogue.xlsx', engine='openpyxl')
    print("ALL COLUMNS:")
    for col in df.columns:
        print(f"- {col}")
except Exception as e:
    print("Error:", e)
