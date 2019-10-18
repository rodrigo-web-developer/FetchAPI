# FetchAPI
Curso de Fetch API ministrado na Semana de Tecnologia da Informação do UNIVEM ministrado nos dias 25/09/2019 e 26/09/2019

## Material do Curso
O material teórico se encontra no arquivo pptx: [Baixe aqui os slides](http://tiny.cc/3oimez)

## Conteúdo
O curso teve como objetivo ensinar como integrar uma API REST através do Fetch API do Javascript, utilizando para isso, uma API de testes para cadastro de categorias e produtos (link para documentação da API no Postman nos slides).
De modo geral, o curso apresentou:
- Utilizar Fetch do Javascript para integrar com API
- Implementar as chamadas para as ações de uma API Restful
- Tratar mensagens de erro identificando-as pelo código de status HTTP da resposta
- Entender a chamada OPTIONS pelo CORS
- Enviar dados de um formulário em JSON
- Ler uma resposta JSON
- Implementar autenticação com JWT
- Utilizando header "Authorization" para enviar JWT (Bearer) gerado no login 
- Entender a diferença do fetch para o antigo XMLHttpRequest (xhr)
- Entender as vantagens de se utilizar o fetch em vez de bibliotecas de terceiros (axios, ajax, HttpClient etc)
- Implementar chamadas resolvendo promises com .then() e .catch()
- Implementar chamadas resolvendo promises com async/await

## Como executar
- Clone o repositório para sua máquina.
- Suba a aplicação em qualquer web server da sua preferência (Apache, Tomcat, IIS, Kestrel, Node Express, Python HttpServer) - isso é necessário para que a aplicação execute com um endereço válido ("localhost", por exemplo)
- Acesse o endereço da aplicação pelo browser e pronto, já está funcionando.

## Pronto para executar
Para facilitar a execução do servidor pelos alunos, foi utilizado o Python 3.7 ou Node JS. **Não é obrigatório utilizar o arquivo server.py ou server.js, pois foi feito apenas para executar rapidamente um servidor HTTP com endereço válido.**

### Python 3.6+
Caso tenha instalado o Python em sua máquina, abra o terminal/cmd no diretório da aplicação e execute o seguinte comando:

```python server.py``` 

ou 

```py server.py``` 

dependendo de como está configurado o comando no seu computador. 

Pronto, sua aplicação estará rodando em localhost:5050

### Node.js (6.0.0+)
Caso tenha o node instalado em sua máquina, abra o terminal/cmd no diretório da aplicação e execute os seguintes comandos:

```
npm install express
node server.js
```

Pronto, sua aplicação estará rodando em localhost:5050
