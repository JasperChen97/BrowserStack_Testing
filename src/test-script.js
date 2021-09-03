const webdriver = require('selenium-webdriver');
require('dotenv').config()
const username = process.env.BROWSERSTACK_USERNAME;
const accessKey = process.env.BROWSERSTACK_ACCESS_KEY;
const buildName = process.env.BROWSERSTACK_BUILD_NAME;
const browserstackLocal = process.env.BROWSERSTACK_LOCAL;
const browserstackLocalIdentifier = process.env.BROWSERSTACK_LOCAL_IDENTIFIER;

async function googleSearchBsTest (capabilities) {
  let driver = new webdriver.Builder()
    .usingServer('http://'+username+':'+accessKey+'@hub-cloud.browserstack.com/wd/hub')
    .withCapabilities({
      ...capabilities,
      ...capabilities['browser'] && { browserName: capabilities['browser']}
    })
    .build();
  await driver.get("http://www.google.com");
  const inputField = await driver.findElement(webdriver.By.name("q"));
  await inputField.sendKeys("BrowserStack", webdriver.Key.ENTER);
  try {
    await driver.wait(webdriver.until.titleMatches(/BrowserStack/i), 5000);
  } catch (e) {
    await inputField.submit();
  }
  try {
    await driver.wait(webdriver.until.titleMatches(/BrowserStack/i), 5000);
    console.log(await driver.getTitle());
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Title contains BrowserStack!"}}'
    );
  } catch (e) {
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Page could not load in time"}}'
    );
  }
  await driver.quit();
}


async function googleSearchSeleniumTest (capabilities) {
  let driver = new webdriver.Builder()
    .usingServer('http://'+username+':'+accessKey+'@hub-cloud.browserstack.com/wd/hub')
    .withCapabilities({
      ...capabilities,
      ...capabilities['browser'] && { browserName: capabilities['browser']}
    })
    .build();
  await driver.get("http://www.google.com");
  const inputField = await driver.findElement(webdriver.By.name("q"));
  await inputField.sendKeys("Selenium", webdriver.Key.ENTER);
  try {
    await driver.wait(webdriver.until.titleMatches(/Selenium/i), 5000);
  } catch (e) {
    await inputField.submit();
  }
  try {
    await driver.wait(webdriver.until.titleMatches(/Selenium/i), 5000);
    console.log(await driver.getTitle());
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Title contains Selenium!"}}'
    );
  } catch (e) {
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Page could not load in time"}}'
    );
  }
  await driver.quit();
}

async function googleSearchYoutubeTest (capabilities) {
  let driver = new webdriver.Builder()
    .usingServer('http://'+username+':'+accessKey+'@hub-cloud.browserstack.com/wd/hub')
    .withCapabilities({
      ...capabilities,
      ...capabilities['browser'] && { browserName: capabilities['browser']}
    })
    .build();
  await driver.get("http://www.google.com");
  const inputField = await driver.findElement(webdriver.By.name("q"));
  await inputField.sendKeys("Youtube", webdriver.Key.ENTER);
  try {
    await driver.wait(webdriver.until.titleMatches(/Youtube/i), 5000);
  } catch (e) {
    await inputField.submit();
  }
  try {
    await driver.wait(webdriver.until.titleMatches(/Youtube/i), 5000);
    console.log(await driver.getTitle());
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Title contains Youtube!"}}'
    );
  } catch (e) {
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Page could not load in time"}}'
    );
  }
  await driver.quit();
}

const capabilities1 = {
  'bstack:options' : {
    "os" : "Windows",
    "osVersion" : "10"
  },
  "browserName" : "Chrome",
  "browserVersion" : "latest",
  "project": "Testing Challenge",
  "name": "sample Jenkins test",
  "build" : `${buildName}`,
	"browserstack.local" : `${browserstackLocal}`,
	"browserstack.localIdentifier" : `${browserstackLocalIdentifier}`,
	"browserstack.user" : `${username}`,
	"browserstack.key" : `${accessKey}`
}

const capabilities2 = {
  'bstack:options' : {
    'os': 'iPhone XS',
    "osVersion" : "14"
  },
  "browserName" : "iPhone",
  'real_mobile': 'true',
  "project": "Testing Challenge",
  "name": "sample Jenkins test",
  "build" : `${buildName}`,
	"browserstack.local" : `${browserstackLocal}`,
	"browserstack.localIdentifier" : `${browserstackLocalIdentifier}`,
	"browserstack.user" : `${username}`,
	"browserstack.key" : `${accessKey}`
}

const capabilities3 = {
  'bstack:options' : {
    "os" : "OS X",
    "osVersion" : "Big Sur"
  },
  "browserName" : "Chrome",
  "browserVersion" : "latest",
  "project": "Testing Challenge",
  "name": "sample Jenkins test",
  "build" : `${buildName}`,
	"browserstack.local" : `${browserstackLocal}`,
	"browserstack.localIdentifier" : `${browserstackLocalIdentifier}`,
	"browserstack.user" : `${username}`,
	"browserstack.key" : `${accessKey}`
}

const capabilities4 = {
  'bstack:options' : {
    "os" : "Google Pixel 5",
    "osVersion" : "11.0"
  },
  "browserName" : "Android",
  "real_mobile": "true",
  "project": "Testing Challenge",
  "name": "sample Jenkins test",
  "build" : `${buildName}`,
	"browserstack.local" : `${browserstackLocal}`,
	"browserstack.localIdentifier" : `${browserstackLocalIdentifier}`,
	"browserstack.user" : `${username}`,
	"browserstack.key" : `${accessKey}`
}

const capabilities5 = {
  'bstack:options' : {
    "os" : "Windows",
    "osVersion" : "10"
  },
  "browserName" : "Firefox",
  "browserVersion" : "latest",
  "project": "Testing Challenge",
  "name": "sample Jenkins test",
  "build" : `${buildName}`,
	"browserstack.local" : `${browserstackLocal}`,
	"browserstack.localIdentifier" : `${browserstackLocalIdentifier}`,
	"browserstack.user" : `${username}`,
	"browserstack.key" : `${accessKey}`
}

googleSearchBsTest(capabilities1);
googleSearchSeleniumTest(capabilities1);
googleSearchYoutubeTest(capabilities1);

googleSearchBsTest(capabilities2);
googleSearchSeleniumTest(capabilities2);
googleSearchYoutubeTest(capabilities2);

googleSearchBsTest(capabilities3);
googleSearchSeleniumTest(capabilities3);
googleSearchYoutubeTest(capabilities3);

googleSearchBsTest(capabilities4);
googleSearchSeleniumTest(capabilities4);
googleSearchYoutubeTest(capabilities4);

googleSearchBsTest(capabilities5);
googleSearchSeleniumTest(capabilities5);
googleSearchYoutubeTest(capabilities5);
``