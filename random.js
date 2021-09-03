// const webdriver = require('selenium-webdriver');
// const browserstack = require('browserstack-local');
// require('dotenv').config()
// const username = process.env.BROWSERSTACK_USERNAME;
// const accessKey = process.env.BROWSERSTACK_ACCESS_KEY;
// const buildName = process.env.BROWSERSTACK_BUILD_NAME;
// const browserstackLocal = process.env.BROWSERSTACK_LOCAL;
// const browserstackLocalIdentifier = process.env.BROWSERSTACK_LOCAL_IDENTIFIER;


// const bs_local = new browserstack.Local();

// // You can also set an environment variable - "BROWSERSTACK_ACCESS_KEY".
// const bs_local_args = { key: `${accessKey}` };

// // Starts the Local instance with the required arguments.
// bs_local.start(bs_local_args, function() {
//   console.log('Started BrowserStackLocal');

//   // Checks if BrowserStack local instance is running.
//   console.log('BrowserStackLocal running:', bs_local.isRunning());

//   // Your test code goes here, from creating the driver instance till the end, i.e. driver.quit.
//   async function runTestWithCaps (capabilities) {
//     let driver = new webdriver.Builder()
//       .usingServer('http://'+username+':'+accessKey+'@hub-cloud.browserstack.com/wd/hub')
//       .withCapabilities({
//         ...capabilities,
//         ...capabilities['browser'] && { browserName: capabilities['browser']}  // Because NodeJS language binding requires browserName to be defined
//       })
//       .build();
//     await driver.get("http://www.google.com");
//     const inputField = await driver.findElement(webdriver.By.name("q"));
//     await inputField.sendKeys("BrowserStack", webdriver.Key.ENTER); // this submits on desktop browsers
//     try {
//       await driver.wait(webdriver.until.titleMatches(/BrowserStack/i), 5000);
//     } catch (e) {
//       await inputField.submit(); // this helps in mobile browsers
//     }
//     try {
//       await driver.wait(webdriver.until.titleMatches(/BrowserStack/i), 5000);
//       console.log(await driver.getTitle());
//       await driver.executeScript(
//         'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Title contains BrowserStack!"}}'
//       );
//     } catch (e) {
//       await driver.executeScript(
//         'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Page could not load in time"}}'
//       );
//     }
//     await driver.quit();
//   }
//   // Stops the Local instance after your test run is completed, i.e after driver.quit.
//   bs_local.stop(function() {
//     console.log('Stopped BrowserStackLocal');
//   });

//   const capabilities1 = {
//     'bstack:options' : {
//       "os" : "Windows",
//       "osVersion" : "10"
//     },
//     "browserName" : "Chrome",
//     "browserVersion" : "latest",
//     'project': 'Testing Challenge',
//     "name": "sample Jenkins test",
//     "build" : `${buildName}`,
//     "browserstack.local" : `${browserstackLocal}`,
//     "browserstack.localIdentifier" : `${browserstackLocalIdentifier}`,
//     "browserstack.user" : `${username}`,
//     "browserstack.key" : `${accessKey}`
//   }
//   runTestWithCaps(capabilities1);
// });





// // const capabilities2 = {
// //   'bstack:options' : {
// //     'os': 'iPhone XS',
// //     "osVersion" : "14"
// //   },
// //   "browserName" : "iPhone",
// //   'real_mobile': 'true',
// //   'project': 'Marketing Website v2',
// //   'build': 'build-1',
// //   "name": "testing name: Should have 3 buttons",
// //   'browserstack.debug': 'true',
// //   'browserstack.console': 'info',
// //   'browserstack.networkLogs': 'true'
// // }

// // const capabilities3 = {
// //   'bstack:options' : {
// //     "os" : "OS X",
// //     "osVersion" : "Big Sur"
// //   },
// //   "browserName" : "Chrome",
// //   "browserVersion" : "latest",
// //   'project': 'Marketing Website v2',
// //   'build': 'build-1',
// //   "name": "testing name: Should have 3 buttons",
// //   'browserstack.debug': 'true',
// //   'browserstack.console': 'info',
// //   'browserstack.networkLogs': 'true'
// // }

// // const capabilities4 = {
// //   'bstack:options' : {
// //     "os" : "Google Pixel 5",
// //     "osVersion" : "11.0"
// //   },
// //   "browserName" : "Android",
// //   'real_mobile': 'true',
// //   'project': 'Marketing Website v2',
// //   'build': 'build-1',
// //   "name": "testing name: Should have 3 buttons",
// //   'browserstack.debug': 'true',
// //   'browserstack.console': 'info',
// //   'browserstack.networkLogs': 'true'
// // }

// // const capabilities5 = {
// //   'bstack:options' : {
// //     "os" : "Windows",
// //     "osVersion" : "10"
// //   },
// //   "browserName" : "Firefox",
// //   "browserVersion" : "latest",
// //   'project': 'Marketing Website v2',
// //   'build': 'build-1',
// //   "name": "testing name: Should have 3 buttons",
// //   'browserstack.debug': 'true',
// //   'browserstack.console': 'info',
// //   'browserstack.networkLogs': 'true'
// // }

// // runTestWithCaps(capabilities1);
// // runTestWithCaps(capabilities2);
// // runTestWithCaps(capabilities3);
// // runTestWithCaps(capabilities4);
// // runTestWithCaps(capabilities5);