# webdesign-uceff


## Setup Inicial

Para executar esse projeto precisamos ter alguns softwares disponíveis em nossa máquina:

1. Node.js LTS release - https://nodejs.org/en
2. Git - https://git-scm.com/downloads
3. Visual Studio Code - https://code.visualstudio.com/download


Os passos a seguir servem de referência para a elaboração do projeto:

## 1. Configurar o Ambiente Node.js
Efetue o clone do repositório
```bash
git clone https://github.com/guilhermehpiasson/webdesign-uceff.git
```

## 2. Instalar Dependências e subir aplicação
Instale as dependências necessárias usando NPM dentro do diretório do projeto o qual foi clonado.
```bash
npm install
```

Após instalar as dependencias starte o projeto
```bash
npm start
```
As etapas abaixo referem-se a etapas para a concepção do projeto, já as anteriores servem mais para baixar o projeto base, instalar as dependências e "startar" o projeto para testar as APIs.


## 3. Configurar o Servidor Express
Crie um arquivo `server.js` para configurar o servidor Express.
```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(\`Servidor rodando na porta ${port}\`);
});
```

## 4. Conectar ao MySQL
Configure a conexão com o banco de dados MySQL.
```javascript
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'sua_base_de_dados'
});

connection.connect(err => {
  if (err) throw err;
  console.log("Conectado ao MySQL!");
});
```

## 5. Criar Rota da API
Adicione uma rota POST para receber o CEP e consultar o serviço dos Correios.
```javascript
const soap = require('soap');
const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

app.post('/consultaCEP', (req, res) => {
  const cep = req.body.cep;

  soap.createClient(url, (err, client) => {
    if (err) throw err;
    client.consultaCEP({ cep: cep }, (err, result) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      // Continua no próximo passo...
    });
  });
});
```

## 6. Tratar a Resposta do SOAP
No callback da consulta SOAP, processe a resposta.
```javascript
// Dentro do client.consultaCEP
let dadosCEP = result.return;
// Processar dadosCEP conforme necessário
```

## 7. Inserir Dados no MySQL
Insira os dados recebidos na tabela `ENDERECOS`.

## 8. Testar a API
Inicie o servidor e teste a API com um cliente como o Postman.

## 9. Tratamento de Erros
Adicione tratamentos de erro adequados em cada etapa do processo.

## 10. Documentação
Documente sua API, incluindo exemplos de uso.
