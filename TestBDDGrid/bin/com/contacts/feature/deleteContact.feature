Feature: Delete Contact Page Test
In order to test the New Contact
As a User
I want to check the new contact gets created

@contactDelete
Scenario Outline: Delete Contact Test

Given I am logged in
And I go to contact page
When I click the <contactName> with <accountName> 
And I click on deleteContact button
Then <contactName> with <accountName> should be deleted

Examples:
|title|contactName | accountName |
|Mr.  |Simons      | Marketing   |
