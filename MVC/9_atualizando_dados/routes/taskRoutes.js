const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.get('/', TaskController.showTasks)
router.get('/add', TaskController.formTask)
router.post('/add', TaskController.addTask)
router.post('/updatestatus', TaskController.toggleTaskStatus)
router.get('/edit/:id', TaskController.updateTask)
router.post('/edit/:id', TaskController.updateTaskSave)
router.post('/remove/:id', TaskController.removeTask)

module.exports = router