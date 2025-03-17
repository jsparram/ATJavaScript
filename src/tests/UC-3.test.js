const LoginPage = require("./../po/pages/login.page");

const loginPage = new LoginPage();

describe('UC-3', async () => {

    beforeEach(async () => {
        await loginPage.open();
    });

    it('Test Login form with credentials by passing Username', async () => {

        // 1. Type an accepted username into "Username" field
		const username = await loginPage.credentials.randomUsername;
		await loginPage.loginBox.field("username").setValue(username);

        // 2. Type the password into the "Password" field
		const password = await loginPage.credentials.password;
		await loginPage.loginBox.field("password").setValue(password);

        // 3. Click the 'Login' button
        await loginPage.loginBox.loginBtn.click();
        
        // 4. Validate the title "Swag Labs" in the dashboard
        await expect(browser).toHaveTitle('Swag Labs');

    });

})
