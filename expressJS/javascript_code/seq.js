const Sequelize = require('sequelize')

/* Conexão do bd: nomeBanco, nomeUser, senha, json de configuração */
const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'

})

/* Tratamento de exceção p verificar se o banco foi conectado com sucesso */
sequelize.authenticate().then(function () {
    console.log('Conectado com sucesso!')
}).catch(function (err) {
        console.log('Erro ao conectar: ' + err)
})

/* Criando Tabela/Models */
/* nomeTabela, json com os atributos e suas configurações */
const Post = sequelize.define('post', {
    titulo: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
})

const User = sequelize.define('users', {
    name: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

User.sync({force: true})