const path = require('path');

module.exports = {
    testDir: './tests',
    timeout: 200000,
    retries: 0, // Disable retries
    reporter: [['html', { open: 'never' }]], // Generate HTML reports
    use: {
        baseURL: process.env.BASE_URL,
        headless: false, // Change headless to false (run with browser visible)
        viewport: { width: 1280, height: 720 },
    },
  
 
    resolve: {
        alias: {
            '@page-objects': path.resolve(__dirname, './page-objects'),
            '@fixtures': path.resolve(__dirname, './tests/fixtures'),
        },
    },
};
