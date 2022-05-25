import React, { Component } from 'react';
import { useEffect, useState } from 'react';
const fetch = require('node-fetch');



const DeleteBook = props => {


    let titleInput;
    function titleData (e) {
        titleInput = e.target.value;
        console.log(titleInput)
        return titleInput;
    }

    function pressedButton () {
        // do fetch post here
        const deleteBook = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: titleInput
            })
        }

        console.log('Entry to be deleted: ', deleteBook.body)
        
        fetch('/api/', deleteBook)
            .then(res => res.json())
            .then(res => {
                console.log('API delete req sent', res)
            })
            .catch(err => console.log('error sending api delete req', err))
    }

    return (
        <span id="delete">
            <h2>Delete Entry</h2>
            <label for="title2">Title:</label>
            <input type="text" id="title2" onChange={titleData}></input>
            <button onClick={pressedButton}>Delete</button>
        </span>
    )
}

export default DeleteBook;