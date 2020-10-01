const router = require('express').Router()
const { Read } = require('../controllers/controllers')
const MiddleWares = require('../middlewares/middlerwares')

router.post('/', [MiddleWares.verify_schema], Read.read_controller)

module.exports = router