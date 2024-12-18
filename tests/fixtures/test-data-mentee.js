require('dotenv').config(); // Load environment variables

module.exports = {
    // Credentials Section: for login-related data
    credentials: {
        valid: {
            email: process.env.MENTEE_EMAIL,
            password: process.env.MENTEE_PASSWORD,
        },
        invalid: {
            email: process.env.INVALID_EMAIL,
            password: process.env.INVALID_PASSWORD,
        },
    },

    // URLs Section: for base URLs and portal URLs
    urls: {
        baseUrl: process.env.BASE_URL,
        portalUrl: process.env.PORTAL_URL,
    },

    // Personal Details Section: for updating personal details like first name, last name, etc.
    personalDetails: {
        valid: {
            firstName: 'Tasniva',
            lastName: 'Sumi',
        },
        invalid: {
            firstName: 'A'.repeat(300),  // Excessively long input
            lastName: 'B'.repeat(300),   // Excessively long input
        },
    },

    // Bio Section: for updating bio information
    bio: {
        valid: {
            bio: 'I love Bangladesh and learning new technologies.',
            goal: 'My goal is to improve my coding skills and help others.',
        },
        invalid: {
            bio: 'A'.repeat(1000),    // Invalid long bio
            goal: 'B'.repeat(1000), // Invalid long goal
        },
    },

    // Interests Section: for updating interests/preferences
    interests: {
        valid: 'Coding, Reading, Music',
        invalid: 'A'.repeat(500),  // Invalid long interests
    },
};