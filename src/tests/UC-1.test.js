
describe('UC-1', async () => {

    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com/');
    });

    it('Test Login form with empty credentials', async () => {

        const username_field = await $('//input[@id="user-name"]');
        const password_field = await $('//input[@id="password"]');

        // 1. Type an accepted username into "Username" field
        // get an array with all the accepted usernames
        let usernames = await $('//div[@id="login_credentials"]').getText();
        usernames = usernames.split('\n').slice(1);
        // randomly get one of the accepted usernames
        let num = Math.floor(Math.random() * usernames.length);
        let username = usernames[num];
        // type the password into the "Username" field
        await username_field.setValue(username);

        // 2. Type the password into the "Password" field
        // get the password
        let password = await $('//div[@class="login_password"]').getText();
        password = password.split('\n')[1];
        // type the password into the "Password" field
        await password_field.setValue(password);

        // 3. Clear the input in the "Username" field
        await username_field.doubleClick();
        await browser.performActions([{
            type: 'key',
            id: 'keyboard',
            actions: [{ type: 'keyDown', value: "\uE003" }]
          }]);
        
        // 4. Clear the input in the "Password" field
        // await password_field.clearValue();
        await password_field.doubleClick();
        await browser.performActions([{
            type: 'key',
            id: 'keyboard',
            actions: [{ type: 'keyDown', value: "\uE003" }]
          }]);

        // 5. Click the 'Login' button
        await $('//input[@id="login-button"]').click();
        
        // 6. Check the error message: "Username is required"
        // wait for the error message to be displayed
        await $('//h3[@data-test="error"]').waitForDisplayed();
        // check the text in the error message
        let error_container = await $('//div[@class="error-message-container error"]');
        await expect(error_container).toHaveText(expect.stringContaining('Username is required'));
    });

})
