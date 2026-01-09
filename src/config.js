// Application Configuration
const config = {
    appName: 'Synodos',
    version: '1.0.0',
    apiUrl: 'http://localhost:8081/api',
    wsUrl: 'ws://localhost:8081/ws',
    theme: 'light',
    language: 'ko',
    maxFileSize: 10 * 1024 * 1024,
    supportedFormats: ['jpg', 'png', 'pdf']
};

module.exports = config;
