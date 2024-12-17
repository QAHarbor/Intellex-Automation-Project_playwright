class HomePage {
    constructor(page) {
        this.page = page;

        // URLs
        this.baseUrl = process.env.BASE_URL || 'https://intellex-academic-core.vercel.app';
        this.profileUrl = process.env.PROFILE_URL || `${this.baseUrl}/portal/profile`;
        this.homeUrl = process.env.HOME_URL || `${this.baseUrl}/login`;
        

        // Locators for main buttons
        this.homeBtn = page.locator('a.MuiStack-root.mui-1g1jecy');
        this.findMentorBtn = page.locator('a.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-colorPrimary');
        this.createAccBtn = page.locator('a.create-account-btn');
        this.becomeMentor = page.locator('(//a[text()="Become a Mentor"])[1]');
        this.joinMentor = page.locator('(//a[text()="Join as mentor"])[1]');
        this.seeMoreBtn = page.locator('a:has-text("See More")');

        // Footer links
        this.footerBeMenteeBtn = page.locator("//a[@class='footer-links' and text()='Become a Mentee']");
        this.footerFindMentorBtn = page.locator('a.footer-links[href="/mentors/"]');
        this.footerBeMentorBtn = page.locator('a.footer-links[href="/register/?type=mentor"]');
        this.footerAboutBtn = page.locator("a[href='/about/']");
        this.footerPrivacyBtn = page.locator("a[href='/privacy-policy/']");
        this.footerTermsBtn = page.locator("a[href='/terms-conditions/']");
        this.footerLinkedinBtn = page.locator('svg.iconify--mdi');
    }

    // Navigation methods
    async navigateToHome() {
        await this.page.goto(this.homeUrl);
        await this.homeBtn.click();
    }

    async navigateToFindMentor() {
        await this.findMentorBtn.click();
    }

    async createNewAcc() {
        await this.createAccBtn.click();
    }

    async discoverMentor() {
        await this.seeMoreBtn.click();
    }

    async joinMentor() {
        await this.becomeMentor.click();
        await this.joinMentor.click();
    }

    // Footer navigation methods
    async footerBecomeMentee() {
        await this.footerBeMenteeBtn.click();
        await this.page.waitForTimeout(7000); // Wait for 7 seconds to ensure the page loads
    }

    async footerFindMentor() {
        await this.footerFindMentorBtn.click();
        await this.page.waitForTimeout(7000); // Wait for 7 seconds to ensure the page loads
    }

    async footerBecomeMentor() {
        await this.footerBeMentorBtn.click();
        await this.page.waitForTimeout(7000); // Wait for 7 seconds to ensure the page loads
    }

    async footerAboutUs() {
        await this.footerAboutBtn.click();
        await this.page.waitForTimeout(7000); // Wait for 7 seconds to ensure the page loads
    }

    async footerPrivacy() {
        await this.footerPrivacyBtn.click();
        await this.page.waitForTimeout(7000); // Wait for 7 seconds to ensure the page loads
    }

    async footerTerms() {
        await this.footerTermsBtn.click();
        await this.page.waitForTimeout(7000); // Wait for 7 seconds to ensure the page loads
    }

    async footerLinkedIn() {
        await this.footerLinkedinBtn.click();
        await this.page.waitForTimeout(7000); // Wait for 7 seconds to ensure the page loads
    }
}

module.exports = HomePage;
