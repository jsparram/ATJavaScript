const LoginPage = require('./login.page');
const InventoryPage = require('./inventory.page');

/**
 * Page factory function.
 * @param {'login' | 'inventory'} name 
 * @returns {LoginPage | InventoryPage}
 */
function pages(name) {
    const items = {
        login: new LoginPage(),
        inventory: new InventoryPage(),
    };
    return items[name.toLowerCase()];
};

module.exports = {
    LoginPage,
    InventoryPage,
    pages,
};
