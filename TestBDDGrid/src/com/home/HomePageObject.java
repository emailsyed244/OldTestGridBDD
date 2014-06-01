package com.home;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePageObject {

	public static WebDriver driver=null;
	@FindBy(xpath="//a[@id='publisherAttachTextPost']//span[text()='Post']")
	public WebElement link_Post;
	
	@FindBy(xpath="//h1[@class='currentStatusUserName']//a[text()='Ali syed']")
	public WebElement link_Name;
	
	public static HomePageObject init(WebDriver driver){
		HomePageObject.driver=driver;
		return PageFactory.initElements(driver, HomePageObject.class);
	}
	
	
}
