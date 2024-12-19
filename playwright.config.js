const path = require('path');

module.exports = {
    testDir: './tests',
    timeout: 200000,
    retries: 0, // Disable retries
    reporter: [['html', { open: 'never' }]], // Generate HTML reports
    use: {
        baseURL: process.env.BASE_URL, // Ensure BASE_URL is set
        headless: true, // Set this to false if you want to view the browser during local testing
        viewport: { width: 1280, height: 720 },
    },
  
    // Pattern for including test files
    testMatch: [
        '**/*.spec.js', // Include all spec files
        '**/*.test.js'   // Include all test files
    ],

    resolve: {
        alias: {
            '@page-objects': path.resolve(__dirname, './page-objects'),
            '@fixtures': path.resolve(__dirname, './tests/fixtures'),
        },
    },
};
