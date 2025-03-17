const BasePage = require('./base.page');
const { LoginBox, Credentials } = require('./../components');

class LoginPage extends BasePage {
    constructor() {
        super('/');
        this.loginBox = new LoginBox();
        this.credentials = new Credentials();
    };
};

module.exports = LoginPage;
