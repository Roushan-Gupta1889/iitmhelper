// ==================== POMODORO TIMER ====================
let timerInterval;
let timeLeft;
let isRunning = false;
let isBreak = false;
let sessionsCompleted = 0;
let totalMinutes = 0;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        document.getElementById('startBtn').style.display = 'none';
        document.getElementById('pauseBtn').style.display = 'inline-block';

        if (!timeLeft) {
            const focusTime = parseInt(document.getElementById('focusTime').value);
            timeLeft = focusTime * 60;
        }

        timerInterval = setInterval(updateTimer, 1000);
    }
}

function pauseTimer() {
    isRunning = false;
    clearInterval(timerInterval);
    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('pauseBtn').style.display = 'none';
}

function resetTimer() {
    isRunning = false;
    clearInterval(timerInterval);
    isBreak = false;
    timeLeft = null;

    const focusTime = parseInt(document.getElementById('focusTime').value);
    updateDisplay(focusTime * 60);

    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('pauseBtn').style.display = 'none';
    document.getElementById('timerLabel').textContent = 'Focus Time';
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        updateDisplay(timeLeft);
        totalMinutes = Math.floor((parseInt(document.getElementById('focusTime').value) * 60 - timeLeft) / 60);
        document.getElementById('totalMinutes').textContent = totalMinutes;
    } else {
        // Timer completed
        clearInterval(timerInterval);
        playNotification();

        if (!isBreak) {
            // Focus session completed, start break
            sessionsCompleted++;
            document.getElementById('sessionsCompleted').textContent = sessionsCompleted;

            isBreak = true;
            const breakTime = parseInt(document.getElementById('breakTime').value);
            timeLeft = breakTime * 60;
            document.getElementById('timerLabel').textContent = 'Break Time';

            if (confirm('Focus session completed! Start break?')) {
                startTimer();
            } else {
                resetTimer();
            }
        } else {
            // Break completed
            isBreak = false;
            document.getElementById('timerLabel').textContent = 'Focus Time';

            if (confirm('Break completed! Start next focus session?')) {
                const focusTime = parseInt(document.getElementById('focusTime').value);
                timeLeft = focusTime * 60;
                startTimer();
            } else {
                resetTimer();
            }
        }
    }
}

function updateDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    document.getElementById('timeDisplay').textContent =
        `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function playNotification() {
    // Simple notification sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

// Initialize timer display
document.addEventListener('DOMContentLoaded', () => {
    const focusTime = parseInt(document.getElementById('focusTime').value);
    updateDisplay(focusTime * 60);

    // Load saved stats
    const savedSessions = localStorage.getItem('pomodoroSessions');
    const savedMinutes = localStorage.getItem('pomodoroMinutes');
    if (savedSessions) {
        sessionsCompleted = parseInt(savedSessions);
        document.getElementById('sessionsCompleted').textContent = sessionsCompleted;
    }
    if (savedMinutes) {
        totalMinutes = parseInt(savedMinutes);
        document.getElementById('totalMinutes').textContent = totalMinutes;
    }
});

// Save stats when page unloads
window.addEventListener('beforeunload', () => {
    localStorage.setItem('pomodoroSessions', sessionsCompleted);
    localStorage.setItem('pomodoroMinutes', totalMinutes);
});

// ==================== QUICK NOTES ====================
const notesArea = document.getElementById('notesArea');
const charCountEl = document.getElementById('charCount');
const wordCountEl = document.getElementById('wordCount');
const lastSavedEl = document.getElementById('lastSaved');

// Load saved notes
document.addEventListener('DOMContentLoaded', () => {
    const savedNotes = localStorage.getItem('quickNotes');
    if (savedNotes) {
        notesArea.value = savedNotes;
        updateCounts();
    }

    const lastSaved = localStorage.getItem('notesLastSaved');
    if (lastSaved) {
        lastSavedEl.textContent = new Date(lastSaved).toLocaleString();
    }
});

// Update character and word count
notesArea.addEventListener('input', updateCounts);

function updateCounts() {
    const text = notesArea.value;
    charCountEl.textContent = text.length;

    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    wordCountEl.textContent = words.length;
}

function saveNotes() {
    const notes = notesArea.value;
    localStorage.setItem('quickNotes', notes);
    const now = new Date().toISOString();
    localStorage.setItem('notesLastSaved', now);
    lastSavedEl.textContent = new Date(now).toLocaleString();

    // Show success message
    showNotification('Notes saved successfully! ✓');
}

function clearNotes() {
    if (confirm('Are you sure you want to clear all notes?')) {
        notesArea.value = '';
        updateCounts();
        localStorage.removeItem('quickNotes');
        lastSavedEl.textContent = 'Never';
        showNotification('Notes cleared');
    }
}

function downloadNotes() {
    const notes = notesArea.value;
    if (!notes.trim()) {
        alert('No notes to download!');
        return;
    }

    const blob = new Blob([notes], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `iitm-notes-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showNotification('Notes downloaded! ⬇️');
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #ff006e, #8b5cf6);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Auto-save every 30 seconds
setInterval(() => {
    if (notesArea.value.trim()) {
        saveNotes();
    }
}, 30000);

// ==================== FOCUS YOUTUBE ====================
function loadVideo() {
    const urlInput = document.getElementById('youtubeUrl');
    const url = urlInput.value.trim();

    if (!url) {
        alert('Please enter a YouTube URL');
        return;
    }

    // Extract video ID from URL
    let videoId = '';

    // Handle different YouTube URL formats
    if (url.includes('youtube.com/watch?v=')) {
        videoId = url.split('v=')[1]?.split('&')[0];
    } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1]?.split('?')[0];
    } else if (url.includes('youtube.com/embed/')) {
        videoId = url.split('embed/')[1]?.split('?')[0];
    }

    if (!videoId) {
        alert('Invalid YouTube URL. Please check and try again.');
        return;
    }

    // Create iframe
    const playerDiv = document.getElementById('videoPlayer');
    playerDiv.innerHTML = `
        <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style="border-radius: 1rem;"
        ></iframe>
    `;

    playerDiv.style.display = 'block';
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
