const express = require('express')
const {Sequelize} = require('sequelize')
const handlebars = require('express-handlebars')

const app = express()
const port = 8081

/*Configurações básicas da aplicação */

    /* configurando template engine: templateEngine, página html default */
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    /* Configurando banco de dados */
    const sequelize = new Sequelize('test', 'root', '', {
        host: 'localhost',
        dialect: 'mysql'
    })


/* Roda o express */
app.listen(port, function () {
    console.log('Servidor rodando na porta: ' + port)
})

/* Verifica banco de dados */
sequelize.authenticate().then(function() {
    console.log('MySQL Rodando')
}).catch(function(err) {
    console.log('Erro ao inicializar Mysql: ' + err)
})