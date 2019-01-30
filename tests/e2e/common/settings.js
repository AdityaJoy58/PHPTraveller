/**
 * This file is for setting configuration required in test cases
 */

var settings = function () {
    this.constants = {
        'CHAI': 'chai',
        'HOTEL_SEARCH': 'Hyatt Regency Perth, Dubai',
        'FLIGHT_DEPARTURE': 'Sydney',
        'FLIGHT_ARRIVAL': 'Hyderabad',
        'TOURTYPE': 'Private',
    };
    this.config = {
        'WAITTIME': '5000',
        'STEPTIMEOUT': '60000'
    }
}
module.exports = new settings();

