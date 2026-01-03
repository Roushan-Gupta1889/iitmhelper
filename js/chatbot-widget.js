// Chatbot Widget Functionality
let isChatOpen = false;

// Toggle chat window
function toggleChat() {
    const chatWindow = document.getElementById('chatbotWindow');
    const chatButton = document.querySelector('.chatbot-button');

    isChatOpen = !isChatOpen;

    if (isChatOpen) {
        chatWindow.classList.add('open');
        chatButton.style.transform = 'scale(0.9)';
        // Focus on input when opened
        setTimeout(() => {
            document.getElementById('widgetChatInput').focus();
        }, 300);
    } else {
        chatWindow.classList.remove('open');
        chatButton.style.transform = 'scale(1)';
    }
}

// Send message from widget
async function sendWidgetMessage() {
    const input = document.getElementById('widgetChatInput');
    const message = input.value.trim();

    if (!message) return;

    // Add user message
    addWidgetMessage(message, 'user');
    input.value = '';

    // Show typing indicator
    showWidgetTyping();

    try {
        // Call backend API
        const response = await fetch('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message })
        });

        const data = await response.json();

        // Hide typing indicator
        hideWidgetTyping();

        // Add AI response
        if (data.response) {
            addWidgetMessage(data.response, 'ai');
        } else {
            addWidgetMessage('Sorry, I encountered an error. Please try again.', 'ai');
        }
    } catch (error) {
        console.error('Error:', error);
        hideWidgetTyping();
        addWidgetMessage('Cannot connect to AI. Please make sure the backend is running.', 'ai');
    }
}

// Add message to widget chat
function addWidgetMessage(text, sender) {
    const messagesContainer = document.getElementById('widgetMessages');

    const messageDiv = document.createElement('div');
    messageDiv.className = `widget-message ${sender}-message`;

    const bubble = document.createElement('div');
    bubble.className = 'widget-message-bubble';
    bubble.textContent = text;

    messageDiv.appendChild(bubble);
    messagesContainer.appendChild(messageDiv);

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Show typing indicator
function showWidgetTyping() {
    const indicator = document.getElementById('widgetTyping');
    indicator.style.display = 'flex';

    const messagesContainer = document.getElementById('widgetMessages');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Hide typing indicator
function hideWidgetTyping() {
    const indicator = document.getElementById('widgetTyping');
    indicator.style.display = 'none';
}

// Handle Enter key
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('widgetChatInput');
    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendWidgetMessage();
            }
        });
    }
});
