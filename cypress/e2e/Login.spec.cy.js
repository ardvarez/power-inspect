describe('Login Positif', () => {
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
  })
})

describe('Login Negatif False Email', () => {
  it('passes', () => {
    //Go To Login Page
    cy.visit('http://10.232.1.21:7759/login')
    
    //Entry Email
    cy
    .get('#input-0')
    .type('super_admin_ardan@yopmail.con')
    //Validation Entry
    cy
    .get('#input-0')
    .should('have.value','super_admin_ardan@yopmail.con')

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
    .get('.v-alert-title')
    .should('contain','User tidak ditemukan')
  })
})

describe('Login Negatif False Password', () => {
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
    .type('123qe')
    //Validation Entry
    cy
    .get('#input-2')
    .should('have.value','123qe')
    
    //Click Login
    cy
    .get('.v-btn--elevated')
    .click()
    //Validate Success Login
    cy
    .get('.v-alert-title')
    .should('contain','Email atau password salah')
  })
})

describe('Login Negatif No Password Entry', () => {
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

    //Click Login
    cy
    .get('.v-btn--elevated')
    .click()
    //Validate Success Login
    cy
    .get('.v-input__details > #input-2-messages > .v-messages__message')
    .contains('Password tidak boleh kosong')  
  })
})


describe('Login Negatif no Entry', () => {
  it('passes', () => {
    //Go To Login Page
    cy.visit('http://10.232.1.21:7759/login')

    //Click Login
    cy
    .get('.v-btn--elevated')
    .click()
    
    //Validate Mandatory
    cy
    .get('.v-input__details > #input-0-messages > .v-messages__message')
    .contains('Email tidak boleh kosong')
    cy
    .get('.v-input__details > #input-2-messages > .v-messages__message')
    .contains('Password tidak boleh kosong')
  })
})
