# Agent HUB - Python Backend Integration Plan

## Overview
This document outlines the Python backend architecture for Agent HUB using FastAPI.

## Tech Stack

- **Framework**: FastAPI
- **Database**: PostgreSQL
- **ORM**: SQLAlchemy
- **Authentication**: JWT (python-jose)
- **Validation**: Pydantic
- **API Documentation**: Swagger/OpenAPI (auto-generated)

## Project Structure

```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py                    # FastAPI application entry point
│   ├── config.py                  # Configuration settings
│   │
│   ├── models/
│   │   ├── __init__.py
│   │   ├── agent.py               # SQLAlchemy models
│   │   ├── user.py
│   │   └── analytics.py
│   │
│   ├── schemas/
│   │   ├── __init__.py
│   │   ├── agent.py               # Pydantic schemas
│   │   ├── user.py
│   │   └── analytics.py
│   │
│   ├── api/
│   │   ├── __init__.py
│   │   ├── deps.py                # Dependencies (auth, db session)
│   │   └── v1/
│   │       ├── __init__.py
│   │       ├── agents.py          # Agent endpoints
│   │       ├── users.py
│   │       └── analytics.py
│   │
│   ├── core/
│   │   ├── __init__.py
│   │   ├── security.py            # JWT, password hashing
│   │   └── database.py            # Database connection
│   │
│   └── utils/
│       ├── __init__.py
│       └── helpers.py
│
├── alembic/                       # Database migrations
├── tests/
├── requirements.txt
├── .env.example
└── README.md
```

## Database Schema

### Agents Table
```sql
CREATE TABLE agents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    short_description TEXT,
    business_domain VARCHAR(100) NOT NULL,
    status VARCHAR(50) NOT NULL,
    view_count INTEGER DEFAULT 0,
    
    -- Detailed information
    problem_statement TEXT,
    goals JSONB,                    -- Array of strings
    in_scope JSONB,                 -- Array of strings
    out_of_scope JSONB,             -- Array of strings
    operational_details TEXT,
    inputs JSONB,                   -- Array of strings
    outputs JSONB,                  -- Array of strings
    tools JSONB,                    -- Array of {name, description}
    security_controls JSONB,        -- Array of strings
    kpis JSONB,                     -- Array of {name, target, current}
    personas JSONB,                 -- Array of strings
    
    -- Metadata
    owner VARCHAR(255),
    version VARCHAR(50),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    created_by UUID REFERENCES users(id),
    updated_by UUID REFERENCES users(id)
);
```

### Users Table
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255),
    hashed_password VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT true,
    is_superuser BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
```

### Agent Views Table (Analytics)
```sql
CREATE TABLE agent_views (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    agent_id UUID REFERENCES agents(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id),
    viewed_at TIMESTAMP DEFAULT NOW(),
    session_id VARCHAR(255)
);
```

## API Endpoints

### Authentication
```
POST   /api/v1/auth/register          # Register new user
POST   /api/v1/auth/login             # Login and get JWT token
POST   /api/v1/auth/refresh           # Refresh JWT token
GET    /api/v1/auth/me                # Get current user
```

### Agents
```
GET    /api/v1/agents                 # List all agents (with filters)
GET    /api/v1/agents/{id}            # Get agent by ID
POST   /api/v1/agents                 # Create new agent (auth required)
PUT    /api/v1/agents/{id}            # Update agent (auth required)
DELETE /api/v1/agents/{id}            # Delete agent (auth required)
POST   /api/v1/agents/{id}/view       # Increment view count
```

### Analytics
```
GET    /api/v1/analytics/stats        # Get overall statistics
GET    /api/v1/analytics/trending     # Get trending agents
GET    /api/v1/analytics/by-domain    # Get agents grouped by domain
```

### Search
```
GET    /api/v1/search?q={query}       # Full-text search across agents
```

## Example: FastAPI Agent Model

```python
# app/models/agent.py
from sqlalchemy import Column, String, Integer, Text, JSONB, TIMESTAMP
from sqlalchemy.dialects.postgresql import UUID
from app.core.database import Base
import uuid

class Agent(Base):
    __tablename__ = "agents"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(255), nullable=False)
    short_description = Column(Text)
    business_domain = Column(String(100), nullable=False)
    status = Column(String(50), nullable=False)
    view_count = Column(Integer, default=0)
    
    problem_statement = Column(Text)
    goals = Column(JSONB)
    in_scope = Column(JSONB)
    out_of_scope = Column(JSONB)
    operational_details = Column(Text)
    inputs = Column(JSONB)
    outputs = Column(JSONB)
    tools = Column(JSONB)
    security_controls = Column(JSONB)
    kpis = Column(JSONB)
    personas = Column(JSONB)
    
    owner = Column(String(255))
    version = Column(String(50))
    created_at = Column(TIMESTAMP, server_default="NOW()")
    updated_at = Column(TIMESTAMP, server_default="NOW()")
```

## Example: Pydantic Schema

```python
# app/schemas/agent.py
from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime

class Tool(BaseModel):
    name: str
    description: str

class KPI(BaseModel):
    name: str
    target: str
    current: Optional[str] = None

class AgentBase(BaseModel):
    name: str = Field(..., min_length=1, max_length=255)
    short_description: str
    business_domain: str
    status: str
    personas: List[str]
    
    problem_statement: str
    goals: List[str]
    in_scope: List[str]
    out_of_scope: List[str]
    operational_details: str
    inputs: List[str]
    outputs: List[str]
    tools: List[Tool]
    security_controls: List[str]
    kpis: List[KPI]
    
    owner: str
    version: str

class AgentCreate(AgentBase):
    pass

class AgentUpdate(AgentBase):
    pass

class AgentInDB(AgentBase):
    id: str
    view_count: int
    created_at: datetime
    updated_at: datetime
    
    class Config:
        orm_mode = True
```

## Example: API Endpoint

```python
# app/api/v1/agents.py
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import List, Optional
from app.api import deps
from app.schemas import agent as schemas
from app.models import agent as models

router = APIRouter()

@router.get("/", response_model=List[schemas.AgentInDB])
def get_agents(
    skip: int = 0,
    limit: int = 100,
    domain: Optional[str] = None,
    status: Optional[str] = None,
    search: Optional[str] = None,
    db: Session = Depends(deps.get_db)
):
    """Get all agents with optional filters"""
    query = db.query(models.Agent)
    
    if domain:
        query = query.filter(models.Agent.business_domain == domain)
    if status:
        query = query.filter(models.Agent.status == status)
    if search:
        query = query.filter(
            models.Agent.name.ilike(f"%{search}%") |
            models.Agent.short_description.ilike(f"%{search}%")
        )
    
    agents = query.offset(skip).limit(limit).all()
    return agents

@router.get("/{agent_id}", response_model=schemas.AgentInDB)
def get_agent(
    agent_id: str,
    db: Session = Depends(deps.get_db)
):
    """Get a specific agent by ID"""
    agent = db.query(models.Agent).filter(models.Agent.id == agent_id).first()
    if not agent:
        raise HTTPException(status_code=404, detail="Agent not found")
    return agent

@router.post("/", response_model=schemas.AgentInDB)
def create_agent(
    agent: schemas.AgentCreate,
    db: Session = Depends(deps.get_db),
    current_user = Depends(deps.get_current_user)
):
    """Create a new agent (requires authentication)"""
    db_agent = models.Agent(**agent.dict())
    db.add(db_agent)
    db.commit()
    db.refresh(db_agent)
    return db_agent

@router.post("/{agent_id}/view")
def increment_view_count(
    agent_id: str,
    db: Session = Depends(deps.get_db)
):
    """Increment the view count for an agent"""
    agent = db.query(models.Agent).filter(models.Agent.id == agent_id).first()
    if not agent:
        raise HTTPException(status_code=404, detail="Agent not found")
    
    agent.view_count += 1
    db.commit()
    return {"message": "View count incremented", "view_count": agent.view_count}
```

## Environment Variables

```env
# .env.example
DATABASE_URL=postgresql://user:password@localhost:5432/agent_hub
SECRET_KEY=your-secret-key-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
CORS_ORIGINS=http://localhost:3000,https://yourdomain.com
```

## Dependencies

```txt
# requirements.txt
fastapi==0.109.0
uvicorn[standard]==0.27.0
sqlalchemy==2.0.25
psycopg2-binary==2.9.9
alembic==1.13.1
pydantic==2.5.3
python-jose[cryptography]==3.3.0
passlib[bcrypt]==1.7.4
python-multipart==0.0.6
python-dotenv==1.0.0
```

## Running the Backend

```bash
# Install dependencies
pip install -r requirements.txt

# Set up database
alembic upgrade head

# Run development server
uvicorn app.main:app --reload --port 8000

# API documentation available at:
# http://localhost:8000/docs
```

## Integration with Frontend

### Update Next.js API Calls

```typescript
// lib/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export async function getAgents(filters?: {
  domain?: string;
  status?: string;
  search?: string;
}) {
  const params = new URLSearchParams();
  if (filters?.domain) params.append('domain', filters.domain);
  if (filters?.status) params.append('status', filters.status);
  if (filters?.search) params.append('search', filters.search);
  
  const response = await fetch(`${API_BASE_URL}/agents?${params}`);
  if (!response.ok) throw new Error('Failed to fetch agents');
  return response.json();
}

export async function getAgentById(id: string) {
  const response = await fetch(`${API_BASE_URL}/agents/${id}`);
  if (!response.ok) throw new Error('Failed to fetch agent');
  return response.json();
}

export async function incrementViewCount(id: string) {
  await fetch(`${API_BASE_URL}/agents/${id}/view`, { method: 'POST' });
}
```

## Next Steps for Backend Implementation

1. **Set up PostgreSQL database**
2. **Create FastAPI project structure**
3. **Implement database models**
4. **Create API endpoints**
5. **Add authentication**
6. **Implement search functionality**
7. **Add analytics tracking**
8. **Deploy backend (Docker + AWS/GCP)**
9. **Update frontend to use real API**
10. **Add user management UI**

## Security Considerations

- [ ] Implement rate limiting
- [ ] Add input validation
- [ ] Use parameterized queries (SQLAlchemy handles this)
- [ ] Implement CORS properly
- [ ] Hash passwords with bcrypt
- [ ] Use HTTPS in production
- [ ] Implement request logging
- [ ] Add API key authentication for service-to-service calls

---

**When you're ready to implement the backend, start with this structure and incrementally add features!**
