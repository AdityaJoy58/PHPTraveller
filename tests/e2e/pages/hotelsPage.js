/**
 * Created by Aditya
 */

var hotelsPage = {

    searchHotel: by.id("select2-drop"),
    checkInField: by.css("input[name='checkin']"),
    checkOutField: by.css("input[name='checkout']"),
    datePicker1: by.css("div:nth-child(1)[class='datepicker-days'] td[class='day  active']"),
    datePicker2: by.css("div:nth-child(2)[class='datepicker-days'] td[class='day  active']"),

};
module.exports = hotelsPage;
