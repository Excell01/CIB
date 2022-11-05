class landingPage
{
getLoginField()
{

    return cy.get('.sc-lmoMRL.dcRJZA')
}
getEmailField()
{

    return cy.get(':nth-child(2) > .sc-jNMdTA > .sc-dOSReg')
}
getPasswordField()
{

    return cy.get(':nth-child(3) > .sc-jNMdTA > .sc-dOSReg')
}
getLoginButton()
{

    return cy.get('.sc-iNqMTl')
}


}

export default landingPage;