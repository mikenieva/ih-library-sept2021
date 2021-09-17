// bookController.js

const Book = require("./../models/Book")  

exports.listBooks = (req, res) => {

    // 1. ENCONTRAR LOS DATOS EN LA BASE DE DATOS
    Book.find({})
        .then((dbBooks) => {
            // 2. ENVIARLOS AL CLIENTE            
            res.render("books/index", {
                bookList: dbBooks
            })

        })
        .catch(() => {})
    
}

exports.create  = (req,res) => {

    res.render("books/create")

}

exports.createBook = (req, res) => {


    // 1. OBTENER LOS DATOS

    // const title = req.body.title
    // const description = req.body.description
    // const author = req.body.author
    // const rating    = req.body.rating

    // OBJECT DESTRUCTURING
    const { title, description, author, rating } = req.body

    // 2. INSERTAR LOS DATOS EN BASE DE DATOS
    Book.create({
        title,
        description,
        author,
        rating
    })
        .then((newBook) => {
            console.log(newBook)
            // 3. GENERAR UNA RESPUESTA AL CLIENTE
            res.redirect("/books")        
        })
        .catch((e) => {console.log(e)})

}

exports.oneBook = (req, res) => {

    const { bookid } = req.params

    Book.findById(bookid)
        .then((book) => {       
            
            res.render("books/single", book)
            
        })
        .catch((e) => {
            console.log(e)
        })



    

}