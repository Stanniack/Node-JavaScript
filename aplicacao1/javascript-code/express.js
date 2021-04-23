const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

/**/
const Post = require('../models/Post.js')

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

    app.get('/principal', function(requestion, answer) {
        Post.findAll().then(function(getPosts) {
            answer.render('home.handlebars', {
                posts: getPosts
            })
        })
    })

    app.get('/cadastro', function(requestion, answer){
        answer.render('form.handlebars')
    }) 

    app.post('/app', function(requestion, answer) {
        Post.create({
            title: requestion.body.titulo,
            content: requestion.body.conteudo
        }).then(function () {
            answer.redirect('/principal')
        }).catch(function(err) {
            answer.send('Falha ao criar o Post.' + err)
        })
    })


// -----------------------------------

/* Roda o express */
app.listen(port, function () {
    console.log('Servidor rodando na porta: ' + port)
})

