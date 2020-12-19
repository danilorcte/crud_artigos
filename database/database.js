const {Sequelize} = require('sequelize')

const connection = new Sequelize('guiapress','danilo','@Dm102030!',{
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;