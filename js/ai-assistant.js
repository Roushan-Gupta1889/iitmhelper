// AI Assistant with Backend API Integration
const BACKEND_URL = 'http://localhost:3000';

// DOM Elements
const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const typingIndicator = document.getElementById('typingIndicator');
const clearChatBtn = document.getElementById('clearChatBtn');
const quickActionBtns = document.querySelectorAll('.quick-action-btn');

// Chat history for context
let chatHistory = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadChatHistory();
    setupEventListeners();
    autoResizeTextarea();
    checkBackendHealth();
});

// Check if backend is running
async function checkBackendHealth() {
    try {
        const response = await fetch(`${BACKEND_URL}/api/health`);
        if (response.ok) {
            console.log('✅ Backend is running and healthy');
        }
    } catch (error) {
        console.warn('⚠️ Backend is not running. Please start the backend server.');
        console.warn('Run: cd backend && npm start');
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Form submission
    chatForm.addEventListener('submit', handleSubmit);

    // Quick action buttons
    quickActionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const prompt = btn.dataset.prompt;
            chatInput.value = prompt + ' ';
            chatInput.focus();
        });
    });

    // Clear chat button
    clearChatBtn.addEventListener('click', clearChat);

    // Auto-resize textarea
    chatInput.addEventListener('input', autoResizeTextarea);

    // Enter to send, Shift+Enter for new line
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            chatForm.dispatchEvent(new Event('submit'));
        }
    });
}

// Handle form submission
async function handleSubmit(e) {
    e.preventDefault();

    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Add user message to chat
    addMessage(userMessage, 'user');

    // Clear input
    chatInput.value = '';
    autoResizeTextarea();

    // Show typing indicator
    showTypingIndicator();

    // Disable send button
    sendBtn.disabled = true;

    try {
        // Get AI response from backend
        const aiResponse = await getAIResponse(userMessage);

        // Hide typing indicator
        hideTypingIndicator();

        // Add AI response to chat
        addMessage(aiResponse, 'ai');

        // Save chat history
        saveChatHistory();
    } catch (error) {
        console.error('Error getting AI response:', error);
        console.error('Error details:', error.message);
        hideTypingIndicator();

        // More specific error message
        let errorMsg = 'Sorry, I encountered an error. ';
        if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
            errorMsg += 'Cannot connect to the backend server. Please make sure the backend is running (cd backend && npm start).';
        } else if (error.message.includes('500')) {
            errorMsg += 'The server encountered an error. Please try again.';
        } else {
            errorMsg += 'Please try again. ' + error.message;
        }

        addMessage(errorMsg, 'ai', true);
    } finally {
        sendBtn.disabled = false;
        chatInput.focus();
    }
}

// Get AI response from backend
async function getAIResponse(userMessage) {
    console.log('Sending request to backend:', `${BACKEND_URL}/api/chat`);
    console.log('Message:', userMessage);

    const response = await fetch(`${BACKEND_URL}/api/chat`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage })
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Backend error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Response received from backend');

    if (data.response) {
        return data.response;
    } else {
        throw new Error('Invalid response format from backend');
    }
}

// Add message to chat
function addMessage(text, sender, isError = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;

    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = sender === 'user' ? '👤' : '🤖';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';

    const textDiv = document.createElement('div');
    textDiv.className = 'message-text';

    if (isError) {
        textDiv.style.background = 'rgba(255, 59, 48, 0.1)';
        textDiv.style.borderLeft = '3px solid #ff3b30';
    }

    // Format the text (convert markdown-like syntax to HTML)
    textDiv.innerHTML = formatMessage(text);

    const timeDiv = document.createElement('div');
    timeDiv.className = 'message-time';
    timeDiv.textContent = getCurrentTime();

    contentDiv.appendChild(textDiv);
    contentDiv.appendChild(timeDiv);

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(contentDiv);

    chatMessages.appendChild(messageDiv);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Add to history
    chatHistory.push({
        text: text,
        sender: sender,
        timestamp: new Date().toISOString()
    });
}

// Format message text (basic markdown support)
function formatMessage(text) {
    // Convert line breaks
    let formatted = text.replace(/\n/g, '<br>');

    // Convert **bold**
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Convert *italic*
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Convert `code`
    formatted = formatted.replace(/`(.*?)`/g, '<code>$1</code>');

    // Convert bullet points
    formatted = formatted.replace(/^- (.+)$/gm, '<li>$1</li>');
    if (formatted.includes('<li>')) {
        formatted = formatted.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    }

    // Convert numbered lists
    formatted = formatted.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
    if (formatted.includes('<li>') && !formatted.includes('<ul>')) {
        formatted = formatted.replace(/(<li>.*<\/li>)/s, '<ol>$1</ol>');
    }

    return formatted;
}

// Get current time
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
}

// Show typing indicator
function showTypingIndicator() {
    typingIndicator.style.display = 'flex';
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Hide typing indicator
function hideTypingIndicator() {
    typingIndicator.style.display = 'none';
}

// Auto-resize textarea
function autoResizeTextarea() {
    chatInput.style.height = 'auto';
    chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + 'px';
}

// Clear chat
function clearChat() {
    if (confirm('Are you sure you want to clear the chat history?')) {
        // Keep only the welcome message
        const welcomeMessage = chatMessages.querySelector('.message');
        chatMessages.innerHTML = '';
        chatMessages.appendChild(welcomeMessage);

        // Clear history
        chatHistory = [];
        saveChatHistory();
    }
}

// Save chat history to localStorage
function saveChatHistory() {
    try {
        localStorage.setItem('iitm_ai_chat_history', JSON.stringify(chatHistory));
    } catch (error) {
        console.error('Error saving chat history:', error);
    }
}

// Load chat history from localStorage
function loadChatHistory() {
    try {
        const saved = localStorage.getItem('iitm_ai_chat_history');
        if (saved) {
            chatHistory = JSON.parse(saved);

            // Restore messages (limit to last 20 messages)
            const recentHistory = chatHistory.slice(-20);
            recentHistory.forEach(msg => {
                if (msg.sender && msg.text) {
                    addMessageWithoutHistory(msg.text, msg.sender);
                }
            });
        }
    } catch (error) {
        console.error('Error loading chat history:', error);
        chatHistory = [];
    }
}

// Add message without adding to history (for loading saved messages)
function addMessageWithoutHistory(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;

    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = sender === 'user' ? '👤' : '🤖';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';

    const textDiv = document.createElement('div');
    textDiv.className = 'message-text';
    textDiv.innerHTML = formatMessage(text);

    const timeDiv = document.createElement('div');
    timeDiv.className = 'message-time';
    timeDiv.textContent = 'Earlier';

    contentDiv.appendChild(textDiv);
    contentDiv.appendChild(timeDiv);

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(contentDiv);

    chatMessages.appendChild(messageDiv);
}

// Mobile menu toggle (if not already in script.js)
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}
