import { test, expect } from '@playwright/test';
import MentorSignUpPage from '@page-objects/MentorSignUpPage';

const { validMentorDetails, invalidMentorDetails, urls } = require('@fixtures/test-data-mentor')

test.use({ headless: false });

test.describe('Mentor SignUp Tests', () => {

    // Test Case 1: Mentor SignUp with Valid Credentials
    test('should sign up mentor successfully with valid credentials', async ({ page }) => {
        const mentorSignUpPage = new MentorSignUpPage(page);

        // Navigate to SignUp page
        await mentorSignUpPage.navigateToSignUp();

        // Fill in the sign-up form using valid data from environment variables
        await mentorSignUpPage.fillSignUpForm(
            validMentorDetails.firstName,
            validMentorDetails.lastName,
            validMentorDetails.email,
            validMentorDetails.password,
            validMentorDetails.jobTitle,
            validMentorDetails.company,
            validMentorDetails.linkedIn
        );

        // Submit the sign-up form
        await mentorSignUpPage.submitSignUp();

        // Verify successful sign-up (This can be done by checking if we navigate to the next page or a success message)
        const successMessage = await page.locator('text=Successfully signed up');
        await expect(successMessage).toBeVisible();

        console.log('Successfully Signed Up as Mentor.');
    });

    // Test Case 2: Mentor SignUp with Invalid Credentials
    test('should fail to sign up mentor with invalid credentials', async ({ page }) => {
        const mentorSignUpPage = new MentorSignUpPage(page);

        // Navigate to SignUp page
        await mentorSignUpPage.navigateToSignUp();

        // Fill in the sign-up form with invalid details
        await mentorSignUpPage.fillSignUpForm(
            invalidMentorDetails.firstName,
            invalidMentorDetails.lastName,
            invalidMentorDetails.email,
            invalidMentorDetails.password,
            invalidMentorDetails.jobTitle,
            invalidMentorDetails.company,
            invalidMentorDetails.linkedIn
        );

        // Submit the sign-up form
        await mentorSignUpPage.submitSignUp();

        // Verify error message is visible
        const errorMessage = await page.locator('text=Invalid email or password');
        await expect(errorMessage).toBeVisible();

        console.log('Failed to Sign Up as Mentor due to invalid credentials.');
    });
});
