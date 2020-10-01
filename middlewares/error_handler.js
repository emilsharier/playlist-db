const error_handler = (err, req, res, next) => {
    console.error('Ran into some error 😢')
    console.error(err)
    return res.json({ message: err })
}

module.exports = { error_handler }