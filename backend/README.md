# AgentHub Backend API

Enterprise-grade REST API for AgentHub built with **Node.js (Express) + MySQL**.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MySQL 8.0+ |
| Auth | JWT (Access + Refresh tokens) |
| Password | bcrypt (12 rounds) |
| Validation | express-validator |
| Security | helmet, cors, express-rate-limit |

## Quick Start

### 1. Prerequisites
- Node.js 18+
- MySQL 8.0+

### 2. Install Dependencies
```bash
cd backend
npm install
```

### 3. Configure Environment
```bash
cp .env.example .env
# Edit .env with your MySQL credentials
```

### 4. Setup Database
```bash
# Run the schema SQL in MySQL Workbench or via CLI:
mysql -u root -p < src/database/schema.sql
```

### 5. Start Server
```bash
npm run dev   # Development (with nodemon)
npm start     # Production
```

## API Endpoints

### Auth (`/api/auth`)
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/login` | Login with email/password | ❌ |
| POST | `/refresh` | Refresh access token | ❌ |
| POST | `/logout` | Logout (invalidate tokens) | ✅ |
| GET | `/me` | Get current user | ✅ |
| POST | `/forgot-password` | Request password reset | ❌ |
| POST | `/reset-password` | Reset password with token | ❌ |

### Users (`/api/users`)
| Method | Endpoint | Description | Required Role |
|--------|----------|-------------|---------------|
| GET | `/` | List all users | Admin+ |
| POST | `/` | Create user | Admin+ |
| PATCH | `/:id/status` | Activate/deactivate | Admin+ |
| PATCH | `/:id/role` | Change user role | Super Admin |
| POST | `/:id/reset-password` | Reset user password | Admin+ |

### Agents (`/api/agents`)
| Method | Endpoint | Description | Required Permission |
|--------|----------|-------------|---------------------|
| GET | `/` | List agents | view_agents |
| GET | `/:id` | Get agent detail | view_agents |
| POST | `/` | Create agent | create_agent |
| PUT | `/:id` | Update agent | edit_agent |
| DELETE | `/:id` | Archive agent | delete_agent |
| POST | `/:id/approve` | Approve deployment | approve_deployment |

### Audit (`/api/audit`)
| Method | Endpoint | Description | Required Role |
|--------|----------|-------------|---------------|
| GET | `/` | Get audit logs | Admin+ |

## RBAC Permissions Matrix

| Permission | Super Admin | Admin | Editor | User |
|-----------|-------------|-------|--------|------|
| manage_users | ✅ | ✅ | ❌ | ❌ |
| create_agent | ✅ | ✅ | ✅ | ❌ |
| edit_agent | ✅ | ✅ | ✅ | ❌ |
| delete_agent | ✅ | ✅ | ❌ | ❌ |
| approve_deployment | ✅ | ✅ | ❌ | ❌ |
| view_agents | ✅ | ✅ | ✅ | ✅ |

## Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| Super Admin | superadmin@agenthub.com | Admin@123 |
| Admin | admin@agenthub.com | Admin@123 |
| Editor | editor@agenthub.com | Editor@123 |
| User | user@agenthub.com | User@123 |

## Security Features

- ✅ bcrypt password hashing (12 rounds)
- ✅ JWT access tokens (15min expiry)
- ✅ JWT refresh tokens (7 days, stored hashed in DB)
- ✅ Rate limiting (100 req/15min global, 10 req/15min auth)
- ✅ Helmet.js security headers
- ✅ CORS protection
- ✅ Input validation & sanitization
- ✅ SQL injection prevention (parameterized queries)
- ✅ Audit logging for all sensitive actions

## Project Structure

```
backend/
├── src/
│   ├── server.js              # Express app entry point
│   ├── database/
│   │   ├── db.js              # MySQL connection pool
│   │   └── schema.sql         # Database schema + seed data
│   ├── middleware/
│   │   └── auth.js            # JWT + RBAC middleware
│   └── routes/
│       ├── auth.js            # Authentication routes
│       ├── users.js           # User management routes
│       ├── agents.js          # Agent CRUD routes
│       └── audit.js           # Audit log routes
├── .env.example               # Environment template
└── package.json
```
