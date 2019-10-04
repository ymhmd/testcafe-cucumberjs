require('dotenv').config();
var {Given, Then} = require('cucumber');

const Utils = require('../common/utilities/CommonUtilities');
const XPathSelector = require('../common/utilities/XPathSelector');
const ObjectIdentifiers = require('../common/resources/objects.json');
const TestCafeHelpers = require('../common/utilities/TestCafeHelpers');
const TestData = require('../common/resources/testData');

//Locators
const searchField = ObjectIdentifiers.githubPage.searchBarXpath;

    // Then User navigates to existing repos
Given(/^Enter "([^"]*)" in the search bar$/, async function (searchText) {
    await testController.typeText(XPathSelector(searchField), searchText);
});
Then(/^Press enter$/, async function () {
    await testController.pressKey('enter');
});
Given(/^Navigate to github page$/, async function () {
    await testController.navigateTo(TestData.githubPage);
});
Given(/^User navigates to existing repos "([^"]*)"$/, async function (searchText) {
    const xpath = `//em[text() = '${searchText}']`;
    await TestCafeHelpers.helpers.elementIsDisplayed(xpath);
});

Given(/^User cannot find repo "([^"]*)"$/, async function (searchText) {
    const existingRepoXpath = `//em[text() = '${searchText}']`;
    const unExistingRepoXpath = `//h3[contains(text(), "We couldn’t find any repositories matching '${searchText}'")]`;
    await TestCafeHelpers.helpers.elementIsNotDisplayed(existingRepoXpath);
    await TestCafeHelpers.helpers.elementIsDisplayed(unExistingRepoXpath);
});


Given(/^Enter (.*) in the search bar$/, async function (searchText) {
    await testController.typeText(XPathSelector(searchField), searchText);
});

Given(/^(.*) (.*) or not$/, async function (repoName, isExisting) {
    const existingRepoXpath = `//em[text() = '${repoName}']`;
    if (isExisting === 'true') {
        await TestCafeHelpers.helpers.elementIsDisplayed(existingRepoXpath);
    } else {
        const unExistingRepoXpath = `//h3[contains(text(), "We couldn’t find any repositories matching '${repoName}'")]`;
        await TestCafeHelpers.helpers.elementIsNotDisplayed(existingRepoXpath);
        await TestCafeHelpers.helpers.elementIsDisplayed(unExistingRepoXpath);
    }
});