// Term Banner Functionality
document.addEventListener('DOMContentLoaded', function () {
    // Close banner
    const closeBtn = document.getElementById('termBannerClose');
    const termBanner = document.getElementById('termBanner');

    if (closeBtn && termBanner) {
        closeBtn.addEventListener('click', () => {
            termBanner.classList.add('hidden');
            sessionStorage.setItem('termBannerClosed', 'true');
        });

        if (sessionStorage.getItem('termBannerClosed') === 'true') {
            termBanner.classList.add('hidden');
        }
    }

    // Open term details modal
    const termBadge = document.getElementById('termBadge');
    const termModal = document.getElementById('termModal');
    const termModalClose = document.getElementById('termModalClose');

    if (termBadge && termModal) {
        termBadge.addEventListener('click', () => {
            termModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    }

    if (termModalClose && termModal) {
        termModalClose.addEventListener('click', () => {
            termModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        });
    }

    // Close modal when clicking outside
    if (termModal) {
        termModal.addEventListener('click', (e) => {
            if (e.target === termModal) {
                termModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && termModal && termModal.classList.contains('active')) {
            termModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
