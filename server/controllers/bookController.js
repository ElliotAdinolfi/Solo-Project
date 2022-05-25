const { json } = require('express');
const db = require('../models/bookModels.js');

const bookController = {};

bookController.getBooks = (req, res, next) => {
    const query = 'SELECT * FROM books';
    db.query(query)
        .then(data => {
            console.log('some random text');
            res.locals.books = data.rows;
            console.log(res.locals.books);
            return next();
        })
        .catch(err => next(err));
}

bookController.newBook = (req, res, next) => {
    const query = `INSERT INTO Books (Title, Series, Author, Rating) VALUES (${req.body.title}, ${req.body.series}, ${req.body.author}, ${req.body.rating})`;
    console.log(req.body);
    db.query(query)
        .then(data => {
            res.locals.newBook = data;
            return next();
        })
        .catch(err => console.log(err));
}

module.exports = bookController;
