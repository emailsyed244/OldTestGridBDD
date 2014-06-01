package com.base;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.common.CommonObject;
import com.landing.LandingPageObject;
import com.login.LoginPageObject;

public class TestBase {

	public static WebDriver driver;
	public ThreadLocal<RemoteWebDriver> threadRemote=null;
	DesiredCapabilities dc=null;
	public static LoginPageObject logObj=null;
	public static LandingPageObject landObj=null;
	public static CommonObject cmnObj=null;
	public final static String URL="https://login.salesforce.com/?locale=uk";
	
	public LoginPageObject initLoginObject(){
/*	  if(logObj==null){	
		logObj=new LoginPageObject();
	  }	
*/		logObj=LoginPageObject.init(driver);
     return logObj;
	}
	public LandingPageObject initLandObject(){
/*		  if(landObj==null){	
			  landObj=new LandingPageObject();
		  }	
*/		  landObj=LandingPageObject.init(driver);
	     return landObj;
		}
	public CommonObject initCommonObject(){
/*		  if(cmnObj==null){	
			  cmnObj=new CommonObject();
		  }	
*/		  cmnObj=CommonObject.init(driver);
	     return cmnObj;
		}

	public void openBrowser(String browser) throws MalformedURLException{
		threadRemote=new ThreadLocal<RemoteWebDriver>();
		
		if(browser.equalsIgnoreCase("Mozilla")){
		    dc = DesiredCapabilities.firefox();	
			//driver=new FirefoxDriver();
		}else if(browser.equalsIgnoreCase("Chrome")){
			
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"//chrome//chromedriver.exe");
			 dc = DesiredCapabilities.chrome();				
			//driver=new ChromeDriver();
		}else{
			System.out.println("-----Invalid Driver----");
			System.exit(0);
		}
		threadRemote.set(new RemoteWebDriver(new URL("http://192.168.0.10:4444/wd/hub"), dc));
		driver=threadRemote.get();
		driver.manage().window().maximize();
	  // driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);
	}
	public void navigateTo(String url){
		driver.get(url);
		driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);
	}
	public static void typeText(String xapth1, String text){
		
        driver.findElement(By.xpath(xapth1)).sendKeys(text);
	}
	public static void click(String xapth1){
		
        driver.findElement(By.xpath(xapth1)).click();
	}	
	public static void quit(){
		
        driver.quit();
	}	

	

}
