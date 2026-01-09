// Application Configuration - Hotfix
const config = {
    appName: 'Synodos',
    version: '1.1.0',
    apiUrl: 'http://localhost:8081/api',
    wsUrl: 'ws://localhost:8081/ws',
    theme: 'light',
    language: 'ko',
    maxFileSize: 50 * 1024 * 1024,
    supportedFormats: ['jpg', 'png', 'pdf', 'doc'],
    debug: false,
    logLevel: 'error'
};

module.exports = config;
