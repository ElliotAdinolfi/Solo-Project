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

function pressedButton () {
    // do fetch post here
    const postBook = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
            title: titleInput, 
            series: seriesInput,
            author: authorInput,
            rating: ratingInput
        }
    }
    console.log(postBook.body)
    fetch('/api/', postBook)
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
}


    return (
        <div id="newBook">
            <label for="title">Title:</label>
            <input type="text" id="title" onChange={titleData}></input>
            <label for="series">Series:</label>
            <input type="text" id="series" onChange={seriesData}></input>
            <label for="author">Author:</label>
            <input type="text" id="author" onChange={authorData}></input>
            <label for="rating">Rating:</label>
            <input type="text" id="rating" onChange={ratingData}></input>
            <button onClick={pressedButton}>Add Book</button>
        </div>
    )
}

export default AddBook;