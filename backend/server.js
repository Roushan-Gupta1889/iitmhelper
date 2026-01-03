const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Groq = require('groq-sdk');
const rateLimit = require('express-rate-limit');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting for API endpoints
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    message: {
        error: 'Too many requests',
        message: 'Please wait a few minutes before trying again.'
    },
    standardHeaders: true,
    legacyHeaders: false,
});

// Apply rate limiting to chat endpoint
app.use('/api/chat', apiLimiter);

// Validate API key exists
if (!process.env.GROQ_API_KEY) {
    console.error('❌ ERROR: GROQ_API_KEY is not set in environment variables!');
    console.error('Please create a .env file with your Groq API key.');
    console.error('Example: GROQ_API_KEY=your_api_key_here');
    process.exit(1);
}

// Initialize Groq AI
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        message: 'IITM Helper Backend is running',
        timestamp: new Date().toISOString()
    });
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;

        // Validate input
        if (!message || typeof message !== 'string' || message.trim().length === 0) {
            return res.status(400).json({
                error: 'Invalid request',
                message: 'Message is required and must be a non-empty string'
            });
        }

        console.log(`[${new Date().toISOString()}] 📩 Received message:`, message.substring(0, 100));

        // Generate response using Groq (Llama 3 model - FREE!)
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: `You are an AI study assistant SPECIFICALLY for IIT Madras BS (Bachelor of Science) in Data Science and Applications - the ONLINE degree program.

IMPORTANT DISTINCTIONS:
- This is the BS (Bachelor of Science) ONLINE program, NOT the BTech program
- This is a 4-year online degree program with foundational, diploma, and degree levels
- Courses include: Mathematics, Statistics, Programming (Python), Data Science, Machine Learning, etc.
- Students study online through NPTEL videos and assignments
- Program structure: Foundation → Diploma → Degree

WHEN ANSWERING:
1. Always clarify you're referring to the IITM BS ONLINE program
2. If you don't have specific information about a course, say so clearly
3. Recommend checking the official IITM BS website or course materials
4. Focus on: Python programming, Statistics, Mathematics, Data Science, ML concepts
5. Be concise and educational

DO NOT:
- Confuse this with the on-campus BTech program
- Make up course details if you're unsure
- Provide information about other IIT programs

If asked about specific course syllabi, acknowledge that course content may vary by term and direct students to official course pages on the IITM BS portal.`
                },
                {
                    role: "user",
                    content: message
                }
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.7,
            max_tokens: 1024,
        });

        const aiResponse = chatCompletion.choices[0].message.content;

        console.log(`[${new Date().toISOString()}] ✅ Generated response:`, aiResponse.substring(0, 100));

        // Send response
        res.json({
            response: aiResponse,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('❌ Error generating AI response:', error);
        console.error('Error message:', error.message);

        // Send appropriate error response
        res.status(500).json({
            error: 'Internal server error',
            message: 'Failed to generate AI response. Please try again.',
            details: error.message
        });
    }
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Not found',
        message: 'The requested endpoint does not exist'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 IITM Helper Backend running on http://localhost:${PORT}`);
    console.log(`📡 API endpoints:`);
    console.log(`   - GET  /api/health - Health check`);
    console.log(`   - POST /api/chat   - AI chat endpoint`);
    console.log(`\n✅ Ready to accept requests!`);
    console.log(`✨ Using Groq with Llama 3.3 70B model (FREE & FAST!)`);
});
