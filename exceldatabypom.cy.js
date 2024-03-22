import Login1 from "../pageobject/pomclass";
/// <reference types="Cypress" />
const neatCSV = require("neat-csv");
let table;
describe("Read CSV", () => {
  before(() => {
    cy.fixture("contact").then(neatCSV).then((data) => {
        table = data;
      })
      .then(console.table);
  });
  it("Fill input fields using CSV data", () => {
    const loginpage = new Login1();
    loginpage.enterWebsite();
    loginpage.enterRegistrationPage();
    cy.wait(300);
    loginpage.enterFirstName(table[0]["FirstName"]);
    loginpage.enterLastName(table[0]["LastName"]);
    loginpage.enterStreet(table[0]["Address"]);
    loginpage.enterCity(table[0]["City"]);
    loginpage.enterState(table[0]["State"]);
    loginpage.enterZipcode(table[0]["ZipCode"]);
    loginpage.enterPhoneNumber(table[0]["Phone"]);
    loginpage.enterSSN(table[0]["SSN"]);
    loginpage.enterUserName(table[0]["Username"]);
    loginpage.enterPassword(table[0]["Password"]);
    loginpage.enterRepeatPassword(table[0]["Confirm"]);
    loginpage.enterSubmit();
  });
});