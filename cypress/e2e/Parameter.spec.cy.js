//Parameter

describe('Parameter Create Positif', () => {
    it('passes', () => {
      //Go To Login Page
      cy.visit('http://10.232.1.21:7759/login')
      
      //Entry Email
      cy
      .get('#input-0')
      .type('super_admin_ardan@yopmail.com')
      //Validation Entry
      cy
      .get('#input-0')
      .should('have.value','super_admin_ardan@yopmail.com')
  
      //Entry Password
      cy
      .get('#input-2')
      .type('123qwe')
      //Validation Entry
      cy
      .get('#input-2')
      .should('have.value','123qwe')
      
      //Click Login
      cy
      .get('.v-btn--elevated')
      .click()
      //Validate Success Login
      cy
      .get('.my-4')
      .should('contain','Berhasil Masuk')

      cy
      .visit('http://10.232.1.21:7759/master/parameter-inspeksi')
      
      cy
      .get('.v-breadcrumbs-item')
      .contains('Parameter Inspeksi')

      cy
      .get('.v-col-sm-9 > .v-btn')
      .click()

      cy
      .get('#input-55')
      .type('Kondisi insulator Tumpu/Dudukan')

      cy
      .get('#input-44')
      .click()

      cy
      .get(':nth-child(1) > .v-list-item__content > .v-list-item-title')
      .click()

      cy
      .get('#input-50')
      .click()

      cy
      .get(':nth-child(1) > .v-list-item__content > .v-list-item-title')
      .click()

      cy
      .get('#input-53')
      .click()

      cy
      .get('.v-overlay__content > .v-list > :nth-child(1)')
      .click()

      cy
      .get('#input-56')
      .click()

      cy
      .get('.v-overlay__content > .v-list > :nth-child(1)')
      .click()
    })
  })