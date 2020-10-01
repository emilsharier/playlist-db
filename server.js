const PORT = process.env.PORT || 3000

const express = require('express')
const morgan = require('morgan')

const mongoUtil = require('./DB/db')

mongoUtil.connect_to_server((err, client) => {
    if (err) console.log(err)
    const app = express()

    const { error_handler } = require('./middlewares/error_handler')

    app.use(morgan('dev'))
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(error_handler)

    require('./routes/index')(app)

    app.listen(PORT, () => {
        console.log(`Server up and running at ${PORT}`)
    })
})