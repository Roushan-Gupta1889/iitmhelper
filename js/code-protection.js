// Code Protection Script
// Disables right-click, DevTools shortcuts, and inspect element
// Note: This is easily bypassed but adds a basic layer of protection

(function () {
    'use strict';

    // Disable right-click context menu
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        return false;
    });

    // Disable keyboard shortcuts
    document.addEventListener('keydown', function (e) {
        // F12 - DevTools
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+I - Inspect Element
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.keyCode === 73)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+C - Inspect Element (alternative)
        if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.keyCode === 67)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+J - Console
        if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.keyCode === 74)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+U - View Source
        if (e.ctrlKey && (e.key === 'U' || e.keyCode === 85)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+S - Save Page
        if (e.ctrlKey && (e.key === 'S' || e.keyCode === 83)) {
            e.preventDefault();
            return false;
        }
    });

    // Disable text selection (optional - can be annoying)
    // Uncomment if you want to prevent text selection
    /*
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });
    */

    // Detect DevTools opening (basic detection)
    let devtoolsOpen = false;
    const threshold = 160;

    setInterval(function () {
        if (window.outerWidth - window.innerWidth > threshold ||
            window.outerHeight - window.innerHeight > threshold) {
            if (!devtoolsOpen) {
                devtoolsOpen = true;
                // Optional: You can redirect or show a message
                // console.log('DevTools detected');
            }
        } else {
            devtoolsOpen = false;
        }
    }, 1000);

    // Disable drag and drop
    document.addEventListener('dragstart', function (e) {
        e.preventDefault();
        return false;
    });

    // Clear console periodically (optional - very aggressive)
    // Uncomment if you want to clear console
    /*
    setInterval(function() {
        console.clear();
    }, 1000);
    */

})();
