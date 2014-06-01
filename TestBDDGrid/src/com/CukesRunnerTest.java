package com;

import org.junit.runner.RunWith;
import cucumber.api.junit.*;
import cucumber.api.junit.Cucumber.Options;

@RunWith(Cucumber.class)
@Options(format = { "progress", "html:target/cucumber" },
// features="src/test/resources/com/bdd/new1/login.feature"
glue = { "com.login", "com.MCV", "com.landing","com.common","com.contacts" },
tags = { "@land"}//@contactCreate,@contactDelete" }
											
)
public class CukesRunnerTest {

}
