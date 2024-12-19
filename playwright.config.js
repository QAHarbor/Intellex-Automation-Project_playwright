const path = require('path');

module.exports = {
    testDir: './tests',
    timeout: 200000,
    retries: 0, // Disable retries
    reporter: [
        ['html', { open: 'never' }], // Generate HTML reports
        ['json', { outputFile: 'test-results.json' }] // Generate JSON report for GitHub Actions
    ],
    use: {
        baseURL: process.env.BASE_URL, // Ensure BASE_URL is set
        headless: true, // Set to false for local testing
        viewport: { width: 1280, height: 720 },
    },
    testMatch: [
        '**/*.spec.js', // Include all spec files
        '**/*.test.js'  // Include all test files
    ],
    resolve: {
        alias: {
            '@page-objects': path.resolve(__dirname, './page-objects'),
            '@fixtures': path.resolve(__dirname, './tests/fixtures'),
        },
    },
};
