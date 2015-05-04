var chai = require('chai');
// var chaiAsPromised = require('chai-as-promised');
// chai.use(chaiAsPromised);

var expect = chai.expect;


module.exports = function() {
  this.Given(/^I go to "([^"]*)"$/, function(url, next) {
    browser.get('http://localhost:9000' ).then(next);
    //next();
  });

  //this.Then( /^I click on "([^"]*)"$/, clickOnHandler);

  this.Then(/^I should see "([^"]*)"$/, function (text, next) {
    //browser.debugger()
    var foo = $('.navbar-header h3');
    foo.getWebElement().then(function(el){
      console.log('got el');
      el.getText().then(function(val){
        console.log('Page Header is:', val);
        expect(val).to.contain(text);
        next();
      });
    });

    console.log('Spec');
    
    //browser.pause();
    
    //assertPageContains(content,next);
  });

  function assertPageContains(content,next){
    browser.getPageSource().then(function(source){
      expect(source).to.contain(content);
      next();
    });
  }

  function clickOn(selector) {
    element(by.css(selector)).click();
  }

};