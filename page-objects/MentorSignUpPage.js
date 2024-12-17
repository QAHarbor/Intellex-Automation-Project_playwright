class MentorSignUpPage {
    constructor(page) {
        this.page = page;
        this.joinUsButton = page.locator("(//span[@class='MuiTouchRipple-root mui-w0pj6f'])[2]");
        this.joinAsMentorButton = page.locator("//span[normalize-space()='Join as Mentor']");
        this.firstNameInput = page.locator('#firstName');
        this.lastNameInput = page.locator('#lastName');
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.timezoneInput = page.locator('(//input[@placeholder="Select timezone"])[1]');
        this.timezoneOption = page.locator("(//li[@id=':r6:-option-3'])[1]");
        this.agreeButton = page.locator("(//span[@class='MuiTouchRipple-root mui-w0pj6f'])[4]");
        this.industryInput = page.locator('input[placeholder="Select industries"]');
        this.industryOption = page.locator('(//li[text()="Accounting"])[1]');
        this.skillsInput = page.locator('input[placeholder="Select skills"]');
        this.cheekIteam  = page.getByLabel('controlled');
        this.skillCheckbox = page.locator("li[id=':rp:-option-0'] input[type='checkbox']");
        this.jobTitleInput = page.locator('input[placeholder="Enter your job title"]');
        this.companyInput = page.locator('input[placeholder="Enter your company"]');
        this.linkedInInput = page.locator('input[placeholder="Enter your Linkedin URL"]');
        this.finishButton = page.locator('button#\\:re\\:');
    }

    async navigateToSignUp() {
        await this.page.goto('https://intellex-academic-core.vercel.app/');
        await this.joinUsButton.click();
        await this.joinAsMentorButton.click();
    }

    async fillSignUpForm(firstName, lastName, email, password, jobTitle, company, linkedIn) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.timezoneInput.click();
        await this.timezoneOption.click();
        await this.agreeButton.click();
        await this.industryInput.click();
        await this.industryOption.click();
        await this.skillsInput.click();
       await this.cheekIteam.click();
       //ait this.locator('.content-center').click();

        await this.skillCheckbox.check();
        await this.jobTitleInput.fill(jobTitle);
        await this.companyInput.fill(company);
        await this.linkedInInput.fill(linkedIn);
    }

    async submitSignUp() {
        await this.finishButton.click();
    }
}

module.exports = MentorSignUpPage;
