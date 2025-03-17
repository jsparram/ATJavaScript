const LoginPage = require("./../po/pages/login.page");

const loginPage = new LoginPage();

describe('UC-2', async () => {

    beforeEach(async () => {
        await loginPage.open();
    });

    it('Test Login form with credentials by passing Username', async () => {

        // 1. Type an accepted username into "Username" field
		const username = await loginPage.credentials.getRandomUsername();
		await loginPage.loginBox.field("username").setValue(username);

        // 2. Type the password into the "Password" field
		const password = await loginPage.credentials.getPassword();
		await loginPage.loginBox.field("password").setValue(password);
        
        // 3. Clear the input in the "Password" field
        await loginPage.loginBox.field("username").click();
		await loginPage.loginBox.field("password").doubleClick();
        await browser.performActions([
            {
                type: 'key',
                id: 'keyboard',
                actions: [{ type: 'keyDown', value: "\uE003" }]
            },
        ]);

        // 4. Click the 'Login' button
        await loginPage.loginBox.loginBtn.click();
        
        // 5. Check the error message: "Username is required"
        const error_message = await loginPage.loginBox.errorMsg;
        await error_message.waitForDisplayed();
        await expect(error_message).toHaveText(
            expect.stringContaining('Password is required')
        );

    });

});
