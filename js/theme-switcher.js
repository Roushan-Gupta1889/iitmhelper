// Theme Switcher Functionality

// Theme configuration
const themes = [
    { id: 'signature', name: 'Signature', primary: '#ff006e', secondary: '#8b5cf6' },
    { id: 'aurora', name: 'Aurora', primary: '#06b6d4', secondary: '#3b82f6' },
    { id: 'sunset', name: 'Sunset', primary: '#f97316', secondary: '#eab308' },
    { id: 'deep', name: 'Deep', primary: '#0ea5e9', secondary: '#6366f1' },
    { id: 'mystic', name: 'Mystic', primary: '#84cc16', secondary: '#22c55e' },
    { id: 'royal', name: 'Royal', primary: '#a855f7', secondary: '#8b5cf6' },
    { id: 'crimson', name: 'Crimson', primary: '#ef4444', secondary: '#f43f5e' },
    { id: 'electric', name: 'Electric', primary: '#3b82f6', secondary: '#8b5cf6' },
    { id: 'emerald', name: 'Emerald', primary: '#10b981', secondary: '#14b8a6' },
    { id: 'midnight', name: 'Midnight', primary: '#f59e0b', secondary: '#8b5cf6' }
];

// Initialize theme system
function initThemeSystem() {
    // Load saved theme or use default
    const savedTheme = localStorage.getItem('iitm-helper-theme') || 'signature';
    applyTheme(savedTheme);

    // Setup theme toggle button click
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeDropdown = document.getElementById('themeDropdown');

    if (themeToggleBtn && themeDropdown) {
        themeToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            themeDropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!themeDropdown.contains(e.target) && e.target !== themeToggleBtn) {
                themeDropdown.classList.remove('active');
            }
        });
    }

    // Setup theme option clicks
    document.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', () => {
            const themeId = option.dataset.theme;
            applyTheme(themeId);
            localStorage.setItem('iitm-helper-theme', themeId);

            // Update active state
            document.querySelectorAll('.theme-option').forEach(opt => {
                opt.classList.remove('active');
            });
            option.classList.add('active');

            // Update current theme text
            const currentThemeText = document.getElementById('currentTheme');
            if (currentThemeText) {
                const theme = themes.find(t => t.id === themeId);
                currentThemeText.textContent = theme.name;
            }

            // Close dropdown
            if (themeDropdown) {
                themeDropdown.classList.remove('active');
            }
        });
    });
}

// Apply theme
function applyTheme(themeId) {
    // Remove all theme attributes
    document.documentElement.removeAttribute('data-theme');

    // Apply new theme
    if (themeId !== 'signature') {
        document.documentElement.setAttribute('data-theme', themeId);
    }

    // Update active state
    document.querySelectorAll('.theme-option').forEach(option => {
        if (option.dataset.theme === themeId) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });

    // Update current theme text
    const currentThemeText = document.getElementById('currentTheme');
    if (currentThemeText) {
        const theme = themes.find(t => t.id === themeId);
        if (theme) {
            currentThemeText.textContent = theme.name;
        }
    }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeSystem);
} else {
    initThemeSystem();
}
