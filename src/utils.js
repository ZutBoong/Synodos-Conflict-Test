// Utility Functions - Updated
function formatDate(date) {
    return new Date(date).toLocaleDateString('ko-KR');
}

function formatTime(date) {
    return new Date(date).toLocaleTimeString('ko-KR');
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function truncate(str, length) {
    if (str.length <= length) return str;
    return str.slice(0, length) + '...';
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// New utility: Generate unique ID
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// New utility: Sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {
    formatDate,
    formatTime,
    capitalize,
    truncate,
    debounce,
    generateId,
    sleep
};
