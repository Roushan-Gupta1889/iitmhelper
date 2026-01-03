// ==================== NAVIGATION ====================
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                navMenu.classList.remove('active');
            }
        });
    });

    // Active navigation link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Initialize milestone counters
    animateMilestones();
});

// ==================== MILESTONE COUNTER ANIMATION ====================
function animateMilestones() {
    const milestoneNumbers = document.querySelectorAll('.milestone-number');

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    milestoneNumbers.forEach(number => observer.observe(number));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const duration = 2000; // 2 seconds
    const stepTime = duration / 100;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(current));
        }
    }, stepTime);
}

function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K+';
    }
    return num.toString() + '+';
}

// ==================== NAVIGATION FUNCTIONS ====================
function navigateTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==================== SHOW LEVEL DETAILS ====================
function showLevel(levelKey) {
    let levelData;
    let levelTitle;

    switch (levelKey) {
        case 'foundation':
            levelData = coursesData.foundation;
            levelTitle = 'Foundation Level';
            break;
        case 'diploma-programming':
            levelData = coursesData.diplomaProgramming;
            levelTitle = 'Diploma in Programming';
            break;
        case 'diploma-datascience':
            levelData = coursesData.diplomaDataScience;
            levelTitle = 'Diploma in Data Science';
            break;
        case 'degree':
            levelData = coursesData.degree;
            levelTitle = 'BSc/BS Degree Level';
            break;
        default:
            return;
    }

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = generateLevelHTML(levelData, levelTitle);

    const modal = document.getElementById('courseModal');
    modal.style.display = 'block';
}

function generateLevelHTML(data, title) {
    let html = `
        <h2 class="gradient-text">${title}</h2>
        <p style="color: var(--color-text-secondary); margin-bottom: 2rem;">${data.description}</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
            <div style="background: var(--glass-bg); padding: 1rem; border-radius: var(--radius-md); text-align: center;">
                <div style="font-size: 1.5rem; font-weight: 700; color: var(--color-accent-purple);">${data.credits}</div>
                <div style="color: var(--color-text-secondary); font-size: 0.9rem;">Credits</div>
            </div>
            <div style="background: var(--glass-bg); padding: 1rem; border-radius: var(--radius-md); text-align: center;">
                <div style="font-size: 1.5rem; font-weight: 700; color: var(--color-accent-pink);">${data.duration}</div>
                <div style="color: var(--color-text-secondary); font-size: 0.9rem;">Duration</div>
            </div>
        </div>
    `;

    if (data.prerequisite) {
        html += `
            <div style="background: rgba(255, 0, 110, 0.1); border-left: 4px solid var(--color-accent-pink); padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 2rem;">
                <strong>Prerequisite:</strong> ${data.prerequisite}
            </div>
        `;
    }

    // Courses
    if (data.courses) {
        html += `<h3 style="margin-top: 2rem; margin-bottom: 1rem;">Courses</h3>`;
        data.courses.forEach(course => {
            html += `
                <div style="background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 1rem;">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                        <div>
                            <h4 style="color: var(--color-accent-purple); margin-bottom: 0.25rem;">${course.code}</h4>
                            <h5 style="margin-bottom: 0.5rem;">${course.name}</h5>
                        </div>
                        <span style="background: linear-gradient(135deg, var(--color-accent-pink), var(--color-accent-purple)); color: white; padding: 0.25rem 0.75rem; border-radius: var(--radius-sm); font-size: 0.85rem; font-weight: 600;">${course.credits} Credits</span>
                    </div>
                    <p style="color: var(--color-text-secondary); font-size: 0.95rem; margin-bottom: 1rem;">${course.description}</p>
                    ${generateResourceLinks(course.resources)}
                </div>
            `;
        });
    }

    // Core Courses (for degree level)
    if (data.coreCourses) {
        html += `<h3 style="margin-top: 2rem; margin-bottom: 1rem;">Core Courses (Mandatory)</h3>`;
        data.coreCourses.forEach(course => {
            html += `
                <div style="background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 1rem;">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                        <div>
                            <h4 style="color: var(--color-accent-purple); margin-bottom: 0.25rem;">${course.code}</h4>
                            <h5 style="margin-bottom: 0.5rem;">${course.name}</h5>
                        </div>
                        <span style="background: linear-gradient(135deg, var(--color-accent-pink), var(--color-accent-purple)); color: white; padding: 0.25rem 0.75rem; border-radius: var(--radius-sm); font-size: 0.85rem; font-weight: 600;">${course.credits} Credits</span>
                    </div>
                    <p style="color: var(--color-text-secondary); font-size: 0.95rem; margin-bottom: 1rem;">${course.description}</p>
                    ${generateResourceLinks(course.resources)}
                </div>
            `;
        });
    }

    // Electives (for degree level)
    if (data.electives) {
        html += `
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Elective Courses</h3>
            <div style="background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: var(--radius-md); padding: 1.5rem;">
                <p style="color: var(--color-text-secondary); margin-bottom: 1rem;">Choose from a wide range of electives including:</p>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    ${data.electives.map(elective => `
                        <span style="background: rgba(139, 92, 246, 0.2); color: var(--color-accent-purple); padding: 0.5rem 1rem; border-radius: var(--radius-sm); font-size: 0.9rem;">${elective}</span>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Tracks (for diploma data science)
    if (data.tracks) {
        html += `<h3 style="margin-top: 2rem; margin-bottom: 1rem;">Choose Your Track (6 Credits)</h3>`;

        Object.keys(data.tracks).forEach(trackKey => {
            const track = data.tracks[trackKey];
            html += `
                <div style="background: var(--glass-bg); border: 2px solid var(--color-accent-purple); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 1.5rem;">
                    <h4 style="color: var(--color-accent-purple); margin-bottom: 1rem;">${track.name}</h4>
                    ${track.courses.map(course => `
                        <div style="background: rgba(0, 0, 0, 0.3); border-radius: var(--radius-sm); padding: 1rem; margin-bottom: 0.75rem;">
                            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                                <div>
                                    <strong style="color: var(--color-accent-pink);">${course.code}</strong>
                                    <p style="margin-top: 0.25rem;">${course.name}</p>
                                </div>
                                <span style="color: var(--color-accent-purple); font-weight: 600;">${course.credits} Credits</span>
                            </div>
                            <p style="color: var(--color-text-secondary); font-size: 0.9rem;">${course.description}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        });
    }

    return html;
}

function generateResourceLinks(resources) {
    if (!resources) return '';

    let html = '';

    // Separate quiz links from other resources
    const quizLinks = {};
    const otherLinks = {};

    Object.keys(resources).forEach(key => {
        if (key === 'quiz1' || key === 'quiz2' || key === 'endterm') {
            quizLinks[key] = resources[key];
        } else {
            otherLinks[key] = resources[key];
        }
    });

    // If there are quiz links, create PYQs container
    if (Object.keys(quizLinks).length > 0) {
        html += `
            <div style="background: rgba(255, 0, 110, 0.05); border: 1px solid rgba(255, 0, 110, 0.2); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1rem;">
                <h5 style="color: var(--color-accent-pink); margin-bottom: 0.75rem; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">📝 Previous Year Questions (PYQs)</h5>
                <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
        `;

        const quizLabels = {
            quiz1: 'Quiz 1',
            quiz2: 'Quiz 2',
            endterm: 'End Term'
        };

        Object.keys(quizLinks).forEach(key => {
            html += `
                <a href="${quizLinks[key]}" target="_blank" style="
                    background: linear-gradient(135deg, rgba(255, 0, 110, 0.2), rgba(139, 92, 246, 0.2));
                    color: var(--color-accent-pink);
                    padding: 0.5rem 1rem;
                    border-radius: var(--radius-sm);
                    text-decoration: none;
                    font-size: 0.85rem;
                    font-weight: 600;
                    transition: var(--transition-fast);
                    display: inline-flex;
                    align-items: center;
                    gap: 0.3rem;
                    border: 1px solid rgba(255, 0, 110, 0.3);
                " onmouseover="this.style.background='linear-gradient(135deg, rgba(255, 0, 110, 0.3), rgba(139, 92, 246, 0.3))'; this.style.transform='translateY(-2px)'" onmouseout="this.style.background='linear-gradient(135deg, rgba(255, 0, 110, 0.2), rgba(139, 92, 246, 0.2))'; this.style.transform='translateY(0)'">
                    📝 ${quizLabels[key]}
                </a>
            `;
        });

        html += `
                </div>
            </div>
        `;
    }

    // Add other resource links
    if (Object.keys(otherLinks).length > 0) {
        html += '<div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">';

        const icons = {
            notes: '📚',
            syllabus: '📖',
            guidelines: '📋',
            examples: '💡'
        };

        const labels = {
            notes: 'Notes',
            syllabus: 'Syllabus',
            guidelines: 'Guidelines',
            examples: 'Examples'
        };

        Object.keys(otherLinks).forEach(key => {
            html += `
                <a href="${otherLinks[key]}" target="_blank" style="
                    background: rgba(139, 92, 246, 0.2);
                    color: var(--color-accent-purple);
                    padding: 0.4rem 0.8rem;
                    border-radius: var(--radius-sm);
                    text-decoration: none;
                    font-size: 0.85rem;
                    font-weight: 500;
                    transition: var(--transition-fast);
                    display: inline-flex;
                    align-items: center;
                    gap: 0.3rem;
                " onmouseover="this.style.background='rgba(139, 92, 246, 0.3)'" onmouseout="this.style.background='rgba(139, 92, 246, 0.2)'">
                    ${icons[key] || '📄'} ${labels[key] || key}
                </a>
            `;
        });

        html += '</div>';
    }

    return html;
}

function closeModal() {
    const modal = document.getElementById('courseModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('courseModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// ==================== UTILITY FUNCTIONS ====================
// Add scroll reveal animation
const observeElements = () => {
    const elements = document.querySelectorAll('.feature-card, .level-card, .link-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
};

// Initialize scroll reveal when DOM is loaded
document.addEventListener('DOMContentLoaded', observeElements);
