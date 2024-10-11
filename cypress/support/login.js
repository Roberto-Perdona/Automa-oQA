import { Constantes } from './constantes';
class Login {
    clicarbotaoEntrar() {
    cy.contains(Constantes.botaoEntrar).click({force: true});
    };
    validarURLDoEmailUsuario() {
    cy.url().should('eq', 'https://www.jusbrasil.com.br/login?next_url=https%3A%2F%2Fwww.jusbrasil.com.br%2F');
    };
    inserirEmailUsuario() {
    cy.fixture('perfilusuario').then((usuario) => {
    cy.get('#FormFieldset-email').type(usuario.email);
    })};
}
export default new Login();