# Google Analytics & Search Console Setup Guide

## 📊 Step 1: Create Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Admin" (bottom left)
3. Click "Create Property"
4. Fill in:
   - Property name: `IITM Helper`
   - Time zone: `India`
   - Currency: `Indian Rupee (INR)`
5. Click "Next" → Choose "Web"
6. Enter website URL: `https://iitmhelper.online`
7. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

## 🔍 Step 2: Get Google Search Console Verification Code

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Enter: `https://iitmhelper.online`
4. Choose verification method: **HTML tag**
5. Copy the `content` value from the meta tag

## ✏️ Step 3: Update Your Website Files

Replace these placeholders in your HTML files:

### In `index.html` (already added):
- Line 19: Replace `REPLACE_WITH_YOUR_VERIFICATION_CODE` with your GSC code
- Line 77 & 82: Replace `G-XXXXXXXXXX` with your GA4 Measurement ID

### Add to these files:

Copy the following code to the `<head>` section of each page:

```html
<!-- Google Search Console Verification -->
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />

<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Files to update:**
- ✅ `index.html` (DONE)
- ⏳ `pages/gpa-calculator.html`
- ⏳ `pages/study-plus.html`
- ⏳ `pages/ai-assistant.html`
- ⏳ `pages/news.html`
- ⏳ `pages/course-selection.html`
- ⏳ `pages/diploma-pathways.html`
- ⏳ `pages/jan-2026-term.html`

## 🎯 Step 4: Set Up Analytics Events (Optional)

After deployment, you can track specific actions:

```javascript
// Track GPA Calculator usage
gtag('event', 'calculate_gpa', {
  'event_category': 'engagement',
  'event_label': 'GPA Calculator Used'
});

// Track AI Assistant usage
gtag('event', 'ai_chat', {
  'event_category': 'engagement',
  'event_label': 'AI Assistant Message Sent'
});
```

## ✅ Step 5: Verify Setup

1. **Google Analytics:**
   - Go to GA4 → Reports → Realtime
   - Visit your website
   - You should see yourself in realtime visitors

2. **Search Console:**
   - After adding the meta tag and deploying
   - Go back to GSC and click "Verify"
   - Submit your sitemap: `https://iitmhelper.online/sitemap.xml`

## 📝 Current Status

- ✅ Analytics code added to `index.html`
- ✅ Search Console meta tag added to `index.html`
- ✅ Favicon updated to PNG format
- ⏳ Need to add to remaining 7 pages
- ⏳ Need to get actual GA4 Measurement ID
- ⏳ Need to get actual GSC verification code
