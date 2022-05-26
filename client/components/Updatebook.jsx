import React, { Component } from 'react';
import { useEffect, useState } from 'react';
const fetch = require('node-fetch');



const UpdateBook = props => {


    let titleInput;
    function titleData (e) {
        titleInput = e.target.value;
        console.log(titleInput)
        return titleInput;
    }

    let readInput;
    function readData (e) {
    readInput = e.target.value;
    return Number(readInput);
}

    function pressedButton () {
        // do fetch post here
        const updateBook = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: titleInput,
                read: readInput
            })
        }

        console.log('Entry to be updated: ', updateBook.body)
        
        fetch('/api/', updateBook)
            .then(res => res.json())
            .then(res => {
                console.log('API update req sent', res)
                document.location.refresh(true);
            })
            .catch(err => console.log('error sending api update req', err))
    }

    return (
        <span id="update">
            <h2>Update Progress</h2>
            <label for="title3">Title:</label>
            <input type="text" id="title3" onChange={titleData}></input>
            <label for="read">Pages Read:</label>
            <input type="text" id="read" onChange={readData}></input>
            <button onClick={pressedButton}>Update</button>
        </span>
    )
}

export default UpdateBook;
