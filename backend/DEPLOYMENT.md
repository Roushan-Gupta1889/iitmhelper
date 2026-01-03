# Backend Deployment Guide

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended - Free Tier)

**Pros:** Free, automatic HTTPS, global CDN, serverless
**Cons:** Cold starts on free tier

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   cd backend
   vercel
   ```

4. **Set Environment Variables:**
   ```bash
   vercel env add GROQ_API_KEY
   # Paste your API key when prompted
   ```

5. **Redeploy with env vars:**
   ```bash
   vercel --prod
   ```

Your API will be live at: `https://your-project.vercel.app`

---

### Option 2: Railway (Easy - Free $5/month credit)

**Pros:** Always-on, no cold starts, simple setup
**Cons:** Limited free tier

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Add environment variable: `GROQ_API_KEY`
6. Deploy automatically

Your API will be live at: `https://your-project.up.railway.app`

---

### Option 3: Render (Free Tier Available)

**Pros:** Free tier, always-on
**Cons:** Slower cold starts

1. Go to [render.com](https://render.com)
2. Sign up and create "New Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Add environment variable: `GROQ_API_KEY`
6. Deploy

Your API will be live at: `https://your-project.onrender.com`

---

### Option 4: Local/VPS Server

**For development or self-hosting:**

1. **Install Node.js** on your server
2. **Clone repository:**
   ```bash
   git clone your-repo-url
   cd backend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Create .env file:**
   ```bash
   echo "GROQ_API_KEY=your_key_here" > .env
   echo "PORT=3000" >> .env
   ```

5. **Run with PM2 (process manager):**
   ```bash
   npm install -g pm2
   pm2 start server.js --name iitm-helper
   pm2 save
   pm2 startup
   ```

---

## 🔧 After Deployment

### Update Frontend URLs

Once deployed, update the `BACKEND_URL` in your frontend files:

**File:** `js/ai-assistant.js`
```javascript
const BACKEND_URL = 'https://your-deployed-backend.vercel.app';
```

**File:** `js/chatbot-widget.js`
```javascript
const response = await fetch('https://your-deployed-backend.vercel.app/api/chat', {
```

### Test Your Deployment

```bash
# Health check
curl https://your-deployed-backend.vercel.app/api/health

# Test chat endpoint
curl -X POST https://your-deployed-backend.vercel.app/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello!"}'
```

---

## 🔒 Security Checklist

- [ ] API key stored in environment variables (not in code)
- [ ] Rate limiting enabled (20 requests/15min)
- [ ] CORS configured for your domain only (update in production)
- [ ] HTTPS enabled (automatic on Vercel/Railway/Render)
- [ ] `.env` file in `.gitignore`

---

## 📊 Monitoring

### Vercel
- Dashboard: https://vercel.com/dashboard
- View logs, analytics, and deployments

### Railway
- Dashboard: https://railway.app/dashboard
- Monitor usage, logs, and metrics

### Render
- Dashboard: https://dashboard.render.com
- View logs and service health

---

## 🐛 Troubleshooting

**API returns 500 error:**
- Check environment variables are set correctly
- View deployment logs for error messages
- Verify Groq API key is valid

**CORS errors:**
- Update CORS configuration in `server.js` for production domain
- Add your frontend domain to allowed origins

**Rate limit errors:**
- Adjust rate limit settings in `server.js` if needed
- Consider implementing user authentication for higher limits

---

## 💰 Cost Comparison

| Platform | Free Tier | Paid Plans |
|----------|-----------|------------|
| **Vercel** | 100GB bandwidth/month | $20/month (Pro) |
| **Railway** | $5 credit/month | $5+ usage-based |
| **Render** | 750 hours/month | $7/month (Starter) |
| **VPS** | N/A | $5-10/month |

**Recommendation:** Start with Vercel free tier, upgrade if needed.
