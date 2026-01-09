// Utility Functions - Refactored with ES6+
const formatDate = (date, locale = 'ko-KR') => {
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date(date));
};

const formatTime = (date, locale = 'ko-KR') => {
    return new Intl.DateTimeFormat(locale, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(new Date(date));
};

const formatDateTime = (date, locale = 'ko-KR') => {
    return formatDate(date, locale) + ' ' + formatTime(date, locale);
};

const capitalize = (str) => str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : '';

const truncate = (str, length = 100, suffix = '...') => {
    if (!str || str.length <= length) return str;
    return str.slice(0, length - suffix.length) + suffix;
};

const debounce = (func, wait = 300) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};

const throttle = (func, limit = 300) => {
    let inThrottle;
    return (...args) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

const isEmpty = (value) => {
    if (value == null) return true;
    if (Array.isArray(value) || typeof value === 'string') return value.length === 0;
    if (typeof value === 'object') return Object.keys(value).length === 0;
    return false;
};

module.exports = {
    formatDate,
    formatTime,
    formatDateTime,
    capitalize,
    truncate,
    debounce,
    throttle,
    deepClone,
    isEmpty
};
