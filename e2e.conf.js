/*exports.config = {
//  seleniumAddress: 'http://3.39.48.164:4444/wd/hub',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
       'browserName': 'chrome'
  },
  getPageTimeout: 60000,
  allScriptsTimeout: 60000,
  params: {
        baseUrl: 'http://google.com'
  },
  onPrepare: function(){
    browser.manage().window().setSize(1024, 768);
    browser.driver.get(browser.params.baseUrl);
  },
  onComplete: function(){
    browser.driver.quit();
  },
  framework: 'cucumber',
  cucumberOpts: {
    // define your step definitions in this file
    require: 'test/e2e/feature/steps.js',
    format: 'progress'
  }
}
*/
/*       ************************   */
exports.config = {
  chromeDriver: '/usr/local/lib/node_modules/protractor/selenium/chromedriver',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'cucumber',
  cucumberOpts: {
    require: 'test/e2e/feature/steps.js',
    format: 'progress'
  },
  capabilities: { 'browserName': 'chrome' },
  seleniumArgs: ['-browserTimeout=60'],
  specs: ['test/e2e/*.feature'],
  jasmineNodeOpts: {
    showColors: true,
    isVerbose: true
  }
  /*
  onPrepare: function() {
        browser.manage().window().setSize(1024, 768);
        browser.driver.get(browser.params.baseUrl);
  }
  */
}
