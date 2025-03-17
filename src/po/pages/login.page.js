const BasePage = require('./base.page');

const LoginBoxComponent = require("./../components/login/loginbox.component");
const CredentialsComponent = require("./../components/login/credentials.component");

class LoginPage extends BasePage {
    constructor() {
        super('/');
        this.loginBox = new LoginBoxComponent();
        this.credentials = new CredentialsComponent();
    };
};

module.exports = LoginPage;
