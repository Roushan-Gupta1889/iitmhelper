# IITM Helper Backend

Backend API server for the IITM Helper AI Assistant feature.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the server
npm start
```

The server will start on `http://localhost:3000`

## 📡 API Endpoints

### Health Check
```
GET /api/health
```
Returns server status and timestamp.

**Response:**
```json
{
  "status": "ok",
  "message": "IITM Helper Backend is running",
  "timestamp": "2026-01-02T14:00:00.000Z"
}
```

### Chat Endpoint
```
POST /api/chat
```
Send a message to the AI assistant and get a response.

**Request Body:**
```json
{
  "message": "What is photosynthesis?"
}
```

**Response:**
```json
{
  "response": "Photosynthesis is the process by which...",
  "timestamp": "2026-01-02T14:00:00.000Z"
}
```

**Error Response:**
```json
{
  "error": "Invalid request",
  "message": "Message is required and must be a non-empty string"
}
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the backend directory:

```env
GROQ_API_KEY=your_api_key_here
PORT=3000
NODE_ENV=development
```

**Get your Groq API key:**
1. Visit [Groq Console](https://console.groq.com/keys)
2. Sign up or log in
3. Create a new API key
4. Copy to `.env` file

## 🏗️ Architecture

```
Frontend (Browser) → Backend (Express) → Groq API (Llama 3.3 70B)
```

**Benefits:**
- ✅ API key hidden from browser
- ✅ No CORS issues
- ✅ Centralized error handling
- ✅ Request validation
- ✅ Easy to add rate limiting

## 📦 Dependencies

- `express` - Web server framework
- `groq-sdk` - Official Groq SDK for Llama models
- `cors` - CORS middleware
- `dotenv` - Environment variable management

## 🔒 Security

- API key is stored in `.env` file (not committed to git)
- `.gitignore` protects sensitive files
- Input validation on all endpoints
- CORS enabled for frontend access

## 🚢 Deployment

### Option 1: Local Server
```bash
npm start
```

### Option 2: Vercel (Serverless)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### Option 3: Railway
1. Create account on railway.app
2. Connect GitHub repository
3. Deploy automatically

### Option 4: Render
1. Create account on render.com
2. Create new Web Service
3. Connect repository
4. Deploy

## 🐛 Troubleshooting

### Backend won't start
- Check if Node.js is installed: `node --version`
- Check if port 3000 is available
- Verify `.env` file exists with valid API key

### Frontend can't connect
- Make sure backend is running on port 3000
- Check browser console for CORS errors
- Verify `BACKEND_URL` in frontend matches backend URL

### API errors
- Check `.env` file has valid `GROQ_API_KEY`
- Verify API key is active at [Groq Console](https://console.groq.com/keys)
- Check console logs for detailed error messages
- Verify internet connection

## 📝 Development

### Running in Development Mode
```bash
npm run dev
```

### Testing the API
```bash
# Health check
curl http://localhost:3000/api/health

# Chat endpoint
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello!"}'
```

## 📄 License

MIT License - Built for IITM BS students
