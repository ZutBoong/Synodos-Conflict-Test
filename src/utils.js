// Utility Functions
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

module.exports = {
    formatDate,
    formatTime,
    capitalize,
    truncate,
    debounce
};
