Feature: I want to be able to book hotels, flights and tours
  As a user on navigates to PHP traveller
  I should be able to book Hotels
  I should be able to book Flights
  I should be able to book Tours

  Scenario: Verify I am able to navigate to the website and book Hotel
    Given I am in PHP Traveller Home page
    When I search for a Hotel Name "Hyatt Regency Perth, Dubai"
    And I input Check In date and Check Out date
    And I click on search
    And I click on Book Now
    Then I verify I can book a "hotel" with Confirm my bookings page
  # I cannot go beyond this page as it asks for Credit card info.

  Scenario: Verify I am able to navigate to the website and book Flight
    Given I am in PHP Traveller Home page
    When I click on Flights tab
    And I select round trip
    And I Enter From City or Airport "Sydney" and To City or Airport "Perth"
    And I input Departure date and Return Date
    And I click on search
    And I see the First available flight and click on book now
    Then I verify I can book a "flight" with Confirm my bookings page
    # I cannot go beyond this page as it asks for Credit card info.

  Scenario: Verify I am able to navigate to the website and book Tours
    Given I am in PHP Traveller Home page
    When I click on Tours tab
    And I input City name "Sydney"
    And I select type of tour "Private"
    And I click on search
    And I click on Details button for the first available tour
    And I click on Book Now
    Then I verify I can book a "tour" with Confirm my bookings page
    # I cannot go beyond this page as it asks for Credit card info.
