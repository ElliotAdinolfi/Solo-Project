const { json } = require('express');
const db = require('../models/bookModels.js');

const bookController = {};

bookController.getBooks = (req, res, next) => {
    const query = 'SELECT * FROM booklist ORDER BY author';
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
    const query = `INSERT INTO booklist (Title, Series, Author, Rating, Pages_Read, Total_Pages) VALUES ('${req.body.title}', '${req.body.series}', '${req.body.author}', ${req.body.rating}, ${req.body.pagesRead}, ${req.body.totalPages});`;
    console.log('query: ', req.body);
    db.query(query)
        .then(data => {
            res.locals.newBook = data;
            return next();
        })
        .catch(err => console.log(err));
}

bookController.deleteBook = (req, res, next) => {
    const query = `DELETE FROM booklist WHERE title='${req.body.title}';`;
    console.log('Delete Query: ', req.body);
    db.query(query) 
        .then(data => {
            res.locals.deleted = data;
            return next();
        })
        .catch(err => next(console.log('Error in deleteBook middleware: ', err)));
}

bookController.updateBook = (req, res, next) => {
    const query = `UPDATE booklist SET pages_read=${req.body.read} WHERE title='${req.body.title}';`
    console.log('Update Query: ', req.body);
    db.query(query)
        .then(data => {
            res.locals.updated = data;
            return next();
        })
        .catch(err => console.log('Error in UpdateBook middleware: ', err))
}

module.exports = bookController;
