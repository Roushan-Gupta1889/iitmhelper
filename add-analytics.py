"""
Add Google Analytics and Search Console verification to all HTML pages
"""

import os
import re

# Analytics snippet to add
ANALYTICS_SNIPPET = '''
    <!-- Google Search Console Verification -->
    <meta name="google-site-verification" content="REPLACE_WITH_YOUR_VERIFICATION_CODE" />

    <!-- Google Analytics 4 -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZVKYTQCM0Q"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ZVKYTQCM0Q');
    </script>
'''

# Pages to update (already did index.html)
PAGES = [
    'pages/gpa-calculator.html',
    'pages/study-plus.html',
    'pages/ai-assistant.html',
    'pages/news.html',
    'pages/course-selection.html',
    'pages/diploma-pathways.html',
    'pages/jan-2026-term.html'
]

def add_analytics_to_page(filepath):
    """Add analytics code before closing </head> tag"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if analytics already added
        if 'google-site-verification' in content or 'gtag' in content:
            print(f"✓ {filepath} - Already has analytics")
            return False
        
        # Add before </head>
        updated_content = content.replace('</head>', f'{ANALYTICS_SNIPPET}\n</head>')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        
        print(f"✓ {filepath} - Analytics added")
        return True
    
    except Exception as e:
        print(f"✗ {filepath} - Error: {e}")
        return False

def main():
    print("Adding Google Analytics and Search Console to pages...\n")
    
    updated_count = 0
    for page in PAGES:
        if add_analytics_to_page(page):
            updated_count += 1
    
    print(f"\n✅ Updated {updated_count} pages")
    print("\n📝 Next steps:")
    print("1. Get your Google Analytics Measurement ID from https://analytics.google.com/")
    print("2. Get your Search Console verification code from https://search.google.com/search-console")
    print("3. Replace 'G-XXXXXXXXXX' with your GA4 ID in all files")
    print("4. Replace 'REPLACE_WITH_YOUR_VERIFICATION_CODE' with your GSC code")

if __name__ == '__main__':
    main()
