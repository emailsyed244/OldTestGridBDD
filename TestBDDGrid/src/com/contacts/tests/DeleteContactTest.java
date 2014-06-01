package com.contacts.tests;

import org.openqa.selenium.Alert;
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

public class DeleteContactTest  extends TestBase  {
   // public WebDriver driver;
   // public static LoginPageObject logObj=null; 



	@When("^I click the ([^\"]*) with ([^\"]*)$")
	public void i_click_the_conatact_with_account(String contact,String account) throws Throwable {
		System.out.println("I click the "+contact+" with "+account+"");
		AssertJUnit.assertTrue("Contact Not found...!",ContactPageObject.init(driver).isContactPresent(contact,account));
		ContactPageObject.init(driver).clickOnContact(contact,account);
		
	//	ContactPageObject.init(driver).button_New.click();
	//	CommonObject.init(driver).waitForElement(ContactPageObject.init(driver).form_Contact,1000);
	}

	@When("^I click on deleteContact button$")
	public void i_click_on_deleteContact() throws Throwable {
		System.out.println("I click on deleteContact button");
		ContactPageObject.init(driver).button_DeleteContact.click();
        try{		
			Alert alert=driver.switchTo().alert();
			alert.accept();
			CommonObject.init(driver).waitForElement(ContactPageObject.init(driver).img_Contact,1000);
        }catch(Exception e){}	
		//ContactPageObject.init(driver).text_AccountName.sendKeys(accountVal);
	}


	@Then("^([^\"]*) with ([^\"]*)should be deleted$")
	public void it_should_be_deleted(String contact,String account) throws Throwable {
		System.out.println(contact+" should be deleted");
		AssertJUnit.assertFalse(ContactPageObject.init(driver).isContactPresent(contact,account));
	//	AssertJUnit.assertTrue("Contact Header is not present..!!",CommonObject.init(driver).waitForElement(ContactPageObject.init(driver).header_Name,1000));
	//	AssertJUnit.assertTrue("Contact value is not same..!",ContactPageObject.init(driver).header_Name.getText().contains(contactValue));
	}
	
	
}
