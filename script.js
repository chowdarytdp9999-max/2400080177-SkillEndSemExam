// University Student Portal - JavaScript File
// Registration ID: 2400080177

// Initialize Portal
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portal initialized successfully');
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
}

// Handle Navigation
function handleNavigation(e) {
    const href = this.getAttribute('href');
    console.log('Navigating to: ' + href);
    
    // Smooth scroll effect
    const target = document.querySelector(href);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

// Get Portal Statistics
function getPortalStats() {
    return {
        totalCourses: 3,
        completedProjects: 12,
        pendingProjects: 1,
        overallGPA: 3.8
    };
}

// Display Courses
function displayCourses() {
    const courses = [
        { code: 'CS101', name: 'Web Development' },
        { code: 'CS201', name: 'Data Structures' },
        { code: 'CS202', name: 'Database Management' }
    ];
    
    return courses;
}

// Update Dashboard
function updateDashboard() {
    const stats = getPortalStats();
    console.log('Dashboard Stats:', stats);
}

// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Log User Activity
function logActivity(action) {
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] Activity: ${action}`);
}

// Export Functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getPortalStats,
        displayCourses,
        updateDashboard,
        toggleDarkMode,
        logActivity
    };
}
