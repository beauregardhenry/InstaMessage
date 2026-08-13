# Gmail Organizer

A powerful email organization tool for managing your Gmail account. Features auto-categorization, email filtering, bulk actions, email templates, analytics, and priority inbox management.

## 🚀 Features

- **Email Filtering & Search**: Search and filter emails with advanced query options
- **Auto-Categorization**: Automatically organize emails into categories with custom rules
- **Email Analytics**: View detailed statistics about your email activity
- **Bulk Actions**: Archive, delete, or move multiple emails at once
- **Email Templates**: Create and use email templates for quick responses
- **Priority Inbox**: Manage and prioritize important emails
- **Email Scheduling**: Schedule emails to be sent at a later time
- **Gmail Integration**: Full integration with Google Gmail API

## 📋 Tech Stack

### Backend
- **Runtime**: Node.js (v18+)
- **Framework**: Express.js
- **Database**: MongoDB (optional, can use SQLite)
- **Authentication**: Google OAuth 2.0 + JWT
- **Logging**: Winston
- **Task Scheduling**: node-cron
- **API**: Google Gmail API v1

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast
- **Icons**: Lucide React

## 📁 Project Structure

```
.
├── backend/                 # Express server
│   ├── src/
│   │   ├── server.js       # Main server file
│   │   ├── routes/         # API routes
│   │   ├── controllers/    # Route controllers (to be added)
│   │   ├── models/         # Database models (to be added)
│   │   ├── middleware/     # Custom middleware (to be added)
│   │   └── services/       # Business logic (to be added)
│   ├── package.json
│   └── .env.example
│
├── frontend/                # React app
│   ├── src/
│   │   ├── main.jsx        # React entry point
│   │   ├── App.jsx         # Main app component
│   │   ├── pages/          # Page components
│   │   ├── components/     # Reusable components
│   │   ├── store/          # Zustand stores
│   │   ├── hooks/          # Custom React hooks (to be added)
│   │   ├── utils/          # Utility functions (to be added)
│   │   ├── services/       # API services (to be added)
│   │   └── index.css       # Global styles
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
├── shared/                  # Shared utilities (to be added)
├── docs/                    # Documentation (to be added)
├── config/                  # Configuration files (to be added)
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js v18 or higher
- npm, yarn, or pnpm
- MongoDB (optional, can use SQLite)
- Google Cloud Project with Gmail API enabled

### 1. Backend Setup

```bash
cd backend
npm install

# Create .env file
cp .env.example .env

# Edit .env and add your configuration
# - GOOGLE_CLIENT_ID
# - GOOGLE_CLIENT_SECRET
# - JWT_SECRET
# - MONGODB_URI (if using MongoDB)

# Run development server
npm run dev
```

### 2. Frontend Setup

```bash
cd frontend
npm install

# Run development server
npm run dev

# The app will be available at http://localhost:5173
```

### 3. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable the Gmail API
4. Create OAuth 2.0 credentials (Desktop application)
5. Add `http://localhost:5000/api/auth/google/callback` to authorized redirect URIs
6. Copy Client ID and Client Secret to `.env`

## 🚀 Running the Application

### Development Mode

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

### Production Build

```bash
# Backend (no build needed for Node.js)
cd backend
npm start

# Frontend
cd frontend
npm run build
npm run preview
```

## 📚 API Endpoints

### Authentication
- `POST /api/auth/login` - Login with email/password
- `POST /api/auth/register` - Register new user
- `GET /api/auth/google` - Initiate Google OAuth
- `GET /api/auth/google/callback` - Google OAuth callback
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Get current user
- `POST /api/auth/refresh` - Refresh JWT token

### Gmail Emails
- `GET /api/gmail/emails` - Fetch emails with filtering
- `GET /api/gmail/emails/:id` - Get specific email
- `POST /api/gmail/bulk-action` - Perform bulk actions
- `POST /api/gmail/auto-categorize` - Auto-categorize emails
- `GET /api/gmail/labels` - Get all labels
- `POST /api/gmail/labels` - Create new label
- `GET /api/gmail/sync` - Sync emails
- `POST /api/gmail/schedule-email` - Schedule email
- `GET /api/gmail/priority-inbox` - Get priority inbox

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category
- `PUT /api/categories/:id` - Update category
- `DELETE /api/categories/:id` - Delete category
- `POST /api/categories/:id/rules` - Add rules
- `GET /api/categories/:id/emails` - Get category emails

### Templates
- `GET /api/templates` - Get all templates
- `POST /api/templates` - Create template
- `GET /api/templates/:id` - Get specific template
- `PUT /api/templates/:id` - Update template
- `DELETE /api/templates/:id` - Delete template
- `POST /api/templates/:id/send` - Send using template

### Analytics
- `GET /api/analytics/overview` - Get overview stats
- `GET /api/analytics/by-sender` - Email stats by sender
- `GET /api/analytics/by-category` - Email stats by category
- `GET /api/analytics/activity-timeline` - Activity timeline
- `GET /api/analytics/response-metrics` - Response metrics
- `GET /api/analytics/export` - Export analytics

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the backend folder with:

```env
# Server
PORT=5000
NODE_ENV=development

# Frontend
FRONTEND_URL=http://localhost:5173

# MongoDB
MONGODB_URI=mongodb://localhost:27017/gmail-organizer

# Google OAuth
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_REDIRECT_URI=http://localhost:5000/api/auth/google/callback

# JWT
JWT_SECRET=your_secret_key
JWT_EXPIRY=7d

# Email Settings
EMAIL_BATCH_SIZE=50
EMAIL_SYNC_INTERVAL=3600000

# Logging
LOG_LEVEL=info
```

## 📖 Usage Examples

### Auto-Categorize Emails
```bash
POST /api/gmail/auto-categorize
{
  "categories": ["work", "personal", "promotions"],
  "applyToAll": false
}
```

### Bulk Archive Emails
```bash
POST /api/gmail/bulk-action
{
  "action": "archive",
  "emailIds": ["id1", "id2", "id3"]
}
```

### Create Email Template
```bash
POST /api/templates
{
  "name": "Follow-up",
  "subject": "Follow-up: {{subject}}",
  "body": "Hi {{recipient}},\n\nJust checking in...",
  "tags": ["follow-up", "important"]
}
```

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 📦 Deployment

### Using Docker (Future Enhancement)
```dockerfile
# Instructions will be added
```

### Deployment Platforms
- Backend: Heroku, Railway, Render, AWS EC2
- Frontend: Vercel, Netlify, GitHub Pages
- Database: MongoDB Atlas, AWS RDS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5000 (backend)
lsof -ti:5000 | xargs kill -9

# Kill process on port 5173 (frontend)
lsof -ti:5173 | xargs kill -9
```

### MongoDB Connection Issues
- Ensure MongoDB is running locally or update MONGODB_URI
- Check credentials in .env file

### Google OAuth Issues
- Verify Client ID and Secret are correct
- Check redirect URI matches in Google Cloud Console
- Ensure Gmail API is enabled

### CORS Errors
- Update FRONTEND_URL in backend .env
- Check that frontend is running on correct port

## 📞 Support

For issues and questions, please open an issue on GitHub.

## 🎯 Roadmap

- [ ] Gmail API full integration
- [ ] MongoDB schema and models
- [ ] Authentication system (Google OAuth)
- [ ] Email synchronization service
- [ ] Auto-categorization engine
- [ ] Analytics dashboard with charts
- [ ] Email template system
- [ ] Bulk action processing
- [ ] Email scheduling feature
- [ ] Priority inbox algorithms
- [ ] Mobile responsive UI improvements
- [ ] Dark mode support
- [ ] Docker containerization
- [ ] Unit and integration tests
- [ ] Performance optimization

---

**Happy organizing! 📧**
