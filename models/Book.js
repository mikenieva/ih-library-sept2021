// models/Book.js

// 1. IMPORTACIONES
const mongoose      = require("mongoose")


// 2. SCHEMA
const bookSchema =  mongoose.Schema({
    title: String,
    description: String,
    author: String,
    rating: Number    
},{
    timestamps: true // INSERTA EN LA BASE DE DATOS LA FECHA EN QUE FUE CREADA
})



// 3. MODEL
const Book = mongoose.model("Book", bookSchema)


// 4. EXPORTACIÓN
module.exports = Book