const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const connection = require("./database/database");

const categoriesController1 = require('./categories/CategoriesController')
const articlesController = require("./articles/ArticlesController")

//Importando os Entity
const Article = require('./articles/Article')
const Category = require('./categories/Category')

// view engine
app.set('view engine', 'ejs')

//static
app.use(express.static('public'))

//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Database
connection
    .authenticate()
    .then(() => {
        console.log('Conexao feita com sucesso')
    }).catch((err) => {
        console.log(err)
    })

// Utilizar rotas do categeriesController
app.use('/', categoriesController1);
app.use('/', articlesController);

app.get('/', (req, res) => {
    res.render("index")
})

app.listen(8080, () => {
    console.log('servidor funcionando na porta 8080')
})