package com.landing.tests;

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

public class LandPageTest  extends TestBase  {
    
    //Step1- I am logged in => mentioned in common steps
	
	//Step2- I click on pagaelink.
	@When("^I click on pagelink ([^\"]*)$")
	public void i_click_on_link(String linkValue) throws Throwable {
		System.out.println("I click on link "+linkValue);
	    if(linkValue.equals("home")){
	    	LandingPageObject.init(driver).tab_Home.click();
	    }else if (linkValue.equals("contacts")){
	    	LandingPageObject.init(driver).tab_Contact.click();
	    }else if(linkValue.equals("accounts")){
	    	LandingPageObject.init(driver).tab_Account.click();
	    }
	}

	@Then("^It should open ([^\"]*)$")
	public void it_should_open(String page) throws Throwable {
		System.out.println("It should open page "+page);
	    if(page.equals("homePage")){
	    	AssertJUnit.assertTrue(CommonObject.init(driver).waitForElement(HomePageObject.init(driver).link_Name,1000));
	    }else if (page.equals("contactPage")){
	    	AssertJUnit.assertTrue(CommonObject.init(driver).waitForElement(ContactPageObject.init(driver).img_Contact,1000));
	    }else if(page.equals("accountPage")){
	    	AssertJUnit.assertTrue(CommonObject.init(driver).waitForElement(AccountPageObject.init(driver).img_Account,1000));
	    }

	}
	
	
}
