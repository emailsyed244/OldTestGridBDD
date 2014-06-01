package com.contacts;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.common.CommonObject;

public class ContactPageObject {

	public static WebDriver driver=null;
	@FindBy(xpath="//td[@id='bodyCell']//img[@title='Contact']")
	public WebElement img_Contact;
	@FindBy(xpath="//form[@id='hotlist']//input[@title='New']")
	public WebElement button_New;
	@FindBy(xpath="//table[@class='detailList']")
	public WebElement form_Contact;
	@FindBy(xpath="//select[@id='name_salutationcon2']")
	public WebElement select_Title;
	@FindBy(xpath="//input[@id='name_lastcon2']")
	public WebElement text_LastName;
	@FindBy(xpath="//input[@id='con4']")
	public WebElement text_AccountName;
	@FindBy(xpath="//input[@class='btn' and @title='Save']")
	public WebElement button_Save;
	@FindBy(xpath="//h2[@class='topName']")
	public WebElement header_Name;
	@FindBy(xpath="//div[@class='hotListElement']//table[@class='list']//tr//th[1]")
	public List<WebElement> list_ContactNames;
	@FindBy(xpath="//table[@class='list']//tr//td")
	public List<WebElement> list_ContactAccount;
	@FindBy(xpath="//td[@id='topButtonRow']//input[@title='Delete']")
	public WebElement button_DeleteContact;

	
	public static ContactPageObject init(WebDriver driver){
		ContactPageObject.driver=driver;
		return PageFactory.initElements(driver, ContactPageObject.class);
	}
	
	public boolean isContactPresent(String contact,String account){
		int rowSize=init(driver).list_ContactNames.size();
		String tempContact,tempAccount;
		if(rowSize>1){
		  for(int row=2;row<=rowSize;row++){
			  tempContact=driver.findElement(By.xpath("//div[@class='hotListElement']//table[@class='list']//tr["+row+"]//th")).getText().toString();
			  tempAccount=driver.findElement(By.xpath("//div[@class='hotListElement']//table[@class='list']//tr["+row+"]//td")).getText().toString();
			  if(tempContact.contains(contact) && tempAccount.equalsIgnoreCase(account)){
				  System.out.println("Contact "+contact+" with "+account+" found");
				  return true;
			  }
		  }	
		}
		return false;
	}
	public boolean clickOnContact(String contact,String account){
		int rowSize=init(driver).list_ContactNames.size();
		String tempContact,tempAccount;
		if(rowSize>1){
		  for(int row=2;row<=rowSize;row++){
			  tempContact=driver.findElement(By.xpath("//div[@class='hotListElement']//table[@class='list']//tr["+row+"]//th")).getText().toString();
			  tempAccount=driver.findElement(By.xpath("//div[@class='hotListElement']//table[@class='list']//tr["+row+"]//td")).getText().toString();
			  if(tempContact.contains(contact) && tempAccount.equalsIgnoreCase(account)){
				  System.out.println("Contact "+contact+" with "+account+" found");
				  driver.findElement(By.xpath("//div[@class='hotListElement']//table[@class='list']//tr["+row+"]//th//a")).click();
				  CommonObject.init(driver).waitForElement(ContactPageObject.init(driver).button_DeleteContact, 1000);
				  return true;
			  }
		  }	
		}
		return false;
	
	}
	
}
