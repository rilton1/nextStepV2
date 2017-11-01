module.exports = {
  'Sample functional test' : function (browser) {
    browser
      .url('http://nextstep-test.mybluemix.net/')
      .pause(3000)
      .waitForElementVisible('.btn-success', 60000)
      // .setValue('input.gsfi', 'Test')
      // .waitForElementPresent('#search-pag', 60000)
      .end();
  }
};
