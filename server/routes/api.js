const express = require('express');

const bookController = require('../controllers/bookController');

const router = express.Router();

router.get('/', 
    bookController.getBooks,
    (req, res) => {
        res.status(200).json(res.locals.books);
    }
)

router.post('/',
    bookController.newBook,
    (req, res) => {
        res.status(200).json(res.locals.newBook);
    }
)

module.exports = router;