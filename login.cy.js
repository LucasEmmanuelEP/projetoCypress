describe('Meu primeiro teste automático', function (){
  it('Verificar o nome da aplicação', function (){
    cy.visit('https://gestaoclick.com')
    cy.get('input[name^="data[Usuario][email]"]').type('lucasemmanuel3@hotmail.com')
    
    // Preencher o campo de senha
    cy.get('input[name^="data[Usuario][senha]"]').type('betel1@@')

    // Enviar o formulário de login
    cy.get('button[type="submit"]').click()
  })
})