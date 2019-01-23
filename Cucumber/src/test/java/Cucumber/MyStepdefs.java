package Cucumber;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.testng.Assert;

import java.io.IOException;

public class MyStepdefs extends Utils {
    HomePage homepage = new HomePage();

    @Given("^user is on nopcommerce Home page$")
    public void user_is_on_nopcommerce_Home_page() {
    }


    @When("^user click on ([^\"]*)$")
    public void userClickOnLink(String link) {
        click_Element(By.linkText(link));
    }

    @Then("^user should be able to see ([^\"]*)$")
    public void userShouldBeAbleToSeeTitle(String title) {
        String url = driver.getCurrentUrl();
        System.out.println(url);
        Assert.assertTrue(driver.getCurrentUrl().contains(url), "Test case fail");

    }




}

