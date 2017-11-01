module.exports = {
  'Sample functional test' : function (browser) {
    browser
      .url('http://nextstep-test.mybluemix.net/')
      .pause(3000)
      .waitForElementVisible('#skills', 60000)
      // .setValue('input.gsfi', 'Test')
      // .waitForElementPresent('#search-pag', 60000)
      .end();
  }
};
