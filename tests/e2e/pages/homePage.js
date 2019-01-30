/**
 * Created by Aditya
 */

var homePage = {
    searchButton: by.xpath("button[@type='submit']/i[text()='Search']"),
    bookNowButton: by.css("button[class='book_button btn btn-md btn-success btn-block btn-block chk mob-fs10 loader']"),
    confirmThisBooking: by.css("button[class='btn btn-success btn-lg btn-block completebook']")

};
module.exports = homePage;
