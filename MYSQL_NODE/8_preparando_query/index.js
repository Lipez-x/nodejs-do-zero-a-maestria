const { error } = require('console');
const express = require('express');
const exphbs = require('express-handlebars');
const pool = require('./db/connection')
const app = express();

app.use(express.urlencoded({
    extended: true
})
)

app.use(express.json())

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'))

app.post('/book/delete/:id', (req, res) => {
    const id = req.params.id

    const del = `DELETE FROM books WHERE ?? = ?`
    const data = ['id', id]
    pool.query(del, data, function(err) {
        if (err) {
            console.error(err);
        }

        res.redirect('/books')
    })
})

app.post('/book/updates/:id' , (req, res) => {
    const id = req.params.id
    const title = req.body.title
    const pageqtd = req.body.pageqtd

    const update = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`
    const data = ['title', title, 'pageqtd', pageqtd, 'id', id]


    pool.query(update, data, function(err) {
        if (err) {
            console.error(err)
            return
        }

        res.redirect('/books')
    })
})

app.get('/book/update/:id', (req, res) => {

    const id = req.params.id;

    const findById = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id', id]
    pool.query(findById, data, function(err, data) {
        if(err){
            console.error(err);
            return;
        }

        const book = data[0];

        res.render('editbook', {book})
    })
})

app.get('/book/:id', (req, res) => {
    const id = req.params.id;

    const findById = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id', id]

    pool.query(findById, data, function(err, data) {
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

    pool.query(findAll, function(err, data) {
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
    const pageqtd = req.body.pageqtd

    const create = `INSERT INTO books (??, ??) VALUE (?, ?)`
    const data = ['title', 'pageqtd', title, pageqtd]

    pool.query(create, data, function(err) {
        if (err) {
            console.error(err);
        }

        res.redirect('/')
    })
})

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(3000)
