describe('Vbiz Portal', () => {
    it('Landing Page Test', () => {



      cy.visit('https://vbiz-dev.vfdbank.com')
      cy.get(':nth-child(3) > a > .sc-iwyYcG > .sc-bYEvPH > .sc-cxFLnm > .sc-lmoMRL').click()




    })
  })