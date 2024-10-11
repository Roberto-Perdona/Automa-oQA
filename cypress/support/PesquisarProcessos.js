import { Constantes } from './constantes';
class PesquisarProcessos {

    inserirTitularNaBarraDeBusca(NomeDoTitular) {
    cy.get(Constantes.barraDeBusca).type(NomeDoTitular);
    }
    clicarNoBotaoPesquisar() {
    cy.get(Constantes.botaoPesquisar).click({ force: true });
    }
    clicarNoBotaoConcondarTermos() {
    cy.contains(Constantes.botaoConcordarTermosDoSite).click();
    }
    clicarBotaoLimparBarraDeBusca() {
    cy.get(Constantes.botaoLimparCampoDaBarraDeBusca).click();
    }
    validarNomeDoTitular(NomeDoTitularValidar) {
    cy.get(Constantes.barraDeBusca).should('be.visible').type(NomeDoTitularValidar);
    }
}
export default PesquisarProcessos;