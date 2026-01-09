// Application Configuration - Updated for Production
const config = {
    appName: 'Synodos Pro',
    version: '2.0.0',
    apiUrl: 'https://api.synodos.com/v2',
    wsUrl: 'wss://ws.synodos.com',
    theme: 'auto',
    language: 'ko',
    maxFileSize: 100 * 1024 * 1024,
    supportedFormats: ['jpg', 'png', 'gif', 'pdf', 'doc', 'docx', 'xls', 'xlsx'],
    features: {
        darkMode: true,
        notifications: true,
        analytics: true
    }
};

module.exports = config;
