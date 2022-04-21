const { Book } = require('../models')

class BookController {
    static editFormBook(req,res){
        const id = req.params.id;
        Book.findOne({
            where: { id }
        })
            .then(result => {
                res.render('editBook.ejs', { book: result });
            })
            .catch(err => {
                res.json(err);
            })
    }

    static editBook(req, res) {
        const id = req.params.id;
        const { task,status } = req.body;
        
        Book.update({
            task,
            status

        }, {
            where: { id }
        })
            .then(result => {
                if (result[0] === 1) {
                    res.redirect('/book')
                } else {
                    res.json('Update not done!')
                }
                // res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    }

    static deleteBook(req,res){
        const id = req.params.id;
        Book.destroy({
            where: { id }
        })
            .then((result) => {
                if(result === 1){
                    // res.json({ message : "Buku sudah dihapus!"})
                    res.redirect('/book')
                }else{
                    throw { message : "Buku tidak ditemukan!"}
                    
                }
                // res.redirect('/Book')
            })
            .catch(err => {
                res.json(err)
            })
    }    

}


module.exports = BookController


// router.get('/books/edit/:id', BookController.editBook)
// router.post('/books/edit/:id', BookController.addBook)
// router.get('/books/delete/:id', BookController.deleteBook)