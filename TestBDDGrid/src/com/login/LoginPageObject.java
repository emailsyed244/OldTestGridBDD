package com.login;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.common.CommonObject;
import com.landing.LandingPageObject;

public class LoginPageObject {

	public static WebDriver driver=null;
	@FindBy(xpath="//input[@id='username']")
	public WebElement username;
	@FindBy(xpath="//input[@id='password']")
	public WebElement password;
	@FindBy(xpath="//button[@id='Login']")
	public WebElement submit;

	public static LoginPageObject init(WebDriver driver){
		LoginPageObject.driver=driver;
		return PageFactory.initElements(driver, LoginPageObject.class);
	}
	
	public boolean doDefaultLogin(){
		init(driver).username.sendKeys("emailsyed244@gmail.com");
		init(driver).password.sendKeys("pass1234");
		init(driver).submit.click();
		if(CommonObject.init(driver).waitForElement(LandingPageObject.init(driver).walkthrough_Owner, 2000)){
			LandingPageObject.init(driver).walkthrough_Owner.click();
		}
		if(CommonObject.init(driver).waitForElement(LandingPageObject.init(driver).walkthrough_CallOutClose, 2000)){
			LandingPageObject.init(driver).walkthrough_CallOutClose.click();
		}
		
	  return CommonObject.init(driver).waitForElement(LandingPageObject.init(driver).loggedUserName, 2000);
		
	}
	
}
