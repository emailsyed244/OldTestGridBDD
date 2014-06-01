package com.contacts.tests;

import org.testng.AssertJUnit;

import com.accounts.AccountPageObject;
import com.base.TestBase;
import com.common.CommonObject;
import com.contacts.ContactPageObject;
import com.home.HomePageObject;
import com.landing.LandingPageObject;
import com.login.LoginPageObject;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateNewContactTest  extends TestBase  {
   // public WebDriver driver;
   // public static LoginPageObject logObj=null; 



	@When("^I click on new button$")
	public void i_click_on_new_button() throws Throwable {
		System.out.println("I click on new button");
		ContactPageObject.init(driver).button_New.click();
		CommonObject.init(driver).waitForElement(ContactPageObject.init(driver).form_Contact,1000);
	}
	@When("^I select title as ([^\"]*)$")
	public void i_select_title(String title) throws Throwable {
		System.out.println("I select title ");
		ContactPageObject.init(driver).select_Title.sendKeys(title);
	}

	@When("^I enter contact as ([^\"]*)$")
	public void i_enter_contact_as_(String contactVal) throws Throwable {
		System.out.println("I enter contact as "+contactVal);
		ContactPageObject.init(driver).text_LastName.sendKeys(contactVal);
	}

	@When("^I enter Account as ([^\"]*)$")
	public void i_enter_Account_as(String accountVal) throws Throwable {
		System.out.println("I enter Account as "+accountVal);
		ContactPageObject.init(driver).text_AccountName.sendKeys(accountVal);
	}

	@When("^I click on save button$")
	public void i_click_on_save_button() throws Throwable {
		System.out.println("I click on save button");
		ContactPageObject.init(driver).button_Save.click();
	}

	@Then("^It should save the contact with ([^\"]*)$")
	public void it_should_save_the_contact_with(String contactValue) throws Throwable {
		System.out.println("It should save the contact with "+contactValue);
		AssertJUnit.assertTrue("Contact Header is not present..!!",CommonObject.init(driver).waitForElement(ContactPageObject.init(driver).header_Name,1000));
		AssertJUnit.assertTrue("Contact value is not same..!",ContactPageObject.init(driver).header_Name.getText().contains(contactValue));
	}
	
	
}
