Feature: Landing Page Test
In order to test the Landing Page
As a User
I want to check the landing page links

@land
Scenario Outline: Testing Landing Page links to different pages.

Given I am logged in
When I click on pagelink <linkName>
Then It should open <result>

Examples:
|linkName | result     |
|home     | homePage   |
|contacts | contactPage|
|accounts | accountPage|