package com.common;


import org.testng.AssertJUnit;

import com.base.TestBase;
import com.contacts.ContactPageObject;
import com.landing.LandingPageObject;
import com.login.LoginPageObject;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class CommonSteps extends TestBase {

	
	@When("^I click on \"([^\"]*)\" button$")
	public void I_click_on_submit_button(String obj) throws Throwable {
		System.out.println("I click on "+obj+" button");	
		super.click(Util.getLoginObj(obj));
	}
	@Given("^I am logged in$")
	public void i_am_logged_in() throws Throwable {
	    System.out.println("I am logged in");
	    navigateTo(URL);
	    AssertJUnit.assertTrue(LoginPageObject.init(driver).doDefaultLogin());
	    
	}
	@Given("^I go to contact page$")
	public void I_go_to_contact_page() throws Throwable {
		System.out.println("I go to contact page");
	    LandingPageObject.init(driver).tab_Contact.click();
	    CommonObject.init(driver).waitForElement(ContactPageObject.init(driver).img_Contact,1000);
	}

}
