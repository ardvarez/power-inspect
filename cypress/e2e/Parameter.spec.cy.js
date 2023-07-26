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
      .get('#input-42')
      .type('Kondisi insulator Tumpu/Dudukan')

      cy
      .get('#input-44')
      .click()

      cy
      .get(':nth-child(1) > .v-list-item__content > .v-list-item-title')
      .click()

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
      .get('.v-overlay--active > .v-overlay__content > .v-list > :nth-child(1)')
      .click()
      
      cy
      .get('#input-53')
      .click()

      cy
      .get('.v-overlay--active > .v-overlay__content > .v-list > :nth-child(1)')
      .click()

      cy
      .get('#input-56')
      .click()

      cy
      .get('.v-overlay--active > .v-overlay__content > .v-list > :nth-child(2)')
      .click()

      cy
      .get('#input-60')
      .type('insulator tumpu tembus, Counter gagal kerja, LCM tidak valid')
      
      cy
      .get('#input-69')
      .type('Kondisi insulator Tumpu/Dudukan')

      cy
      .get('#input-69')
      .should('have.value','Kondisi insulator Tumpu/Dudukan')

      cy
      .get('#input-71')
      .click()

      cy
      .get('.v-overlay--active > .v-overlay__content > .v-list > :nth-child(7)')
      .click()

      cy
      .get('#input-77')
      .click()

      cy
      .get('.v-overlay--active > .v-overlay__content > .v-list > :nth-child(2)')
      .click()

      cy
      .get('#input-80')
      .click()

      cy
      .get('.v-overlay--active > .v-overlay__content > .v-list > :nth-child(1)')
      .click()

      cy
      .get('#input-83')
      .type('Kondisi')

      cy
      .get('[tabindex="-1"] > .v-btn__content')
      .click()
      .next()

      cy
      .get('#input-154')
      .click()

      cy
      .get('#input-155')
      .click()

      cy
      .get('.v-overlay__content > .v-list > :nth-child(1)')
      .click()

      cy
      .get('.v-col-sm-12 > .v-card > #c-table > .v-table__wrapper > table > tbody > tr > :nth-child(2) > .v-input > .v-input__control > .v-field > .v-field__field > .v-field__input')
      .click()

      cy
      .get('.v-overlay__content > .v-list > :nth-child(1)')
      .click()

      cy
      .get('.v-col-sm-12 > .v-card > #c-table > .v-table__wrapper > table > tbody > tr > :nth-child(3) > .v-input > .v-input__control > .v-field > .v-field__field > .v-field__input')
      .click()

      cy
      .get('.v-overlay__content > .v-list > :nth-child(3)')
      .click()

      cy
      .get('.v-col-sm-12 > .v-card > #c-table > .v-table__wrapper > table > tbody > tr > :nth-child(4) > .v-input > .v-input__control > .v-field > .v-field__field > .v-field__input')
      .type('Normal')

      cy
      .get('.v-col-sm-12 > .v-card > #c-table > .v-table__wrapper > table > tfoot > .text-center > .v-btn > .v-btn__content > .mdi-plus')
      .click()

      cy
      .get('tbody > :nth-child(2) > :nth-child(2)')
      .click()
      
      cy
      .get('.v-overlay__content > .v-list > :nth-child(2)')
      .click()

      cy
      .get('tbody > :nth-child(2) > :nth-child(3)')
      .click()

      cy
      .get('.v-overlay__content > .v-list > :nth-child(2)')
      .click()

      cy
      .get('#input-196')
      .type('Pembersihan permukaan insulator')

      cy
      .get('.v-col-sm-12 > .v-card > #c-table > .v-table__wrapper > table > tfoot > .text-center > .v-btn > .v-btn__content > .mdi-plus')
      .click()

      cy
      .get('#input-209')
      .click()
      
      cy
      .get('.v-overlay__content > .v-list > :nth-child(3)')
      .click()

      cy
      .get('#input-212')
      .click()

      cy
      .get('.v-overlay__content > .v-list > :nth-child(2)')
      .click()

      cy
      .get('#input-215')
      .type('Pembersihan permukaan insulator')

      cy
      .get('.v-col-sm-12 > .v-card > #c-table > .v-table__wrapper > table > tfoot > .text-center > .v-btn > .v-btn__content > .mdi-plus')
      .click()
      
      cy
      .get('#input-228')
      .click()
      
      cy
      .get('.v-overlay__content > .v-list > :nth-child(4)')
      .click()

      cy
      .get('#input-231')
      .click()

      cy
      .get('.v-overlay__content > .v-list > :nth-child(2)')
      .click()

      cy
      .get('#input-234')
      .type('Pembersihan permukaan insulator')

      cy
      .get('.v-col-sm-12 > .v-card > #c-table > .v-table__wrapper > table > tfoot > .text-center > .v-btn > .v-btn__content > .mdi-plus')
      .click()
      
      cy
      .get('#input-247')
      .click()
      
      cy
      .get('.v-overlay__content > .v-list > :nth-child(5)')
      .click()

      cy
      .get('#input-250')
      .click()

      cy
      .get('.v-overlay__content > .v-list > :nth-child(5)')
      .click()

      cy
      .get('#input-253')
      .type('Penggantian insulator tumpu')

      cy
      .get('.v-col > .v-btn')
      .click()

      cy
      .get('.v-card-actions > .v-btn--elevated')
      .click()


    })
  })