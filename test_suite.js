const selenium = require('selenium-webdriver');
const expect = require('chai').expect;
let Keys = selenium.Key;
let By = selenium.By;

describe("Test Suite", function () {
    this.timeout(10000);
    before(function () {

        // do something before test suite execution
        // no matter if there are failed cases

    });


    after(function () {


    });

    beforeEach(function (done) {

        driver = new selenium.Builder()
            .withCapabilities(selenium.Capabilities.chrome())
            .build()

        driver.get('https://medseek-engineering.github.io/qa-engineer-test/').then(done);
    });

    afterEach(function (done) {
        driver.quit().then(done);
        

    });

    it("Test-1", function (done) {
        let name = 'Monique Berry';
        let email = 'moniqueberry88@gmail.com'
        let jobRole = 'Developer';
        let workCompany = 'Unemployed';

        driver.findElement(By.className('cover-heading')).getText().then(text => {
            console.log(text);
            expect(text).equals('Join the fight against bad bugs');
            
        });

        driver.findElement(By.className('btn btn-lg btn-secondary')).click();


        driver.findElement(By.className('cover-heading mb-5')).getText().then(text => {
            console.log(text);
            expect(text).equals('Thank you for your interest');
        });

        driver.findElement(By.id('inputName')).sendKeys(name);
        driver.findElement(By.id('inputEmail1')).sendKeys(email);
        driver.findElement(By.id('inputJobTitle')).sendKeys(jobRole);
        driver.findElement(By.xpath("//input[@placeholder='Company']")).sendKeys(workCompany);
        driver.findElement(By.id('inputIndustry')).click();
        driver.findElement(By.xpath("//select[@id='inputIndustry']/option[26]")).click();
        driver.findElement(By.className('btn btn-lg btn-secondary')).click().then(done);
        
    });
    
});









