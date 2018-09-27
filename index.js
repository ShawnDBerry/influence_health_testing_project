var selenium = require('selenium-webdriver');

driver = new selenium.Builder()
  .withCapabilities(selenium.Capabilities.chrome())
  .build()

driver.get('https://medseek-engineering.github.io/qa-engineer-test/');

driver.findElement(selenium.By.className('cover-heading')).getText().then(text => {
    console.log(text);
});

driver.quit();