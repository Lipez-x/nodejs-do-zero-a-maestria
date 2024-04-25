const { error } = require('console');
const express = require('express');
const exphbs = require('express-handlebars');
const connection = require('./db/connection');
const User = require('./models/user')
const Addres = require('./models/Addres')
const app = express();

app.use(express.urlencoded({
    extended: true
})
)

app.use(express.json())

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'))

app.post('/users/update/:id', async (req, res) => {
    const id = req.params.id
    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter

    if (newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }

    const userData = {
        id,
        name,
        occupation,
        newsletter
    }

    await User.update(userData, {where: {id: id}})

    res.redirect('/')
})

app.get('/users/update/:id', async (req, res) => {
    const id = req.params.id

    const user = await User.findOne({raw: true, where: { id: id }})

    res.render('useredit', {user})
})

app.post('/users/create', async (req, res) => {
    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter;

    if (newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }

    console.log(req.body)

    await User.create({ name, occupation, newsletter})
    res.redirect('/')
}) 

app.get('/users/create', (req, res) => {
    res.render('addUsers');
})

app.get('/users/:id', async (req, res) => {
    const id = req.params.id;

    const user = await User.findOne({ raw: true, where: { id: id } })

    res.render('userview', { user: user })
})

app.get('/', async (req, res) => {
    const users = await User.findAll({ raw: true })

    console.log(users)

    res.render('home', { users: users });
})

app.post('/users/delete/:id', async (req, res) => {
    const id = req.params.id;

    await User.destroy({ where: { id: id } })

    res.redirect('/')
})

connection
//.sync()
.sync({force: true})
.then(() => {
    app.listen(3000)
}).catch((err) => { console.error(error) })

