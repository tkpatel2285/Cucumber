package Cucumber;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.Test;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class Hooks extends BasePage  {
    BrowserSetUp browsersrtup = new BrowserSetUp();
    LoadProp prop = new LoadProp();

    @Before
    public void setUp() {

        browsersrtup.selectBrowser();
        chrome_Driver();
    }

        @After
        public void after () {
            driver.quit();
        }

//    @AfterMethod
//    public void after(ITestResult result)
//    {
//        if (ITestResult.FAILURE == result.getStatus())
//        {
//            try
//            {
//                TakesScreenshot ts = (TakesScreenshot) driver;
//                File source = ts.getScreenshotAs(OutputType.FILE);
//                FileUtils.copyFile(source, new File("src\\test\\java\\Resources\\Driver\\Screenshot" + result.getName() + ".png"));
//                System.out.println("Screenshot taken");
//            }
//            catch (Exception e)
//            {
//                System.out.println("exception while taking Screenshot " + e.getMessage());
//            }
//
//        }
//        driver.quit();
//    }
    }





