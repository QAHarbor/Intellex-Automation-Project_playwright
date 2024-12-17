require('dotenv').config(); // Load environment variables

module.exports = {
    validCredentials: {
        email: process.env.MENTEE_EMAIL,
        password: process.env.MENTEE_PASSWORD,
    },
    invalidCredentials: {
        email: process.env.INVALID_EMAIL,
        password: process.env.INVALID_PASSWORD,
    },
    urls: {
        baseUrl: process.env.BASE_URL,
        portalUrl: process.env.PORTAL_URL,
    },
};
