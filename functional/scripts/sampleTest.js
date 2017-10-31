module.exports = {
  'Sample functional test' : function (browser) {
    browser
      .url('http://nextstep.mybluemix.net/')
      .waitForElementVisible('#mainNav', 60000, true, function(){
      	console.log('found navBar')
      }, 'Waiting for Search Input to become visible')
      .pause(5000)
      .end();
  }
};
