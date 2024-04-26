const express = require('express')
const exphbs = require('express-handlebars')
const connection = require('./db/connection')
const Task = require('./models/task')
const taskRoutes = require('./routes/taskRoutes')
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.use(express.static('public'))

app.use('/tasks', taskRoutes)

connection.sync().then(() => {
    app.listen(3000)
}).catch((err) => {console.error(err)})