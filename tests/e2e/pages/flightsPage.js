/**
 * Created by Aditya
 */

var flightsPage = {
    flightsTab: by.css("a[title='Flights']"),
    roundTrip: by.id("round"),
    departureAirport: by.css("div:nth-child(1)[class='select2-drop select2-display-none select2-with-searchbox select2-drop-active']"),
    arrivalAirport: by.css("div:nth-child(1)[class='select2-drop select2-display-none select2-with-searchbox select2-drop-active']"),
    departureDateField: by.css("input[name='departure']"),
    arrivalDateField: by.css("input[name='arrival']"),
    datePicker1: by.css("div:nth-child(1)[class='datepicker-days'] td[class='day  active']"),
    datePicker2: by.css("div:nth-child(2)[class='datepicker-days'] td[class='day  active']"),
    resultsFirstFlightBookNow: by.xpath("//table[@id='load_data']//tr[1]//button"),

};
module.exports = flightsPage;
