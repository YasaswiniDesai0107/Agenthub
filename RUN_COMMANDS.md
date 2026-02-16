# 🚀 Running Agent HUB - Complete Guide (Restricted Environment)

## Current Status ✅

Your **frontend is ALREADY RUNNING** successfully!
- Status: ✅ Running on http://localhost:3000
- Server: Next.js development server
- Duration: 16+ minutes

---

## 📋 Quick Access

### Frontend (Already Running)
```
http://localhost:3000
```

Just open this URL in your browser - it's already working!

---

## 🎯 Commands Reference

### Frontend (Next.js)

#### Check if Frontend is Running
Open browser to: http://localhost:3000

If you see the Agent HUB, you're good to go! ✅

#### Start Frontend (if stopped)
```powershell
cd "c:\Users\yasaswinidesai.k\OneDrive - Prodapt Solutions Private Limited\Desktop\Project\Agent_Hub\agent-hub"
npm run dev
```

#### Stop Frontend
Press `Ctrl + C` in the terminal where it's running

#### Build for Production
```powershell
cd "c:\Users\yasaswinidesai.k\OneDrive - Prodapt Solutions Private Limited\Desktop\Project\Agent_Hub\agent-hub"
npm run build
npm start
```

---

## 🐍 Backend Setup (Python/FastAPI) - For Future Use

### Option 1: Using Python (If you have Python installed)

#### Step 1: Create Backend Directory
```powershell
cd "c:\Users\yasaswinidesai.k\OneDrive - Prodapt Solutions Private Limited\Desktop\Project\Agent_Hub"
mkdir backend
cd backend
```

#### Step 2: Create Virtual Environment (Recommended)
```powershell
# Using Python's built-in venv (no admin rights needed)
python -m venv venv

# Activate virtual environment
.\venv\Scripts\activate
```

#### Step 3: Create requirements.txt
Create a file `backend/requirements.txt` with:
```
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

#### Step 4: Install Dependencies
```powershell
pip install -r requirements.txt
```

#### Step 5: Run Backend
```powershell
# After creating your FastAPI app (main.py)
uvicorn app.main:app --reload --port 8000
```

Backend will run on: http://localhost:8000

---

## 🔧 Alternative Solutions for Restricted Environments

### Option A: Use Portable Python (No Admin Rights)

1. **Download Portable Python**
   - Visit: https://www.python.org/downloads/windows/
   - Download "Windows embeddable package (64-bit)"
   - Extract to a folder (e.g., `C:\PortablePython`)

2. **Run Python from that folder**
   ```powershell
   C:\PortablePython\python.exe -m pip install --user fastapi uvicorn
   ```

### Option B: Use npx (Node.js) for Everything

Since Node.js is working for you:

```powershell
# You can use npx to run things without global installs
npx json-server --watch db.json --port 8000
```

### Option C: Use Mock Data Only (No Backend Needed)

Your current setup **already works perfectly** without a backend!
- Mock data is in `data/mockAgents.ts`
- All features work with mock data
- No backend needed for now

---

## 🎮 Running Both Frontend + Backend

### Scenario 1: Both Running (Future)

#### Terminal 1 - Frontend:
```powershell
cd "c:\Users\yasaswinidesai.k\OneDrive - Prodapt Solutions Private Limited\Desktop\Project\Agent_Hub\agent-hub"
npm run dev
```
Runs on: http://localhost:3000

#### Terminal 2 - Backend:
```powershell
cd "c:\Users\yasaswinidesai.k\OneDrive - Prodapt Solutions Private Limited\Desktop\Project\Agent_Hub\backend"
.\venv\Scripts\activate
uvicorn app.main:app --reload --port 8000
```
Runs on: http://localhost:8000

### Scenario 2: Single Command (Using package.json scripts)

Add to your `package.json`:
```json
{
  "scripts": {
    "dev": "next dev",
    "dev:backend": "cd ../backend && uvicorn app.main:app --reload --port 8000",
    "dev:all": "concurrently \"npm run dev\" \"npm run dev:backend\""
  }
}
```

Install concurrently:
```powershell
npm install --save-dev concurrently
```

Then run both:
```powershell
npm run dev:all
```

---

## 🐛 Troubleshooting (Restricted Environment)

### Issue: "Access Denied" when installing npm packages

**Solution 1: User-level install**
```powershell
npm config set prefix "%USERPROFILE%\npm-global"
npm install -g [package-name]
```

**Solution 2: Use npx instead**
```powershell
npx [package-name]
```

**Solution 3: Use --prefix flag**
```powershell
npm install --prefix ./node_modules [package-name]
```

### Issue: Port already in use

**Check what's using port 3000:**
```powershell
netstat -ano | findstr :3000
```

**Kill the process:**
```powershell
taskkill /PID [process-id] /F
```

**Or use a different port:**
```powershell
npm run dev -- -p 3001
```

### Issue: Python not found

**Check if Python is installed:**
```powershell
python --version
```

**If not, use portable Python or request IT to install it**

### Issue: pip install fails (no admin rights)

**Use --user flag:**
```powershell
pip install --user [package-name]
```

**Or use virtual environment (no admin needed):**
```powershell
python -m venv venv
.\venv\Scripts\activate
pip install [package-name]
```

---

## 📝 Recommended Workflow for Your Situation

### Phase 1: Frontend Only (Current - WORKING ✅)
```powershell
# Frontend runs with mock data - no backend needed
cd "c:\Users\yasaswinidesai.k\OneDrive - Prodapt Solutions Private Limited\Desktop\Project\Agent_Hub\agent-hub"
npm run dev
# Access: http://localhost:3000
```

### Phase 2: Add Backend Later (When Python is set up)
```powershell
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
cd ../backend
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
# Access: http://localhost:8000/docs
```

---

## 🎯 Simple Steps for TODAY

Since your frontend is **already running**, you can:

### 1. **Test Your Application** ✅
```
Open: http://localhost:3000
```

### 2. **If You Stop the Server**
```powershell
cd "c:\Users\yasaswinidesai.k\OneDrive - Prodapt Solutions Private Limited\Desktop\Project\Agent_Hub\agent-hub"
npm run dev
```

### 3. **That's It!** 
You don't need a backend right now. The mock data works perfectly!

---

## 🚀 Future: When You Need Backend

### Minimal Backend Setup (No Admin Rights)

1. **Check Python:**
   ```powershell
   python --version
   ```

2. **Create Virtual Environment:**
   ```powershell
   cd "c:\Users\yasaswinidesai.k\OneDrive - Prodapt Solutions Private Limited\Desktop\Project\Agent_Hub"
   mkdir backend
   cd backend
   python -m venv venv
   ```

3. **Activate & Install:**
   ```powershell
   .\venv\Scripts\activate
   pip install fastapi uvicorn
   ```

4. **Create Simple API:**
   Create `backend/main.py`:
   ```python
   from fastapi import FastAPI
   from fastapi.middleware.cors import CORSMiddleware

   app = FastAPI()

   app.add_middleware(
       CORSMiddleware,
       allow_origins=["http://localhost:3000"],
       allow_credentials=True,
       allow_methods=["*"],
       allow_headers=["*"],
   )

   @app.get("/")
   def read_root():
       return {"message": "Agent HUB API"}

   @app.get("/api/v1/agents")
   def get_agents():
       return {"agents": []}
   ```

5. **Run:**
   ```powershell
   uvicorn main:app --reload --port 8000
   ```

---

## 📊 Port Configuration

| Service | Default Port | URL |
|---------|--------------|-----|
| Frontend (Next.js) | 3000 | http://localhost:3000 |
| Backend (FastAPI) | 8000 | http://localhost:8000 |
| API Docs (Swagger) | 8000 | http://localhost:8000/docs |
| Database (PostgreSQL) | 5432 | localhost:5432 |

---

## ✅ What's Working NOW

- ✅ Frontend running on port 3000
- ✅ Mock data fully functional
- ✅ All features working (search, filters, details)
- ✅ No backend needed yet
- ✅ No database needed yet

---

## 🎉 Summary

**You can use your Agent HUB RIGHT NOW!**

1. Frontend is running: http://localhost:3000
2. All features work with mock data
3. Backend is optional for later
4. No special permissions needed for current setup

**To restart if needed:**
```powershell
cd "c:\Users\yasaswinidesai.k\OneDrive - Prodapt Solutions Private Limited\Desktop\Project\Agent_Hub\agent-hub"
npm run dev
```

**That's all you need for now! 🚀**

---

*For questions or issues, check the troubleshooting section above.*
