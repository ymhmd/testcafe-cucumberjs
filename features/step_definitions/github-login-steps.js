require('dotenv').config();
var {Given, Then} = require('cucumber');

const Utils = require('../common/utilities/CommonUtilities');
const XPathSelector = require('../common/utilities/XPathSelector');
const ObjectIdentifiers = require('../common/resources/objects.json');
const TestCafeHelpers = require('../common/utilities/TestCafeHelpers');
const TestData = require('../common/resources/testData');

//Locators
// const usernameField = ObjectIdentifiers.githubLoginPage.usernameFieldXpath;
// const passwordField = ObjectIdentifiers.githubLoginPage.usernameFieldXpath;
const {
    usernameFieldXpath,
    passwordFieldXpath,
    signinButtonXpath,
    errorMessageXpath
} = ObjectIdentifiers.githubLoginPage;

Given(/^Navigate to github login page$/, async function () {
    await testController.navigateTo(TestData.githubLoginPage);
});

Given(/^Enter (.*) as user username and (.*) as user password$/, async function (username, password) {
    await testController.typeText(XPathSelector(usernameFieldXpath), username);
    await testController.typeText(XPathSelector(passwordFieldXpath), password);
});

Given(/^Click on login button$/, async function () {
    await testController.click(XPathSelector(signinButtonXpath));
});

Given(/^(.*) or not$/, async function (isLoggedIn) {
    if (isLoggedIn === 'true') {
        await TestCafeHelpers.helpers.elementIsNotDisplayed(errorMessageXpath);
        await TestCafeHelpers.helpers.validatePageUrl(TestData.githubPage);
    } else {
        await TestCafeHelpers.helpers.elementIsDisplayed(errorMessageXpath);
    }
});
