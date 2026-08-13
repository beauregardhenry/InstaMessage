# Quick Start Guide

## Getting Started with Gmail Organizer

### Step 1: Prerequisites
- Node.js v18 or higher installed
- npm, yarn, or pnpm
- Google Cloud Project with Gmail API enabled

### Step 2: Clone and Install

```bash
# Navigate to the project
cd gmail-organizer

# Install all dependencies (uses npm workspaces)
npm install
```

### Step 3: Configure Google OAuth

1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project named "Gmail Organizer"
3. Enable the following APIs:
   - Gmail API
   - Google+ API
   - Google Drive API (optional)
4. Create OAuth 2.0 Credentials:
   - Application type: Desktop app
   - Authorized redirect URIs: `http://localhost:5000/api/auth/google/callback`
5. Copy your Client ID and Client Secret
6. Paste them into `backend/.env`:
   ```
   GOOGLE_CLIENT_ID=your_client_id
   GOOGLE_CLIENT_SECRET=your_client_secret
   ```

### Step 4: Start Development Servers

**Option A: Run both in one command**
```bash
npm run dev
```

**Option B: Run in separate terminals**

Terminal 1 - Backend:
```bash
cd backend
npm run dev
```

Terminal 2 - Frontend:
```bash
cd frontend
npm run dev
```

### Step 5: Access the Application

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000
- API Health Check: http://localhost:5000/api/health

### Step 6: First Time Setup

1. Click "Sign in with Google" on the login page
2. Authorize the application to access your Gmail account
3. Complete your profile setup
4. Start organizing your emails!

## Available Commands

### Root Level
- `npm run install-all` - Install all dependencies
- `npm run dev` - Start both backend and frontend in development mode
- `npm run build` - Build the frontend
- `npm run lint` - Lint both frontend and backend
- `npm run lint:fix` - Fix linting issues
- `npm test` - Run tests for both projects
- `npm run clean` - Clean all node_modules and build artifacts

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with auto-reload
- `npm test` - Run backend tests
- `npm run lint` - Lint backend code

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint frontend code

## Project Structure

```
gmail-organizer/
├── backend/          # Express API server
├── frontend/         # React web application
├── shared/           # Shared utilities and types (optional)
├── docs/             # Documentation
├── config/           # Configuration files
└── README.md         # Main project README
```

## Debugging

### Backend Debugging in VS Code

Create `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Backend",
      "program": "${workspaceFolder}/backend/src/server.js",
      "restart": true,
      "console": "integratedTerminal"
    }
  ]
}
```

### Frontend Debugging

Use browser DevTools (F12 or Cmd+Option+I) for React debugging.

## Common Issues & Solutions

### "Port already in use"
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

### MongoDB connection error
- Ensure MongoDB is running locally: `mongod`
- Or update `MONGODB_URI` to connect to a remote MongoDB instance

### Google OAuth not working
- Verify Client ID and Secret in `.env`
- Check redirect URI in Google Cloud Console
- Clear browser cache and cookies

### CORS error
- Ensure `FRONTEND_URL` in backend `.env` matches your frontend URL
- Check both servers are running

## Next Steps

- Read the [main README](../README.md) for detailed documentation
- Check the [API documentation](./API.md) for all available endpoints
- Review the [architecture guide](./ARCHITECTURE.md) for project structure details

## Getting Help

- Open an issue on GitHub
- Check existing documentation
- Review error messages in browser console and terminal

Happy organizing! 📧
