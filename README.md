Plano de Testes automatizados para o Site de Pesquisa
1. Introdução
Objetivo do Teste: Validar a funcionalidade do site de pesquisa, garantindo que todas as funcionalidades principais sejam testadas de forma eficiente e eficaz, através da cobertura de testes automatizados.
Escopo do Teste: Realizar a cobertura de testes de funcionalidade de busca, filtragem de resultados, navegação.

                           Documentação de Cenários de Testes Automatizados
Cenário de Teste 1: Busca por Nome do titular. 
ID do Cenário: TC001
Descrição: Verificar se a busca retorna resultados do titular específico através do nome.


Pré-condições: 
•	O usuário deve estar na página específica do site de pesquisa:  "https://www.jusbrasil.com.br/consulta-processual/"
Massa de Dados:
Entrada:
Nome: Roberto de Souza Moscoso

Passos:
1. Acessar a página específica do site de pesquisa.
2. Inserir o Titular "Roberto de Souza Moscoso" na barra de busca.
3. Clicar no botão "Buscar".
4. Clicar no botão "Concordar e fechar" do termo de uso da aplicação.
5. Clicar na barra de pesquisa novamente.
6. Validar o nome do titular "Roberto de Souza Moscoso" na barra de pesquisa. 
Resultado Esperado:
A página deve exibir nome do usuário salvo na barra de pesquisa.


Cenário de Teste 2: Busca por processos através do CPF do titular 
ID do Cenário: TC002
Descrição: Verificar se a busca retorna resultados de processos para o titular específico através do CPF.
Pré-condições: 
- O usuário deve estar na página específica do site de pesquisa.
Massa de Dados:
Entrada:
E-mail: usuarioqa99@gmail.com 
senha: Usuario99*

Passos:
1. Acessar a página específica do site de pesquisa "Home".
2. Clicar no botão "Entrar" para realizar login.
3. Validar URL da página para inserir email do usuário.
4. Inserir email do usuário.
Resultado Esperado:
A página deve exibir o email do usuário no campo.

BOAS PRÁTICAS DO PROJETO
•	Pasta Support:
 o	separados as classes com seus métodos e variáveis:
  	Login.js
  	PesquisarProcessos.js
 o	Separdas as constantes
  	constantes
•	Pasta fixtures:
 o	Separado arquivo json: para gerar massa de dados e melhor proteção de dados sensíveis.
•	Pasta downloads
 o	Arquivo de evidência de bloqueio de segurança para automação Print “PNG”.
