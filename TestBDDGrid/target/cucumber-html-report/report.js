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
  "duration": 7329352935,
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
  "duration": 15616373904,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.I_go_to_contact_page()"
});
formatter.result({
  "duration": 3804023257,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactTest.i_click_on_new_button()"
});
formatter.result({
  "duration": 2339765766,
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
  "duration": 94047588,
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
  "duration": 139302863,
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
  "duration": 1439875498,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactTest.i_click_on_save_button()"
});
formatter.result({
  "duration": 791323832,
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
  "duration": 3216107395,
  "status": "passed"
});
formatter.after({
  "duration": 282022072,
  "status": "passed"
});
formatter.uri("com/contacts/feature/deleteContact.feature");
formatter.feature({
  "id": "delete-contact-page-test",
  "description": "In order to test the New Contact\r\nAs a User\r\nI want to check the new contact gets created",
  "name": "Delete Contact Page Test",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "delete-contact-page-test;delete-contact-test",
  "tags": [
    {
      "name": "@contactDelete",
      "line": 6
    }
  ],
  "description": "",
  "name": "Delete Contact Test",
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
  "name": "I click the \u003ccontactName\u003e with \u003caccountName\u003e",
  "keyword": "When ",
  "line": 11
});
formatter.step({
  "name": "I click on deleteContact button",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "\u003ccontactName\u003e with \u003caccountName\u003e should be deleted",
  "keyword": "Then ",
  "line": 13
});
formatter.examples({
  "id": "delete-contact-page-test;delete-contact-test;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 15,
  "rows": [
    {
      "id": "delete-contact-page-test;delete-contact-test;;1",
      "cells": [
        "title",
        "contactName",
        "accountName"
      ],
      "line": 16
    },
    {
      "id": "delete-contact-page-test;delete-contact-test;;2",
      "cells": [
        "Mr.",
        "Simons",
        "Marketing"
      ],
      "line": 17
    }
  ]
});
formatter.before({
  "duration": 6643879132,
  "status": "passed"
});
formatter.scenario({
  "id": "delete-contact-page-test;delete-contact-test;;2",
  "tags": [
    {
      "name": "@contactDelete",
      "line": 6
    }
  ],
  "description": "",
  "name": "Delete Contact Test",
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
  "name": "I go to contact page",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "I click the Simons with Marketing",
  "keyword": "When ",
  "line": 11,
  "matchedColumns": [
    1,
    2
  ]
});
formatter.step({
  "name": "I click on deleteContact button",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "Simons with Marketing should be deleted",
  "keyword": "Then ",
  "line": 13,
  "matchedColumns": [
    1,
    2
  ]
});
formatter.match({
  "location": "CommonSteps.i_am_logged_in()"
});
formatter.result({
  "duration": 14427663360,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.I_go_to_contact_page()"
});
formatter.result({
  "duration": 3509291497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Simons",
      "offset": 12
    },
    {
      "val": "Marketing",
      "offset": 24
    }
  ],
  "location": "DeleteContactTest.i_click_the_conatact_with_account(String,String)"
});
formatter.result({
  "duration": 4045699457,
  "status": "passed"
});
formatter.match({
  "location": "DeleteContactTest.i_click_on_deleteContact()"
});
formatter.result({
  "duration": 2823187956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Simons",
      "offset": 0
    },
    {
      "val": "Marketing ",
      "offset": 12
    }
  ],
  "location": "DeleteContactTest.it_should_be_deleted(String,String)"
});
formatter.result({
  "duration": 1247969878,
  "status": "passed"
});
formatter.after({
  "duration": 668061202,
  "status": "passed"
});
});