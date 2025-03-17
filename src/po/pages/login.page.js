const LoginBoxComponent = require("./../components/login/loginbox.component");
const CredentialsComponent = require("./../components/login/credentials.component");

class LoginPage {

    constructor() {
        this.loginBox = new LoginBoxComponent();
        this.credentials = new CredentialsComponent();
    }
    
    async open() {
        await browser.url('https://www.saucedemo.com/');
    };
}

module.exports = LoginPage;
