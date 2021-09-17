// routes/books.js

// 1. IMPORTACIONES
const express       = require("express")
const router        = express.Router()

const bookController    = require("./../controllers/bookController")


// 2. MANEJO DE RUTAS
// http://localhost:3000/books

// a. VER LIBROS
router.get("/", bookController.listBooks)

// b. CREACIÓN DE LIBRO
// GENERAR LA VISTA
router.get("/create", bookController.create)
// TRABAJAR EL FORMULARIO (SEND)
router.post("/createbook", bookController.createBook)

// c. VER UN SOLO LIBRO
router.get("/:bookid", bookController.oneBook)



// 3. EXPORTACIÓN
module.exports = router

