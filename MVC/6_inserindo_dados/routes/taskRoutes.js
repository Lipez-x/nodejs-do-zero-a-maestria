const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.get('/', TaskController.showTasks)
router.get('/add', TaskController.formTask)
router.post('/add', TaskController.addTask)

module.exports = router