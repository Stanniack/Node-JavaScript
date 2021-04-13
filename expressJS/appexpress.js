const express = require("express")
const app = express()
const port = 8081

app.get("/", function(request, answer) {
    answer.send('Primeira página com express.')
})

app.get("/sobre/:nome/:idade", function(request, answer) {
    answer.send(request.params.nome)
})

app.listen(port, function() {
    console.log(`Servidor rodando na porta ${port}`)
})