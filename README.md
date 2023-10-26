# Projeto EcoColeta - Gestão de Resíduos Recicláveis ♻️🌱

### [Link para o projeto em funcionamento 🔗🌍](https://ecocoleta.onrender.com/)

## Descrição do Projeto 📝

O projeto "EcoColeta" tem como objetivo principal criar uma aplicação web para a gestão de coletas de resíduos recicláveis. Esta aplicação permite que os usuários cadastrem coletas, registrem informações sobre o tipo de resíduo, massa, volume e o cliente relacionado. Além disso, fornece funcionalidades de listagem, atualização e geração de relatórios totalizadores das coletas realizadas. Tudo isso com um design responsivo e atraente.

## Principais Funcionalidades 🔥

- **Cadastro de Coletas**: Os usuários podem registrar informações detalhadas sobre coletas, incluindo tipo de resíduo, massa, volume e o cliente relacionado.
- **Listagem de Coletas Realizadas**: Os usuários têm acesso a uma lista completa de todas as coletas realizadas.
- **Atualização de Coletas**: Os usuários podem editar informações de coletas já registradas.
- **Exclusão de Coletas**: Os usuários têm a opção de remover coletas existentes.
- **Relatórios Totalizadores**: A aplicação oferece a geração de relatórios que resumem os dados das coletas realizadas.
- **Armazenamento na nuvem**: Todos os dados são armazenados de forma segura no MongoDB para consulta posterior, garantindo a integridade das informações.
- **Dupla Validação de Formulário**: Foi implementada validação dos dados no FrontEnd e BackEnd para garantir a qualidade dos dados inseridos.

## Tecnologias Utilizadas 🔧

- **HTML, CSS e JavaScript**: Utilizamos as bases da web para criar uma interface simples e completa.
- **Responsividade**: Implementamos CSS responsivo para garantir uma experiência adequada em diferentes dispositivos, incluindo smartphones e tablets.
- **Node.js**: Foi utilizado o ambiente de execução Node.js para desenvolver a aplicação.
- **React**: Foi utilizado o React para construir a interface do usuário no frontend.
- **Express**: O Express foi a escolha para o backend, fornecendo um serviço RESTful confiável.
- **TypeScript**: TypeScript foi usado para melhorar a qualidade do código e facilitar o desenvolvimento.
- **MongoDB**: Os dados são armazenados no mongoDB para garantir a persistência dos dados.
- Outras tecnologias e bibliotecas.

## Como Executar o Projeto Localmente 🚀

1. Certifique-se de ter o Node.js instalado em seu sistema.
2. Clone este repositório em sua máquina local.
3. Navegue até a pasta raiz do projeto no terminal.
4. Crie um projeto no banco de dados MongoDB, configure seu login e permita a conexão do seu Endereço IP.
5. **Executando Back End:**
    1. Apartir da raiz, navegue até a pasta `./ecocoleta-backend` no terminal.
    2. Execute o comando `npm install` para instalar as dependências.
    3. Configure as variáveis de ambiente necessárias:
       1. Crie um arquivo `.env`, na pasta atual e edite-o com um editor de texto.
       2. Coloque o seguinte texto: <br>
         ```
         LOGIN = 'string de conexão mongoDB'
         SECRET = 'Qualquer Coisa'
         ```
      3. Substitua `'string de conexão mongoDB'` e `'Qualquer Coisa'` por seus respectivos dados.
    4. Execute o comando `npx nodemon server.ts` para iniciar o servidor backend.
6. **Executando Front End:**
    1. Apartir da raiz, navegue até a pasta `./ecocoleta-frontend` no terminal.
    2. Execute o comando `npm install` para instalar as dependências.
    3. Configure as variáveis de ambiente necessárias:
       1. Crie um arquivo `.env`, na pasta atual e edite-o com um editor de texto.
       2. Cole o seguinte texto: `REACT_APP_API_BACKEND='aqui vai a url da API BackEnd'`.
       3. A url da API será: `http://ipDaSuaMaquina:3024` .
    4. Execute o comando `npm run start` para iniciar um servidor local do FrontEnd.
       
Aproveite o "EcoColeta" e contribua para um mundo mais limpo e sustentável! 🌍♻️
