const router = require('express').Router()
const { ReadAll } = require('../controllers/controllers')

router.get('/', ReadAll.read_all_controller)

module.exports = router