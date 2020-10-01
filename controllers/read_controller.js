const mongoDB = require('../DB/db')
const db = mongoDB.getDB()

const read_controller = async (req, res, next) => {
    try {
        let data = req.result
        const result = await db.collection('Users').insert(data)
        res.json(result)
    }
    catch (ex) {
        next(ex)
    }
}

module.exports = { read_controller }