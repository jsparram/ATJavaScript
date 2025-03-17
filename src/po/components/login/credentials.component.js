const BaseComponent = require('./../common/base.component');

class CredentialsComponent extends BaseComponent {

    constructor() {
        super('//div[@class="login_credentials_wrap-inner"]');
    }

    async getRandomUsername() {
        // get an array with all the accepted usernames
        // $('//div[@id="login_credentials"]/text()');
        let usernames = await this.rootEl.$('//div[@class="login_credentials"]').getText();
        usernames = usernames.split('\n').slice(1);
        // randomly get one of the accepted usernames
        const num = Math.floor(Math.random() * usernames.length);
        return usernames[num];
    };
    async getPassword() {
        // get the password
        const password = await this.rootEl.$('//div[@class="login_password"]').getText();
        return password.split('\n')[1];
    };

    get randomUsername() {
        return this.getRandomUsername();
    };
    get password(){
        return this.getPassword();
    };

};

module.exports = CredentialsComponent;
