const { Book } = require('../models')

class BookController {
    static getBook(req, res){
        Book.findAll()
        .then(book => {
            res.json(book)
        })
        .catch(err => {
            res.json(err)

        })
    }
}