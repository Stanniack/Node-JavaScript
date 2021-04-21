const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

const app = express()
const port = 8081

// -----------------------------------

/* Configurações básicas da aplicação */

    /* configurando template engine: templateEngine, página html default */
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    /* Configurando Body-parser (conversor de requisições) */
    app.use(express.urlencoded({extended: false}))
    app.use(express.json())

// -----------------------------------

    /* Rotas express */
    app.get('/cadastro', function(requestion, answer){
        answer.render('form')
    }) 

    app.post('/app', function(requestion, answer) {
        answer.send('Título: ' + requestion.body.titulo)
    })


// -----------------------------------

/* Roda o express */
app.listen(port, function () {
    console.log('Servidor rodando na porta: ' + port)
})

