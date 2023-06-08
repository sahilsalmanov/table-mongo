const express = require('express');
const { booksController } = require('../controllers/booksController');

const booksRoutes = express.Router();


booksRoutes.get('/', booksController.getAll)
booksRoutes.get('/:id', booksController.getById)
booksRoutes.delete('/:id', booksController.delete)
booksRoutes.post('/', booksController.add)


module.exports = {
    booksRoutes
}