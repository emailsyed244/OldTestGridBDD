package com.landing;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LandingPageObject {

	public static WebDriver driver=null;
	@FindBy(xpath="//span[@id='userNavLabel' and text()='Ali syed']")
	public WebElement loggedUserName;
	@FindBy(xpath="//div[@id='tabContainer']//li[@id='home_Tab']//a")
	public WebElement tab_Home;
	@FindBy(xpath="//div[@id='tabContainer']//li[@id='Contact_Tab']//a")
	public WebElement tab_Contact;
	@FindBy(xpath="//div[@id='tabContainer']//li[@id='Account_Tab']//a")
	public WebElement tab_Account;
	@FindBy(xpath="//div[@id='tabContainer']//li[@id='Lead_Tab']//a")
	public WebElement tab_Lead;
	@FindBy(xpath="//div[@id='tabContainer']//li[@id='Opportunity_Tab']//a")
	public WebElement tab_Opportunity;
	@FindBy(xpath="//div[@id='tabContainer']//li[@id='report_Tab']//a")
	public WebElement tab_Report;
	@FindBy(xpath="//div[@id='tabContainer']//li[@id='Dashboard_Tab']//a")
	public WebElement tab_Dashboard;
	@FindBy(xpath="//div[@id='tabContainer']//li[@id='Chatter_Tab']//a")
	public WebElement tab_Chatter;
	@FindBy(xpath="//div[@id='tabContainer']//li[@id='File_Tab']//a")
	public WebElement tab_File;
	@FindBy(xpath="//div[@id='tabContainer']//li[@id='Product2_Tab']//a")
	public WebElement tab_Product;
	@FindBy(xpath="//div[@id='tabContainer']//li[@id='Forecasting3_Tab']//a")
	public WebElement tab_Forecasting;
	@FindBy(xpath="//div[@id='walkthrough-role-selector']//div[@id='owner-choice']")
	public WebElement walkthrough_Owner;
	@FindBy(xpath="//div[@id='walkthrough-callout-close']")
	public WebElement walkthrough_CallOutClose;

	public static LandingPageObject init(WebDriver driver){
		LandingPageObject.driver=driver;
		return PageFactory.initElements(driver, LandingPageObject.class);
	}

}
