Documentação

Requisitos de Sistema
* Software:
  - Node.js (versão 20.11.1) – para o front-end em TypeScript/HTML/CSS
  - .NET SDK (versão 9.0.2) – para o back-end em C#
  - Visual Studio Code
  - Git (para clonar o repositório)

Instruções para Rodar o Projeto

4.1. Clonar o repositório
executar o seguinte comando dentro do terminal do git:
git clone https://github.com/Edumaximus/Trabalho-de-topicos---Banco.git

4.2. Configurar o back-end (.NET C#)

1. Navegar até a pasta `Banco/API/` dentro do terminal do visual studio code

2. Restaurar dependências:
dotnet restore

3. Iniciar a API:
dotnet run

4. Checar a porta que está sendo usada pelo backend em sua máquina

4.3. Configurar o front-end (TypeScript/Node.js)

1. Navegar para `front-banco/` dentro do terminal do visual studio code

2. Instalar dependências:
npm install

3. Se a porta usada pelo localhost da sua máquina for diferente de 5103, configurar os endpoints da API em todos os arquivos .tsx dentro da pasta pages. Por exemplo, se a porta for 5000:
em ListarContas.tsx, a função carregarContas() deve ficar assim:

function carregarContas(){
    axios.get("http://localhost:5000/api/contas")
    .then(response => {
        setContas(response.data)
        console.table(response.data);
        })
    .catch(() => {
        alert("error");
    })
}

é necessário fazer isso em todos os lugares nos quais a requisição é chamada

4. Iniciar servidor de desenvolvimento:
npm start

5. Acessar no navegador: `http://localhost:3000`

Funcionalidades Principais

	Este sistema foi criado para ser operado por funcionários do banco realizando atendimentos presenciais a clientes no Banco.
	É possível ter saldo negativo, isso é contabilizado como um débito com o Banco.

-Listagem de contas: Todas as contas do banco estão listadas nessa tela, sendo possível checar o id da conta, o nome do proprietário, o tipo da conta e o saldo disponível, nesta tela também é possível deletar a conta do cliente correspondente.

-Cadastro de contas: Aqui é possível criar contas de usuário novas, fornecendo o nome do cliente e selecionando o tipo da conta. Todas as contas começam com o saldo 0.

-Listagem de tipos: Aqui é possível ver uma lista de todos os tipos de conta que o banco criou, além de checar uma descrição dos benefícios e restrições de cada tipo. Não é possível deletar um tipo de conta.

-Cadastro de tipos de conta: Aqui é possível criar um tipo de conta nova, fornecendo o nome do tipo e uma descrição, caso o banco precise de uma nova categoria de conta para oferecer aos seus clientes.

-Transações: Aqui são realizadas operações básicas de saque e depósito, o atendente do banco digita o id do usuário que quer realizar a operação (pode ser checado na lista de contas), e digita o valor da operação, positivo para depósitos, negativo para saques.

Estrutura do Projeto
Banco/: Código da API em C# (.NET 9.0.2)
front-banco/: Aplicação web em TypeScript + Node.js
Banco/Models/: Definição de entidades (Conta, Tipo)
front-banco/src/: Componentes, serviços, estilos