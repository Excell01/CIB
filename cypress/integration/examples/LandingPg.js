
import landingPage from '../pageObjects/landingPage'

describe('Vbiz Portal', () => {
    it('Landing Page Test', () => {

      const LandingPage=new landingPage
      cy.visit('https://vbiz-dev.vfdbank.com');
      LandingPage.getLoginField().contains('Log').click();
      LandingPage.getEmailField().type('admin@gmail.com');
      LandingPage.getPasswordField().type('admin');
      LandingPage.getLoginButton().click();






    })
  })