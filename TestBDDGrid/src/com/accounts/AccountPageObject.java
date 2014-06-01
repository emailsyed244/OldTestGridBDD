package com.accounts;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AccountPageObject {

	public static WebDriver driver=null;
	@FindBy(xpath="//td[@id='bodyCell']//img[@title='Account']")
	public WebElement img_Account;
	
	public static AccountPageObject init(WebDriver driver){
		AccountPageObject.driver=driver;
		return PageFactory.initElements(driver, AccountPageObject.class);
	}
	
	
}
