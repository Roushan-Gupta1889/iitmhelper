// Script to add News link and Theme chooser to index.html header

// Step 1: Add theme CSS to head
const themeCSS = document.createElement('link');
themeCSS.rel = 'stylesheet';
themeCSS.href = 'css/themes.css';
document.head.appendChild(themeCSS);

// Step 2: Add News link to navigation
const navMenu = document.getElementById('navMenu');
if (navMenu) {
    // Find the Resources link
    const resourcesLink = Array.from(navMenu.children).find(link =>
        link.textContent.includes('Resources')
    );

    // Create News link
    const newsLink = document.createElement('a');
    newsLink.href = 'pages/news.html';
    newsLink.className = 'nav-link';
    newsLink.textContent = 'News';

    // Insert after Resources link
    if (resourcesLink && resourcesLink.nextSibling) {
        navMenu.insertBefore(newsLink, resourcesLink.nextSibling);
    } else {
        navMenu.appendChild(newsLink);
    }
}

// Step 3: Add Theme chooser
const navWrapper = document.querySelector('.nav-wrapper');
if (navWrapper) {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');

    // Create theme chooser HTML
    const themeChooserHTML = `
        <div class="theme-chooser">
            <button class="theme-toggle-btn" id="themeToggleBtn">
                <span class="theme-icon">🎨</span>
                <span>Theme</span>
            </button>
            <div class="theme-dropdown" id="themeDropdown">
                <div class="theme-dropdown-header">Choose Theme</div>
                <div class="theme-current">Current: <strong id="currentTheme">Signature</strong></div>
                <div class="theme-grid">
                    <div class="theme-option theme-signature active" data-theme="signature" title="Signature">
                        <span class="theme-option-label">Signature</span>
                    </div>
                    <div class="theme-option theme-aurora" data-theme="aurora" title="Aurora">
                        <span class="theme-option-label">Aurora</span>
                    </div>
                    <div class="theme-option theme-sunset" data-theme="sunset" title="Sunset">
                        <span class="theme-option-label">Sunset</span>
                    </div>
                    <div class="theme-option theme-deep" data-theme="deep" title="Deep">
                        <span class="theme-option-label">Deep</span>
                    </div>
                    <div class="theme-option theme-mystic" data-theme="mystic" title="Mystic">
                        <span class="theme-option-label">Mystic</span>
                    </div>
                    <div class="theme-option theme-royal" data-theme="royal" title="Royal">
                        <span class="theme-option-label">Royal</span>
                    </div>
                    <div class="theme-option theme-crimson" data-theme="crimson" title="Crimson">
                        <span class="theme-option-label">Crimson</span>
                    </div>
                    <div class="theme-option theme-electric" data-theme="electric" title="Electric">
                        <span class="theme-option-label">Electric</span>
                    </div>
                    <div class="theme-option theme-emerald" data-theme="emerald" title="Emerald">
                        <span class="theme-option-label">Emerald</span>
                    </div>
                    <div class="theme-option theme-midnight" data-theme="midnight" title="Midnight">
                        <span class="theme-option-label">Midnight</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Insert before mobile menu button
    if (mobileMenuBtn) {
        mobileMenuBtn.insertAdjacentHTML('beforebegin', themeChooserHTML);
    }
}

// Step 4: Load theme switcher script
const themeScript = document.createElement('script');
themeScript.src = 'js/theme-switcher.js';
document.body.appendChild(themeScript);

console.log('✅ News link and Theme chooser added to header!');
