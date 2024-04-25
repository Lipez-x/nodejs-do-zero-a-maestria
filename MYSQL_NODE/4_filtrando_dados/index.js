const { error } = require('console');
const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

app.use(express.urlencoded({
    extended: true
})
)

app.use(express.json())

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'))

app.get('/book/:id', (req, res) => {
    const id = req.params.id;

    const findById = `SELECT * FROM books WHERE id = ${id}`

    connection.query(findById, function(err, data) {
        if (err) {
            console.error(err);
            return;
        }

        const book = data[0];

        res.render('book', {book})
    })
})

app.get('/books', (req, res) => {
    const findAll = `SELECT * FROM books`

    connection.query(findAll, function(err, data) {
        if (err) {
            console.error(err);
            return;
        }

        const books = data;
        res.render('books', {books})
    })
})

app.post('/books/insertbooks', (req, res) => {
    const title = req.body.title
    const pageqtd = req.body.pagesqtd

    const create = `INSERT INTO books (title, pageqtd) VALUE ('${title}', '${pageqtd}')`

    connection.query(create, function(err) {
        if (err) {
            console.error(err);
        }

        res.redirect('/')
    })
})

app.get('/', (req, res) => {
    res.render('home');
})

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

connection.connect(function (err) {

    if (err) {
        console.error(err);
    }

    console.log("Conectado ao banco de dados.")

    app.listen(3000)
})