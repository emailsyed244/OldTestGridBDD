$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/landing/feature/landingPage.feature");
formatter.feature({
  "id": "landing-page-test",
  "description": "In order to test the Landing Page\r\nAs a User\r\nI want to check the landing page links",
  "name": "Landing Page Test",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 6985619086,
  "status": "passed"
});
formatter.scenario({
  "id": "landing-page-test;;;2",
  "tags": [
    {
      "name": "@land",
      "line": 6
    }
  ],
  "description": "",
  "name": "",
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
  "duration": 29372991994,
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
  "duration": 3412075928,
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
  "duration": 1075518784,
  "status": "passed"
});
formatter.after({
  "duration": 255039026,
  "status": "passed"
});
formatter.before({
  "duration": 6824420336,
  "status": "passed"
});
formatter.scenario({
  "id": "landing-page-test;;;3",
  "tags": [
    {
      "name": "@land",
      "line": 6
    }
  ],
  "description": "",
  "name": "",
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
  "duration": 14755747788,
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
  "duration": 1743745836,
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
  "duration": 1179324835,
  "status": "passed"
});
formatter.after({
  "duration": 217801199,
  "status": "passed"
});
formatter.before({
  "duration": 6091727742,
  "status": "passed"
});
formatter.scenario({
  "id": "landing-page-test;;;4",
  "tags": [
    {
      "name": "@land",
      "line": 6
    }
  ],
  "description": "",
  "name": "",
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
  "duration": 14235756918,
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
  "duration": 2242076047,
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
  "duration": 1053136431,
  "status": "passed"
});
formatter.after({
  "duration": 258540758,
  "status": "passed"
});
});