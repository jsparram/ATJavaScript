
describe('UC-3', async () => {

    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com/');
    });

    it('Test Login form with credentials by passing Username', async () => {

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

        // 3. Click the 'Login' button
        await $('//input[@id="login-button"]').click();
        
        // 4. Validate the title "Swag Labs" in the dashboard
        // const title = await $('//div[@class="app_logo"]').getText();
        await expect(browser).toHaveTitle('Swag Labs');

    });

})
