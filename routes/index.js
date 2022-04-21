const { Router } = require('express')
const router = Router()

const BookRoute = require('./book')

router.get('/', (reg, res) => {
    res.json({
        home
    })
})


router.use('/books', BookRoute)

module.exports = router

