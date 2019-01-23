

Feature: User wants to check all the categories in home page working or not.
  @login
    Scenario Outline: user should be able to click on catergory list
      Given user is on nopcommerce Home page
       When  user click on <Homepage>
      Then user should be able to see <Category Page>

      Examples:
        |      Homepage    |          Category Page   |
        | Computers        |  Computers               |
        | Electronics      |  Electronics             |
        | Apparel          |  Apparel Page            |
        |Digital downloads |  Digital Downloads Page  |
        |Books             |  Books Page              |
        |Jewelry           |  Jewelry Page            |
        |Gift Cards        |  Gift Cards Page         |







