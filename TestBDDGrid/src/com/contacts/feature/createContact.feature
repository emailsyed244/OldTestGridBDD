Feature: Create Contact Page Test
In order to test the New Contact
As a User
I want to check the new contact gets created

@contactCreate
Scenario Outline: New Contact Creation Test

Given I am logged in
And I go to contact page
When I click on new button
And I select title as <title>
And  I enter contact as <contactName>
And  I enter Account as <accountName>
And  I click on save button
Then It should save the contact with <contactName>

Examples:
|title|contactName | accountName |
|Mr.  |Simons      | Marketing   |
