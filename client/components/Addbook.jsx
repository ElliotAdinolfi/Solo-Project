import React, { Component } from 'react';
import { useEffect, useState } from 'react';
const fetch = require('node-fetch');


const AddBook = props => {

// add onchange functions to hold data from input fields for each one

let titleInput;
function titleData (e) {
    titleInput = e.target.value;
    return titleInput;
}

let seriesInput;
function seriesData (e) {
    seriesInput = e.target.value;
    return seriesInput;
}

let authorInput;
function authorData (e) {
    authorInput = e.target.value;
    return authorInput;
}

let ratingInput;
function ratingData (e) {
    ratingInput = e.target.value;
    return Number(ratingInput);
}

let readInput;
function readData (e) {
    readInput = e.target.value;
    return Number(readInput);
}

let pagesInput;
function pagesData (e) {
    pagesInput = e.target.value;
    return Number(pagesInput);
}

function pressedButton () {
    // do fetch post here
    const postBook = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: titleInput, 
            series: seriesInput,
            author: authorInput,
            pagesRead: readInput,
            totalPages: pagesInput,
            rating: ratingInput
        })
    }
    console.log(postBook)
    fetch('/api/', postBook)
        .then(res => res.json())
        .then(res => {
            console.log('API post sent', res)
        })
        .catch(err => console.log('error sending api post req', err))
}


    return (
        <span id="newBook">
            <h2>Add New Book</h2>
            <label for="title">Title:</label>
            <input type="text" id="title" onChange={titleData}></input>
            <label for="series">Series:</label>
            <input type="text" id="series" onChange={seriesData}></input>
            <label for="author">Author:</label>
            <input type="text" id="author" onChange={authorData}></input>
            <label for="read">Pages Read:</label>
            <input type="text" id="read" onChange={readData}></input>
            <label for="pages">Total Pages:</label>
            <input type="text" id="pages" onChange={pagesData}></input>
            <label for="rating">Rating:</label>
            <input type="text" id="rating" onChange={ratingData}></input>
            <button onClick={pressedButton}>Add Book</button>
        </span>
    )
}

export default AddBook;