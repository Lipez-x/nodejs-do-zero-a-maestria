const { error } = require('console');
const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'))

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