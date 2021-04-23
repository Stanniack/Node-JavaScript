const {Sequelize} = require('sequelize')

/* Configurando banco de dados */
const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    query: {raw:true}
})

/* Verifica banco de dados */
sequelize.authenticate().then(function() {
    console.log('MySQL Rodando')
}).catch(function(err) {
    console.log('Erro ao inicializar Mysql: ' + err)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}