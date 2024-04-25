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

app.post('/users/create', async (req, res) => {
    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter;

    const isSubscribed = newsletter === 'on'

    console.log(req.body)

    await User.create({name: name, occupation: occupation, newsletter: isSubscribed})
    res.redirect('/')
})

app.get('/users/create', (req, res) => {
    res.render('addUsers');
})

app.get('/users/:id', async (req, res) => {
    const id = req.params.id;

    const user = await User.findOne({raw: true, where: {id: id}})

    res.render('userview', {user: user})
})

app.get('/', async (req, res) => {
    const users = await User.findAll({raw: true})

    console.log(users)

    res.render('home', {users: users});
})

app.post('/users/delete/:id', async (req, res) => {
    const id = req.params.id;
    
    await User.destroy({where: {id: id}})

    res.redirect('/')
})

connection.sync().then(() => {
    app.listen(3000)
}).catch((err) => {console.error(error)})

