import { Agent } from '../types/agent';

export const mockAgents: Agent[] = [
  {
    "id": "A-001",
    "name": "CallAudit agent",
    "businessDomain": "Customer Experience",
    "shortDescription": "Audits operational work products and interactions to ensure compliance, quality standards, and continuous improvement.",
    "problemStatement": "Tag: From Image; Domain: CX; Process: eTOM: Risk & Compliance, Customer Relationship Management | ITIL: Information Security Management, Customer Service Management; Archetype: Audit/QA; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Detect compliance and quality deviations early.",
      "Produce audit evidence, scorecards, and coaching feedback.",
      "Drive continuous improvement through trend insights."
    ],
    "inScope": [
      "Read-only analysis of records/interactions and generation of findings.",
      "Suggest remediation or coaching actions."
    ],
    "outOfScope": [
      "Directly modify closed records without change control.",
      "Expose sensitive customer data in reports."
    ],
    "operationalDetails": "\u2022 Select the sample set based on audit plan and risk criteria.\n\u2022 Collect evidence (transcripts, ticket notes, approvals, logs).\n\u2022 Evaluate against checklist/policy and score each criterion.\n\u2022 Identify defects, compliance issues, and coaching opportunities.\n\u2022 Generate audit report and route findings to owners.",
    "inputs": [
      "Call/email/chat transcripts",
      "Customer profile and entitlements",
      "Policy/KB articles"
    ],
    "outputs": [
      "Quality/compliance scorecards",
      "Coaching tips",
      "Case updates and summaries"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "CSAT/NPS impact",
        "target": "TBD"
      },
      {
        "name": "First contact resolution",
        "target": "TBD"
      },
      {
        "name": "Average handle time (AHT)",
        "target": "TBD"
      },
      {
        "name": "Compliance score",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "CRM/CSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "Contact center transcripts",
        "description": "Enterprise Tool"
      },
      {
        "name": "Policy/KB",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps/Email",
        "description": "Enterprise Tool"
      },
      {
        "name": "QA dashboards",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 1200,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-002",
    "name": "CoachBot",
    "businessDomain": "Customer Experience",
    "shortDescription": "Provides specialized cx operational support capabilities.",
    "problemStatement": "Tag: From Image; Domain: CX; Process: eTOM: Customer Relationship Management | ITIL: Customer Service Management; Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Call/email/chat transcripts",
      "Customer profile and entitlements",
      "Policy/KB articles"
    ],
    "outputs": [
      "Quality/compliance scorecards",
      "Coaching tips",
      "Case updates and summaries"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "CSAT/NPS impact",
        "target": "TBD"
      },
      {
        "name": "First contact resolution",
        "target": "TBD"
      },
      {
        "name": "Average handle time (AHT)",
        "target": "TBD"
      },
      {
        "name": "Compliance score",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "CRM/CSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "Contact center transcripts",
        "description": "Enterprise Tool"
      },
      {
        "name": "Policy/KB",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps/Email",
        "description": "Enterprise Tool"
      },
      {
        "name": "QA dashboards",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 1242,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-003",
    "name": "CPNI-Guard agent",
    "businessDomain": "Customer Experience",
    "shortDescription": "Validates records, configurations, or outcomes against business rules, standards, and policy controls.",
    "problemStatement": "Tag: From Image; Domain: CX; Process: eTOM: Risk & Compliance, Customer Relationship Management | ITIL: Information Security Management, Customer Service Management; Archetype: Validator; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Ensure records/configurations meet required completeness and policy rules before progressing.",
      "Prevent avoidable fallout, rework, and SLA breaches by catching issues early.",
      "Provide clear, actionable validation failures and suggested fixes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Load the record and required reference data (catalog, policy, CMDB).\n\u2022 Run rule checks (mandatory fields, eligibility, policy constraints).\n\u2022 Cross-validate against upstream/downstream dependencies.\n\u2022 If failures exist, generate actionable findings and suggested fixes.\n\u2022 Update record with validation status and evidence.",
    "inputs": [
      "Call/email/chat transcripts",
      "Customer profile and entitlements",
      "Policy/KB articles"
    ],
    "outputs": [
      "Quality/compliance scorecards",
      "Coaching tips",
      "Case updates and summaries",
      "Pass/fail decision with rule-level explanations"
    ],
    "securityControls": [
      "Data sensitivity: Restricted (CPNI/PII).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "CSAT/NPS impact",
        "target": "TBD"
      },
      {
        "name": "First contact resolution",
        "target": "TBD"
      },
      {
        "name": "Average handle time (AHT)",
        "target": "TBD"
      },
      {
        "name": "Compliance score",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "CRM/CSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "Contact center transcripts",
        "description": "Enterprise Tool"
      },
      {
        "name": "Policy/KB",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps/Email",
        "description": "Enterprise Tool"
      },
      {
        "name": "QA dashboards",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 1284,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-004",
    "name": "EmailAudit agent",
    "businessDomain": "Customer Experience",
    "shortDescription": "Audits operational work products and interactions to ensure compliance, quality standards, and continuous improvement.",
    "problemStatement": "Tag: From Image; Domain: CX; Process: eTOM: Risk & Compliance, Customer Relationship Management | ITIL: Information Security Management, Customer Service Management; Archetype: Audit/QA; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Detect compliance and quality deviations early.",
      "Produce audit evidence, scorecards, and coaching feedback.",
      "Drive continuous improvement through trend insights."
    ],
    "inScope": [
      "Read-only analysis of records/interactions and generation of findings.",
      "Suggest remediation or coaching actions."
    ],
    "outOfScope": [
      "Directly modify closed records without change control.",
      "Expose sensitive customer data in reports."
    ],
    "operationalDetails": "\u2022 Select the sample set based on audit plan and risk criteria.\n\u2022 Collect evidence (transcripts, ticket notes, approvals, logs).\n\u2022 Evaluate against checklist/policy and score each criterion.\n\u2022 Identify defects, compliance issues, and coaching opportunities.\n\u2022 Generate audit report and route findings to owners.",
    "inputs": [
      "Call/email/chat transcripts",
      "Customer profile and entitlements",
      "Policy/KB articles"
    ],
    "outputs": [
      "Quality/compliance scorecards",
      "Coaching tips",
      "Case updates and summaries"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "CSAT/NPS impact",
        "target": "TBD"
      },
      {
        "name": "First contact resolution",
        "target": "TBD"
      },
      {
        "name": "Average handle time (AHT)",
        "target": "TBD"
      },
      {
        "name": "Compliance score",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "CRM/CSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "Contact center transcripts",
        "description": "Enterprise Tool"
      },
      {
        "name": "Policy/KB",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps/Email",
        "description": "Enterprise Tool"
      },
      {
        "name": "QA dashboards",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 1326,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-005",
    "name": "InsightsHub",
    "businessDomain": "Customer Experience",
    "shortDescription": "Analyzes operational data to surface trends, anomalies, and actionable insights for decision-making.",
    "problemStatement": "Tag: From Image; Domain: CX; Process: eTOM: Customer Relationship Management | ITIL: Customer Service Management; Archetype: Analyzer/Insights; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Turn operational data into actionable insights and recommendations.",
      "Detect trends, hotspots, and improvement opportunities.",
      "Provide leadership-ready dashboards and narratives."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Define the analysis question (trend, anomaly, compliance, cost).\n\u2022 Pull data from authoritative sources (ITSM, OSS, data lake).\n\u2022 Compute metrics and identify significant patterns/outliers.\n\u2022 Generate insights with recommended actions and owners.\n\u2022 Publish dashboards/reports and track action adoption.",
    "inputs": [
      "Call/email/chat transcripts",
      "Customer profile and entitlements",
      "Policy/KB articles"
    ],
    "outputs": [
      "Quality/compliance scorecards",
      "Coaching tips",
      "Case updates and summaries"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "CSAT/NPS impact",
        "target": "TBD"
      },
      {
        "name": "First contact resolution",
        "target": "TBD"
      },
      {
        "name": "Average handle time (AHT)",
        "target": "TBD"
      },
      {
        "name": "Compliance score",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "CRM/CSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "Contact center transcripts",
        "description": "Enterprise Tool"
      },
      {
        "name": "Policy/KB",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps/Email",
        "description": "Enterprise Tool"
      },
      {
        "name": "QA dashboards",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 1368,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-006",
    "name": "Intent Routing Agent",
    "businessDomain": "Customer Experience",
    "shortDescription": "Provides specialized cx operational support capabilities.",
    "problemStatement": "Tag: Added; Domain: CX; Process: eTOM: Customer Relationship Management | ITIL: Customer Service Management; Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Call/email/chat transcripts",
      "Customer profile and entitlements",
      "Policy/KB articles"
    ],
    "outputs": [
      "Quality/compliance scorecards",
      "Coaching tips",
      "Case updates and summaries"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "CSAT/NPS impact",
        "target": "TBD"
      },
      {
        "name": "First contact resolution",
        "target": "TBD"
      },
      {
        "name": "Average handle time (AHT)",
        "target": "TBD"
      },
      {
        "name": "Compliance score",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "CRM/CSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "Contact center transcripts",
        "description": "Enterprise Tool"
      },
      {
        "name": "Policy/KB",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps/Email",
        "description": "Enterprise Tool"
      },
      {
        "name": "QA dashboards",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 1410,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-007",
    "name": "Knowledge Search Copilot",
    "businessDomain": "Customer Experience",
    "shortDescription": "Provides specialized cx operational support capabilities.",
    "problemStatement": "Tag: Added; Domain: CX; Process: eTOM: Customer Relationship Management | ITIL: Customer Service Management; Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Call/email/chat transcripts",
      "Customer profile and entitlements",
      "Policy/KB articles"
    ],
    "outputs": [
      "Quality/compliance scorecards",
      "Coaching tips",
      "Case updates and summaries"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "CSAT/NPS impact",
        "target": "TBD"
      },
      {
        "name": "First contact resolution",
        "target": "TBD"
      },
      {
        "name": "Average handle time (AHT)",
        "target": "TBD"
      },
      {
        "name": "Compliance score",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "CRM/CSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "Contact center transcripts",
        "description": "Enterprise Tool"
      },
      {
        "name": "Policy/KB",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps/Email",
        "description": "Enterprise Tool"
      },
      {
        "name": "QA dashboards",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 1452,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-008",
    "name": "Proactive Outage Communications Agent",
    "businessDomain": "Customer Experience",
    "shortDescription": "Provides specialized cx operational support capabilities.",
    "problemStatement": "Tag: Added; Domain: CX; Process: eTOM: Customer Relationship Management | ITIL: Customer Service Management; Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Call/email/chat transcripts",
      "Customer profile and entitlements",
      "Policy/KB articles"
    ],
    "outputs": [
      "Quality/compliance scorecards",
      "Coaching tips",
      "Case updates and summaries"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "CSAT/NPS impact",
        "target": "TBD"
      },
      {
        "name": "First contact resolution",
        "target": "TBD"
      },
      {
        "name": "Average handle time (AHT)",
        "target": "TBD"
      },
      {
        "name": "Compliance score",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "CRM/CSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "Contact center transcripts",
        "description": "Enterprise Tool"
      },
      {
        "name": "Policy/KB",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps/Email",
        "description": "Enterprise Tool"
      },
      {
        "name": "QA dashboards",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 1494,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-009",
    "name": "Refund/Credit Eligibility Guard",
    "businessDomain": "Customer Experience",
    "shortDescription": "Validates records, configurations, or outcomes against business rules, standards, and policy controls.",
    "problemStatement": "Tag: Added; Domain: CX; Process: eTOM: Risk & Compliance, Service Development & Management, Customer Relationship Management | ITIL: Information Security Management, Service Design / Portfolio, Customer Service Management; Archetype: Validator; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Ensure records/configurations meet required completeness and policy rules before progressing.",
      "Prevent avoidable fallout, rework, and SLA breaches by catching issues early.",
      "Provide clear, actionable validation failures and suggested fixes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Load the record and required reference data (catalog, policy, CMDB).\n\u2022 Run rule checks (mandatory fields, eligibility, policy constraints).\n\u2022 Cross-validate against upstream/downstream dependencies.\n\u2022 If failures exist, generate actionable findings and suggested fixes.\n\u2022 Update record with validation status and evidence.",
    "inputs": [
      "Call/email/chat transcripts",
      "Customer profile and entitlements",
      "Policy/KB articles"
    ],
    "outputs": [
      "Quality/compliance scorecards",
      "Coaching tips",
      "Case updates and summaries",
      "Pass/fail decision with rule-level explanations"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "CSAT/NPS impact",
        "target": "TBD"
      },
      {
        "name": "First contact resolution",
        "target": "TBD"
      },
      {
        "name": "Average handle time (AHT)",
        "target": "TBD"
      },
      {
        "name": "Compliance score",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "CRM/CSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "Contact center transcripts",
        "description": "Enterprise Tool"
      },
      {
        "name": "Policy/KB",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps/Email",
        "description": "Enterprise Tool"
      },
      {
        "name": "QA dashboards",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 1536,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-010",
    "name": "Sentiment & Escalation Detector",
    "businessDomain": "Customer Experience",
    "shortDescription": "Provides specialized cx operational support capabilities.",
    "problemStatement": "Tag: Added; Domain: CX; Process: eTOM: Customer Relationship Management | ITIL: Customer Service Management; Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Call/email/chat transcripts",
      "Customer profile and entitlements",
      "Policy/KB articles"
    ],
    "outputs": [
      "Quality/compliance scorecards",
      "Coaching tips",
      "Case updates and summaries"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "CSAT/NPS impact",
        "target": "TBD"
      },
      {
        "name": "First contact resolution",
        "target": "TBD"
      },
      {
        "name": "Average handle time (AHT)",
        "target": "TBD"
      },
      {
        "name": "Compliance score",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "CRM/CSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "Contact center transcripts",
        "description": "Enterprise Tool"
      },
      {
        "name": "Policy/KB",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps/Email",
        "description": "Enterprise Tool"
      },
      {
        "name": "QA dashboards",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 1578,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-011",
    "name": "VariantCheck",
    "businessDomain": "Customer Experience",
    "shortDescription": "Validates records, configurations, or outcomes against business rules, standards, and policy controls.",
    "problemStatement": "Tag: From Image; Domain: CX; Process: eTOM: Customer Relationship Management | ITIL: Customer Service Management; Archetype: Validator; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Ensure records/configurations meet required completeness and policy rules before progressing.",
      "Prevent avoidable fallout, rework, and SLA breaches by catching issues early.",
      "Provide clear, actionable validation failures and suggested fixes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Load the record and required reference data (catalog, policy, CMDB).\n\u2022 Run rule checks (mandatory fields, eligibility, policy constraints).\n\u2022 Cross-validate against upstream/downstream dependencies.\n\u2022 If failures exist, generate actionable findings and suggested fixes.\n\u2022 Update record with validation status and evidence.",
    "inputs": [
      "Call/email/chat transcripts",
      "Customer profile and entitlements",
      "Policy/KB articles"
    ],
    "outputs": [
      "Quality/compliance scorecards",
      "Coaching tips",
      "Case updates and summaries",
      "Pass/fail decision with rule-level explanations"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "CSAT/NPS impact",
        "target": "TBD"
      },
      {
        "name": "First contact resolution",
        "target": "TBD"
      },
      {
        "name": "Average handle time (AHT)",
        "target": "TBD"
      },
      {
        "name": "Compliance score",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "CRM/CSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "Contact center transcripts",
        "description": "Enterprise Tool"
      },
      {
        "name": "Policy/KB",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps/Email",
        "description": "Enterprise Tool"
      },
      {
        "name": "QA dashboards",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 1620,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-012",
    "name": "Dispatch Optimizer",
    "businessDomain": "Governance",
    "shortDescription": "Provides specialized field operations operational support capabilities.",
    "problemStatement": "Tag: Added; Domain: Field Operations; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Work order",
      "Technician/crew availability",
      "Site access details",
      "Parts/inventory availability"
    ],
    "outputs": [
      "Dispatch/appointment updates",
      "Work instructions",
      "Completion evidence requests"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "On-time arrival (%)",
        "target": "TBD"
      },
      {
        "name": "Mean time to dispatch",
        "target": "TBD"
      },
      {
        "name": "Truck roll avoidance",
        "target": "TBD"
      },
      {
        "name": "First-time fix rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "FSM/work orders",
        "description": "Enterprise Tool"
      },
      {
        "name": "GIS/location",
        "description": "Enterprise Tool"
      },
      {
        "name": "Inventory/parts",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS tests",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 1662,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-013",
    "name": "Parts & Logistics Coordinator",
    "businessDomain": "Governance",
    "shortDescription": "Coordinates cross-team activities, approvals, and communications to keep delivery/assurance work on track.",
    "problemStatement": "Tag: Added; Domain: Field Operations; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Coordinator/Assistant; Autonomy: Assistive",
    "goals": [
      "Coordinate cross-team execution and approvals to remove blockers quickly.",
      "Ensure communications are timely, consistent, and compliant.",
      "Track dependencies and ensure handoffs do not stall progress."
    ],
    "inScope": [
      "Create/update tasks and tickets in ITSM/CRM as part of execution.",
      "Coordinate handoffs and collect required approvals/evidence."
    ],
    "outOfScope": [
      "Execute production-impacting changes without required approvals.",
      "Override security controls or access entitlements."
    ],
    "operationalDetails": "\u2022 Assess the current state, blockers, and dependency chain.\n\u2022 Generate a coordinated plan (tasks, owners, due dates).\n\u2022 Request approvals where needed (CAB/change/dispatch).\n\u2022 Notify stakeholders and maintain a single source of truth in ITSM.\n\u2022 Track execution progress and follow up on overdue tasks.",
    "inputs": [
      "Work order",
      "Technician/crew availability",
      "Site access details",
      "Parts/inventory availability"
    ],
    "outputs": [
      "Dispatch/appointment updates",
      "Work instructions",
      "Completion evidence requests"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "On-time arrival (%)",
        "target": "TBD"
      },
      {
        "name": "Mean time to dispatch",
        "target": "TBD"
      },
      {
        "name": "Truck roll avoidance",
        "target": "TBD"
      },
      {
        "name": "First-time fix rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "FSM/work orders",
        "description": "Enterprise Tool"
      },
      {
        "name": "GIS/location",
        "description": "Enterprise Tool"
      },
      {
        "name": "Inventory/parts",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS tests",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 1704,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-014",
    "name": "Remote Hands Coordinator",
    "businessDomain": "Governance",
    "shortDescription": "Coordinates cross-team activities, approvals, and communications to keep delivery/assurance work on track.",
    "problemStatement": "Tag: Added; Domain: Field Operations; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Coordinator/Assistant; Autonomy: Assistive",
    "goals": [
      "Coordinate cross-team execution and approvals to remove blockers quickly.",
      "Ensure communications are timely, consistent, and compliant.",
      "Track dependencies and ensure handoffs do not stall progress."
    ],
    "inScope": [
      "Create/update tasks and tickets in ITSM/CRM as part of execution.",
      "Coordinate handoffs and collect required approvals/evidence."
    ],
    "outOfScope": [
      "Execute production-impacting changes without required approvals.",
      "Override security controls or access entitlements."
    ],
    "operationalDetails": "\u2022 Assess the current state, blockers, and dependency chain.\n\u2022 Generate a coordinated plan (tasks, owners, due dates).\n\u2022 Request approvals where needed (CAB/change/dispatch).\n\u2022 Notify stakeholders and maintain a single source of truth in ITSM.\n\u2022 Track execution progress and follow up on overdue tasks.",
    "inputs": [
      "Work order",
      "Technician/crew availability",
      "Site access details",
      "Parts/inventory availability"
    ],
    "outputs": [
      "Dispatch/appointment updates",
      "Work instructions",
      "Completion evidence requests"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "On-time arrival (%)",
        "target": "TBD"
      },
      {
        "name": "Mean time to dispatch",
        "target": "TBD"
      },
      {
        "name": "Truck roll avoidance",
        "target": "TBD"
      },
      {
        "name": "First-time fix rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "FSM/work orders",
        "description": "Enterprise Tool"
      },
      {
        "name": "GIS/location",
        "description": "Enterprise Tool"
      },
      {
        "name": "Inventory/parts",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS tests",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 1746,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-015",
    "name": "Site Access & Safety Compliance Checker",
    "businessDomain": "Governance",
    "shortDescription": "Validates records, configurations, or outcomes against business rules, standards, and policy controls.",
    "problemStatement": "Tag: Added; Domain: Field Operations; Process: eTOM: Risk & Compliance | ITIL: Information Security Management; Archetype: Validator; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Ensure records/configurations meet required completeness and policy rules before progressing.",
      "Prevent avoidable fallout, rework, and SLA breaches by catching issues early.",
      "Provide clear, actionable validation failures and suggested fixes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Load the record and required reference data (catalog, policy, CMDB).\n\u2022 Run rule checks (mandatory fields, eligibility, policy constraints).\n\u2022 Cross-validate against upstream/downstream dependencies.\n\u2022 If failures exist, generate actionable findings and suggested fixes.\n\u2022 Update record with validation status and evidence.",
    "inputs": [
      "Work order",
      "Technician/crew availability",
      "Site access details",
      "Parts/inventory availability"
    ],
    "outputs": [
      "Dispatch/appointment updates",
      "Work instructions",
      "Completion evidence requests",
      "Pass/fail decision with rule-level explanations"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "On-time arrival (%)",
        "target": "TBD"
      },
      {
        "name": "Mean time to dispatch",
        "target": "TBD"
      },
      {
        "name": "Truck roll avoidance",
        "target": "TBD"
      },
      {
        "name": "First-time fix rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "FSM/work orders",
        "description": "Enterprise Tool"
      },
      {
        "name": "GIS/location",
        "description": "Enterprise Tool"
      },
      {
        "name": "Inventory/parts",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS tests",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 1788,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-016",
    "name": "Technician Copilot",
    "businessDomain": "Governance",
    "shortDescription": "Provides specialized field operations operational support capabilities.",
    "problemStatement": "Tag: Added; Domain: Field Operations; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Work order",
      "Technician/crew availability",
      "Site access details",
      "Parts/inventory availability"
    ],
    "outputs": [
      "Dispatch/appointment updates",
      "Work instructions",
      "Completion evidence requests"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "On-time arrival (%)",
        "target": "TBD"
      },
      {
        "name": "Mean time to dispatch",
        "target": "TBD"
      },
      {
        "name": "Truck roll avoidance",
        "target": "TBD"
      },
      {
        "name": "First-time fix rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "FSM/work orders",
        "description": "Enterprise Tool"
      },
      {
        "name": "GIS/location",
        "description": "Enterprise Tool"
      },
      {
        "name": "Inventory/parts",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS tests",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 1830,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-017",
    "name": "Work Order Quality Auditor",
    "businessDomain": "Governance",
    "shortDescription": "Audits operational work products and interactions to ensure compliance, quality standards, and continuous improvement.",
    "problemStatement": "Tag: Added; Domain: Field Operations; Process: eTOM: Order Handling / Fulfillment, Risk & Compliance | ITIL: Service Request Management, Information Security Management; Archetype: Audit/QA; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Detect compliance and quality deviations early.",
      "Produce audit evidence, scorecards, and coaching feedback.",
      "Drive continuous improvement through trend insights."
    ],
    "inScope": [
      "Read-only analysis of records/interactions and generation of findings.",
      "Suggest remediation or coaching actions."
    ],
    "outOfScope": [
      "Directly modify closed records without change control.",
      "Expose sensitive customer data in reports."
    ],
    "operationalDetails": "\u2022 Select the sample set based on audit plan and risk criteria.\n\u2022 Collect evidence (transcripts, ticket notes, approvals, logs).\n\u2022 Evaluate against checklist/policy and score each criterion.\n\u2022 Identify defects, compliance issues, and coaching opportunities.\n\u2022 Generate audit report and route findings to owners.",
    "inputs": [
      "Work order",
      "Technician/crew availability",
      "Site access details",
      "Parts/inventory availability"
    ],
    "outputs": [
      "Dispatch/appointment updates",
      "Work instructions",
      "Completion evidence requests"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "On-time arrival (%)",
        "target": "TBD"
      },
      {
        "name": "Mean time to dispatch",
        "target": "TBD"
      },
      {
        "name": "Truck roll avoidance",
        "target": "TBD"
      },
      {
        "name": "First-time fix rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "FSM/work orders",
        "description": "Enterprise Tool"
      },
      {
        "name": "GIS/location",
        "description": "Enterprise Tool"
      },
      {
        "name": "Inventory/parts",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS tests",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 1872,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-018",
    "name": "Access Request & SoD Guardian",
    "businessDomain": "Governance",
    "shortDescription": "Validates records, configurations, or outcomes against business rules, standards, and policy controls.",
    "problemStatement": "Tag: Added; Domain: Governance / Quality; Process: eTOM: Risk & Compliance | ITIL: Information Security Management; Archetype: Validator; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Ensure records/configurations meet required completeness and policy rules before progressing.",
      "Prevent avoidable fallout, rework, and SLA breaches by catching issues early.",
      "Provide clear, actionable validation failures and suggested fixes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Load the record and required reference data (catalog, policy, CMDB).\n\u2022 Run rule checks (mandatory fields, eligibility, policy constraints).\n\u2022 Cross-validate against upstream/downstream dependencies.\n\u2022 If failures exist, generate actionable findings and suggested fixes.\n\u2022 Update record with validation status and evidence.",
    "inputs": [
      "Audit logs",
      "Process policies",
      "Sampling criteria",
      "Evidence artifacts"
    ],
    "outputs": [
      "Audit findings",
      "Compliance alerts",
      "Quality dashboards",
      "Pass/fail decision with rule-level explanations"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Audit pass rate",
        "target": "TBD"
      },
      {
        "name": "Defect density",
        "target": "TBD"
      },
      {
        "name": "Policy exception rate",
        "target": "TBD"
      },
      {
        "name": "Evidence completeness (%)",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ITSM/Workflow",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "Data lake/BI",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 1914,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-019",
    "name": "Audit Evidence Collector",
    "businessDomain": "Governance",
    "shortDescription": "Audits operational work products and interactions to ensure compliance, quality standards, and continuous improvement.",
    "problemStatement": "Tag: Added; Domain: Governance / Quality; Process: eTOM: Risk & Compliance | ITIL: Information Security Management; Archetype: Audit/QA; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Detect compliance and quality deviations early.",
      "Produce audit evidence, scorecards, and coaching feedback.",
      "Drive continuous improvement through trend insights."
    ],
    "inScope": [
      "Read-only analysis of records/interactions and generation of findings.",
      "Suggest remediation or coaching actions."
    ],
    "outOfScope": [
      "Directly modify closed records without change control.",
      "Expose sensitive customer data in reports."
    ],
    "operationalDetails": "\u2022 Select the sample set based on audit plan and risk criteria.\n\u2022 Collect evidence (transcripts, ticket notes, approvals, logs).\n\u2022 Evaluate against checklist/policy and score each criterion.\n\u2022 Identify defects, compliance issues, and coaching opportunities.\n\u2022 Generate audit report and route findings to owners.",
    "inputs": [
      "Audit logs",
      "Process policies",
      "Sampling criteria",
      "Evidence artifacts"
    ],
    "outputs": [
      "Audit findings",
      "Compliance alerts",
      "Quality dashboards"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Audit pass rate",
        "target": "TBD"
      },
      {
        "name": "Defect density",
        "target": "TBD"
      },
      {
        "name": "Policy exception rate",
        "target": "TBD"
      },
      {
        "name": "Evidence completeness (%)",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ITSM/Workflow",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "Data lake/BI",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 1956,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-020",
    "name": "Audit log analyzer",
    "businessDomain": "Governance",
    "shortDescription": "Audits operational work products and interactions to ensure compliance, quality standards, and continuous improvement.",
    "problemStatement": "Tag: From Image; Domain: Governance / Quality; Process: eTOM: Risk & Compliance | ITIL: Information Security Management; Archetype: Audit/QA; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Detect compliance and quality deviations early.",
      "Produce audit evidence, scorecards, and coaching feedback.",
      "Drive continuous improvement through trend insights."
    ],
    "inScope": [
      "Read-only analysis of records/interactions and generation of findings.",
      "Suggest remediation or coaching actions."
    ],
    "outOfScope": [
      "Directly modify closed records without change control.",
      "Expose sensitive customer data in reports."
    ],
    "operationalDetails": "\u2022 Select the sample set based on audit plan and risk criteria.\n\u2022 Collect evidence (transcripts, ticket notes, approvals, logs).\n\u2022 Evaluate against checklist/policy and score each criterion.\n\u2022 Identify defects, compliance issues, and coaching opportunities.\n\u2022 Generate audit report and route findings to owners.",
    "inputs": [
      "Audit logs",
      "Process policies",
      "Sampling criteria",
      "Evidence artifacts"
    ],
    "outputs": [
      "Audit findings",
      "Compliance alerts",
      "Quality dashboards"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Audit pass rate",
        "target": "TBD"
      },
      {
        "name": "Defect density",
        "target": "TBD"
      },
      {
        "name": "Policy exception rate",
        "target": "TBD"
      },
      {
        "name": "Evidence completeness (%)",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ITSM/Workflow",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "Data lake/BI",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 1998,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-021",
    "name": "Cost-to-Serve Analyzer",
    "businessDomain": "Governance",
    "shortDescription": "Analyzes operational data to surface trends, anomalies, and actionable insights for decision-making.",
    "problemStatement": "Tag: Added; Domain: Governance / Quality; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Analyzer/Insights; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Turn operational data into actionable insights and recommendations.",
      "Detect trends, hotspots, and improvement opportunities.",
      "Provide leadership-ready dashboards and narratives."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Define the analysis question (trend, anomaly, compliance, cost).\n\u2022 Pull data from authoritative sources (ITSM, OSS, data lake).\n\u2022 Compute metrics and identify significant patterns/outliers.\n\u2022 Generate insights with recommended actions and owners.\n\u2022 Publish dashboards/reports and track action adoption.",
    "inputs": [
      "Audit logs",
      "Process policies",
      "Sampling criteria",
      "Evidence artifacts"
    ],
    "outputs": [
      "Audit findings",
      "Compliance alerts",
      "Quality dashboards"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Audit pass rate",
        "target": "TBD"
      },
      {
        "name": "Defect density",
        "target": "TBD"
      },
      {
        "name": "Policy exception rate",
        "target": "TBD"
      },
      {
        "name": "Evidence completeness (%)",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ITSM/Workflow",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "Data lake/BI",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 2040,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-022",
    "name": "Data Quality Monitor",
    "businessDomain": "Governance",
    "shortDescription": "Tracks progress, milestones, and SLA/SLO risks; escalates proactively when thresholds are breached.",
    "problemStatement": "Tag: Added; Domain: Governance / Quality; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Monitor/Tracker; Autonomy: Semi-autonomous",
    "goals": [
      "Provide continuous visibility into milestone and SLA/SLO progress.",
      "Detect risk early (jeopardy) and trigger escalation paths.",
      "Reduce status-chasing by stakeholders via proactive updates."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Identify the population to monitor (orders, milestones, tickets).\n\u2022 Pull latest status from systems of record and compute deltas.\n\u2022 Evaluate SLA/milestone thresholds and leading indicators.\n\u2022 Create/update jeopardy flags and risk reasons.\n\u2022 Notify owners with recommended actions and due times.",
    "inputs": [
      "Audit logs",
      "Process policies",
      "Sampling criteria",
      "Evidence artifacts"
    ],
    "outputs": [
      "Audit findings",
      "Compliance alerts",
      "Quality dashboards",
      "Milestone/SLA status snapshots"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Audit pass rate",
        "target": "TBD"
      },
      {
        "name": "Defect density",
        "target": "TBD"
      },
      {
        "name": "Policy exception rate",
        "target": "TBD"
      },
      {
        "name": "Evidence completeness (%)",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ITSM/Workflow",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "Data lake/BI",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 2082,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-023",
    "name": "Model/Prompt Compliance Monitor",
    "businessDomain": "Governance",
    "shortDescription": "Tracks progress, milestones, and SLA/SLO risks; escalates proactively when thresholds are breached.",
    "problemStatement": "Tag: Added; Domain: Governance / Quality; Process: eTOM: Risk & Compliance | ITIL: Information Security Management; Archetype: Monitor/Tracker; Autonomy: Semi-autonomous",
    "goals": [
      "Provide continuous visibility into milestone and SLA/SLO progress.",
      "Detect risk early (jeopardy) and trigger escalation paths.",
      "Reduce status-chasing by stakeholders via proactive updates."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Identify the population to monitor (orders, milestones, tickets).\n\u2022 Pull latest status from systems of record and compute deltas.\n\u2022 Evaluate SLA/milestone thresholds and leading indicators.\n\u2022 Create/update jeopardy flags and risk reasons.\n\u2022 Notify owners with recommended actions and due times.",
    "inputs": [
      "Audit logs",
      "Process policies",
      "Sampling criteria",
      "Evidence artifacts"
    ],
    "outputs": [
      "Audit findings",
      "Compliance alerts",
      "Quality dashboards",
      "Milestone/SLA status snapshots"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Audit pass rate",
        "target": "TBD"
      },
      {
        "name": "Defect density",
        "target": "TBD"
      },
      {
        "name": "Policy exception rate",
        "target": "TBD"
      },
      {
        "name": "Evidence completeness (%)",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ITSM/Workflow",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "Data lake/BI",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 2124,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-024",
    "name": "Sev-MTTR validator",
    "businessDomain": "Governance",
    "shortDescription": "Validates records, configurations, or outcomes against business rules, standards, and policy controls.",
    "problemStatement": "Tag: From Image; Domain: Governance / Quality; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Validator; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Ensure records/configurations meet required completeness and policy rules before progressing.",
      "Prevent avoidable fallout, rework, and SLA breaches by catching issues early.",
      "Provide clear, actionable validation failures and suggested fixes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Load the record and required reference data (catalog, policy, CMDB).\n\u2022 Run rule checks (mandatory fields, eligibility, policy constraints).\n\u2022 Cross-validate against upstream/downstream dependencies.\n\u2022 If failures exist, generate actionable findings and suggested fixes.\n\u2022 Update record with validation status and evidence.",
    "inputs": [
      "Audit logs",
      "Process policies",
      "Sampling criteria",
      "Evidence artifacts"
    ],
    "outputs": [
      "Audit findings",
      "Compliance alerts",
      "Quality dashboards",
      "Pass/fail decision with rule-level explanations"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Audit pass rate",
        "target": "TBD"
      },
      {
        "name": "Defect density",
        "target": "TBD"
      },
      {
        "name": "Policy exception rate",
        "target": "TBD"
      },
      {
        "name": "Evidence completeness (%)",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ITSM/Workflow",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "Data lake/BI",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 2166,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-025",
    "name": "Ticket Scrub agent",
    "businessDomain": "Governance",
    "shortDescription": "Cleans and standardizes ticket/case data to improve quality, reporting accuracy, and downstream automation.",
    "problemStatement": "Tag: From Image; Domain: Governance / Quality; Process: eTOM: Service Assurance | ITIL: Incident Management; Archetype: Scrub/Cleanse; Autonomy: Semi-autonomous",
    "goals": [
      "Improve ticket/case data quality (dedupe, normalize, enrich).",
      "Increase automation success rates by reducing noise and inconsistencies.",
      "Enable accurate reporting and knowledge mining."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Select candidate tickets/cases based on rules (age, duplicates, quality).\n\u2022 Normalize fields (categories, CI names, locations) using reference data.\n\u2022 Detect duplicates and link/merge per policy (no data loss).\n\u2022 Enrich records with missing context (CI, customer, service, tags).\n\u2022 Flag anomalies for human review and propose corrections.",
    "inputs": [
      "Audit logs",
      "Process policies",
      "Sampling criteria",
      "Evidence artifacts"
    ],
    "outputs": [
      "Audit findings",
      "Compliance alerts",
      "Quality dashboards"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Audit pass rate",
        "target": "TBD"
      },
      {
        "name": "Defect density",
        "target": "TBD"
      },
      {
        "name": "Policy exception rate",
        "target": "TBD"
      },
      {
        "name": "Evidence completeness (%)",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ITSM/Workflow",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "Data lake/BI",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 2208,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-026",
    "name": "Alarm Noise Reduction Agent",
    "businessDomain": "Assurance",
    "shortDescription": "Provides specialized noc / assurance operational support capabilities.",
    "problemStatement": "Tag: Added; Domain: NOC / Assurance; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 2250,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-027",
    "name": "Anomaly Detection Agent",
    "businessDomain": "Assurance",
    "shortDescription": "Provides specialized noc / assurance operational support capabilities.",
    "problemStatement": "Tag: Added; Domain: NOC / Assurance; Process: eTOM: Service Assurance | ITIL: Incident Management; Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 2292,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-028",
    "name": "Change Impact Simulator",
    "businessDomain": "Assurance",
    "shortDescription": "Provides specialized noc / assurance operational support capabilities.",
    "problemStatement": "Tag: Added; Domain: NOC / Assurance; Process: eTOM: Service Configuration & Activation | ITIL: Change Enablement; Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 2334,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-029",
    "name": "Correlation Agent",
    "businessDomain": "Governance",
    "shortDescription": "Correlates alarms/events into deduplicated incidents and identifies likely causal relationships.",
    "problemStatement": "Tag: From Image; Domain: NOC / Assurance; Process: eTOM: Service Assurance | ITIL: Incident Management; Archetype: Correlation; Autonomy: Assistive",
    "goals": [
      "Reduce alarm noise through deduplication and correlation.",
      "Identify probable cause chains and affected service clusters.",
      "Create/augment incidents with correlated evidence."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Ingest alarms/events and normalize into a common schema.\n\u2022 Cluster events by time, topology proximity, and signature similarity.\n\u2022 Identify likely primary/root event and suppress duplicates.\n\u2022 Create or update a parent incident with correlated evidence.\n\u2022 Recommend probable cause hypotheses and next diagnostics.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 2376,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-030",
    "name": "Fault Localization Agent",
    "businessDomain": "Assurance",
    "shortDescription": "Provides specialized noc / assurance operational support capabilities.",
    "problemStatement": "Tag: Added; Domain: NOC / Assurance; Process: eTOM: Service Assurance | ITIL: Incident Management; Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 2418,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-031",
    "name": "Impact Assessment Agent",
    "businessDomain": "Network Operations",
    "shortDescription": "Determines blast radius and customer/service impact to set correct priority, severity, and communications.",
    "problemStatement": "Tag: From Image; Domain: NOC / Assurance; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Impact Assessment; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Accurately determine impacted services/customers/locations.",
      "Set correct severity/priority and comms requirements.",
      "Provide clear impact narratives to support decisions."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Identify implicated CI/service(s) from the ticket/alarm context.\n\u2022 Traverse topology to determine upstream/downstream dependencies.\n\u2022 Estimate customer/location impact using inventory and usage signals.\n\u2022 Propose severity/priority and communications requirements.\n\u2022 Update ticket with impact statement and evidence.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 2460,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-032",
    "name": "Knowledge Article Generator",
    "businessDomain": "Assurance",
    "shortDescription": "Provides specialized noc / assurance operational support capabilities.",
    "problemStatement": "Tag: Added; Domain: NOC / Assurance; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 2502,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-033",
    "name": "Maintenance Window Manager",
    "businessDomain": "Assurance",
    "shortDescription": "Coordinates cross-team activities, approvals, and communications to keep delivery/assurance work on track.",
    "problemStatement": "Tag: Added; Domain: NOC / Assurance; Process: eTOM: Service Configuration & Activation | ITIL: Change Enablement; Archetype: Coordinator/Assistant; Autonomy: Assistive",
    "goals": [
      "Coordinate cross-team execution and approvals to remove blockers quickly.",
      "Ensure communications are timely, consistent, and compliant.",
      "Track dependencies and ensure handoffs do not stall progress."
    ],
    "inScope": [
      "Create/update tasks and tickets in ITSM/CRM as part of execution.",
      "Coordinate handoffs and collect required approvals/evidence."
    ],
    "outOfScope": [
      "Execute production-impacting changes without required approvals.",
      "Override security controls or access entitlements."
    ],
    "operationalDetails": "\u2022 Assess the current state, blockers, and dependency chain.\n\u2022 Generate a coordinated plan (tasks, owners, due dates).\n\u2022 Request approvals where needed (CAB/change/dispatch).\n\u2022 Notify stakeholders and maintain a single source of truth in ITSM.\n\u2022 Track execution progress and follow up on overdue tasks.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 2544,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-034",
    "name": "Major Incident Commander Assistant",
    "businessDomain": "Assurance",
    "shortDescription": "Coordinates cross-team activities, approvals, and communications to keep delivery/assurance work on track.",
    "problemStatement": "Tag: Added; Domain: NOC / Assurance; Process: eTOM: Service Assurance | ITIL: Incident Management; Archetype: Coordinator/Assistant; Autonomy: Assistive",
    "goals": [
      "Coordinate cross-team execution and approvals to remove blockers quickly.",
      "Ensure communications are timely, consistent, and compliant.",
      "Track dependencies and ensure handoffs do not stall progress."
    ],
    "inScope": [
      "Create/update tasks and tickets in ITSM/CRM as part of execution.",
      "Coordinate handoffs and collect required approvals/evidence."
    ],
    "outOfScope": [
      "Execute production-impacting changes without required approvals.",
      "Override security controls or access entitlements."
    ],
    "operationalDetails": "\u2022 Assess the current state, blockers, and dependency chain.\n\u2022 Generate a coordinated plan (tasks, owners, due dates).\n\u2022 Request approvals where needed (CAB/change/dispatch).\n\u2022 Notify stakeholders and maintain a single source of truth in ITSM.\n\u2022 Track execution progress and follow up on overdue tasks.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 2586,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-035",
    "name": "Post-Incident Review Writer",
    "businessDomain": "Assurance",
    "shortDescription": "Provides specialized noc / assurance operational support capabilities.",
    "problemStatement": "Tag: Added; Domain: NOC / Assurance; Process: eTOM: Service Assurance, Service Problem Management | ITIL: Incident Management, Problem Management; Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 2628,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-036",
    "name": "Problem Management Coordinator",
    "businessDomain": "Assurance",
    "shortDescription": "Coordinates cross-team activities, approvals, and communications to keep delivery/assurance work on track.",
    "problemStatement": "Tag: Added; Domain: NOC / Assurance; Process: eTOM: Service Problem Management | ITIL: Problem Management; Archetype: Coordinator/Assistant; Autonomy: Assistive",
    "goals": [
      "Coordinate cross-team execution and approvals to remove blockers quickly.",
      "Ensure communications are timely, consistent, and compliant.",
      "Track dependencies and ensure handoffs do not stall progress."
    ],
    "inScope": [
      "Create/update tasks and tickets in ITSM/CRM as part of execution.",
      "Coordinate handoffs and collect required approvals/evidence."
    ],
    "outOfScope": [
      "Execute production-impacting changes without required approvals.",
      "Override security controls or access entitlements."
    ],
    "operationalDetails": "\u2022 Assess the current state, blockers, and dependency chain.\n\u2022 Generate a coordinated plan (tasks, owners, due dates).\n\u2022 Request approvals where needed (CAB/change/dispatch).\n\u2022 Notify stakeholders and maintain a single source of truth in ITSM.\n\u2022 Track execution progress and follow up on overdue tasks.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 2670,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-037",
    "name": "Recommendation Agent",
    "businessDomain": "Governance",
    "shortDescription": "Provides next-best-action guidance using historical knowledge, runbooks, and real-time telemetry.",
    "problemStatement": "Tag: From Image; Domain: NOC / Assurance; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Recommendation; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Recommend next-best-actions grounded in runbooks and known errors.",
      "Reduce time spent searching documentation and past cases.",
      "Improve first-contact resolution and consistency."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Analyze current context (symptoms, telemetry, history).\n\u2022 Retrieve best-matching runbooks/KB and similar cases.\n\u2022 Generate ranked recommendations with rationale and prerequisites.\n\u2022 Suggest the next diagnostic step and success criteria.\n\u2022 Log which recommendations were accepted and outcomes.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 2712,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-038",
    "name": "Remediation Agent",
    "businessDomain": "Network Operations",
    "shortDescription": "Recommends and/or executes safe remediation actions to restore service while maintaining governance controls.",
    "problemStatement": "Tag: From Image; Domain: NOC / Assurance; Process: eTOM: Service Assurance | ITIL: Incident Management; Archetype: Remediation; Autonomy: Semi-autonomous (approval for changes)",
    "goals": [
      "Restore service quickly using safe, approved actions.",
      "Recommend remediation steps with risk and rollback plans.",
      "Ensure tickets are updated with actions, timestamps, and evidence."
    ],
    "inScope": [
      "Create/update tasks and tickets in ITSM/CRM as part of execution.",
      "Coordinate handoffs and collect required approvals/evidence."
    ],
    "outOfScope": [
      "Execute production-impacting changes without required approvals.",
      "Override security controls or access entitlements."
    ],
    "operationalDetails": "\u2022 Confirm incident context, severity, and any active change windows.\n\u2022 Retrieve relevant runbooks/known errors and recent changes.\n\u2022 Propose remediation plan with risk and rollback steps.\n\u2022 Obtain required approvals (change/CAB) if action is impactful.\n\u2022 Execute remediation (automated or guided) and capture evidence.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications",
      "Executed runbook steps (where approved)"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      },
      {
        "name": "Automation/orchestration (Flow/RPA/Ansible)",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 2754,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-039",
    "name": "Resolution validator",
    "businessDomain": "Governance",
    "shortDescription": "Validates records, configurations, or outcomes against business rules, standards, and policy controls.",
    "problemStatement": "Tag: From Image; Domain: NOC / Assurance; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Validator; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Ensure records/configurations meet required completeness and policy rules before progressing.",
      "Prevent avoidable fallout, rework, and SLA breaches by catching issues early.",
      "Provide clear, actionable validation failures and suggested fixes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Load the record and required reference data (catalog, policy, CMDB).\n\u2022 Run rule checks (mandatory fields, eligibility, policy constraints).\n\u2022 Cross-validate against upstream/downstream dependencies.\n\u2022 If failures exist, generate actionable findings and suggested fixes.\n\u2022 Update record with validation status and evidence.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications",
      "Pass/fail decision with rule-level explanations"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 2796,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-040",
    "name": "Root Cause Analyst",
    "businessDomain": "Assurance",
    "shortDescription": "Provides specialized noc / assurance operational support capabilities.",
    "problemStatement": "Tag: Added; Domain: NOC / Assurance; Process: eTOM: Service Problem Management | ITIL: Problem Management; Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 2838,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-041",
    "name": "Ticket Categorization Agent",
    "businessDomain": "Governance",
    "shortDescription": "Classifies and routes work items to the correct queue, team, or workflow to minimize triage delays.",
    "problemStatement": "Tag: From Image; Domain: NOC / Assurance; Process: eTOM: Service Assurance | ITIL: Incident Management; Archetype: Router/Categorizer; Autonomy: Semi-autonomous",
    "goals": [
      "Assign work to the correct resolver group/workflow on first pass.",
      "Reduce mean time to triage and misroutes.",
      "Standardize categorization and priority using rules and ML signals."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Read the work item context (summary, category, signals, attachments).\n\u2022 Classify using rules + ML features (keywords, topology, history).\n\u2022 Select target queue/group and recommended priority/severity.\n\u2022 Apply routing decision and document rationale.\n\u2022 Notify assignee and stakeholders; set timers/SLAs.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications",
      "Assigned queue/group"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 2880,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-042",
    "name": "Ticket validator",
    "businessDomain": "Governance",
    "shortDescription": "Validates records, configurations, or outcomes against business rules, standards, and policy controls.",
    "problemStatement": "Tag: From Image; Domain: NOC / Assurance; Process: eTOM: Service Assurance | ITIL: Incident Management; Archetype: Validator; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Ensure records/configurations meet required completeness and policy rules before progressing.",
      "Prevent avoidable fallout, rework, and SLA breaches by catching issues early.",
      "Provide clear, actionable validation failures and suggested fixes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Load the record and required reference data (catalog, policy, CMDB).\n\u2022 Run rule checks (mandatory fields, eligibility, policy constraints).\n\u2022 Cross-validate against upstream/downstream dependencies.\n\u2022 If failures exist, generate actionable findings and suggested fixes.\n\u2022 Update record with validation status and evidence.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications",
      "Pass/fail decision with rule-level explanations"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 2922,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-043",
    "name": "Analog tester",
    "businessDomain": "Network Operations",
    "shortDescription": "Runs configuration and diagnostic tests (remote or guided) and captures results for troubleshooting and closure.",
    "problemStatement": "Tag: From Image; Domain: Service Assurance; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Configuration/Test; Autonomy: Assistive",
    "goals": [
      "Execute diagnostics/config changes safely and capture results.",
      "Reduce repeat tests and ensure consistent troubleshooting.",
      "Improve closure quality with objective evidence."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Confirm test scope and required access (device, circuit, credentials).\n\u2022 Run diagnostic commands/tests using approved methods.\n\u2022 Interpret results against baselines and thresholds.\n\u2022 If safe, apply approved configuration adjustments.\n\u2022 Re-test and confirm improvement or isolate fault domain.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications",
      "Test results and evidence (screenshots/log snippets)"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 2964,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-044",
    "name": "Case follower",
    "businessDomain": "Governance",
    "shortDescription": "Tracks progress, milestones, and SLA/SLO risks; escalates proactively when thresholds are breached.",
    "problemStatement": "Tag: From Image; Domain: Service Assurance; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Monitor/Tracker; Autonomy: Semi-autonomous",
    "goals": [
      "Provide continuous visibility into milestone and SLA/SLO progress.",
      "Detect risk early (jeopardy) and trigger escalation paths.",
      "Reduce status-chasing by stakeholders via proactive updates."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Identify the population to monitor (orders, milestones, tickets).\n\u2022 Pull latest status from systems of record and compute deltas.\n\u2022 Evaluate SLA/milestone thresholds and leading indicators.\n\u2022 Create/update jeopardy flags and risk reasons.\n\u2022 Notify owners with recommended actions and due times.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications",
      "Milestone/SLA status snapshots"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 3006,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-045",
    "name": "Case summarizer",
    "businessDomain": "Governance",
    "shortDescription": "Summarizes cases/incidents into actionable handoffs, timelines, and clear status for stakeholders.",
    "problemStatement": "Tag: From Image; Domain: Service Assurance; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Summarizer; Autonomy: Semi-autonomous",
    "goals": [
      "Summarize complex cases into clear status, timeline, and next steps.",
      "Reduce handoff friction across shifts and teams.",
      "Support stakeholder updates and post-incident documentation."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect key artifacts (ticket notes, alarms, changes, comms).\n\u2022 Extract timeline of events and key decision points.\n\u2022 Summarize current status, customer impact, and actions taken.\n\u2022 List clear next steps with owners and ETA assumptions.\n\u2022 Publish summary to ticket and stakeholder channels.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications",
      "Executive summary, timeline, next steps"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 3048,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-046",
    "name": "Case/Issue summarizer",
    "businessDomain": "Network Operations",
    "shortDescription": "Summarizes cases/incidents into actionable handoffs, timelines, and clear status for stakeholders.",
    "problemStatement": "Tag: From Image; Domain: Service Assurance; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Summarizer; Autonomy: Semi-autonomous",
    "goals": [
      "Summarize complex cases into clear status, timeline, and next steps.",
      "Reduce handoff friction across shifts and teams.",
      "Support stakeholder updates and post-incident documentation."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect key artifacts (ticket notes, alarms, changes, comms).\n\u2022 Extract timeline of events and key decision points.\n\u2022 Summarize current status, customer impact, and actions taken.\n\u2022 List clear next steps with owners and ETA assumptions.\n\u2022 Publish summary to ticket and stakeholder channels.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications",
      "Executive summary, timeline, next steps"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 3090,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-047",
    "name": "Case/Ticket follower",
    "businessDomain": "Governance",
    "shortDescription": "Tracks progress, milestones, and SLA/SLO risks; escalates proactively when thresholds are breached.",
    "problemStatement": "Tag: From Image; Domain: Service Assurance; Process: eTOM: Service Assurance | ITIL: Incident Management; Archetype: Monitor/Tracker; Autonomy: Semi-autonomous",
    "goals": [
      "Provide continuous visibility into milestone and SLA/SLO progress.",
      "Detect risk early (jeopardy) and trigger escalation paths.",
      "Reduce status-chasing by stakeholders via proactive updates."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Identify the population to monitor (orders, milestones, tickets).\n\u2022 Pull latest status from systems of record and compute deltas.\n\u2022 Evaluate SLA/milestone thresholds and leading indicators.\n\u2022 Create/update jeopardy flags and risk reasons.\n\u2022 Notify owners with recommended actions and due times.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications",
      "Milestone/SLA status snapshots"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 3132,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-048",
    "name": "Circuit Health check analyzer",
    "businessDomain": "Governance",
    "shortDescription": "Validates records, configurations, or outcomes against business rules, standards, and policy controls.",
    "problemStatement": "Tag: From Image; Domain: Service Assurance; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Validator; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Ensure records/configurations meet required completeness and policy rules before progressing.",
      "Prevent avoidable fallout, rework, and SLA breaches by catching issues early.",
      "Provide clear, actionable validation failures and suggested fixes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Load the record and required reference data (catalog, policy, CMDB).\n\u2022 Run rule checks (mandatory fields, eligibility, policy constraints).\n\u2022 Cross-validate against upstream/downstream dependencies.\n\u2022 If failures exist, generate actionable findings and suggested fixes.\n\u2022 Update record with validation status and evidence.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications",
      "Pass/fail decision with rule-level explanations"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 3174,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-049",
    "name": "Confirmation assistant",
    "businessDomain": "Governance",
    "shortDescription": "Coordinates cross-team activities, approvals, and communications to keep delivery/assurance work on track.",
    "problemStatement": "Tag: From Image; Domain: Service Assurance; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Coordinator/Assistant; Autonomy: Assistive",
    "goals": [
      "Coordinate cross-team execution and approvals to remove blockers quickly.",
      "Ensure communications are timely, consistent, and compliant.",
      "Track dependencies and ensure handoffs do not stall progress."
    ],
    "inScope": [
      "Create/update tasks and tickets in ITSM/CRM as part of execution.",
      "Coordinate handoffs and collect required approvals/evidence."
    ],
    "outOfScope": [
      "Execute production-impacting changes without required approvals.",
      "Override security controls or access entitlements."
    ],
    "operationalDetails": "\u2022 Assess the current state, blockers, and dependency chain.\n\u2022 Generate a coordinated plan (tasks, owners, due dates).\n\u2022 Request approvals where needed (CAB/change/dispatch).\n\u2022 Notify stakeholders and maintain a single source of truth in ITSM.\n\u2022 Track execution progress and follow up on overdue tasks.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 3216,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-050",
    "name": "Connectivity validator",
    "businessDomain": "Network Operations",
    "shortDescription": "Validates records, configurations, or outcomes against business rules, standards, and policy controls.",
    "problemStatement": "Tag: From Image; Domain: Service Assurance; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Validator; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Ensure records/configurations meet required completeness and policy rules before progressing.",
      "Prevent avoidable fallout, rework, and SLA breaches by catching issues early.",
      "Provide clear, actionable validation failures and suggested fixes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Load the record and required reference data (catalog, policy, CMDB).\n\u2022 Run rule checks (mandatory fields, eligibility, policy constraints).\n\u2022 Cross-validate against upstream/downstream dependencies.\n\u2022 If failures exist, generate actionable findings and suggested fixes.\n\u2022 Update record with validation status and evidence.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications",
      "Pass/fail decision with rule-level explanations"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 3258,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-051",
    "name": "Dispatch coordinator",
    "businessDomain": "Network Operations",
    "shortDescription": "Coordinates cross-team activities, approvals, and communications to keep delivery/assurance work on track.",
    "problemStatement": "Tag: From Image; Domain: Service Assurance; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Coordinator/Assistant; Autonomy: Assistive",
    "goals": [
      "Coordinate cross-team execution and approvals to remove blockers quickly.",
      "Ensure communications are timely, consistent, and compliant.",
      "Track dependencies and ensure handoffs do not stall progress."
    ],
    "inScope": [
      "Create/update tasks and tickets in ITSM/CRM as part of execution.",
      "Coordinate handoffs and collect required approvals/evidence."
    ],
    "outOfScope": [
      "Execute production-impacting changes without required approvals.",
      "Override security controls or access entitlements."
    ],
    "operationalDetails": "\u2022 Assess the current state, blockers, and dependency chain.\n\u2022 Generate a coordinated plan (tasks, owners, due dates).\n\u2022 Request approvals where needed (CAB/change/dispatch).\n\u2022 Notify stakeholders and maintain a single source of truth in ITSM.\n\u2022 Track execution progress and follow up on overdue tasks.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 3300,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-052",
    "name": "ISDN Loop Tester",
    "businessDomain": "Network Operations",
    "shortDescription": "Runs configuration and diagnostic tests (remote or guided) and captures results for troubleshooting and closure.",
    "problemStatement": "Tag: From Image; Domain: Service Assurance; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Configuration/Test; Autonomy: Assistive",
    "goals": [
      "Execute diagnostics/config changes safely and capture results.",
      "Reduce repeat tests and ensure consistent troubleshooting.",
      "Improve closure quality with objective evidence."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Confirm test scope and required access (device, circuit, credentials).\n\u2022 Run diagnostic commands/tests using approved methods.\n\u2022 Interpret results against baselines and thresholds.\n\u2022 If safe, apply approved configuration adjustments.\n\u2022 Re-test and confirm improvement or isolate fault domain.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications",
      "Test results and evidence (screenshots/log snippets)"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 3342,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-053",
    "name": "Manager router analyzer",
    "businessDomain": "Network Operations",
    "shortDescription": "Classifies and routes work items to the correct queue, team, or workflow to minimize triage delays.",
    "problemStatement": "Tag: From Image; Domain: Service Assurance; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Router/Categorizer; Autonomy: Semi-autonomous",
    "goals": [
      "Assign work to the correct resolver group/workflow on first pass.",
      "Reduce mean time to triage and misroutes.",
      "Standardize categorization and priority using rules and ML signals."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Read the work item context (summary, category, signals, attachments).\n\u2022 Classify using rules + ML features (keywords, topology, history).\n\u2022 Select target queue/group and recommended priority/severity.\n\u2022 Apply routing decision and document rationale.\n\u2022 Notify assignee and stakeholders; set timers/SLAs.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications",
      "Assigned queue/group"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 3384,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-054",
    "name": "MDS Validator",
    "businessDomain": "Governance",
    "shortDescription": "Validates records, configurations, or outcomes against business rules, standards, and policy controls.",
    "problemStatement": "Tag: From Image; Domain: Service Assurance; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Validator; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Ensure records/configurations meet required completeness and policy rules before progressing.",
      "Prevent avoidable fallout, rework, and SLA breaches by catching issues early.",
      "Provide clear, actionable validation failures and suggested fixes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Load the record and required reference data (catalog, policy, CMDB).\n\u2022 Run rule checks (mandatory fields, eligibility, policy constraints).\n\u2022 Cross-validate against upstream/downstream dependencies.\n\u2022 If failures exist, generate actionable findings and suggested fixes.\n\u2022 Update record with validation status and evidence.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications",
      "Pass/fail decision with rule-level explanations"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 3426,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-055",
    "name": "Modem configuration",
    "businessDomain": "Network Operations",
    "shortDescription": "Runs configuration and diagnostic tests (remote or guided) and captures results for troubleshooting and closure.",
    "problemStatement": "Tag: From Image; Domain: Service Assurance; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Configuration/Test; Autonomy: Assistive",
    "goals": [
      "Execute diagnostics/config changes safely and capture results.",
      "Reduce repeat tests and ensure consistent troubleshooting.",
      "Improve closure quality with objective evidence."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Confirm test scope and required access (device, circuit, credentials).\n\u2022 Run diagnostic commands/tests using approved methods.\n\u2022 Interpret results against baselines and thresholds.\n\u2022 If safe, apply approved configuration adjustments.\n\u2022 Re-test and confirm improvement or isolate fault domain.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications",
      "Test results and evidence (screenshots/log snippets)"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 3468,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-056",
    "name": "Predictive Maintenance Agent",
    "businessDomain": "Governance",
    "shortDescription": "Predicts delivery/assurance risk (e.g., jeopardy) and recommends mitigation actions before SLAs are impacted.",
    "problemStatement": "Tag: From Image; Domain: Service Assurance; Process: eTOM: Service Configuration & Activation | ITIL: Change Enablement; Archetype: Predictor; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Predict jeopardy, fallout, or outage risk using leading indicators.",
      "Recommend preventative actions and create pre-emptive tasks.",
      "Continuously calibrate predictions using outcomes and feedback."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect leading indicators and historical outcomes for similar items.\n\u2022 Run prediction model / rules to compute risk score.\n\u2022 Explain the top drivers contributing to risk.\n\u2022 Recommend mitigation options and estimate impact.\n\u2022 Create pre-emptive tasks or advisories (with owner assignment).",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications",
      "Risk score with drivers"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 3510,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-057",
    "name": "Resolution escalation/Triage",
    "businessDomain": "Network Operations",
    "shortDescription": "Classifies and routes work items to the correct queue, team, or workflow to minimize triage delays.",
    "problemStatement": "Tag: From Image; Domain: Service Assurance; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Router/Categorizer; Autonomy: Semi-autonomous",
    "goals": [
      "Assign work to the correct resolver group/workflow on first pass.",
      "Reduce mean time to triage and misroutes.",
      "Standardize categorization and priority using rules and ML signals."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Read the work item context (summary, category, signals, attachments).\n\u2022 Classify using rules + ML features (keywords, topology, history).\n\u2022 Select target queue/group and recommended priority/severity.\n\u2022 Apply routing decision and document rationale.\n\u2022 Notify assignee and stakeholders; set timers/SLAs.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications",
      "Assigned queue/group"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 3552,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-058",
    "name": "Ticket creator",
    "businessDomain": "Governance",
    "shortDescription": "Creates structured tickets/cases/requests from unstructured inputs, events, or stakeholder communications.",
    "problemStatement": "Tag: From Image; Domain: Service Assurance; Process: eTOM: Service Assurance | ITIL: Incident Management; Archetype: Creator; Autonomy: Semi-autonomous",
    "goals": [
      "Create high-quality tickets/cases with correct categorization and required data.",
      "Reduce time to log issues and improve downstream routing accuracy.",
      "Ensure consistent templates and mandatory fields are populated."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Capture intake context (event, user message, email, phone notes).\n\u2022 Determine correct template/type (incident, request, problem, change).\n\u2022 Populate mandatory fields and link related CIs/services/customers.\n\u2022 Assign category/priority and route to correct owner queue.\n\u2022 Create the record and confirm creation with requester.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 3594,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-059",
    "name": "Ticket reviewer",
    "businessDomain": "Network Operations",
    "shortDescription": "Provides specialized service assurance operational support capabilities.",
    "problemStatement": "Tag: From Image; Domain: Service Assurance; Process: eTOM: Service Assurance | ITIL: Incident Management; Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Incident/ticket record",
      "Alarms/events",
      "Topology/CMDB relationships",
      "Performance and log data"
    ],
    "outputs": [
      "Ticket updates (work notes, resolution, RCA hints)",
      "Recommended remediation steps",
      "Escalation notifications"
    ],
    "securityControls": [
      "Data sensitivity: Confidential (customer + network data).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "MTTR (minutes/hours)",
        "target": "TBD"
      },
      {
        "name": "SLA compliance (%)",
        "target": "TBD"
      },
      {
        "name": "First-time-right resolution (%)",
        "target": "TBD"
      },
      {
        "name": "Alarm-to-ticket time",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "ServiceNow ITSM",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS fault/perf/NMS",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "Observability (logs/metrics)",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 3636,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-060",
    "name": "Activation Validator",
    "businessDomain": "Fulfillment",
    "shortDescription": "Validates records, configurations, or outcomes against business rules, standards, and policy controls.",
    "problemStatement": "Tag: Added; Domain: Service Delivery / Fulfillment; Process: eTOM: Order Handling / Fulfillment | ITIL: Service Request Management; Archetype: Validator; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Ensure records/configurations meet required completeness and policy rules before progressing.",
      "Prevent avoidable fallout, rework, and SLA breaches by catching issues early.",
      "Provide clear, actionable validation failures and suggested fixes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Load the record and required reference data (catalog, policy, CMDB).\n\u2022 Run rule checks (mandatory fields, eligibility, policy constraints).\n\u2022 Cross-validate against upstream/downstream dependencies.\n\u2022 If failures exist, generate actionable findings and suggested fixes.\n\u2022 Update record with validation status and evidence.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications",
      "Pass/fail decision with rule-level explanations"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 3678,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-061",
    "name": "Appointment Scheduling Agent",
    "businessDomain": "Fulfillment",
    "shortDescription": "Provides specialized service delivery / fulfillment operational support capabilities.",
    "problemStatement": "Tag: Added; Domain: Service Delivery / Fulfillment; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 3720,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-062",
    "name": "Assignment agent",
    "businessDomain": "Governance",
    "shortDescription": "Provides specialized service delivery / fulfillment operational support capabilities.",
    "problemStatement": "Tag: From Image; Domain: Service Delivery / Fulfillment; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 3762,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-063",
    "name": "Billing Activation Checker",
    "businessDomain": "Fulfillment",
    "shortDescription": "Validates records, configurations, or outcomes against business rules, standards, and policy controls.",
    "problemStatement": "Tag: Added; Domain: Service Delivery / Fulfillment; Process: eTOM: Order Handling / Fulfillment | ITIL: Service Request Management; Archetype: Validator; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Ensure records/configurations meet required completeness and policy rules before progressing.",
      "Prevent avoidable fallout, rework, and SLA breaches by catching issues early.",
      "Provide clear, actionable validation failures and suggested fixes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Load the record and required reference data (catalog, policy, CMDB).\n\u2022 Run rule checks (mandatory fields, eligibility, policy constraints).\n\u2022 Cross-validate against upstream/downstream dependencies.\n\u2022 If failures exist, generate actionable findings and suggested fixes.\n\u2022 Update record with validation status and evidence.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications",
      "Pass/fail decision with rule-level explanations"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 3804,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-064",
    "name": "BOM validator",
    "businessDomain": "Governance",
    "shortDescription": "Validates records, configurations, or outcomes against business rules, standards, and policy controls.",
    "problemStatement": "Tag: From Image; Domain: Service Delivery / Fulfillment; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Validator; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Ensure records/configurations meet required completeness and policy rules before progressing.",
      "Prevent avoidable fallout, rework, and SLA breaches by catching issues early.",
      "Provide clear, actionable validation failures and suggested fixes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Load the record and required reference data (catalog, policy, CMDB).\n\u2022 Run rule checks (mandatory fields, eligibility, policy constraints).\n\u2022 Cross-validate against upstream/downstream dependencies.\n\u2022 If failures exist, generate actionable findings and suggested fixes.\n\u2022 Update record with validation status and evidence.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications",
      "Pass/fail decision with rule-level explanations"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 3846,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-065",
    "name": "CAB Assistant",
    "businessDomain": "Governance",
    "shortDescription": "Coordinates cross-team activities, approvals, and communications to keep delivery/assurance work on track.",
    "problemStatement": "Tag: From Image; Domain: Service Delivery / Fulfillment; Process: eTOM: Service Configuration & Activation | ITIL: Change Enablement; Archetype: Coordinator/Assistant; Autonomy: Assistive",
    "goals": [
      "Coordinate cross-team execution and approvals to remove blockers quickly.",
      "Ensure communications are timely, consistent, and compliant.",
      "Track dependencies and ensure handoffs do not stall progress."
    ],
    "inScope": [
      "Create/update tasks and tickets in ITSM/CRM as part of execution.",
      "Coordinate handoffs and collect required approvals/evidence."
    ],
    "outOfScope": [
      "Execute production-impacting changes without required approvals.",
      "Override security controls or access entitlements."
    ],
    "operationalDetails": "\u2022 Assess the current state, blockers, and dependency chain.\n\u2022 Generate a coordinated plan (tasks, owners, due dates).\n\u2022 Request approvals where needed (CAB/change/dispatch).\n\u2022 Notify stakeholders and maintain a single source of truth in ITSM.\n\u2022 Track execution progress and follow up on overdue tasks.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 3888,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-066",
    "name": "Change coordinator",
    "businessDomain": "Governance",
    "shortDescription": "Coordinates cross-team activities, approvals, and communications to keep delivery/assurance work on track.",
    "problemStatement": "Tag: From Image; Domain: Service Delivery / Fulfillment; Process: eTOM: Service Configuration & Activation | ITIL: Change Enablement; Archetype: Coordinator/Assistant; Autonomy: Assistive",
    "goals": [
      "Coordinate cross-team execution and approvals to remove blockers quickly.",
      "Ensure communications are timely, consistent, and compliant.",
      "Track dependencies and ensure handoffs do not stall progress."
    ],
    "inScope": [
      "Create/update tasks and tickets in ITSM/CRM as part of execution.",
      "Coordinate handoffs and collect required approvals/evidence."
    ],
    "outOfScope": [
      "Execute production-impacting changes without required approvals.",
      "Override security controls or access entitlements."
    ],
    "operationalDetails": "\u2022 Assess the current state, blockers, and dependency chain.\n\u2022 Generate a coordinated plan (tasks, owners, due dates).\n\u2022 Request approvals where needed (CAB/change/dispatch).\n\u2022 Notify stakeholders and maintain a single source of truth in ITSM.\n\u2022 Track execution progress and follow up on overdue tasks.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 3930,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-067",
    "name": "Checklist validator",
    "businessDomain": "Governance",
    "shortDescription": "Validates records, configurations, or outcomes against business rules, standards, and policy controls.",
    "problemStatement": "Tag: From Image; Domain: Service Delivery / Fulfillment; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Validator; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Ensure records/configurations meet required completeness and policy rules before progressing.",
      "Prevent avoidable fallout, rework, and SLA breaches by catching issues early.",
      "Provide clear, actionable validation failures and suggested fixes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Load the record and required reference data (catalog, policy, CMDB).\n\u2022 Run rule checks (mandatory fields, eligibility, policy constraints).\n\u2022 Cross-validate against upstream/downstream dependencies.\n\u2022 If failures exist, generate actionable findings and suggested fixes.\n\u2022 Update record with validation status and evidence.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications",
      "Pass/fail decision with rule-level explanations"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 3972,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-068",
    "name": "Circuit orchestrator",
    "businessDomain": "Governance",
    "shortDescription": "Orchestrates multi-system workflows to execute repeatable operational tasks with controls and auditability.",
    "problemStatement": "Tag: From Image; Domain: Service Delivery / Fulfillment; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Orchestrator/Executor; Autonomy: Semi-autonomous (approval for changes)",
    "goals": [
      "Execute repeatable workflows reliably across OSS/BSS/ITSM tools.",
      "Maintain idempotency, rollback safety, and full audit trails.",
      "Minimize manual steps while respecting approval gates."
    ],
    "inScope": [
      "Create/update tasks and tickets in ITSM/CRM as part of execution.",
      "Coordinate handoffs and collect required approvals/evidence."
    ],
    "outOfScope": [
      "Execute production-impacting changes without required approvals.",
      "Override security controls or access entitlements."
    ],
    "operationalDetails": "\u2022 Validate prerequisites (approvals, maintenance window, access).\n\u2022 Select the appropriate workflow/runbook based on context.\n\u2022 Execute automated steps across tools with checkpoints.\n\u2022 Record all actions, responses, and artifacts for audit.\n\u2022 Run post-action verification checks (health, tests, KPIs).",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      },
      {
        "name": "Automation/orchestration (Flow/RPA/Ansible)",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 4014,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-069",
    "name": "Customer Notification Agent",
    "businessDomain": "Fulfillment",
    "shortDescription": "Provides specialized service delivery / fulfillment operational support capabilities.",
    "problemStatement": "Tag: Added; Domain: Service Delivery / Fulfillment; Process: eTOM: Customer Relationship Management | ITIL: Customer Service Management; Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 4056,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-070",
    "name": "Cutover Planner",
    "businessDomain": "Fulfillment",
    "shortDescription": "Provides specialized service delivery / fulfillment operational support capabilities.",
    "problemStatement": "Tag: Added; Domain: Service Delivery / Fulfillment; Process: eTOM: Service Configuration & Activation | ITIL: Change Enablement; Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 4098,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-071",
    "name": "Equipment order assist",
    "businessDomain": "Governance",
    "shortDescription": "Provides specialized service delivery / fulfillment operational support capabilities.",
    "problemStatement": "Tag: From Image; Domain: Service Delivery / Fulfillment; Process: eTOM: Order Handling / Fulfillment | ITIL: Service Request Management; Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 4140,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-072",
    "name": "Exception router",
    "businessDomain": "Governance",
    "shortDescription": "Classifies and routes work items to the correct queue, team, or workflow to minimize triage delays.",
    "problemStatement": "Tag: From Image; Domain: Service Delivery / Fulfillment; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Router/Categorizer; Autonomy: Semi-autonomous",
    "goals": [
      "Assign work to the correct resolver group/workflow on first pass.",
      "Reduce mean time to triage and misroutes.",
      "Standardize categorization and priority using rules and ML signals."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Read the work item context (summary, category, signals, attachments).\n\u2022 Classify using rules + ML features (keywords, topology, history).\n\u2022 Select target queue/group and recommended priority/severity.\n\u2022 Apply routing decision and document rationale.\n\u2022 Notify assignee and stakeholders; set timers/SLAs.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications",
      "Assigned queue/group"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 4182,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-073",
    "name": "Inventory Reconciliation Agent",
    "businessDomain": "Fulfillment",
    "shortDescription": "Provides specialized service delivery / fulfillment operational support capabilities.",
    "problemStatement": "Tag: Added; Domain: Service Delivery / Fulfillment; Process: eTOM: Order Handling / Fulfillment | ITIL: Service Request Management; Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 4224,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-074",
    "name": "Jeopardy predictor",
    "businessDomain": "Governance",
    "shortDescription": "Predicts delivery/assurance risk (e.g., jeopardy) and recommends mitigation actions before SLAs are impacted.",
    "problemStatement": "Tag: From Image; Domain: Service Delivery / Fulfillment; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Predictor; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Predict jeopardy, fallout, or outage risk using leading indicators.",
      "Recommend preventative actions and create pre-emptive tasks.",
      "Continuously calibrate predictions using outcomes and feedback."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect leading indicators and historical outcomes for similar items.\n\u2022 Run prediction model / rules to compute risk score.\n\u2022 Explain the top drivers contributing to risk.\n\u2022 Recommend mitigation options and estimate impact.\n\u2022 Create pre-emptive tasks or advisories (with owner assignment).",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications",
      "Risk score with drivers"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 4266,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-075",
    "name": "Jeopardy router",
    "businessDomain": "Governance",
    "shortDescription": "Classifies and routes work items to the correct queue, team, or workflow to minimize triage delays.",
    "problemStatement": "Tag: From Image; Domain: Service Delivery / Fulfillment; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Router/Categorizer; Autonomy: Semi-autonomous",
    "goals": [
      "Assign work to the correct resolver group/workflow on first pass.",
      "Reduce mean time to triage and misroutes.",
      "Standardize categorization and priority using rules and ML signals."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Read the work item context (summary, category, signals, attachments).\n\u2022 Classify using rules + ML features (keywords, topology, history).\n\u2022 Select target queue/group and recommended priority/severity.\n\u2022 Apply routing decision and document rationale.\n\u2022 Notify assignee and stakeholders; set timers/SLAs.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications",
      "Assigned queue/group"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 4308,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-076",
    "name": "Lifecycle coordinator",
    "businessDomain": "Governance",
    "shortDescription": "Coordinates cross-team activities, approvals, and communications to keep delivery/assurance work on track.",
    "problemStatement": "Tag: From Image; Domain: Service Delivery / Fulfillment; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Coordinator/Assistant; Autonomy: Assistive",
    "goals": [
      "Coordinate cross-team execution and approvals to remove blockers quickly.",
      "Ensure communications are timely, consistent, and compliant.",
      "Track dependencies and ensure handoffs do not stall progress."
    ],
    "inScope": [
      "Create/update tasks and tickets in ITSM/CRM as part of execution.",
      "Coordinate handoffs and collect required approvals/evidence."
    ],
    "outOfScope": [
      "Execute production-impacting changes without required approvals.",
      "Override security controls or access entitlements."
    ],
    "operationalDetails": "\u2022 Assess the current state, blockers, and dependency chain.\n\u2022 Generate a coordinated plan (tasks, owners, due dates).\n\u2022 Request approvals where needed (CAB/change/dispatch).\n\u2022 Notify stakeholders and maintain a single source of truth in ITSM.\n\u2022 Track execution progress and follow up on overdue tasks.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 4350,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-077",
    "name": "Meeting Scheduler",
    "businessDomain": "Governance",
    "shortDescription": "Coordinates calendars/appointments and schedules required interactions with stakeholders or field teams.",
    "problemStatement": "Tag: From Image; Domain: Service Delivery / Fulfillment; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Scheduler; Autonomy: Assistive",
    "goals": [
      "Schedule meetings/appointments efficiently with minimal back-and-forth.",
      "Ensure required participants, artifacts, and agendas are included.",
      "Auto-update stakeholders when schedules change."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Identify required participants, constraints, and time windows.\n\u2022 Check calendars/availability and propose candidate slots.\n\u2022 Confirm agenda and required artifacts with requester.\n\u2022 Book meeting/appointment and send invites/notifications.\n\u2022 Handle reschedules and update all linked records.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 4392,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-078",
    "name": "Metadata extractor",
    "businessDomain": "Governance",
    "shortDescription": "Parses intake artifacts and extracts structured metadata to populate systems and downstream workflows.",
    "problemStatement": "Tag: From Image; Domain: Service Delivery / Fulfillment; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Parser/Extractor; Autonomy: Semi-autonomous",
    "goals": [
      "Convert unstructured intake (emails/SOWs/forms) into structured fields with high accuracy.",
      "Reduce manual rekeying and downstream errors in order/ticket processing.",
      "Flag missing or ambiguous fields and request clarification early."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Ingest the source artifact(s) and identify document type/template.\n\u2022 Extract candidate fields using parsing/OCR and normalization rules.\n\u2022 Validate extracted values (format, allowed values, cross-field checks).\n\u2022 Compute confidence scores and flag low-confidence items.\n\u2022 Write structured fields to the system of record and attach evidence.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications",
      "Extracted structured fields"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 4434,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-079",
    "name": "Migration Manager",
    "businessDomain": "Governance",
    "shortDescription": "Coordinates cross-team activities, approvals, and communications to keep delivery/assurance work on track.",
    "problemStatement": "Tag: From Image; Domain: Service Delivery / Fulfillment; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Coordinator/Assistant; Autonomy: Assistive",
    "goals": [
      "Coordinate cross-team execution and approvals to remove blockers quickly.",
      "Ensure communications are timely, consistent, and compliant.",
      "Track dependencies and ensure handoffs do not stall progress."
    ],
    "inScope": [
      "Create/update tasks and tickets in ITSM/CRM as part of execution.",
      "Coordinate handoffs and collect required approvals/evidence."
    ],
    "outOfScope": [
      "Execute production-impacting changes without required approvals.",
      "Override security controls or access entitlements."
    ],
    "operationalDetails": "\u2022 Assess the current state, blockers, and dependency chain.\n\u2022 Generate a coordinated plan (tasks, owners, due dates).\n\u2022 Request approvals where needed (CAB/change/dispatch).\n\u2022 Notify stakeholders and maintain a single source of truth in ITSM.\n\u2022 Track execution progress and follow up on overdue tasks.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 4476,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-080",
    "name": "Milestone monitor",
    "businessDomain": "Governance",
    "shortDescription": "Tracks progress, milestones, and SLA/SLO risks; escalates proactively when thresholds are breached.",
    "problemStatement": "Tag: From Image; Domain: Service Delivery / Fulfillment; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Monitor/Tracker; Autonomy: Semi-autonomous",
    "goals": [
      "Provide continuous visibility into milestone and SLA/SLO progress.",
      "Detect risk early (jeopardy) and trigger escalation paths.",
      "Reduce status-chasing by stakeholders via proactive updates."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Identify the population to monitor (orders, milestones, tickets).\n\u2022 Pull latest status from systems of record and compute deltas.\n\u2022 Evaluate SLA/milestone thresholds and leading indicators.\n\u2022 Create/update jeopardy flags and risk reasons.\n\u2022 Notify owners with recommended actions and due times.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications",
      "Milestone/SLA status snapshots"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 4518,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-081",
    "name": "Number Porting Coordinator",
    "businessDomain": "Fulfillment",
    "shortDescription": "Coordinates cross-team activities, approvals, and communications to keep delivery/assurance work on track.",
    "problemStatement": "Tag: Added; Domain: Service Delivery / Fulfillment; Process: eTOM: Order Handling / Fulfillment | ITIL: Service Request Management; Archetype: Coordinator/Assistant; Autonomy: Assistive",
    "goals": [
      "Coordinate cross-team execution and approvals to remove blockers quickly.",
      "Ensure communications are timely, consistent, and compliant.",
      "Track dependencies and ensure handoffs do not stall progress."
    ],
    "inScope": [
      "Create/update tasks and tickets in ITSM/CRM as part of execution.",
      "Coordinate handoffs and collect required approvals/evidence."
    ],
    "outOfScope": [
      "Execute production-impacting changes without required approvals.",
      "Override security controls or access entitlements."
    ],
    "operationalDetails": "\u2022 Assess the current state, blockers, and dependency chain.\n\u2022 Generate a coordinated plan (tasks, owners, due dates).\n\u2022 Request approvals where needed (CAB/change/dispatch).\n\u2022 Notify stakeholders and maintain a single source of truth in ITSM.\n\u2022 Track execution progress and follow up on overdue tasks.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 4560,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-082",
    "name": "Order Fallout Analyzer",
    "businessDomain": "Fulfillment",
    "shortDescription": "Analyzes operational data to surface trends, anomalies, and actionable insights for decision-making.",
    "problemStatement": "Tag: Added; Domain: Service Delivery / Fulfillment; Process: eTOM: Order Handling / Fulfillment | ITIL: Service Request Management; Archetype: Analyzer/Insights; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Turn operational data into actionable insights and recommendations.",
      "Detect trends, hotspots, and improvement opportunities.",
      "Provide leadership-ready dashboards and narratives."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Define the analysis question (trend, anomaly, compliance, cost).\n\u2022 Pull data from authoritative sources (ITSM, OSS, data lake).\n\u2022 Compute metrics and identify significant patterns/outliers.\n\u2022 Generate insights with recommended actions and owners.\n\u2022 Publish dashboards/reports and track action adoption.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 4602,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-083",
    "name": "Order tracker",
    "businessDomain": "Governance",
    "shortDescription": "Tracks progress, milestones, and SLA/SLO risks; escalates proactively when thresholds are breached.",
    "problemStatement": "Tag: From Image; Domain: Service Delivery / Fulfillment; Process: eTOM: Order Handling / Fulfillment | ITIL: Service Request Management; Archetype: Monitor/Tracker; Autonomy: Semi-autonomous",
    "goals": [
      "Provide continuous visibility into milestone and SLA/SLO progress.",
      "Detect risk early (jeopardy) and trigger escalation paths.",
      "Reduce status-chasing by stakeholders via proactive updates."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Identify the population to monitor (orders, milestones, tickets).\n\u2022 Pull latest status from systems of record and compute deltas.\n\u2022 Evaluate SLA/milestone thresholds and leading indicators.\n\u2022 Create/update jeopardy flags and risk reasons.\n\u2022 Notify owners with recommended actions and due times.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications",
      "Milestone/SLA status snapshots"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 4644,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-084",
    "name": "Order validator",
    "businessDomain": "Governance",
    "shortDescription": "Validates records, configurations, or outcomes against business rules, standards, and policy controls.",
    "problemStatement": "Tag: From Image; Domain: Service Delivery / Fulfillment; Process: eTOM: Order Handling / Fulfillment | ITIL: Service Request Management; Archetype: Validator; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Ensure records/configurations meet required completeness and policy rules before progressing.",
      "Prevent avoidable fallout, rework, and SLA breaches by catching issues early.",
      "Provide clear, actionable validation failures and suggested fixes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Load the record and required reference data (catalog, policy, CMDB).\n\u2022 Run rule checks (mandatory fields, eligibility, policy constraints).\n\u2022 Cross-validate against upstream/downstream dependencies.\n\u2022 If failures exist, generate actionable findings and suggested fixes.\n\u2022 Update record with validation status and evidence.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications",
      "Pass/fail decision with rule-level explanations"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 4686,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-085",
    "name": "Partner Handoff Coordinator",
    "businessDomain": "Fulfillment",
    "shortDescription": "Coordinates cross-team activities, approvals, and communications to keep delivery/assurance work on track.",
    "problemStatement": "Tag: Added; Domain: Service Delivery / Fulfillment; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Coordinator/Assistant; Autonomy: Assistive",
    "goals": [
      "Coordinate cross-team execution and approvals to remove blockers quickly.",
      "Ensure communications are timely, consistent, and compliant.",
      "Track dependencies and ensure handoffs do not stall progress."
    ],
    "inScope": [
      "Create/update tasks and tickets in ITSM/CRM as part of execution.",
      "Coordinate handoffs and collect required approvals/evidence."
    ],
    "outOfScope": [
      "Execute production-impacting changes without required approvals.",
      "Override security controls or access entitlements."
    ],
    "operationalDetails": "\u2022 Assess the current state, blockers, and dependency chain.\n\u2022 Generate a coordinated plan (tasks, owners, due dates).\n\u2022 Request approvals where needed (CAB/change/dispatch).\n\u2022 Notify stakeholders and maintain a single source of truth in ITSM.\n\u2022 Track execution progress and follow up on overdue tasks.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 4728,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-086",
    "name": "Progress notifier",
    "businessDomain": "Governance",
    "shortDescription": "Provides specialized service delivery / fulfillment operational support capabilities.",
    "problemStatement": "Tag: From Image; Domain: Service Delivery / Fulfillment; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 4770,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-087",
    "name": "Provisioning Orchestrator",
    "businessDomain": "Fulfillment",
    "shortDescription": "Orchestrates multi-system workflows to execute repeatable operational tasks with controls and auditability.",
    "problemStatement": "Tag: Added; Domain: Service Delivery / Fulfillment; Process: eTOM: Order Handling / Fulfillment | ITIL: Service Request Management; Archetype: Orchestrator/Executor; Autonomy: Semi-autonomous (approval for changes)",
    "goals": [
      "Execute repeatable workflows reliably across OSS/BSS/ITSM tools.",
      "Maintain idempotency, rollback safety, and full audit trails.",
      "Minimize manual steps while respecting approval gates."
    ],
    "inScope": [
      "Create/update tasks and tickets in ITSM/CRM as part of execution.",
      "Coordinate handoffs and collect required approvals/evidence."
    ],
    "outOfScope": [
      "Execute production-impacting changes without required approvals.",
      "Override security controls or access entitlements."
    ],
    "operationalDetails": "\u2022 Validate prerequisites (approvals, maintenance window, access).\n\u2022 Select the appropriate workflow/runbook based on context.\n\u2022 Execute automated steps across tools with checkpoints.\n\u2022 Record all actions, responses, and artifacts for audit.\n\u2022 Run post-action verification checks (health, tests, KPIs).",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      },
      {
        "name": "Automation/orchestration (Flow/RPA/Ansible)",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 4812,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-088",
    "name": "Readiness validator",
    "businessDomain": "Governance",
    "shortDescription": "Validates records, configurations, or outcomes against business rules, standards, and policy controls.",
    "problemStatement": "Tag: From Image; Domain: Service Delivery / Fulfillment; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Validator; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Ensure records/configurations meet required completeness and policy rules before progressing.",
      "Prevent avoidable fallout, rework, and SLA breaches by catching issues early.",
      "Provide clear, actionable validation failures and suggested fixes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Load the record and required reference data (catalog, policy, CMDB).\n\u2022 Run rule checks (mandatory fields, eligibility, policy constraints).\n\u2022 Cross-validate against upstream/downstream dependencies.\n\u2022 If failures exist, generate actionable findings and suggested fixes.\n\u2022 Update record with validation status and evidence.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications",
      "Pass/fail decision with rule-level explanations"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 4854,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-089",
    "name": "Rollback Coordinator",
    "businessDomain": "Fulfillment",
    "shortDescription": "Coordinates cross-team activities, approvals, and communications to keep delivery/assurance work on track.",
    "problemStatement": "Tag: Added; Domain: Service Delivery / Fulfillment; Process: eTOM: Service Configuration & Activation | ITIL: Change Enablement; Archetype: Coordinator/Assistant; Autonomy: Assistive",
    "goals": [
      "Coordinate cross-team execution and approvals to remove blockers quickly.",
      "Ensure communications are timely, consistent, and compliant.",
      "Track dependencies and ensure handoffs do not stall progress."
    ],
    "inScope": [
      "Create/update tasks and tickets in ITSM/CRM as part of execution.",
      "Coordinate handoffs and collect required approvals/evidence."
    ],
    "outOfScope": [
      "Execute production-impacting changes without required approvals.",
      "Override security controls or access entitlements."
    ],
    "operationalDetails": "\u2022 Assess the current state, blockers, and dependency chain.\n\u2022 Generate a coordinated plan (tasks, owners, due dates).\n\u2022 Request approvals where needed (CAB/change/dispatch).\n\u2022 Notify stakeholders and maintain a single source of truth in ITSM.\n\u2022 Track execution progress and follow up on overdue tasks.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 4896,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-090",
    "name": "Site Validator",
    "businessDomain": "Governance",
    "shortDescription": "Validates records, configurations, or outcomes against business rules, standards, and policy controls.",
    "problemStatement": "Tag: From Image; Domain: Service Delivery / Fulfillment; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Validator; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Ensure records/configurations meet required completeness and policy rules before progressing.",
      "Prevent avoidable fallout, rework, and SLA breaches by catching issues early.",
      "Provide clear, actionable validation failures and suggested fixes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Load the record and required reference data (catalog, policy, CMDB).\n\u2022 Run rule checks (mandatory fields, eligibility, policy constraints).\n\u2022 Cross-validate against upstream/downstream dependencies.\n\u2022 If failures exist, generate actionable findings and suggested fixes.\n\u2022 Update record with validation status and evidence.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications",
      "Pass/fail decision with rule-level explanations"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 4938,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-091",
    "name": "SLA Guardian",
    "businessDomain": "Governance",
    "shortDescription": "Validates records, configurations, or outcomes against business rules, standards, and policy controls.",
    "problemStatement": "Tag: From Image; Domain: Service Delivery / Fulfillment; Process: eTOM: Service Quality Management, Risk & Compliance | ITIL: Service Level Management, Information Security Management; Archetype: Validator; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Ensure records/configurations meet required completeness and policy rules before progressing.",
      "Prevent avoidable fallout, rework, and SLA breaches by catching issues early.",
      "Provide clear, actionable validation failures and suggested fixes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Load the record and required reference data (catalog, policy, CMDB).\n\u2022 Run rule checks (mandatory fields, eligibility, policy constraints).\n\u2022 Cross-validate against upstream/downstream dependencies.\n\u2022 If failures exist, generate actionable findings and suggested fixes.\n\u2022 Update record with validation status and evidence.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications",
      "Pass/fail decision with rule-level explanations"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 4980,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-092",
    "name": "Ticket/Order parser",
    "businessDomain": "Governance",
    "shortDescription": "Parses intake artifacts and extracts structured metadata to populate systems and downstream workflows.",
    "problemStatement": "Tag: From Image; Domain: Service Delivery / Fulfillment; Process: eTOM: Service Assurance, Order Handling / Fulfillment | ITIL: Incident Management, Service Request Management; Archetype: Parser/Extractor; Autonomy: Semi-autonomous",
    "goals": [
      "Convert unstructured intake (emails/SOWs/forms) into structured fields with high accuracy.",
      "Reduce manual rekeying and downstream errors in order/ticket processing.",
      "Flag missing or ambiguous fields and request clarification early."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Ingest the source artifact(s) and identify document type/template.\n\u2022 Extract candidate fields using parsing/OCR and normalization rules.\n\u2022 Validate extracted values (format, allowed values, cross-field checks).\n\u2022 Compute confidence scores and flag low-confidence items.\n\u2022 Write structured fields to the system of record and attach evidence.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications",
      "Extracted structured fields"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 5022,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-093",
    "name": "TTU Executor",
    "businessDomain": "Governance",
    "shortDescription": "Orchestrates multi-system workflows to execute repeatable operational tasks with controls and auditability.",
    "problemStatement": "Tag: From Image; Domain: Service Delivery / Fulfillment; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Orchestrator/Executor; Autonomy: Semi-autonomous (approval for changes)",
    "goals": [
      "Execute repeatable workflows reliably across OSS/BSS/ITSM tools.",
      "Maintain idempotency, rollback safety, and full audit trails.",
      "Minimize manual steps while respecting approval gates."
    ],
    "inScope": [
      "Create/update tasks and tickets in ITSM/CRM as part of execution.",
      "Coordinate handoffs and collect required approvals/evidence."
    ],
    "outOfScope": [
      "Execute production-impacting changes without required approvals.",
      "Override security controls or access entitlements."
    ],
    "operationalDetails": "\u2022 Validate prerequisites (approvals, maintenance window, access).\n\u2022 Select the appropriate workflow/runbook based on context.\n\u2022 Execute automated steps across tools with checkpoints.\n\u2022 Record all actions, responses, and artifacts for audit.\n\u2022 Run post-action verification checks (health, tests, KPIs).",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Order cycle time",
        "target": "TBD"
      },
      {
        "name": "Fallout rate",
        "target": "TBD"
      },
      {
        "name": "Milestone on-time rate",
        "target": "TBD"
      },
      {
        "name": "Rework rate",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Order Mgmt (BSS)",
        "description": "Enterprise Tool"
      },
      {
        "name": "ServiceNow/Jira tasks",
        "description": "Enterprise Tool"
      },
      {
        "name": "OSS inventory/activation",
        "description": "Enterprise Tool"
      },
      {
        "name": "CMDB/topology",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/runbooks",
        "description": "Enterprise Tool"
      },
      {
        "name": "ChatOps",
        "description": "Enterprise Tool"
      },
      {
        "name": "Automation/orchestration (Flow/RPA/Ansible)",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 5064,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-094",
    "name": "Cancellation agent",
    "businessDomain": "Governance",
    "shortDescription": "Manages safe cancellation/closure workflows, ensuring financial/contractual and technical checks are satisfied.",
    "problemStatement": "Tag: From Image; Domain: Service Design; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Cancellation/Closure; Autonomy: Assistive",
    "goals": [
      "Ensure cancellations/closures follow contractual and operational checks.",
      "Prevent accidental cancellations or revenue leakage.",
      "Document reasons, approvals, and impacts clearly."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Confirm cancellation/closure request and validate authority/approvals.\n\u2022 Check dependencies (orders, billing, inventory, field appointments).\n\u2022 Assess impact (contractual, technical, customer communications).\n\u2022 Execute cancellation/closure steps in the correct sequence.\n\u2022 Update systems of record and notify stakeholders.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "nan",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Service catalog/SID models",
        "description": "Enterprise Tool"
      },
      {
        "name": "CRM/CPQ artifacts",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/templates",
        "description": "Enterprise Tool"
      },
      {
        "name": "Data lake/BI",
        "description": "Enterprise Tool"
      },
      {
        "name": "Collaboration (Confluence/SharePoint)",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 5106,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-095",
    "name": "Capacity Planning Analyst",
    "businessDomain": "Architecture",
    "shortDescription": "Provides specialized service design operational support capabilities.",
    "problemStatement": "Tag: Added; Domain: Service Design; Process: eTOM: Service Development & Management | ITIL: Service Design / Portfolio; Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "nan",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Service catalog/SID models",
        "description": "Enterprise Tool"
      },
      {
        "name": "CRM/CPQ artifacts",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/templates",
        "description": "Enterprise Tool"
      },
      {
        "name": "Data lake/BI",
        "description": "Enterprise Tool"
      },
      {
        "name": "Collaboration (Confluence/SharePoint)",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 5148,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-096",
    "name": "Design Review Assistant",
    "businessDomain": "Architecture",
    "shortDescription": "Coordinates cross-team activities, approvals, and communications to keep delivery/assurance work on track.",
    "problemStatement": "Tag: Added; Domain: Service Design; Process: eTOM: Service Development & Management | ITIL: Service Design / Portfolio; Archetype: Coordinator/Assistant; Autonomy: Assistive",
    "goals": [
      "Coordinate cross-team execution and approvals to remove blockers quickly.",
      "Ensure communications are timely, consistent, and compliant.",
      "Track dependencies and ensure handoffs do not stall progress."
    ],
    "inScope": [
      "Create/update tasks and tickets in ITSM/CRM as part of execution.",
      "Coordinate handoffs and collect required approvals/evidence."
    ],
    "outOfScope": [
      "Execute production-impacting changes without required approvals.",
      "Override security controls or access entitlements."
    ],
    "operationalDetails": "\u2022 Assess the current state, blockers, and dependency chain.\n\u2022 Generate a coordinated plan (tasks, owners, due dates).\n\u2022 Request approvals where needed (CAB/change/dispatch).\n\u2022 Notify stakeholders and maintain a single source of truth in ITSM.\n\u2022 Track execution progress and follow up on overdue tasks.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "nan",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Service catalog/SID models",
        "description": "Enterprise Tool"
      },
      {
        "name": "CRM/CPQ artifacts",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/templates",
        "description": "Enterprise Tool"
      },
      {
        "name": "Data lake/BI",
        "description": "Enterprise Tool"
      },
      {
        "name": "Collaboration (Confluence/SharePoint)",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 5190,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-097",
    "name": "Missed info requestor",
    "businessDomain": "Governance",
    "shortDescription": "Provides specialized service design operational support capabilities.",
    "problemStatement": "Tag: From Image; Domain: Service Design; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "nan",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Service catalog/SID models",
        "description": "Enterprise Tool"
      },
      {
        "name": "CRM/CPQ artifacts",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/templates",
        "description": "Enterprise Tool"
      },
      {
        "name": "Data lake/BI",
        "description": "Enterprise Tool"
      },
      {
        "name": "Collaboration (Confluence/SharePoint)",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 5232,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-098",
    "name": "Order intake & validator",
    "businessDomain": "Governance",
    "shortDescription": "Validates records, configurations, or outcomes against business rules, standards, and policy controls.",
    "problemStatement": "Tag: From Image; Domain: Service Design; Process: eTOM: Order Handling / Fulfillment | ITIL: Service Request Management; Archetype: Validator; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Ensure records/configurations meet required completeness and policy rules before progressing.",
      "Prevent avoidable fallout, rework, and SLA breaches by catching issues early.",
      "Provide clear, actionable validation failures and suggested fixes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Load the record and required reference data (catalog, policy, CMDB).\n\u2022 Run rule checks (mandatory fields, eligibility, policy constraints).\n\u2022 Cross-validate against upstream/downstream dependencies.\n\u2022 If failures exist, generate actionable findings and suggested fixes.\n\u2022 Update record with validation status and evidence.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications",
      "Pass/fail decision with rule-level explanations"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Validation failure rate",
        "target": "TBD"
      },
      {
        "name": "Defects prevented (count)",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Service catalog/SID models",
        "description": "Enterprise Tool"
      },
      {
        "name": "CRM/CPQ artifacts",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/templates",
        "description": "Enterprise Tool"
      },
      {
        "name": "Data lake/BI",
        "description": "Enterprise Tool"
      },
      {
        "name": "Collaboration (Confluence/SharePoint)",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 5274,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-099",
    "name": "Product-Service Decomposition Mapper",
    "businessDomain": "Architecture",
    "shortDescription": "Provides specialized service design operational support capabilities.",
    "problemStatement": "Tag: Added; Domain: Service Design; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "nan",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Service catalog/SID models",
        "description": "Enterprise Tool"
      },
      {
        "name": "CRM/CPQ artifacts",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/templates",
        "description": "Enterprise Tool"
      },
      {
        "name": "Data lake/BI",
        "description": "Enterprise Tool"
      },
      {
        "name": "Collaboration (Confluence/SharePoint)",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 5316,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-100",
    "name": "Security & Privacy Impact Assessor",
    "businessDomain": "Architecture",
    "shortDescription": "Provides specialized service design operational support capabilities.",
    "problemStatement": "Tag: Added; Domain: Service Design; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Restricted (CPNI/PII).",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "nan",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Service catalog/SID models",
        "description": "Enterprise Tool"
      },
      {
        "name": "CRM/CPQ artifacts",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/templates",
        "description": "Enterprise Tool"
      },
      {
        "name": "Data lake/BI",
        "description": "Enterprise Tool"
      },
      {
        "name": "Collaboration (Confluence/SharePoint)",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 5358,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-101",
    "name": "Service Catalog Designer",
    "businessDomain": "Architecture",
    "shortDescription": "Provides specialized service design operational support capabilities.",
    "problemStatement": "Tag: Added; Domain: Service Design; Process: eTOM: Service Development & Management | ITIL: Service Design / Portfolio; Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "nan",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Service catalog/SID models",
        "description": "Enterprise Tool"
      },
      {
        "name": "CRM/CPQ artifacts",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/templates",
        "description": "Enterprise Tool"
      },
      {
        "name": "Data lake/BI",
        "description": "Enterprise Tool"
      },
      {
        "name": "Collaboration (Confluence/SharePoint)",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 5400,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-102",
    "name": "Service Eligibility Checker",
    "businessDomain": "Architecture",
    "shortDescription": "Validates records, configurations, or outcomes against business rules, standards, and policy controls.",
    "problemStatement": "Tag: Added; Domain: Service Design; Process: eTOM: Service Development & Management | ITIL: Service Design / Portfolio; Archetype: Validator; Autonomy: Assistive / Semi-autonomous",
    "goals": [
      "Ensure records/configurations meet required completeness and policy rules before progressing.",
      "Prevent avoidable fallout, rework, and SLA breaches by catching issues early.",
      "Provide clear, actionable validation failures and suggested fixes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Load the record and required reference data (catalog, policy, CMDB).\n\u2022 Run rule checks (mandatory fields, eligibility, policy constraints).\n\u2022 Cross-validate against upstream/downstream dependencies.\n\u2022 If failures exist, generate actionable findings and suggested fixes.\n\u2022 Update record with validation status and evidence.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications",
      "Pass/fail decision with rule-level explanations"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "Validation failure rate",
        "target": "TBD"
      },
      {
        "name": "Defects prevented (count)",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Service catalog/SID models",
        "description": "Enterprise Tool"
      },
      {
        "name": "CRM/CPQ artifacts",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/templates",
        "description": "Enterprise Tool"
      },
      {
        "name": "Data lake/BI",
        "description": "Enterprise Tool"
      },
      {
        "name": "Collaboration (Confluence/SharePoint)",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 5442,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-103",
    "name": "SLA/SLO Designer",
    "businessDomain": "Architecture",
    "shortDescription": "Provides specialized service design operational support capabilities.",
    "problemStatement": "Tag: Added; Domain: Service Design; Process: eTOM: Service Quality Management, Service Development & Management | ITIL: Service Level Management, Service Design / Portfolio; Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "nan",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Service catalog/SID models",
        "description": "Enterprise Tool"
      },
      {
        "name": "CRM/CPQ artifacts",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/templates",
        "description": "Enterprise Tool"
      },
      {
        "name": "Data lake/BI",
        "description": "Enterprise Tool"
      },
      {
        "name": "Collaboration (Confluence/SharePoint)",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 5484,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-104",
    "name": "Solution router",
    "businessDomain": "Governance",
    "shortDescription": "Classifies and routes work items to the correct queue, team, or workflow to minimize triage delays.",
    "problemStatement": "Tag: From Image; Domain: Service Design; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: Router/Categorizer; Autonomy: Semi-autonomous",
    "goals": [
      "Assign work to the correct resolver group/workflow on first pass.",
      "Reduce mean time to triage and misroutes.",
      "Standardize categorization and priority using rules and ML signals."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Read the work item context (summary, category, signals, attachments).\n\u2022 Classify using rules + ML features (keywords, topology, history).\n\u2022 Select target queue/group and recommended priority/severity.\n\u2022 Apply routing decision and document rationale.\n\u2022 Notify assignee and stakeholders; set timers/SLAs.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications",
      "Assigned queue/group"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "First-pass assignment accuracy (%)",
        "target": "TBD"
      },
      {
        "name": "Reassignment rate (%)",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Service catalog/SID models",
        "description": "Enterprise Tool"
      },
      {
        "name": "CRM/CPQ artifacts",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/templates",
        "description": "Enterprise Tool"
      },
      {
        "name": "Data lake/BI",
        "description": "Enterprise Tool"
      },
      {
        "name": "Collaboration (Confluence/SharePoint)",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 5526,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-105",
    "name": "Test Strategy Generator",
    "businessDomain": "Architecture",
    "shortDescription": "Provides specialized service design operational support capabilities.",
    "problemStatement": "Tag: Added; Domain: Service Design; Process: eTOM: Service Development & Management | ITIL: Service Design / Portfolio; Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "nan",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Service catalog/SID models",
        "description": "Enterprise Tool"
      },
      {
        "name": "CRM/CPQ artifacts",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/templates",
        "description": "Enterprise Tool"
      },
      {
        "name": "Data lake/BI",
        "description": "Enterprise Tool"
      },
      {
        "name": "Collaboration (Confluence/SharePoint)",
        "description": "Enterprise Tool"
      }
    ],
    "status": "active",
    "viewCount": 5568,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  },
  {
    "id": "A-106",
    "name": "TMF SID/ODA Mapper",
    "businessDomain": "Architecture",
    "shortDescription": "Provides specialized service design operational support capabilities.",
    "problemStatement": "Tag: Added; Domain: Service Design; Process: eTOM: Cross-Domain | ITIL: Operations Support (General); Archetype: General; Autonomy: Assistive",
    "goals": [
      "Improve operational efficiency and consistency.",
      "Reduce MTTR/lead time and increase quality of outcomes."
    ],
    "inScope": [
      "Read relevant records and telemetry to perform assigned function.",
      "Write recommendations, validations, and status updates to the system of record."
    ],
    "outOfScope": [
      "Make irreversible changes (deletes, billing credits, config changes) without explicit approval.",
      "Bypass defined process controls or compliance requirements."
    ],
    "operationalDetails": "\u2022 Collect context and required data.\n\u2022 Perform the agent\u2019s core function and document results.\n\u2022 Update the system of record and notify stakeholders.",
    "inputs": [
      "Order/request record (BSS/CRM/ITSM)",
      "Customer/site details",
      "Product/service specifications (catalog/BOM)",
      "Contract/SOW attachments (if applicable)"
    ],
    "outputs": [
      "Updated order status and tasks",
      "Validation findings and required actions",
      "Stakeholder notifications"
    ],
    "securityControls": [
      "Data sensitivity: Internal.",
      "Minimum required access only (least privilege) via RBAC; no credential sharing.",
      "All writes to ITSM/CRM must be logged with before/after values and user/agent identity."
    ],
    "kpis": [
      {
        "name": "nan",
        "target": "TBD"
      }
    ],
    "tools": [
      {
        "name": "Service catalog/SID models",
        "description": "Enterprise Tool"
      },
      {
        "name": "CRM/CPQ artifacts",
        "description": "Enterprise Tool"
      },
      {
        "name": "KB/templates",
        "description": "Enterprise Tool"
      },
      {
        "name": "Data lake/BI",
        "description": "Enterprise Tool"
      },
      {
        "name": "Collaboration (Confluence/SharePoint)",
        "description": "Enterprise Tool"
      }
    ],
    "status": "production",
    "viewCount": 5610,
    "personas": [
      "Technical Team",
      "Executive"
    ],
    "owner": "Prodapt Solutions",
    "createdDate": "2024-01-10",
    "lastUpdated": "2024-02-13",
    "version": "1.0.0"
  }
];
