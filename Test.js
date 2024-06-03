const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

;(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build()
  try {
    await driver.get('https://eshikshakosh.bihar.gov.in/login')
    await driver.sleep(9000)
    await driver.findElement(By.name('userType')).click()   
    await driver.sleep(3000)
    await driver.findElement(By.xpath("//input[@placeholder='Enter School UDISE Code']")).sendKeys('10201006101')
    // await driver.sleep(3000)
    await driver.findElement(By.xpath("//input[@placeholder='Enter User Password']")).sendKeys("Esks@1971");
    // await driver.sleep(6000)
    await driver.findElement(By.className("submit__btn")).click();
    await driver.sleep(4000)
    await driver.findElement(By.xpath("//span[text()='Student Enrollement']")).click();
    await driver.sleep(2000)
    await driver.findElement(By.xpath("//a[@href='/Application/student/info']")).click();
    await driver.sleep(2000)
    await driver.findElement(By.xpath("//a[@href='/Application/student/info/add']")).click();
    var fs = require('fs');

    // Use fs.readFile() method to read the file
    fs.readFile('data.xls', 'utf8', function (err, data) {
        // Display the file content
        console.log(data);
    });

  } finally {
    // await driver.quit()
  }
})()