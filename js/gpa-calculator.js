// IITM Grading System
const gradePoints = {
    'S': 10,
    'A': 9,
    'B': 8,
    'C': 7,
    'D': 6,
    'E': 4,
    'F': 0,
    'U': 0
};

let courseCount = 0;
let termCount = 0;

// Initialize with one course
document.addEventListener('DOMContentLoaded', () => {
    addCourse('gpa');
    addTerm();
});

// ==================== TAB SWITCHING ====================
function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab
    document.getElementById(`${tabName}-tab`).classList.add('active');
    event.target.classList.add('active');
}

// ==================== GPA CALCULATOR ====================
function addCourse(type) {
    courseCount++;
    const container = document.getElementById(`${type}-courses`);

    const courseDiv = document.createElement('div');
    courseDiv.className = 'course-row';
    courseDiv.id = `course-${courseCount}`;

    courseDiv.innerHTML = `
        <input type="text" placeholder="Course Name (optional)" class="course-input">
        <input type="number" placeholder="Credits" min="1" max="8" step="1" class="credits-input" onchange="calculateGPA()">
        <select class="grade-select" onchange="calculateGPA()">
            <option value="">Select Grade</option>
            <option value="S">S (10)</option>
            <option value="A">A (9)</option>
            <option value="B">B (8)</option>
            <option value="C">C (7)</option>
            <option value="D">D (6)</option>
            <option value="E">E (4)</option>
            <option value="F">F (0)</option>
            <option value="U">U (0)</option>
        </select>
        <button class="remove-btn" onclick="removeCourse(${courseCount})">×</button>
    `;

    container.appendChild(courseDiv);
}

function removeCourse(id) {
    const course = document.getElementById(`course-${id}`);
    if (course) {
        course.remove();
        calculateGPA();
    }
}

function calculateGPA() {
    const courses = document.querySelectorAll('#gpa-courses .course-row');
    let totalCredits = 0;
    let totalPoints = 0;
    let validCourses = 0;

    courses.forEach(course => {
        const credits = parseFloat(course.querySelector('.credits-input').value);
        const grade = course.querySelector('.grade-select').value;

        if (credits && grade) {
            totalCredits += credits;
            totalPoints += credits * gradePoints[grade];
            validCourses++;
        }
    });

    const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;

    document.getElementById('gpa-result').textContent = gpa;
    document.getElementById('gpa-info').textContent =
        validCourses > 0 ? `Based on ${validCourses} course(s) with ${totalCredits} total credits` : 'Add courses to calculate GPA';

    // Add color based on GPA
    const resultElement = document.getElementById('gpa-result');
    if (gpa >= 9) {
        resultElement.style.color = '#10b981';
    } else if (gpa >= 8) {
        resultElement.style.color = '#3b82f6';
    } else if (gpa >= 7) {
        resultElement.style.color = '#8b5cf6';
    } else if (gpa >= 6) {
        resultElement.style.color = '#f59e0b';
    } else {
        resultElement.style.color = '#ef4444';
    }
}

// ==================== CGPA CALCULATOR ====================
function addTerm() {
    termCount++;
    const container = document.getElementById('cgpa-terms');

    const termDiv = document.createElement('div');
    termDiv.className = 'term-card';
    termDiv.id = `term-${termCount}`;

    termDiv.innerHTML = `
        <div class="term-header">
            <h4>Term ${termCount}</h4>
            <button class="remove-btn" onclick="removeTerm(${termCount})">×</button>
        </div>
        <div class="term-inputs">
            <div class="input-group">
                <label>GPA</label>
                <input type="number" min="0" max="10" step="0.01" placeholder="e.g., 8.5" onchange="calculateCGPA()">
            </div>
            <div class="input-group">
                <label>Credits</label>
                <input type="number" min="1" step="1" placeholder="e.g., 16" onchange="calculateCGPA()">
            </div>
        </div>
    `;

    container.appendChild(termDiv);
}

function removeTerm(id) {
    const term = document.getElementById(`term-${id}`);
    if (term) {
        term.remove();
        calculateCGPA();
        // Renumber remaining terms
        renumberTerms();
    }
}

function renumberTerms() {
    const terms = document.querySelectorAll('.term-card');
    terms.forEach((term, index) => {
        term.querySelector('h4').textContent = `Term ${index + 1}`;
    });
}

function calculateCGPA() {
    const terms = document.querySelectorAll('#cgpa-terms .term-card');
    let totalCredits = 0;
    let totalPoints = 0;
    let validTerms = 0;

    terms.forEach(term => {
        const inputs = term.querySelectorAll('input');
        const gpa = parseFloat(inputs[0].value);
        const credits = parseFloat(inputs[1].value);

        if (gpa && credits && gpa >= 0 && gpa <= 10) {
            totalCredits += credits;
            totalPoints += gpa * credits;
            validTerms++;
        }
    });

    const cgpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;

    document.getElementById('cgpa-result').textContent = cgpa;
    document.getElementById('cgpa-info').textContent =
        validTerms > 0 ? `Based on ${validTerms} term(s) with ${totalCredits} total credits` : 'Add terms to calculate CGPA';

    // Add color based on CGPA
    const resultElement = document.getElementById('cgpa-result');
    if (cgpa >= 9) {
        resultElement.style.color = '#10b981';
    } else if (cgpa >= 8) {
        resultElement.style.color = '#3b82f6';
    } else if (cgpa >= 7) {
        resultElement.style.color = '#8b5cf6';
    } else if (cgpa >= 6) {
        resultElement.style.color = '#f59e0b';
    } else {
        resultElement.style.color = '#ef4444';
    }
}

// ==================== GRADE PREDICTOR ====================
function predictGrade() {
    const currentCGPA = parseFloat(document.getElementById('current-cgpa').value);
    const completedCredits = parseFloat(document.getElementById('completed-credits').value);
    const targetCGPA = parseFloat(document.getElementById('target-cgpa').value);
    const upcomingCredits = parseFloat(document.getElementById('upcoming-credits').value);

    if (!currentCGPA || !completedCredits || !targetCGPA || !upcomingCredits) {
        alert('Please fill in all fields');
        return;
    }

    if (currentCGPA < 0 || currentCGPA > 10 || targetCGPA < 0 || targetCGPA > 10) {
        alert('CGPA values must be between 0 and 10');
        return;
    }

    // Calculate required GPA
    const currentPoints = currentCGPA * completedCredits;
    const targetPoints = targetCGPA * (completedCredits + upcomingCredits);
    const requiredPoints = targetPoints - currentPoints;
    const requiredGPA = requiredPoints / upcomingCredits;

    const resultBox = document.getElementById('predictor-result');
    const requiredGPAElement = document.getElementById('required-gpa');
    const infoElement = document.getElementById('predictor-info');

    resultBox.style.display = 'block';
    requiredGPAElement.textContent = requiredGPA.toFixed(2);

    // Provide feedback
    if (requiredGPA > 10) {
        requiredGPAElement.style.color = '#ef4444';
        infoElement.innerHTML = `
            <strong style="color: #ef4444;">⚠️ Not Achievable</strong><br>
            The required GPA (${requiredGPA.toFixed(2)}) exceeds the maximum (10.0).<br>
            Consider adjusting your target CGPA or taking more credits.
        `;
    } else if (requiredGPA < 0) {
        requiredGPAElement.style.color = '#10b981';
        infoElement.innerHTML = `
            <strong style="color: #10b981;">✓ Already Achieved!</strong><br>
            Your current CGPA already meets or exceeds your target.<br>
            You can maintain a GPA of 0 or higher to keep your target.
        `;
    } else if (requiredGPA >= 9) {
        requiredGPAElement.style.color = '#f59e0b';
        infoElement.innerHTML = `
            <strong style="color: #f59e0b;">⚠️ Challenging</strong><br>
            You need mostly S and A grades to achieve this target.<br>
            Aim for excellence in all courses!
        `;
    } else if (requiredGPA >= 7) {
        requiredGPAElement.style.color = '#8b5cf6';
        infoElement.innerHTML = `
            <strong style="color: #8b5cf6;">✓ Achievable</strong><br>
            You need a mix of A, B, and C grades to achieve this target.<br>
            Stay focused and you can do it!
        `;
    } else {
        requiredGPAElement.style.color = '#10b981';
        infoElement.innerHTML = `
            <strong style="color: #10b981;">✓ Easily Achievable</strong><br>
            You need a GPA of ${requiredGPA.toFixed(2)} which is very manageable.<br>
            Keep up the good work!
        `;
    }
}
