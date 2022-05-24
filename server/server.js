const path = require('path');
const express = require('express');

const apiRouter = require('./routes/api.js');

const app = express();

const PORT = 3000;

app.use(express.json());


// finds static pages, may not be necessary
// app.use(express.static(path.resolve(__dirname, '../client')));



app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../client/index.js')));

// route handler to api for sql database
app.use('/api', apiRouter);


// 404 error handler for all pages that are not defined
app.use('*', (req, res) => res.status(404).send('Page not found'));

// global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}.`);
});

module.exports = app;
