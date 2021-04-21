const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const port = 8081

/*Configurações básicas da aplicação */

    /* configurando template engine: templateEngine, página html default */
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')


/* Roda o express */
app.listen(port, function () {
    console.log('Servidor rodando na porta: ' + port)
})