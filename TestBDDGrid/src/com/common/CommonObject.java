package com.common;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

public class CommonObject {

	public static WebDriver driver=null;
	
	public static CommonObject init(WebDriver driver){
		CommonObject.driver=driver;
		return PageFactory.initElements(driver, CommonObject.class);
	}
	public boolean isElementPresent(String xapth1){
		 try{
			int size=0;
			 int count=0;
			do{
				if(count==10){
				  return false;
				}
				Thread.sleep(1000);
	            size= driver.findElements(By.xpath(xapth1)).size();
	            count++;
			}while(size==0);
		 }catch(Exception e){
			 e.printStackTrace();
		 }	
		  return true;
		}	

		public boolean waitForElement(String xapth1,long miliSec){
		    try{int count=0;
				do{ if(count==3){
					   return false;
					 }
				   Thread.sleep(miliSec);
		           count++;  
		         }while( driver.findElements(By.xpath(xapth1)).size()==0);
			 }catch(Exception e){
				 e.printStackTrace();
			 }	
			  return true;
		 }	

	  public boolean waitForElement(WebElement element,long miliSec){
	     try{
	    	  int count=0;
	          boolean flag=false;       
		  	  do{  if(count==3){
				    return false;
				  }
			    Thread.sleep(miliSec);
			    try{
			       	flag=element.isDisplayed();
			    }catch(Exception e){}
	            count++;  
	          }while(flag==false);
		 }catch(Exception e){
			 e.printStackTrace();
		 }	
		  return true;
	  }	
}
