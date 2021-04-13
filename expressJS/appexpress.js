const express = require("express")
const app = express()
const port = 8081

app.get("/", function(request, answer) {
    answer.send('Primeira págins com express.')
})

app.listen(port, function() {
    console.log(`Servidor rodando na porta ${port}`)
})