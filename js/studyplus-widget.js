// StudyPlus YT Floating Widget
(function () {
    let isStudyPlusOpen = false;

    // Show widget after 3 seconds
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            const widget = document.getElementById('studyplusWidget');
            if (widget) {
                widget.classList.add('visible');
            }
        }, 3000);
    });

    // Toggle popup
    window.toggleStudyPlus = function () {
        const popup = document.getElementById('studyplusPopup');
        const overlay = document.getElementById('studyplusOverlay');
        const btn = document.querySelector('.studyplus-widget-btn');

        isStudyPlusOpen = !isStudyPlusOpen;

        if (isStudyPlusOpen) {
            popup.classList.add('open');
            if (overlay) overlay.classList.add('open');
            btn.classList.add('seen');
            btn.style.transform = 'scale(0.9)';
        } else {
            popup.classList.remove('open');
            if (overlay) overlay.classList.remove('open');
            btn.style.transform = 'scale(1)';
        }
    };

    // Close popup
    window.closeStudyPlus = function () {
        const popup = document.getElementById('studyplusPopup');
        const overlay = document.getElementById('studyplusOverlay');
        const btn = document.querySelector('.studyplus-widget-btn');

        isStudyPlusOpen = false;
        popup.classList.remove('open');
        if (overlay) overlay.classList.remove('open');
        btn.style.transform = 'scale(1)';
    };
})();
