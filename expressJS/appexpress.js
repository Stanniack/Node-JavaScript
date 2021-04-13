const express = require("express")
const app = express()
const port = 8081

app.get("/", function(request, answer) {
    // dirname é o diretório raiz
    answer.sendFile(__dirname + "/html/index.html")
})

app.get("/sobre/:nome/:idade", function(request, answer) {
    answer.send(request.params.nome)
})

/* Inicialização do servidor */
app.listen(port, function() {
    console.log(`Servidor rodando na porta ${port}`)
})