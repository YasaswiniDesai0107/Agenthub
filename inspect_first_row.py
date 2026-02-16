
import pandas as pd

try:
    df = pd.read_excel('AgentHub_Agent_Catalogue.xlsx', engine='openpyxl')
    row = df.iloc[0]
    for col in df.columns:
        print(f"{col}: {repr(row[col])}")
except Exception as e:
    print("Error:", e)
