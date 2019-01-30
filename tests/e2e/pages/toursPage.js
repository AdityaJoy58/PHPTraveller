/**
 * Created by Aditya
 */

var toursPage = {

    toursTab: by.css("a[title='Tours']"),
    searchTours: by.css("div:nth-child(3)[class='select2-drop select2-display-none select2-with-searchbox select2-drop-active']"),
    datePicker: by.css("div:nth-child(2)[class='datepicker-days'] td[class='day  active']"),
    tourType: by.css("section[class='promo-section jumbotron hero-section']").firstChild,
    resultsFirstTourDetails: by.xpath("//table[@class='bgwhite table table-striped']//tr[1]//button"),
    bookNow: by.xpath("//button[text()='Book Now']")
};
module.exports = toursPage;
