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

        // do something after test suite execution
        // no matter if there are failed cases

    });

    //creates selenium web driver and load the desired webpage before each test.
    beforeEach(function (done) {

        driver = new selenium.Builder()
            .withCapabilities(selenium.Capabilities.chrome())
            .build()

        driver.get('https://medseek-engineering.github.io/qa-engineer-test/').then(done);
    });

    //closes webdriver after every test case.
    afterEach(function (done) {
        driver.quit().then(done);


    });

    //actual test case.
    it("Test-1", function (done) {

        //text to use in asserts methods
        let confirmText1 = 'Join the fight against bad bugs';
        let confirmText2 = 'Thank you for your interest';

        //user data to be entered
        let person = {
            name: 'Monique Berry',
            email: 'moniqueberry88@gmail.com',
            jobRole: 'Developer',
            workCompany: 'Unemployed'
        };

        //compare method 1
        driver.findElement(By.className('cover-heading')).getText().then(text => {
            console.log(text);
            expect(text).equals(confirmText1);

        });

        driver.findElement(By.className('btn btn-lg btn-secondary')).click();

        //compare method 2
        driver.findElement(By.className('cover-heading mb-5')).getText().then(text => {
            console.log(text);
            expect(text).equals(confirmText2);
        });

        //data entry point.
        driver.findElement(By.id('inputName')).sendKeys(person.name);
        driver.sleep(1000);
        driver.findElement(By.id('inputEmail1')).sendKeys(person.email);
        driver.sleep(1000);
        driver.findElement(By.id('inputJobTitle')).sendKeys(person.jobRole);
        driver.sleep(1000);
        driver.findElement(By.xpath("//input[@placeholder='Company']")).sendKeys(person.workCompany);
        driver.sleep(1000);
        driver.findElement(By.id('inputIndustry')).click();
        driver.findElement(By.xpath("//select[@id='inputIndustry']/option[26]")).click();
        driver.sleep(1000);
        driver.findElement(By.className('btn btn-lg btn-secondary')).click().then(done);

    });

});









