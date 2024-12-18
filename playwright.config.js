const path = require('path');

module.exports = {
    testDir: './tests',
    timeout: 200000,
    retries: 0, // Disable retries
    reporter: [['html', { open: 'never' }]], // Generate HTML reports
    use: {
        baseURL: process.env.BASE_URL,
      //  headless: false, // Change headless to false (run with browser visible)
        viewport: { width: 1280, height: 720 },
    },
  
    // Add this section to specify test file patterns
    testMatch: [
        '**/*.spec.js', // Include all spec files
        '**/*.test.js'   // Include all test files (if you use .test.js as well)
    ],

    resolve: {
        alias: {
            '@page-objects': path.resolve(__dirname, './page-objects'),
            '@fixtures': path.resolve(__dirname, './tests/fixtures'),
        },
    },
};
