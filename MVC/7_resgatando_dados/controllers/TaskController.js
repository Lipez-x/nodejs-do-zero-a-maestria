const Task = require('../../2_models/models/task')

module.exports = class TaskController {

    static async addTask (req, res) {

        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }

        await Task.create(task)

        res.redirect('/tasks')

    }

    static formTask (req, res) {
        res.render('tasks/create')
    }

    static async showTasks (req, res) {
        const tasks = await Task.findAll({raw: true})

        res.render('tasks/all', {tasks})
    }
}