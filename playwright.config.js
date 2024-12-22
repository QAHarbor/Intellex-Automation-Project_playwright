require('@babel/register')({
    extensions: ['.js', '.ts'],
  });
  
  module.exports = {
    testDir: './tests',
    timeout: 200000,
    retries: 0,
    reporter: [
      ['html', { open: 'never' }], // HTML report
      ['json', { outputFile: 'test-results.json' }] // JSON report
    ],
    use: {
        baseURL: process.env.BASE_URL, // Ensure BASE_URL is set
        headless: false, // Set this to false if you want to view the browser during local testing
        viewport: { width: 1280, height: 720 },
    },
    testMatch: [
      '**/*.spec.js',
      '**/*.test.js'
    ],
  };
  