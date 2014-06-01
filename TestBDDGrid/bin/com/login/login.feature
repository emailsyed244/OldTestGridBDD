Feature: Login Test
In order to test the login functionality
As a Tester
I want to login to application

@login
Scenario Outline: 

Given I goto "LoginURL" on "Mozilla" browser
When I enter username as <userValue>
And I enter password as <passValue>
And I click on "submit" button
Then Login should be "<result>"

Examples:
|userValue              | passValue    | result |
|user123                | pass123      | Fail   |
|user345                | pass345      | Fail   |
|emailsyed244@gmail.com | pass1234     | Pass   |