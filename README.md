# IITM Helper 🎓

**The Ultimate Academic Companion for IIT Madras BS in Data Science & Applications Students.**

IITM Helper is a comprehensive, student-led platform designed to centralize resources, provide powerful academic tools, and keep students updated with the latest news from the IITM BS ecosystem. Now available as a Progressive Web App (PWA) and Android App (TWA).

🌐 **Live Website:** [iitmhelper.online](https://iitmhelper.online)

---

## 🚀 Key Features

### 1. 📊 GPA Calculator
*   **Precision Tools:** Accurately calculate your CGPA/SGPA based on the official IITM BS grading scale.
*   **Course Selection:** Plan your terms by simulating different grade scenarios.

### 2. 🤖 AI Study Assistant
*   **Built with Google Gemini:** Get instant explanations for complex concepts, practice questions, and summary generation.
*   **Context Aware:** Tailored to help with Data Science, Programming, and Mathematics coursework.

### 3. 📚 StudyPlus YT
*   **Distraction-Free Learning:** Watch course videos without YouTube's distracting recommendations.
*   **Timestamped Notes:** Take notes linked directly to video timestamps for efficient revision.

### 4. 📰 News & Updates
*   **Stay Informed:** A curated feed of admissions, placements, and academic announcements.
*   **Verified Sources:** Links to official news outlets and IITM portals.

### 5. 🎨 Universal Theme System
*   **Personalized UI:** Choose from 10+ premium themes (Aurora, Sunset, Midnight, etc.).
*   **Persistence:** Your preference is saved across sessions.

---

## 📱 Mobile App (PWA & TWA)

IITM Helper is optimized for mobile performance:
*   **PWA Readiness:** Install directly from your browser for offline access and a standalone experience.
*   **Android App:** Available as a Trusted Web Activity (TWA) with native-feel UX, including disabled text selection and pull-to-refresh.
*   **Package Name:** `com.allgenztool.iitmhelper`

---

## 🛠️ Technologies Used

*   **Frontend:** HTML5, Vanilla JavaScript, CSS3 (Custom Variables).
*   **Design:** Modern Glassmorphism & Neon Aesthetics.
*   **API:** Google Gemini Pro API (for AI Assistant).
*   **PWA:** Service Workers, Web App Manifest.
*   **TWA:** Google Bubblewrap CLI.

---

## 📂 Project Structure

```text
iitm-helper/
├── index.html          # Homepage & PWA Gateway
├── styles.css          # Core Design System
├── script.js           # Main Application Logic
├── manifest.json       # PWA Configuration
├── sw.js               # Service Worker (Caching & Offline)
├── pages/              # Dedicated Feature Pages
│   ├── ai-assistant.html
│   ├── gpa-calculator.html
│   ├── study-plus.html
│   └── news.html
├── css/                # Modular Component Styles
├── js/                 # Feature-specific Scripts
└── .well-known/        # TWA Digital Asset Links
```

---

## 🔧 Installation & Local Development

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/Roushan-Gupta1889/iitmhelper.git
    cd iitmhelper
    ```

2.  **Run Locally:**
    Since the AI Assistant and PWA features require a secure context or a server, use a local server:
    ```bash
    # Using Python
    python -m http.server 8000
    ```
    Then visit `http://localhost:8000`.

---

## ⚠️ Disclaimer

**IITM Helper is an independent, student-built project.** It is not affiliated with, endorsed by, or officially connected to the Indian Institute of Technology Madras (IITM). All course materials and external resources belong to their respective owners.

---

## 🤝 Contributing

Contributions are what make the student community great! Feel free to:
1. Fork the Project
2. Create your Feature Branch
3. Commit your Changes
4. Push to the Branch
5. Open a Pull Request

**Made with ❤️ by an IITM BS Student.**
