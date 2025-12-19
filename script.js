// DOM Elements
const landingPage = document.getElementById('landing-page');
const mainDashboard = document.getElementById('main-dashboard');
const themeSelect = document.getElementById('theme-select');
const body = document.body;

// Functions
function selectMode(mode) {
    // 1. Set Theme
    let theme = 'light';
    if (mode === 'backend') theme = 'blue';
    if (mode === 'ai') theme = 'purple';

    setTheme(theme);

    // 2. Transition View
    landingPage.style.opacity = '0';
    setTimeout(() => {
        landingPage.classList.add('hidden');
        mainDashboard.classList.remove('hidden');
        // Scroll to top of dashboard
        window.scrollTo(0, 0);
    }, 500);
}

function setTheme(theme) {
    body.setAttribute('data-theme', theme);
    themeSelect.value = theme;
    // Optional: Save preference
    // localStorage.setItem('theme', theme);
}

// Event Listeners
themeSelect.addEventListener('change', (e) => {
    setTheme(e.target.value);
});

// Check if user has already visited (Optional - strict "landing first" requested by user flow, so maybe skip auto-load for now to show off the landing page)
// But purely for development convenience, let's leave it manual for now.
console.log('Portfolio Loaded. Waiting for user track selection.');
