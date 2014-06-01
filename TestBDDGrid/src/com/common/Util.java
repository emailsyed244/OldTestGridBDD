package com.common;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class Util {
	
	public static String getLoginObj(String name1){
		String key="";
		Map<String,String> loginMap=new HashMap<String,String>();
		
        loginMap.put("LoginURL", "https://login.salesforce.com/?locale=uk");
        loginMap.put("username", "//input[@id='username']");
        loginMap.put("password", "//input[@id='password']");
        loginMap.put("submit", "//button[@id='Login']");
        loginMap.put("UserLogged", "//span[@id='userNavLabel' and text()='Ali syed']");
        
        Iterator<String> it=loginMap.keySet().iterator();
        	
        while(it.hasNext()){
        	key=it.next();
        	if(key.equals(name1)){
        		key=loginMap.get(key);
        		break;
        	}
        }
        
/*		String objName;
	
		switch(name1){

		case "LoginURL" : objName="http://autotest31/insight/logon.jsp";
					  break;
		case "username" : objName="//input[@id='username']";
						  break;

		case "password" : objName="//input[@id='password']";
						  break;
		case "submit" : objName="//input[@class='submit']";
							break;

		default : System.out.println("No Name matching");
		            return null;
		}
		
		return objName;*/
        return key;
	}
  	
}
