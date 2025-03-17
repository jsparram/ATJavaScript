const { pages } = require('./../po');

describe('UC-3', async () => {

    beforeEach(async () => {
        await pages('login').open();
    });

    it('Test Login form with credentials by passing Username', async () => {

        // 1. Type an accepted username into "Username" field
		const username = await pages('login').credentials.randomUsername;
		await pages('login').loginBox.field("username").setValue(username);

        // 2. Type the password into the "Password" field
		const password = await pages('login').credentials.password;
		await pages('login').loginBox.field("password").setValue(password);

        // 3. Click the 'Login' button
        await pages('login').loginBox.loginBtn.click();
        
        // 4. Validate the title "Swag Labs" in the dashboard
        await expect(browser).toHaveTitle('Swag Labs');

    });

});
