# Simulador de Taxas

## Instruções para executar o projeto

### Criando a base de dados

1. Acesse este [link](https://balta.io/blog/sql-server-docker) para execução de um container docker com uma imagem do SQL Server
2. No momento de rodar o container com a imagem, inclua a seguinte senha para o banco de dados: uN1p79*J^8YB <br>
 a. O comando ficará da seguinte forma: <br>
 ```sh
  docker run --name sqlserver -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=uN1p79*J^8YB" -p 1433:1433 -d mcr.microsoft.com/mssql/server 
 ```
3. Com o container disponível, podemos executar os comandos para criar a estrutura do banco de dados e inserir informações <br>
 a. Neste passo, fica a critério de onde realizar. Porém, aqui foi utilizado o DBeaver para criar uma nova conexão com o banco de dados que está rodando dentro do docker, conforme citado no passo 1 e 2 <br>
 b. Realize conexão com o banco de dados no schema master (padrão SQL Server) e os seguintes dados: <br>
 <code>usuário: sa</code><br>
 <code>senha: uN1p79*J^8YB</code><br><br>
 **OBS: Antes de realizar os passos "c" e "d", os comandos devem ser realizados um por um conforme ordem dos arquivos, assim respeitando a precedência de constraints definidas** <br>
 c. Execute os comandos deste [arquivo](https://github.com/JA-Lourenco/simulador-JoaoAntonio/blob/master/SQL-simulator/SQL/DDL.sql) para criar a estrutura do banco de dados <br>
 d. Execute os comandos deste [arquivo](https://github.com/JA-Lourenco/simulador-JoaoAntonio/blob/master/SQL-simulator/SQL/DML.sql) para inserir os dados no banco de dados
 4. Banco de dados estruturado e disponível para uso.
 
 <hr>
 
### Executando a API
 
1. Clone o repositório: <code>git clone https://github.com/JA-Lourenco/simulador-JoaoAntonio.git</code> 
2. Abra a pasta API-simulator 
3. Abra o projeto API no editor de código (Preferência pelo Visual Studio Code) 
4. Dentro do terminal execute o comando: <code>npm install</code> 
5. Aguarde a instalação das dependências 
6. Execute o comando para iniciar o projeto: <code>npm run dev</code> 
7. Caso esteja tudo OK, você verá a seguinte mensagem no terminal: <code>-> Running at http://localhost:3000</code>
8. API está online
 
<hr>
  
### Executando o Front-End
  
1. Volte na pasta em que realizou o clone do repositório
2. Abra a pasta REACT-simulator
3. Abra o projeto REACT no editor de código (Preferência pelo Visual Studio Code) 
4. Dentro do terminal execute o comando: <code>npm install</code> 
5. Aguarde a instalação das dependências 
6. Execute o comando para iniciar o projeto: <code>npm run dev</code> 
7. Caso esteja tudo OK, você verá a seguinte mensagem no terminal: <code>➜ Local: http://localhost:5173/</code>
8. Abra o link disponibilizado no terminal para interagir com o projeto

<hr>

#### Melhorias

1. Aplicar componente para disponibilizar máscara no input de renda. [Sugestão](https://www.npmjs.com/package/react-currency-mask)
2. Aplicar rotina de testes

OBS: Estes pontos ficaram pendentes devido à priorização de entrega de uma primeira versão funcional do projeto.

<hr>

#### Tecnologias

1. SQL Server
2. Node JS
3. React JS  
 
