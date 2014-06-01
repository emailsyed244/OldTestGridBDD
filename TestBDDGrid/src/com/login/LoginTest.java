package com.login;

import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.AssertJUnit;

import com.base.TestBase;
import com.common.CommonObject;
import com.common.Util;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginTest  extends TestBase  {
   // public WebDriver driver;
   // public static LoginPageObject logObj=null; 
	@Before
	public void startUP() throws MalformedURLException{
		openBrowser("Mozilla");
		System.out.println("--------------In Before------------");
	}
	
	@After
	public void tearDown(){
		System.out.println("--------------In After------------");
		quit();
	}
	@Given("^I goto \"([^\"]*)\" on \"([^\"]*)\" browser$")
	public void I_goto_loginPageURL_on_Mozilla_browser(String url,String browser) throws Throwable {
		System.out.println("I goto "+url+" on "+browser+" browser");
		navigateTo(Util.getLoginObj(url));
		
	}

	@When("^I enter username as ([^\"]*)$")
	public void I_enter_username_as_userValue(String value ) throws Throwable {
		System.out.println("I enter "+value+" as username");
		//super.typeText(Util.getLoginObj(userObj), value);
		super.initLoginObject().username.sendKeys(value);
		
	}

	@When("^I enter password as ([^\"]*)$")
	public void I_enter_password_as_passValue(String value ) throws Throwable {
		System.out.println("I enter "+value+" as username");
		//super.typeText(Util.getLoginObj(userObj), value);
		super.initLoginObject().password.sendKeys(value);
		
	}

	@Then("^Login should be \"([^\"]*)\"$")
	public void Login_should_be_success(String result) throws Throwable {
		System.out.println("Login should be "+result);
		List<WebElement> elements=new ArrayList<WebElement>();
		//elements.add(initLandObject().loggedUserName);
		AssertJUnit.assertTrue("Login not successfull...!",
				               CommonObject.init(driver).waitForElement(initLandObject().loggedUserName, 1000));
			
		super.quit();
	}
	
	
}
