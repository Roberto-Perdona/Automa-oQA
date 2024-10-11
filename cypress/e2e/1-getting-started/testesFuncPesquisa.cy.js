  /// <reference types="cypress" />
  import PesquisarProcessos from "../../support/PesquisarProcessos";
describe('Documentação de Cenários de Testes Automatizados', () => {
  beforeEach(() => {
    cy.visit('https://www.jusbrasil.com.br/consulta-processual/', { failOnStatusCode: false });
  })

  it('CT001-Busca por processo específico através do Nome do titular', () => {
    const busca = new PesquisarProcessos();  
    busca.inserirTitularNaBarraDeBusca('Roberto de Souza Moscovo');
    busca.clicarNoBotaoPesquisar();
    busca.clicarNoBotaoConcondarTermos();
    busca.clicarBotaoLimparBarraDeBusca();
    busca.validarNomeDoTitular('Roberto de Souza Moscovo');
      // O endereço eletrônico possui bloqueios contra acesso automatizado,
      // segue aqui o meu caso de teste conforme até onde consegui mapear implementado, 
      // conforme boas práticas de desenvolvimento,
      // Evidência na pasta download deste projeto "Print da tela". 
 })
  
})