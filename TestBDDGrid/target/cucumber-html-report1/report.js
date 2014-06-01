$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/contacts/feature/createContact.feature");
formatter.feature({
  "id": "create-contact-page-test",
  "description": "In order to test the New Contact\r\nAs a User\r\nI want to check the new contact gets created",
  "name": "Create Contact Page Test",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "create-contact-page-test;new-contact-creation-test",
  "tags": [
    {
      "name": "@contactCreate",
      "line": 6
    }
  ],
  "description": "",
  "name": "New Contact Creation Test",
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
  "name": "I go to contact page",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "I click on new button",
  "keyword": "When ",
  "line": 11
});
formatter.step({
  "name": "I select title as \u003ctitle\u003e",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I enter contact as \u003ccontactName\u003e",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "I enter Account as \u003caccountName\u003e",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "I click on save button",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "It should save the contact with \u003ccontactName\u003e",
  "keyword": "Then ",
  "line": 16
});
formatter.examples({
  "id": "create-contact-page-test;new-contact-creation-test;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 18,
  "rows": [
    {
      "id": "create-contact-page-test;new-contact-creation-test;;1",
      "cells": [
        "title",
        "contactName",
        "accountName"
      ],
      "line": 19
    },
    {
      "id": "create-contact-page-test;new-contact-creation-test;;2",
      "cells": [
        "Mr.",
        "Simons",
        "Marketing"
      ],
      "line": 20
    }
  ]
});
formatter.before({
  "duration": 26170467052,
  "status": "passed"
});
formatter.scenario({
  "id": "create-contact-page-test;new-contact-creation-test;;2",
  "tags": [
    {
      "name": "@contactCreate",
      "line": 6
    }
  ],
  "description": "",
  "name": "New Contact Creation Test",
  "keyword": "Scenario Outline",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "I am logged in",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I go to contact page",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "I click on new button",
  "keyword": "When ",
  "line": 11
});
formatter.step({
  "name": "I select title as Mr.",
  "keyword": "And ",
  "line": 12,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I enter contact as Simons",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter Account as Marketing",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I click on save button",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "It should save the contact with Simons",
  "keyword": "Then ",
  "line": 16,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "location": "CommonSteps.i_am_logged_in()"
});
formatter.result({
  "duration": 29943710777,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.I_go_to_contact_page()"
});
formatter.result({
  "duration": 3315898153,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactTest.i_click_on_new_button()"
});
formatter.result({
  "duration": 3522770088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 18
    }
  ],
  "location": "CreateNewContactTest.i_select_title(String)"
});
formatter.result({
  "duration": 68107673,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Simons",
      "offset": 19
    }
  ],
  "location": "CreateNewContactTest.i_enter_contact_as_(String)"
});
formatter.result({
  "duration": 110834969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Marketing",
      "offset": 19
    }
  ],
  "location": "CreateNewContactTest.i_enter_Account_as(String)"
});
formatter.result({
  "duration": 90902598,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactTest.i_click_on_save_button()"
});
formatter.result({
  "duration": 4466922174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Simons",
      "offset": 32
    }
  ],
  "location": "CreateNewContactTest.it_should_save_the_contact_with(String)"
});
formatter.result({
  "duration": 4120367645,
  "status": "passed"
});
formatter.after({
  "duration": 743316432,
  "status": "passed"
});
});