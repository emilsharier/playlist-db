const mongoDB = require('../DB/db')
const db = mongoDB.getDB()

const read_all_controller = async (req, res, next) => {
    try {
        const result = await db.collection('Users').find().toArray()
        if (!result) return next()
        return res.json(result)
    }
    catch (ex) {
        console.error(ex)
        next(ex)
    }
}

module.exports = { read_all_controller }