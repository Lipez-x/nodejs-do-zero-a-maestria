const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')
const connection = require('./db/connection')
const Tought = require('./models/Tought')
const User = require('./models/User')
const ToughtsRoutes = require('./routes/toughts.routes')
const AuthRoutes = require('./routes/auth.routes')
const ToughtsController = require('./controllers/ToughtsController')
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({
    extended: true
})
)

app.use(express.json())

app.use(session({
    name: 'session',
    secret: 'secret_secreto',
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
        logFn: function () {},
        path: require('path').join(require('os').tmpdir(), 'sessions')
    }),
    cookie: {
        secure: false,
        maxAge: 360000,
        expires: new Date(Date.now() + 360000),
        httpOnly: true
    },
}),
)

app.use(flash())

app.use(express.static('public'))

app.use((req, res, next) => {

    if (req.session.userid) {
        res.locals.session = req.session
    }

    next()
})

app.use('/toughts', ToughtsRoutes)
app.use('/', AuthRoutes)

app.get('/', ToughtsController.showToughts)

connection.sync()
.then(() => {
    app.listen(3000)
})
.catch((error) => { console.error(error) })