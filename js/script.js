// --- Boot Sequence ---
window.addEventListener('load', () => {
    const bootScreen = document.getElementById('boot-screen');
    const dock = document.querySelector('.dock-container');

    // Initially hide Dock for realism
    dock.style.opacity = '0';
    dock.style.transform = 'translate(-50%, 20px)';

    // Wait for the CSS progress bar animation (2.5s)
    setTimeout(() => {
        // Fade out boot screen
        bootScreen.style.transition = 'opacity 0.5s ease';
        bootScreen.style.opacity = '0';

        // Remove from DOM after fade
        setTimeout(() => {
            bootScreen.remove();

            // Animate Dock 'Popping Up'
            dock.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            dock.style.opacity = '1';
            dock.style.transform = 'translate(-50%, 0)';

        }, 500);

    }, 2800); // slightly longer than the 2.5s bar to let it sit at 100% briefly
});

// --- Simple Clock Function ---
function updateClock() {
    const now = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const dayNum = now.getDate();
    const hours = now.getHours().toString().padStart(2, '0'); // 24-hour format
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const timeString = `${dayName} ${monthName} ${dayNum}  ${hours}:${minutes}`;
    document.getElementById('clock').textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

// --- Window Management ---
let zIndexCounter = 10;
const isDesktop = window.innerWidth > 768;

function makeActive(win) {
    zIndexCounter++;
    win.style.zIndex = zIndexCounter;
}

function toggleWindow(windowId) {
    const win = document.getElementById(windowId);
    const indicator = document.getElementById('ind-' + windowId);

    // Check if open (visible and not minimized)
    const isOpen = win.style.display && win.style.display !== 'none' && !win.classList.contains('genie-minimize');

    if (isOpen) {
        // Minimize (Genie) or Bring to Front
        if (parseInt(win.style.zIndex) === zIndexCounter) {
            // Already Top -> Minimize
            win.classList.add('genie-minimize');
            // Allow animation to play, do not set display:none here immediately if we want it to 'sit' in dock
            // But usually we hide it or it stays invisible.
            // With genie effect, it scales down and fades out.
        } else {
            // Not Top -> Bring to Front
            makeActive(win);
        }
    } else {
        // Open / Restore
        win.style.display = 'flex';

        // Small delay to ensure display:none -> flex transition works
        requestAnimationFrame(() => {
            win.classList.remove('genie-minimize');
            win.style.opacity = '1';
            win.style.transform = 'scale(1)';
            makeActive(win);
        });

        // Show Indicator
        if (indicator) indicator.classList.add('active');
    }
}

function closeWindow(windowId) {
    const win = document.getElementById(windowId);
    const indicator = document.getElementById('ind-' + windowId);

    // Fade out
    win.style.opacity = '0';
    win.classList.add('genie-minimize'); // Or just fade

    setTimeout(() => {
        win.style.display = 'none';
        win.classList.remove('genie-minimize'); // Reset for next open
    }, 300);

    // Remove Indicator
    if (indicator) indicator.classList.remove('active');
}


function makeDraggable(windowId) {
    const windowEl = document.getElementById(windowId);
    if (!windowEl) return;

    const header = windowEl.querySelector('.window-header');
    let isDragging = false;
    let offsetX, offsetY;

    windowEl.addEventListener('mousedown', () => {
        makeActive(windowEl);
    });

    header.addEventListener('mousedown', (e) => {
        if (window.getComputedStyle(windowEl).position !== 'absolute') return;

        // Fix: Don't drag if clicking traffic lights or controls
        if (e.target.closest('.traffic-lights') || e.target.closest('button') || e.target.closest('.sidebar-item')) return;

        isDragging = true;
        // Calculate offset
        offsetX = e.clientX - windowEl.getBoundingClientRect().left;
        offsetY = e.clientY - windowEl.getBoundingClientRect().top;
        header.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const desktopRect = document.getElementById('desktop').getBoundingClientRect();
        let newX = e.clientX - desktopRect.left - offsetX;
        let newY = e.clientY - desktopRect.top - offsetY;

        windowEl.style.left = `${newX}px`;
        windowEl.style.top = `${newY}px`;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        if (header) header.style.cursor = 'grab';
    });
}

// Initialize
if (isDesktop) {
    makeDraggable('window-java');
    makeDraggable('window-data');
    makeDraggable('window-about');
    makeDraggable('window-contact');
}
