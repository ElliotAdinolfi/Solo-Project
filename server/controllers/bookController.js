const { json } = require('express');
const db = require('../models/bookModels.js');

const bookController = {};

bookController.getBooks = (req, res, next) => {
    const query = 'SELECT * FROM books';
    db.query(query)
        .then(data => {
            console.log(data)
            res.locals.books = data.rows;
            console.log(res.locals.books);
            return next;
        })
        .catch(err => next(err));
}