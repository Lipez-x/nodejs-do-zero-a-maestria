const { error } = require('console');
const express = require('express');
const exphbs = require('express-handlebars');
const connection = require('./db/connection');
const User = require('./models/user')
const app = express();

app.use(express.urlencoded({
    extended: true
})
)

app.use(express.json())

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home');
})

connection.sync().then(() => {
    app.listen(3000)
}).catch((err) => {console.error(error)})

