module.exports = {
  testDir: './tests',
  timeout: 200000, // Timeout for each test in milliseconds
  retries: 0, // Number of retries for failed tests
  reporter: [
    ['html', { open: 'never' }], // HTML report configuration
    ['json', { outputFile: 'test-results.json' }] // JSON report configuration
  ],
  use: {
    baseURL: process.env.BASE_URL, // Ensure BASE_URL is properly set in the environment
    headless: false, // Set to false to view the browser during testing
    viewport: { width: 1280, height: 720 }, // Browser viewport size
  },
  testMatch: [
    '**/*.spec.js', // Match .spec.js test files
    '**/*.test.js' // Match .test.js test files
  ],
  resolve: {
    alias: {
      '@page-objects': './page-objects',
      '@fixtures': './tests/fixtures'
    }
  }
};
