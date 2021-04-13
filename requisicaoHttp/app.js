/* Chamada protocolo http */
let http = require('http')

/* Cria servidor / listen(porta)*/
http.createServer(function (requisicao, resposta) {
    resposta.end('Hello World in NodeJs')
}).listen(8082)