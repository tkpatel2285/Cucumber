$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/FeatureFiles/categorylist.feature");
formatter.feature({
  "line": 3,
  "name": "User wants to check all the categories in home page working or not.",
  "description": "",
  "id": "user-wants-to-check-all-the-categories-in-home-page-working-or-not.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "user should be able to click on catergory list",
  "description": "",
  "id": "user-wants-to-check-all-the-categories-in-home-page-working-or-not.;user-should-be-able-to-click-on-catergory-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on nopcommerce Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user click on \u003cHomepage\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should be able to see \u003cCategory Page\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "user-wants-to-check-all-the-categories-in-home-page-working-or-not.;user-should-be-able-to-click-on-catergory-list;",
  "rows": [
    {
      "cells": [
        "Homepage",
        "Category Page"
      ],
      "line": 11,
      "id": "user-wants-to-check-all-the-categories-in-home-page-working-or-not.;user-should-be-able-to-click-on-catergory-list;;1"
    },
    {
      "cells": [
        "Computers",
        "Computers"
      ],
      "line": 12,
      "id": "user-wants-to-check-all-the-categories-in-home-page-working-or-not.;user-should-be-able-to-click-on-catergory-list;;2"
    },
    {
      "cells": [
        "Electronics",
        "Electronics"
      ],
      "line": 13,
      "id": "user-wants-to-check-all-the-categories-in-home-page-working-or-not.;user-should-be-able-to-click-on-catergory-list;;3"
    },
    {
      "cells": [
        "Apparel",
        "Apparel Page"
      ],
      "line": 14,
      "id": "user-wants-to-check-all-the-categories-in-home-page-working-or-not.;user-should-be-able-to-click-on-catergory-list;;4"
    },
    {
      "cells": [
        "Digital downloads",
        "Digital Downloads Page"
      ],
      "line": 15,
      "id": "user-wants-to-check-all-the-categories-in-home-page-working-or-not.;user-should-be-able-to-click-on-catergory-list;;5"
    },
    {
      "cells": [
        "Books",
        "Books Page"
      ],
      "line": 16,
      "id": "user-wants-to-check-all-the-categories-in-home-page-working-or-not.;user-should-be-able-to-click-on-catergory-list;;6"
    },
    {
      "cells": [
        "Jewelry",
        "Jewelry Page"
      ],
      "line": 17,
      "id": "user-wants-to-check-all-the-categories-in-home-page-working-or-not.;user-should-be-able-to-click-on-catergory-list;;7"
    },
    {
      "cells": [
        "Gift Cards",
        "Gift Cards Page"
      ],
      "line": 18,
      "id": "user-wants-to-check-all-the-categories-in-home-page-working-or-not.;user-should-be-able-to-click-on-catergory-list;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8280105614,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "user should be able to click on catergory list",
  "description": "",
  "id": "user-wants-to-check-all-the-categories-in-home-page-working-or-not.;user-should-be-able-to-click-on-catergory-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on nopcommerce Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user click on Computers",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should be able to see Computers",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.user_is_on_nopcommerce_Home_page()"
});
formatter.result({
  "duration": 322156758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.userClickOnLink(String)"
});
formatter.result({
  "duration": 1270379067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 27
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleToSeeTitle(String)"
});
formatter.result({
  "duration": 9197111,
  "status": "passed"
});
formatter.after({
  "duration": 577068463,
  "status": "passed"
});
formatter.before({
  "duration": 5093004320,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "user should be able to click on catergory list",
  "description": "",
  "id": "user-wants-to-check-all-the-categories-in-home-page-working-or-not.;user-should-be-able-to-click-on-catergory-list;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on nopcommerce Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user click on Electronics",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should be able to see Electronics",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.user_is_on_nopcommerce_Home_page()"
});
formatter.result({
  "duration": 26087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.userClickOnLink(String)"
});
formatter.result({
  "duration": 837549496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 27
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleToSeeTitle(String)"
});
formatter.result({
  "duration": 8192553,
  "status": "passed"
});
formatter.after({
  "duration": 580993464,
  "status": "passed"
});
formatter.before({
  "duration": 5023041102,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "user should be able to click on catergory list",
  "description": "",
  "id": "user-wants-to-check-all-the-categories-in-home-page-working-or-not.;user-should-be-able-to-click-on-catergory-list;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on nopcommerce Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user click on Apparel",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should be able to see Apparel Page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.user_is_on_nopcommerce_Home_page()"
});
formatter.result({
  "duration": 39772,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.userClickOnLink(String)"
});
formatter.result({
  "duration": 784437527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel Page",
      "offset": 27
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleToSeeTitle(String)"
});
formatter.result({
  "duration": 8216074,
  "status": "passed"
});
formatter.after({
  "duration": 580996458,
  "status": "passed"
});
formatter.before({
  "duration": 5425305013,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "user should be able to click on catergory list",
  "description": "",
  "id": "user-wants-to-check-all-the-categories-in-home-page-working-or-not.;user-should-be-able-to-click-on-catergory-list;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on nopcommerce Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user click on Digital downloads",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should be able to see Digital Downloads Page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.user_is_on_nopcommerce_Home_page()"
});
formatter.result({
  "duration": 46614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital downloads",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.userClickOnLink(String)"
});
formatter.result({
  "duration": 1342433082,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital Downloads Page",
      "offset": 27
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleToSeeTitle(String)"
});
formatter.result({
  "duration": 7498900,
  "status": "passed"
});
formatter.after({
  "duration": 577237813,
  "status": "passed"
});
formatter.before({
  "duration": 4906137381,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "user should be able to click on catergory list",
  "description": "",
  "id": "user-wants-to-check-all-the-categories-in-home-page-working-or-not.;user-should-be-able-to-click-on-catergory-list;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on nopcommerce Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user click on Books",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should be able to see Books Page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.user_is_on_nopcommerce_Home_page()"
});
formatter.result({
  "duration": 31646,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.userClickOnLink(String)"
});
formatter.result({
  "duration": 1305463313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books Page",
      "offset": 27
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleToSeeTitle(String)"
});
formatter.result({
  "duration": 7968463,
  "status": "passed"
});
formatter.after({
  "duration": 579146002,
  "status": "passed"
});
formatter.before({
  "duration": 5087716388,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "user should be able to click on catergory list",
  "description": "",
  "id": "user-wants-to-check-all-the-categories-in-home-page-working-or-not.;user-should-be-able-to-click-on-catergory-list;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on nopcommerce Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user click on Jewelry",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should be able to see Jewelry Page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.user_is_on_nopcommerce_Home_page()"
});
formatter.result({
  "duration": 47042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewelry",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.userClickOnLink(String)"
});
formatter.result({
  "duration": 1305645921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewelry Page",
      "offset": 27
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleToSeeTitle(String)"
});
formatter.result({
  "duration": 7929119,
  "status": "passed"
});
formatter.after({
  "duration": 587396289,
  "status": "passed"
});
formatter.before({
  "duration": 5129808587,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "user should be able to click on catergory list",
  "description": "",
  "id": "user-wants-to-check-all-the-categories-in-home-page-working-or-not.;user-should-be-able-to-click-on-catergory-list;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on nopcommerce Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user click on Gift Cards",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should be able to see Gift Cards Page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.user_is_on_nopcommerce_Home_page()"
});
formatter.result({
  "duration": 31218,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.userClickOnLink(String)"
});
formatter.result({
  "duration": 796055156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards Page",
      "offset": 27
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleToSeeTitle(String)"
});
formatter.result({
  "duration": 7222636,
  "status": "passed"
});
formatter.after({
  "duration": 578657194,
  "status": "passed"
});
});