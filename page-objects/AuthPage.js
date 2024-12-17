class AuthPage {
    constructor(page) {
        this.page = page;
        this.loginLink = page.getByRole('link', { name: 'Log In' });
        this.emailInput = page.getByPlaceholder('Enter your email');
        this.passwordInput = page.getByPlaceholder('Enter your password');
        this.loginButton = page.getByRole('button', { name: 'Log in' });
    }

    async navigateToLogin() {
        await this.page.goto('https://intellex-academic-core.vercel.app/');
        await this.loginLink.click();
    }

    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async isLoginSuccessful() {
        return this.page.url() === 'https://intellex-academic-core.vercel.app/portal/';
    }
}

module.exports = AuthPage;
