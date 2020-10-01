const middlewares = require('../../middlewares/middlerwares')
const controller = require(`../../controllers/controllers`)

const router = require('express').Router()

router.post('/', [ middlewares.checkForDuplicateEntry ], controller.AuthController.signUp)

module.exports = router