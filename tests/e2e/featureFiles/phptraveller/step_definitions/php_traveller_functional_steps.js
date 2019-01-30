var myStepDefinitionsWrapper = function () {

    var homePage = require('../../../pages/homePage');
    var flightsPage = require('../../../pages/flightsPage');
    var toursPage = require('../../../pages/toursPage');
    var hotelsPage = require('../../../pages/hotelsPage');
    var settings = require('../../../common/settings');
    var chai = require(settings.constants.CHAI);
    this.setDefaultTimeout(settings.config.STEPTIMEOUT);
    var assert = chai.assert;
    var expectedResultDictionary = {};

    this.Given(/^I am in PHP Traveller Home page$/, function (callback) {
        browser.findElement(hotelsPage.searchHotel).isDisplayed().then(function () {
            callback();
        });
    });


    this.When(/^I search for a Hotel Name "([^"]*)"$/, function (hotelName, callback) {
        browser.findElement(hotelsPage.searchHotel).isDisplayed().then(function () {
            browser.findElement(hotelsPage.searchHotel).click().then(function () {
                browser.findElement(hotelsPage.searchHotel).sendKeys(hotelName).then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^I Enter From City or Airport "([^"]*)" and To City or Airport "([^"]*)"$/, function (fromCity, ToCity, callback) {
        browser.findElement(flightsPage.departureAirport).isDisplayed().then(function () {
            browser.findElement(flightsPage.departureAirport).sendKeys(fromCity).then(function () {
                browser.findElement(flightsPage.arrivalAirport).sendKeys(ToCity).then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^I input City name "([^"]*)"$/, function (tourCityName, callback) {
        browser.findElement(toursPage.searchTours).isDisplayed().then(function () {
            browser.findElement(toursPage.searchTours).click().then(function () {
                browser.findElement(toursPage.searchTours).sendKeys(tourCityName).then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^I select type of tour "([^"]*)"$/, function (tourType, callback) {
        browser.findElement(toursPage.tourType).isDisplayed().then(function () {
            browser.findElement(toursPage.tourType).select(tourType).then(function () {
                callback();
            });
        });
    });

    this.When(/^I select round trip$/, function (callback) {
        browser.findElement(flightsPage.roundTrip).isDisplayed().then(function () {
            browser.findElement(flightsPage.roundTrip).click().then(function () {
                callback();
            });
        });
    });


    this.When(/^I input Check In date and Check Out date$/, function (callback) {
        browser.findElement(hotelsPage.checkInField).click().then(function () {
            browser.findElement(hotelsPage.datePicker1).click().then(function () {
                browser.findElement(hotelsPage.checkOutField).click().then(function () {
                    browser.findElement(hotelsPage.datePicker2).click().then(function () {
                        callback();
                    });
                });
            });
        });
    });

    this.When(/^I input Departure date and Return Date$/, function (callback) {
        browser.findElement(flightsPage.departureDateField).click().then(function () {
            browser.findElement(flightsPage.datePicker1).click().then(function () {
                browser.findElement(flightsPage.arrivalDateField).click().then(function () {
                    browser.findElement(flightsPage.datePicker2).click().then(function () {
                        callback();
                    });
                });
            });
        });
    });

    this.When(/^I see the First available flight and click on book now$/, function (callback) {
        browser.findElement(flightsPage.resultsFirstFlightBookNow).isDisplayed().then(function () {
            browser.findElement(flightsPage.resultsFirstFlightBookNow).click().then(function () {
                browser.findElement(toursPage.bookNow).isDisplayed().then(function () {
                    callback();
                });
            });
        });
    });


    this.When(/^I click on Details button for the first available tour$/, function (callback) {
        browser.findElement(toursPage.resultsFirstTourDetails).isDisplayed().then(function () {
            browser.findElement(toursPage.resultsFirstTourDetails).click().then(function () {
                browser.findElement(toursPage.bookNow).isDisplayed().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^I click on search$/, function (callback) {
        browser.findElement(homePage.searchButton).isDisplayed().then(function () {
            browser.findElement(homePage.searchButton).click().then(function () {
                callback();
            });
        });
    });

    this.When(/^I click on Flights tab$/, function (callback) {
        browser.findElement(flightsPage.flightsTab).isDisplayed().then(function () {
            browser.findElement(flightsPage.flightsTab).click().then(function () {
                callback();
            });
        });
    });

    this.When(/^I click on Tours tab$/, function (callback) {
        browser.findElement(toursPage.toursTab).isDisplayed().then(function () {
            browser.findElement(toursPage.toursTab).click().then(function () {
                callback();
            });
        });
    });

    this.When(/^I click on Book Now$/, function (callback) {
        browser.findElement(homePage.bookNowButton).isDisplayed().then(function () {
            browser.findElement(homePage.bookNowButton).click().then(function () {
                callback();
            });
        });
    });


    this.When(/^I search for an item with Shop by Category "([^"]*)"$/, function (shopByCategory, callback) {
        browser.findElement(homePage.ebayShopByCategoryIcon).isDisplayed().then(function () {
            browser.findElement(homePage.ebayShopByCategoryIcon).click().then(function () {
                browser.findElement(homePage.ebayShopByCategoryMensClothingLink).isDisplayed().then(function () {
                    browser.findElement(homePage.ebayShopByCategoryMensClothingLink).click().then(function () {
                        browser.findElement(homePage.ebayShopByCategoryMensClothingTshirts).click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.When(/^I get the searched item in Suggestions list and click on it$/, function (callback) {
        browser.findElement(homePage.ebaySearchFirstSuggestion).isDisplayed().then(function () {
            browser.findElement(homePage.ebaySearchFirstSuggestion).click().then(function () {
                callback();
            });
        });
    });

    this.When(/^I click on first item in shop by category page$/, function (callback) {
        browser.waitForElement(searchResultsPage.listShopByCategoryFirstItem).then(function () {
            browser.findElement(searchResultsPage.listShopByCategoryFirstItem).isDisplayed().then(function () {
                browser.findElement(searchResultsPage.listShopByCategoryFirstItem).click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^I click on second item in shop by category page$/, function (callback) {
        browser.waitForElement(searchResultsPage.listShopByCategorySecondItem).then(function () {
            browser.findElement(searchResultsPage.listShopByCategorySecondItem).isDisplayed().then(function () {
                browser.findElement(searchResultsPage.listShopByCategorySecondItem).click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^I click on first item in search results page$/, function (callback) {
        browser.waitForElement(searchResultsPage.resultsList).then(function () {
            browser.findElement(searchResultsPage.resultsList).isDisplayed().then(function () {
                browser.findElement(searchResultsPage.resultsListFirstItem).click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^I click on second item in search results page$/, function (callback) {
        browser.waitForElement(searchResultsPage.resultsList).then(function () {
            browser.findElement(searchResultsPage.resultsList).isDisplayed().then(function () {
                browser.findElement(searchResultsPage.resultsListSecondItem).click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^I click on Add to cart$/, function (callback) {
        browser.waitForElement(itemPage.addToCart).then(function () {
            browser.findElement(itemPage.addToCart).isDisplayed().then(function () {
                browser.findElement(itemPage.addToCart).click().then(function () {
                    browser.findElement(itemPage.noThanksButton).isDisplayed().then(function () {
                        browser.findElement(itemPage.noThanksButton).click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.When(/^I click on cart icon$/, function (callback) {
        browser.waitForElement(itemPage.addToCart).then(function () {
            browser.findElement(itemPage.addToCart).isDisplayed().then(function () {
                browser.findElement(itemPage.addToCart).click().then(function () {
                    browser.findElement(itemPage.noThanksButton).isDisplayed().then(function () {
                        browser.findElement(itemPage.noThanksButton).click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.When(/^I navigate back to search results$/, function (callback) {
        browser.findElement(itemPage.backToSearchResults).isDisplayed().then(function () {
            browser.findElement(itemPage.backToSearchResults).click().then(function () {
                browser.findElement(searchResultsPage.noThanksButton).isDisplayed().then(function () {
                    browser.findElement(itemPage.noThanksButton).click().then(function () {
                        callback();
                    });
                });
            });
        });
    });

    this.When(/^I navigate back to home page$/, function (callback) {
        browser.findElement(homePage.ebayIcon).isDisplayed().then(function () {
            browser.findElement(homePage.ebayIcon).click().then(function () {
                browser.waitForElement(homePage.ebayHome).then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^I verify "([^"]*)" items are added to the kart by asserting the cart count$/, function (expectedCartCount, callback) {
        browser.findElement(homePage.ebayCartCount).isDisplayed().then(function () {
            browser.findElement(itemPage.ebayCartCount).getText().then(function (cartCount) {
                assert.equal(expectedCartCount, cartCount, "Cart Count is not as expected");
                callback();
            });
        });
    });

    this.Then(/^I verify I can book a "([^"]*)" with Confirm my bookings page$/, function (booking, callback) {
        browser.findElement(cartPage.cart).isDisplayed().then(function () {
            browser.findElement(cartPage.cartItemsCount).getSize().then(function (cartCount) {
                assert.equal(expectedCartCount, cartCount, "Cart Count in Cart page is not as expected");
                callback();
            });
        });
    });


};
module.exports = myStepDefinitionsWrapper;