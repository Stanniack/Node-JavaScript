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
        /* callback: param com nome facultativo, render: página HTMl, envia um array com os dados do bd para a página HTML*/
        Post.findAll().then(function(getPosts) {
            answer.render('home.handlebars', {
                posts: getPosts
            })
        })
    })

    app.get('/cadastro', function(requestion, answer){
        answer.render('cadastrar.handlebars')
    })

    app.post('/create', function(requestion, answer) {
        /* Criando post com dados da página html por requestion */
        Post.create({
            title: requestion.body.titulo,
            content: requestion.body.conteudo
        }).then(function () {
            answer.redirect('/principal')
        }).catch(function(err) {
            answer.send('Falha ao criar o Post.' + err)
        })
    })

    app.get('/deletar/:id', function(requestion, answer) {
        Post.destroy({
            where: {'id': requestion.params.id}
        }).then(function() {
            answer.redirect('/principal')
        }).catch(function(err) {
            console.log('Erro ao deletar: ' + err)
            answer.redirect('/principal')
        })
    })


// -----------------------------------

/* Roda o express */
app.listen(port, function () {
    console.log('Servidor rodando na porta: ' + port)
})

