const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const connection = require("./database/database");

const categoriesController1 = require('./categories/CategoriesController')
const articlesController = require("./articles/ArticlesController")
const usersController = require("./users/UsersController")

//Importando os Entity
const Article = require('./articles/Article')
const Category = require('./categories/Category')
const User = require('./users/Users')

// view engined
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
app.use('/', usersController);

app.get('/', (req, res) => {
    Article.findAll({
        order: [
            ['id', 'DESC']
        ],
        limit: 4
    }).then(articles => {

        Category.findAll().then(categories => {
            
            res.render('index', {articles:articles, categories: categories})
        })

    })
})

app.get('/:slug', (req, res) => {
    var slug = req.params.slug
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        if(article != undefined){
            Category.findAll().then(categories => {
                res.render('article', {article:article, categories: categories})

            })
        }else{
            res.redirect("/")
        }
    }).catch(err => {
        res.redirect('/')
    })
})

app.get("/category/:slug", (req, res) => {
    var slug = req.params.slug;
    Category.findOne({
        where: {
            slug: slug
        },
        include: [{model: Article}]
    }).then(category => {
        if (category != undefined){
            Category.findAll().then(categories => {
                res.render('index', {articles: category.articles, categories: categories})
            })
        }else{
            res.redirect('/')
        }
    }).catch(err => {
        res.redirect('/');
    })
})

app.listen(8080, () => {
    console.log('servidor funcionando na porta 8080')
})