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

Post.create({
    titulo: 'Criando meu primeiro post com ORM Sequelize em NodeJs',
    content: 'Aprendnedo NodeJS e Sequelize! Me parece ser mais fácil que Hibernate o.o'
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

User.create({
    name: 'Mateus',
    age: 24,
    lastName: 'Vitor',
    email: 'mateusvitor@gmail.com'
})

