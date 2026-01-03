# How to Add News Link and Theme Chooser to index.html

## Quick Method (Temporary - for testing):
Add this script tag before the closing `</body>` tag in index.html:
```html
<script src="js/add-header-features.js"></script>
```

## Permanent Method (Recommended):

### 1. Add to `<head>` section (after styles.css):
```html
<link rel="stylesheet" href="css/themes.css">
```

### 2. Update navigation menu (replace the existing `<nav>` section):
```html
<nav class="nav-menu" id="navMenu">
    <a href="#home" class="nav-link active">Home</a>
    <a href="#resources" class="nav-link">Resources</a>
    <a href="pages/news.html" class="nav-link">News</a>
    <a href="#gpa-tools" class="nav-link">GPA Tools</a>
    <a href="#study-plus" class="nav-link">Study Plus</a>
    <a href="#ai-assistant" class="nav-link">AI Assistant</a>
    <a href="https://discourse.onlinedegree.iitm.ac.in/" target="_blank" class="nav-link">Community</a>
</nav>
```

### 3. Add Theme Chooser (insert AFTER `</nav>` and BEFORE `<button class="mobile-menu-btn">`):
```html
<!-- Theme Chooser -->
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
```

### 4. Add before closing `</body>` tag:
```html
<script src="js/theme-switcher.js"></script>
```

## Files Needed:
- ✅ `css/themes.css` - Already created
- ✅ `js/theme-switcher.js` - Already created
- ✅ `js/add-header-features.js` - Temporary injection script (for quick testing)
- ✅ `pages/news.html` - Already created

## Current Status:
The News link and Theme chooser are currently working via the `add-header-features.js` script injection. For a permanent solution, manually edit `index.html` following the steps above.
