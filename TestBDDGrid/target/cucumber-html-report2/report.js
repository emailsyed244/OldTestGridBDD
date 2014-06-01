$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/landing/feature/landingPage.feature");
formatter.feature({
  "id": "landing-page-test",
  "description": "In order to test the Landing Page\r\nAs a User\r\nI want to check the landing page links",
  "name": "Landing Page Test",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "landing-page-test;testing-landing-page-links-to-different-pages.",
  "tags": [
    {
      "name": "@land",
      "line": 6
    }
  ],
  "description": "",
  "name": "Testing Landing Page links to different pages.",
  "keyword": "Scenario Outline",
  "line": 7,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I am logged in",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I click on pagelink \u003clinkName\u003e",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "It should open \u003cresult\u003e",
  "keyword": "Then ",
  "line": 11
});
formatter.examples({
  "id": "landing-page-test;testing-landing-page-links-to-different-pages.;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 13,
  "rows": [
    {
      "id": "landing-page-test;testing-landing-page-links-to-different-pages.;;1",
      "cells": [
        "linkName",
        "result"
      ],
      "line": 14
    },
    {
      "id": "landing-page-test;testing-landing-page-links-to-different-pages.;;2",
      "cells": [
        "home",
        "homePage"
      ],
      "line": 15
    },
    {
      "id": "landing-page-test;testing-landing-page-links-to-different-pages.;;3",
      "cells": [
        "contacts",
        "contactPage"
      ],
      "line": 16
    },
    {
      "id": "landing-page-test;testing-landing-page-links-to-different-pages.;;4",
      "cells": [
        "accounts",
        "accountPage"
      ],
      "line": 17
    }
  ]
});
formatter.before({
  "duration": 39331673602,
  "status": "passed"
});
formatter.scenario({
  "id": "landing-page-test;testing-landing-page-links-to-different-pages.;;2",
  "tags": [
    {
      "name": "@land",
      "line": 6
    }
  ],
  "description": "",
  "name": "Testing Landing Page links to different pages.",
  "keyword": "Scenario Outline",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "I am logged in",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I click on pagelink home",
  "keyword": "When ",
  "line": 10,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "It should open homePage",
  "keyword": "Then ",
  "line": 11,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "location": "CommonSteps.i_am_logged_in()"
});
formatter.result({
  "duration": 18884499887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "home",
      "offset": 20
    }
  ],
  "location": "LandPageTest.i_click_on_link(String)"
});
formatter.result({
  "duration": 3151509255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "homePage",
      "offset": 15
    }
  ],
  "location": "LandPageTest.it_should_open(String)"
});
formatter.result({
  "duration": 1143288188,
  "status": "passed"
});
formatter.after({
  "duration": 577186931,
  "status": "passed"
});
formatter.before({
  "duration": 11767022300,
  "status": "passed"
});
formatter.scenario({
  "id": "landing-page-test;testing-landing-page-links-to-different-pages.;;3",
  "tags": [
    {
      "name": "@land",
      "line": 6
    }
  ],
  "description": "",
  "name": "Testing Landing Page links to different pages.",
  "keyword": "Scenario Outline",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "I am logged in",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I click on pagelink contacts",
  "keyword": "When ",
  "line": 10,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "It should open contactPage",
  "keyword": "Then ",
  "line": 11,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "location": "CommonSteps.i_am_logged_in()"
});
formatter.result({
  "duration": 16244705015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "contacts",
      "offset": 20
    }
  ],
  "location": "LandPageTest.i_click_on_link(String)"
});
formatter.result({
  "duration": 2685092430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "contactPage",
      "offset": 15
    }
  ],
  "location": "LandPageTest.it_should_open(String)"
});
formatter.result({
  "duration": 1106614826,
  "status": "passed"
});
formatter.after({
  "duration": 275981685,
  "status": "passed"
});
formatter.before({
  "duration": 7602295955,
  "status": "passed"
});
formatter.scenario({
  "id": "landing-page-test;testing-landing-page-links-to-different-pages.;;4",
  "tags": [
    {
      "name": "@land",
      "line": 6
    }
  ],
  "description": "",
  "name": "Testing Landing Page links to different pages.",
  "keyword": "Scenario Outline",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "I am logged in",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I click on pagelink accounts",
  "keyword": "When ",
  "line": 10,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "It should open accountPage",
  "keyword": "Then ",
  "line": 11,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "location": "CommonSteps.i_am_logged_in()"
});
formatter.result({
  "duration": 15849760892,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accounts",
      "offset": 20
    }
  ],
  "location": "LandPageTest.i_click_on_link(String)"
});
formatter.result({
  "duration": 2662196108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accountPage",
      "offset": 15
    }
  ],
  "location": "LandPageTest.it_should_open(String)"
});
formatter.result({
  "duration": 1197683684,
  "status": "passed"
});
formatter.after({
  "duration": 487502755,
  "status": "passed"
});
});