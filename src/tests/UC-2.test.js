const { pages } = require('./../po');

describe('UC-2', async () => {

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
        
        // 3. Clear the input in the "Password" field
        await pages('login').loginBox.field("username").click();
		await pages('login').loginBox.field("password").doubleClick();
        await browser.performActions([
            {
                type: 'key',
                id: 'keyboard',
                actions: [{ type: 'keyDown', value: "\uE003" }]
            },
        ]);

        // 4. Click the 'Login' button
        await pages('login').loginBox.loginBtn.click();
        
        // 5. Check the error message: "Password is required"
        const error_message = await pages('login').loginBox.errorMsg;
        await error_message.waitForDisplayed();
        await expect(error_message).toHaveText(
            expect.stringContaining('Password is required')
        );

    });

});
