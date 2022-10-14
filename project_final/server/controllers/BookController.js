const { Book } = require("../models")

class BookController {
    static async addBook(req, res) {
        const createBook = await Book.create({
            title: req.body.title,
            pages: req.body.pages,
            cover: req.file.filename,
            description: req.body.description,
            count: req.body.count,
            genre: req.body.genre,
            author: req.body.author,
        })

        const book = await Book.findOne({
            where: { id: createBook.id },
            include: { all: true }
        })
        res.send(book)
    }

    // static async getBooks(req, res) {
    //     const books = await Book.findAll({ include: { all: true } })
    //     res.send(books)
    // }
    static async getBooks(req, res) {
        let books = await Book.findAll({ include: { all: true } })
        res.send({ book: books })
    }
}
module.exports = { BookController }