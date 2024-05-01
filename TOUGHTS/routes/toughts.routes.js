const express = require('express')
const ToughtsController = require('../controllers/ToughtsController')
const router = express.Router()
const checkAuth = require('../helpers/auth').checkAuth

router.get("/", ToughtsController.showToughts)
router.get("/dashboard", checkAuth,ToughtsController.dashboard)
router.get('/edit/:id', checkAuth, ToughtsController.updateToughts)
router.get("/add", checkAuth, ToughtsController.createToughts)
router.post('/edit', checkAuth, ToughtsController.updateToughtsPost)
router.post("/add", checkAuth, ToughtsController.createToughtsPost)
router.post('/delete', checkAuth, ToughtsController.deleteToughts)

module.exports = router