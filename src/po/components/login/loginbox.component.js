const BaseComponent = require('./../common/base.component')

class LoginBoxComponent extends BaseComponent {

    constructor() {
        super('//div[@class="login-box"]');
    }

    get loginBtn() {
        return this.rootEl.$('//input[@id="login-button"]');
    }

    get errorMsg() {
        // return $('//div[@class="error-message-container error"]');
        return this.rootEl.$('//h3[@data-test="error"]');
    }
    
    /**
     * @param {'username' | 'password'} param 
     * @returns element
     */
    field(param) {
        const selectors = {
            username: '//input[@id="user-name"]',
            password: '//input[@id="password"]',
            // username: '//div[@class="login-box"]//input[@id="user-name"]',
            // password: '//div[@class="login-box"]//input[@id="password"]',
        };
        return this.rootEl.$(selectors[param.toLowerCase()]);
    };
}

module.exports = LoginBoxComponent;
