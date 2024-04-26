const Task = require('../../2_models/models/task')

module.exports = class TaskController {
    static createTask (req, res) {
        res.render('task/create')
    }
}