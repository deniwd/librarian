const { Router } = require('express')
const router = Router()

const BookRoute = require('./book')

router.get('/', (reg, res) => {
    res.render('index.ejs', { message: "Test page" })
})


router.use('/books', BookRoute)

module.exports = router

