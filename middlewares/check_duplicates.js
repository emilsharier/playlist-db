const models = require('../models/models')
const mongoDB = require('../DB/db')
const db = mongoDB.getDB()

const checkForDuplicateEntry = async (req, res, next) => {
    try {
        let result = models.Users.validateAsync(req.body)
        let exists = await db.collection('Users').findOne({ email: req.body.email})
        if(exists != null && exists.email === req.body.email)
            next('Email ID exists')
        req.result = result
        next()
    }
    catch (ex) {
        console.error(ex)
        next(ex)
    }
}

module.exports = { checkForDuplicateEntry }