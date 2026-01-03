// News Section HTML Content
const newsHTML = `
<section class="news-section">
    <div class="container">
        <h2 class="section-title">Latest <span class="gradient-text">News & Updates</span></h2>
        <p class="section-subtitle">Stay updated with the latest announcements from IITM BS Program</p>
        
        <div class="news-grid">
            <!-- Placement News -->
            <div class="news-card highlight">
                <div class="news-badge">🎉 Placements 2024-25</div>
                <h3>Excellent Placement Results!</h3>
                <p>210 students secured jobs with average package of ₹10 LPA. Highest package reached ₹25 LPA with 240+ companies participating.</p>
                <div class="news-stats">
                    <span>📊 Avg: ₹10 LPA</span>
                    <span>🚀 Highest: ₹25 LPA</span>
                </div>
                <div class="news-date">December 2024</div>
            </div>

            <!-- Admissions Update -->
            <div class="news-card">
                <div class="news-badge">📢 Admissions</div>
                <h3>January 2026 Batch Opening Soon</h3>
                <p>Applications for the January 2026 batch will open on January 1, 2026. No JEE required - open to all Class 12 pass students!</p>
                <div class="news-meta">
                    <span>✅ No JEE Required</span>
                    <span>📅 Opens: Jan 1, 2026</span>
                </div>
                <div class="news-date">Upcoming</div>
            </div>

            <!-- Program Achievement -->
            <div class="news-card">
                <div class="news-badge">🏆 Achievement</div>
                <h3>27,000+ Active Students</h3>
                <p>The program now has over 27,000 enrolled students. 850+ students admitted to Master's/PhD programs at top universities worldwide.</p>
                <div class="news-meta">
                    <span>🎓 27K+ Students</span>
                    <span>🌍 850+ in Masters/PhD</span>
                </div>
                <div class="news-date">2024</div>
            </div>

            <!-- Fee Waiver Info -->
            <div class="news-card">
                <div class="news-badge">💰 Financial Aid</div>
                <h3>Fee Waivers Available</h3>
                <p>Full fee waiver for female students (family income <₹5L) and male students (family income <₹1L). Promoting diversity and inclusivity.</p>
                <div class="news-meta">
                    <span>👩‍🎓 Women: <₹5L</span>
                    <span>👨‍🎓 Men: <₹1L</span>
                </div>
                <div class="news-date">Ongoing</div>
            </div>
        </div>

        <!-- View More Link -->
        <div class="news-footer">
            <a href="https://study.iitm.ac.in/ds/" target="_blank" class="btn btn-secondary">
                View Official Announcements →
            </a>
        </div>
    </div>
</section>
`;

// Insert news section after hero section when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.insertAdjacentHTML('afterend', newsHTML);
    }

    // Load news styles
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/news-styles.css';
    document.head.appendChild(link);
});
