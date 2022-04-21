const { Router } = require('express')
const router = require('.')
const BookRoute = Router()

const BookController = require('../controllers/BookController')

// router.get('/books/edit/:id', BookController.getBook)
router.get('/books/edit/:id', BookController.editBook)
router.post('/books/edit/:id', BookController.addBook)
router.get('/books/delete/:id', BookController.deleteBook)

module.exports = router
