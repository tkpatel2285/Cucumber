package Cucumber;

import org.openqa.selenium.By;

public class HomePage extends Utils{

    By _clickcomputer = By.linkText("Computers");
    By _clickelectronics = By.linkText("Electronics");
    By _clickappareL = By.linkText("Apparel");
    By _clickdownloads = By.linkText("Digital downloads");
    By _clickbooks = By.linkText("Books");
    By _clickjewelry = By.linkText("Jewelry");
    By _clickgiftcard = By.linkText("Gift Cards");



    public void computerPage1() {
        click_Element(By.linkText(""));

    }
    public void electronicaPage(){
        click_Element(_clickelectronics);
    }
    public void apparelPage() {
        click_Element(_clickappareL);
    }
    public void downloadsPage() {
        click_Element(_clickdownloads);
    }
    public void booksPage() {
        click_Element(_clickbooks);
    }
    public void jewelryPage() {
        click_Element(_clickjewelry);
    } public void giftcardPage() {
        click_Element(_clickgiftcard);
    }




}