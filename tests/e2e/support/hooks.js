var cartPage = require('../pages/hotelsPage');

var hooks = function () {
    this.registerHandler('BeforeFeature', function(feature){
        browser.ignoreSynchronization = true;
        browser.get("https://www.phptravels.net/");
    });


    this.registerHandler('AfterFeature', function(feature){
        //perform homepage action
        return browser.get("https://www.phptravels.net/");
    });

};

module.exports = hooks;
